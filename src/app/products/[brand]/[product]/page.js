import phonesData from "../../../phones.json";
import Header from "@/components/header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Page({ params }) {
  const productName = decodeURIComponent(params.product);

  // Find the phone based on the brand and product name
  const phone = phonesData.find(p => 
    p.brand === params.brand && p.name === productName
  );
  
  if (!phone) return <div>Loading or Not Found...</div>;
      
  return (
    
    <div className="container">
      <Header />
      <div className="productScreen">

        <div className="phoneDisplay">
          <img src={phone.thumbnail} alt={phone.name} />
        </div>

        <div className="phoneInformation">
          <div>
            <h1>{phone.name}</h1>
            <h2>${phone.price}</h2>
            <div className="ratingStars">
              {[...Array(6)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#fdbc00", fontSize: "16px" }} />
              ))}
            </div>

            <div className="optionsContainer">
              <div className="dropdownContainer">
                <div className="option">
                  <label htmlFor="colorSelect">Color:</label>
                  
                </div>

                <div className="option">
                  <label htmlFor="sizeSelect">Size:</label>
                  
                </div>

                <div className="option">
                  <label htmlFor="quantitySelect">Quantity:</label>
                  
                </div>
              </div>

              <div className="buyButton">
                <button className="buyNowButton">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
