import "./home.css";
import "./global.css";
import Navbar from "../../components/navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/footer";



function Home(){
    return(
        <div>
            <Navbar />
            <div className="sec1-container">
                <div className="sec1-box">
                    <div className="sec1-logo-box">
                        <h1 className="sec1-logo-text">
                            Job hunting is hard,
                            we’re here to help.
                        </h1>

                    </div>

                </div>
            </div>

            <div className="sec2-container">
                <div className="sec2-box">
                    

                </div>

            </div>

            <div className="sec3-container">

            </div>

            <div className="sec4-container">

            </div>

            <Footer />
        </div>
        
    );
}

export default Home;