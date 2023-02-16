import React, { LegacyRef } from 'react';
import '../css/effect.css';

export const FadeInSection = (props: any) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(domRef.current as unknown as Element);
    return () => observer.unobserve(domRef.current as unknown as Element);
  }, []);
  return (
    <div
      className={`${props.fade ?? 'fade-in-up'} ${isVisible ? 'visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};
