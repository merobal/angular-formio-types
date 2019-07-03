import { Component } from '../component';
import { ExtendedComponentSchema } from './schema';

export interface ElementInfo {
  type: string;
  component: ExtendedComponentSchema;
  changeEvent: string;
  attr: Object;
}

export class BaseComponent extends Component {
  constructor(component: any, options: any, data: any);
  static schema(sources: ExtendedComponentSchema): ExtendedComponentSchema;
  static editForm: ExtendedComponentSchema[];
  elementInfo(): ElementInfo;
  createLabel(container: HTMLElement): void;
}
