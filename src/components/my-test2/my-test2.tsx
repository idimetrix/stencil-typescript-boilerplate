import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-test2',
  styleUrl: 'my-test2.scss',
  shadow: true,
})
export class MyTest2 {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
