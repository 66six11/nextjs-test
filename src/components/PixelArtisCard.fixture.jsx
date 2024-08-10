import "../styles/PixelArtistCard.css";
import Image from "next/image";

export default function PixelArtistCard({ image, name, description, link }) {
  return (
    <div className="PixelArtistCard">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="PixelArtistCard__image">
          <Image src={image} alt={name} width={100} height={100} />
        </div>

        <div className="PixelArtistCard__details">
          <div className="PixelArtistCard__name">
            <p>{name}</p>
          </div>
          <div className="PixelArtistCard__description">
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
