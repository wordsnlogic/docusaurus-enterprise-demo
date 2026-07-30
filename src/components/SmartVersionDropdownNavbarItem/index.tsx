import type {ReactNode} from 'react';
import {useLocation} from '@docusaurus/router';
import DocsVersionDropdownNavbarItem from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import productsData from '@site/data/products.json';

type Product = {id: string; versioned: boolean};

const VERSIONED_IDS = (productsData as Product[]).filter((p) => p.versioned).map((p) => p.id);

// Mirrors the language dropdown's UI (a single clickable dropdown in the
// navbar), but only renders when the current page belongs to a versioned
// product's own docs — unlike locale, versioning isn't global, so a
// per-product dropdown that's always visible everywhere would be clutter
// and, worse, misleading on pages it doesn't apply to.
export default function SmartVersionDropdownNavbarItem(): ReactNode {
  const location = useLocation();
  const match = location.pathname.match(/\/docs\/([a-z0-9-]+)\//);
  const productId = match?.[1];

  if (!productId || !VERSIONED_IDS.includes(productId)) {
    return null;
  }

  return (
    <DocsVersionDropdownNavbarItem
      docsPluginId={productId}
      dropdownItemsBefore={[]}
      dropdownItemsAfter={[]}
      items={[]}
      position="right"
    />
  );
}
