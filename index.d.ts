import { ExtendedSchema } from './schema';
export { ExtendedSchema, Schema } from './schema';
export * from './utils/utils';

export class Component {
  constructor(options: Object, id: string);
  ce(type: string, attr?: Object, children?: any): HTMLElement;
}

export class BaseComponent extends Component {
  constructor(component: any, options: any, data: any);
  static schema(sources: ExtendedSchema): ExtendedSchema;
  static editForm: any;
  elementInfo(): any;
  createLabel(container: HTMLElement): void;
}

export namespace Formio {
  namespace Components {
    function addComponent(name: string, comp: Object): void;
    function setComponent(name: string, comp: Object): void;
    namespace components {
      class base extends BaseComponent {}
    }
  }
}

export type FormBuilder = any;
