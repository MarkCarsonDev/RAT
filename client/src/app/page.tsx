"use client";
//import { LandingNavbar } from "@/ui/LandingNavbar";
import "@/ui/styling/LandingPage.css";
import Image from "next/image";
//import { TextCarousel } from "@/ui/TextCarousel";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

export default function Home() {

  const ImageData = [
    {
      // Section 1 Logo Image
      imageSrc: "/LandingPage-images/rat_1.png",
      imageAlt: "SqueakPeek Logo",
      imageWidth: 300,
      imageHeight: 300,
    },
    {
      // Section 2 Threads Feature
      imageSrc: "/LandingPage-images/rat_2.png",
      imageAlt: "Two rats speaking",
      imageWidth: 600,
      imageHeight: 300,
    },
    {
      // Section 3 Tracking Feature
      imageSrc: "/LandingPage-images/rat_1.png",
      imageAlt: "Rat looking up",
      imageWidth: 400,
      imageHeight: 400,
    },
    {
      // Section 4 Explore Feature
      imageSrc: "/LandingPage-images/rat_3.png",
      imageAlt: "Rat looking at star",
      imageWidth: 400,
      imageHeight: 400,
    },
  ];
  
  return (
    <div>
      {/* <LandingNavbar /> Cant be refferenced yet*/}

      {/*Section 1 Block*/}
      <div className="sec1-container">
        <div className="sec1-box">
          <div className="sec1-text-wheel">
            {/* <TextCarousel /> */}
          </div>
          <div className="sec1-logo-box">
            <Image
              className="sec1-main-logo"
              src={ImageData[0].imageSrc}
              width={ImageData[0].imageWidth}
              height={ImageData[0].imageHeight}
              alt={ImageData[0].imageAlt}
            />
            <Typography variant="h2">SqueakPeek</Typography>
            <Typography className="sec1-logo-text" variant="h4">
              Job hunting is hard, we’re here to help.
            </Typography>
          </div>
          <div className="sec1-Link">
            <Link href="/signup">
              <Typography variant="h5" sx={{ color: "#496FFF" }}>
                Get Started
              </Typography>
            </Link>
          </div>
        </div>
      </div>
      {/*Section 2 Block*/}
      <div className="sec2-container">
        <Image
          className="sec2-image"
          src={ImageData[1].imageSrc}
          width={ImageData[1].imageWidth}
          height={ImageData[1].imageHeight}
          alt={ImageData[1].imageAlt}
        />

        <div className="sec2-text-box">
          <Typography variant="h3">Talk to other applicants</Typography>

          <Typography variant="body1">
            Engage with company thread to ask questions and support fellow
            applicants
          </Typography>
        </div>
      </div>
    </div>
  );
}
