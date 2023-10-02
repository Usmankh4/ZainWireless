import iphone from "../image/iphone14crop.png";
import Header from "./header";
import BannerImage from "./images/phone.png";
import Image from "next/image";
import samsung from "../image/samsung.png";
import google from "../image/google.png";
import Footer from "./footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="pageAfterHeader">
        <div className="heroBanner">
          <div className="repairText">
            <h2>Repair Is Our Specialty</h2>
          </div>
          <div className="heroImage">
            <Image src={BannerImage}></Image>
          </div>
        </div>

        <div className="cardWrapper">
          <div className="cardLayout">
            <div className="iPhoneCard">
              <h2>Apple</h2>
              <button>View All</button>
              <div className="iPhoneImage">
                <Image src={iphone}></Image>
              </div>
            </div>

            <div className="iPhoneCard">
              <h2>Samsung</h2>
              <button>View All</button>
              <div className="iPhoneImage">
                <Image height={243} src={samsung}></Image>
              </div>
            </div>

            <div className="iPhoneCard">
              <h2>Android</h2>
              <button>View All</button>
              <div className="iPhoneImage">
                <Image zoom height={243} src={google}></Image>
              </div>
            </div>
          </div>
        </div>

        {/* Separate container for "CardsBelow" */}
        <div className="cardsBelowContainer" >
          <div className="CardsBelow">
            <div className="bigcard">
              <h2>Accessories</h2>
              <button>View All</button>
              <div className="iPhoneImage">
                <Image zoom height={243} src={google}></Image>
              </div>
            </div>
            <div className="bigcard">
              <h2>Tablets</h2>
              <button>View All</button>
              <div className="iPhoneImage">
                <Image zoom height={243} src={google}></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}