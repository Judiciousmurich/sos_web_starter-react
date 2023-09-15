import "./menu.css";
import { Link } from "react-router-dom";
const MenuCard = ({ image, title, description, price }) => {
  return (
    <div className="menu-card">
      <div className="menu-card-image-container">
        <img src={image} alt={title} className="menu-card-image" />
      </div>
      <h3 className="menu-card-title  capitalize font-bold text-2xl">
        {title}
      </h3>
      <p className="menu-card-description text-center tracking-wide text-base row-start">{description}</p>
      <Link to ="" className="menu-card-cta">
        ${price} | order now
      </Link>
    </div>
  );
};

export default MenuCard;
