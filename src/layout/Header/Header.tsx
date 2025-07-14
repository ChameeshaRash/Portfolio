import React from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "../../ui/button";
import { MobileMenu } from "./MobileMenu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../ui/navigation-menu";
import { smoothScrollToSection } from "../../utils/smoothScroll";
import { NAV_ITEMS } from "../../constants/navigation";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface HeaderProps {
  currentPage?: 'home' | 'linktree';
}

export const Header = ({ currentPage = 'home' }: HeaderProps): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const navigate = useNavigate();

  useEffect(() => {
    const sectionIds = ['home', 'services', 'about', 'collaborations', 'event', 'products'];
    const handleScroll = () => {
      let found: string | null = null;
      const viewportCenter = window.innerHeight / 2;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          if (sectionCenter > viewportCenter * 0.6 && sectionCenter < viewportCenter * 1.4) {
            found = id;
            break;
          }
        }
      }
      setActiveSection(found || '');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: typeof NAV_ITEMS[0]) => {
    if (item.sectionId) {
      navigate(`/?scrollTo=${item.sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(item.sectionId!);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 150;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 0);
      setIsMobileMenuOpen(false);
      return;
    }
    if (item.href === "/linktree") {
      if (currentPage !== 'linktree') {
        navigate("/linktree");
        setIsMobileMenuOpen(false);
        return;
      }
    } else if (item.href === "/") {
      if (currentPage !== 'home') {
        navigate("/");
        setIsMobileMenuOpen(false);
        return;
      }
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="z-50 px-4 sm:px-6 lg:px-8 xl:px-[20%] mt-4 fixed w-full lg:top-0 lg:left-0 lg:right-0 lg:bottom-auto bottom-0 left-0 right-0 mb-4 lg:mt-4 lg:mb-20">
      <div className="flex items-center justify-between px-4 lg:px-6 py-4 lg:py-5 bg-[#7d626233] rounded-xl overflow-hidden backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)]">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer"
        >
          <Link to="/">
            <img
              src="/bmc-logo.png"
              alt="BMC Logo"
              className="w-8 h-auto lg:w-10 block"
            />
          </Link>
        </div>

          {/* Desktop Navigation Menu */}
          <NavigationMenu className="hidden lg:flex mx-auto">
            <NavigationMenuList className="flex gap-8">
              {NAV_ITEMS.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.sectionId ? (
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`font-body-font-body-md hover:text-[#bae800] transition-colors whitespace-nowrap ${
                        activeSection === item.sectionId ? 'text-[#bae800]' : 'text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`font-body-font-body-md hover:text-[#bae800] transition-colors whitespace-nowrap ${
                        (currentPage === 'linktree' && item.label === 'Ai Links') ? 'text-[#bae800]' : 'text-white'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Contact Button */}
          <Button className="hidden lg:flex items-center gap-2 px-4 py-2 bg-[#bae800] text-black rounded hover:bg-[#a5cf00] transition-colors">
            <span className="font-body-font-body-md whitespace-nowrap">
              Contact us
            </span>
            <Phone className="w-[18px] h-[18px]" />
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-white hover:text-[#bae800] transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onToggle={toggleMobileMenu}
          navItems={NAV_ITEMS}
          onNavClick={handleNavClick}
          currentPage={currentPage}
        />
      </header>
  );
};