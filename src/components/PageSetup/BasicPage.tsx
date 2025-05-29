"use client";

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import PageSetup from "./PageSetup";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ethereum?: any;
  }
}

export default function BasicPage({
  children,
  backgroundColor = "white",
}: {
  children: React.ReactNode;
  backgroundColor?: string;
}) {
  //Stop Next.js from throwing an error about window.ethereum being undefined on mobile
  useEffect(() => {
    if (typeof window !== "undefined" && !window.ethereum) {
      window.ethereum = {};
      window.ethereum.selectedAddress = {};
    }
  }, []);

  // Initialize particles
  const [init, setInit] = useState(false);
  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };
  // Call the particle engine intialization function
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
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

  return !init ? (
    <PageSetup backgroundColor={backgroundColor}>{children}</PageSetup>
  ) : (
    <>
      {/* Particles background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
      {/* Foreground content */}
      <PageSetup backgroundColor={backgroundColor}>{children}</PageSetup>
    </>
  );
}
