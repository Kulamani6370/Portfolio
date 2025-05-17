import React from "react";
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="" className="w-full" />
        <article>
          <SectionTitle text="Behind the code" />
          <p className="text-slate-600 mt-8 leading-loose">
            I'm Kulamani Mohanta, a fresher Computer Science and Engineering
            graduate with expertise in full stack development, specializing in
            the MERN stack. I'm passionate about building scalable,
            user-friendly web applications and have completed certifications
            like IBM Full Stack Software Developer. I enjoy solving real-world
            problems through tech and am currently exploring opportunities to
            contribute and grow in the software development field
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
