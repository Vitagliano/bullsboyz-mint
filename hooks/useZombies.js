import { ethers } from "ethers";
import { useEffect, useState } from "react";
import FantomZombiesAbi from "../contract/abis/FantomZombies.json";


const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

const useZombies = (web3, account) => {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (web3) {
      let c = new ethers.Contract(
        contractAddress,
        FantomZombiesAbi,
        web3.getSigner(account)
      );
      setContract(c);
    }
  }, [web3, account]);

  const getUserZombies = async () => {
    if (account) {
      const tokens = [];
      let index = 0;
      const owner = account;
      const balance = await contract.balanceOf(owner);
      for (let i = 0; i < balance; i++) {
        const token = await contract.tokenOfOwnerByIndex(owner, index);
        tokens.push(token);
        index++;
      }

      return tokens;
    }
  };

  const getZombieMetadata = async (zombieId) => {
    const response = await fetch(`/api/zombies/${zombieId}.json`);
    if (response.status === 200) {
      let data = await response.json();
      data = {
        ...data,
        id: zombieId,
      };
      return data;
    } else if (zombieId > 0 && response.status === 500) {
      return await getZombieMetadata(zombieId);
    }
    return null;
  };

  return {
    contract,
    getUserZombies,
    getZombieMetadata,
  };
};

export default useZombies;
