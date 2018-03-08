import { Injectable }           from "@angular/core";
import {
  Http,
  Request,
  RequestMethod,
  Response
}                               from "@angular/http";
import { Observable }           from "rxjs/Observable";
import { HttpResponseHandler }  from './httpResponseHandler.service';
import { HttpAdapter }          from './http.adapter';
import { ConfigService }        from '../../../app-config.service';
import {
  methodBuilder,
  paramBuilder
}                               from './utils.service';

/**
 * Supported @Produces media types
 */
export enum MediaType {
  JSON,
  FORM_DATA
}

@Injectable()
export class HttpService {

  public constructor(
    protected http: Http,
    protected configService: ConfigService,
    protected responseHandler: HttpResponseHandler) {
  }

  protected getBaseUrl(): string {
    return this.configService.get('api').baseUrl;
  }

  protected getDefaultHeaders(): Object {
    return {
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE1MjA1MjI5NDMsImV4cCI6MTUyMDUyNjU0MywibmJmIjoxNTIwNTIyOTQzLCJqdGkiOiJGVEhsZ0tnM1FjQ0lyTVhOIiwic3ViIjoxLCJwcnYiOiI5NGRiZDk2MWFhZWYwZTNjZTY2YWQ3ZDUwZTY0NzcxNzYwOWRkYTI0In0.Bl_UIiz-ttBdTfj-iY1f2wykIokSr9wdNsJk1SED6bc'
    };
  }

  /**
  * Request Interceptor
  *
  * @method requestInterceptor
  * @param {Request} req - request object
  */
  protected requestInterceptor(req: Request) {}

  /**
  * Response Interceptor
  *
  * @method responseInterceptor
  * @param {Response} observableRes - response object
  * @returns {Response} res - transformed response object
  */
  protected responseInterceptor(observableRes: Observable<any>, adapterFn?: Function): Observable<any> {
    return observableRes
    .map(res => HttpAdapter.baseAdapter(res, adapterFn))
    .catch((err, source) => this.responseHandler.onCatch(err, source));
  }
}