import React, { useState, useEffect } from "react";
import "./gallery.css";
import axios from "axios";

function Gallery() {
  const [teslaCars, setTeslaCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState({
    name: "Tesla Model 3",
    price: "$47,490",
    Range: "341miles (EPA est.)",
    Seating: "5 seats",
    "Cargo Capacity": "24 cu ft",
    Drive: "AWD Dual Motor",
    defimage:
      "https://www.topgear.com/sites/default/files/2023/11/TopGear%20-%20Tesla%20Model%203%20-%20Facelift%20-1.jpg",
    image: {
      "Deep Blue Metallic":
        "https://imgd.aeplcdn.com/370x208/n/lnk9cva_1595893.jpg?q=80",
      "Midnight Silver Metallic":
        "https://imgd.aeplcdn.com/370x208/n/qf79cva_1595895.jpg?q=80",
      "Pearl White Multi-Coat":
        "https://imgd.aeplcdn.com/370x208/n/kqn9cva_1595897.jpg?q=80",
      "Red Multi-Coat":
        "https://imgd.aeplcdn.com/370x208/n/b469cva_1595899.jpg?q=80",
      "Solid Black":
        "https://imgd.aeplcdn.com/370x208/n/gkq9cva_1595901.jpg?q=80",
    },
    colors: [
      "Deep Blue Metallic",
      "Midnight Silver Metallic",
      "Pearl White Multi-Coat",
      "Red Multi-Coat",
      "Solid Black",
    ],
  });
  const [selectedColor, setSelectedColor] = useState();
  const [selectedCarIndex, setSelectedCarIndex] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("vishnu");
    console.log("hi");
    const fetchTeslaCars = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/teslacars");
        console.log(response.data);
        setTeslaCars(response.data.body);
        setSelectedCar(response.data.body[0]);
        setSelectedCarIndex(0);
        setSelectedColor(response.data.body[0].colors[0]);
      } catch (error) {
        console.error("Error fetching Tesla car data:", error);
      }
    };
    fetchTeslaCars();
  }, []);

  const handleCarSelect = (car, index) => {
    setSelectedCar(car);
    setSelectedColor(car.colors[0]); // Set default color when car changes
    setSelectedCarIndex(index);
  };

  // Function to handle color selection
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="gallery">
      <div className="background-video-container">
        <video autoPlay muted loop className="background-video">
          <source
            src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Doors-and-Seats_X_LEGACY_RAVEN_MYT_VIDEO.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div id="upperBox">
        {/* Display selected car's image and features */}
        {selectedCar && (
          <div className="selectedCar">
            <img
              id="cars"
              src={selectedCar.image[selectedColor]}
              alt={selectedCar.name}
            />
            <div className="colorSelector">
              <label htmlFor="color-select">Select Color:</label>
              <select
                id="color-select"
                value={selectedColor}
                onChange={(e) => handleColorSelect(e.target.value)}
              >
                {selectedCar.colors.map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
        {/* Description section */}
        <div className="description">
          <div className="descriptionContent">
            <h2>{selectedCar.name}</h2>
            <div className="detailsList">
              <p>
                <strong>Price:</strong> {selectedCar.price}
              </p>
              <p>
                <strong>Range:</strong> {selectedCar.Range}
              </p>
              <p>
                <strong>Seating:</strong> {selectedCar.Seating}
              </p>
              <p>
                <strong>Cargo Capacity:</strong> {selectedCar["Cargo Capacity"]}
              </p>
              <p>
                <strong>Drive:</strong> {selectedCar.Drive}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="lowerBox">
        <input
          className="search"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="carList">
          {teslaCars
            .filter((car) =>
              car.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((car, index) => (
              <div
                className="carCard"
                key={index}
                style={{ minWidth: "20%", border: selectedCarIndex === index && "2px solid yellow" }}
                onClick={() => handleCarSelect(car, index)}
              >
                <img src={car.defimage} alt={car.name} />
                <div className="carInfo">
                  <h3>{car.name}</h3>
                  <p>Price: {car.price}</p>{" "}
                  {/* Replace $XXXXX with the actual price */}
                </div>
              </div>
            ))}
          {teslaCars.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
          ).length === 0 && <p className="noResults">No results found</p>}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
