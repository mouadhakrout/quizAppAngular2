import {Test} from '../Models/test';
export class Candidate {
	
  id: number;
  firstName: string = '';
  lastname: string = '';
  phone:	number;
  email:	string = '';
  score:	number;
  tests:	Test[];
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
