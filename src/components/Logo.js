import React from 'react';
import { Image } from 'react-bootstrap';
import logoImg from '../assets/logo.png';

const Logo = () => {
  return (
    <Image src={logoImg} roundedCircle />
  );
}

export default Logo;
