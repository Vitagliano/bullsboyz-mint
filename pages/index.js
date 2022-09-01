import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";

import { toast } from "react-toastify";

import FantomZombiesAbi from "../contract/abis/FantomZombies.json";
import IX32PEVirusAbi from "../contract/abis/IX32PEVirus.json";

import useWeb3 from "../hooks/useWeb3";
import { ethers } from "ethers";

import { Parallax } from "react-scroll-parallax";
import Header from "../components/Hero";
import Section from "../components/Section";
import Roadmap from "../components/Roadmap";
import SectionTitle from "../components/SectionTitle";
import ShowZombies from "../components/Zombies";
import Leaders from "../components/Leaders";
import Team from "../components/Team";
import Footer from "../components/Footer";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
const MINT_PRICE = Number(process.env.NEXT_PUBLIC_MINT_PRICE);
const WHITELIST_MINT_PRICE = Number(process.env.NEXT_WHITELIST_MINT_PRICE);

function Index() {
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

  async function loadData() {
    let totalSupply = await contract.totalSupply();

    setSupply(totalSupply);

    contract
      .maxMintable()
      .then((maxMintable) => {
        setmaxMintable(maxMintable);
      })
      .catch((err) => console.log(err));
    contract
      .isWhitelisted(account)
      .then((isWhitelisted) => {
        setIsWhiteListed(isWhitelisted);
        setMintPrice(getMintPrice(isWhitelisted));
      })
      .catch((err) => console.log(err));
  }

  async function infect() {
    if (account) {
      setIsInfecting(true);
      setMintPrice(getMintPrice(isWhitelisted));
      let _price = ethers.utils.parseUnits(String(mintPrice * 1), 18);

      const infectPromise = new Promise((resolve, reject) => {
        contract
          .infect({ value: _price })
          .then((receipt) => {
            console.log(receipt);
            setIsInfecting(false);
            loadData();

            const link = `https://ftmscan.com/tx/${receipt.transactionHash}`;

            resolve(link);
          })
          .catch((err) => {
            toast.error("Cannot infect NFT", {
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              theme: "colored",
            });
          });
      });

      toast.promise(infectPromise, {
        pending: "Infecting...",
        success: {
          render: (link) => `Infected!`,
        },
        error: "Something went wrong... Try again!",
      });
    }
  }

  async function mint() {
    if (account) {
      setIsMinting(true);
      setMintPrice(getMintPrice(false));
      let _price = ethers.utils.parseUnits(
        String(mintPrice * mintQuantity),
        18
      );

      const mintPromise = new Promise((resolve, reject) => {
        contract
          .mint(mintQuantity, {
            value: _price,
          })
          .then((receipt) => {
            console.log(receipt);
            setIsMinting(false);
            loadData();

            const link = `https://ftmscan.com/tx/${receipt.transactionHash}`;

            resolve(link);
          })
          .catch((err) => {
            console.log("error", err);
            toast.error(err.data.message, {
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              theme: "colored",
            });
          });
      });

      toast.promise(mintPromise, {
        pending: "Minting...",
        success: {
          render: (link) => `Minted!`,
        },
        error: "Something went wrong... Try again!",
      });
    }
  }

  const changeQuantity = (operation) => {
    if (operation === "add") {
      if (mintQuantity < maxMintable) {
        setMintQuantity(mintQuantity + 1);
      }
    } else {
      if (mintQuantity > 0) {
        setMintQuantity(mintQuantity - 1);
      }
    }
  };

  return (
    <>
      <Parallax speed={-10}>
        <Header />
      </Parallax>
      <Parallax speed={10}>
        <div className="-mt-48 pr-20">
          <Section
            subtitle="LORE"
            title="The origin of everything"
            img="/assets/first.gif"
            button="Read the full lore"
            buttonUrl="/lore"
          >
            <p className="py-2 font-mono text-xl leading-normal text-gray-100 lg:text-xl xl:text-xl">
              Tens of thousands of years ago humanity was inflicted with a
              terrible plague.
            </p>
            <p className="py-2 font-mono text-xl leading-normal text-gray-100 lg:text-xl xl:text-xl">
              Buried deep inside a glacier, the remnants of this plague lie in
              stasis, oblivious to the years gone by.
            </p>
            <p className="py-2 font-mono text-xl leading-normal text-gray-100 lg:text-xl xl:text-xl">
              If ever released from it's icy prison, a cataclysm of a lost age
              would once again spread it's jaws and chew.
            </p>
          </Section>
        </div>
      </Parallax>
      <Parallax speed={5}>
        <ShowZombies />
      </Parallax>
      <Parallax speed={10}>
        <Roadmap />
      </Parallax>
      <Parallax speed={20}>
        {/* <Leaders /> */}
        <Team />
      </Parallax>

      <Parallax speed={30}>
        <Footer />
      </Parallax>
    </>
  );
}

export default Index;
