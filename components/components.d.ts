export class Components {
  static readonly components: any;
  static setComponents(comps: Object): void;
  static setComponent(name: string, comp: Object): void;
  static addComponent(name: string, comp: Object): void;
  static create(component: Object, options: Object, data?: any): Object;
}
