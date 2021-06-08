import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-test',
  styleUrl: 'my-test.scss',
  shadow: true,
})
export class MyTest {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
