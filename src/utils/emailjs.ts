import emailjs from '@emailjs/browser';

const logEnvStatus = () => {
  const envVars = {
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  };

  // Log environment variable lengths to help debug without exposing values
  console.log('Environment Variables Length Check:', {
    PUBLIC_KEY: envVars.PUBLIC_KEY?.length || 0,
    SERVICE_ID: envVars.SERVICE_ID?.length || 0,
    TEMPLATE_ID: envVars.TEMPLATE_ID?.length || 0
  });

  // Log first and last character of each variable for verification
  console.log('Environment Variables Pattern Check:', {
    PUBLIC_KEY: envVars.PUBLIC_KEY ? `${envVars.PUBLIC_KEY.charAt(0)}...${envVars.PUBLIC_KEY.charAt(envVars.PUBLIC_KEY.length - 1)}` : 'missing',
    SERVICE_ID: envVars.SERVICE_ID ? `${envVars.SERVICE_ID.charAt(0)}...${envVars.SERVICE_ID.charAt(envVars.SERVICE_ID.length - 1)}` : 'missing',
    TEMPLATE_ID: envVars.TEMPLATE_ID ? `${envVars.TEMPLATE_ID.charAt(0)}...${envVars.TEMPLATE_ID.charAt(envVars.TEMPLATE_ID.length - 1)}` : 'missing'
  });

  return envVars;
};

// Initialize EmailJS
export const initEmailJS = () => {
  const envVars = logEnvStatus();
  
  if (!envVars.PUBLIC_KEY) {
    console.error('EmailJS initialization failed: Public key is missing');
    throw new Error('EmailJS public key is missing');
  }

  try {
    emailjs.init(envVars.PUBLIC_KEY);
    console.log('EmailJS initialized successfully with public key length:', envVars.PUBLIC_KEY.length);
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
    
    const errorMsg = `Email service configuration is incomplete. Missing: ${missingVars.join(', ')}`;
    console.error(errorMsg);
    throw new Error(errorMsg);
  }

  try {
    console.log('Attempting to send email with:', {
      serviceId: `${envVars.SERVICE_ID.charAt(0)}...${envVars.SERVICE_ID.charAt(envVars.SERVICE_ID.length - 1)}`,
      templateId: `${envVars.TEMPLATE_ID.charAt(0)}...${envVars.TEMPLATE_ID.charAt(envVars.TEMPLATE_ID.length - 1)}`,
      fromName: data.name,
      fromEmail: data.email
    });

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