import MainLayOut from "../../components/LayOut/MainLayout"
import { Card, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./detailjob.css"
function DetailJob() {
    return (
        <MainLayOut>
            <div className="job-card">
                <div className="job-detail-header mb-4">
                    <Card.Img className="company-img mr-3" variant="top" src="https://cdn.itviec.com/employers/bbv-vietnam/logo/w170/32Bifg8XYcgWL8CBMKTwu5Pa/bbv3.png" />
                    <div className="job-detail-header-content">
                        <Card.Title style={{ "font-size": "2rem" }} className="mb-4">Lead/ Senior Security Engineer, Pen Test</Card.Title>
                        <Button variant="danger" size="lg" block>
                            Apply Now
                    </Button>
                    </div>
                </div>
                <div className="job-detail-overview">
                    <div className="job-detail-taglist">
                        <Button className ="m-2" variant="outline-info">Tester</Button>
                        <Button className ="m-2" variant="outline-info">QA QC</Button>
                        <Button className ="m-2" variant="outline-info">AWS</Button>
                    </div>
                    <div className="job-detail-content"> 
                    {/* render = function */}
                        <div> You'll love it  </div>
                        <div> You'll love it  </div>
                        <div> You'll love it  </div>
                    </div>
                </div>
                <div className="job-detail-description">
                    <h2> Job Description</h2>

                </div>

            </div>

        </MainLayOut>
    )
}
export default DetailJob