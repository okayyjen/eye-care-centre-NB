"use client"
import React from "react";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/react";
import { ChevronDown } from "./Icons";
import "../globals.css";
import { usePathname, useParams } from "next/navigation";
import LanguageToggle from "./LanguageToggle";
import { useTranslations } from 'next-intl';

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = React.useState(false);
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = params.locale || "en"; 
  const t = useTranslations('NavBar');

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setIsDropdownOpen(false);
    }
  };

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      height="90px"
    >
      <NavbarContent className="md:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="md:hidden pr-3" justify="end">
        <NavbarBrand className="justify-end">
          <Link color="foreground" href={`/${currentLocale}`}>
            <p className="font-bold text-inherit">LOGO</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-6" justify="end">
        <NavbarBrand>
          <Link color="foreground" href={`/${currentLocale}`}>
            <p className="font-bold text-inherit">LOGO</p>
          </Link>
        </NavbarBrand>

        <NavbarItem>
          <Link color="foreground" href={`/${currentLocale}`}>
            HOME
          </Link>
        </NavbarItem>
        <Dropdown isOpen={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <NavbarItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-base font-medium text-foreground"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                SERVICES
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Services Menu"
            className="w-[200px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <DropdownItem key="loremipsum">Lorem Ipsum</DropdownItem>
            <DropdownItem key="dolor_sit">Dolor Sit</DropdownItem>
            <DropdownItem key="amet">Amet</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href={`/${currentLocale}/about-us`}>
            {t('aboutus')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={`/${currentLocale}/our-team`}>
            {t('ourteam')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={`/${currentLocale}/resources`}>
            {t('resources')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="https://docs.google.com/forms/d/e/1FAIpQLSeBWaPsAgZs1XI2B6-vzRdqnrMYbRnp39zbmRFWxXL-MzsISw/viewform?usp=sf_link">
            {t('feedback')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={`/${currentLocale}/contact-page`}>
            {t('contactus')}
          </Link>
        </NavbarItem>
        <LanguageToggle />
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href={`/${currentLocale}`}>
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            as="button"
            className="w-full text-left text-foreground text-medium py-2 flex justify-between"
            onClick={() => setIsMobileDropdownOpen((prev) => !prev)}
          >
            Services {icons.chevron}
          </Link>
          {isMobileDropdownOpen && (
            <div className="pl-4 pt-2">
              <Link color="foreground" className="block py-1 text-medium" href="#">
                Lorem Ipsum
              </Link>
              <Link color="foreground" className="block py-1 text-medium" href="#">
                Dolor Sit
              </Link>
              <Link color="foreground" className="block py-1 text-medium" href="#">
                Amet
              </Link>
            </div>
          )}
        </NavbarMenuItem>



        <NavbarMenuItem>
          <Link color="foreground" className="w-full" href={`/${currentLocale}/about-us`}>
            About us
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" className="w-full" href={`/${currentLocale}/our-team`}>
            Our Team
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" className="w-full" href={`/${currentLocale}/resources`}>
            Resources
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" className="w-full" href="https://forms.gle/YNPChVSxmcjv5GPv7">
            Feedback
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" className="w-full" href={`/${currentLocale}/contact-page`}>
            Contact Us
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default AppBar;