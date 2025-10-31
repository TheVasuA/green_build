# Green Build - Electrical Solutions Website

## 🚀 Deployment Instructions

### Vercel Deployment with Email Functionality

#### 1. Prerequisites
- Vercel account
- SMTP email provider (Gmail, Outlook, or custom)

#### 2. Environment Variables Setup

In your Vercel dashboard, add these environment variables:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

#### 3. Gmail Setup (Recommended)
1. Enable 2-factor authentication on your Gmail account
2. Go to Google Account settings → Security → 2-Step Verification
3. Generate an "App Password" for "Mail"
4. Use this app password as `SMTP_PASS`

#### 4. Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### 5. API Endpoint

The enquiry form will send data to: `/api/send-enquiry`

This serverless function will:
- Validate form data
- Generate professional HTML email
- Send email to info@greenbuild.co
- Return success/error response

#### 6. Testing

1. Fill out the enquiry form on the website
2. Check the email at info@greenbuild.co
3. Verify all form data is included in the email

## 📧 Email Features

- Professional HTML email template
- Complete form data organization
- Business-priority formatting
- Automatic response timestamps
- Lead source tracking

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# For local email testing, create .env.local:
cp .env.example .env.local
# Then add your actual SMTP credentials
```

## 📁 Project Structure

```
client/
├── api/
│   └── send-enquiry.js        # Vercel serverless function
├── src/
│   ├── pages/
│   │   └── Enquiry.jsx        # Contact form
│   └── components/            # React components
├── vercel.json                # Vercel configuration
└── .env.example               # Environment variables template
```

## 🔧 Troubleshooting

### Common Issues:

1. **Email not sending**
   - Check environment variables in Vercel dashboard
   - Verify SMTP credentials
   - Check Vercel function logs

2. **API route not found**
   - Ensure `api/send-enquiry.js` exists
   - Verify vercel.json configuration

3. **CORS errors**
   - API includes CORS headers
   - Check network tab for actual error

### Support

For issues or questions, contact the development team.