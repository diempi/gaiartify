// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GaiArtifyNFT is ERC721URIStorage, Ownable {

    uint256 private tokenId;

    constructor() ERC721("GaiArtifyNFT","GAI") Ownable(msg.sender) {}
    
        function mintNFT(address recepient, string memory tokenURI) public onlyOwner returns (uint256) 
        {

            tokenId++;
            _mint(recepient, tokenId);
            _setTokenURI(tokenId, tokenURI);

            return tokenId;
        }
    
}

