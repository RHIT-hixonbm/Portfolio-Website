"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <>
      <footer className="w-full max-w-full border-t text-sm text-neutral-500 bg-white rounded-lg border-b border-neutral-200">
          <div className="grid grid-cols-3 items-center py-4 px-6 shadow-lg rounded-lg w-full max-w-full gap-x-4">
            {/* Attribution */}
            <p className="mb-2 md:mb-0 px-5 text-xs">
              &copy; {new Date().getFullYear()} Brett M. Hixon. Built with Next.js + Tailwind CSS + shadcn/ui.
            </p>

            {/* Call to action buttons */}
            <div className="flex flex-col items-center md:flex-row justify-center gap-4">
              <Button
                  variant="outline"
                  size="lg"
                  className="border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white transition w-max cursor-pointer text-xs md:text-sm"
                  aria-label="Back to top"
                  onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" });}}
              > 
                  Back to Top
              </Button>
              <a href="https://github.com/RHIT-hixonbm/Portfolio-Website" target="_blank" rel="noopener noreferrer">
                <Button
                    variant="outline"
                    size="lg"
                    className="border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white transition w-max cursor-pointer text-xs md:text-sm"
                    aria-label="View source code"
                > 
                    View Source Code
                </Button>
              </a>
            </div>

            {/* Links */}
            <div className="flex justify-end gap-3 md:gap-10">
              <a
                href="mailto:hixonbm@rose-hulman.edu"
                className="flex items-center space-x-2 hover:text-neutral-900"
                target="_blank"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
                <span className="hidden md:inline">hixonbm@rose-hulman.edu</span>
              </a>
              <a
                href="https://github.com/RHIT-hixonbm"
                className="hover:text-neutral-900"
                target="_blank"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/brett-hixon-a163922a1/"
                className="hover:text-neutral-900"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
      </footer>
    </>
  );
}