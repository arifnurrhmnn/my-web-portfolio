import styled from "styled-components";
import { Btn } from "../../Theme/GlobalStyle";

export const AboutSec = styled.div`
  margin-top: 5rem;
  @media screen and (max-width: 767px) {
    margin-top: 2rem;
  }
  @media screen and (max-width: 575px) {
    margin-top: 1rem;
  }
`;

export const AboutTitle = styled.h1`
  margin-bottom: 8px;
  text-align: center;
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

export const AboutSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  font-family: "Kanit", serif;
`;

export const AboutRow = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const AboutCol = styled.div`
  flex-basis: 48%;
  @media screen and (max-width: 991px) {
    flex-basis: 100%;
  }
`;

export const ItemImg = styled.div`
  max-width: 100%;
`;

export const ItemDesc = styled.p`
  font-size: 1rem;
  @media screen and (max-width: 991px) {
    padding-top: 2rem;
  }
`;

// QUALIFICATION
export const QualificationSec = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const QualificationTitle = styled(AboutTitle)`
  ${AboutTitle};
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 55px;
  @media screen and (max-width: 991px) {
    font-size: 2rem;
    line-height: 50px;
  }
  @media screen and (max-width: 575px) {
    font-size: 1.8rem;
    line-height: 45px;
  }
`;

export const QualificationSubtitle = styled(AboutSubtitle)`
  ${AboutSubtitle};
`;

export const QualificationList = styled.div`
  margin-top: 3rem;
`;

export const QualificationTab = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 1rem;
`;

export const ButtonTab = styled(Btn)`
  ${Btn};
  margin-bottom: 3rem;
  background: none;
  padding: 4px 16px;
  color: #fff;
  outline: none;
  border: none;
  font-size: 1.25rem;
  background: ${(props) =>
    props.education || props.course ? "#127419" : "none"};
  box-shadow: ${(props) =>
    props.education || props.course ? "0px 10px 13px -10px #000000;" : "none"};
  &:hover {
    color: ${(props) => (props.education || props.course ? "#fff" : "#bfbfbf")};
  }
`;

export const QualificationContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const Education = styled.div`
  display: ${(props) => (props.education ? "flex" : "none")};
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 575px) {
    justify-content: center;
  }
`;

export const EducationCard = styled.div`
  background: #323232;
  width: calc((100% / 2) - 1rem);
  min-height: 250px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 575px) {
    min-width: 80%;
  }
  @media screen and (max-width: 767px) {
    width: calc((100% / 2) - 0.75rem) !important;
  }
`;

export const EducationTitle = styled.h3`
  font-weight: 500;
  margin-top: 1rem;
`;
export const EducationSubtitle = styled.p`
  color: #bfbfbf;
  font-family: "Kanit", serif;
`;
export const EducationDate = styled.p`
  font-family: "Kanit", serif;
  background-color: #127419;
  color: #fff;
  padding: 2px 12px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Course = styled.div`
  display: ${(props) => (props.course ? "flex" : "none")};
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
  @media screen and (max-width: 575px) {
    justify-content: center;
  }
`;

export const CourseCard = styled.div`
  background: #323232;
  width: calc((100% / 3) - 1.25rem);
  min-height: 250px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: relative;
  cursor: pointer;
  @media screen and (max-width: 575px) {
    min-width: 80%;
  }
  @media screen and (max-width: 767px) {
    width: calc((100% / 2) - 0.75rem) !important;
  }
  @media screen and (max-width: 991px) {
    width: calc((100% / 2) - 1rem);
  }
  &:hover {
    box-shadow: 0px 10px 15px -7px #000000;
  }
`;

export const CourseTitle = styled.h3`
  font-weight: 500;
`;
export const CourseSubtitle = styled.p`
  margin-bottom: 1rem;
  font-size: 0.75rem;
  color: #bfbfbf;
  font-family: "Kanit", serif;
`;
export const CourseDesc = styled.p`
  font-size: 1rem;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 0.9rem;
  }
`;
export const CourseDate = styled.p`
  font-family: "Kanit", serif;
  background-color: #127419;
  color: #fff;
  padding: 2px 12px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const CourseCredential = styled.a`
  width: 100%;
  height: 100%;
  background: #161616;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  &:hover {
    opacity: 1;
    transition: all 0.3s ease-in;
  }
`;
