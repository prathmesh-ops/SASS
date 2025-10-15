# DoNotCall - DNC Registry Management Platform

A modern, multi-tenant SaaS platform for DNC (Do Not Call) registry management with compliance tracking and verification.

## 🎨 Design System

This project follows a **dark theme with orange accents** inspired by modern SaaS platforms:

- **Primary Color**: Orange (#ff5722)
- **Background**: Dark (#0a0a0a, #1a1a1a)
- **Accent Colors**: Success (Green), Error (Red), Warning (Yellow), Info (Blue)
- **Typography**: Inter font family
- **Components**: Built with Radix UI and styled with TailwindCSS

## 🚀 Features

### SaaS Admin / Super Admin Panel
- Organization onboarding with custom subdomains
- Subscription plan management (Free, Basic, Premium)
- Stripe integration for payments
- Feature restriction per tenant
- Frontend customization (branding, colors, logos)

### Agent Web Portal
- Multi-step compliance wizard (TCPA, National DNC)
- Dashboard with activity overview
- Single and bulk number verification
- Internal DNC (IDNC) management
- AI/Voice verification
- Browser extension support
- WhatsApp bot integration
- Mobile app (React Native)

### Admin Web Panel
- Comprehensive dashboard with analytics
- Agent management
- Internal DNC registry management
- Activity logs and audit trails
- Compliance terms CMS
- AI-powered insights
- National DNC integration
- Reports and exports

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **HTTP Client**: Axios

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd saas
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   NEXT_PUBLIC_STRIPE_KEY=your_stripe_public_key
   DATABASE_URL=your_database_url
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
saas/
├── app/
│   ├── auth/
│   │   ├── login/
│   │   └── signup/
│   ├── agent/
│   │   ├── dashboard/
│   │   ├── verify/
│   │   ├── entries/
│   │   └── bulk/
│   ├── admin/
│   │   ├── dashboard/
│   │   ├── agents/
│   │   ├── registry/
│   │   └── reports/
│   ├── super-admin/
│   │   ├── organizations/
│   │   ├── subscriptions/
│   │   └── billing/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── dashboard/
│   └── shared/
├── lib/
│   ├── utils.ts
│   └── api.ts
├── public/
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## 🎯 Key Pages

### Landing Page (`/`)
- Hero section with value proposition
- Feature showcase
- Stats and social proof
- Integration highlights
- CTA sections

### Authentication
- **Login** (`/auth/login`) - Email/password authentication
- **Signup** (`/auth/signup`) - Multi-step registration with organization setup

### Agent Portal
- **Dashboard** (`/agent/dashboard`) - Activity overview and quick actions
- **Verify** (`/agent/verify`) - Single number verification
- **My Entries** (`/agent/entries`) - Manage IDNC entries
- **Bulk Operations** (`/agent/bulk`) - CSV upload and bulk verification

### Admin Panel
- **Dashboard** (`/admin/dashboard`) - Analytics and insights
- **Agent Management** (`/admin/agents`) - Manage agents
- **Registry** (`/admin/registry`) - IDNC management
- **Reports** (`/admin/reports`) - Export and analytics

### Super Admin
- **Organizations** (`/super-admin/organizations`) - Tenant management
- **Subscriptions** (`/super-admin/subscriptions`) - Plan management
- **Billing** (`/super-admin/billing`) - Stripe integration

## 🎨 Design Tokens

### Colors
```css
/* Primary */
--dnc-orange: #ff5722
--dnc-orange-light: #ff7043
--dnc-orange-dark: #e64a19

/* Dark Theme */
--dnc-dark: #0a0a0a
--dnc-dark-lighter: #1a1a1a
--dnc-dark-card: #141414
--dnc-dark-border: #2a2a2a

/* Status Colors */
--dnc-success: #10b981
--dnc-warning: #f59e0b
--dnc-error: #ef4444
--dnc-info: #3b82f6
```

### Utility Classes
- `.btn-primary` - Orange primary button
- `.btn-secondary` - Dark secondary button
- `.input-dark` - Dark themed input
- `.card-dark` - Dark themed card
- `.status-callable` - Green status badge
- `.status-restricted` - Red status badge
- `.glass-effect` - Glassmorphism effect

## 🔐 Authentication Flow

1. User signs up with organization email
2. Email verification sent
3. Multi-step compliance wizard
4. TCPA and DNC policy acceptance
5. Access granted to dashboard

## 📊 Compliance Features

- **TCPA Compliance**: Automated tracking and verification
- **National DNC Integration**: Real-time sync with national registry
- **Audit Trails**: Complete activity logging
- **Consent Management**: Track all user acceptances
- **Reporting**: Compliance reports for regulatory requirements

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Docker
```bash
docker build -t donotcall-saas .
docker run -p 3000:3000 donotcall-saas
```

### Manual
```bash
npm run build
npm start
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 📝 Environment Variables

```env
# API
NEXT_PUBLIC_API_URL=http://localhost:3001

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/donotcall

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Stripe
NEXT_PUBLIC_STRIPE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# National DNC API
NDNC_API_URL=https://api.ndnc.gov
NDNC_API_KEY=your-api-key

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-password

# AI Services
OPENAI_API_KEY=sk-...
SPEECH_TO_TEXT_API_KEY=your-key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [Zencoder](https://zencoder.com)
- Icons by [Lucide](https://lucide.dev)
- UI components by [Radix UI](https://radix-ui.com)
- Styling by [TailwindCSS](https://tailwindcss.com)

## 📞 Support

For support, email support@donotcall.com or join our Slack channel.

## 🗺️ Roadmap

- [x] Landing page
- [x] Authentication system
- [x] Agent dashboard
- [ ] Number verification
- [ ] IDNC management
- [ ] Bulk operations
- [ ] Admin panel
- [ ] Super admin panel
- [ ] Mobile app
- [ ] Browser extension
- [ ] WhatsApp bot
- [ ] Voice bot
- [ ] AI insights

---

**Built with ❤️ by the DoNotCall team**
