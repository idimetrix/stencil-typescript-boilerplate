import {
  Component,
  Host,
  Prop,
  h,
  ComponentInterface,
  State,
  Event,
  Watch,
  Element,
  Listen,
  EventEmitter,
} from '@stencil/core';
import log from '../../log';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent implements ComponentInterface {
  @Element() el: HTMLMyComponentElement;

  // --- props

  /**
   * Prop 1
   */
  @Prop() prop1: string;

  /**
   * Prop2
   */
  @Prop() prop2: string;

  /**
   * Prop  3
   */
  @Prop() prop3: string;

  // --- states

  @State() name: string;

  // ---

  @Watch('name')
  nameChanged(newName: boolean, oldName: boolean) {
    log.log('MyComponent(nameChanged)', { newName, oldName });
  }

  // --- events

  @Event() testEvent: EventEmitter<any>;

  // --- listeners

  @Listen('click', {
    passive: true,
  })
  onClick() {
    log.log('MyComponent(onClick)');
  }

  // --- methods

  // --- hooks

  connectedCallback() {
    log.log('MyComponent(connectedCallback)');
  }

  disconnectedCallback() {
    log.log('MyComponent(disconnectedCallback)');
  }

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

  componentShouldUpdate(
    newVal: any,
    oldVal: any,
    propName: string
  ): boolean | void {
    log.log('MyComponent(componentShouldUpdate)', { newVal, oldVal, propName });
  }

  componentWillRender(): Promise<void> | void {
    log.log('MyComponent(componentWillRender)');
  }

  componentDidRender() {
    log.log('MyComponent(componentDidRender)');
  }

  componentWillUpdate(): Promise<void> | void {
    log.log('MyComponent(componentWillUpdate)');
  }

  componentDidUpdate() {
    log.log('MyComponent(componentDidUpdate)');
  }

  render() {
    log.log('MyComponent(render)');

    return (
      <Host>
        Hello, World! I'm <span>{this.name}</span>
      </Host>
    );
  }
}
