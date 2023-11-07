import Footer from '../../footer';
import '../../globals.css';
import Header from '../../header';
import Image from "next/image";
import Repairphones from "../../repairPhones.json";
export default function Repair() {
  

  return (
    <div>
      <Header></Header>
      <div className="pageAfterHeader">
        <h3> This is the repair page </h3>
        <div className="RepairWrapper">
          <div className="phones-grid">
            {Repairphones.map((phone) => (
              <div className="phone-card" key={phone.name}>
                <div className="phonePicture">
                  <Image src={phone.image} alt={phone.name} width={150} height={104} />
                </div>
                <h4>{phone.name}</h4>
                <p>Get your phone fixed today. Check out our price list now!</p>
                <button>LEARN MORE</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
