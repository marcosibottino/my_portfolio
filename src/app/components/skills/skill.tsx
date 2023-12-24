import './skill.styles.css';
import Projects from './topProjects/projects';
import Description from './description/description';
import Languages from './languages/languages';



export default function Skills() {
    return <div className="skillContainer">
        <Description/>
        <Languages/>
        <Projects />
    </div>
}