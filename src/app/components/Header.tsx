import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-emerald-700">
              <path d="M16 4C16 4 10 10 10 16C10 19.3137 12.6863 22 16 22C19.3137 22 22 19.3137 22 16C22 10 16 4 16 4Z" fill="currentColor" opacity="0.3"/>
              <path d="M16 8C16 8 12 12 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 12 16 8 16 8Z" fill="currentColor"/>
            </svg>
            <h1 className="text-stone-900">Silver Fern Studio</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-stone-700 hover:text-emerald-700 transition-colors">Home</a>
            <a href="#shop" className="text-stone-700 hover:text-emerald-700 transition-colors">Shop</a>
            <a href="#portfolio" className="text-stone-700 hover:text-emerald-700 transition-colors">Portfolio</a>
            <a href="#contact" className="text-stone-700 hover:text-emerald-700 transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-stone-700" /> : <Menu className="w-6 h-6 text-stone-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            <a href="#home" className="text-stone-700 hover:text-emerald-700 transition-colors">Home</a>
            <a href="#shop" className="text-stone-700 hover:text-emerald-700 transition-colors">Shop</a>
            <a href="#portfolio" className="text-stone-700 hover:text-emerald-700 transition-colors">Portfolio</a>
            <a href="#contact" className="text-stone-700 hover:text-emerald-700 transition-colors">Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
}
