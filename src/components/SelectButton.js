import React from 'react'

const SelectButton = ({ children, selected, onClick }) => {
  return (
    <button className= {selected ? "bg-gold selected-btn":"selected-btn" } onClick={onClick} >
      {children}
    </button>
  );
};

export default SelectButton