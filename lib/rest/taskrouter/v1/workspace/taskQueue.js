'use strict';

var ListResource = require('../../../../base/ListResource');
var TaskQueuesStatisticsList = require('./taskQueue/taskQueuesStatistics');
var values = require('../../../../base/values');

var TaskQueueList;
var TaskQueueInstance;
var TaskQueueContext;

/**
 * Initialize the TaskQueueList
 *
 * :param Version version: Version that contains the resource
 * :param workspaceSid: The workspace_sid
 *
 * @returns TaskQueueList
 */
function TaskQueueList(version, workspaceSid) {
  function TaskQueueListInstance() {
  }

  // Path Solution
  TaskQueueListInstance._solution = {
    workspaceSid: workspaceSid,
  };
  TaskQueueListInstance._uri = _.template(
    '/Workspaces/{workspace_sid}/TaskQueues',
    this._solution
  );

  // Components
  TaskQueueListInstance._statistics = undefined;

  /**
   * Streams TaskQueueInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.evaluateWorkerAttributes] - The evaluate_worker_attributes
   * @param {number} [opts.limit] -
   *          Upper limit for the number of records to return.
   *                            list() guarantees never to return more than limit.
   *                            Default is no limit
   * @param {number} [opts.pageSize=50] -
   *          Number of records to fetch per request,
   *                            when not set will use the default value of 50 records.
   *                            If no pageSize is defined but a limit is defined,
   *                            list() will attempt to read the limit with the most efficient
   *                            page size, i.e. min(limit, 1000)
   * @param {Function} opts.callback - A callback function to process records
   */
  TaskQueueListInstance.read = function stream(opts) {
    var limits = this._version.readLimits({
      limit: limit,
      pageSize: pageSize
    })

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists TaskQueueInstance records from the API as a list.
   *
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.evaluateWorkerAttributes] - The evaluate_worker_attributes
   * @param {number} [opts.limit]: Upper limit for the number of records to return.
   *                    list() guarantees never to return more than limit.
   *                    Default is no limit
   * @param {number} [opts.pageSize]: Number of records to fetch per request,
   *                    when not set will use the default value of 50 records.
   *                    If no page_size is defined but a limit is defined,
   *                    list() will attempt to read the limit with the most
   *                    efficient page size, i.e. min(limit, 1000)
   *
   * @returns {Array} A list of records
   */
  TaskQueueListInstance.read = function list(opts) {
    return this.page();
  };

  /**
   * Retrieve a single page of TaskQueueInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.friendlyName] - The friendly_name
   * @param string [opts.evaluateWorkerAttributes] - The evaluate_worker_attributes
   * @param {string} [opts.pageToken]: PageToken provided by the API
   * @param {number} [opts.pageNumber]: Page Number, this value is simply for client state
   * @param {number} [opts.pageSize]: Number of records to return, defaults to 50
   *
   * @returns Page of TaskQueueInstance
   */
  TaskQueueListInstance.read = function page(opts, page_token=values.unset,
                                              page_number=values.unset,
                                              page_size=values.unset) {
    var params = values.of({
      'Friendlyname': opts.friendlyName,
      'Evaluateworkerattributes': opts.evaluateWorkerAttributes,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size,
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params=params,
    );

    return TaskQueuePage(
      this._version,
      response,
      this._solution.workspaceSid,
    );
  };

  /**
   * Create a new TaskQueueInstance
   *
   * @param string friendlyName - The friendly_name
   * @param string reservationActivitySid - The reservation_activity_sid
   * @param string assignmentActivitySid - The assignment_activity_sid
   * @param string [opts.targetWorkers] - The target_workers
   * @param string [opts.maxReservedWorkers] - The max_reserved_workers
   *
   * @returns Newly created TaskQueueInstance
   */
  TaskQueueListInstance.create = function create(friendlyName,
                                                  reservationActivitySid,
                                                  assignmentActivitySid, opts) {
    var data = values.of({
      'Friendlyname': friendlyName,
      'Reservationactivitysid': reservationActivitySid,
      'Assignmentactivitysid': assignmentActivitySid,
      'Targetworkers': opts.targetWorkers,
      'Maxreservedworkers': opts.maxReservedWorkers,
    });

    var payload = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data,
    });

    return new TaskQueueInstance(
      this._version,
      payload,
      this._solution.workspaceSid
    );
  };

  Object.defineProperty(TaskQueueListInstance,
    'statistics', {
    get: function statistics() {
      if (!this._statistics) {
        this._statistics = new TaskQueuesStatisticsList(
          this._version,
          this._solution.workspaceSid
        );
      return this._statistics;
    },
  });

  return TaskQueueListInstance;
}

module.exports = {
  TaskQueueList: TaskQueueList,
  TaskQueueInstance: TaskQueueInstance,
  TaskQueueContext: TaskQueueContext
};