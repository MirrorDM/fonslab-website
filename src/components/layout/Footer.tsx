import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Fonslab Limited. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Mail className="h-4 w-4" />
            <a href="mailto:contact@fonslab.com" className="text-sm hover:text-brand-600 transition-colors">
              info@fonslab.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}