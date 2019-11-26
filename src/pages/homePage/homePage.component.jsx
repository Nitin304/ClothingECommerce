import React from 'react';
import './homePage.styles.scss';
import Directory from '../../components/directory/directory.component';

export const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <Directory></Directory>
  </div>
);
