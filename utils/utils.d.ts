import moment from 'moment';

export * from './builder';
export * from './formUtils';
export type AnyForJSON = { [key: string]: any } | any; // WIP type

export namespace Utils {
  function evaluate(
    func: any,
    args: { component: any; form: any; instance: any; row: any; data: any } | any,
    ret: any,
    tokenize: any,
  ): any;
  function getRandomComponentId(): string;
  function getPropertyValue(style: CSSStyleDeclaration, prop: string): number;
  function getElementRect(element: any): { x: number; y: number; width: number; height: number };
  function boolValue(value: boolean | string): boolean;
  function isMongoId(text: any): any;
  function checkCalculated(component: { calculateValue?: any; key: any } | any, submission: any, rowData: any): void;
  function checkSimpleConditional(
    component: any /* unused */,
    condition: { eq: any; show: any; when: any } & any,
    row: any,
    data: any,
  ): boolean;
  function checkCustomConditional(
    component: any /* unused */,
    custom: string | any,
    row: any,
    data: any,
    form: any,
    variable: any,
    onError: any,
    instance: { evaluate?: any } | any,
  ): any;
  function checkJsonConditional(
    component: { key: string | any } | any,
    json: AnyForJSON,
    row: any,
    data: any,
    form: any,
    onError: any,
  ): any;
  function checkCondition(
    component: { customConditional: any; conditional: { when: any; json: AnyForJSON } } | any,
    row: any,
    data: any,
    form: any,
    instance: any,
  ): boolean;
  function checkTrigger(
    component: any,
    trigger: { type: string; simple: any; json: AnyForJSON; javascript: any } | any,
    row: any,
    data: any,
    form: any,
    instance: any,
  ): boolean | any;
  function setActionProperty(
    component: any,
    action: { property: { type: string | any; value: any } | any; state: boolean | any; text: any },
    row: any,
    data: any,
    result: any,
    instance?: { interpolate: (textValue: any, evalData: any) => any | any },
  ): any;
  function interpolateTemplate(template: string): any;
  function addTemplateHash(template: string): number;
  function interpolate(rawTemplate: number | string, data: any): any;
  function uniqueName(name: string, template: string, evalContext: Object): string;
  function guid(): string;
  function getDateSetting(date: any): null | Date;
  function isValidDate(date: any): boolean;
  function currentTimezone(): string;
  function offsetDate(date: Date, timezone: string): { date: Date; abbr: string };
  function zonesLoaded(): boolean;
  function shouldLoadZones(timezone: string): boolean;
  function loadZones(timezone?: string): Promise<undefined>;
  function momentDate(value: moment.MomentInput, format: string, timezone: string): moment.Moment;
  function formatDate(value: moment.MomentInput, format: string, timezone: string): string;
  function formatOffset(
    formatFn: (date: any, format: any) => string,
    date: Date | any,
    format: string | any,
    timezone: string,
  ): string;
  function getLocaleDateFormatInfo(locale: string | string[]): { dayFirst: boolean };
  function convertFormatToFlatpickr(format: string): string;
  function convertFormatToMoment(format: string): string;
  function convertFormatToMask(format: string): string;
  function getInputMask(mask: string | RegExp[]): RegExp[];
  function matchInputMask(value: string | RegExp, inputMask?: string | RegExp): boolean;
  function getNumberSeparators(lang: string): { delimiter: string; decimalSeparator: string };
  function getNumberDecimalLimit(component: any): number;
  function getCurrencyAffixes(input: {
    currency: string;
    decimalLimit: number;
    decimalSeparator: string;
    lang: string | string[];
  }): { prefix: string; suffix: string };
  function fieldData(data: Object, component: { key: string | any[]; multiple: boolean | any } | any): any;
  function delay(fn: Function, delay: number, args: any[]): any;
  function iterateKey(key: string): string;
  function uniqueKey(map: Object, base: string): string;
  function bootstrapVersion(options: { bootstrap?: any } | any): number;
  function unfold(e: any): any;
  const firstNonNil: any;
  function withSwitch(a: any, b: any): [Function, Function];
  function observeOverload(callback: Function, options?: { limit?: number; delay?: number }): any;
}
