// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract GaiArtifyNFT is ERC721URIStorage, Ownable(msg.sender) {
    uint256 private tokenId; // Counter for token IDs
    mapping(uint256 => address) private tokenOwners; // Tracks token ownership

    constructor() ERC721("GaiArtifyNFT", "GAI") {}

    // Function to mint a unique, non-transferrable NFT
    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256) {
        tokenId++;
        _mint(recipient, tokenId); // Mint the token
        _setTokenURI(tokenId, tokenURI); // Set the metadata URI
        tokenOwners[tokenId] = recipient; // Assign the owner

        return tokenId;
    }
    // Override transfer functions to make the NFT non-transferrable
    function transferFrom(address, address, uint256) public pure override(ERC721, IERC721) {
        revert("NFTs are non-transferrable.");
    }

    function safeTransferFrom(address, address, uint256, bytes memory) public pure override(ERC721, IERC721) {
        revert("NFTs are non-transferrable.");
    }

    // Retrieve the owner of a token
    function getTokenOwner(uint256 id) public view returns (address) {
        return tokenOwners[id];
    }
    
}