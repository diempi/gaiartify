
# **GaiArtify Certification Platform**

**GaiArtify** is a blockchain-based platform for certifying digital artworks as NFTs. The project leverages **Ethereum** (or compatible networks), **Pinata** for IPFS storage, and **Scaffold-ETH** for rapid development and deployment. Artists can upload their artwork, generate metadata, and mint unique, non-transferrable NFTs to certify their creations on the blockchain.

---

## **Project Status**

🚧 **This project is a work in progress.**  
Current features include:
- Uploading images to **Pinata** and retrieving IPFS hashes.
- Creating metadata JSON files with details such as the artist name, artwork title, and a timestamp.
- Uploading metadata JSON to Pinata.
- Minting non-transferrable NFTs using a deployed smart contract.

Upcoming features:
- Enhanced user interface for managing certified artworks.
- Integration with additional blockchain networks.
- Artist dashboard for viewing and managing minted NFTs.
- Detailed error handling and logging.

---

## **Technologies Used**

### **Frontend**
- **React** (via Scaffold-ETH)
- **Axios** for HTTP requests
- **Bootstrap/Tailwind CSS** (optional for styling)

### **Backend**
- **Hardhat** for Ethereum smart contract development
- **Pinata** for IPFS storage

### **Smart Contract**
- **Solidity** (ERC721 standard with non-transferrable NFT functionality)
- **OpenZeppelin** libraries

---

## **Features Implemented**

### **1. Image Upload and IPFS Integration**
- Users can upload artwork images.
- Images are uploaded to Pinata, and their IPFS hash is returned.

### **2. Metadata JSON Creation**
- Metadata is automatically generated using the uploaded image's hash, artist name, and artwork title.
- Metadata is formatted as per ERC721 standards, including attributes like artist name, artwork title, and certification date.

### **3. Mint Non-Transferrable NFTs**
- Minting NFTs is supported through the `GaiArtifyNFT` smart contract.
- NFTs are permanently linked to their metadata on IPFS and cannot be transferred to maintain authenticity.

---

## **Setup Instructions**

### **Prerequisites**
1. Install [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/).
2. Install [Metamask](https://metamask.io/) for interacting with the blockchain.
3. Create an account on [Pinata](https://pinata.cloud) for IPFS storage.

### **Steps to Run the Project**

#### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/gaiartify-certification.git
cd gaiartify-certification
```

#### **2. Install Dependencies**
```bash
yarn install
```

#### **3. Start the Local Development Environment**
- Run the Hardhat node:
  ```bash
  yarn chain
  ```
- Deploy the smart contract:
  ```bash
  yarn deploy
  ```
- Start the React frontend:
  ```bash
  yarn start
  ```

#### **4. Configure Pinata API Keys**
- Add your Pinata API keys to the `.env` file:
  ```
  PINATA_API_KEY=your_pinata_api_key
  PINATA_SECRET_API_KEY=your_pinata_secret_api_key
  ```

---

## **How It Works**

1. **Upload Artwork:**
   - Users upload an image of their artwork via the frontend form.
   - The image is uploaded to IPFS via Pinata, and the IPFS hash is returned.

2. **Generate Metadata:**
   - Metadata is dynamically generated with the following fields:
     - Artwork name
     - Artist name
     - Image hash (IPFS URL)
     - Timestamp
   - The metadata is then uploaded to Pinata, and the IPFS hash is returned.

3. **Mint NFT:**
   - The metadata hash is passed to the `mintNFT` function of the deployed smart contract.
   - The NFT is minted and permanently linked to the metadata on IPFS.

---

## **Folder Structure**

```plaintext
root
├── packages
│   ├── hardhat         # Ethereum development environment
│   │   ├── contracts   # Smart contracts (Solidity)
│   │   ├── scripts     # Deployment scripts
│   │   └── test        # Contract tests
│   ├── react-app       # Frontend application
│   │   ├── src
│   │   │   ├── components  # React components
│   │   │   ├── hooks       # Scaffold-ETH hooks
│   │   │   └── App.jsx     # Main app entry point
│   │   └── public          # Static files
│   └── deployments      # Deployment artifacts
```

---

## **Smart Contract**

The smart contract, `GaiArtifyNFT`, implements:
- ERC721 standards for NFTs.
- Non-transferrable NFTs to maintain the authenticity of certifications.
- Metadata storage via IPFS.

#### **Contract Functions**
- `mintNFT(address recipient, string memory tokenURI)`: Mints a new NFT and links it to metadata.

---

## **To-Do List**
- [ ] Add artist dashboard for managing NFTs.
- [ ] Implement advanced error handling.
- [ ] Support for multiple blockchain networks.
- [ ] Add unit tests for smart contract.
- [ ] Enhance UI/UX for a smoother user experience.

---

## **Contributing**

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push your branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Submit a pull request.

---

## **License**

This project is licensed under the **MIT License**.
