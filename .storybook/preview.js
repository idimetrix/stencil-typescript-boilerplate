/* global window */

import {
  configure,
  addParameters,
  setCustomElements,
} from '@storybook/web-components';

import customElements from '../custom-elements.json';

setCustomElements(customElements);

addParameters({
  docs: {
    inlineStories: false,
    iframeHeight: '200px',
  },
});

// configure(require.context('../stories', true, /\.stories\.(js|jsx|ts|tsx|mdx)$/), module);

const req = require.context('../src', true, /\.src\.(js|jsx|ts|tsx|mdx)$/);

configure(req, module);

if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
