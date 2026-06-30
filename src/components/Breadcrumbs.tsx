import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-8">
      <Link to="/" className="hover:text-black transition-colors">Home</Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={10} className="text-gray-300" />
          {item.path && index < items.length - 1 ? (
            <Link to={item.path} className="hover:text-black transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-black font-semibold">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
