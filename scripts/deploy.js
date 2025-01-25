async function main() {
    // Getting the contract factory
    const nft = await hre.ethers.deployContract("GaiArtifyNFT");

    // Deploying the contract
    await nft.waitForDeployment();
    console.log("NFT deployed to:", nft.target);


    // ============================ my NFT ============================

       // Grab the contract factory 
   const MyNFT = await ethers.getContractFactory("MyNFT");

   // Start deployment, returning a promise that resolves to a contract object
   const myNFT = await MyNFT.deploy(); // Instance of the contract 
   console.log("Contract deployed to address:", myNFT.target);

}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});