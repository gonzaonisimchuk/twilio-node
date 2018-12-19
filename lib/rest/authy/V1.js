'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var FormList = require('./v1/form').FormList;
var ServiceList = require('./v1/service').ServiceList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the V1 version of Authy
 *
 * @property {Twilio.Authy.V1.ServiceList} services - services resource
 * @property {Twilio.Authy.V1.FormList} forms - forms resource
 *
 * @param {Twilio.Authy} domain - The twilio domain
 */
/* jshint ignore:end */
function V1(domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._services = undefined;
  this._forms = undefined;
}

_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype,
  'services', {
  get: function() {
    this._services = this._services || new ServiceList(this);
    return this._services;
  }
});

Object.defineProperty(V1.prototype,
  'forms', {
  get: function() {
    this._forms = this._forms || new FormList(this);
    return this._forms;
  }
});

module.exports = V1;