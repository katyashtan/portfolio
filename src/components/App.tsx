import { AboutMe } from './AboutMe';
import '../styles/App.css';
import SplashCursor from '../blocks/Animations/SplashCursor/SplashCursor';
import Aurora from '../blocks/Backgrounds/Aurora/Aurora';

function App() {
  return (
    <div className="main">
      <Aurora
        colorStops={['#FF0059', '#FFEB66', '#FF4D00']}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <div className="content">
        <AboutMe />
      </div>
      <SplashCursor />
    </div>
  );
}

export default App;
