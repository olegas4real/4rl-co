// Visual meta for the four ventures: folder colour (Apple system palette) and
// line-icon key. Shared by the desktop folders and the detail pages. Kept in a
// module (not a page-local const) so getStaticPaths can rely on it.
export const projectMeta = {
  'smart-social': { color: '#8839ef', icon: 'signal' }, // Catppuccin Mauve
  gume: { color: '#40a02b', icon: 'book' },             // Green
  labepi: { color: '#179299', icon: 'flask' },          // Teal
  altman: { color: '#fe640b', icon: 'chart' },          // Peach
};
