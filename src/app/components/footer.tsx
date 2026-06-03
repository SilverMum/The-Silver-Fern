import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-emerald-500">
                <path d="M16 4C16 4 10 10 10 16C10 19.3137 12.6863 22 16 22C19.3137 22 22 19.3137 22 16C22 10 16 4 16 4Z" fill="currentColor" opacity="0.3"/>
                <path d="M16 8C16 8 12 12 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 12 16 8 16 8Z" fill="currentColor"/>
              </svg>
              <span className="text-white">Silver Fern Studio</span>
            </div>
            <p className="text-sm">
              Handcrafted art and prints inspired by nature and creativity.
            </p>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#shop" className="hover:text-emerald-500 transition-colors">Shop</a></li>
              <li><a href="#portfolio" className="hover:text-emerald-500 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a></li>
              <li><a href="#about" className="hover:text-emerald-500 transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#instagram" className="hover:text-emerald-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#facebook" className="hover:text-emerald-500 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#twitter" className="hover:text-emerald-500 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#email" className="hover:text-emerald-500 transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-700 pt-8 text-center text-sm">
          <p>&copy; 2026 Silver Fern Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
