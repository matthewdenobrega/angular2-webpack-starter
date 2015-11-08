/// <reference path="../../src/typings/_custom.d.ts" />

import {it, describe, expect, inject, injectAsync, beforeEachProviders, TestComponentBuilder} from 'angular2/testing';
import {provide} from 'angular2/angular2';
import {Http, Headers, ConnectionBackend, RequestOptions} from 'angular2/http';
import {App} from '../../src/app/app';
import {TestService} from '../../src/app/TestService';

import {BrowserDomAdapter} from 'angular2/src/core/dom/browser_adapter';
BrowserDomAdapter.makeCurrent();

class MockHttpService {
  constructor() {};

  get() {}
}

describe('App', () => {
  beforeEachProviders(() => [
    TestService,
    provide(Http, {useClass: MockHttpService})
  ]);

  it('expect component to be present', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(App).then((fixture) => {
      expect(fixture.debugElement).not.toBe(null);
    });
  }));

});
