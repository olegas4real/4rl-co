// Gabriel's projects — structural data only. The per-language line + tag live
// in src/i18n/me.js keyed by `id`. `links` is an ordered list of outbound
// links (label comes from the dict's linkLabels by `kind`). `href: null`
// project has no public link yet.
export const projects = [
  {
    id: 'smart-social',
    icon: '📡',
    name: 'Smart Social',
    links: [{ kind: 'site', href: 'https://smtsocial.com.br/', label: 'smtsocial.com.br' }],
  },
  {
    id: 'gume',
    icon: '📖',
    name: 'Gume',
    links: [
      { kind: 'site', href: 'https://gume.club/', label: 'gume.club' },
      { kind: 'code', href: 'https://github.com/4-RL-Co/gume-club', label: 'github.com/4-RL-Co/gume-club' },
    ],
  },
  {
    id: 'labepi',
    icon: '🔬',
    name: 'LabEpi',
    links: [{ kind: 'site', href: 'https://laboratoriodeepidemiologia.com/', label: 'laboratoriodeepidemiologia.com' }],
  },
  {
    id: 'altman',
    icon: '📊',
    name: 'Altman by LabEpi',
    // No public link yet — brand/domain clearance is a blocking front (see the
    // concept doc). Card shows the venture, not a URL.
    links: [],
    soft: true,
  },
];
