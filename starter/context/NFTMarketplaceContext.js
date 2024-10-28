import React, { useState, useEffect, useContext } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import Router from 'next/router';

// INTERNAL IMPORT
import { NFTMarketplaceAddress, NFTMarketplaceABI } from './constants';

// Create the context
export const NFTMarketplaceContext = React.createContext();

// Create the provider component
export const NFTMarketplaceProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState('');
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);

    // Function to connect the wallet
    const connectWallet = async () => {
        try {
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            setProvider(provider);

            const signer = provider.getSigner();
            const account = await signer.getAddress();
            setCurrentAccount(account);

            // Connect to the smart contract
            const contract = new ethers.Contract(
                NFTMarketplaceAddress,
                NFTMarketplaceABI,
                signer
            );
            setContract(contract);

            console.log('Wallet connected:', account);
        } catch (error) {
            console.error('Error connecting wallet:', error);
        }
    };

    // Check if wallet is connected on page load
    useEffect(() => {
        if (!currentAccount) {
            connectWallet();
        }
    }, []);

    // Function to list NFT for sale
    const listNFTForSale = async (tokenId, price) => {
        try {
            if (!contract) return;

            const priceInWei = ethers.utils.parseUnits(price.toString(), 'ether');
            const transaction = await contract.listNFT(tokenId, priceInWei);
            await transaction.wait();

            console.log('NFT listed successfully');
        } catch (error) {
            console.error('Error listing NFT:', error);
        }
    };

    // Function to buy an NFT
    const buyNFT = async (tokenId) => {
        try {
            if (!contract) return;

            const transaction = await contract.buyNFT(tokenId, {
                value: ethers.utils.parseUnits(price.toString(), 'ether'),
            });
            await transaction.wait();

            console.log('NFT purchased successfully');
        } catch (error) {
            console.error('Error buying NFT:', error);
        }
    };

    return (
        <NFTMarketplaceContext.Provider
            value={{
                currentAccount,
                connectWallet,
                listNFTForSale,
                buyNFT,
                contract,
            }}
        >
            {children}
        </NFTMarketplaceContext.Provider>
    );
};
