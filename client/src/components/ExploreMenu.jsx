import React, { useState } from 'react';
import './ExploreMenu.css';
import { menu_list, video_list } from '../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  // Sort the menu_list by category name
  const sortedMenuList = [...menu_list].sort((a, b) => a.menu_name.localeCompare(b.menu_name));

  return (
    <div className='explore-menu' id='explore-menu'>
    <div className="explore">
      <h1>Explore Our Online Resources</h1></div>
      <p className='explore-menu-text'>
        Eklavya is dedicated to bringing access to quality higher education and creating local role models at the grassroots level. Our channel serves as an opportunity platform for young people, providing them with essential resources and information to help them achieve their academic and professional goals. We share high-quality content on a variety of topics, including higher education, fellowships, and professional opportunities. Our aim is to empower our viewers with the knowledge and tools they need to succeed.
      </p>
      <p className='explore-menu-text'>
        Whether you are looking for guidance on choosing the right university, applying for scholarships, or finding the perfect internship, Eklavya is here to support you every step of the way. Through our carefully curated content, we strive to be a valuable knowledge resource for our viewers. We believe that education has the power to transform lives and communities, and we are committed to making quality education accessible to all. Join us on this journey to build a brighter future, one opportunity at a time.
      </p>
      <div className="explore-menu-list">
        {sortedMenuList.map((item, index) => (
          <div
            onClick={() => setCategory(prev => (prev === item.menu_name ? 'All' : item.menu_name))}
            key={index}
            className="explore-menu-list-items"
          >
            <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
      <VideoGallery category={category} />
    </div>
  );
};

const VideoGallery = ({ category }) => {
  const filteredVideos = category === 'All' ? video_list : video_list.filter(video => video.category === category);

  return (
    <div className="video-gallery">
      {filteredVideos.map((video, index) => (
        <div key={index} className="video-item">
          <video width="320" height="240" controls poster={video.poster}>
            <source src={video.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ExploreMenu;
