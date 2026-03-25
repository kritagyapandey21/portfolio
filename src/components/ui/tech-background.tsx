"use client";

import React, { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export default function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let rafId = 0;

    const nodeCount = window.innerWidth < 768 ? 32 : 56;
    const connectDistance = window.innerWidth < 768 ? 110 : 140;
    const speed = reduceMotion ? 0 : 0.15;

    const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
    }));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < -10 || node.x > width + 10) node.vx *= -1;
        if (node.y < -10 || node.y > height + 10) node.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.hypot(dx, dy);

          if (distance < connectDistance) {
            const alpha = 1 - distance / connectDistance;
            ctx.strokeStyle = `rgba(110, 189, 255, ${alpha * 0.22})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = "rgba(130, 225, 255, 0.78)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2.8, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) {
        rafId = window.requestAnimationFrame(drawFrame);
      }
    };

    resize();
    drawFrame();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="tech-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="tech-bg__canvas" />
      <div className="tech-bg__overlay" />
      <div className="tech-bg__vignette" />
    </div>
  );
}