import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import allProducts from '@site/data/products.json';
import styles from './styles.module.css';

type Product = {
  id: string;
  name: string;
  tagline: string;
  versioned: boolean;
};

// Hand-picked flagships for the homepage — the full catalog lives at /products.
const FEATURED_IDS = ['atlas', 'ion', 'genesis'];
const featured = (allProducts as Product[]).filter((p) => FEATURED_IDS.includes(p.id));

function ProductCard({id, name, tagline, versioned}: Product) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className="card">
        <div className="card__header">
          <Heading as="h3">{name}</Heading>
        </div>
        <div className="card__body">
          <p>{tagline}</p>
          {versioned && <span className="badge badge--secondary">versioned</span>}
        </div>
        <div className="card__footer">
          <Link className="button button--primary button--block" to={`/docs/${id}/intro`}>
            View docs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          Popular products
        </Heading>
        <div className="row">
          {featured.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="text--center margin-top--md">
          <Link to="/products">View all {allProducts.length} products →</Link>
        </div>
      </div>
    </section>
  );
}
