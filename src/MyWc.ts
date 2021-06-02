import { LitElement, html, property } from 'lit-element';

export class MyWc extends LitElement {
  @property({ type: String }) title = 'My app';

  // Disabling shadow DOM
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <h1 class="mx-auto my-4 py-4 text-center shadow-lg text-xl w-1/2">
        Hello, World!
      </h1>
    `; // use tailwind css utility classes
  }
}
