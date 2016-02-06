import React from 'react';

let BoxComponent = (props) => {

const style = {
  backgroundColor: '#40b4e5',
  color: 'white',
  padding: 15,
  borderStyle: 'solid',
  borderWidth: 2,
  borderColor: '#85CEEC',
  width: 200,
  textAlign: 'center',
  ...props.style
}

let PrimaryText = 'Default Section Name';
PrimaryText = (props.PrimaryText) ? props.PrimaryText : PrimaryText;

return (
  <div style={style}>{PrimaryText}</div>
  )
}

export default BoxComponent;