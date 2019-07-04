import { BaseComponent } from './components/base';

export class Formio {
  constructor(url: string, options: Object);
}

export namespace Formio {
  function setBaseUrl(url: string): void;
  function setProjectUrl(url: string): void;
  namespace Components {
    function addComponent(name: string, comp: Object): void;
    function setComponent(name: string, comp: Object): void;
    namespace components {
      class base extends BaseComponent {}
    }
  }
}
