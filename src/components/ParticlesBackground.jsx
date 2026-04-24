'use client';

import { useCallback, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  const options = useMemo(() => ({
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#3b82f6', // Corresponds to primary color
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: '#3b82f6',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
      },
    },
    detectRetina: true,
  }), []);

  return <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} />;
}