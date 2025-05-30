import FastLink from "./FastLink";
import Image from "next/image";
import KlimsImage from "/public/other_images/photos/klimyadrintevphoto.webp";

const Nav: React.FC = () => {
  return (
    <nav className="flex justify-center">
      <div className="m-3 flex flex-row">
        <div className="cursor-pointer text-lg font-semibold">
          <FastLink href="/" className="">
            <div className="flex flex-row items-center">
              <div className="mx-2">
                <Image
                  className="rounded-full"
                  src={KlimsImage}
                  alt="Klim Yadrintsev Photo"
                  width={50}
                  height={50}
                />
              </div>
              <p className="justify-center">Klim Yadrintsev</p>
            </div>
          </FastLink>
        </div>
        <div className="flex flex-auto">
          <div className="mx-5 flex flex-row items-center  text-gray-900 ">
            <FastLink href="/">
              <h2 className="cursor-pointer mx-5 hover:text-gray-500">Home</h2>
            </FastLink>
            <FastLink href="/bio">
              <h2 className="ms-5 cursor-pointer mx-5 hover:text-gray-500">Bio</h2>
            </FastLink>
            <FastLink href="/blog">
              <h2 className="ms-5 cursor-pointer mx-5 hover:text-gray-500">
                Blog
              </h2>
            </FastLink>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav; 