import { Component } from './_classes/component/component';
import { Input } from './_classes/input/input';
import { Multivalue } from './_classes/multivalue/multivalue';
import { NestedComponent } from './_classes/nested/nestedComponent';

export namespace Components {
  function setComponents(comps: Object): void;
  function setComponent(name: string, comp: Object): void;
  function addComponent(name: string, comp: Object): void;
  function create(component: Object, options: Object, data?: any): Object;
  namespace components {
    class base extends Component {}
    class input extends Input {}
    class nested extends NestedComponent {}
    class multivalue extends Multivalue {}
  }
}
