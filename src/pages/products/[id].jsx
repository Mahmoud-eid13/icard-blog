import AppNav from "@/components/AppNav";
import Footer from "@/components/Footer";
import ProductBody from "@/components/ProductBody";
import Head from "next/head";
import React from "react";

import styled from "styled-components";

const BlogDetails = styled.div`
  min-height: calc(100vh - 75px - 55px);
`;

function Article() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Poppins:wght@200;300;400;600;700;800&family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AppNav />
      <BlogDetails>
        <ProductBody />
      </BlogDetails>
      <Footer />
    </>
  );
}

export default Article;
