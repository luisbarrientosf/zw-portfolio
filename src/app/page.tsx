"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { languages } from '@/data/languages.data'
import { LanguageRow } from '@/presentation/components/LanguageRow/LanguageRow'
import { experiences } from '@/data/experiences.data'
import { studies } from '@/data/studies.data'
import { StudyRow } from '@/presentation/components/StudyRow/StudyRow'
import { ExperienceRow } from '@/presentation/components/ExperienceRow/ExperienceRow'
import { Button } from '@/presentation/components/Button/Button'

export default function Home() {
  const GITHUB_URL = "https://github.com/luisbarrientosf";
  const RESUME_URL = "https://drive.google.com/file/d/1CYxkQhqbwZgcklsyTt7QrKy-bPjtShLc";

  return (
    <main className={styles.main}>
      <div className={styles.centeredContainer}>
      <h1 className={styles.name}>
        Luis Barrientos Fajardo
      </h1>
      <h3 className={styles.profession}>
        Software Engineer
      </h3>

      <div className={styles.buttonsContainer}>
        <Button 
          title='Mi Github'
          onClick={() => {window.location.assign(GITHUB_URL)}}
        />
        <Button 
          title='Mi CV'
          onClick={() => {window.location.assign(RESUME_URL)}}
        />
      </div>

      <div style={{ marginTop: 50 }}>
        <h4 className={styles.title}>
          Habilidades
        </h4>

        <div className={styles.languagesContainer}>
          { languages.map(language => <LanguageRow key={language.id} language={language} />) }
        </div>
        
        <div className={styles.experiencesContainer}>
          <h4 className={styles.title}>
            Experiencia
          </h4>
          { experiences.map(experience => <ExperienceRow key={experience.company} experience={experience} />) }
          </div>
      
        </div>
        <div className={styles.experiencesContainer}>
          <h4 className={styles.title}>
            Estudios
          </h4>
          { studies.map(study => <StudyRow key={study.institution} study={study} />) }
          </div>
      
        </div>
    </main>
  )
}
