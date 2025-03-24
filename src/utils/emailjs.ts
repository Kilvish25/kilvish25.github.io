import emailjs from '@emailjs/browser';

// Initialize EmailJS
export const initEmailJS = () => {
  if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
    console.error('EmailJS public key is not configured');
    return;
  }
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
};

// Email sending function with proper typing
export const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
    throw new Error('EmailJS configuration is incomplete');
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
    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}; 