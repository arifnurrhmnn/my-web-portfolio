import React from "react";
import Link from "next/link";
import { Container } from "../../Theme/GlobalStyle";
import {
  ContactMe,
  ContactTitle,
  ContactDesc,
  ContactLink,
  ContactButton,
  MediaSocial,
  SocialLinks,
  // size,
} from "./Styles";

import {
  UilMessage,
  UilWhatsapp,
  UilInstagram,
  UilFacebookF,
} from "@iconscout/react-unicons";

export default function Contact() {
  return (
    <>
      <Container>
        <ContactMe>
          <ContactTitle>OKE, LET'S CREATE SOMETHING GREAT</ContactTitle>
          <ContactDesc>
            If you like my work and have some cool project to work on, just send
            me direct message or contact me through social sites listed below.
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </ContactDesc>
          <Link href="mailto:arifnur.rhmnn@gmail.com" passHref>
            <ContactLink>
            <ContactButton target="_blank">
              <UilMessage size="16" />
              Get In Touch
            </ContactButton>
            </ContactLink>
          </Link>
        </ContactMe>
      </Container>
    </>
  );
}
