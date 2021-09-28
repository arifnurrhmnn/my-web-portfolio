import { React, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../../Theme/GlobalStyle";
import { DataCourses, DataEducations, DataUser } from "../../../Data/data";
import { UilGraduationCap, UilArrowRight } from "@iconscout/react-unicons";
import {
  AboutCol,
  AboutRow,
  AboutSec,
  AboutSubtitle,
  AboutTitle,
  ButtonTab,
  CourseDate,
  CourseCard,
  Course,
  CourseCredential,
  Education,
  ItemDesc,
  ItemImg,
  QualificationContent,
  QualificationList,
  QualificationSec,
  QualificationSubtitle,
  QualificationTab,
  QualificationTitle,
  CourseTitle,
  CourseSubtitle,
  CourseDesc,
  EducationCard,
  EducationTitle,
  EducationSubtitle,
  EducationDate,
} from "./Styles";

export default function About(props) {
  const [education, setEducation] = useState(true);
  const [course, setCourse] = useState(false);

  return (
    <>
      <Container>
        <AboutSec>
          <AboutTitle>About</AboutTitle>
          <AboutSubtitle>My introduction</AboutSubtitle>
          <AboutRow>
            <AboutCol>
              <ItemImg>
                <Image
                  src={DataUser.imageAbout}
                  width={540}
                  height={426}
                  placeholder="blur"
                  blurDataURL={`${DataUser.imageAbout}?width=${parseInt(
                    (540 * 1) / 100
                  )}&height=${parseInt((426 * 1) / 100)}`}
                />
              </ItemImg>
            </AboutCol>
            <AboutCol>
              <ItemDesc>
                Hello! My name is Arif Nur Rohman. I was interested in
                technology when I entered high school. At the time I was
                majoring in <strong>Software engineering</strong> and one of
                them learned a lot about the basics of programming. In 2017, I
                went on to study and took an <strong>informatics</strong> study
                program. During my studies, I began to explore web development
                by using several programming language technologies. Off-campus I
                also took some online course to improve and develop my skills in
                technology. In 2021, I graduated college with a computer
                bachelor's degree and earned a GPA of 3.86.
                <br />
                <br />
                After graduation I decided to become a{" "}
                <strong>Frontend Web Developer</strong>. With experience in
                creating multiple projects as a web developer, I have acquired
                the skills and knowledge necessary to create a good project. I
                am very excited and enjoy every project development process, and
                enjoy discussing and collaborating.
              </ItemDesc>
            </AboutCol>
          </AboutRow>
        </AboutSec>
      </Container>

      {/* QUALIFICATION */}
      <Container>
        <QualificationSec>
          <QualificationTitle>Qualification</QualificationTitle>
          <QualificationSubtitle>My personal journey</QualificationSubtitle>
          <QualificationList>
            <QualificationTab>
              <ButtonTab
                education={education ? education : ""}
                onClick={() => {
                  setEducation(true), setCourse(false);
                }}
              >
                Education
              </ButtonTab>
              <ButtonTab
                education={course ? course : ""}
                onClick={() => {
                  setCourse(true), setEducation(false);
                }}
              >
                Certifications
              </ButtonTab>
            </QualificationTab>
            <QualificationContent>
              <Education education={education}>
                {DataEducations.map((education, index) => (
                  <EducationCard key={index}>
                    <UilGraduationCap size="50" color="#079211" />
                    <EducationTitle>{education.name}</EducationTitle>
                    <EducationSubtitle>
                      {education.fieldOfStudy}
                    </EducationSubtitle>
                    <EducationDate>
                      {education.yearStarts} - {education.yearFinised}
                    </EducationDate>
                  </EducationCard>
                ))}
              </Education>
              <Course course={course}>
                {DataCourses.map((course, index) => (
                  <CourseCard key={index}>
                    <CourseTitle>{course.title}</CourseTitle>
                    <CourseSubtitle>{course.subtitle}</CourseSubtitle>
                    <CourseDesc>{course.description}</CourseDesc>
                    <CourseDate>{course.date}</CourseDate>
                    <Link href={course.credential} passHref>
                      <CourseCredential target="_blank">
                        view credential
                        <UilArrowRight size="16" />
                      </CourseCredential>
                    </Link>
                  </CourseCard>
                ))}
              </Course>
            </QualificationContent>
          </QualificationList>
        </QualificationSec>
      </Container>
    </>
  );
}
