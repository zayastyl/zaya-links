function updateParallex(x, y) {
    const moveX = (x / window.innerWidth - 0.5) * 15;
    const moveY = (y / window.innerHeight - 0.5) * 15;
  document.querySelector(".bg").style.backgroundPosition = 
    `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
}

  document.addEventListener("mousemove", (e) => {
    updateParallex(e.clientX, e.clientY);
  });

  document.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    updateParallex(touch.clientX, touch.clientY);
  });