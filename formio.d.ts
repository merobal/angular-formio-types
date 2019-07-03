import { BaseComponent } from './components/base';

export namespace Formio {
  namespace Components {
    function addComponent(name: string, comp: Object): void;
    function setComponent(name: string, comp: Object): void;
    namespace components {
      class base extends BaseComponent {}
    }
  }
}
