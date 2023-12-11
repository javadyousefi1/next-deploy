"use client";

import "@/styles/globals.css";
import GlobalVarable from "./Global";
export default function App({ Component, pageProps }) {
  // localStorage.setItem("javad", "javad");

  const testJavadName = "testJavadValue";

  const window = "javad window";

  console.log(window);

  return (
    <>
      <GlobalVarable />
      <Component {...pageProps} window={window} />
    </>
  );
}
