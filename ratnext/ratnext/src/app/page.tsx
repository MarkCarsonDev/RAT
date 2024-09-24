import "./home.css";
import "./global.css";
import Navbar from "../../components/navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/footer";
import TextCarousel from "../../components/lpTextCarousel";



function Home(){
    return(
        <div>
            <Navbar />
            <div className="sec1-container">
                <div className="sec1-box">
                        <TextCarousel />
                    <div className="sec1-logo-box">
                        <Image className="sec1-main-logo"
                            src="/rat_1.png"
                            width={300}
                            height={300}
                            alt="SqueakPeek Logo"
                        />
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