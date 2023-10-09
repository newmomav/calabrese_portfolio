import { useEffect, useState } from 'react';

const MouseFollow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX + 15, y: event.clientY + 15 });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        pointerEvents: 'none',
        fontWeight: 'bold',
        color: 'white',
        padding: '5px',
        borderRadius: '5px',
      }}
    >
      I am still searching for a studio!!!
    </div>
  );
};

export default MouseFollow;
