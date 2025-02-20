"use client";
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
import { usePathname, useParams } from "next/navigation";
import LanguageToggle from "./LanguageToggle";
import { useTranslations } from 'next-intl';
import Image from "next/image";

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
    chevron: <ChevronDown fill="currentColor" size={14} />,
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      height="56px"
    >
      <NavbarContent className="lg:hidden">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="lg:hidden pr-3" justify="end">
        <div className="flex items-center gap-4">
          <NavbarBrand>
            <Link color="foreground" href={`/${currentLocale}`}>
              <Image
                src="/images/ECC_LOGO.png"
                alt="Company Logo"
                width={140}
                height={45}
              />
            </Link>
          </NavbarBrand>
          <LanguageToggle />
        </div>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-5" justify="end">
        <NavbarBrand>
          <Link color="foreground" href={`/${currentLocale}`}>
            <Image
              src="/images/ECC_LOGO.png"
              alt="Company Logo"
              width={140}
              height={45}
            />
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link className="text-sm" color="foreground" href={`/${currentLocale}`}>
            {t("home")}
          </Link>
        </NavbarItem>
        <Dropdown isOpen={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <NavbarItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-sm font-medium text-foreground"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                {t("services")}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Services Menu"
            className="min-w-[190px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <DropdownItem key="cataract" href={`/${currentLocale}/cataract-surgery`}>
              {t("cataractSurgery")}
            </DropdownItem>
            <DropdownItem key="diabetes" href={`/${currentLocale}/diabetes`}>
              {t("diabetes")}
            </DropdownItem>
            <DropdownItem key="glaucoma" href={`/${currentLocale}/glaucoma-management`}>
              {t("glaucomaManagement")}
            </DropdownItem>
            <DropdownItem key="laser" href={`/${currentLocale}/laser-treatments`}>
              {t("laserTreatments")}
            </DropdownItem>
            <DropdownItem key="macular" href={`/${currentLocale}/macular-degeneration`}>
              {t("macularDegeneration")}
            </DropdownItem>
            <DropdownItem key="cataracts" href={`/${currentLocale}/types-of-cataracts`}>
              {t("typesOfCataracts")}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link className="text-sm" color="foreground" href={`/${currentLocale}/about-us`}>
            {t("aboutus")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-sm" color="foreground" href={`/${currentLocale}/our-team`}>
            {t("ourteam")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-sm" color="foreground" href={`/${currentLocale}/resources`}>
            {t("resources")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-sm" color="foreground" href={`/${currentLocale}/contact-page`}>
            {t("contactus")}
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
            {t("home")}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            as="button"
            className="w-full text-left text-foreground text-medium py-2 flex justify-between"
            onClick={() => setIsMobileDropdownOpen((prev) => !prev)}
          >
            {t("services")} {icons.chevron}
          </Link>
          {isMobileDropdownOpen && (
            <div className="pl-4 pt-2">
              <Link color="foreground" className="block py-1 text-medium" href={`/${currentLocale}/cataract-surgery`}>
                {t("cataractSurgery")}
              </Link>
              <Link color="foreground" className="block py-1 text-medium" href={`/${currentLocale}/glaucoma-management`}>
                {t("glaucomaManagement")}
              </Link>
              <Link color="foreground" className="block py-1 text-medium" href={`/${currentLocale}/laser-treatments`}>
                {t("laserTreatments")}
              </Link>
              <Link color="foreground" className="block py-1 text-medium" href={`/${currentLocale}/macular-degeneration`}>
                {t("macularDegeneration")}
              </Link>
              <Link color="foreground" className="block py-1 text-medium" href={`/${currentLocale}/types-of-cataracts`}>
                {t("typesOfCataracts")}
              </Link>
            </div>
          )}
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" className="w-full" href={`/${currentLocale}/about-us`}>
            {t("aboutus")}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" className="w-full" key="diabetes" href={`/${currentLocale}/our-team`}>
            {t("ourteam")}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" className="w-full" href={`/${currentLocale}/resources`}>
            {t("resources")}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" className="w-full" href={`/${currentLocale}/contact-page`}>
            {t("contactus")}
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default AppBar;
