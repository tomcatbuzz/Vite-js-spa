export function transition(currentPage, nextPage) {
  return new Promise((resolve, reject) => {
    const duration = 500;
    let startTime;

      function animate(currentTime) {
          if (!startTime) {
              startTime = currentTime;
          }

          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);

          document.querySelector('body').style.opacity = 1 - progress;

          if (progress === 1) {
              resolve();
          } else {
              requestAnimationFrame(animate);
          }
      }

      requestAnimationFrame(animate);
  });
}