import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface ApiInterface {
    method: string;
    url: string;
    body?: any,
    options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        context?: HttpContext;
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    };
}
