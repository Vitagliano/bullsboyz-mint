import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";

import { toast } from "react-toastify";

import FantomZombiesAbi from "../../contract/abis/FantomZombies.json";
import IX32PEVirusAbi from "../../contract/abis/IX32PEVirus.json";

import useWeb3 from "../../hooks/useWeb3";
import { ethers } from "ethers";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import LeaderList from "../../components/LeaderList";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
const MINT_PRICE = Number(process.env.NEXT_PUBLIC_MINT_PRICE);
const WHITELIST_MINT_PRICE = Number(process.env.NEXT_WHITELIST_MINT_PRICE);

function Leaders() {
  const { active, activate, deactivate, account, web3 } = useWeb3();

  const [contract, setContract] = useState(null);
  const [maxMintable, setmaxMintable] = useState(0);
  const [supply, setSupply] = useState(0);
  const [mintPrice, setMintPrice] = useState(0);
  const [isMinting, setIsMinting] = useState(false);
  const [isInfecting, setIsInfecting] = useState(false);

  const [mintQuantity, setMintQuantity] = useState(0);

  const [isWhitelisted, setIsWhiteListed] = useState(false);

  useEffect(() => {
    activate();
  }, []);

  useEffect(() => {
    setMintPrice(MINT_PRICE);

    if (active && web3) {
      let c = new ethers.Contract(
        contractAddress,
        FantomZombiesAbi,
        web3.getSigner(account)
      );

      setMintPrice(MINT_PRICE);
      setContract(c);
      c.totalSupply()
        .then((supply) => {
          setSupply(supply);
        })
        .catch((err) => {
          setSupply(0);
          setmaxMintable(0);
          setContract(null);
          toast.error("Check if you are using Fantom Network", {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored",
          });
        });

      c.maxMintable()
        .then((maxMintable) => {
          setmaxMintable(maxMintable);
        })
        .catch((err) => console.log(err));

      c.isWhitelisted(account)
        .then((isWhitelisted) => {
          setIsWhiteListed(isWhitelisted);
          setMintPrice(getMintPrice(isWhitelisted));
        })
        .catch((err) => console.log(err));
    }
  }, [active, web3]);

  function getMintPrice(isWhitelisted) {
    return isWhitelisted ? 8 : 10;
  }

  return (
    <ParallaxProvider scrollAxis="horizontal">
      <div className="leaders-section flex flex-col items-center pt-12">
        <Navbar />
        <h1 className="text-6xl sm:text-6xl mt-12 text-white">
          Zombie Leaders
        </h1>

        <LeaderList />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default Leaders;
