import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";

import { toast } from "react-toastify";

import FantomZombiesAbi from "../../contract/abis/FantomZombies.json";
import IX32PEVirusAbi from "../../contract/abis/IX32PEVirus.json";

import useWeb3 from "../../hooks/useWeb3";
import { ethers } from "ethers";

import { Parallax } from "react-scroll-parallax";
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
    <div className="flex flex-col items-center pt-12 bg-moreblack ">
      <Navbar />
      <div className="mb-12">
        <h1 className="text-6xl sm:text-6xl mt-12 text-center text-white">
          Lore
        </h1>
        <h1 className="text-3xl text-white">The Zombie Apocalypse</h1>
      </div>
      <div className="mb-6">
        <Section title="Origin of everything" img="/assets/first.gif">
          <div className="text-gray-100 mr-24">
            In 2019 the Greenland Ice Sheet endured a record setting melt event.
          </div>
          <div className="my-2 text-gray-100 mr-24">
            For more than ten hours trillions of gallons, enough to immerse
            California under 4 feet of water, poured into the ocean.
          </div>
          <div className="my-2 text-gray-100 mr-24">
            Deep layers of ancient ice were exposed, and with them, an ancient
            pathogen set free from it's icy prison to find found refuge in the
            cold and shadowy glacial streams.
          </div>
          <div className="my-2 text-gray-100 mr-24">
            The first documented cases appeared in the summer of 2021 in Narsaq,
            a small town in western Greenland located near Thule air base.
          </div>
          <div className="text-gray-100 mr-24">
            There exists anecdotal reports of a Danish soldier who disappeared
            while suffering from a strange illness, but they are unverified and
            the soldier's condition unidentified.
          </div>
        </Section>
      </div>
      <div className="my-6 ml-24">
        <Section title="Pandemic" img="/assets/virus_img.png" position="right">
          <div className="text-gray-100">It spread like rainwater.</div>
          <div className="my-2 text-gray-100">
            It seemed to appear everywhere, all of a sudden, and it concentrated
            into densely populated areas like rainfall pooling into pot holes.
          </div>
          <div className="my-2 text-gray-100 ">
            People fled the cities into the countryside, and they brought the
            virus with them.
          </div>
          <div className="my-2 text-gray-100 ">
            It took just one dimly lit winter to transform humanity, for the
            better or the worse.
          </div>
        </Section>
      </div>

      <div className="mb-12">
        <Section
          title="Strongest Zombies"
          img="/assets/leaders/soon.png"
          button="Know the Zombie Leaders"
          buttonUrl="/leaders"
        >
          <div className="text-gray-100 mr-24">
            The first infection was all it took.
          </div>
          <div className="my-2 text-gray-100 mr-24">
            From that moment on humanity's destiny was permanently altered, but
            the future was not set, the story of humanity's achievements was not
            over.
          </div>
          <div className="my-2 text-gray-100 mr-24">
            As the virus burned through population centers and reached outward
            to the most secluded corners of the earth, the virus grew faster,
            stronger, more efficient.
          </div>
          <div className="my-2 text-gray-100 mr-24">
            Unmitigated, and supercharged by the ever-warming climate of the
            modern world, the virus mutated at a rapid pace.
          </div>
          <div className="my-2 text-gray-100 mr-24">
            Gaining the ability to preserve useful base functions of the human
            brain, the virus developed an agency.
          </div>
          <div className="my-2 text-gray-100 mr-24">
            It wasn't long before a new breed of zombie was born, a rare breed,
            one that had evolved past it's animal instincts, one that could
            control and wield the mindless hordes.
          </div>
          <div className="text-gray-100 mr-24">
            One that could supply them purpose.
          </div>
        </Section>
      </div>

      <div className="mx-24 my-12 grid overflow-hidden lg grid-cols-2 grid-rows-1 gap-32 grid-flow-row">
        <div className="">
          <div className="mb-12 text-center">
            <h1 className="text-3xl text-white ">Stage One - Leader Zombie</h1>
            <h1 className="text-6xl sm:text-6xl mt-6 text-center text-white">
              Evolution
            </h1>
            <div>
              <div className="text-gray-100">
                Tens of thousands of years ago humanity was inflicted with a
                terrible plague.
              </div>
              <div className="my-2 text-gray-100 ">
                Buried deep inside a glacier, the remnants of this plague lie in
                stasis, oblivious to the years gone by.
              </div>
              <div className="my-2 text-gray-100">
                If ever released from it's icy prison, a cataclysm of a lost age
                would once again spread it's jaws and chew.
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mb-12 text-center">
            <h1 className="text-3xl text-white">Stage Two - Leader Zombie </h1>
            <h1 className="text-6xl sm:text-6xl mt-6 text-white">Tribes</h1>
            <div className="text-gray-100">
              It started with tribes. The first was small, and happenstance. A
              zombie in a horde shambling around in a mall was compelled to
              wander down a hallway littered with tall stacks of maintenance
              supplies, followed by two fellow horde members.
            </div>
            <div className="my-2 text-gray-100">
              Drawn to an odd section of wall, the newly curious zombie
              instinctively reached out and pressed, pushing it’s way past the
              threshold of an ajar emergency exit..
            </div>
            <div className="my-2 text-gray-100 ">
              As he shambled on into the afternoon sun, his new posse followed.
            </div>
            <div className="my-2 text-gray-100">
              Surprisingly clever, he seemed to understand that he was in
              control, that his newfound wingmen were just an extension of his
              own brewing will, and it wouldn't be long before he began to
              survey the hordes for recruitment.
            </div>
            <div className="my-2 text-gray-100">
              It would only be a matter of time before he discovered ambition.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Leaders;
