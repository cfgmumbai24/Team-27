import React from 'react'
import './MentorList.css'
import { Link } from 'react-router-dom'

function MentorList() {
  return (
    <>
        <h1>Select Mentor</h1>
        <Link to="/student-dashboard">
        <div class="card-list">
            <a href="#" class="card-item">
                <img src="https://static.toiimg.com/thumb/msid-96495406,width-400,resizemode-4/96495406.jpg" alt="Card Image"/>
                <div class="developer">Rahul Kumar</div>
                <h3>Rahul, a bright-eyed boy from Pune, Maharashtra, had his sights set on law school since childhood. Despite financial constraints, he spent countless hours huddled over borrowed books, devouring legal concepts.  His dedication paid off, cracking CLAT and securing his dream of becoming a lawyer.</h3>
            </a>
            <a href="#" class="card-item">
                <img src="https://static.toiimg.com/thumb/msid-69924899,width-400,resizemode-4/69924899.jpg" alt="Card Image"/>
                <div class="designer">Abhijeet Kant</div>
                <h3>Abhijeet, a boy from a small town in rural Maharashtra. With a sharp mind and a thirst for knowledge, Abhijeet excelled at academics despite limited resources. He meticulously planned his studies, utilizing online resources and free coaching materials.  His unwavering focus and strategic preparation led him to conquer CLAT, opening doors to a promising legal career. </h3>
            </a>
            <a href="#" class="card-item">
                <img src="https://static.toiimg.com/thumb/msid-105917774,width-400,height-225,resizemode-72/105917774.jpg" alt="Card Image"/>
                <div class="editor">Pooja Bihu</div>
                <h3>Pooja's journey to CLAT success is an embodiment of resilience. Hailing from an underprivileged family in Maharashtra, she faced numerous challenges. Yet, her passion for law and unwavering determination fueled her late nights studying under flickering lights. Pooja's unwavering spirit and dedication to her dream helped her conquer the competitive CLAT exam.</h3>
            </a>
        </div>
        </Link>
    </>
  )
}

export default MentorList