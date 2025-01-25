// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ArtCertifier {
    struct Artwork {
        string title;
        string artist;
        string ipfsHash;
        uint timestamp;
        address owner; // The owner of the certificate
    }

    mapping(uint => Artwork) public artworks; // Mapping of IDs to artworks
    mapping(uint => bool) public idExists; // To ensure uniqueness of IDs

    event ArtworkCertified(uint id, string title, string artist, address owner);

    // Function to certify an artwork (mint an NFT)
    function certifyArt(uint id, string memory title, string memory artist, string memory ipfsHash) public {
        require(!idExists[id], "This ID is already used."); // Ensure uniqueness of the ID
        artworks[id] = Artwork(title, artist, ipfsHash, block.timestamp, msg.sender);
        idExists[id] = true; // Mark this ID as used
        emit ArtworkCertified(id, title, artist, msg.sender);
    }

    // Function to retrieve artwork details
    function getArt(uint id) public view returns (Artwork memory) {
        require(idExists[id], "This artwork does not exist.");
        return artworks[id];
    }

    // Override default transfer behaviors to make certificates non-transferrable
    function transferFrom(address, address, uint256) public pure {
        revert("This certificate is non-transferrable.");
    }

    function approve(address, uint256) public pure {
        revert("This certificate is non-transferrable.");
    }

    function setApprovalForAll(address, bool) public pure {
        revert("This certificate is non-transferrable.");
    }
}