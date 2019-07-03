export namespace Builder {
  function uniquify(form: Object, component: Object): any;
  const additionalShortcuts: { button: ['Enter', 'Esc'] };
  function getAlphaShortcuts(): string[];
  function getAdditionalShortcuts(type: string): string[];
  function getBindedShortcuts(components: any, input: any): any[];
  function getAvailableShortcuts(form: { components: any } | any, component: { type: any } | any): string[];
}
