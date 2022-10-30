import Link from "next/link";
import Image from "next/image";
import KlimsImage from "/public/other_images/photos/klimyadrintevphoto.webp";

const Nav = () => {
  return (
    <nav className="flex justify-center">
      <div className="m-3 flex flex-row">
        <div className="cursor-pointer text-lg font-semibold">
          <Link href="/" className="">
            <div alt="Klim Yadrintsev" className="flex flex-row items-center">
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
          </Link>
        </div>
        <div className="flex flex-auto">
          <div className="mx-5 flex flex-row items-center  text-gray-900 ">
            <Link href="/">
              <h2 className="cursor-pointer mx-5 hover:text-gray-500">Home</h2>
            </Link>
            <Link href="/bio">
              <h2 className="ms-5 cursor-pointer mx-5 hover:text-gray-500">Bio</h2>
            </Link>
            <Link href="/blog">
              <h2 className="ms-5 cursor-pointer mx-5 hover:text-gray-500">
                Blog
              </h2>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
