import './description.styles.css';
import {config} from '../../../../assets/data/config.json';

export default function Description() {
    return (
        <>
        <div className="descContainer"></div>
        <div className="desc">
            <h1 className='welcome'>{config[0].skills.description.title}</h1>
            <img className='handShake' src={config[0].skills.description.icon} alt="" />
            <p className='p'>{config[0].skills.description.text}</p>
        </div>
        </>
    )
}