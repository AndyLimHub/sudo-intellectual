import * as React from 'react';
import { Separator } from '@base-ui-components/react/separator';
import styles from './index.module.css';

export function ExampleSeparator() {
  return (
    <div className={styles.Container}>
      {/* MacOS stoplight buttons */}
      <div className={styles.Toolbar}>
        <span
          className={styles.Stoplight}
          style={{ backgroundColor: '#FF5F57' }}
        />
        <span
          className={styles.Stoplight}
          style={{ backgroundColor: '#FFBD2E' }}
        />
        <span
          className={styles.Stoplight}
          style={{ backgroundColor: '#28C840' }}
        />
      </div>

      {/* Sidebar Links */}
      <a href="#" className={styles.Link}>
        Home
      </a>
      <a href="#" className={styles.Link}>
        Portfolio
      </a>
      <a href="#" className={styles.Link}>
        Blog
      </a>
      <a href="#" className={styles.Link}>
        Contact
      </a>

      <Separator orientation="vertical" className={styles.Separator} />

      <a href="#" className={styles.Link}>
        Log in
      </a>
      <a href="#" className={styles.Link}>
        Sign up
      </a>
    </div>
  );
}

export default ExampleSeparator;
