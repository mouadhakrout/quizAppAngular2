export class Test {
  id: number;
  title: string = '';
  techno: string = '';
  level: string = '';
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
