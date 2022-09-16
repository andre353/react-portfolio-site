import style from './Languages.module.css';

export const Languages = () => {
  const data = [
    {
      title: "Languages",
      contents: ["JavaScript", "Nodejs", "SQL", "Python"]
    },
    {
      title: "CSS",
      contents: ["SCSS", "SASS", "BEM", "Bootstrap"]
    },
    {
      title: "JS-Library",
      contents: ["React"]
    },
    {
      title: "DBMS",
      contents: ["MySQL", "PostgresQL", "MongoDB", "Firebase"]
    }
  ]

  return (
    <section id={style.languages} data-aos="fade">
      {
        data.map(item => (
          <div className={style["languages-box"]} key={item.title}>
            <h3>{item.title}</h3>
            <ul>
              {
                item.contents.map(content => (
                  <li key={content}>{content}</li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </section>
  )
}
