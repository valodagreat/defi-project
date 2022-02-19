const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS } = require("../constants");

async function main () {
    const cryptoDevTokenAddress = CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS;
    /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so exchangeContract here is a factory for instances of our Exchange contract.
    */
    const exchangeContract = await ethers.getContractFactory("Exchange");
    const deployedContract = await exchangeContract.deploy(
        cryptoDevTokenAddress
    );

    console.log("The Contract Addresss is: ", deployedContract.address);
}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
  }
);