import images from '../img/index'; // Import images

export default function AuthorDetails({ author }) {
  return (
    <div className="author-details font-inter">
      <img src={images[author.imageKey]} alt={author.name} className="author-image" />
      <h2>{author.name}</h2>
      <p>{author.description}</p>
      <button className="main-button">Follow</button>
    </div>
  );
}
