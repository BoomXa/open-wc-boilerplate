import { html, fixture, expect } from '@open-wc/testing';

import { MyWc } from '../src/MyWc.js';
import '../src/my-wc.js';

describe('MyWc', () => {
  let element: MyWc;
  beforeEach(async () => {
    element = await fixture(html`<my-wc></my-wc>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
