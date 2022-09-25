import React, { useState } from 'react';
import { Modal } from '@mui/material';

function DrawerComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  const getModalBody = () => (
    <>
      <div
        style={{
          float: 'right',
          width: '30%',
          display: 'flex',
          flexDirection: 'column',
          padding: '8px',
        }}
      >
        <span style={{ marginTop: '10px' }}>Home</span>
        <span style={{ marginTop: '10px' }}>Home</span>
        <span style={{ marginTop: '10px' }}>Home</span>
        <span style={{ marginTop: '10px' }}>Home</span>
        <span style={{ marginTop: '10px' }}>Home</span>
      </div>
    </>
  );
  return (
    <>
      <div
        style={{
          float: 'right',
          width: '35px',
          height: '35px',
          display: 'flex',
          margin: '0 auto',
          justifyContent: 'space-around',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid #aaa',
          borderRadius: '50%',
          //   paddingTop: '4px',
          //   paddingBottom: '4px',
          padding: '4px',
        }}
        onClick={handleOpen}
        aria-hidden
      >
        <span
          style={{
            border: '1px solid #222222',
            width: '50%',
            height: '1px',
            background: '#aaa',
          }}
        ></span>
        <span
          style={{
            border: '1px solid #222222',
            width: '50%',
            height: '1px',
            background: '#aaa',
          }}
        ></span>
        <span
          style={{
            border: '1px solid #222222',
            width: '50%',
            height: '1px',
            background: '#aaa',
          }}
        ></span>
      </div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {getModalBody()}
      </Modal>
    </>
  );
}

export default DrawerComponent;
