export class Component {
  constructor(options: Object, id: string);
  on(event: string, cb: Function, internal: boolean): any;
  off(event: string): void;
  emit(event: string, data: Object): void;
  addEventListener(obj: HTMLElement, type: string, func: Function, persistent?: boolean): any;
  removeEventListener(obj: Object, type: any): any;
  destroy(full: boolean): void;
  appendTo(element: any, container: any): any;
  prependTo(element: HTMLElement, container: HTMLElement): any;
  removeChildFrom(element: HTMLElement, container: HTMLElement): any;
  ce(type: string, attr?: Object, children?: HTMLElement | string | Array<HTMLElement | string>): HTMLElement;
  appendChild(element: any, child: any): any;
  maskPlaceholder(mask: HTMLElement): string;
  setInputMask(input: HTMLElement, inputMask: string, placeholder: boolean): void;
  t(text: string, params: Object): string;
  text(text: any): Text;
  attr(element: HTMLElement, attr: Object): void;
  hasClass(element: HTMLElement | any, className: string): boolean;
  addClass(element: HTMLElement, className: string): any;
  removeClass(element: HTMLElement, className: string): any;
  empty(element: HTMLElement): void;
  iconClass(name: string, spinning: boolean): string;
  getIcon(name: string): HTMLElement;
  evalContext(additional: any): any;
  interpolate(string: any, data: any): any;
  evaluate(
    func: any,
    args: { component: any; form: any; instance: any; row: any; data: any } | any,
    ret: any,
    tokenize?: any,
  ): any;
  hook(...args: any): any;
}
