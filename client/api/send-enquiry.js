import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    // Personal Information
    firstName,
    lastName,
    email,
    phone,
    
    // Company Information
    company,
    designation,
    industry,
    companySize,
    website,
    
    // Project Details
    projectType,
    budget,
    timeline,
    location,
    requirements,
    
    // Additional Information
    source,
    message
  } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !email || !phone || !company || !projectType || !requirements) {
    return res.status(400).json({ 
      error: 'Missing required fields',
      required: ['firstName', 'lastName', 'email', 'phone', 'company', 'projectType', 'requirements']
    });
  }

  try {
    // Create transporter using environment variables
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Generate professional email content
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Enquiry - Green Build</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #059669 0%, #10b981 100%);
            color: white;
            padding: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
          }
          .content {
            padding: 40px;
          }
          .section {
            margin-bottom: 30px;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 20px;
          }
          .section:last-child {
            border-bottom: none;
            margin-bottom: 0;
          }
          .section-title {
            color: #059669;
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
          }
          .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
          }
          .info-item {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #059669;
          }
          .info-label {
            font-weight: 600;
            color: #374151;
            margin-bottom: 5px;
          }
          .info-value {
            color: #6b7280;
          }
          .message-box {
            background: #f0f9ff;
            border: 1px solid #bfdbfe;
            border-radius: 8px;
            padding: 20px;
            margin-top: 15px;
          }
          .priority {
            background: #fef2f2;
            border-color: #fecaca;
            color: #991b1b;
            padding: 10px 15px;
            border-radius: 6px;
            margin-top: 20px;
            font-weight: 600;
          }
          .footer {
            background: #f9fafb;
            padding: 30px;
            text-align: center;
            color: #6b7280;
            border-top: 1px solid #e5e7eb;
          }
          .contact-info {
            margin-top: 20px;
          }
          .contact-info a {
            color: #059669;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏗️ New Business Enquiry</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Green Build - Electrical Solutions</p>
          </div>
          
          <div class="content">
            <!-- Personal Information -->
            <div class="section">
              <h2 class="section-title">👤 Personal Information</h2>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Full Name</div>
                  <div class="info-value">${firstName} ${lastName}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Email Address</div>
                  <div class="info-value">${email}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Phone Number</div>
                  <div class="info-value">${phone}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Designation</div>
                  <div class="info-value">${designation || 'Not specified'}</div>
                </div>
              </div>
            </div>

            <!-- Company Information -->
            <div class="section">
              <h2 class="section-title">🏢 Company Information</h2>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Company Name</div>
                  <div class="info-value">${company}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Industry</div>
                  <div class="info-value">${industry || 'Not specified'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Company Size</div>
                  <div class="info-value">${companySize || 'Not specified'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Website</div>
                  <div class="info-value">${website || 'Not specified'}</div>
                </div>
              </div>
            </div>

            <!-- Project Details -->
            <div class="section">
              <h2 class="section-title">🔧 Project Details</h2>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Project Type</div>
                  <div class="info-value">${projectType}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Budget Range</div>
                  <div class="info-value">${budget || 'Not specified'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Timeline</div>
                  <div class="info-value">${timeline || 'Not specified'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Location</div>
                  <div class="info-value">${location || 'Not specified'}</div>
                </div>
              </div>
              
              <div class="message-box">
                <div class="info-label">Project Requirements</div>
                <div class="info-value">${requirements}</div>
              </div>
              
              ${message ? `
              <div class="message-box">
                <div class="info-label">Additional Message</div>
                <div class="info-value">${message}</div>
              </div>
              ` : ''}
            </div>

            <!-- Lead Information -->
            <div class="section">
              <h2 class="section-title">📊 Lead Information</h2>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Lead Source</div>
                  <div class="info-value">${source || 'Website'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Submission Date</div>
                  <div class="info-value">${new Date().toLocaleString('en-IN', { 
                    timeZone: 'Asia/Kolkata',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Priority Level</div>
                  <div class="info-value">High (Business Enquiry)</div>
                </div>
              </div>
            </div>

            <div class="priority">
              ⚡ This is a business enquiry requiring immediate attention. Please respond within 2 hours during business hours.
            </div>
          </div>
          
          <div class="footer">
            <p><strong>Green Build - Electrical Solutions</strong></p>
            <div class="contact-info">
              <p>📧 <a href="mailto:info@greenbuild.co">info@greenbuild.co</a> | 📱 Contact Information</p>
              <p>Professional Electrical Solutions for Industrial & Commercial Projects</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Green Build Website" <${process.env.SMTP_USER}>`,
      to: 'info@greenbuild.co',
      subject: `🏗️ New Business Enquiry - ${firstName} ${lastName} from ${company}`,
      html: emailContent,
      replyTo: email,
    });

    res.status(200).json({ 
      success: true, 
      message: 'Enquiry sent successfully! We will contact you within 24 hours.' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      error: 'Failed to send enquiry. Please try again or contact us directly.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}