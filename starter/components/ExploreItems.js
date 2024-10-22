import NFTCard from './NFTCard';

export default function ExploreItems() {
  const nftItems = [
    { image: '/images/featured-01.jpg', title: 'Mutant Ape', author: 'Liberty Artist', bid: '8.16 ETH', category: 'Digital Art', endDate: '25th Nov' },
    { image: '/images/featured-02.jpg', title: 'Bored Ape Kennel Club', author: 'Liberty Artist', bid: '4.50 ETH', category: 'Visual Art', endDate: '26th Nov' },
    // Add more items here...
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto py-12">
      {nftItems.map((item, index) => (
        <NFTCard key={index} {...item} />
      ))}
    </div>
  );
}
