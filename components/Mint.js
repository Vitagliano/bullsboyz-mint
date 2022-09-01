import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";

import { toast } from "react-toastify";

import useWeb3 from "../hooks/useWeb3";
import { ethers } from "ethers";

import FantomZombiesAbi from "../contract/abis/FantomZombies.json";
import IX32PEVirusAbi from "../contract/abis/IX32PEVirus.json";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
const MINT_PRICE = Number(process.env.NEXT_PUBLIC_MINT_PRICE);
const WHITELIST_MINT_PRICE = Number(process.env.NEXT_WHITELIST_MINT_PRICE);

const MintSection = () => {
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
      <div className="px-4 md:px-0 block md:inline md:max-w-3xl m-auto">
        <div className="flex flex-col md:flex-row bg-mintgreen-100 rounded-xl md:max-w-3xl m-auto">
          <div className="md:w-64 bg-mintgreen-200 p-6 md:p-8 flex flex-col md:rounded-xl">
            <img
              src="./assets/zombies.gif"
              alt=""
              className="mt-3 md:block mx-auto w-1/3 md:w-32 rounded-xl p-2"
            />
            <div className="md:my-7 flex flex-col items-center space-y-4">
              <h4 className="hidden md:block text-5 leading-6 font-black">
                Fantom Zombies
              </h4>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-0.5 items-center">
                  <h5 className="text-gray-200 text-3.5 leading-5">
                    Mint Price:
                  </h5>
                  <p className="text-white text-4 leading-5 ">
                    {mintPrice} FTM
                  </p>
                </div>
                <div className="md:hidden flex flex-col space-y-0.5 items-center">
                  <h5 className="text-gray-200 text-3.5 leading-5">
                    Supply Remaining:
                  </h5>
                  <p className="text-white text-4 leading-5 ">
                    {active ? maxMintable - supply : 0} / 1.000
                  </p>
                </div>
                <div className="hidden md:flex flex-col space-y-0.5 items-center">
                  <h5 className="text-gray-200 text-3.5 leading-5">
                    Total Supply:
                  </h5>
                  <p className="text-white text-4 leading-5 ">1.000</p>
                </div>
                <div className="hidden md:flex flex-col space-y-0.5 items-center">
                  <h5 className="text-gray-200 text-3.5 leading-5">
                    Supply Remaining:
                  </h5>
                  <p className="text-white text-4 leading-5 ">
                    {maxMintable - supply}
                  </p>
                </div>
              </div>
            </div>
            <p className="flex items-center justify-center gap-4">
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
            </p>
            <div className="flex mt-8 justify-center space-x-3">
              <a
                href="https://discord.gg/proof"
                target="_blank"
                rel="noopen nofollow noreferrer"
              >
                <img
                  src="/mint/Discord.png"
                  alt=""
                  className="opacity-70 hover:opacity-100 cursor-pointer w-[25px]"
                />
              </a>
              <a
                href="https://opensea.io/collection/proof-moonbirds"
                target="_blank"
                rel="noopen nofollow noreferrer"
              >
                <img
                  src="/mint/Opensea.png"
                  alt=""
                  className="opacity-70 hover:opacity-100 w-[25px]"
                />
              </a>
              <a
                href="https://looksrare.org/collections/0x23581767a106ae21c074b2276D25e5C3e136a68b"
                target="_blank"
                rel="noopen nofollow noreferrer"
              >
                <img
                  src="/mint/LooksRare.png"
                  alt=""
                  className="opacity-70 hover:opacity-100 w-[25px]"
                />
              </a>
            </div>
          </div>
          <div className="p-16 md:w-[456px] md:flex md:flex-col md:justify-center md:flex-grow items-center">
            <div className="p-[40px]">
              <div>
                {active ? (
                  isWhitelisted ? (
                    <div className="">
                      <div className="flex flex-row items-center mb-6">
                        <button
                          className="bg-green-100 transition-all duration-500 ease-in-out rounded-2xl text-black py-2  text-base w-72 border-2 border-black leading-6 disabled:cursor-disabled"
                          disabled={!isWhitelisted}
                          onClick={infect}
                        >
                          {isInfecting ? "Infecting..." : "Infect with 1 Virus"}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col lg:flex-col sm:flex-col justify-between">
                      <div>
                        <h2 className="text-3xl  text-center my-4">
                          Mint a Zombie
                        </h2>
                        <div className="flex flex-row items-center mb-6">
                          <button
                            className="text-black bg-green-100 px-6 py-2 rounded-2xl border-2 border-black  text-base leading-6"
                            onClick={() => changeQuantity("subtract")}
                          >
                            -
                          </button>
                          <input
                            className="rounded-2xl text-black border-2 px-6 py-2 border-black mx-2 w-36"
                            type="number"
                            placeholder="Zombies quantity"
                            min="0"
                            value={mintQuantity}
                            onChange={(e) => setMintQuantity(e.target.value)}
                          />
                          <button
                            className="text-black bg-green-100 px-6 py-2 rounded-2xl border-2 border-black  text-base leading-6"
                            onClick={() => changeQuantity("add")}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className={
                            `${
                              mintQuantity === 0
                                ? "bg-green-200"
                                : "bg-green-100"
                            }` +
                            " transition-all duration-500 ease-in-out rounded-2xl text-black py-2  text-base w-72 border-2 border-black leading-6 disabled:cursor-disabled"
                          }
                          disabled={mintQuantity === 0}
                          onClick={mint}
                        >
                          {isMinting
                            ? "Minting..."
                            : `Mint (${mintQuantity * mintPrice} FTM)`}
                        </button>
                      </div>
                      <Link href="/zombies">
                        <button className="mt-12 bg-green-100 transition-all duration-500 ease-in-out rounded-2xl text-black py-2  text-base w-72 border-2 border-black leading-6 disabled:cursor-disabled">
                          See my Zombies
                        </button>
                      </Link>
                    </div>
                  )
                ) : (
                  <div className="relative">
                    <div className="flex flex-col items-center content-center leading-6 text-base font-semibold w-full h-full justify-center">
                      <h1 className="text-xl sm:text-3xl mt-8 font-extrabold mb-6">
                        Connect your wallet
                      </h1>
                      <button
                        className="bg-white hover:bg-green-200 flex items-center transition-all duration-500 ease-in-out rounded-2xl text-black hover:text-white py-3 px-7  text-base leading-6"
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MintSection;
