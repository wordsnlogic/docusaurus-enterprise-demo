import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import products from '@site/data/products.json';

export default function Products(): ReactNode {
  return (
    <Layout
      title="Products"
      description="All Northwind Cloud product lines and their documentation.">
      <main className="container margin-vert--lg">
        <Heading as="h1">Products</Heading>
        <p>
          Northwind Cloud is a suite of independent, composable APIs — pick
          the ones you need and integrate only those. Browse each product's
          documentation below.
        </p>
        <div className="row margin-top--lg">
          {products.map((product: {id: string; name: string; tagline: string}) => (
            <div key={product.id} className="col col--4 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <Heading as="h3">{product.name}</Heading>
                </div>
                <div className="card__body">
                  <p>{product.tagline}</p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--primary button--block"
                    to={`/docs/${product.id}/intro`}>
                    View docs
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
