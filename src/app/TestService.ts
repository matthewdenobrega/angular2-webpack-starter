import { Injectable } from 'angular2/angular2';

@Injectable()
export class TestService {
  private data: string;

  constructor() {
    this.data = 'test';
  }

  test(input: string) {
    return 'Test ' + input;
  }
}
