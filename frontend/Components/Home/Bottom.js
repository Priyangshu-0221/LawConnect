import Link from "next/link";
import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import Image from "next/image";
const Bottom = () => {
  return (
    <>
      <div className="flex px-12 text-black rounded-4xl  my-3         items-center justify-center w-[100%] h-[80%] sm:w-screen  backdrop-blur-3xl">
        <div className="w-full flex items-center justify-center">
          <Image
            height={300}
            width={300}
            src="/bottom.png"
            alt=""
            className="rounded-3xl object-cover
               w-full max-w-[90%]
               sm:max-w-[320px] sm:h-auto
               md:max-w-[80%]"
          />
        </div>
      </div>
      <div className="px-[25%]">
        <Link href="/signup">
          <button className="bg-blue-700 cursor-pointer text-white h-12 w-full px-5 rounded-full">
            Create Account{"   "}
            <CreateIcon />
          </button>
        </Link>
      </div>
    </>
  );
};

export default Bottom;
