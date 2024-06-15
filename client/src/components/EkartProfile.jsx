import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EkartProfile = ({ match }) => {
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    const fetchMentor = async () => {
      const response = await axios.get(`/api/mentors/${match.params.id}`);
      setMentor(response.data);
    };
    fetchMentor();
  }, [match.params.id]);

  return (
    <div>
      <h1>Ekart Profile</h1>
      <h2>{mentor ? mentor.name : 'Loading...'}</h2>
      <p>
        {mentor ? mentor.bio : 'Loading...'}
      </p>
      <Link to="/ekart">Back to Ekart</Link>
    </div>
  );
};

export default EkartProfile;