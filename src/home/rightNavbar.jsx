import React from "react";
import "./rightNavbar.css";
import home from "../images/house.png";
import close from "../images/close.png";
import about from "../images/about.png";
import gallery from "../images/gallery.png";
function rightNavbar({ page, setPage }) {
  const handleIncrement = (pages) => {
    setPage(pages);
  };
  return (
    <div className="right-navbar">
      <table>
        <tr onClick={() => handleIncrement("home")}>
          <td>
            <div class="horizontal-align">
              <img src={home} alt="Icon" />
              <span>Home</span>
            </div>
          </td>
        </tr>
        <tr onClick={() => handleIncrement("gallery")}>
          <td>
            <div class="horizontal-align">
              <img src={gallery} alt="Icon" />
              <span>Car Models</span>
            </div>
          </td>
        </tr>
        <tr onClick={() => handleIncrement("about")}>
          <td>
            <div class="horizontal-align">
              <img src={about} alt="Icon" />
              <span>About</span>
            </div>
          </td>
        </tr>
        <tr>
          <td
            onClick={() => {
              const rightNavbar = document.querySelector(".right-navbar");
              rightNavbar.style.right = "-320px";
              rightNavbar.style.transition = "right 0.6s ease-in-out"; // adjust the transition duration and timing function to your preference
            }}
          >
            <div class="horizontal-align">
              <img src={close} alt="Icon" />
              <span>Close</span>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default rightNavbar;
