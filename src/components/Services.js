import Card from "./Card";
import Card1 from "./img/card1.png";
import Card2 from "./img/card2.png";
import Card3 from "./img/card3.png";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                    <Card title="Web Development" img={Card1} text="Complete website building and managing for every business and industry." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="E-Commerce Services" img={Card2} text="Managing E-Commerce portal and the maintaince of App and Services" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Cyber Security" img={Card3} text="Working with Financial Sectors to banking applications Providing Security to each and Every Aspects of Industry needs." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
