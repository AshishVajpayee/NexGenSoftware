import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Web Development" img="card1.png" text="Complete website building and managing for every business and industry." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="E-Commerce Services" img="card2.png" text="Managing E-Commerce portal and the maintaince of App and Services" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Cyber Security" img="card3.png" text="Working with Financial Sectors to banking applications Providing Security to each and Every Aspects of Industry needs." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
