import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "./button";

interface NavItem {
  label: string;
  href: string;
  sectionId: string | null;
}

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  navItems: NavItem[];
  onNavClick: (item: NavItem) => void;
  currentPage?: 'home' | 'linktree';
}

export const MobileMenu = ({ 
  isOpen, 
  onToggle, 
  navItems, 
  onNavClick,
  currentPage = 'home'
}: MobileMenuProps): JSX.Element => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div className={`
        fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#161616] z-50 transform transition-transform duration-300 ease-in-out lg:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <span className="font-headings-font-heading-xl font-bold text-[#bae800] text-xl">
              Menu
            </span>
            <button
              onClick={onToggle}
              className="flex items-center justify-center w-8 h-8 text-white hover:text-[#bae800] transition-colors"
              aria-label="Close menu"
            >
              <Icon icon="solar:close-square-bold" className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavClick(item)}
                    className={`
                      w-full text-left font-body-font-body-md text-lg hover:text-[#bae800] transition-colors py-2
                      ${(currentPage === 'home' && item.label === 'Home') || 
                        (currentPage === 'linktree' && item.label === 'AI Link')
                        ? 'text-[#bae800]' 
                        : 'text-white'
                      }
                    `}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button */}
          <div className="p-6 border-t border-gray-700">
            <Button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#bae800] text-black rounded hover:bg-[#a5cf00] transition-colors">
              <span className="font-body-font-body-md">
                Contact us
              </span>
              <Icon icon="solar:phone-bold" className="w-[18px] h-[18px]" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};