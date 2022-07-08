import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import demo from "../assets/BlogReceipt-1.gif";
import "./Home.css";
import { Link } from "react-router-dom";
import invoice from "../assets/62615d87a55dcef20fd2bebe_Group 9702.svg";
import receipt from "../assets/62616898d4573b2f074e6bc6_Mask group-2.svg";
import table from "../assets/626161212a08cb8d8e8d4f18_Group 9605.svg";
import automation from "../assets/626161644e046d7a031ce3bc_Group 9681.svg";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="home-introduce">
          <div className="home-introduce-left">
            <h4
              style={{
                fontSize: "46px",
                color: "rgb(35, 50, 95)",
                width: "90%",
                marginBottom: "0",
              }}
            >
              Automate data entry with
              <span style={{ color: "rgb(51, 93, 255)" }}> Invoice OCR</span>
            </h4>
            <p
              style={{
                width: "90%",
                fontSize: "20px",
                color: "#354454",
                fontWeight: "400",
              }}
            >
              Real-time data capture from unstructured invoices, bills &
              receipts down to SKU level line-items, into standardized JSON. No
              template - setup required.
            </p>
            <div className="home-introduce-btn">
              <button
                type="button"
                className="btn"
                style={{ backgroundColor: "rgb(84, 111, 255)", border: "none" }}
              >
                <Link
                  to="/upload"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  SCHEDULED FOR DEMO
                </Link>
              </button>
              <button
                type="button"
                className="btn"
                style={{ border: "1px solid rgba(84, 111, 255, 0.7)" }}
              >
                <Link
                  to="/upload"
                  style={{
                    textDecoration: "none",
                    color: "rgba(84, 111, 255, 0.7)",
                  }}
                >
                  TRY FOR FREE
                </Link>
              </button>
            </div>
          </div>
          <div className="home-introduce-right">
            <div className="img-container">
              <img src={demo} alt=""></img>
            </div>
          </div>
        </div>
      </div>
      <div className="home-solution">
        <h2>Explore KIE solutions</h2>
         <div className="home-solution-container">
         <div className="card">
          <div>
            <h3>Invoice Processing on Autopilot</h3>
            <p>
              Capture relevant data stored in tabular structures on any PDFs,
              scans & images.
            </p>
          </div>
          <img src={invoice} alt=""></img>
        </div>

        <div className="card">
          <div>
            <h3>Receipt OCR for Data Extraction</h3>
            <p>
              Auto-extract meaningful fields from receipts with Nanonets'
              pre-trained Receipt OCR.
            </p>
          </div>
          <img src={receipt} alt=""></img>
        </div>

        <div className="card">
          <div>
            <h3>Automated Table Extraction</h3>
            <p>
              Capture relevant data stored in tabular structures on any PDFs,
              scans & images.
            </p>
          </div>
          <img src={table} alt=""></img>
        </div>

        <div className="card">
          <div>
            <h3>Automation Inspiration</h3>
            <p>
              Power your business across the globe—whether you manage finances,
              provide online delivery services or use software robots to perform
              repetitive tasks.
            </p>
          </div>
          <img src={automation} alt=""></img>
        </div>
         </div>
      </div>
      <Footer />
    </div>
  );
}
