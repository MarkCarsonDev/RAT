"use client"
import Link from "next/link";
import "./footer.css"

export default function Footer (){
    return(
        <div className="footer">

            <div className="footer-container">
                <div className="footer-socials">
                    <ul className="socials">
                        <li className="social-links">
                            Facebook
                        </li>
                        <li className="social-links">
                            Instagram
                        </li>
                        <li className="social-links">
                            X
                        </li>
                        <li className="social-links">
                            LinkedIn
                        </li>
                        
                    </ul>
                </div>

                <div className="footer-info">

                    <ul className="info">
                        <li className="info-links">
                            About us
                        </li>

                        <li className="info-links">
                            Contact us
                        </li>

                        <li className="info-links">
                            Help
                        </li>
                    </ul>

                </div>

            </div>
        </div>

    );
}