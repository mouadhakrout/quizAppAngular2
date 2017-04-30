import { Injectable } from '@angular/core';
import {Test} from '../Models/test';

@Injectable()
export class TestDataService {
 // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for test's
  tests: Test[] = [];

  constructor() {
  }

  // Simulate POST /tests
  addTest(test: Test): TestDataService {
    if (!test.id) {
      test.id = ++this.lastId;
    }
    this.tests.push(test);
    return this;
  }

  // Simulate DELETE /tests/:id
  deleteTestById(id: number): TestDataService {
    this.tests = this.tests
      .filter(test => test.id !== id);
    return this;
  }

  // Simulate PUT /tests/:id
  updateTestById(id: number, values: Object = {}): Test {
    let test = this.getTestById(id);
    if (!test) {
      return null;
    }
    Object.assign(test, values);
    return test;
  }

  // Simulate GET /tests
  getAllTests(): Test[] {
    return this.tests;
  }

  // Simulate GET /tests/:id
  getTestById(id: number): Test {
    return this.tests
      .filter(test => test.id === id)
      .pop();
  }

  // Toggle test complete

}
