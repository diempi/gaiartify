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

// Get contract ABI and address
const abi = require("../artifacts/contracts/MyNFT.sol/MyNFT.json").abi;
const contractAddress = "0xa36CD319aA20ed675D75D84d32E63824DA117944";

// Create a contract instance
const myNftContract = new ethers.Contract(contractAddress, abi, signer);

// Get the NFT Metadata IPFS URL
const tokenUri = "https://gateway.pinata.cloud/ipfs/bafkreiaowhs3uh3sqfzze3qq33l2q2x2lbci6xdzlmsk6qtgobhuymtyba";

// Call mintNFT function
async function mintNFT() {
    const gasPrice = await provider.getFeeData();  // Use getFeeData() instead of getGasPrice()

  
  let nftTxn = await myNftContract.mintNFT(signer.address, tokenUri,  {} );
  await nftTxn.wait();
  console.log(`NFT Minted! Check it out at: https://sepolia.mantlescan.xyz/tx/${nftTxn.hash}`);
}

mintNFT()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });