import "./CardCompanyInfoDetail.css"
import { Card, Button } from "react-bootstrap"

function CardCompanyInfoDetail() {
    return (
        <Card className="company-card">
            <Card.Img className="company-img mr-3" variant="top" src="https://cdn.itviec.com/employers/bbv-vietnam/logo/w170/32Bifg8XYcgWL8CBMKTwu5Pa/bbv3.png" />
            <Card.Body>
                <Card.Title style={{ "font-size": "2rem" }}>bbv Vietnam</Card.Title>
                <Card.Text className="company-info-items">
                    <div> District 12, Ho Chi Minh</div>
                    <div> Outsourcing</div>
                    <div> Monday - Friday</div>
                    <div> 51-150</div>
                </Card.Text>
            </Card.Body>
            <div className="card-footers">
                <Button variant="danger">Write a review</Button>
                <br></br>
                <Button variant="primary">Follow</Button>
            </div>
        </Card>
    )
}
export default CardCompanyInfoDetail

