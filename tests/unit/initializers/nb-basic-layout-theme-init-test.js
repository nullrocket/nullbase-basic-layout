import Ember from 'ember';
import NbBasicLayoutThemeInitInitializer from 'dummy/initializers/nb-basic-layout-theme-init';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | nb basic layout theme init', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  NbBasicLayoutThemeInitInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
