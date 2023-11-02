import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Advanced Product Search',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Quickly and easily find what products you want with the Advanced Search feature. Includes
        extra options to filter the products you&apos;re viewing.
      </>
    ),
  },
  {
    title: 'Import Orders',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Import multiple products through our Import Order feature, which will check the availability / validity
        of your import file and allows extra options dependent on your use case. You can then manage the import if
        there were any errors or amendments you need to make.
      </>
    ),
  },
  {
    title: 'BackOrder Products and View Live Quantities',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        View complete list of your current Back Orders for your store and view live quantites for products
        across the site.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
