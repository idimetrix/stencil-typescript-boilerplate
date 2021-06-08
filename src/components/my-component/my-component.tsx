import { Component, Prop, h, ComponentInterface, State } from '@stencil/core';
import log from '../../log';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent implements ComponentInterface {
  // --- props
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * The test
   */
  @Prop() test: string;

  // --- states

  @State() name: string;

  // --- methods

  // --- hooks

  componentWillLoad(): Promise<void> | void {
    log.log('MyComponent(componentWillLoad)');

    fetch('https://api.github.com/users/idimetrix')
      .then((response: Response) => response.json())
      .then((response) => {
        this.name = response['name'];
      });
  }

  componentDidLoad() {
    log.log('MyComponent(componentDidLoad)');
  }

  componentWillUpdate(): Promise<void> | void {
    log.log('MyComponent(componentWillUpdate)');
  }

  componentDidUpdate() {
    log.log('MyComponent(componentDidUpdate)');
  }

  componentWillRender(): Promise<void> | void {
    log.log('MyComponent(componentWillRender)');
  }

  componentDidRender() {
    log.log('MyComponent(componentDidRender)');
  }

  componentShouldUpdate(
    newVal: any,
    oldVal: any,
    propName: string
  ): boolean | void {
    log.log('MyComponent(componentShouldUpdate)', { newVal, oldVal, propName });
  }

  render() {
    log.log('MyComponent(render)');

    return <div>Hello, World! I'm {this.name}</div>;
  }
}
