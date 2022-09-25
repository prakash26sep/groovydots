import React from 'react';

export default function StyleOptions() {
  return (
    <div
      style={{
        zIndex: 9999,
        marginLeft: '0px',
        position: 'fixed',
        left: 0,
        top: '20%',
        background: '#222222',
        borderRadius: '0 3px 3px 0',
        marginTop: '10px',
        padding: '20px 5px',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          height: '100px',
          backgroundImage: 'url(/option_panel.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '20px 100px',
          width: '20px',
        }}
      ></div>
    </div>
  );
}
