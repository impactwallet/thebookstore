/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const products = [
    {
      id: 1,
      name: "Early Bird Ticket",
      price: 10,
      imageSrc:
        "https://i.ibb.co/f1dLJ9S/photo1684875169.jpg",
      imageAlt:
        "Early Bird Ticket",
    },
  ];
  const router = useRouter();
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col text-center w-full mb-8">
            <img className="mx-auto" src="photo1711830253.jpeg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
