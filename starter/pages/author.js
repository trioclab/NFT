import AuthorDetails from '../components/AuthorDetails';

export default function Author() {
  const author = { name: 'John Doe', description: 'NFT Artist', imageKey: 'user1' };
  
  return (
    <div className="container mx-auto py-12">
        <h2 className="text-4xl font-bold mb-4">Author Details</h2>
        {/* Add author details and their NFTs here */}
      </div>
  );
}
