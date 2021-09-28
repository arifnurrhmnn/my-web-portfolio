import styled from "styled-components";
import { Btn } from "../../Theme/GlobalStyle";

export const ContactMe = styled.div`
  display: flex;
  padding-top: 5rem;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  @media screen and (max-width: 767px) {
    padding-top: 2rem;
  }
  @media screen and (max-width: 575px) {
    padding-top: 1rem;
  }
`;
export const ContactTitle = styled.h1`
  max-width: 50%;
  text-align: center;
  margin-bottom: 3rem;
  font-size: 3.25rem;
  line-height: 1.1;
  font-weight: 600;
  line-height: 60px;
  @media screen and (max-width: 991px) {
    font-size: 2.8rem;
    line-height: 55px;
    max-width: 90%;
  }
  @media screen and (max-width: 575px) {
    font-size: 2rem;
    line-height: 50px;
    max-width: 80%;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.6rem;
    line-height: 40px;
    max-width: 90%;
  }
`;
export const ContactDesc = styled.p`
  max-width: 60%;
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (max-width: 991px) {
    max-width: 80%;
  }
  @media screen and (max-width: 767px) {
    max-width: 95%;
  }
`;
export const ContactLink = styled.a`
  &:hover {
    transition: all 0.3s ease-out;
  }
`;
export const ContactButton = styled(Btn)`
  background-color: transparent;
  padding: 16px 64px;
  color: #fff;
  outline: none;
  border: 2px solid #079211;
  &:hover {
    border: 2px solid #127419;
    color: #bfbfbf;
    box-shadow: 0px 10px 13px -10px #000000;
  }
  ${Btn};
`;
