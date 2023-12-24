'use client'
import Background from "./components/background/background"
import Profile from "./components/profile/profile"
import Skills from "./components/skills/skill"
import Welcome from "./components/welcome/welcome"
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>  
    <Welcome/>
    {/* <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div> */}
    <Background/>
    <div className="container"></div>
    <div className="componentsContainer">
      <Profile name="Marcos" github="" linkedin=""  />
      <Skills />
    </div>
    </>
  )
}
