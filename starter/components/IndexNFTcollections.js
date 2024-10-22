// components/NFTCollections.js
import React from 'react';
import Image from 'next/image';
import nft1 from '../img/nft_1.png';
import nft2 from '../img/nft-image-2.png';
import nft3 from '../img/nft-image-3.png';
import collection from '../img/collection.png';
import Link from 'next/link';

const IndexNFTcollections = () => {
  return (
    <>
    <div className='bg-gray-900 p-5 '>
    <div className="m-10 flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto p-4">
      {/* Left Side: Text and Information */}
      <div className="md:w-1/2 p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Walking On Air
        </h2>

        <div className="flex items-center mb-4">
          <Image
            src={collection} // Replace with actual image of creator
            alt="Creator"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
            Jane Cooper
          </span>
          <span className="ml-2 text-blue-500 text-xs">✔️</span>
        </div>

        <div className="flex items-center mb-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Collection:
          </span>
          <Link href="/collection" className="ml-1 text-blue-600 dark:text-blue-400">
            Monoscapes
          </Link>
        </div>

        {/* Current Bid */}
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-6">
          <p className="text-xl font-semibold text-green-500 dark:text-green-400">
            1.000 ETH
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            (~$3,221.22)
          </p>
        </div>

        {/* Auction timer */}
        <div className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          <p>Auction ending in:</p>
          <div className="flex space-x-4 mt-2">
            <div>
              <span className="block text-lg font-bold">20</span>
              <span className="block text-xs">Days</span>
            </div>
            <div>
              <span className="block text-lg font-bold">4</span>
              <span className="block text-xs">Hours</span>
            </div>
            <div>
              <span className="block text-lg font-bold">3</span>
              <span className="block text-xs">Minutes</span>
            </div>
            <div>
              <span className="block text-lg font-bold">56</span>
              <span className="block text-xs">Seconds</span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Place a bid
          </button>
          <Link href="/view-item" className="text-blue-600 dark:text-blue-400">
            View Item
          </Link>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 relative">
        <div className="relative w-full h-64 md:h-full">
          <Image
            src={nft1} 
            alt="NFT"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
    <div className="m-10 flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto p-4">
      {/* Left Side: Text and Information */}
      <div className="md:w-1/2 p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Walking On Air
        </h2>

        <div className="flex items-center mb-4">
          <Image
            src={collection} // Replace with actual image of creator
            alt="Creator"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
            Jane Cooper
          </span>
          <span className="ml-2 text-blue-500 text-xs">✔️</span>
        </div>

        <div className="flex items-center mb-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Collection:
          </span>
          <Link href="/collection" className="ml-1 text-blue-600 dark:text-blue-400">
            Monoscapes
          </Link>
        </div>

        {/* Current Bid */}
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-6">
          <p className="text-xl font-semibold text-green-500 dark:text-green-400">
            1.000 ETH
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            (~$3,221.22)
          </p>
        </div>

        {/* Auction timer */}
        <div className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          <p>Auction ending in:</p>
          <div className="flex space-x-4 mt-2">
            <div>
              <span className="block text-lg font-bold">20</span>
              <span className="block text-xs">Days</span>
            </div>
            <div>
              <span className="block text-lg font-bold">4</span>
              <span className="block text-xs">Hours</span>
            </div>
            <div>
              <span className="block text-lg font-bold">3</span>
              <span className="block text-xs">Minutes</span>
            </div>
            <div>
              <span className="block text-lg font-bold">56</span>
              <span className="block text-xs">Seconds</span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Place a bid
          </button>
          <Link href="/view-item" className="text-blue-600 dark:text-blue-400">
            View Item
          </Link>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 relative">
        <div className="relative w-full h-64 md:h-full">
          <Image
            src={nft2} 
            alt="NFT"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
    <div className="m-10 flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto p-4">
      {/* Left Side: Text and Information */}
      <div className="md:w-1/2 p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Walking On Air
        </h2>

        <div className="flex items-center mb-4">
          <Image
            src={collection} // Replace with actual image of creator
            alt="Creator"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
            Jane Cooper
          </span>
          <span className="ml-2 text-blue-500 text-xs">✔️</span>
        </div>

        <div className="flex items-center mb-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Collection:
          </span>
          <Link href="/collection" className="ml-1 text-blue-600 dark:text-blue-400">
            Monoscapes
          </Link>
        </div>

        {/* Current Bid */}
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-6">
          <p className="text-xl font-semibold text-green-500 dark:text-green-400">
            1.000 ETH
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            (~$3,221.22)
          </p>
        </div>

        {/* Auction timer */}
        <div className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          <p>Auction ending in:</p>
          <div className="flex space-x-4 mt-2">
            <div>
              <span className="block text-lg font-bold">20</span>
              <span className="block text-xs">Days</span>
            </div>
            <div>
              <span className="block text-lg font-bold">4</span>
              <span className="block text-xs">Hours</span>
            </div>
            <div>
              <span className="block text-lg font-bold">3</span>
              <span className="block text-xs">Minutes</span>
            </div>
            <div>
              <span className="block text-lg font-bold">56</span>
              <span className="block text-xs">Seconds</span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Place a bid
          </button>
          <Link href="/view-item" className="text-blue-600 dark:text-blue-400">
            View Item
          </Link>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 relative">
        <div className="relative w-full h-64 md:h-full">
          <Image
            src={nft3} 
            alt="NFT"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
    <div className='w-screen h-max flex justify-center items-center'>
    <Link href={'/explore'}>
        <a>
          <button className="border-slate-800 border-2 hover:bg-slate-800 text-white px-4 py-2 rounded-lg mt-12">
            Explore more NFTs
          </button>
        </a>
    </Link>
    </div>
    </div>
    </>
  );
};

export default IndexNFTcollections;
