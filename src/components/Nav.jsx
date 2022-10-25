import Link from "next/link";
import Image from "next/image";
import KlimsImage from "/public/other_images/photos/klimyadrintevphoto.webp";

const Nav = () => {
  return (
    <nav className="flex justify-center">
      <div className="m-3 flex text-center">
        <div className="cursor-pointer text-lg font-semibold">
          <Link href="/" className="">
            <a>
            <div alt="Klim Yadrintsev">
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
            </a>
          </Link>
        </div>
        <div className="flex flex-auto">
          <div className="mx-5 flex flex-row items-center  text-gray-700 ">
            <Link href="/">
              <a>
              <h2 className="cursor-pointer px-5 py-2 rounded-xl mx-2">Home</h2>
              </a>
            </Link>
            <Link href="/bio">
            <a>
              <h2 className="ms-5 cursor-pointer rounded-xl mx-2">Bio</h2>
              </a>
            </Link>


            <Link href="/blog">
            <a>
              <h2 className="ms-5 cursor-pointer px-5 py-2 rounded-xl mx-2">
                Blog
              </h2>
              </a>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
