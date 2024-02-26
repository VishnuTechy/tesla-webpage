import React from 'react';
import logo2 from '../images/teslalogo.jpg';
function centerBgLogo() {
  return (
    <div
      className="imgBg"
      style={{
        backgroundColor: 'grey',
        width: '500px',
        height: '500px',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: -1,
        borderRadius: '50%',
        opacity: '0.17',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={"https://zeevector.com/wp-content/uploads/TSLA_Vector.svg"}
        alt="Tesla"
        width="50%"
        height="50%"
        title="Tesla"
        style={{
          objectFit: 'contain',
        }}
      />
    </div>
  );
}

export default centerBgLogo;
