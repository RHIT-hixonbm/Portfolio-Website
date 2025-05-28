"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full border-t mt-16 py-6 text-sm text-neutral-500 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-4 mb-0 shadow-lg rounded-lg">
        {/* Attribution */}
        <p className="mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Brett M. Hixon. Built with Next.js + Tailwind CSS + shadcn/ui.
        </p>

        {/* Back to top button */}
        <Button
            variant="outline"
            size="lg"
            className="border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white transition"
            aria-label="Back to top"
        > 
            Back to Top
        </Button>

        {/* Links */}
        <div className="flex space-x-4">
          <a
            href="mailto:hixonbm@rose-hulman.edu"
            className="flex items-center space-x-2 hover:text-neutral-900"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
            <span>hixonbm@rose-hulman.edu</span>
          </a>
          <a
            href="https://github.com/your-github-username"
            className="hover:text-neutral-900"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-id"
            className="hover:text-neutral-900"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}