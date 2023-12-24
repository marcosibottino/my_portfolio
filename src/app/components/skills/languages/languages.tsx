import { iconsData } from "@/assets/data/icons.json";
import { Tooltip } from "@mui/material";
import './languages.styles.css';

export default function Languages(){
    return (
        <>
        <div className="langContainer"></div>
        <div className="languagesContainer">
            <h1 className='topLanguagestitle'>Top Languages</h1>
            <p className='icons'>
            {iconsData.map((icon, index) => (
                
                <Tooltip title={icon.name} key={index}>
                <a href={icon.url} target="_blank" rel="noreferrer"><img src={icon.icon} width="36" height="36" alt={icon.name} /></a>
                </Tooltip>
                
            ))}</p>
        </div>
        </>
    )
}