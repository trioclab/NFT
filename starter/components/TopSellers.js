import Image from 'next/image';
import author_01 from '../img/author.jpg';
import author_02 from '../img/author-02.jpg';
import author_03 from '../img/author-03.jpg';
const topSellers = [
  { rank: 1, name: 'NFT Top Artist', bid: '8.6 ETH', image: author_01},
  { rank: 2, name: 'George Brandon', bid: '4.8 ETH', image: author_02 },
  { rank: 3, name: 'Johnny Mayson', bid: '6.2 ETH', image: author_03},
  { rank: 1, name: 'NFT Top Artist', bid: '8.6 ETH', image: author_01},
  { rank: 2, name: 'George Brandon', bid: '4.8 ETH', image: author_02 },
  { rank: 3, name: 'Johnny Mayson', bid: '6.2 ETH', image: author_03},
  { rank: 1, name: 'NFT Top Artist', bid: '8.6 ETH', image: author_01},
  { rank: 2, name: 'George Brandon', bid: '4.8 ETH', image: author_02 },
  { rank: 3, name: 'Johnny Mayson', bid: '6.2 ETH', image: author_03}
];

export default function TopSellers() {
  return (
    <div className="bg-gray-900 container mx-auto p-12 text-white flex flex-col text-center items-center">
    <hr className='w-1/2 py-5'></hr>
      <h2 className="text-3xl font-bold mb-6 text-white">Our Top Sellers This Week</h2>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full">
        {topSellers.map((seller, index) => (
          <div key={index} className=" shadow-lg rounded-lg p-4 text-center flex items-center justify-center">
            <h4 className="text-xl font-bold pr-3">#{`${seller.rank}.`}</h4>
            <Image src={seller.image} alt={seller.name} width={80} height={80} className="rounded-full mx-auto" />
            <div className='text-start pl-3'>
            <h6 className="mt-4 text-lg font-semibold">{seller.name}</h6>
            <p className="text-gray-500">{seller.bid}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
