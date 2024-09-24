'use client';

// fun problem: Next.js defaults this to Record<string, string>
// thus, something like style.foobarbaz is legit to TS. But we know that it is
// not...
import styles from '../styles.module.scss';

export default function StylesClientComponent() {
  return <p className={styles.red}>I am red text!</p>;
}
