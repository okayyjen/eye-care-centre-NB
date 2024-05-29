"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, Input, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, DropdownItem, DropdownMenu } from "@nextui-org/react";
import { SearchIcon, ChevronDown } from "./Icons";
import { AcmeLogo } from "./AcmeLogo";

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Services",
    "About Us",
    "Our Team",
    "Resources",
    "Feedback",
    "Contact Us",
  ];

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  <Link color="foreground" href="#">
                    SERVICES
                  </Link>
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
          <Link color="foreground" href="#">
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

      <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default AppBar;