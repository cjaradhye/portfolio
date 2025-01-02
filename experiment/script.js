document.querySelectorAll('.hex').forEach((hex) => {
    hex.addEventListener('mousemove', (e) => {
      const rect = hex.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
  
      const xOffset = (x - 0.5) * 10; // Adjust multiplier for intensity
      const yOffset = (y - 0.5) * 10;
  
      hex.style.transform = `scale(1.05) translate(${xOffset}px, ${yOffset}px)`;
    });
  
    hex.addEventListener('mouseleave', () => {
      hex.style.transform = 'scale(1) translate(0, 0)';
    });
  });
  