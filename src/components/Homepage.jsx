import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import InfiniteScrollLogos from './InfiniteScrollLogos';
import { Hello } from './Hello';



const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      
      <div className="homepage mt-16">
      <section className="hero bg-blue-200 py-12 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-blue-800">Welcome to AuthX</h1>
          <p className="text-lg text-blue-600 mt-4">
            Discover the best Multi-Factor Authenticator!
          </p>
        </div>
      </section>

      <section className="advantages-overview py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center text-blue-700">
            Features..
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {advantages.map((adv, index) => (
              <div
                key={index}
                className="advantage-item bg-white shadow-md rounded-md p-4 border-2 border-blue-500 ml-1"
              >
                <img
                  src={adv.image}
                  alt={adv.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4 text-blue-700">
                  {adv.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-0">
        <InfiniteScrollLogos />
      </div>
    </div>

    <div>
          <Hello></Hello>
          </div>
    </>
  );
};

const advantages = [
  {
    title: "Enhanced Security",
    description: "Multi-layered authentication reduces the risk of breaches.",
    image: "https://media.istockphoto.com/id/1663987142/photo/otp-one-time-password-security-authentication.jpg?s=612x612&w=0&k=20&c=-8Zui3UnDVcA2xYawhWrDr3ZkpXbJ25grvo7FFn_XU4=",
  },
  {
    title: "Privacy Protection",
    description: "No centralized authority storing your sensitive data.",
    image: "https://media.istockphoto.com/id/1350595566/photo/cyber-security-firewall-interface-protection-concept-businesswoman-protecting-herself-from.jpg?s=612x612&w=0&k=20&c=9i4-mWszc5FRU_iaI3ISHkmJKHn1ZCfhWjechO4H9NY=",
  },
  {
    title: "Reduced Risk of Phishing",
    description: "Prevents credential theft by eliminating single-point failure.",
    image: "https://2456764.fs1.hubspotusercontent-eu1.net/hub/2456764/hubfs/phishing_scam_illustration%20%281%29.png?width=680&name=phishing_scam_illustration%20%281%29.png",
  },
  {
    title: "No Single Point of Failure",
    description: "Even if one method is compromised, others remain secure.",
    image: "https://t3.ftcdn.net/jpg/03/69/36/24/360_F_369362459_V0jpoFkTOMWafkYMpGCKVG1A98lU8FtT.jpg",
  },
  {
    title: "User Control & Ownership",
    description: "Users have complete control over their authentication keys.",
    image: "https://cdn.vectorstock.com/i/1000v/10/57/hud-futuristic-user-interface-control-panel-vector-41601057.jpg",
  },
  {
    title: "Interoperability",
    description: "Works across multiple platforms without vendor lock-in.",
    image: "https://static.aicoinstorge.com/attachment/article/20230831/169348630129221_thumb.jpg",
  },  
  {
    title: "Improved User Experience",
    description: "Reduces login friction with seamless authentication methods.",
    image: "https://imatrix.com/wp-content/uploads/sites/12/2023/10/12-Ways-to-Improve-Website-User-Experience.png",
  },
  {
    "title": "Seamless Integration",
    "description": "Easily integrates with existing systems and applications for a smooth transition.",
    "image": "https://media.gettyimages.com/id/1458826985/video/technology-and-chatbot-robot-icons-background-endless-animation.jpg?s=640x640&k=20&c=FMsriEuSAcgsRUiN2j1j3yR4nrDjwq7ojcJ3E1dF89I="
},
{
    "title": "Decentralized Identity",
    "description": "Gives users control over their personal data without relying on centralized authorities.",
    "image": "https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2025-02/decentralized-identity.jpg"
}

];


export default HomePage;
