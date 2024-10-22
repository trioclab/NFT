import PropTypes from 'prop-types';

export default function NFTList({ nfts }) {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6">Explore NFTs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {nfts.length > 0 ? (
          nfts.map((nft) => (
            <div key={nft._id} className="bg-white shadow-lg rounded-lg p-4">
              <img src={nft.imageUrl} alt={nft.title} className="rounded-md" />
              <h4 className="text-lg font-bold mt-4">{nft.title}</h4>
              <p className="text-gray-500">{nft.description}</p>
              <p className="text-lg font-semibold mt-2">{nft.price} ETH</p>
            </div>
          ))
        ) : (
          <p>No NFTs available</p>
        )}
      </div>
    </div>
  );
}

// Type checking with PropTypes
NFTList.propTypes = {
  nfts: PropTypes.array.isRequired,
};
