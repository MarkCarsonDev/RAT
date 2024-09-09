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
            <div className="body">
                <div className="body-image">
                    <Image 
                        src="/landingcartoon.png"
                        height={800}
                        width={800}
                        alt="Landing page cartoon"
                    />
                </div>

                <div className="text">
                    <h1 className="rat-race">Getting Into The Rat Race?</h1>
                        <p className="text-body">
                        Whether you’re a seasoned pro or just starting out, let’s connect you with your dream job!
                        </p>
                    <Link href='/' className="get-started-today">
                        <h1>Get Started Today!</h1>                    
                    </Link>

                </div>
            </div>
            <Footer />
        </div>
        
    );
}

export default Home;