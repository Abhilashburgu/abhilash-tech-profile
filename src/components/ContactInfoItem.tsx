
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactInfoItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  color: string;
}

const ContactInfoItem = ({ icon: Icon, label, value, href, color }: ContactInfoItemProps) => {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-200 hover:scale-105"
    >
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon size={24} />
      </div>
      <div>
        <h4 className="font-semibold text-slate-800">{label}</h4>
        <p className="text-slate-600">{value}</p>
      </div>
    </a>
  );
};

export default ContactInfoItem;
