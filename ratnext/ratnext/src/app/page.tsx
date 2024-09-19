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
                    
                </div>
            </div>
            <Footer />
        </div>
        
    );
}

export default Home;