async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
    const nftmarketplace = await NFTMarketplace.deploy(); // Deploy the contract

    await nftmarketplace.deployed(); // Wait for the deployment to finish

    console.log("Contract deployed to:", nftmarketplace.address);
}

main().catch((error) => {
    console.error("Error during deployment:", error);
    process.exitCode = 1;
});
