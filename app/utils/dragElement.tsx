import React, { useRef } from 'react';

type DraggableProps = {
  children: React.ReactNode;
};

function Draggable({ children }: DraggableProps) {
  const divRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging = true;
    offsetX = e.clientX - (divRef.current?.getBoundingClientRect().left || 0);
    offsetY = e.clientY - (divRef.current?.getBoundingClientRect().top || 0);
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const div = divRef.current;
      if (div) {
        div.style.left = `${e.clientX - offsetX}px`;
        div.style.top = `${e.clientY - offsetY}px`;
      }
    }
  };

  return (
    <div
      ref={divRef}
      style={{
        position: 'absolute',
        userSelect: 'none',
        width: 'fit-content',
        pointerEvents: 'none',
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
}

export default Draggable;
