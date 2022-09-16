import style from './Navigation.module.css';

export const Navigation = (props) => (
  <nav className={style.navigation}>
    <a href='/' className={style.logo}>Dev</a>
  </nav>
);
