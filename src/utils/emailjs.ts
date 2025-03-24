import emailjs from '@emailjs/browser';

const logEnvStatus = () => {
  const envVars = {
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  };

  console.log('Environment Variables Status:', {
    PUBLIC_KEY: envVars.PUBLIC_KEY ? '✓' : '✗',
    SERVICE_ID: envVars.SERVICE_ID ? '✓' : '✗',
    TEMPLATE_ID: envVars.TEMPLATE_ID ? '✓' : '✗'
  });

  return envVars;
};

// Initialize EmailJS
export const initEmailJS = () => {
  const envVars = logEnvStatus();
  
  if (!envVars.PUBLIC_KEY) {
    throw new Error('EmailJS public key is missing');
  }

  try {
    emailjs.init(envVars.PUBLIC_KEY);
    console.log('EmailJS initialized successfully');
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
    throw error;
  }
};

// Email sending function with proper typing
export const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const envVars = logEnvStatus();

  if (!envVars.SERVICE_ID || !envVars.TEMPLATE_ID || !envVars.PUBLIC_KEY) {
    const missingVars = [];
    if (!envVars.SERVICE_ID) missingVars.push('SERVICE_ID');
    if (!envVars.TEMPLATE_ID) missingVars.push('TEMPLATE_ID');
    if (!envVars.PUBLIC_KEY) missingVars.push('PUBLIC_KEY');
    throw new Error(`Email service configuration is incomplete. Missing: ${missingVars.join(', ')}`);
  }

  try {
    const response = await emailjs.send(
      envVars.SERVICE_ID,
      envVars.TEMPLATE_ID,
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