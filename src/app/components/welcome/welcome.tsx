import Background from '../background/background';
import './welcome.styles.css';

export default function Welcome(){ 
   return (
        <>
        <div className='welcomeContainer'>
            <div className="textContainer">
            <h1 className='titleWelcome'>Welcome to my new portfolio! 🙌</h1>
            <h2 className='subtitleWelcome'>Enjoy it... 👋</h2>
            </div>
            <Background />
        </div>
        </>
    )
}