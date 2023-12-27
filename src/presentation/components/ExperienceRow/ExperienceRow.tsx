import styles from './ExperienceRow.module.css'
import { Experience } from '@/domain/Experience'


interface ExperienceRowProps {
  experience: Experience
}

export const ExperienceRow: React.FC<ExperienceRowProps> = ({ experience }) => {
  return (
    <>
      <h5 className={styles.company}> 
        {experience.company} 
      </h5>
      <p className={styles.date}>
        {experience.dateIn} - {experience.dateOut} ({experience.dateDiff})
      </p>
      <p className={styles.summary}>
        {experience.summary}
      </p>
    </>
  )
}