import Navbars from "../../components/Navbar/Navbar"
import MainLayOut from "../../components/LayOut/MainLayout"
import CardCompanyInfoDetail from "../../components/CardCompanyInfoDetail/CardCompanyInfoDetail";
import CardJob from "../../components/CardJob/CardJob"
import 'bootstrap/dist/css/bootstrap.min.css';
import OutlinedCard from "../../components/ReviewCard/Review"
import "./detailcompany.css"
function DetailCompany() {
    return (
        <>
            <Navbars></Navbars>

            <MainLayOut>

                <CardCompanyInfoDetail></CardCompanyInfoDetail>
                <div class ="detail-body">
                    <div className="job-cotainer">

                        <CardJob></CardJob>

                    </div>
                    <div className="review-container">
                       <OutlinedCard></OutlinedCard>
                    </div>
                </div>

            </MainLayOut>
        </>
    )
}
export default DetailCompany