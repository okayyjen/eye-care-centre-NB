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
          <Link color="foreground" href="#">
            ABOUT US
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/our-team">
            OUR TEAM
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            RESOURCES
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            FEEDBACK
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
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
            Services <span className="icon-wrapper">{icons.chevron}</span>
          </Link>
          {servicesMenuOpen && (
            <div className="submenu">
              <NavbarMenuItem className="submenu-item">
                <Link
                  color="foreground"
                  className="w-full"
                  href="#"
                  size="lg"
                >
                  Service 1
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem className="submenu-item">
                <Link
                  color="foreground"
                  className="w-full"
                  href="#"
                  size="lg"
                >
                  Service 2
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem className="submenu-item">
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
            href="#"
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
            href="#"
            size="lg"
          >
            Resources
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="#"
            size="lg"
          >
            Feedback
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="#"
            size="lg"
          >
            Contact Us
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default AppBar;