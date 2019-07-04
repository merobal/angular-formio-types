import { Component } from '../component';
import { ExtendedComponentSchema } from './schema';
import { ComponentSchema } from './schema.d';

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
  static schema(sources: ExtendedComponentSchema): ExtendedComponentSchema;
  static tableView(value: any, options: any): void;
  constructor(component: Object, options: Object, data: Object);
  readonly hasInput: any;
  readonly defaultSchema: any;
  readonly key: any;
  public currentForm: any;
  getModifiedSchema(schema: ComponentSchema, defaultSchema: ComponentSchema): ComponentSchema;
  readonly schema: ComponentSchema;
  t(text: string, params: Object): any;
  performInputMapping(input: any): any;
  getBrowserLanguage(): string | null;
  beforeNext(): any;
  beforeSubmit(): any;
  readonly submissionTimezone: string | any;
  readonly shouldDisable: boolean;
  build(state: any): void;
  attachRefreshEvent(refreshData: any): void;
  attachRefreshOn(): void;
  readonly viewOnly: boolean | any;
  viewOnlyBuild(): void;
  createViewOnlyElement(): HTMLElement;
  createViewOnlyLabel(container: any): void;
  createViewOnlyValue(container: any): void;
  setupValueElement(element: any): void;
  readonly defaultViewOnlyValue: '-';
  getView(value: any): string;
  updateItems(...args: any): void;
  updateViewOnlyValue(): void;
  createModal(): HTMLElement;
  readonly className: string;
  readonly customStyle: string;
  getElement(): HTMLElement;
  createElement(): HTMLElement;
  createWrapper(): boolean;
  evalContext(additional: any): any;
  readonly defaultValue: any;
  setPristine(pristine: boolean): void;
  addNewValue(value: any): void;
  addValue(): void;
  removeValue(index: number): void;
  buildRows(values: any): void;
  readonly allowReorder: boolean;
  addDraggable(containers: Element[]): void;
  getRowDragulaOptions(): { moves: (draggedElement: any, oldParent: any, clickedElement: any) => any };
  onRowDrop(droppedElement: any, newParent: any, oldParent: any, nextSibling: any): void;
  buildInput(container: HTMLElement, value: any): void;
  addButton(justIcon: boolean): HTMLElement;
  readonly name: string;
  readonly errorLabel: any;
  errorMessage(type: any): any;
  removeButton(index: number): HTMLElement;
  dragButton(): HTMLElement;
  labelOnTheLeft(position: string): boolean;
  labelOnTheRight(position: string): boolean;
  rightAlignedLabel(position: string): boolean;
  labelOnTheLeftOrRight(position: string): boolean;
  getLabelWidth(): number;
  getLabelMargin(): number;
  setInputStyles(input: any): void;
  labelIsHidden(): boolean;
  createLabel(container: HTMLElement): void;
  addShortcutToLabel(label: string, shortcut: string | RegExp): string;
  addShortcut(element: any, shortcut: any): void;
  removeShortcut(element: any, shortcut: any): void;
  createTooltip(container: HTMLElement, component: any, classes: string): void;
  createDescription(container: HTMLElement | any): void;
  createErrorElement(): void;
  addPrefix(input: HTMLElement, inputGroup: HTMLElement): HTMLElement;
  addSuffix(input: HTMLElement, inputGroup: HTMLElement): HTMLElement;
  addInputGroup(input: HTMLElement, container: HTMLElement): HTMLElement;
  setInputMask(input: HTMLElement, inputMask: string): void;
  createInput(container: HTMLElement): HTMLElement;
  readonly widget: any;
  createWidget(): any;
  redraw(shouldRedrawInBuilder: boolean): void;
  destroyInputs(): void;
  destroy(): any;
  renderTemplate(template: any, data: any, actions?: any[]): HTMLElement;
  renderElement(template: any, data: any, actions?: any[]): ChildNode;
  renderTemplateToElement(element: any, template: any, data: any, actions?: any[]): any;
  attachActions(element: any, actions: any[]): void;
  hasCondition(): boolean;
  conditionallyVisible(data: any): boolean;
  checkCondition(row: any, data: Object): boolean;
  checkConditions(data: any): any;
  readonly logic: any[];
  fieldLogic(data: any): any;
  applyActions(actions: any[], result: any, data: any, newComponent: any): boolean;
  addInputError(message: any, dirty: boolean): void;
  inContext(component: any): boolean;
  show(show: boolean, noClear: boolean): boolean;
  showElement(element: any, show: boolean): boolean;
  clearOnHide(show: boolean): void;
  public visible: any | boolean;
  public parentVisible: any | boolean;
  onChange(flags: Object, fromRoot: boolean): void;
  addInputSubmitListener(input: any): void;
  addInputEventListener(input: any): void;
  addInput(input: any, container: any): any;
  addFocusBlurEvents(element: any): void;
  readonly wysiwygDefault: {
    theme: string;
    placeholder: any | string;
    modules: {
      clipboard: {
        matchVisual: boolean;
      };
      toolbar: any[];
    };
  };
  addCKE(element: HTMLElement | any, settings: Object, onChange: (input: any) => any): any;
  addQuill(element: HTMLElement | any, settings: Object, onChange: (input: any) => any): any;
  readonly emptyValue: null;
  hasValue(data: Object): boolean;
  readonly value: any;
  readonly rootValue: any;
  public dataValue: any;
  splice(index: number | string): void;
  deleteValue(): void;
  getValueAt(index: number): any;
  getValue(): any;
  hasChanged(before: any, after: any): boolean;
  updateOnChange(flags: any, changed: boolean | any): boolean;
  updateValue(flags: any, value: any): any;
  readonly hasSetValue: boolean;
  restoreValue(): void;
  calculateValue(data: Object, flags: any): boolean;
  public label: any | string;
  getRoot(): BaseComponent;
  invalidMessage(data: any, dirty: boolean, ignoreCondition?: boolean): any;
  isValid(data: any, dirty: boolean): boolean;
  checkValidity(data: any, dirty: any | boolean, rowData: any): boolean;
  readonly validationValue: any;
  isEmpty(value: any): boolean;
  validateMultiple(value: any): boolean;
  readonly errors: any[];
  setCustomValidity(message: any, dirty: any): void;
  shouldSkipValidation(data: any, dirty: any, rowData: any): boolean;
  setValueAt(index: number, value: any, flags: any): void;
  getFlags(): any;
  readonly dataReady: any | Promise<any>;
  refresh(value: any): void;
  setValue(value: any, flags: any): boolean;
  resetValue(): void;
  asString(value: any): string;
  public disabled: boolean;
  setDisabled(element: any, disabled: any | boolean): void;
  setLoading(element: any, loading: any | boolean): void;
  selectOptions(select: any, tag: any, options: any, defaultValue: any): void;
  setSelectValue(select: any, value: any): void;
  clear(): any;
  elementInfo(): ElementInfo;
  autofocus(): void;
  focus(): void;
  append(element: HTMLElement): void;
  prepend(element: HTMLElement): void;
  removeChild(element: HTMLElement): void;
  attachLogic(): void;
}
