import { html } from 'lit';
import '../firebase-wrapper.js';

export default {
  title: 'FirebaseWrapper',
  component: 'firebase-wrapper',
  argTypes: {
    title: { control: 'text' },
    counter: { control: 'number' },
    textColor: { control: 'color' },
  },
};

function Template({ title = 'Hello world', counter = 5, textColor, slot }) {
  return html`
    <firebase-wrapper
      style="--firebase-wrapper-text-color: ${textColor || 'black'}"
      .title=${title}
      .counter=${counter}
    >
      ${slot}
    </firebase-wrapper>
  `;
}

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'My title',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
