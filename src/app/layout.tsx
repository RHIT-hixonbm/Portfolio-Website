"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/PageSetup/Footer";
import Navbar from "@/components/PageSetup/NavBar";
import Spacer from "@/components/PageSetup/Spacer";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, {
  useEffect,
  useMemo,
  useState,
  useCallback,
  useRef,
} from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { ViewTransitions } from "next-view-transitions"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
  backgroundColor,
}: Readonly<{
  children: React.ReactNode;
  backgroundColor?: string;
}>) {
  const pathname = usePathname();
  const particlesEnabled = pathname === "/";

  //Stop Next.js from throwing an error about window.ethereum being undefined on mobile
  useEffect(() => {
    if (typeof window !== "undefined" && !window.ethereum) {
      window.ethereum = {};
      window.ethereum.selectedAddress = {};
    }
  }, []);

  // Initialize particles
  const [init, setInit] = useState(false);
  const containerRef = useRef<Container>(null);
  // Call the particle engine intialization function
  useEffect(() => {
    if (particlesEnabled) {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }
  }, [particlesEnabled]);
  // Particles options
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#000000",
        },
        links: {
          color: "#000000",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );
  // Sets the container reference when particles are loaded
  const particlesLoaded = useCallback(async (container?: Container) => {
    if (!container) {
      return;
    }
    containerRef.current = container;
  }, []);
  // Effect to limit the number of particles
  useEffect(() => {
    const PARTICLE_LIMIT = 150;
    const interval = setInterval(() => {
      if (!containerRef.current) {
        return;
      }
      const particleCount = containerRef.current.particles.count;
      if (particleCount > PARTICLE_LIMIT) {
        containerRef.current.particles.removeQuantity(
          particleCount - PARTICLE_LIMIT
        );
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex flex-col min-h-screen" style={{ backgroundColor }}>
            <Navbar />
            {/* Main content area */}{" "}
            {particlesEnabled && init && (
              <>
                {/* Particles background */}
                <div className="fixed inset-0 z-0 pointer-events-none">
                  <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                  />
                </div>
              </>
            )}
            <div className="relative z-10">
              <main className="flex-1">{children}</main>
            </div>
            {/* Push the footer down */}
            <div className="flex-1" />
            <div className="relative z-10">
              <Spacer height="6.5rem" />
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
