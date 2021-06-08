import { html } from 'lit-html';

export default {
  title: 'Components/My component',
  component: 'my-component', // which is also found in the `custom-elements.json`
  argTypes: {
    prop1: { control: { type: 'text' } },
    prop2: { control: { type: 'text' } },
    prop3: { control: { type: 'text' } },
  },
};

export const basic = ({ prop1, prop2, prop3 }) => html`
  <my-component
    prop1="${prop1}"
    prop2="${prop2}"
    prop3="${prop3}"
  ></my-component>
`;

basic.args = {
  prop1: '',
  prop2: '',
  prop3: '',
};
