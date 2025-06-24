import GradientText from '../blocks/TextAnimations/GradientText/GradientText';
import '../styles/AboutMe.css';
import PixelTransition from '../blocks/Animations/PixelTransition/PixelTransition';

export const AboutMe = () => {
  return (
    <div className="container">
      <div className="column">
        <PixelTransition
          firstContent={
            <img
              src="selfie.jpg"
              alt="my-photo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          }
          secondContent={
            <img
              src="smile.jpg"
              alt="my-photo2"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          }
          pixelColor="#c27468"
          className="image"
        />
        <div className="linkblock">
          <a href="https://github.com/katyashtan">
            <img src="github.png" alt="git-image" className="github_image" />
          </a>
          <a href="https://hh.ru/resume/16bf450dff0eab33670039ed1f4a4c71645169">
            <img src="resume.png" alt="resume-image" className="resume_image" />
          </a>
          <a href="https://t.me/ksht13">
            <img src="tg.png" alt="tg-image" className="tg_image" />
          </a>
        </div>
      </div>
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
        <p className="weesh-text">
          <p style={{ fontWeight: 'bolder' }}>Мой опыт:</p>• Участвовала в разработке UI для сервиса{' '}
          <a href="https://t.me/weeshmebot" className="link">
            вишлистов
          </a>
          (Telegram-app @weeshmebot, более 100 пользователей).
          <br /> • Сдала кучу лабораторок по Computer Science в универе (МАИ/факультет Компьютерные
          технологии и прикладная математика/направление ПМИ)
        </p>
      </div>
    </div>
  );
};
