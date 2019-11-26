import React from 'react';
import './menu-item.styles.scss';

export const MenuItem = ({title,imageUrl,size})=>(
    <div  className={`${size} menu-item`}>
        <div class="background-image" style={{backgroundImage:`url(${imageUrl})`}}></div>
        <div className='content'>
          <div className='title'>{title.toUpperCase()}</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
);