import { html, TemplateResult } from 'lit-html';
import '../src/my-wc.js';

export default {
  title: 'MyWc',
  component: 'my-wc',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <my-wc style="--my-wc-background-color: ${backgroundColor}" .title=${title}></my-wc>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
