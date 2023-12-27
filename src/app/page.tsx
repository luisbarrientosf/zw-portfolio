import Image from 'next/image'
import styles from './page.module.css'
import { languages } from '@/data/languages.data'
import { LanguageRow } from '@/presentation/components/LanguageRow/LanguageRow'
import { experiences } from '@/data/experiences.data'
import { studies } from '@/data/studies.data'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.centeredContainer}>
      <h1>
        Luis Barrientos Fajardo
      </h1>
      <h3>
        Software Engineer
      </h3>

      <div>
        <h4>
          Habilidades
        </h4>

        <h6>
          Lenguajes
        </h6>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridRowGap: 0,
          gridColumnGap: 25,
          
          }}>
          { languages.map(language => <LanguageRow key={language.id} language={language}/>) }
        </div>
        
        <div className={styles.experiencesContainer}>
          <h4 className={styles.title}>
            Experiencia
          </h4>
          { experiences.map(experience => (
            <div key={experience.company}>
              <h5 className={styles.company}> 
                {experience.company} 
              </h5>
              <p className={styles.date}>
                {experience.dateIn} - {experience.dateOut} ({experience.dateDiff})
              </p>
              <p className={styles.summary}>
                {experience.summary}
              </p>
            </div>
          ))}
          </div>
      
        </div>
        <div className={styles.experiencesContainer}>
          <h4 className={styles.title}>
            Estudios
          </h4>
          { studies.map(study => (
            <div key={study.institution}>
              <h5 className={styles.company}> 
                {study.institution} 
              </h5>
              <p className={styles.date}>
                ({study.yearIn} - {study.yearOut}) - {study.subText}
              </p>
            </div>
          ))}
          </div>
      
        </div>
    </main>
  )
}
