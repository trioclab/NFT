import Image from 'next/image'; // Import the Next.js Image component
import img1 from '../img/nft-image-1.png'; 
import img2 from '../img/nft-image-2.png'; 
import img2 from '../img/nft-image-3.png'; 
export default function Category() {
  return (
    <div className="font-inter categories">
      <h2>Browse Categories</h2>
      <div className="category-items">
        <div className="category">
          <img src={img1} alt="Blockchain" />
          <h4>Blockchain</h4>
        </div>
        <div className="category">
          <img src={img2} alt="Digital Art" />
          <h4>Digital Art</h4>
        </div>
        <div className="category">
          <img src={img3} alt="Digital Art" />
          <h4>Digital Art</h4>
        </div>
        {/* Add more categories */}
      </div>
    </div>
  );
}
