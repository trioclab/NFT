import images from '../img/index'; // Import images

export default function ItemDetails({ item }) {
  return (
    <div className="item-details font-inter">
      <img src={images[item.imageKey]} alt={item.title} className="item-image" />
      <h2>{item.title}</h2>
      <p>By {item.author}</p>
      <p>Current Bid: {item.currentBid}</p>
      <button className="main-button">Place Bid</button>
    </div>
  );
}
