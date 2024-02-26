import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <table>
          <tr>
            <td>
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">
                  Tesla is accelerating the world's transition to sustainable
                  energy. Our mission is to create the most compelling car
                  company of the 21st century by driving the world's transition
                  to electric vehicles. Founded in 2003, Tesla pioneered
                  electric vehicles and has since set new standards for
                  performance, safety, and sustainability. With a relentless
                  focus on innovation, we
                  are revolutionizing transportation to create a cleaner,
                  greener future . Join us in our journey
                  toward a more sustainable world.
                </p>
              </div>
            </td>
            <td>
              <div className="col-xs-6 col-md-3">
                <h6>Performance Excellence:</h6>
                <p>
                  At Tesla, performance is more than just a statistic—it's an
                  experience. Our vehicles redefine what it means to drive, with
                  instant torque, lightning-fast acceleration, and unparalleled
                  handling. From the exhilarating Model S Plaid to the versatile
                  Model Y, every Tesla is engineered to deliver an unmatched
                  driving experience. Whether you're navigating city streets or
                  embarking on a cross-country journey, Tesla vehicles offer
                  uncompromising performance that elevates every moment behind
                  the wheel.
                </p>
              </div>
            </td>
            <td>
              <div className="col-xs-6 col-md-3">
                <h6>Sustainable Innovation:</h6>
                <p>
                  At the forefront of our mission is a commitment to
                  sustainability. Tesla vehicles are powered by clean, renewable
                  energy, reducing carbon emissions and minimizing our impact on
                  the environment. From our advanced battery technology to our
                  solar energy solutions, we're revolutionizing transportation
                  with a focus on sustainability at every step. Join us in
                  driving toward a greener future, where every mile traveled in
                  a Tesla is a step closer to a more sustainable world.
                </p>
              </div>
            </td>
          </tr>
        </table>
        <div className="row"></div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by 
              <a href="https://www.tesla.com/models/"> Tesla</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
