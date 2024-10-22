import images from '../img/index'; // Import images

export default function Banner() {
  return (
    // <div className="font-inter main-banner">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-6">
    //         <div className="header-text">
    //           <h6>Liberty NFT Market</h6>
    //           <h2>Create, Sell & Collect Top NFTs</h2>
    //           <p>Welcome to the best NFT marketplace.</p>
    //           <div className="buttons">
    //             <a href="/explore" className="main-button">Explore Top NFTs</a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-5">
    //         <img src={images.hero} alt="Hero Image" className="hero-img h-full w-full" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gray-100 py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Discover Some Top Items</h2>
      <p className="text-lg">Browse the best NFTs in our collection</p>
    </div>
  </div>
  );
}
