import emailjs from '@emailjs/browser';

// Initialize EmailJS
export const initEmailJS = () => {
  if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
    console.error('EmailJS public key is missing');
    return;
  }
  try {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    console.log('EmailJS initialized successfully');
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
  }
};

// Email sending function with proper typing
export const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  // Log environment variables (without revealing full values)
  console.log('EmailJS Configuration Check:', {
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? '✓' : '✗',
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ? '✓' : '✗',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ? '✓' : '✗'
  });

  if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
    const missingVars = [];
    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) missingVars.push('SERVICE_ID');
    if (!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) missingVars.push('TEMPLATE_ID');
    if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) missingVars.push('PUBLIC_KEY');
    throw new Error(`Email service configuration is incomplete. Missing: ${missingVars.join(', ')}`);
  }

  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: 'Dharmendra Ahirwar',
      }
    );
    console.log('Email sent successfully:', response.status, response.text);
    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}; 