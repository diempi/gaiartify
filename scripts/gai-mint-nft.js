require("dotenv").config();
const { ethers } = require("hardhat");


// Create a JsonRpcProvider instance
const rpcUrl = process.env.MANTLE_RPC_URL;
const chainId = 5003;
//const provider = new JsonRpcProvider(rpcUrl, chainId);

const provider = ethers.getDefaultProvider(rpcUrl);


// Create a signer using the private key from the environment variable
const privateKey = process.env.PRIV_KEY;
//const signer = new ethers.Wallet(privateKey, provider);
const wallet = new ethers.Wallet(privateKey);
const signer = wallet.connect(provider);

// Get contract abi and address
const abi = require("../artifacts/contracts/GaiArtifyNFT.sol/GaiArtifyNFT.json").abi;
const contractAddress = "0xd1B6785a331cE0d6f8DAaF8262c80df95702122E";

// Create contract instance
const myNFTcontract = new ethers.Contract(contractAddress, abi, signer);

// Get the NFT Metadata IPFS URL
const tokenURI = "https://gateway.pinata.cloud/ipfs/bafkreidvas5a5leivbhn4fosit2yygfhoha2uowt73nf273y65hro7x7ju";

async function GaiArtifyNFT() {
    const gasPrice = await provider.getFeeData(); 
    
    let nftTxn = await myNFTcontract.mintNFT(signer.address, tokenURI,  {} );
    await nftTxn.wait();
    console.log(`NFT Minted! Check it out at: https://sepolia.mantlescan.xyz/tx/${nftTxn.hash}`);
}

GaiArtifyNFT()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
