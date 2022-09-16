import style from './Home.module.css';
import avatar from './img/avatar.jpg';

export const Home = (props) => (
  <section id={style.home}>
    <div className={style['home-text']}>
      <strong>Hello, it's me</strong>
      <h1>EVA</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellat earum iure tempora voluptas explicabo molestias nisi voluptates ipsa dignissimos esse odio officia ex, reiciendis odit facere ducimus. At officiis commodi nobis, neque labore enim dolor, temporibus laboriosam quod quasi eius laborum eligendi, similique possimus impedit repellendus quo vel iusto.</p>
      <a href="#resume" className='btn-link'>Scroll to resume</a>
    </div>

    <div className={style['home-img']}>
      <div className={style['img-box']}>
        <img src={avatar} alt="" />
        <h2>EVA <br /><span>React Developer</span></h2>

        <div className={style.social}>
          <a href="/">
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-youtube"></i>
          </a>

          <a href="/" className={style['hire-me']}><span>Hire me</span></a>
        </div>
      </div>
    </div>
  </section>
);
