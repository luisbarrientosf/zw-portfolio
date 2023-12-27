import Image from 'next/image'
import styles from './LanguageRow.module.css'
import { Language } from '@/domain/Language'


interface LanguageRowProps {
  language: Language
}

export const LanguageRow: React.FC<LanguageRowProps> = ({ language }) => {
  return (
    <figure className={styles.row}>
      <Image
        className={styles.image}
        src={language.image}
        alt={`${language.name} image`}
      />
      <figcaption className={styles.text}>
        { language.name }
      </figcaption>
    </figure>
  )
}