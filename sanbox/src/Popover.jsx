// Popover.jsx
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Popover = ({ children, onClose, position = { top: 0, left: 0 } }) => {
  const popoverRef = useRef();

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const style = {
    position: 'absolute',
    top: position.top,
    left: position.left,
    zIndex: 9999,
    background: 'white',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '6px',
    boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
  };

  return ReactDOM.createPortal(
    <div ref={popoverRef} style={style}>
      {children}
    </div>,
    document.getElementById('popover-root')
  );
};

export default Popover;
