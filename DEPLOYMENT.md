# ProSoft Hub - Deployment Guide

## 🚀 Quick Deployment

### Option 1: Netlify (Recommended)

1. **Fork/Clone the Repository**
   ```bash
   git clone https://github.com/dailyatti/prosccerbet03.git
   cd prosccerbet03
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Environment Variables**
   Create a `.env.local` file:
   ```env
   VITE_SUPABASE_URL=https://yrjkfpmcvdwbrgkgqgcwi.supabase.co
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   VITE_STRIPE_PUBLISHABLE_KEY_TEST=your_stripe_test_publishable_key
   VITE_APP_NAME=ProSoft Hub
   VITE_APP_VERSION=1.0.0
   ```

4. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Add environment variables in Netlify dashboard

### Option 2: Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Option 3: GitHub Pages

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Enable GitHub Pages in repository settings
   - Set source to GitHub Actions
   - The workflow will automatically deploy

## 🔧 Environment Setup

### Required Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_SUPABASE_URL` | Supabase project URL | `https://your-project.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |
| `VITE_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | `pk_test_...` |
| `VITE_STRIPE_PUBLISHABLE_KEY_TEST` | Stripe test key | `pk_test_...` |
| `VITE_APP_NAME` | Application name | `ProSoft Hub` |
| `VITE_APP_VERSION` | Application version | `1.0.0` |

### Supabase Setup

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create new project
   - Copy project URL and anon key

2. **Run Migrations**
   ```sql
   -- Run all migrations in supabase/migrations/ folder
   -- in order from oldest to newest
   ```

3. **Configure Edge Functions**
   - Deploy edge functions for Stripe integration
   - Set up webhook endpoints

### Stripe Setup

1. **Create Stripe Account**
   - Go to [stripe.com](https://stripe.com)
   - Create account and get API keys

2. **Configure Products**
   - Create products in Stripe dashboard
   - Update price IDs in `src/stripe-config.ts`

3. **Set Up Webhooks**
   - Configure webhook endpoints
   - Add webhook secret to environment variables

## 🛠️ Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Type checking
npm run type-check

# Linting
npm run lint

# Preview build
npm run preview

# Deploy to Netlify
npm run deploy
```

## 📁 Project Structure

```
project/
├── src/
│   ├── components/          # React components
│   ├── contexts/           # React contexts
│   ├── lib/               # Utility libraries
│   ├── types/             # TypeScript types
│   └── main.tsx           # Entry point
├── supabase/
│   ├── functions/         # Edge functions
│   └── migrations/        # Database migrations
├── .github/
│   └── workflows/         # GitHub Actions
├── netlify.toml          # Netlify configuration
├── package.json          # Dependencies
└── README.md             # Documentation
```

## 🔒 Security Considerations

1. **Environment Variables**
   - Never commit `.env.local` to version control
   - Use environment variables in production
   - Rotate keys regularly

2. **API Keys**
   - Keep Stripe secret keys server-side only
   - Use Supabase RLS (Row Level Security)
   - Validate all user inputs

3. **CORS Configuration**
   - Configure allowed origins in Supabase
   - Set up proper CORS headers

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version (requires 18+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Environment Variables Not Working**
   - Ensure variables start with `VITE_`
   - Restart development server
   - Check Netlify environment variables

3. **Supabase Connection Issues**
   - Verify project URL and keys
   - Check network connectivity
   - Ensure project is active

### Support

For issues and questions:
- Check the [README.md](README.md)
- Review [Supabase documentation](https://supabase.com/docs)
- Check [Stripe documentation](https://stripe.com/docs) 