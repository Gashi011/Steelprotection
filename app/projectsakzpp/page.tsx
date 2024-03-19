import BackgroundImage from "@/components/BackgroundImageNaslovna";
import Novosti from "@/components/Novosti";
import Novosti1akz from "@/components/Novosti1akz";
import Novosti2akz from "@/components/Novosti2akz";
import Novosti3akz from "@/components/Novosti3akz";
import Novosti4akz from "@/components/Novosti4akz";
import Novosti5akz from "@/components/Novosti5akz";
import Link from "next/link";
import React from "react";

const ProjectsAkzpp = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-center sm:w-full bg-cover text-center text-blue-400 z-40">
        <div className="flex flex-col justify-center pt-40 xl:pt-52  gap-20 text-black">
          <div className=" flex flex-row">
            <Novosti5akz />
          </div>
          <div className="flex flex-row pt-10">
            <Novosti4akz />
          </div>
          <div className="flex flex-row pt-10">
            <Novosti3akz />
          </div>
          <div className="flex flex-row pt-10">
            <Novosti2akz />
          </div>
          <div className="flex flex-row pt-10">
            <Novosti1akz />
          </div>
        </div>
        </div>

      </div> 
  );
};

export default ProjectsAkzpp;
