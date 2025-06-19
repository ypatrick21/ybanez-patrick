import { useEffect, useState } from 'react';

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    show && (
      <button id="backToTop" title="Go to top" onClick={scrollToTop}>
        <span className="material-symbols-outlined">arrow_upward</span>
      </button>
    )
  );
}

export default BackToTop;
