import styled from 'styled-components';
import firstbackgroundimg from '../../assets/desktop/firstbackgroundimg.jpg';
import secondbackgroundimg from '../../assets/desktop/secondbackgroundimg.jpg';
import thirdbackgroundimg from '../../assets/desktop/thirdbackgroundimg.jpg';
import fourthbackroundimg from '../../assets/desktop/fourthbackroundimg.jpg';
import fifthbackgroundimg from '../../assets/desktop/fifthbackgroundimg.jpg';
import sixthbackgroundimg from '../../assets/desktop/sixthbackgroundimg.jpg';
import seventhbackgroundimg from '../../assets/desktop/seventhbackgroundimg.jpg';

import firstbackgroundmobile from '../../assets/mobile/firstbackgroundmobile.jpg';
import secondbackgroundmobile from '../../assets/mobile/secondbackgroundmobile.jpg';
import thirdbackgroundmobile from '../../assets/mobile/thirdbackgroundmobile.jpg';
import fourthbackroundmobile from '../../assets/mobile/fourthbackroundmobile.jpg';
import fifthbackgroundmobile from '../../assets/mobile/fifthbackgroundmobile.jpg';
import sixthbackgroundmobile from '../../assets/mobile/sixthbackgroundmobile.jpg';
import seventhbackgroundmobile from '../../assets/mobile/seventhbackgroundmobile.jpg';



export const Container = styled.div`
  
  
  .backgroundimage:nth-child(1) {
    background-image: url(${firstbackgroundimg});

    @media (max-width: 600px) {
      background-image: url(${firstbackgroundmobile});
    }
  };
  .backgroundimage:nth-child(2) {
    background-image: url(${secondbackgroundimg});

    @media (max-width: 600px) {
      background-image: url(${secondbackgroundmobile});
    }
  };
  .backgroundimage:nth-child(3) {
    background-image: url(${thirdbackgroundimg});

    @media (max-width: 600px) {
      background-image: url(${thirdbackgroundmobile});
    }
  };
  .backgroundimage:nth-child(4) {
    background-image: url(${fourthbackroundimg});

    @media (max-width: 600px) {
      background-image: url(${fourthbackroundmobile});
    }
  };
  .backgroundimage:nth-child(5) {
    background-image: url(${fifthbackgroundimg});

    @media (max-width: 600px) {
      background-image: url(${fifthbackgroundmobile});
    }
  };
  .backgroundimage:nth-child(6) {
    background-image: url(${sixthbackgroundimg});

    @media (max-width: 600px) {
      background-image: url(${sixthbackgroundmobile});
    }
  };
  .backgroundimage:nth-child(7) {
    background-image: url(${seventhbackgroundimg});

    @media (max-width: 600px) {
      background-image: url(${seventhbackgroundmobile});
    }
  };
`;