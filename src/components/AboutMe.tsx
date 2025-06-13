import GradientText from '../blocks/TextAnimations/GradientText/GradientText';
import '../styles/AboutMe.css';
import PixelTransition from '../blocks/Animations/PixelTransition/PixelTransition';

export const AboutMe = () => {
  return (
    <div className="container">
      <PixelTransition
        firstContent={
          <img
            src="selfie.jpg"
            alt="my-photo"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        }
        secondContent={
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'grid',
              placeItems: 'center',
              backgroundColor: '#111',
            }}
          >
            <p style={{ fontWeight: 900, fontSize: '3rem', color: '#c27468' }}>Привет!</p>
          </div>
        }
        pixelColor="#c27468"
        className="image"
      />
      <div className="text-section">
        <GradientText
          colors={['#f9f5c3', '#c27468', '#757575']}
          animationSpeed={5}
          showBorder={false}
          className="name"
        >
          Штанникова Екатерина
        </GradientText>
        <p className="bio">
          Я — начинающий frontend-разработчик из Москвы. Люблю разбираться в новом, развиваться и
          решать задачи. Готова расти вместе с командой.
        </p>
      </div>
    </div>
  );
};
