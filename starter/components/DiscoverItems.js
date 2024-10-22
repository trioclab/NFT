import Image from 'next/image';
import Link from 'next/link';
import discover_01 from '../img/discover-01.jpg';
import discover_02 from '../img/discover-02.jpg';
import discover_03 from '../img/discover-03.jpg';
import discover_04 from '../img/discover-04.jpg';
import discover_05 from '../img/discover-05.jpg';
import discover_06 from '../img/discover-06.jpg';

export default function DiscoverItems() { // Removed unused props
  const items = [
    { image: discover_01, title: 'Mutant Ape Bored', bid: '8.16 ETH', category: 'Digital Art', ends: '25th Nov', detailsLink: '/nft/1' },
    { image: discover_02, title: 'His Other Half', bid: '6.50 ETH', category: 'Visual Art', ends: '26th Nov', detailsLink: '/nft/2' },
    { image: discover_03, title: 'Another Half Ape', bid: '7.25 ETH', category: 'Collectible', ends: '27th Nov', detailsLink: '/nft/3' },
    { image: discover_04, title: 'Cyberpunk City', bid: '9.00 ETH', category: 'Digital Art', ends: '28th Nov', detailsLink: '/nft/4' },
    { image: discover_05, title: 'Cosmic Dreamscape', bid: '5.80 ETH', category: 'Visual Art', ends: '29th Nov', detailsLink: '/nft/5' },
    { image: discover_06, title: 'Ancient Artifact', bid: '10.50 ETH', category: 'Collectible', ends: '30th Nov', detailsLink: '/nft/6' }
  ];

  return (
    <div className="container mx-auto p-12 bg-gray-900 text-white ">
      <h2 className="text-4xl font-bold my-7">Discover Some Of Our <strong className='text-purple-900'>Items.</strong></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
        {items.map((item, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"> {/* Consistent card style */}
            <div className="relative h-96">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-md" 
              />
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
              <div className="flex justify-between text-gray-400">
                <p>Current Bid:</p>
                <p>Ends In:</p>
              </div>
              <div className="flex justify-between text-white font-medium">
                <p>{item.bid}</p>
                <p>{item.ends}</p>
              </div>
              <Link href={item.detailsLink}>
                <a className="block w-full bg-purple-600 text-center py-2 mt-4 rounded-md text-white hover:bg-purple-700 transition duration-200">
                  View Details
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}