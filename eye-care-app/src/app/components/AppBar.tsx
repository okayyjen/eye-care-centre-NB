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
  NavbarMenuItem } from "@nextui-org/react";
import { ChevronDown } from "./Icons";
import "../globals.css";

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = React.useState(true);
  const toggleServicesMenu = () => {
    setServicesMenuOpen(!servicesMenuOpen);
  };

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />
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
          <Link color="foreground" href="/">
            <p className="font-bold text-inherit">LOGO</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      
      <NavbarContent className="hidden md:flex gap-6" justify="end">
        <NavbarBrand>
          <Link color="foreground" href="/">
            <p className="font-bold text-inherit">LOGO</p>
          </Link>
        </NavbarBrand>

        <NavbarItem>
          <Link color="foreground" href="/">
            HOME
          </Link>
        </NavbarItem>

        <Dropdown>
          <NavbarItem>
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
            aria-label="Action Service"
            className="w-[200px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="loremipsum">Lorem Ipsum</DropdownItem>
            <DropdownItem key="dolor_sit">Dolor Sit</DropdownItem>
            <DropdownItem key="amet">Amet</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        
        <NavbarItem>
          <Link color="foreground" href="/about-us">
            ABOUT US
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/our-team">
            OUR TEAM
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/resources">
            RESOURCES
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="https://docs.google.com/forms/d/e/1FAIpQLSeBWaPsAgZs1XI2B6-vzRdqnrMYbRnp39zbmRFWxXL-MzsISw/viewform?usp=sf_link">
            FEEDBACK
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact-us">
            CONTACT US
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="#"
            size="lg"
            onClick={toggleServicesMenu}
          >
            Services <span className="ml-[8px]">{icons.chevron}</span>
          </Link>
          {servicesMenuOpen && (
            <div className="pl-[1.5em]">
              <NavbarMenuItem className="p-[5px]">
                <Link
                  color="foreground"
                  className="w-full"
                  href="#"
                  size="lg"
                >
                  Service 1
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem className="p-[5px]">
                <Link
                  color="foreground"
                  className="w-full"
                  href="#"
                  size="lg"
                >
                  Service 2
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem className="p-[5px]">
                <Link
                  color="foreground"
                  className="w-full"
                  href="#"
                  size="lg"
                >
                  Service 3
                </Link>
              </NavbarMenuItem>
            </div>
          )}
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="/about-us"
            size="lg"
          >
            About us
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="/our-team"
            size="lg"
          >
            Our Team
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="/resources"
            size="lg"
          >
            Resources
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="https://forms.gle/YNPChVSxmcjv5GPv7"
            size="lg"
          >
            Feedback
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="/contact-us"
            size="lg"
          >
            Contact Us
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="/"
            size="lg"
          >
            Home
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default AppBar;