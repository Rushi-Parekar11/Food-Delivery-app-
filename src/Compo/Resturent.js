import React from 'react';
import Card from './Card';
import "./Res.scss";

function Resturent({ menudata }) {
  return (
    <>
      {menudata.map((ele, index) => (
        <Card ele={ele} key={index} />
      ))}
    </>
  );
}

export default Resturent;
