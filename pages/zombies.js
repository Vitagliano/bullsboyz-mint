import { ethers } from "ethers";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, Fragment } from "react";
import useZombies from "../hooks/useZombies";
import useWeb3 from "../hooks/useWeb3";
import { toast } from "react-toastify";
import Button from "../components/Button";
import { Popover, Transition } from "@headlessui/react";

export default function ZombiesPage() {
  const { active, activate, deactivate, account, web3 } = useWeb3();
  const { contract, getUserZombies, getZombieMetadata } = useZombies(
    web3,
    account
  );

  const [userZombies, setuserZombies] = useState([]);
  const [zombieSelected, setzombieSelected] = useState(null);

  useEffect(() => {
    if (web3) {
      activate();
    }
  }, [web3]);

  useEffect(() => {
    if (contract && userZombies.length === 0) {
      const getZombiesPromise = new Promise((resolve, reject) => {
        getUserZombies()
          .then((zombies) => {
            if (zombies) {
              Promise.all(
                zombies.map((zombie) =>
                  getZombieMetadata(ethers.utils.formatUnits(zombie, 0))
                )
              )
                .then((metadatas) => {
                  setuserZombies(metadatas);
                  resolve();
                })
                .catch((error) => {
                  console.log(error);
                  reject();
                });
            } else {
              reject();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });

      toast.promise(getZombiesPromise, {
        pending: "Loading Zombies...",
        success: "Zombies loaded",
        error: "Error loading Zombies... Try again!",
      });
    }
  }, [contract]);

  const openHeartDetails = (zombie) => {
    setzombieSelected(zombie);
  };

  return (
    <div
      className={`pt-8 px-5 sm:max-w-5xl mx-auto sm:h-screen ${
        zombieSelected != null ? "overflow-hidden" : ""
      }`}
    >
      <div className="flex justify-center w-full">
        <Link href="/">
          <img src="/assets/logo.png" className="cursor-pointer" />
        </Link>
      </div>

      {active ? (
        <>
          <div className="py-5">
            <h1 className="text-xl sm:text-3xl mt-8 font-extrabold text-green-100 mb-6">
              My Zombies
            </h1>
            <ul className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {userZombies.map((zombie) => {
                if (!zombie) return null;
                console.log("coração", zombie);
                return (
                  <li
                    key={zombie.name}
                    className="flex flex-col items-center justify-center"
                  >
                    <button
                      type="button"
                      onClick={() => openHeartDetails(zombie)}
                    >
                      <img
                        src={zombie.image.replace(
                          "ipfs://",
                          "https://cloudflare-ipfs.com/ipfs/"
                        )}
                        alt={zombie.name}
                        className="w-60 h-60 rounded-xl mb-6"
                      />
                      <span className="font-bold py-2">{zombie.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          {zombieSelected != null && (
            <div
              className="bg-semitransparent backdrop-blur-xl w-full h-screen absolute top-0 left-0 right-0 flex items-center justify-center"
              onClick={() => setzombieSelected(null)}
            >
              <div
                className="w-3/4 h-3/4 rounded-xl bg-brown-100 shadow-2xl p-5 flex flex-row "
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={zombieSelected.image.replace(
                    "ipfs://",
                    "https://ipfs.io/ipfs/"
                  )}
                  alt={zombieSelected.name}
                  className="w-96 h-96 mx-auto rounded-xl"
                />
                <div className="w-2/4 p-5">
                  <h2 className="font-extrabold text-xl text-white pb-5">
                    {zombieSelected.name}
                  </h2>
                  <table className="w-full">
                    <tr>
                      <th className="text-left text-white">Attribute</th>
                      <th className="text-left text-white">Value</th>
                      <th className="text-left text-white">Rarity</th>
                    </tr>
                    {zombieSelected.attributes.map((attr) => {
                      return (
                        <tr>
                          <td className="text-white">{attr.trait_type}</td>
                          <td className="text-white">{attr.value}</td>
                          <td className="text-white">Soon!</td>
                        </tr>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <h1 className="text-xl sm:text-3xl mt-8 text-center font-extrabold text-white mb-4">
            Connect your wallet to see your zombies
          </h1>
        </>
      )}
    </div>
  );
}
