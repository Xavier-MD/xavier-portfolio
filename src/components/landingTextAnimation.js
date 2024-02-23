import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LandingTextAnimation() {
  // Array of strings to animate
  const titles = ['Hello', 'World', 'React', 'Animation', 'GSAP'];
  // Ref to hold all the p tags
  const textRefs = useRef([]);
  textRefs.current = [];

  // Add elements to the refs array
  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    textRefs.current.forEach((text, index) => {
      // Assuming 'text' is the div container for each title
      const chars = gsap.utils.toArray(text.querySelectorAll('span'));
      tl.fromTo(
        chars,
        { y: '100%' },
        { y: '0%', stagger: 0.05, duration: 0.5 },
        `+=${index * 0.5}`
      ).to(chars, { y: '-100%', stagger: 0.05, duration: 0.5 }, `>+=0.5`);
    });
  }, []);


  return (
    <div>
      {titles.map((title, index) => (
        <div
          key={index}
          style={{
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap'
          }}
        >
          {title.split('').map((char, charIndex) => (
            <span key={charIndex} style={{ display: 'inline-block' }}>
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
