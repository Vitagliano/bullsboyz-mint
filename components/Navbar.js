import React, { useEffect } from "react";
import Link from "next/link";
import useWeb3 from "../hooks/useWeb3";

const Navbar = () => {
  const { active, activate, deactivate, account, web3 } = useWeb3();

  useEffect(() => {
    activate();
  }, []);

  return (
    <div className="container px-24 flex flex-row items-center justify-between">
      <Link href="/">
        <img
          src="/assets/logo.png"
          className="z-50 cursor-pointer relative mx-12"
        />
      </Link>
      <div className="flex flex-row gap-4">
        {/*<Link href="/lore">
          <button className="bg-green-100 hover:bg-green-200 flex items-center justify-center transition-all duration-500 ease-in-out rounded-2xl text-black  py-3 px-7  text-base leading-6">
            Lore
          </button>
        </Link>
        <Link href="/leaders">
          <button className="bg-green-100 hover:bg-green-200 flex items-center justify-center transition-all duration-500 ease-in-out rounded-2xl text-black  py-3 px-7  text-base leading-6">
            Zombie Leaders
          </button>
        </Link> */}
        <Link href="/zombies">
          <button className="bg-green-100 hover:bg-green-200 flex items-center justify-center transition-all duration-500 ease-in-out rounded-2xl text-black  py-3 px-7  text-base leading-6">
            My Zombies
          </button>
        </Link>

        <button
          className="bg-green-100 hover:bg-green-200 flex items-center transition-all duration-500 ease-in-out rounded-2xl text-black  py-3 px-7  text-base leading-6"
          onClick={() => activate()}
        >
          {active ? (
            account.substring(0, 6) +
            "..." +
            account.substring(account.length - 4, account.length)
          ) : (
            <>Connect</>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
