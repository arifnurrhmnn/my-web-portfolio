import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DataProjects } from "../../../Data/data";
import { Container } from "../../Theme/GlobalStyle";
import { UilLink, UilGithubAlt } from "@iconscout/react-unicons";

import {
  ItemImg,
  ItemLink,
  ItemSubtitle,
  ItemTitle,
  ProjectCol,
  ProjectRow,
  ProjectSec,
  ProjectSubtitle,
  ProjectTitle,
  ProjectContent,
  ProjectText,
  ProjectTags,
  Tag,
} from "./Styles";

export default function Project(props) {
  return (
    <>
      <Container>
        <ProjectSec>
          <ProjectTitle>Projects</ProjectTitle>
          <ProjectSubtitle>Most recent work</ProjectSubtitle>
          <ProjectRow>
            {DataProjects.map((project, index) => (
              <ProjectCol key={index}>
                <ItemImg>
                  <Image
                    src={project.imageDisplay}
                    width={362}
                    height={227}
                    placeholder="blur"
                    blurDataURL={`${project.imageDisplay}?width=${parseInt(
                      (362 * 1) / 100
                    )}&height=${parseInt((227 * 1) / 100)}`}
                    layout="responsive"
                  />
                </ItemImg>
                <ProjectContent>
                  <ProjectText>
                    <ItemTitle>{project.name}</ItemTitle>
                    <ItemSubtitle>
                      <Link href={project.linkGithub} passHref>
                        <ItemLink target="_blank">
                          <UilGithubAlt
                            size="14"
                            style={{ marginRight: "4px" }}
                          />
                          {project.textSource}
                        </ItemLink>
                      </Link>
                      <Link href={project.linkSite} passHref>
                        <ItemLink target="_blank">
                          <UilLink size="14" style={{ marginRight: "4px" }} />
                          {project.textLink}
                        </ItemLink>
                      </Link>
                    </ItemSubtitle>
                  </ProjectText>
                  <ProjectTags>
                    {project.tags.map((tag, index) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </ProjectTags>
                </ProjectContent>
              </ProjectCol>
            ))}
          </ProjectRow>
        </ProjectSec>
      </Container>
    </>
  );
}
