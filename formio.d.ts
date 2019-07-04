export class Formio {
  constructor(url: string, options?: Object);
  static namespace: string;
  static formOnly?: boolean;
  static events: any; // EventEmitter2
  static cache: Object;
  public formUrl?: string;
  public formsUrl?: string;
  public submissionUrl?: string;
  public submissionsUrl?: string;
  static createForm(element: any, form: string | Object, options?: Object): Promise<any>;
  static setBaseUrl(url: string): void;
  static setProjectUrl(url: string): void;
  static setAuthUrl(url: string): void;
  static getToken(options?: any): any;
  static makeStaticRequest(url: string, method?: string, data?: any, opts?: Object): any;
  static makeRequest(formio?: Formio, type?: string, url?: string, method?: string, data?: any, opts?: Object): any;
  static currentUser(formio?: Formio, options?: Object): any;
  static logout(formio?: Formio, options?: Object): any;
  static clearCache(): void;
  static setUser(user: any, opts?: Object): any;
  loadForm(query?: any, opts?: Object): any;
  loadForms(query?: any, opts?: Object): any;
  loadSubmissions(query?: any, opts?: Object): any;
  userPermissions(
    user?: any,
    form?: any,
    submission?: any,
  ): Promise<{ create: boolean; read: boolean; edit: boolean; delete: boolean }>;
  createform(form: Object): Promise<any>;
  saveForm(data?: any, opts?: Object): any;
  saveSubmission(data?: any, opts?: Object): any;
  deleteForm(opts?: Object): any;
  deleteSubmission(opts?: Object): any;
}
