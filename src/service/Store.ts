import { sleep } from '@cpmech/basic';
import { SimpleStore, IQueryFunction } from '@cpmech/simple-state';

interface IState {
  webSocket: WebSocket | null;
  error: string;
}

const newZeroState = (): IState => ({
  webSocket: null,
  error: '',
});

const onLoad = async (query: IQueryFunction, itemId: string): Promise<IState> => {
  await sleep(2000);
  try {
    const ws = new WebSocket('ws://localhost:8081/observe');
    return { webSocket: ws, error: '' };
  } catch (error) {
    return { webSocket: null, error };
  }
};

export class Store extends SimpleStore<IState, null> {
  constructor() {
    super(newZeroState, onLoad, undefined, undefined);
  }
}
