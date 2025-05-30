"use client";

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
  const containerRef = useRef<Container>(null);
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
