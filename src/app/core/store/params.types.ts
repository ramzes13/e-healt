import { Params } from '@angular/router';

export interface RouterState {
  url: string;
  params: Params;
  queryParams: Params;
}

export type Param = 'transactionId' | 'siteId' | 'offerId';
export type QueryParam = string | number;
