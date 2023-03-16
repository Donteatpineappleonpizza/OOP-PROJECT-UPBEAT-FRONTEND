import React, { useState, useEffect } from "react";
import Icebox from '../../region@2x.png'
import './regaion.css'
import { motion } from "framer-motion";

function Grid({ matrix, W, H, onGridClick }) {
    const imageName = { Icebox };
  
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
              key={rowIndex}
            >
              <div>
                {row.map((cell, cellIndex) => (
                  <div key={cellIndex}>
                    <img
                      key={cellIndex}
                      src={Icebox}
                      alt=""
                      width={W}
                      height={H}
                      onError={() => console.log(`Error loading ${imageName}`)}
                      style={{ flex: 1 }}
                      onClick={() => handleClick(rowIndex, cellIndex)}
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            </span99>
          ))}
        </>
      );
    }

    export default function GridContainer() {
        const rows = 11;
        const columns = 9;
        const H = 82;
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
  
  const [zoomLevel, setZoomLevel] = useState(1);

  const wrapperWidth = `${W * columns * zoomLevel}px`;
  const wrapperHeight = `${H * rows * zoomLevel}px`;

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

  const [clickedCell, setClickedCell] = useState(null);
  const handleGridClick = (row, column) => {
    setClickedCell({ row, column });
  };
  return (
    <>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="grid-container"
    >
        <div
          style={{scale: zoomLevel}}
        >
    <motion.div className="container4"  >
    <Grid matrix={matrix} W={W} H={H} onGridClick={handleGridClick} />
    </motion.div>
    </div>
    </div >
    {clickedCell && (
        <p className="text">
          R {clickedCell.row + 1} , C {clickedCell.column + 1} 
          </p>
      )}
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
