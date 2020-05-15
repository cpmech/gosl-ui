import { Store } from './Store';

export const store = new Store();

(async () => {
  await store.load('');
  if (!store.error) {
    store.listen();
  }
})();
