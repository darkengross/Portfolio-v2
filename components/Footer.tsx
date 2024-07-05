import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { TypewriterEffectSmooth } from "./ui/TypewriteEffect";

const wordsData = [
  {
    text: "Want",
    className: "text-red-500",
  },
  {
    text: "to",
    className: "text-green-500",
  },
  {
    text: "Collaborate",
    className: "text-blue-500",
  },
  {
    text: "for",
    className: "text-purple-500",
  },
  {
    text: "a",
    className: "text-yellow-500",
  },
  {
    text: "project",
    className: "text-indigo-500",
  },
];

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-1" id="contact">
      <div className="w-full absolute left-0 -bottom-52 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[50vw]">
          <TypewriterEffectSmooth
            words={wordsData}
            className="flex space-x-1 my-2"
            cursorClassName="bg-blue-500"
          />
        </h1>
        <p className="text-white-200 md:mt-10 my-2 text-center">
          Reach out to me today and let&apos;s discuss how we can work together
          to achieve your goals.
        </p>
        <a href="mailto:khushalgoyal77@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light"></p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
