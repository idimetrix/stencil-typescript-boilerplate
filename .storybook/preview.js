import {
  configure,
  addParameters,
  setCustomElements,
} from '@storybook/web-components';
import { create } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Stencil',
  }),
});

import customElements from '../custom-elements.json';

setCustomElements(customElements);

addParameters({
  docs: {
    inlineStories: false,
    iframeHeight: '200px',
  },
});

const req = require.context('../src', true, /\.stories\.(js|jsx|ts|tsx|mdx)$/);

configure(req, module);

if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
