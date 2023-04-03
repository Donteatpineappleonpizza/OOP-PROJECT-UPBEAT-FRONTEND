import React, { useState, useEffect } from "react";
import Icebox from "../../region@2x.png";
import "./regaion.css";
import CC from "./CityCenter.png" ;
import Crew from "./citycrew.png" ;

// Define the row and column indices for the CityCrew image
const cityCrewRow = 5;
const cityCrewCol = 4;

function Grid({ matrix, W, H, onGridClick }) {
  const imageName = { Icebox };
  const CityCenter = { CC };
  const CityCrew = { Crew };

  const handleClick = (rowIndex, cellIndex) => {
    if (onGridClick) {
      onGridClick(rowIndex, cellIndex);
    }
  };

  return (
    <>
      {matrix.map((row, rowIndex) => (
        <span99
          className={rowIndex % 2 === 0 ? "odd" : "even"}
          style={{ width: W - W / 4 + 3 }}
        >
          <div key={rowIndex}>
            {row.map((cell, cellIndex) => {
              if (rowIndex === cityCrewRow && cellIndex === cityCrewCol) {
                return (
                  <div
                    key={cellIndex}
                    style={{
                      position: "relative",
                      height: "85px",
                      width: W,
                    }}
                  >
                    <img
                      src={Icebox}
                      alt=""
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                      }}
                    />

                    <img
                      src={Crew}
                      alt=""
                      style={{
                        position: "absolute",
                        top: 21,
                        left: 22.5,
                        width: "50%",
                        height: "50%",
                      }}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={cellIndex} style={{ height: "85px" }}>
                    <img
                      src={cell === "city center.png" ? CC : Icebox}
                      alt=""
                      width={W}
                      height={H}
                      onError={() => console.log('Error loading ${imageName}')}
                      style={{ flex: 1 }}
                      onClick={() => handleClick(rowIndex, cellIndex)}
                      draggable="false"
                    />
                  </div>
                );
              }
            })}
          </div>
        </span99>
      ))}
    </>
  );
}

export default function GridContainer() {
  const rows = 11;
  const columns = 9;
  const H = 80;
  const W = (246 / 212) * H;

  const matrix = new Array(rows);
  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(columns).fill(null);
  }

  // Define an array of image names
  const imageNames = Array.from({ length: rows * columns }, (_, i) => {
    const imageNumber = (i % 17) + 1;
    return "region.png";
  });

  // Shuffle the array to get a random order
  const shuffledImageNames = shuffleArray(imageNames);

  // Set the image values using the shuffled array
  let imageIndex = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const imageName = shuffledImageNames[imageIndex];
      matrix[i][j] = imageName;
      imageIndex++;
    }
  }
  matrix[4][4] = "city center.png";
  

  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });
  const [containerPosition, setContainerPosition] = useState({ x: 0, y: 0 });

  const transformStyle = `scale(${zoomLevel})`;

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      if (zoomLevel < 2) {
        setZoomLevel(zoomLevel + 0.1);
      }
    } else {
      if (zoomLevel > 0.5) {
        setZoomLevel(zoomLevel - 0.1);
      }
    }
  };

  useEffect(() => {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.addEventListener("wheel", handleWheel);

    return () => {
      gridContainer.removeEventListener("wheel", handleWheel);
    };
  }, [zoomLevel]);

  const [money, setMoney] = useState(0);
  function genNumber(row, column) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return (row + column + 12) * 59;
  }

  const [clickedCell, setClickedCell] = useState(null);
  const handleGridClick = (row, column) => {
    setClickedCell({ row, column });
    setMoney(genNumber(row, column));
  };

  return (
    <>
      <div className="buttonszoom">
        <button onClick={() => setZoomLevel(zoomLevel + 0.1)}>Zoom In</button>
        <button onClick={() => setZoomLevel(zoomLevel - 0.1)}>Zoom Out</button>
        <button
          onClick={() => {
            setZoomLevel(1);
            setContainerPosition({ x: 0, y: 0 });
          }}
        >
          Reset
        </button>
      </div>

      <div style={{ overflow: "hidden" }} className="container4" draggable={true} >
        <div style={{ transform: transformStyle }} className="grid-container-wrapper">
          <div  className="grid-container">
            <Grid matrix={matrix} W={W} H={H} onGridClick={handleGridClick} />
          </div>
        </div>
      </div>

      {clickedCell && (
        <p className="text">
          R {clickedCell.row } , C {clickedCell.column }
        </p>
      )}
      <div>{clickedCell && <p className="text2"> {money}</p>}</div>
    </>
  );
}

// Function to shuffle an array in place
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
