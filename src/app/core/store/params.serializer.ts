import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { RouterStateSerializer } from '@ngrx/router-store';

import { RouterState } from './params.types';

const getNestedParams = (
  route: ActivatedRouteSnapshot,
  params: Record<string, string> = {},
): Record<string, string> => {
  if (!route.children.length) return params;

  return route.children.reduce<Record<string, string>>(
    (acc, child) => ({ ...acc, ...getNestedParams(child, { ...params, ...child.params }) }),
    {},
  );
};

export class ParamsSerializer implements RouterStateSerializer<RouterState> {
  serialize({ url, root, root: { queryParams } }: RouterStateSnapshot): RouterState {
    const params = getNestedParams(root);

    return { url, params, queryParams };
  }
}
