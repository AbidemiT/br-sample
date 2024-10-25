import { useRef, useEffect } from "react";

const Radar = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      // Ensure canvas dimensions are set
      if (!canvas.width) canvas.width = 1000;
      if (!canvas.height) canvas.height = 1000;

      const ctx = canvas.getContext("2d");
    if (ctx) {
      let angle = 0;

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw grid background
        const gridSize = 30; // Smaller grid size for tiny lines
        ctx.strokeStyle = '#FFFFFF33';
        ctx.lineWidth = 0.02;
        for (let x = 0; x <= canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        for (let y = 0; y <= canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }

        // Draw radar sweep
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(600, 200);
        ctx.arc(600, 200, 200, angle, angle + Math.PI / 4); // Sweep angle
        ctx.closePath();
        ctx.clip();
        

        // Illuminate grid background lines only in the radar sweep area
        const gradient = ctx.createRadialGradient(600, 200, 0, 600, 200, 200);
        gradient.addColorStop(0.9, "rgba(112, 255, 0, 0.1)");
        // gradient.addColorStop(0.75, "rgba(112, 255, 0, 0.2)");
        // gradient.addColorStop(0, "rgba(112, 255, 0, 0.3)");
        // gradient.addColorStop(0.75, "rgba(0, 0, 0, 0.3)");
        // gradient.addColorStop(0.90, "rgba(0, 0, 0, 0.3)");
        ctx.strokeStyle =gradient;
        // ctx.strokeStyle = "rgba(112, 255, 0, 0.1)";
        ctx.lineWidth = 1;
        for (let x = 0; x <= canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        for (let y = 0; y <= canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
        ctx.restore();
        ctx.globalCompositeOperation = "lighter";

        angle += 0.01;
        if (angle >= Math.PI * 2) {
          angle = 0;
        }
        requestAnimationFrame(draw);
      };

      draw();
    }
    }
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
