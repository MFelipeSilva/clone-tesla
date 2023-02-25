import React from 'react';
import { useTransform } from 'framer-motion';
import { useWrapperScroll } from '../Model/useWrapperScroll';

import { Container, Announcement, Header, Texts, Logo, Burger, Footer } from './styles';

export const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])


  return (
    <Container>
     <Header>
      <Announcement>
        Original website: <a href="https://www.tesla.com/">https://www.tesla.com</a>&nbsp;replicated for study and challenge purposes only.
      </Announcement>

      <Logo />
      
      <ul>
          <li>
            <a href="#">Model S</a>
          </li>
          <li>
            <a href="#">Model 3</a>
          </li>
          <li>
            <a href="#">Model X</a>
          </li>
          <li>
            <a href="#">Model Y</a>
          </li>
          <li>
            <a href="#">Solar Roof</a>
          </li>
          <li>
            <a href="#">Solar Panels</a>
          </li>
        </ul>

        <Texts>
          <ul>
            <li>
              <a href="">Shop</a> 
            </li>
            <li>
              <a href="">Account</a> 
            </li>
            <li>
              <a href="">Menu</a> 
            </li>
          </ul>
        </Texts>
      <Burger />
     </Header>

     <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">Lorem ipsum</a>
          </li>
          <li>
            <a href="#">Lorem ipsum</a>
          </li>
          <li>
            <a href="#">cloned by mutadofs</a>
          </li>
        </ul>
     </Footer>
    </Container>
  );
}
