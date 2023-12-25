import React from "react"
import './profile.styles.css'
import photoProfile from '@/assets/profile.jpg';
import next from '@/assets/next.png'
import Link from "next/link";
import { config } from "@/assets/data/config.json";
import { Tooltip } from "@mui/material";


interface ProfileProps {
    name: any;
    github: any;
    linkedin: any;
}

export default function Profile({name}: ProfileProps){

    console.log(next.src);

    return ( 
        <div className="profileContainer">
            <div className="imgContainer">
                <Tooltip title={config[0].profile.imgProfile.tooltip}>
                <img className="imgProfile" src={config[0].profile.imgProfile.path} alt="" />
                </Tooltip>
            </div>
            <div className="dataProfile">
                <h1 className="name">{config[0].profile.name}</h1>
                <h1 className="prof">{config[0].profile.prof}</h1>
                <Link href={config[0].profile.buttons.first.url}>
                <Tooltip title={config[0].profile.buttons.first.tooltip}>
                <button className="gh_btn">{config[0].profile.buttons.first.name}</button>
                </Tooltip>
                </Link>
                <Link href={config[0].profile.buttons.second.url}>
                    <Tooltip title={config[0].profile.buttons.second.tooltip}>
                        <button className="lin_btn">{config[0].profile.buttons.second.name}</button>
                    </Tooltip>
                </Link>
            </div>
            <div className="createContainer">
                <h1 className="made">{config[0].profile.mby.sentence}</h1>
                <img className="next" src={config[0].profile.mby.logo}/>
            </div>
        </div>
/* <Link href={url}>
<button className='project_btn'>See project here</button>
</Link> */
    )
}