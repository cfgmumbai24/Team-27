import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Ekart = () => {
  const [mentors, setMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState(null);

  useEffect(() => {
    const fetchMentors = async () => {
      const response = await axios.get('/api/mentors');
      setMentors(response.data);
    };
    fetchMentors();
  }, []);

  const handleSelectMentor = (mentor) => {
    setSelectedMentor(mentor);
  };

  return (
    <div>
      <h1>Ekart</h1>
      <h2>Mentors:</h2>
      <ul>
        {mentors.map((mentor) => (
          <li key={mentor._id}>
            <button onClick={() => handleSelectMentor(mentor)}>
              {mentor.name}
            </button>
          </li>
        ))}
      </ul>
      {selectedMentor && (
        <div>
          <h2>Selected Mentor:</h2>
          <p>{selectedMentor.name}</p>
          <Link to={`/ekart/${selectedMentor._id}`}>View Profile</Link>
        </div>
      )}
    </div>
  );
};

export default Ekart;