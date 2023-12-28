"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { aditionals, mystack } from '@/data/languages.data'
import { LanguageRow } from '@/presentation/components/LanguageRow/LanguageRow'
import { experiences } from '@/data/experiences.data'
import { studies } from '@/data/studies.data'
import { StudyRow } from '@/presentation/components/StudyRow/StudyRow'
import { ExperienceRow } from '@/presentation/components/ExperienceRow/ExperienceRow'
import { LinkButton } from '@/presentation/components/LinkButton/LinkButton';
import { projects } from '@/data/projects.data';
import { ProjectRow } from '@/presentation/components/ProjectRow/ProjectRow';

export default function Home() {
  const GITHUB_URL = "https://github.com/luisbarrientosf";
  const RESUME_URL = "assets/pdf/CV 2024 Luis Barrientos Fajardo.pdf";
  const LINKEDIN_URL = "https://www.linkedin.com/in/luis-barrientos-fajardo-5aa57412a/";

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
          <LinkButton
            title='Mi Github'
            icon={require("../../public/assets/icons/github.svg")}
            href={GITHUB_URL}
            animated
          />
          <LinkButton
            title='Mi CV'
            icon={require("../../public/assets/icons/document.svg")}
            href={RESUME_URL}
            animated
          />
          <LinkButton
            title='Mi LinkedIn'
            icon={require("../../public/assets/icons/linkedin.svg")}
            href={LINKEDIN_URL}
            animated
          />
        </div>

        <div style={{ marginTop: 50 }}>
          <h4 className={styles.title}>
            Stack principal
          </h4>
          <div className={styles.languagesContainer}>
            { mystack.map(language => <LanguageRow key={language.name} language={language} />) }
          </div>

          <h4 className={styles.title}>
            Conocimientos adicionales
          </h4>
          <div className={styles.languagesContainer}>
            { aditionals.map(language => <LanguageRow key={language.name} language={language} />) }
          </div>
        </div>

        <div className={styles.experiencesContainer}>
          <h4 className={styles.title}>
            Experiencia
          </h4>
          { experiences.map(experience => <ExperienceRow key={experience.company} experience={experience} />) }
        </div>
      
        <div className={styles.experiencesContainer}>
          <h4 className={styles.title}>
            Estudios
          </h4>
          { studies.map(study => <StudyRow key={study.institution} study={study} />) }
        </div>
      
        <div className={styles.experiencesContainer}>
          <h4 className={styles.title}>
            Proyectos
          </h4>
          { projects.map(project => <ProjectRow key={project.name} project={project} />) }
        </div>
      
      </div>  
    </main>
  )
}
