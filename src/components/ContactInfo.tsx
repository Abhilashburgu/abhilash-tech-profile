
import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import ContactInfoItem from './ContactInfoItem';

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abhilashburgu27@gmail.com",
      href: "mailto:abhilashburgu27@gmail.com",
      color: "text-red-600 bg-red-100"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8790033916",
      href: "tel:+918790033916",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "abhilash-burgu-4453ba232",
      href: "https://linkedin.com/in/abhilash-burgu-4453ba232",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      href: "#",
      color: "text-purple-600 bg-purple-100"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Feel free to reach out through any of the following channels. I typically respond within 24 hours.
        </p>
      </div>

      <div className="space-y-6">
        {contactInfo.map((item, index) => (
          <ContactInfoItem
            key={index}
            icon={item.icon}
            label={item.label}
            value={item.value}
            href={item.href}
            color={item.color}
          />
        ))}
      </div>

      {/* Additional Info */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
        <h4 className="font-semibold text-slate-800 mb-3">Available for</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-slate-700">Full-time opportunities</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-slate-700">Consulting projects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-slate-700">Technical discussions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
