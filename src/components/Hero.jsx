import React from "react";
// import heroImg from "../assets/hero.svg";
import heroImg from "../assets/Hero_with_photo-removebg-preview.jpg";
// import heroImg from "../assets/Hero_with_photo.png";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="bg-emerald-200 py-60" id="home">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">
            I am Kulamani Mohanta
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Full Stack Web Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into websites
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/Kulamani6370">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/kulamani-mohanta-85448424b/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://x.com/">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img
            src={heroImg}
            alt=""
            className="h-80 lg:h-96 border-transparent border-r-4"
          />
        </article>
      </div>
    </div>
  );
};

export default Hero;
