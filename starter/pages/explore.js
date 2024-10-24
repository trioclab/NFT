import FeaturedItems from "../components/FeaturedItems";
import DiscoverItems from "../components/DiscoverItems";
import TopSellers from "../components/TopSellers";
import NFTList from "../components/NFTList";  // Import the NFTList component
import Link from "next/link";
import { useEffect, useState } from "react";  // Import useEffect and useState
import axios from "axios";  // Import Axios for API calls

export default function Explore() {
  const [nfts, setNfts] = useState([]);  // State to store fetched NFTs

  useEffect(() => {
    // Fetch NFT data from the backend
    axios.get('http://localhost:5000/api/nfts')
      .then(response => setNfts(response.data))  // Store fetched NFTs in state
      .catch(error => console.error(error));  // Handle any errors
  }, []);

  return (
    <div>
      <div className="page-heading py-16 bg-gray-900 text-white flex flex-col justify-center items-center" style={{ height: 'calc(90vh - 5rem)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h6 className="text-3xl font-semibold mb-2">Liberty NFT Market</h6>
            <h2 className="text-6xl font-bold mb-4">Discover Some Top Items</h2>
            <span className="text-lg text-gray-300">
              Home &gt;{" "}
              <Link href="#">
                <a className="text-white underline">Create Yours</a>
              </Link>
            </span>
            <div className="mt-16 flex justify-center space-x-4">
              <div className="main-button">
                <Link href="/explore">
                  <a className=" text-2xl px-6 py-3 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-500 transition">
                    Explore Our Items
                  </a>
                </Link>
              </div>
              <div className="border-button">
                <Link href="/create">
                  <a className="text-2xl px-6 py-3 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-purple-700 transition">
                    Create Your NFT
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pass the fetched NFT data to the NFTList component */}
      <NFTList nfts={nfts} />

      <FeaturedItems />
      <DiscoverItems />
      <TopSellers />
    </div>
  );
}
