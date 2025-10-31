 document.addEventListener("DOMContentLoaded", () => {
      const section = document.querySelector(".counter-section");
      const counters = section.querySelectorAll("span[data-target]");
      let started = false; // prevents re-trigger

      // Animate all counters together
      function animateCounters(duration) {
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1); // 0 → 1

          counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            const value = Math.floor(progress * target);
            counter.textContent = value;
          });

          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            counters.forEach(counter => counter.textContent = counter.getAttribute("data-target"));
          }
        }

        requestAnimationFrame(update);
      }

      // Trigger when section enters viewport
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !started) {
            started = true;
            animateCounters(2000); // 2000ms = 2s duration
          }
        });
      }, { threshold: 0.2 }); // trigger when 20% of section visible

      observer.observe(section);
    });