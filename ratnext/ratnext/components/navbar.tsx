import Image from "next/image"
import "./navbar.css"
export default function Navbar(){
    <nav className="navbar">
        <div className="navbar-container">
            <div className="name-logo">
                RAT<Image
                    src="/images/ratlogo"
                    width={500}
                    height={500}
                    alt="RAT logo"
                    />
            </div>
            <div className="nav-menu">

            </div>
        </div>
    </nav>
}