# React Portfolio with Tailwind v4 and Node.js 22

A cutting-edge portfolio website built with React v19, Tailwind CSS v4, and Node.js 22. Features a dark theme with smooth animations, admin dashboard, and real-time visitor tracking.

## 🚀 Features

- **Modern Dark Design**: Sleek UI with blue/purple gradients and smooth animations
- **Admin Dashboard**: Secure admin panel at `/login` for content management
- **Real-time Analytics**: Visitor tracking with MongoDB Atlas storage
- **Discord Integration**: Automatic notifications for new visitors and messages
- **SEO Optimized**: LD+JSON schema markup for enhanced Google visibility
- **Responsive Design**: Perfect on all devices from mobile to desktop
- **Contact System**: Functional contact form with email notifications
- **Loading Screen**: Beautiful animated loader on initial page load
- **Achievements Section**: Showcase certificates and accomplishments

## 🛠️ Tech Stack

- **Frontend**: React v19, TypeScript, Vite
- **Styling**: Tailwind CSS v4, Framer Motion
- **Backend**: Node.js 22, Express.js, MongoDB Atlas
- **Authentication**: JWT tokens
- **Deployment**: Optimized for Netlify
- **UI Components**: Radix UI, Lucide React icons

## 📋 Setup Instructions

### 1. Environment Variables

Create a `.env` file based on `.env.example`:

```bash
# MongoDB Atlas connection string
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/

# Discord webhook URL for notifications
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/your-webhook-url

# Admin credentials for dashboard
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=$2a$10$Oe7y8Q/Vh5i5Q7y8Q/Vh5i5Q7y8Q/Vh5i5Q7y8Q/Vh5i5Q7y8Q/O

# JWT secret for admin authentication
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### 2. Installation

```bash
npm install
```

### 3. Development

```bash
# Start both frontend and backend
npm start

# Or run separately
npm run dev      # Frontend only
npm run server   # Backend only
```

### 4. Build

```bash
npm run build
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.tsx` - Name, title, description
- `src/components/About.tsx` - Services and descriptions  
- `src/components/Portfolio.tsx` - Projects and portfolio items
- `src/components/Skills.tsx` - Skills and experience timeline
- `src/components/Achievements.tsx` - Certifications and achievements
- `src/components/Contact.tsx` - Contact information
- `index.html` - SEO metadata

### Styling

The design uses a dark theme with customizable colors in `src/index.css`:

- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Background: Dark gray (#0D0D0F)

## 📱 Features Overview

### Loading Screen
Beautiful animated loader with progress bar and floating logo.

### Hero Section
- Animated greeting and introduction
- Gradient text effects
- Floating profile image with decorative elements
- Call-to-action buttons

### Portfolio Showcase
- Filterable project grid
- Hover effects and animations
- Live demo and GitHub links
- Technology tags

### Skills & Experience
- Animated skill icons
- Interactive timeline
- Hover effects and transitions

### Admin Dashboard
- Visitor analytics
- Contact message management
- Real-time statistics
- Secure authentication

### Contact System
- Functional contact form
- MongoDB storage
- Discord notifications
- Form validation

## 🚀 Deployment

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Set environment variables in Netlify dashboard
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Environment Variables for Production

Make sure to set all environment variables in your deployment platform:

- `MONGODB_URI`
- `DISCORD_WEBHOOK_URL`
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD_HASH`
- `JWT_SECRET`

## 📈 Analytics & Monitoring

- **Visitor Tracking**: Automatic IP and user agent logging
- **Discord Notifications**: Real-time alerts for visits and messages
- **Admin Dashboard**: Visual analytics and message management
- **Contact Analytics**: Track engagement and response rates

## 🔒 Security

- JWT-based admin authentication
- Environment variable protection
- Input validation and sanitization
- Rate limiting ready (implement as needed)

## 🎯 Performance

- Optimized images and assets
- Lazy loading components
- Efficient animations with Framer Motion
- Minimal bundle size with tree shaking

## 📞 Support

For questions or customization requests, reach out via:
- Email: arafat.aman.alim@gmail.com
- LinkedIn: [Arafat Alim](https://www.linkedin.com/in/arafat-alim/)
- GitHub: [Arafat-alim](https://github.com/Arafat-alim)

---

Built with ❤️ by [Arafat Alim](https://dev-arafat.netlify.app)