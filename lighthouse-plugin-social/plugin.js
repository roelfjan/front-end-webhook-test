module.exports = {
  audits: [
    { path: 'lighthouse-plugin-social/audits/twitter/card.js' },
    { path: 'lighthouse-plugin-social/audits/twitter/manual-check.js' }
  ],
  category: {
    title: 'Social',
    description:
      'When integrated into your website effectively, cats deliver delight and bemusement.',
    auditRefs: [
      { id: 'twitter-card', weight: 1, group: 'twitter' },
      { id: 'twitter-manual-check', weight: 0, group: 'twitter' },
    ],
  },
  groups: {
    twitter: {
      title: 'Twitter'
    }
  }
};