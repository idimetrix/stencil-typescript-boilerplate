/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
export namespace Components {
  interface MyComponent {
    /**
     * The first name
     */
    first: string;
    /**
     * The last name
     */
    last: string;
    /**
     * The middle name
     */
    middle: string;
  }
  interface MyTest {}
  interface MyTest2 {}
}
declare global {
  interface HTMLMyComponentElement
    extends Components.MyComponent,
      HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLMyTestElement extends Components.MyTest, HTMLStencilElement {}
  var HTMLMyTestElement: {
    prototype: HTMLMyTestElement;
    new (): HTMLMyTestElement;
  };
  interface HTMLMyTest2Element extends Components.MyTest2, HTMLStencilElement {}
  var HTMLMyTest2Element: {
    prototype: HTMLMyTest2Element;
    new (): HTMLMyTest2Element;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'my-test': HTMLMyTestElement;
    'my-test2': HTMLMyTest2Element;
  }
}
declare namespace LocalJSX {
  interface MyComponent {
    /**
     * The first name
     */
    first?: string;
    /**
     * The last name
     */
    last?: string;
    /**
     * The middle name
     */
    middle?: string;
  }
  interface MyTest {}
  interface MyTest2 {}
  interface IntrinsicElements {
    'my-component': MyComponent;
    'my-test': MyTest;
    'my-test2': MyTest2;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'my-component': LocalJSX.MyComponent &
        JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'my-test': LocalJSX.MyTest & JSXBase.HTMLAttributes<HTMLMyTestElement>;
      'my-test2': LocalJSX.MyTest2 & JSXBase.HTMLAttributes<HTMLMyTest2Element>;
    }
  }
}
