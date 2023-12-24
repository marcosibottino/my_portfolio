import React from "react"
import './profile.styles.css'
import photoProfile from '@/assets/profile.jpg';
import next from '@/assets/next.png'
import Link from "next/link";


interface ProfileProps {
    name: any;
    github: any;
    linkedin: any;
}

export default function Profile({name}: ProfileProps){
    return ( 
        <div className="profileContainer">
            <div className="imgContainer">
                <img className="imgProfile" src={photoProfile.src} alt="" />
            </div>
            <div className="dataProfile">
                <h1 className="name">Marcos Bottino</h1>
                <h1 className="prof">Software Developer</h1>
                <Link href="https://github.com/marcosibottino">
                <button className="gh_btn">Github</button>
                </Link>
                <Link href="https://www.linkedin.com/in/marcosbottino/">
                <button className="lin_btn">LinkedIn</button>
                </Link>
            </div>
            <div className="createContainer">
                <h1 className="made">Made with </h1>
                <img className="next" src={next.src}/>
            </div>
        </div>
/* <Link href={url}>
<button className='project_btn'>See project here</button>
</Link> */
    )
}