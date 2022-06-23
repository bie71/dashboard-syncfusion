import React from "react";
import { MdCopyright } from "react-icons/md";

import { useStateContext } from "../contexts/ContextProvider";

const Footer = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-24">
      <p className="dark:text-gray-200 text-gray-700 text-center m-20">
        <MdCopyright className={`text-xl text-[${currentColor}] inline-block`} />{" "}
        {new Date().getFullYear()} All rights reserved by Store.com
      </p>
    </div>
  );
};

export default Footer;
