import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Loader2, Mail, Copy } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailJSReady, setEmailJSReady] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const { toast } = useToast();

  // EmailJS configuration
  const PUBLIC_KEY = 'o5FiYVIs0rDZYGbXa';
  const SERVICE_ID = 'service_i5r25gq';
  const TEMPLATE_ID = 'template_7vqcagg';

  // Initialize EmailJS when component mounts
  useEffect(() => {
    try {
      emailjs.init(PUBLIC_KEY);
      setEmailJSReady(true);
      console.log('EmailJS initialized successfully with public key:', PUBLIC_KEY);
    } catch (error) {
      console.error('EmailJS initialization failed:', error);
      setEmailJSReady(false);
      setShowFallback(true);
    }
  }, []);

  const sendEmailWithRetry = async (templateParams: any, attempt: number = 1): Promise<any> => {
    const maxRetries = 2;
    
    try {
      console.log(`Attempt ${attempt}: Sending email via EmailJS...`);
      console.log('Service ID:', SERVICE_ID);
      console.log('Template ID:', TEMPLATE_ID);
      console.log('Public Key:', PUBLIC_KEY);
      console.log('Template params:', templateParams);

      // Use the correct EmailJS send method with public key
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log('EmailJS response:', result);
      return result;
    } catch (error: any) {
      console.error(`Attempt ${attempt} failed:`, error);
      
      if (attempt < maxRetries) {
        console.log(`Retrying... (${attempt + 1}/${maxRetries})`);
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
        return sendEmailWithRetry(templateParams, attempt + 1);
      }
      
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!emailJSReady) {
      console.error('EmailJS not initialized');
      setShowFallback(true);
      toast({
        title: "Service not ready",
        description: "Email service is not available. Please use the alternative contact method below.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log('Starting email send process...');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'abhilashburgu27@gmail.com'
      };

      const result = await sendEmailWithRetry(templateParams);

      if (result.status === 200) {
        console.log('Email sent successfully:', result);
        setIsSubmitted(true);
        setRetryCount(0);
        
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });

        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }

    } catch (error: any) {
      console.error('Email sending failed after retries:', error);
      setRetryCount(prev => prev + 1);
      
      let errorMessage = "Please try the alternative contact method below.";
      let shouldShowFallback = false;
      
      if (error.message && error.message.includes('fetch')) {
        errorMessage = "Network connection issue. Please check your internet and try again, or use the alternative contact method.";
        shouldShowFallback = true;
      } else if (error.status === 400) {
        errorMessage = "Email service configuration issue. Please use the alternative contact method.";
        shouldShowFallback = true;
      } else if (error.status === 401 || error.status === 403) {
        errorMessage = "Email service authentication issue. Please use the alternative contact method.";
        shouldShowFallback = true;
      } else if (retryCount >= 2) {
        errorMessage = "Multiple attempts failed. Please use the alternative contact method.";
        shouldShowFallback = true;
      }
      
      if (shouldShowFallback) {
        setShowFallback(true);
      }
      
      toast({
        title: "Failed to send message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const copyContactInfo = () => {
    const contactText = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(contactText);
    toast({
      title: "Contact info copied!",
      description: "You can now paste this information in your email client.",
    });
  };

  const openEmailClient = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:abhilashburgu27@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="bg-slate-50 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h3>
      
      {!emailJSReady && (
        <div className="mb-4 p-3 bg-yellow-100 border border-yellow-400 rounded-lg">
          <p className="text-yellow-800 text-sm">Email service is initializing...</p>
        </div>
      )}
      
      {isSubmitted ? (
        <div className="text-center py-12">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h4 className="text-xl font-semibold text-slate-800 mb-2">Message Sent!</h4>
          <p className="text-slate-600">Thank you for reaching out. I'll get back to you soon.</p>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading || !emailJSReady}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading || !emailJSReady}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading || !emailJSReady}
                rows={5}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading || !emailJSReady}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* Alternative Contact Methods */}
          {showFallback && (
            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Alternative Contact Methods</h4>
              <p className="text-slate-600 mb-4">
                Having trouble with the form? No worries! You can reach out using these alternative methods:
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={openEmailClient}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail size={20} />
                  Open Email Client
                </button>
                
                <button
                  onClick={copyContactInfo}
                  className="w-full flex items-center justify-center gap-2 bg-slate-600 text-white px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <Copy size={20} />
                  Copy Contact Details
                </button>
                
                <div className="text-center pt-2">
                  <p className="text-sm text-slate-600">
                    Or email me directly at: 
                    <a href="mailto:abhilashburgu27@gmail.com" className="ml-1 text-blue-600 hover:underline">
                      abhilashburgu27@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ContactForm;
