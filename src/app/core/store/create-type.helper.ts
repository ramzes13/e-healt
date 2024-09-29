export const createType =
  (store: string) =>
  (action: string): string =>
    `[${store.toLocaleUpperCase()}] ${action}`;
