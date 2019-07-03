export namespace FormUtils {
  function isLayoutComponent(component: { columns: any; rows: any; components: any } | any): boolean;
  function eachComponent(components: any[], fn: Function, includeAll: boolean, path: string, parent: Object): any;
  function matchComponent(component: any, query: any): boolean;
  function getComponent(components: any, key: string | Object | any, includeAll: boolean): any;
  function searchComponents(components: any, query: any): any;
  function findComponent(components: any, key: any, path: any, fn: Function): boolean;
  function removeComponent(components: any[], path: any): void;
  function generateFormChange(
    type: string | any,
    data: { schema: any; parent: { key: any; components: any } | any; originalComponent: any },
  ): {
    op: string;
    key: any;
    container?: any;
    index?: number;
    component?: any;
    patches?: any;
  };
  function applyFormChanges(form: any, changes: any[]): { form: any; failed: any[] };
  function flattenComponents(components: any, includeAll: boolean): any;
  function hasCondition(component: Object): boolean;
  function parseFloatExt(value: any): number;
  function formatAsCurrency(value: any): string;
  function escapeRegExCharacters(value: string): string;
  function getValue(submission: any, key: string): any;
  function getStrings(
    form: { components: any } | any,
  ): { key: any; type?: any; property: string; string: string | any };
}
