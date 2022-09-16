import style from './Resume.module.css';
import CV from '../../assets/cv/resume.pdf';

export const Resume = (props) => (
  <section id={style.resume}>
    <div className={style["resume-heading"]}>
      <strong>My Skillset</strong>
      <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ipsa pariatur eligendi inventore quisquam fugiat.</h2>
      <a href={CV} download className='btn-link'>
        Get CV <i className='fa-solid fa-download'></i>
      </a>
    </div>

    <div className={style["resume-details"]}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, rem!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, rem!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, rem!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit accusantium eligendi eveniet molestias mollitia quis nobis quidem, corrupti perspiciatis ducimus rerum voluptatem ex tempore!
      </p>
    </div>
  </section>
);
