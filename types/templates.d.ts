export class Templates {
  static get templates(): any;
  static addTemplate(name: string, template: any): void;
  static setTemplate(name: string, template: any): void;

  static set current(templates: any);
  static get current(): any;

  static get defaultTemplates(): any;

  static set framework(framework: any);
  static get framework(): any;
}
