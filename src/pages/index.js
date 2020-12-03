import React from "react";
import '../styles/global.scss';
import '../styles/landing.scss'

import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className="landing-container">
      <NavBar />
      <div class="hello-text">
        Hello!
      </div>
    </div>
  )
}
