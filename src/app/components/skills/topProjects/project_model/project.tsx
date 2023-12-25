import CollectionsBookmarkTwoToneIcon from '@mui/icons-material/CollectionsBookmarkTwoTone';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import './project.styles.css';
import { Tooltip } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { iconsData } from '@/assets/data/icons.json';

interface LanguageResult {
    name: string;
    url: string;
    icon: string;
  }

interface ProjectProps {
    nameProject: string;
    url: string;
    description: string;
    first_language: string,
    second_language: string,
    tooltip: string
}

export default function Project({nameProject, url, description, first_language, second_language, tooltip}: ProjectProps) {

    const [firstIcon, setFirstIcon] = useState<LanguageResult | null>(null);
    const [secondIcon, setSecondIcon] = useState<LanguageResult | null>(null);

    useEffect(() => {
        let firstLanguageResult = iconsData.find(icon => icon.name.toLowerCase() === first_language) || null;
        setFirstIcon(firstLanguageResult);
        console.log('[First Language] => ', firstLanguageResult);

        let secondLanguageResult = iconsData.find(icon => icon.name.toLowerCase() === second_language) || null;
        setSecondIcon(secondLanguageResult); 
        console.log('[Second Language] => ', secondLanguageResult);
    }, [first_language, second_language]);


    return (
        <>
        <div className="project_bg"></div>
        <div className="project">
            <div className="title">
            <FontAwesomeIcon icon={faBookBookmark} color='#fff' className='bookmarkIcon'/>
            <h1 className='titleProject'>{nameProject}</h1>
            </div>
            <div className="description">
                <p className='descText'>{description}</p>
                </div>
            <div className="lang">
            <Tooltip title={firstIcon?.name}>
            <a className='iconsProject' href={firstIcon?.url} target="_blank" rel="noreferrer"><img src={firstIcon?.icon} width="36" height="36" alt="React" /></a>
            </Tooltip>
            <Tooltip title={secondIcon?.name}>
            <a className='iconsProject' href={secondIcon?.url} target="_blank" rel="noreferrer"><img src={secondIcon?.icon} width="36" height="36" alt="NextJs" /></a>
            </Tooltip>
            </div>
            <Link href={url}>
                <Tooltip title={tooltip}>
                    <button className='project_btn'>See project here</button>
                </Tooltip>
            </Link>
        </div>
        </>
    )
}