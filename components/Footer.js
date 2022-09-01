import React from "react";
import Link from "next/link";

const Footer = ({ path, onClick, children }) => {
  return (
    <div className="container mx-auto px-5 lg:px-24 pb-12 relative ">
      <footer className="p-4 bg-brown-200 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-white sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://ftmzombies.com" className="hover:underline">
            Fantom Zombies
          </a>
          . Made by{" "}
          <a
            href="https://twitter.com/darkside_dao"
            className="hover:underline"
          >
            Darkside DAO
          </a>{" "}
          & Powered by{" "}
          <a href="https://fantom.foundation/" className="hover:underline">
            Fantom Foundation
          </a>
          .
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">
              Home
            </a>
          </li>
          <li>
            <a href="/zombies" className="mr-4 hover:underline md:mr-6">
              My Zombies
            </a>
          </li>
          <li>
            <a href="/leaders" className="mr-4 hover:underline md:mr-6">
              Zombie Leaders
            </a>
          </li>
          <li>
            <a href="/lore" className="mr-4 hover:underline md:mr-6">
              Lore
            </a>
          </li>
          <li className="flex items-center justify-center gap-4">
            <a
              rel="noopen nofollow"
              className=""
              href="https://twitter.com/ftmzombies"
            >
              <img
                src="./assets/twitter.svg"
                alt=""
                className="w-6 text-green-100 "
              />
            </a>
            <a
              rel="noopen nofollow"
              className=""
              href="https://discord.gg/vwSNVeeEcW"
            >
              <img src="./assets/discord.svg" alt="" className="w-6 " />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
