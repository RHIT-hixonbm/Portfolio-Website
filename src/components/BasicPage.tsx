"use client";

import React, { useEffect } from "react";
import "@/components/HeroBanner"
import Footer from "@/components/Footer"
import Navbar from "@/components/NavBar";
import Spacer from "@/components/Spacer";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ethereum?: any;
  }
}

export default function BasicPage({ children, backgroundColor }: { children: React.ReactNode, backgroundColor?: string }) {
  //Stop Next.js from throwing an error about window.ethereum being undefined on mobile
  useEffect(() => {
    if (typeof window !== "undefined" && !window.ethereum) {
      window.ethereum = {};
      window.ethereum.selectedAddress = {};
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Main content area */}
      {children}
      {/* Spacer to push footer down */}
      <Spacer height="2rem" backgroundColor={ backgroundColor } />
      <div className="flex-1"/>
      <Footer />
    </div>
  );
}