import Link from 'next/link';
import Image from 'next/image';
import featured_01 from '../img/featured-01.jpg'; // Import images
// export default function NFTCard({ title, author, currentBid, imageKey, href }) {
//   return (
//     <div className="nft-card font-inter">
//       <img src={images[imageKey]} alt={title} className="nft-image" />
//       <div className="nft-info">
//         <h4>{title}</h4>
//         <span>By {author}</span>
//         <p>Current Bid: {currentBid}</p>
//         <a href={href}>View Details</a>
//       </div>
//     </div>
//   );
// }
export default function NFTCard({ image, title, author, bid, category, endDate }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      <div className="p-4">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-sm text-gray-500">By {author}</p>
        <p className="text-lg font-bold mt-2">{bid}</p>
        <p className="text-sm text-gray-500">Category: {category}</p>
        <p className="text-sm text-gray-500">Ends: {endDate}</p>
        <Link href="/details">
          <a className="text-indigo-500 hover:underline mt-4 inline-block">View Details</a>
        </Link>
      </div>
    </div>
  );
}