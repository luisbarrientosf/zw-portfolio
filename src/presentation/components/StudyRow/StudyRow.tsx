import styles from './StudyRow.module.css'
import { Study } from '@/domain/Study'


interface StudyRowProps {
  study: Study
}

export const StudyRow: React.FC<StudyRowProps> = ({ study }) => {
  return (
    <>
      <h5 className={styles.institution}> 
        {study.institution} 
      </h5>
      <p className={styles.date}>
        ({study.yearIn} - {study.yearOut}) - {study.subText}
      </p>
    </>
  )
}