import React from "react";
import Image from "next/image";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const LineButton = (props: Props) => {
  return (
    <button
      {...props}
      className={`flex ps-2.5 btn btn-md text-white bg-[#06C755] rounded-md shadow-lg ${props.className}`}
    >
      <Image
        src="/icons/line-logo.png"
        alt="LINE Logo"
        width={24}
        height={24}
        className="inline-block mr-2"
      />
      <p className="flex-1">Log in with LINE</p>
    </button>
  );
};

export default LineButton;
