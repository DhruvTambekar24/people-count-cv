



import  { useState, useEffect } from "react";
import axios from "axios";
import "./PeopleCount.css"; // External CSS file for dynamic styling

const PeopleCount = () => {
  const [peopleCount, setPeopleCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Fetch people count from Flask API
    axios.get("http://localhost:5000/detect")
      .then((response) => {
        setPeopleCount(response.data.people_count);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching people count:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`people-count-container ${darkMode ? 'dark' : ''}`}>
      <header className="header">
        <h1>Student Counter</h1>
        <button className="dark-mode-btn" onClick={toggleDarkMode}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </header>

      {loading ? (
        <div className="loader"></div> // Show loader while data is being fetched
      ) : error ? (
        <p className="error-message">Failed to fetch data. Please try again later.</p>
      ) : (
        <div className="count-display">
          <h2>Number of students detected:</h2>
          <div className="count">
            <span>{peopleCount}</span> {/* Dynamic count display */}
          </div>
          <p className="details">Keep track of students in real-time!</p>
        </div>
      )}
    </div>
  );
};

export default PeopleCount;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './PeopleCount.css'; // Add custom CSS for better styling

// const PeopleCount = () => {
//   const [peopleCount, setPeopleCount] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch the people count from Flask backend
//     axios.get('http://localhost:5000/detect')
//       .then(response => {
//         setPeopleCount(response.data.average_people_count);
//       })
//       .catch(error => {
//         setError("Error fetching people count");
//       });
//   }, []);

//   return (
//     <div className="people-count-container">
//       {error ? (
//         <div className="error-message">{error}</div>
//       ) : (
//         <div className="count-display">
//           <h2>People Count in the Video</h2>
//           {peopleCount !== null ? (
//             <p className="count-number">{peopleCount}</p>
//           ) : (
//             <p className="loading-message">Loading...</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PeopleCount;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const PeopleCount = () => {
//   const [peopleCount, setPeopleCount] = useState(null);
//   const [error, setError] = useState(null);

//   // Fetch the people count from the backend
//   // useEffect(() => {
//   //   const fetchPeopleCount = async () => {
//   //     try {
//   //       const response = await axios.get('http://localhost:5000/detect');  // Ensure correct backend URL
//   //       setPeopleCount(response.data.average_people_count);
//   //     } catch (err) {
//   //       setError('Error fetching people count');
//   //     }
//   //   };

//   //   fetchPeopleCount();
//   // }, []);
//   useEffect(() => {
//     const fetchPeopleCount = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/detect');
//         console.log(response.data);  // Debugging: Check if data is received
//         setPeopleCount(response.data.average_people_count);
//       } catch (err) {
//         console.error('Error fetching people count:', err);
//         setError('Error fetching people count');
//       }
//     };
  
//     fetchPeopleCount();
//   }, []);
  

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>People Count in Video</h1>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {peopleCount !== null ? (
//         <p style={{ fontSize: '24px' }}>Average People Count: {peopleCount}</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default PeopleCount;

