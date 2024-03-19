import Novosti1hidro from "@/components/Novosti1hidro";
import Novosti2hidro from "@/components/Novosti2hidro";
import Novosti3hidro from "@/components/Novosti3hidro";
import Novosti4hidro from "@/components/Novosti4hidro";
import Novosti5hidro from "@/components/Novosti5hidro";
import React from "react";

const ProjectsHidro = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-center sm:w-full bg-cover text-center text-blue-400 z-40">
        <div className="flex flex-col justify-center pt-40 xl:pt-52  gap-20 text-black">
          <div className="flex flex-row pt-10">
            <Novosti4hidro />
          </div>
          <div className="flex flex-row pt-10">
            <Novosti3hidro />
          </div>
          <div className="flex flex-row pt-10">
            <Novosti2hidro />
          </div>
          <div className="flex flex-row pt-10">
            <Novosti1hidro />
          </div>
        </div>
        </div>

      </div> 
  );
};

export default ProjectsHidro;
