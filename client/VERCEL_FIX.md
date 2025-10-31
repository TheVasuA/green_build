# Vercel Deployment Fix

## Issue Fixed
The error was caused by incorrect file structure for Vercel serverless functions in a Vite project.

### Before (Incorrect - Next.js style):
```
pages/api/send-enquiry.js
```

### After (Correct - Vite/Standard style):
```
api/send-enquiry.js
```

## Changes Made:

1. **Moved API function**: `pages/api/send-enquiry.js` → `api/send-enquiry.js`
2. **Updated vercel.json**: Changed function path from `pages/api/send-enquiry.js` to `api/send-enquiry.js`
3. **Updated documentation**: Fixed file structure references

## Vercel Configuration:
```json
{
  "functions": {
    "api/send-enquiry.js": {
      "maxDuration": 10
    }
  },
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

The deployment should now work correctly! ✅