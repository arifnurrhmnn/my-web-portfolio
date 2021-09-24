import styled from "styled-components";
import { Btn } from "../../Theme/GlobalStyle";

export const InfoRow = styled.div`
  display: flex;
  min-height: 100vh;
  margin: 0rem -15px 0 -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

export const InfoColumn = styled.div`
  padding: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 767px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  @media screen and (max-width: 767px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TopLine = styled.h3`
  color: #079211;
  font-size: 1.8rem;
  font-weight: 600;
  @media screen and (max-width: 991px) {
    font-size: 1.6rem;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 24px;
  font-size: 3.25rem;
  line-height: 1.1;
  font-weight: 600;
  line-height: 60px;
  color: #f7f8fa;
  @media screen and (max-width: 991px) {
    font-size: 2.8rem;
    line-height: 55px;
  }
  @media screen and (max-width: 575px) {
    font-size: 2.4rem;
    line-height: 50px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1rem;
  line-height: 30px;
  color: #bfbfbf;
`;

export const SocialMedia = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 991px) {
    gap: 1.5rem;
  }
  @media screen and (max-width: 575px) {
    gap: 1rem;
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

export const Button = styled(Btn)`
  ${Btn}
  margin-right: 30px;
  background: #079211;
  padding: 16px 32px;
  color: #fff;
  outline: none;
  border: none;
  margin-right: 28px;
  &:hover {
    background: #127419;
    box-shadow: 0px 10px 13px -10px #000000;
  }
  @media screen and (max-width: 991px) {
    margin-right: 1.4rem;
  }
  @media screen and (max-width: 575px) {
    margin-right: 1rem;
  }
`;
export const DownloadCv = styled.a`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-left: 0.4rem;
  font-size: 1rem;
`;

// ============== PROJECT ============== //
export const ProjectsTitle = styled(Heading)`
  ${Heading}
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  @media screen and (max-width: 991px) {
    font-size: 2.5rem;
    line-height: 55px;
  }
  @media screen and (max-width: 575px) {
    font-size: 2rem;
    line-height: 50px;
  }
`;

export const ProjectRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProjectCol = styled.div`
  max-width: 100%;
  flex-basis: 100%;
  margin-bottom: 3rem;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0);
    transition: all 0.3s ease-out;
  }
`;

export const ProjectImg = styled.div`
  width: 100%;
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const ProjectTitle = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
`;

export const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  color: #bfbfbf;
  margin-right: 30px;
  font-size: 16px;
  font-family: "Kanit", serif;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    color: #818a91;
  }
  @media screen and (max-width: 575px) {
    font-size: 14px;
  }
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

export const Tag = styled.span`
  background-color: #323232;
  color: #bfbfbf;
  font-size: 0.75rem;
  border-radius: 4px;
  padding: 0 6px;
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  background-color: #323232;
  margin-top: 1rem;
  margin-bottom: 4rem;
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
`;

export const BannerTitle = styled.h2`
  font-size: 24px;
  @media screen and (max-width: 575px) {
    font-size: 18px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 24px;
    text-align: center;
  }
  @media screen and (max-width: 991px) {
    font-size: 20px;
  }
`;

export const BannerButton = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ButtonLeft = styled(Btn)`
  ${Btn}
  margin-right: 30px;
  background: none;
  padding: 16px 32px;
  color: #fff;
  outline: none;
  border: 2px solid #079211;
  margin-right: 24px;
  &:hover {
    border: 2px solid #127419;
    color: #bfbfbf;
    box-shadow: 0px 10px 13px -10px #000000;
  }
  @media screen and (max-width: 575px) {
    font-size: 12px;
    margin-right: 4px;
  }

  @media screen and (max-width: 992px) {
    padding: 6px 12px;
    font-size: 12px;
    margin-right: 16px;
  }
`;

export const ButtonRight = styled(Btn)`
  ${Btn}
  margin-right: 30px;
  background: #079211;
  padding: 16px 32px;
  color: #fff;
  outline: none;
  border: none;
  &:hover {
    background: #127419;
    box-shadow: 0px 10px 13px -10px #000000;
  }
`;

export const SkillsTitle = styled(ProjectsTitle)`
  ${ProjectsTitle}
`;
export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;
  margin-bottom: 4rem;
`;
export const SkillsSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #323232;
  border-radius: 10px;
  max-width: 6rem;
  width: calc((100% / 10) - 1.25rem);
  @media screen and (max-width: 991px) {
    width: calc((100% / 6) - 1.25rem);
  }
`;
