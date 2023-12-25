import './skill.styles.css';
import Projects from './topProjects/projects';
import Description from './description/description';
import Languages from './languages/languages';
import { config } from '@/assets/data/config.json';
import { useEffect, useState } from 'react';
import configService from '../services/config.service'; 

export default function Skills() {

    return <div className="skillContainer">
        <Description/>
        <Languages/>
        <Projects/>
        {/* Entonces se le pasara todo el objeto projects dentro del config.json.ts */}
    </div>
}