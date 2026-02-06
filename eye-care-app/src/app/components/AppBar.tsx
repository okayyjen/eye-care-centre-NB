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
} from "@heroui/react";
import { ChevronDown } from "./Icons";
import { usePathname, useParams } from "next/navigation";
import LanguageToggle from "./LanguageToggle";
import { useTranslations } from 'next-intl';
import Image from "next/image";

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isOurTeamDropdownOpen, setIsOurTeamDropdownOpen] = React.useState(false);
  
  const [isMobileServiceDropdownOpen, setIsMobileServiceDropdownOpen] = React.useState(true);
  const [isMobileOurTeamDropdownOpen, setIsMobileOurTeamDropdownOpen] = React.useState(true);
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

  const handleOurTeamMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setIsOurTeamDropdownOpen(true);
    }
  };

  const handleOurTeamMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setIsOurTeamDropdownOpen(false);
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
                className="p-0 bg-transparent h-auto data-[hover=true]:bg-transparent text-sm font-medium text-foreground"
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
            <DropdownItem key="redeyesandurgenteyeconditions" href={`/${currentLocale}/red-eyes-and-urgent-eye-conditions`}>
              {t("redEyesAndUrgentEyeConditions")}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link className="text-sm" color="foreground" href={`/${currentLocale}/about-us`}>
            {t("aboutus")}
          </Link>
        </NavbarItem>
        <Dropdown isOpen={isOurTeamDropdownOpen} onOpenChange={setIsOurTeamDropdownOpen}>
          <NavbarItem onMouseEnter={handleOurTeamMouseEnter} onMouseLeave={handleOurTeamMouseLeave}>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent h-auto data-[hover=true]:bg-transparent text-sm text-foreground"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                {t("ourteam")}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Services Menu"
            className="min-w-[190px]"
            onMouseEnter={handleOurTeamMouseEnter}
            onMouseLeave={handleOurTeamMouseLeave}
          >
            <DropdownItem key="teampage" href={`/${currentLocale}/our-team`}>
              {t("ourteamLC")}
            </DropdownItem>
            <DropdownItem key="doctorPonce" href={`/${currentLocale}/doctor-ponce`}>
              Dr. José Ramón Ponce-Martínez
            </DropdownItem>
            <DropdownItem key="doctorSaad" href={`/${currentLocale}/doctor-saad`}>
              Dr. Julien Saad
            </DropdownItem>
            <DropdownItem key="doctorSavoie" href={`/${currentLocale}/doctor-savoie`}>
              Dr. Isabelle Aucoin-Savoie
            </DropdownItem>
            <DropdownItem key="doctorSekhavat" href={`/${currentLocale}/doctor-sekhavat`}>
              Dr. Houfar Sekhavat
            </DropdownItem>
            <DropdownItem key="doctorShokrollahi" href={`/${currentLocale}/doctor-shokrollahi`}>
              Dr. Siamak Shokrollahi
            </DropdownItem>
            <DropdownItem key="doctorGoguen" href={`/${currentLocale}/doctor-goguen`}>
              Dr. Christian Goguen
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link className="text-sm" color="foreground" href={`/${currentLocale}/resources`}>
            {t("resources")}
          </Link>
        </NavbarItem>
        <NavbarMenuItem>
          <Link className="text-sm" color="foreground" href="https://forms.gle/YNPChVSxmcjv5GPv7">
            {t("feedback")}
          </Link>
        </NavbarMenuItem>
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
            onClick={() => setIsMobileServiceDropdownOpen((prev) => !prev)}
          >
            {t("services")} {icons.chevron}
          </Link>
          {isMobileServiceDropdownOpen && (
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
          <Link
            as="button"
            className="w-full text-left text-foreground text-medium py-2 flex justify-between"
            onClick={() => setIsMobileOurTeamDropdownOpen((prev) => !prev)}
          >
            {t("ourteam")} {icons.chevron}
          </Link>
          {isMobileOurTeamDropdownOpen && (
            <div className="pl-4 pt-2">
              <Link color="foreground" href={`/${currentLocale}/our-team`}>
                {t("ourteamLC")}
              </Link>
              <Link color="foreground" className="block py-1 text-medium" href={`/${currentLocale}/doctor-ponce`}>
                Dr. José Ramón Ponce-Martínez
              </Link>
              <Link color="foreground" className="block py-1 text-medium" href={`/${currentLocale}/doctor-saad`}>
                Dr. Julien Saad
              </Link>
              <Link color="foreground" className="block py-1 text-medium" href={`/${currentLocale}/doctor-savoie`}>
                Dr. Isabelle Aucoin-Savoie
              </Link>
              <Link color="foreground" className="block py-1 text-medium" href={`/${currentLocale}/doctor-sekhavat`}>
                Dr. Houfar Sekhavat
              </Link>
              <Link color="foreground" className="block py-1 text-medium" href={`/${currentLocale}/doctor-shokrollahi`}>
                Dr. Siamak Shokrollahi
              </Link>
              <Link color="foreground" className="block py-1 text-medium" href={`/${currentLocale}/doctor-goguen`}>
                Dr. Christian Goguen
              </Link>
              
            </div>
          )}
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" className="w-full" href={`/${currentLocale}/resources`}>
            {t("resources")}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" className="w-full" href="https://forms.gle/YNPChVSxmcjv5GPv7">
            {t("feedback")}
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
