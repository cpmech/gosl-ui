import { any2type } from '@cpmech/js2ts';
import { SimpleStore, IQueryFunction } from '@cpmech/simple-state';
import { WS_SERVER } from './config';
import { ICurves, newZeroCurve } from './curves';

const refCurve = newZeroCurve();

const optional = {
  z: true,
};

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
  curves: ICurves;
}

const newZeroState = (): IState => ({
  webSocket: null,
  curves: { list: [] },
});

const onLoad = async (query: IQueryFunction, itemId: string): Promise<IState> => {
  try {
    const state = newZeroState();
    state.webSocket = await connect();
    return state;
  } catch (_) {
    throw new Error('Cannot connect to server via websocket');
  }
};

export class Store extends SimpleStore<IState, null> {
  constructor() {
    super(newZeroState, onLoad, undefined, undefined);
  }

  listen = () => {
    const ws = this.state.webSocket;
    if (ws) {
      ws.onmessage = (event) => {
        console.log(event);
        const data = JSON.parse(event.data);
        const res = any2type(refCurve, data, true, optional);
        console.log('>>> res = ', res);
        if (res) {
          this.begin();
          this.state.curves.list.push(res);
          this.end();
        }
      };
    }
  };
}
