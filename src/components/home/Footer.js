import React from 'react'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import "./home.css"
import { useNavigate } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ margin: "auto", paddingBottom: "30px", paddingTop: "40px" }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            {/* First div for flex */}
          <div style={{ marginRight: "40px" }}>
            <Typography
              sx={{ mb: 1.5, fontSize: "19px", fontWeight: 800 }}
              variant="body2"
              align="center">
              Company
            </Typography>
            <Typography
              sx={{ mb: 1.5, display: "flex", flexDirection: "column" }}
              variant="body2"
              align="center">
              <a className="footeras" href="/about">
                About
              </a>
              <br />
              <a className="footeras" href="/jobs">
                Jobs
              </a>
              <br />
              <a className="footeras" href="/for-the-record">
                For the Record
              </a>
            </Typography>
          </div>
          {/* Second div for flex */}
          <div style={{ marginRight: "40px" }}>
            <Typography
              sx={{ mb: 1.5, fontSize: "19px", fontWeight: 800 }}
              variant="body2"
              align="center">
              Communities
            </Typography>
            <Typography
              sx={{ mb: 1.5, display: "flex", flexDirection: "column" }}
              variant="body2"
              align="center">
              {/* Need to update */}

              <br />
              <a className="footeras" href="/developers">
                Developers
              </a>
              <br />
              <a className="footeras" href="/advertising">
                Advertising
              </a>
              <br />
              <a className="footeras" href="/investors">
                Investors
              </a>
              <br />
              <a className="footeras" href="/vendors">
                Vendors
              </a>
            </Typography>
          </div>
          {/* Third div for div */}
          <div id="footercontent">
            <Typography
              sx={{ mb: 1.5, fontSize: "19px", fontWeight: 800 }}
              variant="body2"
              align="center">
              Useful Links
            </Typography>
            <Typography
              sx={{ mb: 1.5, display: "flex", flexDirection: "column" }}
              variant="body2"
              align="center">
              <a className="footeras" href="/for-artists">
                For Artists
              </a>
              <br />
              <a className="footeras" href="/free-mobile-app">
                Free Mobile App
              </a>
            </Typography>
          </div>
        </div>
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: "20px", pb: "10px" }}>
          © {new Date().getFullYear()} Spotify Music
        </Typography>
      </Container>
    </footer>
  )
}
