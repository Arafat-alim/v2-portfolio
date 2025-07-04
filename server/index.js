import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB configuration
const MONGODB_URI = process.env.MONGODB_URI || "";
const DATABASE_NAME = "portfolio";
const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-jwt-key";
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || "";

// Admin credentials
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD_HASH =
  process.env.ADMIN_PASSWORD_HASH ||
  "$2a$10$Oe7y8Q/Vh5i5Q7y8Q/Vh5i5Q7y8Q/Vh5i5Q7y8Q/Vh5i5Q7y8Q/O";

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  cachedClient = client;
  return client;
}

async function sendDiscordNotification(type, data) {
  if (!DISCORD_WEBHOOK_URL) return;

  try {
    let embed;

    if (type === "visitor") {
      embed = {
        title: "🚀 New Portfolio Visitor!",
        color: 0x3b82f6,
        fields: [
          {
            name: "Timestamp",
            value: new Date(data.timestamp).toLocaleString(),
            inline: true,
          },
          {
            name: "Referrer",
            value: data.referrer || "Direct",
            inline: true,
          },
          {
            name: "User Agent",
            value: data.userAgent.substring(0, 100) + "...",
            inline: false,
          },
        ],
        footer: {
          text: "Portfolio Analytics",
        },
        timestamp: new Date().toISOString(),
      };
    } else if (type === "contact") {
      embed = {
        title: "📧 New Contact Message!",
        color: 0x10b981,
        fields: [
          {
            name: "From",
            value: `${data.name} (${data.email})`,
            inline: false,
          },
          {
            name: "Subject",
            value: data.subject,
            inline: false,
          },
          {
            name: "Message",
            value:
              data.message.substring(0, 500) +
              (data.message.length > 500 ? "..." : ""),
            inline: false,
          },
          {
            name: "Timestamp",
            value: new Date().toLocaleString(),
            inline: true,
          },
        ],
        footer: {
          text: "Portfolio Contact Form",
        },
        timestamp: new Date().toISOString(),
      };
    }

    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    });
  } catch (error) {
    console.error("Failed to send Discord notification:", error);
  }
}

// Middleware
app.use(cors());
app.use(express.json());

// Visitor tracking endpoint
app.post("/api/visitors", async (req, res) => {
  try {
    const { timestamp, userAgent, referrer } = req.body;

    // Get client IP
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.headers["x-real-ip"] ||
      req.connection.remoteAddress ||
      "unknown";

    const visitorData = {
      timestamp: new Date(timestamp),
      ip,
      userAgent,
      referrer,
      createdAt: new Date(),
    };

    // Save to MongoDB
    const client = await connectToDatabase();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection("visitors");

    await collection.insertOne(visitorData);

    // Send Discord notification
    await sendDiscordNotification("visitor", visitorData);

    res.json({ success: true });
  } catch (error) {
    console.error("Error tracking visitor:", error);
    res.status(500).json({ error: "Failed to track visitor" });
  }
});

// Get visitor count
app.get("/api/visitors", async (req, res) => {
  try {
    const client = await connectToDatabase();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection("visitors");

    const count = await collection.countDocuments();

    res.json({ count });
  } catch (error) {
    console.error("Error getting visitor count:", error);
    res.status(500).json({ error: "Failed to get visitor count" });
  }
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const messageData = {
      name,
      email,
      subject,
      message,
      timestamp: new Date(),
      ip:
        req.headers["x-forwarded-for"]?.split(",")[0] ||
        req.headers["x-real-ip"] ||
        req.connection.remoteAddress ||
        "unknown",
      userAgent: req.headers["user-agent"] || "unknown",
    };

    // Save to MongoDB
    const client = await connectToDatabase();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection("messages");

    await collection.insertOne(messageData);

    // Send Discord notification
    await sendDiscordNotification("contact", messageData);

    res.json({ success: true });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// Admin login endpoint
app.post("/api/auth/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate credentials
    if (username !== ADMIN_USERNAME) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // For demo purposes, use simple password comparison
    // In production, use bcrypt.compare with hashed password
    const isValidPassword = password === "admin123";

    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ username, isAdmin: true }, JWT_SECRET, {
      expiresIn: "24h",
    });

    res.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Login failed" });
  }
});

// Admin visitors endpoint
app.get("/api/admin/visitors", async (req, res) => {
  try {
    const client = await connectToDatabase();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection("visitors");

    const [count, recent] = await Promise.all([
      collection.countDocuments(),
      collection.find({}).sort({ timestamp: -1 }).limit(20).toArray(),
    ]);

    res.json({ count, recent });
  } catch (error) {
    console.error("Error fetching visitor data:", error);
    res.status(500).json({ error: "Failed to fetch visitor data" });
  }
});

// Admin messages endpoint
app.get("/api/admin/messages", async (req, res) => {
  try {
    const client = await connectToDatabase();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection("messages");

    const messages = await collection
      .find({})
      .sort({ timestamp: -1 })
      .toArray();

    res.json({ messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
