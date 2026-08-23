// Visual meta for the four ventures: folder colour (Apple system palette) and
// line-icon key. Shared by the desktop folders and the detail pages. Kept in a
// module (not a page-local const) so getStaticPaths can rely on it.
export const projectMeta = {
  'smart-social': { color: '#AF52DE', icon: 'signal' },
  gume: { color: '#34C759', icon: 'book' },
  labepi: { color: '#30B0C7', icon: 'flask' },
  altman: { color: '#FF9500', icon: 'chart' },
};
