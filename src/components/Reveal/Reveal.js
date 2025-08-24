

'use client';
import { useEffect, useRef, useState } from "react";
import styles from "./reveal.module.scss";

/**
 * Reveal
 * Props:
 * - effect: 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in'
 * - delay: number (ms)
 * - once: boolean (default true)
 * - as: element tag (default 'div')
 */
export default function Reveal({
  children,
  effect = "fade",
  delay = 0,
  once = true,
  as: Tag = "div",
  className="",
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Defer activation slightly to ensure initial inactive styles paint
            const activate = () => setVisible(true);
            if (typeof window !== 'undefined' && window.requestAnimationFrame) {
              requestAnimationFrame(() => setTimeout(activate, 20));
            } else {
              setTimeout(activate, 20);
            }
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
  { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    observer.observe(el);

    // If already in view on mount (above-the-fold), mark as visible after a tick
    if (typeof window !== 'undefined') {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
      if (inView) {
        setTimeout(() => setVisible(true), 30);
      }
    }
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={[
        styles.reveal,
        visible ? styles.active : styles.inactive,
        className || "",
      ].filter(Boolean).join(" ")}
  data-effect={effect}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
