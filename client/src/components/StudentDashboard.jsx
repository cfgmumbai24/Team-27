// StudentDashboard.js

import React, { useState, useEffect } from "react";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const [data, setData] = useState({ name: "", email: "" });
  const [zoomClasses, setZoomClasses] = useState([
    {
      title: "English Class",
      date: "21/02/12",
      time: "12:30",
      link: "https://zoom.us/",
      _id: "ihdsihdi",
    },
    {
      title: "Math Class",
      date: "21/02/12",
      time: "12:30",
      link: "https://zoom.us/",
      _id: "ihdsihdi",
    },
    {
      title: "Science Class",
      date: "21/02/12",
      time: "12:30",
      link: "https://zoom.us/",
      _id: "ihdsihdi",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      const id = "666ded36835ada36fc60d287";
      try {
        const response = await fetch(`http://localhost:8080/users/${id}`);
        const data = await response.json();
        setData(data);
        const resp = await fetch('http://localhost:8080/lectures');
        const classes = await resp.json();
        setZoomClasses(classes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleOnClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Student Dashboard</h1>
      <div className="app-content">
        <div className="left-column">
          <div className="data-container">
            <img
              src="aac94e41310947cbcd5f38a41ccc0132.jpg"
              alt="client\src\assets\boy.jpg"
              className="student-image"
            />
            <h2 className="data-title">Name: {data.name}</h2>
            <p className="data-info">Email: {data.email}</p>
            <p className="data-info">Mobile: 9284320165</p>
          </div>
          <div className="homework-container">
            <h2 className="homework-title">Allotted Homeworks</h2>
            <ul className="homework-list">
              <li className="homework-item">
                <p className="homework-assignment-title">
                  Introduction to Computer Science
                </p>
                <p className="homework-assignment-description">
                  Complete Chapter 3 exercises by May 12th.
                </p>
              </li>
              <li className="homework-item">
                <p className="homework-assignment-title">
                  Data Structures and Algorithms
                </p>
                <p className="homework-assignment-description">
                  Complete Chapter 5 exercises by May 15th.
                </p>
              </li>
              <li className="homework-item">
                <p className="homework-assignment-title">
                  Software Engineering Principles
                </p>
                <p className="homework-assignment-description">
                  Write a summary of Chapter 2 by May 20th.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-column">
          <div className="notice-container">
            <h2 className="notice-title">Notice Board</h2>
            <ul className="notice-list">
              <li className="notice-item">
                <p className="notice-item-title">
                  Kotak Junior Scholarship Program 2024-25
                </p>
                <p className="notice-item-description">
                  Kotak Junior Scholarship Program 2024-25 is an initiative of
                  Kotak Education Foundation (KEF), the CSR implementing agency
                  of Kotak Mahindra Group. .
                </p>
                <a
                  href="https://www.buddy4study.com/page/kotak-junior-scholarship"
                  className="notice-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </li>
              <li className="notice-item">
                <p className="notice-item-title">
                  Aadhar Kaushal Scholarship Program for Youth with Disabilities
                </p>
                <p className="notice-item-description">
                  Aadhar Kaushal Scholarship Program for Youth with Disabilities
                  is a CSR initiative of Aadhar Housing Finance Limited (AHFL)
                  to provide educational support to students with physical
                  disabilities currently enrolled in general or professional
                  undergraduate courses across India.
                </p>
                <a
                  href="https://www.buddy4study.com/page/aadhar-kaushal-scholarship-program-for-youth-with-disabilities"
                  className="notice-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </li>
              <li className="notice-item">
                <p className="notice-item-title">
                  Legrand Empowering Scholarship Program 2024-25
                </p>
                <p className="notice-item-description">
                  The Legrand Empowering Scholarship Program 2024-25, a Social
                  Initiative of Group Legrand India, aims to provide financial
                  support to meritorious girls, differently-abled girls,
                  Covid-affected students, LGBTQ+ students and students with
                  single parents or orphans for their higher education. .
                </p>
                <a
                  href="https://www.buddy4study.com/page/legrand-empowering-scholarship-program"
                  className="notice-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </li>
            </ul>
          </div>
          <div className="zoom-container">
            <h2 className="zoom-title">Upcoming Classes</h2>
            <ul className="zoom-list">
              {zoomClasses.map((zoomClass, index) => (
                <li key={index} className="zoom-item">
                  <div className="zoom-item-content">
                    <h3 className="zoom-item-title">{zoomClass.title}</h3>
                    <p className="zoom-item-date">Date: {zoomClass.date}</p>
                  </div>
                  <div className="zoom-item-buttons">
                    <button
                      className="zoom-button attendance-button"
                      onClick={() => handleOnClick(zoomClass.link)}
                    >
                      Mark Attendance
                    </button>
                    <button
                      onClick={() => handleOnClick(zoomClass.link)}
                      className="zoom-button join-button"
                    >
                      Join
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
