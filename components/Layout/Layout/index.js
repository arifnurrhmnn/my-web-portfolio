import React from "react";
import Head from "next/head";
import Navbar from "../../Navbar";
import { GlobalStyle } from "../../Theme";
import Footer from "../Footer";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <GlobalStyle />
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
