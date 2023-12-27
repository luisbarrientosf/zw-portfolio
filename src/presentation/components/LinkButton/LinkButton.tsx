import Image from 'next/image';
import styles from './LinkButton.module.css'

interface LinkButtonProps {
  href: string;
  title: string;
  icon?: string;
  animated?: boolean;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ href, title, icon, animated }) => {
  let buttonStyles = [styles.button];
  if(animated){
    buttonStyles.push(styles.animated);
  }
  return (
    <a
      className={buttonStyles.join(" ")}
      href={href}
      target={"_blank"}
    >
      { icon && (
        <Image
          src={icon}
          className={styles.icon}
          alt={`${title} image`}
        /> 
      )}
      {title} 
    </a>
  )
}