const SITE_URL = 'https://community.wolfbot.io'

/** Section 50: BreadcrumbList structured data, built from the same
 * {label, href} list the visible breadcrumb nav already renders. */
export function breadcrumbSchema(crumbs: { label: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.label,
      item: `${SITE_URL}${crumb.href}`,
    })),
  }
}
