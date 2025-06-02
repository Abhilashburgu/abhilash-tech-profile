
import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
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
  const { toast } = useToast();

  // Initialize EmailJS when component mounts
  useEffect(() => {
    try {
      emailjs.init('o5FiYVIs0rDZYGbXa');
      setEmailJSReady(true);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('EmailJS initialization failed:', error);
      setEmailJSReady(false);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!emailJSReady) {
      console.error('EmailJS not initialized');
      toast({
        title: "Service not ready",
        description: "Email service is not properly initialized. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log('Starting email send process...');
    console.log('Form data:', formData);
    console.log('Service ID: service_i5r25gq');
    console.log('Template ID: template_7ari1kr');

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'abhilashburgu27@gmail.com'
      };

      console.log('Template params:', templateParams);
      console.log('Sending email via EmailJS...');

      const result = await emailjs.send(
        'service_i5r25gq',
        'template_7ari1kr',
        templateParams
      );

      console.log('Email sent successfully:', result);
      console.log('Result status:', result.status);
      console.log('Result text:', result.text);

      if (result.status === 200) {
        setIsSubmitted(true);
        
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
      console.error('Email sending failed:', error);
      console.error('Error type:', typeof error);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      
      let errorMessage = "Please try again or contact me directly via email.";
      
      if (error.message && error.message.includes('fetch')) {
        errorMessage = "Network error. Please check your internet connection and try again.";
      } else if (error.status) {
        errorMessage = `EmailJS error (${error.status}): ${error.text || 'Unknown error'}`;
      }
      
      toast({
        title: "Failed to send message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      console.log('Email send process completed');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
      )}
    </div>
  );
};

export default ContactForm;
