import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (min-width: 200px) {
    width: 100%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 55%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  @media screen and (min-width: 200px) {
    width: 100%;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
  @media screen and (min-width: 200px) {
    font-size: 12px;
    font-weight: bold;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  @media screen and (min-width: 200px) {
    font-size: 16px;
    font-weight: bold;
  }
`;
