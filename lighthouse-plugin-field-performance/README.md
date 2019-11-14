# lighthouse-plugin-field-performance

> Lighthouse plugin that displays "field" performance of your page using real-world data from by Chrome UX Report.

[An example report](https://googlechrome.github.io/lighthouse/viewer/?gist=a688f27b4a7c0561b6d7f9e2b70aa4bd):

<a href="https://googlechrome.github.io/lighthouse/viewer/?gist=a688f27b4a7c0561b6d7f9e2b70aa4bd">
  <img align="center" width="956" src="https://user-images.githubusercontent.com/158189/65156251-0bee5e80-da2f-11e9-876b-6faa0125646b.png">
</a>

<br />
<br />

This plugin adds a field performance section with the real-world data from [Chrome UX Report](https://developers.google.com/web/tools/chrome-user-experience-report/). It's similar to [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/), with an addion of overall score.

The scoring algorithm uses [PSI recommendations](https://developers.google.com/speed/docs/insights/v5/about#faq) and applies estimation for First Contentful Paint and First Input Delay. (Notice: the origin values does not affect score).

Check out the parity between Field & Lab performance on mobile:

<img width="974" alt="Field & lab performance on mobile" src="https://user-images.githubusercontent.com/158189/65246644-4a4b5280-daef-11e9-9b1d-9158297a1f89.png">

And on desktop:

<img width="974" alt="Field & lab performance on desktop" src="https://user-images.githubusercontent.com/158189/65246645-4a4b5280-daef-11e9-92aa-e3495aebfa4b.png">

Sometimes field data is missing because the URL doesn't have enough anonymous traffic. In this case, the lab data is the only available measurement. Optimize, get more traffic, and measure again.

## Install

Requires Node.js `10+` and Lighthouse `5+`.

```bash
$ npm install lighthouse-plugin-field-performance
```

## Usage

Use the plugin with [Lighthouse CLI](https://github.com/GoogleChrome/lighthouse) or Node.js.

### CLI

Pass plugin to Lighthouse:

```bash
$ lighthouse https://www.apple.com/ --plugins=lighthouse-plugin-field-performance
```

Pass your [PageSpeed Insights token](https://developers.google.com/speed/docs/insights/v5/get-started) with a custom config:

```bash
$ lighthouse https://www.apple.com/ --config-path=./config.js
```

`config.js`

```js
module.exports = {
  extends: 'lighthouse:default',
  plugins: ['lighthouse-plugin-field-performance'],
  settings: {
    psiToken: 'YOUR_REAL_TOKEN'
  }
}
```

### Node.js

```js
const { runLighthouse } = require('lighthouse/lighthouse-cli/run')

runLighthouse('https://www.apple.com', {
  plugins: ['lighthouse-plugin-field-performance']
}).then(result => {
  console.log(result)
})
```

## Credits

Sponsored by [Treo.sh - Page speed monitoring made easy](https://treo.sh).

[![](https://travis-ci.org/treosh/lighthouse-plugin-field-performance.png)](https://travis-ci.org/treosh/lighthouse-plugin-field-performance)
[![](https://img.shields.io/npm/v/lighthouse-plugin-field-performance.svg)](https://npmjs.org/package/lighthouse-plugin-field-performance)
[![](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
