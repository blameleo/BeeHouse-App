import React from 'react'

export default function RegistrationButton({ label, onClick }) {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className=''>
      <button className='w-96 border border-black border-2 shadow-2xl rounded  bg-yellow-500 p-3' onClick={handleOnClick}>
        {label}
      </button>
    </div>
  );
}
