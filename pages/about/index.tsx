import Image from 'next/image';

import LayoutOne from '../../layouts/layoutone/LayoutOne';

// styles
import styles from './About.module.css';

const imageDimensions = {
  width: 150,
  height: 100,
};

export default function About(): JSX.Element {
  return (
    <LayoutOne title="About..." titleAlign="left">
      <div>
        <a
          className={styles.resumeLink}
          href="/resume/diontu_resume.pdf"
          target="_blank"
        >
          Click here for my resume.
        </a>
      </div>
      <p>
        Hi! I&lsquo;m Dion and I&lsquo;m a frontend engineer.
        <br />
        <br />
        I&lsquo;ve work professionally as a frontend engineer for a little over
        2 years at 2 of the largest banks in Canada and a smaller but successful
        B2B software company.
      </p>
      <div>Web development tools I&lsquo;m proficient with:</div>
      <div className={styles.grid}>
        <Image
          width={imageDimensions.width}
          height={imageDimensions.height}
          src="/images/react-icon.svg"
          alt="react_icon"
        />
        <Image
          width={imageDimensions.width}
          height={imageDimensions.height}
          src="/images/nodejs_logo.svg"
          alt="nodejs_icon"
        />
        <Image
          width={imageDimensions.width}
          height={imageDimensions.height}
          src="/images/java_logo.svg"
          alt="java_icon"
        />
        <Image
          width={imageDimensions.width}
          height={imageDimensions.height}
          src="/images/mongodb_spring-green.svg"
          alt="mongodb_icon"
        />
        <Image
          width={imageDimensions.width}
          height={imageDimensions.height}
          src="/images/redis-logo.svg"
          alt="redis_icon"
        />
        <Image
          width={imageDimensions.width}
          height={imageDimensions.height}
          src="/images/postgresql_elephant.svg"
          alt="postgresql_icon"
        />
      </div>
      <p>
        Through all this, I&lsquo;ve have learned from some of the brightest
        individuals to build performant, and maintainable web applications while
        leveling up my frontend skills. I&lsquo;ve studied 4 years in Software
        Engineering at York University in Canada and wanted to make a difference
        on frontend web applications.
      </p>
    </LayoutOne>
  );
}
