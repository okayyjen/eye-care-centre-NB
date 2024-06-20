import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input } from "@nextui-org/react";
import SearchIcon from "./SearchIcon";

const AppBar = () => {
  return (
    <Navbar isBordered maxWidth="xl">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className="hidden sm:block font-bold text-inherit">LOGO</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6">
          <NavbarItem>
            <Link color="foreground" href="#">
              SERVICES
            </Link>
          </NavbarItem>
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
            <Link color="foreground" href="/resources">
              RESOURCES
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="https://docs.google.com/forms/d/1xmOjGQ0xS00IakELbnH_XoFC0ts8dtSP8cmR7x6CWOg/edit?pli=1">
              FEEDBACK
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/contact-page">
              CONTACT US
            </Link>
          </NavbarItem>
        </NavbarContent>
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
    </Navbar>
  );
}

export default AppBar;