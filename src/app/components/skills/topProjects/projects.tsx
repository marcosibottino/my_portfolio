import Project from './project_model/project';
import './projects.styles.css';
import {config} from '../../../../assets/data/config.json';


export default function Projects(){
    return (
    <div className="projectContainer">
        <Project 
        tooltip={config[0].skills.projects.first.tooltip_url}
        nameProject={config[0].skills.projects.first.title} 
        url={config[0].skills.projects.first.url} 
        description={config[0].skills.projects.first.description} 
        first_language={config[0].skills.projects.first.languages.first} 
        second_language={config[0].skills.projects.first.languages.second}/>
<div className="secondProject">
        <Project
        tooltip={config[0].skills.projects.second.tooltip_url}
        nameProject={config[0].skills.projects.second.title} 
        url={config[0].skills.projects.second.url} 
        description={config[0].skills.projects.second.description} 
        first_language={config[0].skills.projects.second.languages.first} 
        second_language={config[0].skills.projects.second.languages.second}/>
</div>
    </div>
    )
}