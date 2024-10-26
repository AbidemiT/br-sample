import { useRef, useEffect } from "react";

const Radar = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = 2600 * dpr;
    canvas.height = 1200 * dpr;
    canvas.style.width = "2600px";
    canvas.style.height = "1200px";

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(dpr, dpr);
    let angle = 0;
    const gridSize = 40;

    const drawGrid = () => {
      ctx.strokeStyle = '#FFFFFF33';
      ctx.lineWidth = 0.01;
      for (let x = 0; x <= canvas.width / dpr; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height / dpr);
        ctx.stroke();
      }
      for (let y = 0; y <= canvas.height / dpr; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width / dpr, y);
        ctx.stroke();
      }
    };

    const drawRadarSweep = () => {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1300, 400);
      ctx.arc(1300, 400, 400, angle, angle + Math.PI / 3);
      ctx.closePath();
      ctx.clip();

      const gradient = ctx.createRadialGradient(1200, 400, 0, 1200, 400, 400);
      gradient.addColorStop(0.9, "rgba(112, 255, 0, 0.1)");
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      for (let x = 0; x <= canvas.width / dpr; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height / dpr);
        ctx.stroke();
      }
      for (let y = 0; y <= canvas.height / dpr; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width / dpr, y);
        ctx.stroke();
      }
      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      drawRadarSweep();
      angle = (angle + 0.01) % (Math.PI * 2);
      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-96 w-full object-contain"
      width={1300}
      height={600}
    ></canvas>
  );
};

export default Radar;
