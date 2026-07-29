import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '15 product lines, 1 site',
    icon: '\u{1F4E6}',
    description: (
      <>
        Each product is its own <code>@docusaurus/plugin-content-docs</code>{' '}
        instance, generated from a single data file. See{' '}
        <a href="/docs/architecture">how it's architected</a>.
      </>
    ),
  },
  {
    title: '9 locales, 2 versioned products',
    icon: '\u{1F310}',
    description: (
      <>
        English + 8 languages, with Atlas and Beacon independently versioned
        to prove versioning and localization compose. See the{' '}
        <a href="/docs/i18n-strategy">localization strategy</a>.
      </>
    ),
  },
  {
    title: 'Built for scale, honestly',
    icon: '⚡',
    description: (
      <>
        This is a real stress test, not a mockup — read what actually
        happened to build time at this scale in{' '}
        <a href="/docs/performance">Performance</a>.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon} aria-hidden="true">
          {icon}
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
