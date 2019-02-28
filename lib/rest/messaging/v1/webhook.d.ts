/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { SerializableClass } from '../../../interfaces';

/**
 * Initialize the WebhookList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function WebhookList(version: V1): WebhookListInstance;

/**
 * Options to pass to update
 *
 * @property postWebhookRetryCount - The number of retries in case of post-event webhook request failures.
 * @property postWebhookUrl - The absolute url the post-event webhook request should be sent to.
 * @property preWebhookRetryCount - The number of retries in case of pre-event webhook request failures.
 * @property preWebhookUrl - The absolute url the pre-event webhook request should be sent to.
 * @property webhookFilters - The list of webhook event triggers that are enabled for this Service.
 * @property webhookMethod - The HTTP method to be used when sending a webhook request.
 */
interface WebhookInstanceUpdateOptions {
  postWebhookRetryCount?: number;
  postWebhookUrl?: string;
  preWebhookRetryCount?: number;
  preWebhookUrl?: string;
  webhookFilters?: string[];
  webhookMethod?: string;
}

interface WebhookListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WebhookContext;
  /**
   * Constructs a webhook
   */
  get(): WebhookContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface WebhookPayload extends WebhookResource, Page.TwilioResponsePayload {
}

interface WebhookResource {
  account_sid: string;
  post_webhook_retry_count: number;
  post_webhook_url: string;
  pre_webhook_retry_count: number;
  pre_webhook_url: string;
  service_sid: string;
  url: string;
  webhook_filters: string;
  webhook_method: string;
}

interface WebhookSolution {
}


declare class WebhookContext {
  /**
   * Initialize the WebhookContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   */
  constructor(version: V1);

  /**
   * fetch a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WebhookInstance) => any): Promise<WebhookInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a WebhookInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WebhookInstanceUpdateOptions, callback?: (error: Error | null, items: WebhookInstance) => any): Promise<WebhookInstance>;
}


declare class WebhookInstance extends SerializableClass {
  /**
   * Initialize the WebhookContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V1, payload: WebhookPayload);

  private _proxy: WebhookContext;
  accountSid: string;
  /**
   * fetch a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WebhookInstance) => any): void;
  postWebhookRetryCount: number;
  postWebhookUrl: string;
  preWebhookRetryCount: number;
  preWebhookUrl: string;
  serviceSid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a WebhookInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WebhookInstanceUpdateOptions, callback?: (error: Error | null, items: WebhookInstance) => any): void;
  url: string;
  webhookFilters: string;
  webhookMethod: string;
}


declare class WebhookPage extends Page<V1, WebhookPayload, WebhookResource, WebhookInstance> {
  /**
   * Initialize the WebhookPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WebhookSolution);

  /**
   * Build an instance of WebhookInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WebhookPayload): WebhookInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { WebhookContext, WebhookInstance, WebhookList, WebhookListInstance, WebhookPage, WebhookPayload, WebhookResource, WebhookSolution }