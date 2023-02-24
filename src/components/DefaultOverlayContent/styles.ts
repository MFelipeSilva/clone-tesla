import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Headers = styled.div`
  text-align: center;
  margin-top: 16.5vh;

  > h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    color: #171A20;
  }

  > h2 {
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0.5px;
    line-height: 30px;
    color: #45494D;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 130px;

  > button {
    background: #3A3D41;
    width: 17em;
    height: 40px;
    color: #fff;
    

    font-size: 15px;
    font-weight: 500;
    
    
    border: none;
    outline: 0;
    cursor: pointer;
    padding: 13px 40px;
    border-radius: 5px;

    &.white {
      background: #E6E7E5;
      color: #3A3D41;
      
    }
    & + button {
        margin: 10px 0 0;
      }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    margin-bottom: 90px;

    > button + button {
      margin: 0 0 0 20px;
    }
  }
`;