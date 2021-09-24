import styled from "styled-components";
import { Container } from "../../Theme/GlobalStyle";

export const Foo = styled.footer`
  background-color: #161616;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kanit", serif;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 3rem 0 3rem 0;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4rem;
  @media screen and (max-width: 575px) {
    flex-flow: column wrap;
    width: 100%;
    margin-bottom: 5rem;
  }
  ${Container}
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  flex: 3;
  @media screen and (max-width: 575px) {
    margin-bottom: 2rem;
  }
`;

export const FooterTitle = styled.h3`
  margin-bottom: 12px;
  font-size: 2rem;
  font-weight: 600;
  color: #f7f8fa;
  @media screen and (max-width: 575px) {
    font-size: 1.7rem;
  }
`;

export const FooterSubtitle = styled.p`
  font-size: 1rem;
`;

export const EmailLink = styled.a`
  margin-left: 4px;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #bfbfbf;
    text-decoration: underline;
  }
`;

export const LinkWrapper = styled.div`
  padding-top: 12px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex: 1;
  gap: 1rem;
  @media screen and (max-width: 575px) {
    justify-content: flex-start;
  }
`;

export const SocialLinks = styled.a`
  color: #bfbfbf;
  display: flex;
  text-decoration: none;
  &:hover {
    transition: all 0.3s ease-out;
    color: #818a91;
  }
`;
