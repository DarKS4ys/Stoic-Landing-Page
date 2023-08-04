import Link from 'next/link';
import styles from './button.module.css';

const StoicButton = () => {
  return (
    <div>
      <Link href="#">
        <button className={styles.button}>Get Started</button>
      </Link>
    </div>
  );
};
export default StoicButton;