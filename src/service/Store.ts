import { sleep } from '@cpmech/basic';
import { SimpleStore, IQueryFunction } from '@cpmech/simple-state';
import { WS_SERVER } from './config';

const connect = (): Promise<WebSocket> => {
  return new Promise((resolve, reject) => {
    const server = new WebSocket(WS_SERVER);
    server.onopen = () => {
      resolve(server);
    };
    server.onerror = (err) => {
      reject(err);
    };
  });
};

interface IState {
  webSocket: WebSocket | null;
}

const newZeroState = (): IState => ({
  webSocket: null,
});

const onLoad = async (query: IQueryFunction, itemId: string): Promise<IState> => {
  await sleep(2000);
  try {
    const ws = await connect();
    return { webSocket: ws };
  } catch (_) {
    throw new Error('Cannot connect to server via websocket');
  }
};

export class Store extends SimpleStore<IState, null> {
  constructor() {
    super(newZeroState, onLoad, undefined, undefined);
  }
}
