import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigation = useNavigate();
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="image">
          <a href="#navbar">
            <img src={assets.logo} alt="Logo" />
          </a>
        </div>

        <div className="footer-left">
          <ul>
            <u>
              <a href="#navbar">
                {" "}
                <li>🏠 Home</li>
              </a>
            </u>
            <u>
              <a href="#explore-menu">
                {" "}
                <li>📜 Menu</li>{" "}
              </a>
            </u>
            <u>
              <a href="#app-download">
                {" "}
                <li>📱 Mobile App</li>
              </a>
            </u>
            <u>
              <a href="#footer">
                {" "}
                <li>📞 Contact Us</li>
              </a>
            </u>
          </ul>

          <div className="footer-right">
            <ul>
              <u>
                <a href="https://www.facebook.com/login/" target="_blank">
                  {" "}
                  <li>📘 Facebook</li>
                </a>
              </u>
              <u>
                <a href="https://x.com/i/flow/login" target="_blank">
                  {" "}
                  <li>🐦 Twitter</li>
                </a>
              </u>
              <u>
                <a href="https://www.linkedin.com/login/in" target="_blank">
                  {" "}
                  <li>🔗 LinkedIn</li>{" "}
                </a>
              </u>
            </ul>
          </div>
        </div>

        <div className="bus">
          <u>
            <Link to="/celebratie">
              <p>🤝 Business Partners</p>
            </Link>
          </u>
        </div>

        <p>📧 jkhungerhub2514@gmail.com</p>
        <p>📞 9943934520</p>
      </div>

      <div className="social-media">
        <a href="https://www.facebook.com/login/" target="_blank">
          <img src={assets.facebook_icon} alt="Facebook" />
        </a>
        <a href="https://x.com/i/flow/login" target="_blank">
          <img src={assets.twitter_icon} alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/login/in" target="_blank">
          <img src={assets.linkedin_icon} alt="LinkedIn" />
        </a>
      </div>

      <div className="copy-right">
        <p>
          © 2025 — <span className="brand">🍔 JK HUNGER HUB</span>. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
