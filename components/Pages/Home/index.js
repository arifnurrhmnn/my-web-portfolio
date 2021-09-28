import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../../Theme/GlobalStyle";
import { DataProjects, DataSkills } from "../../../Data/data";
import ImageSvg from "./ImageSvg";
import {
  DownloadCv,
  ImgWrapper,
  Heading,
  ProjectsTitle,
  InfoColumn,
  InfoRow,
  Subtitle,
  TextWrapper,
  TopLine,
  SocialMedia,
  SocialLinks,
  Button,
  ProjectRow,
  ProjectCol,
  ProjectImg,
  ProjectTitle,
  ProjectLink,
  Banner,
  BannerTitle,
  BannerButton,
  ButtonLeft,
  ButtonRight,
  ProjectContent,
  ProjectTags,
  Tag,
  SkillsTitle,
  Skills,
  SkillsSlide,
} from "./Styles";

import {
  UilLinkedin,
  UilInstagram,
  UilGithub,
  UilEnvelope,
  UilLink,
  UilGithubAlt,
  UilFileAlt,
  UilDownloadAlt,
} from "@iconscout/react-unicons";

export default function Home(props) {
  const [disabled, setDisabled] = useState();

  return (
    <>
      <Container>
        <InfoRow>
          <InfoColumn>
            <TextWrapper>
              <TopLine>Hi, i'm Arif Nur Rohman</TopLine>
              <Heading>Junior Web Developer</Heading>
              <Subtitle>
                I am a web developer and frontend web developer who focuses on
                implementing web design into a responsive web. I'm looking
                forward to collaborating with you.
              </Subtitle>
              <SocialMedia>
                <Link href="mailto:arifnur.rhmnn@gmail.com" passHref>
                  <SocialLinks target="_blank">
                    <Button>
                      <UilEnvelope size="16" />
                      Email Me
                    </Button>
                  </SocialLinks>
                </Link>
                <Link href="https://github.com/arifnurrhmnn" passHref>
                  <SocialLinks target="_blank">
                    <UilGithub size="32" />
                  </SocialLinks>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/arifnurrohman/"
                  passHref
                >
                  <SocialLinks target="_blank">
                    <UilLinkedin size="32" />
                  </SocialLinks>
                </Link>
                <Link href="https://www.instagram.com/arif_pride/" passHref>
                  <SocialLinks target="_blank">
                    <UilInstagram size="32" />
                  </SocialLinks>
                </Link>
              </SocialMedia>
              <Link href="/file/CV-Arif-Nur-Rohman.pdf" passHref>
                <DownloadCv target="_blank">
                  <UilDownloadAlt size="16" />
                  Download CV
                </DownloadCv>
              </Link>
            </TextWrapper>
          </InfoColumn>
          <InfoColumn>
            <ImgWrapper>
              <ImageSvg />
            </ImgWrapper>
          </InfoColumn>
        </InfoRow>
      </Container>

      <Container>
        <ProjectsTitle>Selected Projects</ProjectsTitle>
        <ProjectRow>
          {DataProjects.map((project, index) => (
            <ProjectCol key={index}>
              <ProjectImg>
                <Image
                  src={project.imageDisplay}
                  width={1448}
                  height={908}
                  placeholder="blur"
                  blurDataURL={`${project.imageDisplay}?width=${parseInt(
                    (1448 * 1) / 100
                  )}&height=${parseInt((908 * 1) / 100)}`}
                />
              </ProjectImg>
              <ProjectContent>
                <ProjectTitle>
                  <Link href={project.linkGithub} passHref>
                    <ProjectLink
                      target="_blank"
                      disabled={project.linkGithub === "" ? true : false}
                    >
                      <UilGithubAlt size="14" style={{ marginRight: "4px" }} />
                      {project.textSource}
                    </ProjectLink>
                  </Link>
                  <Link href={project.linkSite} passHref>
                    <ProjectLink
                      target="_blank"
                      disabled={project.linkSite === "" ? true : false}
                    >
                      <UilLink size="14" style={{ marginRight: "4px" }} />
                      {project.textLink}
                    </ProjectLink>
                  </Link>
                </ProjectTitle>
                <ProjectTags>
                  {project.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </ProjectTags>
              </ProjectContent>
            </ProjectCol>
          ))}
        </ProjectRow>
      </Container>

      <Container>
        <Banner>
          <BannerTitle>Interested working with me?</BannerTitle>
          <BannerButton>
            <Link href="/project" passHref>
              <SocialLinks>
                <ButtonLeft>
                  <UilFileAlt size="16" />
                  See More Projects
                </ButtonLeft>
              </SocialLinks>
            </Link>
            <Link href="mailto:arifnur.rhmnn@gmail.com" passHref>
              <SocialLinks target="_blank">
                <ButtonRight>
                  <UilEnvelope size="16" />
                  Email Me
                </ButtonRight>
              </SocialLinks>
            </Link>
          </BannerButton>
        </Banner>
      </Container>

      <Container>
        <SkillsTitle>Skills & Tools</SkillsTitle>
        <Skills>
          {DataSkills.map((skill, index) => (
            <SkillsSlide key={index}>
              <Image
                src={skill}
                width={480}
                height={480}
                placeholder="blur"
                blurDataURL={`${skill}?width=${parseInt(
                  (480 * 1) / 100
                )}&height=${parseInt((480 * 1) / 100)}`}
              />
            </SkillsSlide>
          ))}
        </Skills>
      </Container>
    </>
  );
}
