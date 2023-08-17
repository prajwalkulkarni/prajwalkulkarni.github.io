import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  

  const meta = {
    title: "Prajwal Kulkarni - Developer, Writer and Creator.",
    description: `I've been developing websites and mobile apps for quite some time now.`,
    image: "/assets/images/avatar.jpg",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://prajwalkulkarni.github.io`}
        />
        <link
          rel="canonical"
          href={`https://prajwalkulkarni.github.io`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Prajwal Kulkarni" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@prajwalinbizz" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="w-full dark:bg-gray-800">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}