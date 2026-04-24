import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SmoothScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!window.Lenis) return undefined;

    const Lenis = window.Lenis;
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.3,
    });

    let rafId = 0;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');

    if (!revealElements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    revealElements.forEach((element) => {
      element.classList.remove('is-visible');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

export default SmoothScroll;
