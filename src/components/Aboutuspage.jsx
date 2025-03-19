import React from "react";
import { Navbar } from "./Navbar";
import InfiniteScrollLogos from './InfiniteScrollLogos';
import { Hello } from "./Hello";

const AboutUsPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="homepage mt-20">
        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img
                  src="https://i.ibb.co/LzbfKfGK/AuthX.webp"
                  alt="About Us Image"
                  loading="lazy"
                  className=""
                />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                  Next-Gen Blockchain Authentication
                </h2>
                <p className="mt-6 text-gray-600">
                  At AuthX, we specialize in cutting-edge blockchain-based
                  identity verification and authentication solutions. By
                  leveraging decentralized ledger technology, we provide a
                  secure and tamper-proof system for managing digital
                  identities. Unlike traditional authentication methods that
                  rely on centralized databases, our approach eliminates single
                  points of failure, reducing the risk of data breaches and
                  unauthorized access. With blockchain's immutable nature, every
                  authentication transaction is securely recorded, ensuring
                  transparency and trust for users and organizations alike.
                </p>
                <p className="mt-6 text-gray-600">
                  Our platform is designed to empower businesses and individuals
                  with seamless and highly secure authentication mechanisms.
                  Through decentralized multi-factor authentication (AuthX),
                  device-based authentication, and timestamp control protocols,
                  we enhance security while maintaining ease of use. Whether
                  it's securing user logins, verifying digital identities, or
                  preventing identity fraud, AuthX delivers a future-proof
                  solution tailored to modern security challenges.
                </p>
                <p className="mt-8">
                  <strong>Our Focus:</strong> We are committed to advancing
                  security through cutting-edge authentication methods. By
                  implementing device-based authentication, we ensure that
                  access to sensitive systems and data is tied to trusted
                  devices, reducing the risk of unauthorized logins and identity
                  theft. Our approach strengthens authentication by leveraging
                  unique device identifiers, cryptographic keys, and biometric
                  verification, making it significantly harder for malicious
                  actors to gain access.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
        <InfiniteScrollLogos />
      </div>
        </div>
        <Hello></Hello>
    </>
  );
};

export default AboutUsPage;