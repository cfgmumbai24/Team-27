import React, { useState, useEffect } from "react";
import "./MentorDashboard.css";
import { format } from "date-fns";

function Data() {
  const [data, setData] = useState("");

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("https://your-backend-api/notice");
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       console.error("Error fetching notices:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <div className="data-container">
      <img
        src="../assets/girl_img.jpg"
        alt="client/src/assets/girl_img.jpg"
        className="student-image"
      />
      <h2 className="data-title">Name: Shravani Dhobale</h2>
      <p className="data-info">Email: sharavnidhoable@gmail.com</p>
      <p className="data-info">Mobile: 9284320165</p>
    </div>
  );
}

function Homework() {
  const assignments = [
    {
      title: "Introduction to Computer Science",
      description: "Complete Chapter 3 exercises by May 12th.",
    },
    {
      title: "Data Structures and Algorithms",
      description: "Complete Chapter 5 exercises by May 15th.",
    },
    {
      title: "Software Engineering Principles",
      description: "Write a summary of Chapter 2 by May 20th.",
    },
  ];

  return (
    <div className="homework-container">
      <h2 className="homework-title">Homework Assignments</h2>
      <ul className="homework-list">
        {assignments.map((assignment, index) => (
          <li key={index} className="homework-item">
            <p className="homework-assignment-title">{assignment.title}</p>
            <p className="homework-assignment-description">
              {assignment.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Notice() {
  const notices = [
    {
      title: "Kotak Junior Scholarship Program 2024-25",
      description:
        "Kotak Junior Scholarship Program 2024-25 is an initiative of Kotak Education Foundation (KEF),  the CSR implementing agency of Kotak Mahindra Group. .",
      url: "https://www.buddy4study.com/page/kotak-junior-scholarship",
    },
    {
      title: "Aadhar Kaushal Scholarship Program for Youth with Disabilities",
      description:
        "Aadhar Kaushal Scholarship Program for Youth with Disabilities is a CSR initiative of Aadhar Housing Finance Limited (AHFL) to provide educational support to students with physical disabilities currently enrolled in general or professional undergraduate courses across India.",
      url: "https://www.buddy4study.com/page/aadhar-kaushal-scholarship-program-for-youth-with-disabilities",
    },
    {
      title: "Legrand Empowering Scholarship Program 2024-25",
      description:
        "The Legrand Empowering Scholarship Program 2024-25, a Social Initiative of Group Legrand India, aims to provide financial support to meritorious girls, differently-abled girls, Covid-affected students, LGBTQ+ students and students with single parents or orphans for their higher education. .",
      url: "https://www.buddy4study.com/page/legrand-empowering-scholarship-program",
    },
  ];

  return (
    <div className="notice-container">
      <div className="notice-header">
        <h2 className="notice-title">Notice Board</h2>
        <button className="notice-button">Add Notice</button>
      </div>
      <ul className="notice-list">
        {notices.map((notice, index) => (
          <li key={index} className="notice-item">
            <p className="notice-item-title">{notice.title}</p>
            <p className="notice-item-description">{notice.description}</p>
            <a href={notice.url} className="notice-link">
              Learn More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ZoomCall() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/lectures");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    }

    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: title,
      description,
      schedule: date,
      link,
      mentorId: "666e0e201028c202d80248b9",
    };
    console.log(JSON.stringify(formData));
    fetch("http://localhost:8080/lectures", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json()) // Return the parsed JSON data
      .then((data) => {
        setData((prevData) => [...prevData, data]);
        setTitle("");
        setDescription("");
        setDate("");
        setTime("");
        setLink("");
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="zoom-container">
      <div className="zoom-header">
        <h2 className="zoom-title">Add Zoom Call</h2>
        <button onClick={() => setIsModalOpen(true)} className="zoom-button">
          Add Calls
        </button>
      </div>
      <ul className="zoom-list">
        {data.map((assignment, index) => (
          <li key={index} className="zoom-item">
            <div className="zoom-item-content">
              <h3 className="zoom-item-title">{assignment.name}</h3>
              <div className="zoom-item-buttons">
                <p className="zoom-item-description">
                  {assignment.description}
                </p>
                <p className="zoom-item-date">
                  {format(new Date(assignment.schedule), "PPPppp")}
                </p>
                {/* <p className="zoom-item-time">{assignment.time}</p> */}
                <a
                  href={assignment.link}
                  className="zoom-item-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="modal-title">Add New Assignment</h2>
            <form onSubmit={handleSubmit}>
              <div className="modal-field">
                <label htmlFor="title" className="modal-label">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  className="modal-input"
                />
              </div>
              <div className="modal-field">
                <label htmlFor="description" className="modal-label">
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  className="modal-input"
                ></textarea>
              </div>
              <div className="modal-field">
                <label htmlFor="date" className="modal-label">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className="modal-input"
                />
              </div>
              <div className="modal-field">
                <label htmlFor="time" className="modal-label">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  className="modal-input"
                />
              </div>
              <div className="modal-field">
                <label htmlFor="link" className="modal-label">
                  Link
                </label>
                <input
                  type="text"
                  id="link"
                  value={link}
                  onChange={(event) => setLink(event.target.value)}
                  className="modal-input"
                />
              </div>
              <div className="modal-actions">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="modal-button cancel"
                >
                  Cancel
                </button>
                <button type="submit" className="modal-button submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function MentorDashboard() {
  return (
    <div className="app-container">
      <h1 className="app-title">Mentor Dashboard</h1>
      <div className="app-content">
        <div className="left-column">
          <div className="data-container">
            <Data />
          </div>
          <div className="homework-container">
            <Homework />
          </div>
        </div>
        <div className="right-column">
          <div className="notice-container">
            <Notice />
          </div>
          <div className="zoom-container">
            <ZoomCall />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorDashboard;
