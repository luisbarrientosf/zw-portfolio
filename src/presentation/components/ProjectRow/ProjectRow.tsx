import Image from 'next/image'
import styles from './ProjectRow.module.css'
import { Project } from '@/domain/Project'
import { LinkButton } from '../LinkButton/LinkButton'

interface ProjectRowProps {
  project: Project
}

export const ProjectRow: React.FC<ProjectRowProps> = ({ project }) => {
  return (
    <figure className={styles.container}>
      { project.image && (
        <Image
          className={styles.image}
          src={project.image}
          alt={`${project.name} project image`}
        />
      )}
      <div className={styles.descriptionContainer} >

        <figcaption className={styles.textsContainer}>
          <h5 className={styles.name}> 
            {project.name} 
          </h5>
          <p className={styles.description}>
            {project.description}
          </p>
          <p className={styles.company}>
            {project.company}
          </p>
        </figcaption>

        <div className={styles.buttonsContainer}>
          { project.githubUrl && (
            <LinkButton 
              title='Github'
              href='https://github.com/luisbarrientosf/zw-portfolio'
              icon={require("../../../../public/assets/icons/github.svg")}
            />
          )}

          { project.projectUrl && (
            <LinkButton 
              title='Visitar'
              href='https://github.com/luisbarrientosf/zw-portfolio'
              
            />
          )}
        </div>
        
      </div>
    </figure>
  )
}