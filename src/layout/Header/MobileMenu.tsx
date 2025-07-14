import React from "react";
import { Phone, X } from "lucide-react";
import { Button } from "../../ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  navItems: Array<{
    label: string;
    href: string;
    sectionId: string | null;
  }>;
  onNavClick: (item: any) => void;
  currentPage: 'home' | 'linktree';
}

export const MobileMenu = ({ 
  isOpen, 
  onToggle, 
  navItems, 
  onNavClick, 
  currentPage 
}: MobileMenuProps): JSX.Element => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-[#161616] z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-6 px-6">
          {/* Header with Menu Title */}
          <div className="flex items-center mb-6">
            <span className="font-headings-font-heading-xl font-bold text-[#bae800] text-xl">Menu</span>
          </div>
          {/* Navigation Items */}
          <nav className="flex flex-col space-y-4 mb-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => onNavClick(item)}
                className={`text-left py-3 px-4 rounded-lg transition-colors ${
                  (currentPage === 'home' && item.label === 'Home') || 
                  (currentPage === 'linktree' && item.label === 'Ai Links')
                    ? 'text-[#bae800] bg-[#bae800]/10' 
                    : 'text-white hover:text-[#bae800] hover:bg-[#bae800]/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          {/* Contact Button */}
          <Button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#bae800] text-black rounded-lg hover:bg-[#a5cf00] transition-colors">
            <span className="font-body-font-body-md">Contact us</span>
            <Phone className="w-4 h-4" />
          </Button>
          {/* Close Button at Bottom Right */}
          <button
            onClick={onToggle}
            className="absolute bottom-6 right-6 flex items-center justify-center w-10 h-10 text-white hover:text-[#bae800] transition-colors bg-[#232323] rounded-full shadow-lg"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
};