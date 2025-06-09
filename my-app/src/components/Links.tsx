import '../styles/Links.css';

export const Links = () => {
  return (
    <>
      <div className="linkblock">
        <div className="github">
          <a href="https://github.com/katyashtan">
            <img src="/github.png" alt="git-image" className="github_image" />
          </a>
          <p className="github_text">GitHub</p>
        </div>
        <div className="resume">
          <a href="https://hh.ru/resume/16bf450dff0eab33670039ed1f4a4c71645169">
            <img src="/resume.png" alt="resume-image" className="resume_image" />
          </a>
          <p className="resume_text">Резюме</p>
        </div>
        <div className="weesh">
          <a href="https://t.me/weeshmebot">
            <img src="/weesh.png" alt="weesh-image" className="weesh_image" />
          </a>
          <p className="weesh_text">Weesh-bot</p>
        </div>
        <div className="tg">
          <a href="https://t.me/ksht13">
            <img src="/tg.png" alt="tg-image" className="tg_image" />
          </a>
          <p className="tg_text">Мой тг</p>
        </div>
      </div>
      <p className="description">
        Weesh-bot - ссылка на сервис вишлистов(Telegram-app @weeshmebot, 100+ пользователей), в
        разработке UI которого я участвовала.
      </p>
    </>
  );
};
