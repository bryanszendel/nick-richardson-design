import React from 'react';

import '../../styles/global.scss';

export default function ParagraphWithTitle(props) {

  return (
    <div 
      style={{
        width: '100%',
        maxWidth: '800px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        // color: '#03B770',
        fontSize: '30px',
        lineHeight: '30px',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '80px'
      }}
    >
      <div
        style={{
          fontFamily: 'Gotham Ultra',
          textAlign: 'left',
          lineHeight: '48px',
          // paddingRight: '20px',
          // paddingLeft: '20px'
        }}
      >{props.title}</div>
      <div 
        style={{
          fontFamily: 'Gotham Book',
          color: '#28282A',
          fontSize: '24px',
          lineHeight: '40px',
          marginTop: '20px'
        }}
      >{props.paragraph}</div>
    </div>
  )
}