import React from "react";
import Image from "next/image";
import avatar from "../../public/images/avatar.svg";
import codeTab from "../../public/images/code-tab.png";
import vueImg from "../../public/images/vue.png";
import reactImg from "../../public/images/react.png";
import jsImg from "../../public/images/js.png";
import figmaImg from "../../public/images/figma.png";
import Typewriter from "typewriter-effect";

export const HeroSection = () => {
  return (
    <div className="flex justify-around items-center hero-section mx-8 mt-32 mb-10">
      <div className="hero-info">
        <div className="flex justify-center">
          <div className="z-10">
            <Image
              src={avatar}
              width={240}
              alt="avatar"
              className="drop-shadow-xl lg:hidden"
            ></Image>
          </div>
        </div>
        <div className="relative w-full max-w-lg lg:absolute lg:right-0 lg:top-96">
          <div className="absolute -bottom-2 -left-4 w-60 h-60 lg:w-96 lg:h-96 lg:-bottom-24 lg:-left-24 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
          <div className="absolute -bottom-8 left-20 w-60 h-60 lg:w-96 lg:h-96 lg:-bottom-52 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        </div>
        <h1 className="text-1xl opacity-75 mt-12">
          Hi <span className="wave text-2xl">👋🏽</span>, I'm
        </h1>
        <h1 className="text-3xl font-bold">Aitor Lancharro</h1>
        <h2 className="text-3xl text-neutral-400">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '<span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-indigo-500 to-violet-500">Frontend Developer</span>'
                )
                .pauseFor(2000)
                .deleteAll()
                .typeString(
                  '<span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-indigo-500 to-violet-500">UX/UI Enthusiast</span>'
                )
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="opacity-50 my-2 text-base">
          A creative engineer based in Barcelona with a background in Industrial
          <br></br> Engineering, Full Stack Development and Design. Interested
          in UX/UI, <br></br>Digital media, Innovative Thinking and Future
          technologies.
        </p>
        <div className="flex mt-5">
          <a
            href="#work"
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-gray-900 px-4 py-2 text-slate-50 right-0 focus:outline-none focus:ring active:bg-indigo-500 cursor-pointer"
          >
            <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 22"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
            <span className="font-semibold transition-all group-hover:mr-8">
              My Portfolio
            </span>
          </a>
          <a
            href="resume.pdf"
            target={"_blank"}
            className="bg-white flex hover:bg-gray-200 text-gray-800 font-semibold px-4 py-2 ml-2 border border-gray-400 rounded-full cursor-pointer"
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 -1 27 21"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <div className="relative">
          <Image
            src={avatar}
            width={400}
            alt="avatar"
            className="drop-shadow-xl"
          ></Image>
        </div>
        <div className="tab-img absolute animate__animated animate__fadeInRight">
          <Image src={codeTab} alt="codeTab"></Image>
        </div>
        <div className="vue-img absolute animate__animated animate__fadeInTopLeft">
          <Image src={vueImg} alt="codeTab"></Image>
        </div>
        <div className="react-img absolute animate__animated animate__fadeInTopLeft">
          <Image src={reactImg} alt="codeTab"></Image>
        </div>
        <div className="js-img absolute animate__animated animate__fadeInTopRight">
          <Image src={jsImg} alt="codeTab"></Image>
        </div>
        <div className="figma-img absolute animate__animated animate__fadeInTopRight">
          <Image src={figmaImg} alt="codeTab"></Image>
        </div>
      </div>
    </div>
  );
};
