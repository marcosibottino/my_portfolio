import Project from './project_model/project';
import './projects.styles.css';

export default function Projects(){
    return (
    <div className="projectContainer">
        <Project 
        nameProject="SocialMediaProject" 
        url="https://github.com/marcosibottino/SocialMediaProject" 
        description="This is a description for the project i'm describing" 
        first_language='react' 
        second_language='nextjs'/>
<div className="secondProject">
        <Project
        nameProject="Emirates_app" 
        url="https://github.com/marcosibottino/Emirates_app" 
        description="This is a description for the project i'm describing" 
        first_language='angular' 
        second_language='typescript'/>
</div>
    </div>
    )
}