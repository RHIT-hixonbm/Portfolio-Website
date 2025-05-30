"use client";

import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 mb-3 rounded-lg border-b border-neutral-200">
      <div className="container mx-auto flex justify-start md:justify-center items-center py-4 px-6 md:px-12">
        {/* Logo or site name
        <Link href="/" className="text-2xl font-bold text-neutral-900">
          Brett M. Hixon
        </Link> */}

        {/* Navigation Links For Desktop*/}
        <div className="space-x-6 hidden md:flex gap-20">
          <Link
            href="/"
            className="text-neutral-700 hover:text-neutral-900 transition text-lg font-bold"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-neutral-700 hover:text-neutral-900 transition text-lg font-bold"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-neutral-700 hover:text-neutral-900 transition text-lg font-bold"
          >
            Projects
          </Link>
          <HoverCard>
            <HoverCardTrigger>
              <div className="text-neutral-700 hover:text-neutral-900 transition text-lg font-bold cursor-default">
                Contact
              </div>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="text-sm text-neutral-800">
                <p className="font-medium mb-1">Brett M. Hixon</p>
                <p className="mb-2">Rose-Hulman Institute of Technology</p>
                <p className="mb-1">
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:hixonbm@rose-hulman.edu"
                    className="text-blue-600 underline"
                  >
                    hixonbm@rose-hulman.edu
                  </a>
                </p>
                <p className="mb-1">
                  <span className="font-semibold">GitHub:</span>{" "}
                  <a
                    href="https://github.com/RHIT-hixonbm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    github.com/RHIT-hixonbm
                  </a>
                </p>
                <p>
                  <span className="font-semibold">LinkedIn:</span>{" "}
                  <a
                    href="https://www.linkedin.com/in/hixonbm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    linkedin.com/in/hixonbm
                  </a>
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-neutral-900" />
            </SheetTrigger>
            <SheetContent side="left" className="w-64 px-4">
              <SheetHeader>
                <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-lg font-bold text-neutral-700 hover:text-neutral-900"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-bold text-neutral-700 hover:text-neutral-900"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="text-lg font-bold text-neutral-700 hover:text-neutral-900"
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-bold text-neutral-700 hover:text-neutral-900"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
