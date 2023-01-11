import Head from "next/head";
import "animate.css";
import { Navbar } from "../components/Navbar";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>Aitor Lancharro - FullStack Developer | UX/UI Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <style jsx>{``}</style>
      <style jsx global>{``}</style>
    </div>
  );
}
