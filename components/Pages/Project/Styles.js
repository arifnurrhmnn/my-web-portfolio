import styled from "styled-components";
import { ProjectTitle as Title } from "../Home/Styles";

export const ProjectSec = styled.div`
  margin-top: 5rem;
  margin-bottom: 4rem;
  @media screen and (max-width: 767px) {
    margin-top: 2rem;
  }
  @media screen and (max-width: 575px) {
    margin-top: 1rem;
  }
`;

export const ProjectTitle = styled.h1`
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

export const ProjectSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  font-family: "Kanit", serif;
`;

export const ProjectRow = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin: -1rem;
`;

export const ProjectCol = styled.div`
  padding: 2rem;
  flex-basis: 50%;
  position: relative;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0);
    transition: all 0.3s ease-out;
  }
  @media screen and (max-width: 767px) {
    flex-basis: 100%;
  }
`;

export const ItemImg = styled.div`
  max-width: 100%;
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
`;

export const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.h3`
  font-size: 1.25rem;
`;

export const ItemSubtitle = styled(Title)`
  ${Title}
  font-weight: 500;
  &:hover {
    transition: all 0.3s ease-out;
    color: #818a91;
  }
`;

export const ItemLink = styled.a`
  display: flex;
  align-items: center;
  color: #bfbfbf;
  margin-right: 30px;
  font-size: 16px;
  font-family: "Kanit", serif;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "painted")};
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
  margin-top: 0.5rem;
`;
