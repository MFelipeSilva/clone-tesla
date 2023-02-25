import styled from 'styled-components';

import { LogoSVG } from './IconSVG'
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Announcement = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  width: 100%;
  color: #515458;
  font-size: 14px;
  font-weight: 400;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  background-color: white;

  a {
    margin-left: 5px;
  }

  @media (max-width: 600px) {
    min-height: 92px;
    padding: 20px;
    flex-direction: column;
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  padding: 70px 0;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    align-items: center;
    font-weight: 500;
    justify-content: row;

    li + li {
        margin: 0 0 0 5px;
      }

    li {
      list-style: none;
      
      
      a {
        color: #171A20;
        font-size: 14px;
        padding: 8px 13px 8px 13px;
        border-radius: 5px;
        letter-spacing: 0.5px;
        text-decoration: none;

        &:hover {
          background: #C3CFD9;
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 120px ;
  }

  @media (max-width: 1200px) {
    ul {
      display: none;

     li {
        
       a {
        
        display: none;
       }
      }
    }
  }
`;

export const Logo = styled(LogoSVG)`
  position: fixed;
  left: 0;
  padding-left: 50px;
  height: 12.1px;
  cursor: pointer;

  @media (max-width: 600px) {
    padding-left: 20px ;
  }
`;

export const Texts = styled.div`
  position: fixed;
  right: 0;

  display: flex;
  padding-right: 50px;

  ul{

    li {
      

      a {
        color: #171A20;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.5px;
        text-decoration: none;
      }
    }
  }
`;

export const Burger = styled.div`

`;

export const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 30px;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    
    li {
      list-style: none;
      font-size: 12px;

      & + li {
        margin: 10px 0 0;
      }

      a {
        text-decoration: none;
        color: #393c41;
      }
    }
  }

  @media (min-width: 600px) {
    ul {
      flex-direction: row;

      li + li {
        margin: 0 0 0 30px;
      }
    }
  }
`;
