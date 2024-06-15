import React from 'react';
import './Donation.css';

import { Link } from 'react-router-dom'
function Donate() {
  return (
    <div className="Donate">
      <header className="Donate-header">
        <h1>Donate to NGO Eklavya</h1>
      </header>
      <main className="Donate-main">
        <section className="Donate-section">
          <h2>Why Donate?</h2>
          <p>Eklavya is dedicated to improving access to quality higher education for first-generation students from marginalized communities through awareness, mentoring, and coaching interventions.</p>
          <p>Your donation will directly support our programs and initiatives, helping us reach more students and make a meaningful impact.</p>
        </section>
        <section className="Donate-form-section">
          <h2>Make a Donation</h2>
          <form className="Donate-form">
            <label htmlFor="amount">Amount (Rs.)</label>
            <input type="number" id="amount" name="amount" min="1" step="1" required />
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message (optional)</label>
            <textarea id="message" name="message" rows="4"></textarea>
            <button type="submit">Donate Now</button>
          </form>
          <Link to='/'>Home</Link>
        </section>
      </main>
      <footer className="Donate-footer">
        <p>NGO Eklavya &copy; 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Donate;
