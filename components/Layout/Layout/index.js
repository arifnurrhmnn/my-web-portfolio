import React from "react";
import Head from "next/head";
import { GlobalStyle } from "../../Theme";
import Footer from "../Footer";

import Header from "../Header";
export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <GlobalStyle />
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
