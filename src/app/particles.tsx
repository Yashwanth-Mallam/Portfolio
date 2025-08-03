"use client";
import React, { useEffect, useRef } from "react";

type Particle = {
  size: number;
  position: { x: number; y: number };
  offset: { x: number; y: number };
  shift: { x: number; y: number };
  speed: number;
  targetSize: number;
  fillColor: string;
  orbit: number;
};

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let SCREEN_WIDTH = window.innerWidth;
    let SCREEN_HEIGHT = window.innerHeight;
    const RADIUS = 70;
    let RADIUS_SCALE = 1;
    const RADIUS_SCALE_MIN = 1;
    const RADIUS_SCALE_MAX = 1.5;
    const QUANTITY = 25;

    let particles: Particle[] = [];
    let mouseX = SCREEN_WIDTH * 0.5;
    let mouseY = SCREEN_HEIGHT * 0.5;
    let mouseIsDown = false;

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    function createParticles() {
      particles = [];
      for (let i = 0; i < QUANTITY; i++) {
        particles.push({
          size: 1,
          position: { x: mouseX, y: mouseY },
          offset: { x: 0, y: 0 },
          shift: { x: mouseX, y: mouseY },
          speed: 0.01 + Math.random() * 0.04,
          targetSize: 1,
          fillColor:
            "#" + ((Math.random() * 0x404040 + 0xaaaaaa) | 0).toString(16),
          orbit: RADIUS * 0.5 + RADIUS * 0.5 * Math.random(),
        });
      }
    }

    function loop() {
      if (!context) return;
      if (mouseIsDown) {
        RADIUS_SCALE += (RADIUS_SCALE_MAX - RADIUS_SCALE) * 0.02;
      } else {
        RADIUS_SCALE -= (RADIUS_SCALE - RADIUS_SCALE_MIN) * 0.02;
      }
      RADIUS_SCALE = Math.min(RADIUS_SCALE, RADIUS_SCALE_MAX);

      context.fillStyle = "rgba(0,0,0,0.05)";
      context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

      particles.forEach((particle, i) => {
        const lp = { ...particle.position };
        particle.offset.x += particle.speed;
        particle.offset.y += particle.speed;
        particle.shift.x += (mouseX - particle.shift.x) * particle.speed;
        particle.shift.y += (mouseY - particle.shift.y) * particle.speed;
        particle.position.x =
          particle.shift.x +
          Math.cos(i + particle.offset.x) * (particle.orbit * RADIUS_SCALE);
        particle.position.y =
          particle.shift.y +
          Math.sin(i + particle.offset.y) * (particle.orbit * RADIUS_SCALE);
        particle.position.x = Math.max(
          Math.min(particle.position.x, SCREEN_WIDTH),
          0
        );
        particle.position.y = Math.max(
          Math.min(particle.position.y, SCREEN_HEIGHT),
          0
        );
        particle.size += (particle.targetSize - particle.size) * 0.05;
        if (Math.round(particle.size) === Math.round(particle.targetSize)) {
          particle.targetSize = 1 + Math.random() * 7;
        }
        context.beginPath();
        context.fillStyle = particle.fillColor;
        context.strokeStyle = particle.fillColor;
        context.lineWidth = particle.size;
        context.moveTo(lp.x, lp.y);
        context.lineTo(particle.position.x, particle.position.y);
        context.stroke();
        context.arc(
          particle.position.x,
          particle.position.y,
          particle.size / 2,
          0,
          Math.PI * 2,
          true
        );
        context.fill();
      });

      requestAnimationFrame(loop);
    }

    function resizeHandler() {
      SCREEN_WIDTH = window.innerWidth;
      SCREEN_HEIGHT = window.innerHeight;
      if (canvas) {
        canvas.width = SCREEN_WIDTH;
        canvas.height = SCREEN_HEIGHT;
      }
    }

    createParticles();
    resizeHandler();
    loop();

    window.addEventListener("resize", resizeHandler);
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    window.addEventListener("mousedown", () => (mouseIsDown = true));
    window.addEventListener("mouseup", () => (mouseIsDown = false));

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
