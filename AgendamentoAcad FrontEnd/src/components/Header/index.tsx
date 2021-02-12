import React from 'react';

import { Container } from './styles';
import Logo from '../../assets/logo.png';

const Header: React.FC = () => (
  <Container>
    <header>
      <img src={Logo} alt="Logo" />
    </header>
  </Container>

);

export default Header;
