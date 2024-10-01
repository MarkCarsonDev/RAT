"use client";
import Image from "next/image";
import Link from "next/link";
import { Button, Typography } from "@mui/material";

export function LandingNavbar() {
  return (
    /* Main Navigation bar*/
    <nav
      className="navbar"
      style={{
        background: "rgb(255, 255, 255)",
        height: "80px",
        width: "100%",
        display: "grid",
        zIndex: 999,
        position: "sticky",
        top: "0px",
        borderBottom: "5px solid #E0E4F2",
      }}
    >
      {/* NavBar Container For Elements */}
      <div
        className="navbar-container"
        style={{
          height: "80px",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {/* Title and Logo  Element*/}
        <Link
          href="/"
          className="name-logo"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            height: "80px",
            width: "400px",
          }}
        >
          <Image
            className="logo-image"
            src="/LandingPage-images/rat_1.png"
            height={100}
            width={100}
            alt="Squeakpeek Logo"
            style={{
              position: "relative",
              bottom: "10%",
              right: "2%",
            }}
          />

          <Typography variant="h4">SqueakPeek</Typography>
        </Link>
        {/* Title and Logo  Element End */}

        {/* Navigation Menu Element */}
        <div
          className="nav-menu"
          style={{
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: "0%",
            height: "80px",
            width: "500px",
          }}
        >
          {/* Navigation Links */}
          <ul
            className="nav-links"
            style={{
              display: "flex",
              gridTemplateColumns: "repeat(2, auto)",
              gridGap: "30px",
              listStyle: "none",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
            }}
          >
            <li>
              <Link
                href="/aboutus"
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography>About Us</Typography>
              </Link>
            </li>

            <li>
              <Link
                href="/log In"
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography>Log In</Typography>
              </Link>
            </li>

            <li>
              <Button
                className="nav-item"
                variant="contained"
                href="/signup"
                sx={{
                  backgroundColor: "#496FFF",
                  borderRadius: "8px",
                  padding: "10px 60px",
                  fontSize: "18px",

                  "&:hover": {
                    backgroundColor: "#3C435C",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Typography sx={{ color: "#FFFFFF" }}>Get Started</Typography>
              </Button>
            </li>
          </ul> {/* Navigation Links End*/}
        </div>{/* Navigation Menu Element End*/}
      </div> {/* NavBar Container For Elements End*/}
    </nav> /* Main Navigation bar*/
  );
}
