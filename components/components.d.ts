import { BaseComponent } from './base';

export namespace Components {
  function setComponents(comps: Object): void;
  function setComponent(name: string, comp: Object): void;
  function addComponent(name: string, comp: Object): void;
  function ensureKey(component: Object, options: Object): void;
  function create(component: Object, options: Object, data?: any, nobuild?: boolean): Object;
  namespace components {
    class base extends BaseComponent {}
  }
}
