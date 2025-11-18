import React, { useRef, useEffect, useContext } from 'react';
import { ThemeContext } from '@/components/ui/themeContext';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const adjustHex = (hex, amount) => {
    if (!hex) return hex;
    let normalized = hex.replace('#', '');
    if (normalized.length === 3) {
        normalized = normalized
            .split('')
            .map((char) => char + char)
            .join('');
    }
    if (normalized.length !== 6) return hex;

    const num = parseInt(normalized, 16);
    const r = clamp((num >> 16) + amount, 0, 255);
    const g = clamp(((num >> 8) & 0xff) + amount, 0, 255);
    const b = clamp((num & 0xff) + amount, 0, 255);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

const toRgba = (rgb, alpha) => `rgba(${rgb}, ${alpha})`;

const buildPalette = (theme) => {
    if (theme === 'sunny' || theme === 'light') {
        const base = getComputedStyle(document.documentElement)
            .getPropertyValue('--background-color')
            .trim() || '#E0F7FA';
        const highlight = adjustHex(base, 40);
        const mid = adjustHex(base, 0);
        const shadow = adjustHex(base, -55);
        return {
            gradientStops: [
                { offset: 0, color: highlight },
                { offset: 0.45, color: mid },
                { offset: 1, color: shadow },
            ],
            // hexLineRgb: '13, 148, 136',
            // hexShadowRgb: '8, 145, 178',
            // glowRgb: '14, 165, 233',
            hexLineRgb: '4, 80, 140',
            hexShadowRgb: ' 6, 110, 150',
            glowRgb: ' 10, 130, 200',
            glowFadeRgb: '255, 255, 255',
            composite: {
                hex: 'multiply',
                glow: 'multiply',
            },
            stroke: {
                alphaBase: 0.22,
                alphaScale: 0.35,
                lineScale: 0.5,
            },
            shadow: {
                alphaBase: 0.18,
                alphaScale: 0.38,
                blurBase: 12,
                blurScale: 26,
            },
            glow: {
                inner: 1,
                mid: 0.55,
            },
        };
    }

    return {
        gradientStops: [
            { offset: 0, color: '#030816' },
            { offset: 0.35, color: '#031324' },
            { offset: 1, color: '#041f34' },
        ],
        hexLineRgb: '56, 189, 248',
        hexShadowRgb: '56, 189, 248',
        glowRgb: '56, 189, 248',
        glowFadeRgb: '0, 0, 0',
        composite: {
            hex: 'screen',
            glow: 'lighter',
        },
        stroke: {
            alphaBase: 0.08,
            alphaScale: 0.25,
            lineScale: 0.4,
        },
        shadow: {
            alphaBase: 0.05,
            alphaScale: 0.25,
            blurBase: 6,
            blurScale: 12,
        },
        glow: {
            inner: 0.85,
            mid: 0.4,
        },
    };
};

const ConnectingDotsBackground = ({ children }) => {
    const canvasRef = useRef(null);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let hexRadius = 0;
        let hexCenters = [];
        let glowNodes = [];

        const palette = buildPalette(theme);

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            width = window.innerWidth;
            height = window.innerHeight;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const buildGrid = () => {
            hexCenters = [];
            const minDimension = Math.min(width, height);
            hexRadius = Math.max(45, Math.min(90, minDimension / 11));

            const hexHeight = Math.sqrt(3) * hexRadius;
            const horizSpacing = hexRadius * 1.5;
            const vertSpacing = hexHeight;

            const cols = Math.ceil(width / horizSpacing) + 3;
            const rows = Math.ceil(height / vertSpacing) + 3;
            const offsetX = -hexRadius * 2;
            const offsetY = -hexHeight;

            for (let col = -1; col < cols; col++) {
                for (let row = -1; row < rows; row++) {
                    const x = offsetX + col * horizSpacing;
                    const y = offsetY + row * vertSpacing + (col % 2 ? vertSpacing / 2 : 0);
                    hexCenters.push({
                        x,
                        y,
                        strength: 0.25 + Math.random() * 0.6,
                    });
                }
            }
        };

        const buildGlowNodes = () => {
            glowNodes = [];
            const count = Math.max(22, Math.floor((width * height) / 55000));
            for (let i = 0; i < count; i++) {
                const center = hexCenters[Math.floor(Math.random() * hexCenters.length)];
                if (!center) continue;
                const vertexIndex = Math.floor(Math.random() * 6);
                const angle = Math.PI / 3 * vertexIndex;
                const x = center.x + hexRadius * Math.cos(angle);
                const y = center.y + hexRadius * Math.sin(angle);
                glowNodes.push({
                    x,
                    y,
                    intensity: 0.35 + Math.random() * 0.45,
                });
            }
        };

        const drawBackground = () => {
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            palette.gradientStops.forEach(({ offset, color }) => gradient.addColorStop(offset, color));
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        };

        const drawHexagon = ({ x, y, strength }) => {
            ctx.beginPath();
            for (let i = 0; i <= 6; i++) {
                const angle = Math.PI / 3 * i;
                const px = x + hexRadius * Math.cos(angle);
                const py = y + hexRadius * Math.sin(angle);
                if (i === 0) {
                    ctx.moveTo(px, py);
                } else {
                    ctx.lineTo(px, py);
                }
            }
            ctx.strokeStyle = toRgba(
                palette.hexLineRgb,
                palette.stroke.alphaBase + strength * palette.stroke.alphaScale
            );
            ctx.lineWidth = 1 + strength * palette.stroke.lineScale;
            ctx.shadowColor = toRgba(
                palette.hexShadowRgb,
                palette.shadow.alphaBase + strength * palette.shadow.alphaScale
            );
            ctx.shadowBlur = palette.shadow.blurBase + strength * palette.shadow.blurScale;
            ctx.stroke();
        };

        const drawHexGrid = () => {
            ctx.save();
            ctx.shadowBlur = 0;
            ctx.globalCompositeOperation = palette.composite.hex;
            hexCenters.forEach((center) => drawHexagon(center));
            ctx.restore();
        };

        const drawGlowNodes = () => {
            ctx.save();
            ctx.globalCompositeOperation = palette.composite.glow;
            glowNodes.forEach((node) => {
                const intensity = node.intensity;
                const radius = 2.5 + intensity * 4.5;
                const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius * 4);
                gradient.addColorStop(0, toRgba(palette.glowRgb, palette.glow.inner * intensity));
                gradient.addColorStop(0.45, toRgba(palette.glowRgb, palette.glow.mid * intensity));
                gradient.addColorStop(1, toRgba(palette.glowFadeRgb, 0));
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(node.x, node.y, radius * 4, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.restore();
        };

        const render = () => {
            drawBackground();
            drawHexGrid();
            drawGlowNodes();
        };

        const handleResize = () => {
            resizeCanvas();
            buildGrid();
            buildGlowNodes();
            render();
        };

        resizeCanvas();
        buildGrid();
        buildGlowNodes();
        render();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [theme]);

    return (
        <div className="relative bg-transparent">
            <canvas
                ref={canvasRef}
                id="hex-canvas"
                className="fixed top-0 left-0 w-full h-full -z-10"
            ></canvas>
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default ConnectingDotsBackground;