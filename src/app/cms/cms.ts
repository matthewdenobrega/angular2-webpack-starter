/// <reference path="../../typings/_custom.d.ts" />

//Angular providers
import {bootstrap, FORM_PROVIDERS} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {
  Directive,
  Component,
  View,
  ElementRef,
  CORE_DIRECTIVES,
  FORM_DIRECTIVES
} from 'angular2/web_worker/worker';
import {RouteConfig, Router} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

/*
 * Angular Directives
 */
import {ROUTER_DIRECTIVES} from 'angular2/router';

/*
 * App Component
 * Top Level Component
 */
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'cms', // <cms></cms
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [require('!raw!sass!./cms.scss')],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./cms.html')
})
export class Cms {
  // These are member type
  title: string;

  // TypeScript public modifiers
  constructor() {
    this.title = 'CMS';
  }
}

//Bootstrap the CMS app
bootstrap(Cms, [
  FORM_PROVIDERS,
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS
]);
