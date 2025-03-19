import React from "react";
import Marquee from "react-fast-marquee";

const InfiniteScrollLogos = () => {
  return (
    <div className="my-6 mx-10">
      <Marquee direction="left" loop={0}>
        <p className="text-blue-800">
          This beta version features blockchain-based authentication, ensuring
          secure and tamper-proof access. Enjoy a seamless scrolling experience
          with engaging content, enhanced security, and transparency. All images
          are sourced from the internet and credited to their respective owners.
        </p>
      </Marquee>
    </div>
  );
};

export default InfiniteScrollLogos;
