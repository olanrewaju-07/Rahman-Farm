import React from 'react'
import './Title.css'

const Title = ({subTitle, title}) => {
  return (
    <div className="Title container">
      <p>{subTitle}</p>
      <h1>{title}</h1>
    </div>
  );
}

export default Title