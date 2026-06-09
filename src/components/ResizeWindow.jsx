import { useState, useEffect } from 'react';

function WidthTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <div>
      <h2>Window Width Tracker</h2>
      <p >
        Resize your browser window to see the effect:
      </p>
      <h1>Width: {width}px</h1>
    </div>
  );
}

export default WidthTracker;