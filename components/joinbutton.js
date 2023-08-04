import Link from 'next/link';
import styles from './stoic.module.css';

const JoinButton = () => {
  return (
    <div>
      <Link href="#">
        <button className={styles.button}>JOIN NOW</button>
      </Link>
    </div>
  );
};
export default JoinButton;
