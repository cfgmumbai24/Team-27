import React, { useState } from 'react';
import styled from 'styled-components';
import hindiPoster from '../assets/hindi.png';
import marathiPoster from '../assets/marathi.png';
import video from '../assets/Hinditranslation.mp4';
import './Videoplayer.css';
import background from '../assets/background.jpg'


const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9; /* Background color */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 1.5em; /* Smaller font size */
  margin-bottom: 10px;
  background:url{awareness}
 
`;

const Comment = styled.p`
  font-size: 1em; /* Font size for the comment */
  margin-bottom: 20px;
  color: white; /* Color for the comment text */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); /* Black text shadow */
  font-weight: 600; /* Increase font weight */
`;

const Dropdown = styled.select`
  padding: 10px;
  font-size: 1em;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const VideoContainer = styled.div`
  margin-top: 20px;
  background-color: #e8f8f5; /* Background color for video container */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const VideoPlayer = styled.video`
  width: 60%; /* Ensure video player spans entire width */
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const Videoplayer = () => {
  const [selectedVideo, setSelectedVideo] = useState('Hindi');

  const handleVideoChange = (event) => {
    setSelectedVideo(event.target.value);
  };

  return (
    <Container>
        <div className='new'>
          <Heading>Select a Language</Heading>
          <Comment>Please choose a language to watch the tutorial in.</Comment>
          <Dropdown onChange={handleVideoChange} value={selectedVideo}>
            <option value="Hindi">Hindi</option>
            <option value="Marathi">Marathi</option>
          </Dropdown>
        </div>
        
      

      <VideoContainer>
        {selectedVideo === 'Hindi' && (
          <VideoPlayer controls poster={hindiPoster}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </VideoPlayer>
        )}
        {selectedVideo === 'Marathi' && (
          <VideoPlayer controls poster={marathiPoster}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </VideoPlayer>
        )}
      </VideoContainer>
    </Container>
  );
};

export default Videoplayer;
