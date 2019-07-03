import { Component } from '../component';
import { ExtendedComponentSchema } from './schema';

export interface ElementInfo {
  type: string;
  component: ExtendedComponentSchema;
  changeEvent: string;
  attr: Object;
}

export interface BuilderInfo {
  title: string;
  group: string;
  icon: string;
  documentation?: string;
  weight?: number;
  schema?: ExtendedComponentSchema;
}

export class BaseComponent extends Component {
  constructor(component: any, options: any, data: any);
  static schema(sources: ExtendedComponentSchema): ExtendedComponentSchema;
  static editForm: ExtendedComponentSchema[];
  elementInfo(): ElementInfo;
  createLabel(container: HTMLElement): void;
}
