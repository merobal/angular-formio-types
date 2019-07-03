export namespace Component {
  function on(event: string, cb: Function, internal: boolean): any;
  function off(event: string): void;
  function emit(event: string, data: Object): void;
  function addEventListener(obj: HTMLElement, type: string, func: Function, persistent: boolean): any;
  function removeEventListener(obj: Object, type: any): any;
  function destroy(full: boolean): void;
  function appendTo(element: any, container: any): any;
  function prependTo(element: HTMLElement, container: HTMLElement): any;
  function removeChildFrom(element: HTMLElement, container: HTMLElement): any;
  function ce(type: string, attr?: Object, children?: HTMLElement | string | Array<HTMLElement | string>): HTMLElement;
  function appendChild(element: any, child: any): any;
  function maskPlaceholder(mask: HTMLElement): string;
  function setInputMask(input: HTMLElement, inputMask: string, placeholder: boolean): void;
  function t(text: string, params: Object): string;
  function text(text: any): Text;
  function attr(element: HTMLElement, attr: Object): void;
  function hasClass(element: HTMLElement | any, className: string): boolean;
  function addClass(element: HTMLElement, className: string): any;
  function removeClass(element: HTMLElement, className: string): any;
  function empty(element: HTMLElement): void;
  function iconClass(name: string, spinning: boolean): string;
  function getIcon(name: string): HTMLElement;
  function evalContext(additional: any): any;
  function interpolate(string: any, data: any): any;
  function evaluate(
    func: any,
    args: { component: any; form: any; instance: any; row: any; data: any } | any,
    ret: any,
    tokenize: any,
  ): any;
  function hook(): any;
}
