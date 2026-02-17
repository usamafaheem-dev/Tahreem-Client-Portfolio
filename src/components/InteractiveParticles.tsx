"use client";

import React, { useRef, useEffect } from 'react';

interface Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    size: number;
    color: string;
    vx: number;
    vy: number;
    friction: number;
    ease: number;
    rotation: number;
    rotationSpeed: number;
}

const InteractiveParticles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        let particles: Particle[] = [];
        const particleCount = 100;
        const mouse = {
            x: -2000,
            y: -2000,
            radius: 250
        };

        const colors = [
            '#06b6d4', '#d946ef', '#8b5cf6', '#10b981', '#f59e0b', '#3b82f6'
        ];

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                particles.push({
                    x,
                    y,
                    originX: x,
                    originY: y,
                    size: Math.random() * 8 + 6,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    friction: 0.95,
                    ease: 0.02,
                    rotation: Math.random() * 360,
                    rotationSpeed: (Math.random() - 0.5) * 10
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach((p) => {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    p.vx += (dx / distance) * force * 1.5 + (dy / distance) * force * 0.5;
                    p.vy += (dy / distance) * force * 1.5 - (dx / distance) * force * 0.5;
                }

                const dxOrigin = p.originX - p.x;
                const dyOrigin = p.originY - p.y;
                p.vx += dxOrigin * 0.005 + (Math.random() - 0.5) * 0.1;
                p.vy += dyOrigin * 0.005 + (Math.random() - 0.5) * 0.1;

                p.vx *= p.friction;
                p.vy *= p.friction;

                p.x += p.vx;
                p.y += p.vy;
                p.rotation += p.rotationSpeed;

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation * Math.PI / 180);

                ctx.fillStyle = p.color;
                ctx.shadowBlur = 10;
                ctx.shadowColor = p.color;

                ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);

                ctx.restore();
            });

            requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            init();
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        init();
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0 opacity-60 dark:opacity-80"
        />
    );
};

export default InteractiveParticles;
