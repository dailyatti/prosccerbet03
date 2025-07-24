# ProSoft Hub - Professional Sports Betting Tools

A comprehensive platform providing AI-powered tools for sports betting professionals, featuring arbitrage calculators, VIP tips, and advanced prompt generation.

## 🚀 Features

- **AI Prompt Generator** - Generate professional prompts from text or images
- **Arbitrage Calculator** - Find profitable arbitrage opportunities across bookmakers
- **VIP Tips** - Access exclusive betting insights and professional analysis
- **Whop Integration** - Seamless subscription management and payment processing
- **User Management** - Trial periods, subscription tracking, and admin controls
- **Real-time Sync** - Webhook-based synchronization with Whop platform

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Framer Motion
- **Backend**: Supabase (PostgreSQL + Edge Functions)
- **Authentication**: Supabase Auth + Whop OAuth
- **Payments**: Whop Integration
- **Deployment**: Vercel/Netlify ready

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Whop account for payments

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Copy the example environment file and configure it:
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your actual values:
   ```env
   VITE_SUPABASE_URL=https://yrjkfpmcvdwbrgkgqgcwi.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyamtmcG1jdmR3YnJna3FnY3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyOTU2NTgsImV4cCI6MjA2ODg3MTY1OH0.1q1z1_0kD_ijRTM8YKH6_FgSs2lgWw5mUj6q8FNwWCk
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   VITE_STRIPE_PUBLISHABLE_KEY_TEST=your_stripe_test_publishable_key
   VITE_APP_NAME=ProSoft Hub
   VITE_APP_VERSION=1.0.0
   ```

   **Note:** The Supabase configuration is already set up. You only need to add your Stripe keys.

4. **Supabase Setup**
   - Create a new Supabase project at https://supabase.com
   - Run the migrations in `supabase/migrations/` folder in order
   - Set up the edge functions for Stripe integration
   - Configure environment variables in Supabase dashboard

5. **Stripe Integration**
   - Create a Stripe account at https://stripe.com
   - Set up your products and pricing in Stripe dashboard
   - Configure webhook endpoints in Stripe dashboard
   - Update the price IDs in `src/stripe-config.ts`

## 🗄️ Database Setup

Run the following migrations in order:

1. `20250723185626_soft_island.sql` - Fix prompt_generations table
2. `20250723213751_bold_dream.sql` - Create users table
3. `20250723220000_whop_integration.sql` - Base integration tables
4. `20250724091727_peaceful_meadow.sql` - Additional user fields
5. `20250724092517_black_cake.sql` - Tips table
6. `20250724102233_soft_rice.sql` - User bans table
7. `20250724102932_violet_grove.sql` - Stripe integration tables
8. `20250724104611_turquoise_dream.sql` - Additional Stripe fields
9. `20250724105619_muddy_river.sql` - Webhook tracking
10. `20250724112405_rough_credit.sql` - Invoice tracking
11. `20250724112445_misty_wave.sql` - Product management
12. `20250724112523_orange_ember.sql` - Price management
13. `20250724112622_shy_manor.sql` - Customer management
14. `20250724112711_restless_fire.sql` - Subscription management
15. `20250724113027_dawn_grass.sql` - Final optimizations

## 🔐 Environment Variables

### Frontend (.env.local)
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
VITE_STRIPE_PUBLISHABLE_KEY_TEST=your_stripe_test_publishable_key
```

### Supabase (Dashboard)
```env
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

## 🚀 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🌐 Deployment

### Netlify Deployment

1. **Connect to GitHub**
   - Push your code to GitHub
   - Connect your repository to Netlify
   - Set environment variables in Netlify dashboard

2. **Environment Variables in Netlify**
   ```
   VITE_SUPABASE_URL=https://yrjkfpmcvdwbrgkgqgcwi.supabase.co
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   VITE_STRIPE_PUBLISHABLE_KEY_TEST=your_stripe_test_publishable_key
   VITE_APP_NAME=ProSoft Hub
   VITE_APP_VERSION=1.0.0
   ```

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

### GitHub Actions (Automatic Deployment)

The project includes GitHub Actions workflow for automatic deployment to Netlify. Set up the following secrets in your GitHub repository:

- `NETLIFY_AUTH_TOKEN`: Your Netlify auth token
- `NETLIFY_SITE_ID`: Your Netlify site ID
- `VITE_SUPABASE_URL`: Supabase URL
- `VITE_SUPABASE_ANON_KEY`: Supabase anon key
- `VITE_STRIPE_PUBLISHABLE_KEY`: Stripe publishable key
- `VITE_STRIPE_PUBLISHABLE_KEY_TEST`: Stripe test publishable key

## 🔗 Whop Integration

### Webhook Setup
1. In Whop dashboard, set webhook URL to:
   ```
   https://your-project.supabase.co/functions/v1/whop-webhook
   ```

2. Configure webhook events:
   - `payment.completed`
   - `subscription.created`
   - `subscription.updated`
   - `subscription.cancelled`
   - `subscription.expired`

### Subscription Flow
1. User signs up for trial (3 days)
2. User can upgrade to premium via Whop
3. Webhooks automatically sync subscription status
4. Access control based on subscription status

## 📱 User Experience

### Trial Users
- 3-day free trial with full access
- Upgrade prompts throughout the trial
- Seamless transition to paid subscription

### Premium Users
- Full access to all tools
- Priority support
- Advanced features and insights

### Admin Features
- User management dashboard
- Subscription monitoring
- Webhook logs and sync status
- Analytics and reporting

## 🛡️ Security

- Row Level Security (RLS) enabled on all tables
- Webhook signature verification
- Environment variable protection
- Admin-only access to sensitive operations

## 📊 Monitoring

### Webhook Monitoring
- All webhook events are logged in `whop_webhooks` table
- Sync operations tracked in `whop_sync_logs` table
- Error handling and retry mechanisms

### User Analytics
- Subscription status tracking
- Trial conversion rates
- Tool usage analytics

## 🚀 Deployment

### Vercel
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Netlify
1. Connect GitHub repository
2. Set environment variables
3. Configure build settings

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🔧 Troubleshooting

### Common Issues

1. **Webhook not receiving events**
   - Check webhook URL in Whop dashboard
   - Verify webhook secret in Supabase
   - Check Supabase function logs

2. **Subscription sync issues**
   - Verify `sync_user_subscription` function exists
   - Check webhook processing logs
   - Ensure proper user mapping

3. **Authentication errors**
   - Verify Supabase configuration
   - Check environment variables
   - Ensure RLS policies are correct

### Debug Mode
Enable debug logging by setting:
```env
VITE_DEBUG=true
```

## 📈 Performance

- Lazy loading for components
- Optimized images and assets
- Efficient database queries with proper indexing
- CDN-ready static assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary software. All rights reserved.

## 🆘 Support

For support and questions:
- Email: support@prosofthub.com
- Documentation: [docs.prosofthub.com](https://docs.prosofthub.com)
- Issues: [GitHub Issues](https://github.com/dailyatti/prosoccerbet/issues)

## 🔄 Changelog

### v1.0.0 (2025-01-27)
- Initial release
- Whop integration
- AI tools implementation
- User management system
- Trial and subscription flows