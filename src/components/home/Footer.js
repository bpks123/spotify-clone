import React from 'react'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import "./home.css"
import { useNavigate,Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ margin: "auto", paddingBottom: "30px", paddingTop: "40px" }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            {/* First div for flex for understanding */}
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
              <Link className="footeras" to={'/comingsoon'}>
                About
              </Link>
              <br />
              <Link className="footeras" to={'/comingsoon'}>
                Jobs
              </Link>
              <br />
              <Link className="footeras" to={'/comingsoon'}>
                For the Record
              </Link>
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

              <Link className="footeras" to={'/comingsoon'}>
                Devlopers
              </Link>
              <br />
              <Link className="footeras" to={'/comingsoon'}>
                Advertising
              </Link>
              <br />
              <Link className="footeras" to={'/comingsoon'}>
                Investors
              </Link>
              <br />
              <Link className="footeras" to={'/comingsoon'}>
                Vendors
              </Link>
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
              <Link className="footeras" to={'/comingsoon'}>
                For Artists
              </Link>
              <br />
              <Link className="footeras" to={'/comingsoon'}>
                Free Mobile Apps
              </Link>
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
