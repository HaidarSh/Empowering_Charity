import { bU as commonjsGlobal, cb as eventsExports, bO as getDefaultExportFromCjs } from "./index-R4o_uq0C.js";
const getProtocol = (location) => {
  if (location === "injected") return "injected";
  if (location.endsWith(".ipc")) return "ipc";
  if (location.startsWith("wss://") || location.startsWith("ws://")) return "ws";
  if (location.startsWith("https://") || location.startsWith("http://")) return "http";
  return "";
};
var resolve$1 = (targets, presets2) => {
  return [].concat(...[].concat(targets).map((provider2) => {
    if (presets2[provider2]) {
      return presets2[provider2].map((location) => ({ type: provider2, location, protocol: getProtocol(location) }));
    } else {
      return { type: "custom", location: provider2, protocol: getProtocol(provider2) };
    }
  })).filter((provider2) => {
    if (provider2.protocol || provider2.type === "injected") {
      return true;
    } else {
      console.log('eth-provider | Invalid provider preset/location: "' + provider2.location + '"');
      return false;
    }
  });
};
var dist = {};
var payload = {};
Object.defineProperty(payload, "__esModule", { value: true });
payload.create = void 0;
function create(method, params = [], id, targetChain) {
  const payload2 = {
    id,
    method,
    params,
    jsonrpc: "2.0"
  };
  if (targetChain) {
    payload2.chainId = targetChain;
  }
  if (payload2.method === "eth_sendTransaction") {
    const mismatchedChain = isChainMismatch(payload2);
    if (mismatchedChain) {
      throw new Error(`Payload chainId (${mismatchedChain}) inconsistent with specified target chainId: ${targetChain}`);
    }
    return updatePayloadChain(payload2);
  }
  return payload2;
}
payload.create = create;
function isChainMismatch(payload2) {
  if (payload2.method !== "eth_sendTransaction")
    return false;
  const tx = payload2.params[0] || {};
  const chainId = tx.chainId;
  return "chainId" in tx && parseInt(chainId) !== parseInt(payload2.chainId || chainId);
}
function updatePayloadChain(payload2) {
  const tx = payload2.params[0] || {};
  return { ...payload2, params: [{ ...tx, chainId: tx.chainId || payload2.chainId }, ...payload2.params.slice(1)] };
}
var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(dist, "__esModule", { value: true });
const events_1 = __importDefault(eventsExports);
const payload_1 = payload;
class Provider extends events_1.default {
  constructor(connection) {
    super();
    this.promises = {};
    this.attemptedSubscriptions = /* @__PURE__ */ new Set();
    this.subscriptions = [];
    this.checkConnectionRunning = false;
    this.nextId = 1;
    this.connected = false;
    this.accounts = [];
    this.selectedAddress = void 0;
    this.coinbase = void 0;
    this.enable = this.enable.bind(this);
    this.doSend = this.doSend.bind(this);
    this.send = this.send.bind(this);
    this.sendBatch = this.sendBatch.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this.resumeSubscriptions = this.resumeSubscriptions.bind(this);
    this.sendAsync = this.sendAsync.bind(this);
    this.sendAsyncBatch = this.sendAsyncBatch.bind(this);
    this.isConnected = this.isConnected.bind(this);
    this.close = this.close.bind(this);
    this.request = this.request.bind(this);
    this.connection = connection;
    this.on("connect", this.resumeSubscriptions);
    this.connection.on("connect", () => this.checkConnection(1e3));
    this.connection.on("close", () => {
      this.connected = false;
      this.attemptedSubscriptions.clear();
      this.emit("close");
      this.emit("disconnect");
    });
    this.connection.on("payload", (payload2) => {
      const { id, method, error, result } = payload2;
      if (typeof id !== "undefined") {
        if (this.promises[id]) {
          const requestMethod = this.promises[id].method;
          if (requestMethod && ["eth_accounts", "eth_requestAccounts"].includes(requestMethod)) {
            const accounts = result || [];
            this.accounts = accounts;
            this.selectedAddress = accounts[0];
            this.coinbase = accounts[0];
          }
          payload2.error ? this.promises[id].reject(error) : this.promises[id].resolve(result);
          delete this.promises[id];
        }
      } else if (method && method.indexOf("_subscription") > -1) {
        this.emit(payload2.params.subscription, payload2.params.result);
        this.emit(method, payload2.params);
        this.emit("message", {
          type: payload2.method,
          data: {
            subscription: payload2.params.subscription,
            result: payload2.params.result
          }
        });
        this.emit("data", payload2);
      }
    });
    this.on("newListener", (event) => {
      if (Object.keys(this.eventHandlers).includes(event)) {
        if (!this.attemptedSubscription(event) && this.connected) {
          this.startSubscription(event);
          if (event === "networkChanged") {
            console.warn("The networkChanged event is being deprecated, use chainChanged instead");
          }
        }
      }
    });
    this.eventHandlers = {
      networkChanged: (netId) => {
        this.networkVersion = typeof netId === "string" ? parseInt(netId) : netId;
        this.emit("networkChanged", this.networkVersion);
      },
      chainChanged: (chainId) => {
        this.providerChainId = chainId;
        if (!this.manualChainId) {
          this.emit("chainChanged", chainId);
        }
      },
      chainsChanged: (chains) => {
        this.emit("chainsChanged", chains);
      },
      accountsChanged: (accounts) => {
        this.selectedAddress = accounts[0];
        this.emit("accountsChanged", accounts);
      },
      assetsChanged: (assets) => {
        this.emit("assetsChanged", assets);
      }
    };
  }
  get chainId() {
    return this.manualChainId || this.providerChainId;
  }
  async checkConnection(retryTimeout = 4e3) {
    if (this.checkConnectionRunning || this.connected)
      return;
    clearTimeout(this.checkConnectionTimer);
    this.checkConnectionTimer = void 0;
    this.checkConnectionRunning = true;
    try {
      this.networkVersion = await this.doSend("net_version", [], void 0, false);
      this.providerChainId = await this.doSend("eth_chainId", [], void 0, false);
      this.connected = true;
    } catch (e) {
      this.checkConnectionTimer = setTimeout(() => this.checkConnection(), retryTimeout);
      this.connected = false;
    } finally {
      this.checkConnectionRunning = false;
      if (this.connected) {
        this.emit("connect", { chainId: this.providerChainId });
      }
    }
  }
  attemptedSubscription(event) {
    return this.attemptedSubscriptions.has(event);
  }
  setSubscriptionAttempted(event) {
    this.attemptedSubscriptions.add(event);
  }
  async startSubscription(event) {
    console.debug(`starting subscription for ${event} events`);
    this.setSubscriptionAttempted(event);
    try {
      const eventId = await this.subscribe("eth_subscribe", event);
      this.on(eventId, this.eventHandlers[event]);
    } catch (e) {
      console.warn(`Unable to subscribe to ${event}`, e);
    }
  }
  resumeSubscriptions() {
    Object.keys(this.eventHandlers).forEach((event) => {
      if (this.listenerCount(event) && !this.attemptedSubscription(event))
        this.startSubscription(event);
    });
  }
  async enable() {
    const accounts = await this.doSend("eth_accounts");
    if (accounts.length > 0) {
      this.accounts = accounts;
      this.selectedAddress = accounts[0];
      this.coinbase = accounts[0];
      this.emit("enable");
      return accounts;
    } else {
      const err = new Error("User Denied Full Provider");
      err.code = "4001";
      throw err;
    }
  }
  doSend(rawPayload, rawParams = [], targetChain = this.manualChainId, waitForConnection = true) {
    const sendFn = (resolve2, reject) => {
      const method = typeof rawPayload === "object" ? rawPayload.method : rawPayload;
      const params = typeof rawPayload === "object" ? rawPayload.params : rawParams;
      const chainTarget = typeof rawPayload === "object" && rawPayload.chainId || targetChain;
      if (!method) {
        return reject(new Error("Method is not a valid string."));
      }
      try {
        const payload2 = (0, payload_1.create)(method, params, this.nextId++, chainTarget);
        this.promises[payload2.id] = {
          resolve: (result) => resolve2(result),
          reject,
          method: payload2.method
        };
        this.connection.send(payload2);
      } catch (e) {
        reject(e);
      }
    };
    if (this.connected || !waitForConnection) {
      return new Promise(sendFn);
    }
    return new Promise((resolve2, reject) => {
      const resolveSend = () => {
        clearTimeout(disconnectTimer);
        return resolve2(new Promise(sendFn));
      };
      const disconnectTimer = setTimeout(() => {
        this.off("connect", resolveSend);
        reject(new Error("Not connected"));
      }, 5e3);
      this.once("connect", resolveSend);
    });
  }
  async send(methodOrPayload, callbackOrArgs) {
    if (typeof methodOrPayload === "string" && (!callbackOrArgs || Array.isArray(callbackOrArgs))) {
      const params = callbackOrArgs;
      return this.doSend(methodOrPayload, params);
    }
    if (methodOrPayload && typeof methodOrPayload === "object" && typeof callbackOrArgs === "function") {
      const cb = callbackOrArgs;
      return this.sendAsync(methodOrPayload, cb);
    }
    return this.request(methodOrPayload);
  }
  sendBatch(requests) {
    return Promise.all(requests.map((payload2) => {
      return this.doSend(payload2.method, payload2.params);
    }));
  }
  async subscribe(type, method, params = []) {
    const id = await this.doSend(type, [method, ...params]);
    this.subscriptions.push(id);
    return id;
  }
  async unsubscribe(type, id) {
    const success = await this.doSend(type, [id]);
    if (success) {
      this.subscriptions = this.subscriptions.filter((_id) => _id !== id);
      this.removeAllListeners(id);
      return success;
    }
  }
  async sendAsync(rawPayload, cb) {
    if (!cb || typeof cb !== "function")
      return new Error("Invalid or undefined callback provided to sendAsync");
    if (!rawPayload)
      return cb(new Error("Invalid Payload"));
    if (Array.isArray(rawPayload)) {
      const payloads = rawPayload.map((p) => ({ ...p, jsonrpc: "2.0" }));
      const callback = cb;
      return this.sendAsyncBatch(payloads, callback);
    } else {
      const payload2 = { ...rawPayload, jsonrpc: "2.0" };
      const callback = cb;
      try {
        const result = await this.doSend(payload2.method, payload2.params);
        callback(null, { id: payload2.id, jsonrpc: payload2.jsonrpc, result });
      } catch (e) {
        callback(e);
      }
    }
  }
  async sendAsyncBatch(payloads, cb) {
    try {
      const results = await this.sendBatch(payloads);
      const result = results.map((entry, index) => {
        return { id: payloads[index].id, jsonrpc: payloads[index].jsonrpc, result: entry };
      });
      cb(null, result);
    } catch (e) {
      cb(e);
    }
  }
  isConnected() {
    return this.connected;
  }
  close() {
    if (this.connection && this.connection.close)
      this.connection.close();
    this.off("connect", this.resumeSubscriptions);
    this.connected = false;
    const error = new Error("Provider closed, subscription lost, please subscribe again.");
    this.subscriptions.forEach((id) => this.emit(id, error));
    this.subscriptions = [];
    this.manualChainId = void 0;
    this.providerChainId = void 0;
    this.networkVersion = void 0;
    this.selectedAddress = void 0;
    this.coinbase = void 0;
  }
  async request(payload2) {
    return this.doSend(payload2.method, payload2.params, payload2.chainId);
  }
  setChain(chainId) {
    if (typeof chainId === "number")
      chainId = "0x" + chainId.toString(16);
    const chainChanged = chainId !== this.chainId;
    this.manualChainId = chainId;
    if (chainChanged) {
      this.emit("chainChanged", this.chainId);
    }
  }
}
dist.default = Provider;
const EventEmitter$4 = eventsExports;
let ConnectionManager$1 = class ConnectionManager extends EventEmitter$4 {
  constructor(connections2, targets, options) {
    super();
    this.targets = targets;
    this.options = options;
    this.connections = connections2;
    this.connected = false;
    this.status = "loading";
    this.interval = options.interval || 5e3;
    this.name = options.name || "default";
    this.inSetup = true;
    this.connect();
  }
  connect(index = 0) {
    if (this.connection && this.connection.status === "connected" && index >= this.connection.index) ;
    else if (this.targets.length === 0) ;
    else {
      const { protocol, location } = this.targets[index];
      this.connection = this.connections[protocol](location, this.options);
      const connectionErrorHandler = (err) => this.connectionError(index, err);
      this.connection.once("error", connectionErrorHandler);
      this.connection.on("connect", () => {
        this.connection.off("error", connectionErrorHandler);
        this.connection.once("error", (err) => this.onError(err));
        this.connection.once("close", () => {
          this.connected = false;
          this.emitClose();
          if (!this.closing) this.refresh();
        });
        this.connection.target = this.targets[index];
        this.connection.index = index;
        this.targets[index].status = this.connection.status;
        this.connected = true;
        this.inSetup = false;
        this.emit("connect");
      });
      this.connection.on("data", (data) => this.emit("data", data));
      this.connection.on("payload", (payload2) => this.emit("payload", payload2));
    }
  }
  onError(err) {
    if (this.listenerCount("error")) return this.emit("error", err);
    console.warn("[eth-provider] Uncaught connection error: " + err.message);
  }
  refresh(interval = this.interval) {
    clearTimeout(this.connectTimer);
    this.connectTimer = setTimeout(() => this.connect(), interval);
  }
  connectionError(index, err) {
    if (this.connection && this.connection.close) this.connection.close();
    this.targets[index].status = err;
    if (this.targets.length - 1 === index) {
      this.inSetup = false;
      this.refresh();
    } else {
      this.connect(++index);
    }
  }
  emitClose() {
    this.emit("close");
  }
  close() {
    this.closing = true;
    if (this.connection && this.connection.close && !this.connection.closed) {
      this.connection.close();
    } else {
      this.emit("close");
    }
    clearTimeout(this.connectTimer);
    clearTimeout(this.setupTimer);
  }
  error(payload2, message, code = -1) {
    this.emit("payload", { id: payload2.id, jsonrpc: payload2.jsonrpc, error: { message, code } });
  }
  send(payload2) {
    if (this.inSetup) {
      this.setupTimer = setTimeout(() => this.send(payload2), 100);
    } else if (this.connection.closed) {
      this.error(payload2, "Not connected", 4900);
    } else {
      this.connection.send(payload2);
    }
  }
};
var ConnectionManager_1 = ConnectionManager$1;
const EventEmitter$3 = eventsExports;
const EthereumProvider = dist.default;
const ConnectionManager2 = ConnectionManager_1;
const monitor = (provider2) => {
  function update(status) {
    provider2.status = status;
    if (provider2 instanceof EventEmitter$3) provider2.emit("status", status);
  }
  async function checkSyncing() {
    try {
      if (await provider2.send("eth_syncing")) {
        update("syncing");
      }
    } catch (e) {
    }
  }
  async function checkConnected() {
    if (provider2.inSetup) return setTimeout(checkConnected, 1e3);
    try {
      await provider2.send("eth_chainId");
      update("connected");
      setTimeout(checkSyncing, 500);
    } catch (e) {
      update("disconnected");
    }
  }
  update("loading");
  checkConnected();
  provider2.on("connect", () => checkConnected());
  provider2.on("close", () => update("disconnected"));
  return provider2;
};
var provider$1 = (connections2, targets, options) => {
  if (connections2.injected.__isProvider && targets.map((t) => t.type).indexOf("injected") > -1) {
    delete connections2.injected.__isProvider;
    return monitor(connections2.injected);
  }
  const provider2 = new EthereumProvider(new ConnectionManager2(connections2, targets, options));
  provider2.setMaxListeners(128);
  return monitor(provider2);
};
var presets$1 = (options = {}) => {
  return {
    injected: ["injected"],
    frame: ["ws://127.0.0.1:1248", "http://127.0.0.1:1248"],
    direct: ["ws://127.0.0.1:8546", "http://127.0.0.1:8545"],
    // IPC paths will be prepended in Node/Electron
    infura: [`wss://mainnet.infura.io/ws/v3/${options.infuraId}`, `https://mainnet.infura.io/v3/${options.infuraId}`],
    alchemy: [`wss://eth-mainnet.ws.alchemyapi.io/v2/${options.alchemyId}`, `https://eth-mainnet.alchemyapi.io/v2/${options.alchemyId}`],
    infuraGoerli: [`wss://goerli.infura.io/ws/v3/${options.infuraId}`, `https://goerli.infura.io/v3/${options.infuraId}`],
    alchemyGoerli: [`wss://eth-goerli.ws.alchemyapi.io/v2/${options.alchemyId}`, `https://eth-goerli.alchemyapi.io/v2/${options.alchemyId}`],
    infuraPolygon: [`https://polygon-mainnet.infura.io/v3/${options.infuraId}`],
    infuraArbitrum: [`https://arbitrum-mainnet.infura.io/v3/${options.infuraId}`],
    infuraOptimism: [`https://optimism-mainnet.infura.io/v3/${options.infuraId}`],
    infuraSepolia: [`wss://sepolia.infura.io/ws/v3/${options.infuraId}`, `https://sepolia.infura.io/v3/${options.infuraId}`],
    gnosis: ["https://rpc.gnosischain.com"],
    optimism: ["https://mainnet.optimism.io"]
  };
};
var injected$1;
var hasRequiredInjected;
function requireInjected() {
  if (hasRequiredInjected) return injected$1;
  hasRequiredInjected = 1;
  const EventEmitter2 = eventsExports;
  class InjectedConnection extends EventEmitter2 {
    constructor(_injected, options) {
      super();
      if (_injected) {
        setTimeout(() => this.onError(new Error("Injected web3 provider is not currently supported")), 0);
      } else {
        setTimeout(() => this.onError(new Error("No injected provider found")), 0);
      }
    }
    onError(err) {
      if (this.listenerCount("error")) this.emit("error", err);
    }
  }
  injected$1 = (injected2) => (options) => new InjectedConnection(injected2, options);
  return injected$1;
}
const EventEmitter$2 = eventsExports;
class UnavailableConnection extends EventEmitter$2 {
  constructor(message) {
    super();
    setTimeout(() => this.onError(new Error(message)), 0);
  }
  onError(err) {
    if (this.listenerCount("error")) this.emit("error", err);
  }
}
var unavailable = (message) => () => new UnavailableConnection(message);
let last, timeout;
var parse$3 = (res, cb) => {
  const values = [];
  res.replace(/\}[\n\r]?\{/g, "}|--|{").replace(/\}\][\n\r]?\[\{/g, "}]|--|[{").replace(/\}[\n\r]?\[\{/g, "}|--|[{").replace(/\}\][\n\r]?\{/g, "}]|--|{").split("|--|").forEach((data) => {
    if (last) data = last + data;
    let result;
    try {
      result = JSON.parse(data);
    } catch (e) {
      last = data;
      clearTimeout(timeout);
      timeout = setTimeout(() => cb(new Error("Parse response timeout")), 15 * 1e3);
      return;
    }
    clearTimeout(timeout);
    last = null;
    if (result) values.push(result);
  });
  cb(null, values);
};
const EventEmitter$1 = eventsExports;
const parse$2 = parse$3;
let WebSocket;
class WebSocketConnection extends EventEmitter$1 {
  constructor(_WebSocket, url, options) {
    super();
    this.socketListeners = [];
    WebSocket = _WebSocket;
    setTimeout(() => this.create(url, options), 0);
  }
  create(url, options) {
    if (!WebSocket) return this.onError(new Error("No WebSocket transport available"));
    try {
      this.socket = new WebSocket(url, [], { origin: options.origin });
    } catch (e) {
      return this.onError(e);
    }
    this.addSocketListener("error", this.onError.bind(this));
    this.addSocketListener("open", this.onOpen.bind(this));
    this.addSocketListener("close", this.onClose.bind(this));
  }
  addSocketListener(event, handler) {
    this.socket.addEventListener(event, handler);
    this.socketListeners.push({ event, handler });
  }
  removeAllSocketListeners() {
    this.socketListeners.forEach(({ event, handler }) => {
      this.socket.removeEventListener(event, handler);
    });
    this.socketListeners = [];
  }
  onOpen() {
    this.emit("connect");
    this.addSocketListener("message", this.onMessage.bind(this));
  }
  onMessage(message) {
    const data = typeof message.data === "string" ? message.data : "";
    parse$2(data, (err, payloads) => {
      if (err) return;
      payloads.forEach((load) => {
        if (Array.isArray(load)) {
          load.forEach((payload2) => this.emit("payload", payload2));
        } else {
          this.emit("payload", load);
        }
      });
    });
  }
  onError(err) {
    if (this.listenerCount("error")) this.emit("error", err);
  }
  onClose(e) {
    ({
      reason: e ? e.reason : "unknown",
      code: e ? e.code : "unknown"
    });
    if (this.socket) {
      this.removeAllSocketListeners();
      this.socket = null;
    }
    this.closed = true;
    this.emit("close");
    this.removeAllListeners();
  }
  close() {
    if (this.socket && WebSocket && this.socket.readyState !== WebSocket.CLOSED) {
      this.removeAllSocketListeners();
      this.addSocketListener("error", () => {
      });
      this.addSocketListener("close", this.onClose.bind(this));
      if (this.socket.terminate) {
        this.socket.terminate();
      } else {
        this.socket.close();
      }
    } else {
      this.onClose();
    }
  }
  error(payload2, message, code = -1) {
    this.emit("payload", { id: payload2.id, jsonrpc: payload2.jsonrpc, error: { message, code } });
  }
  send(payload2) {
    try {
      if (this.socket && this.socket.readyState === this.socket.CONNECTING) {
        setTimeout((_) => this.send(payload2), 10);
      } else if (!this.socket || this.socket.readyState > 1) {
        this.connected = false;
        this.error(payload2, "Not connected");
      } else {
        this.socket.send(JSON.stringify(payload2));
      }
    } catch (e) {
      this.error(payload2, e.message);
    }
  }
}
var ws$1 = (WebSocket2) => (url, cb) => new WebSocketConnection(WebSocket2, url, cb);
var commonjsBrowser = {};
var v1$1 = {};
var rng$1 = {};
Object.defineProperty(rng$1, "__esModule", {
  value: true
});
rng$1.default = rng;
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
var stringify$1 = {};
var validate$1 = {};
var regex = {};
Object.defineProperty(regex, "__esModule", {
  value: true
});
regex.default = void 0;
var _default$c = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
regex.default = _default$c;
Object.defineProperty(validate$1, "__esModule", {
  value: true
});
validate$1.default = void 0;
var _regex = _interopRequireDefault$8(regex);
function _interopRequireDefault$8(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function validate(uuid2) {
  return typeof uuid2 === "string" && _regex.default.test(uuid2);
}
var _default$b = validate;
validate$1.default = _default$b;
Object.defineProperty(stringify$1, "__esModule", {
  value: true
});
stringify$1.default = void 0;
stringify$1.unsafeStringify = unsafeStringify;
var _validate$2 = _interopRequireDefault$7(validate$1);
function _interopRequireDefault$7(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
  const uuid2 = unsafeStringify(arr, offset);
  if (!(0, _validate$2.default)(uuid2)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid2;
}
var _default$a = stringify;
stringify$1.default = _default$a;
Object.defineProperty(v1$1, "__esModule", {
  value: true
});
v1$1.default = void 0;
var _rng$1 = _interopRequireDefault$6(rng$1);
var _stringify$2 = stringify$1;
function _interopRequireDefault$6(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
let _nodeId;
let _clockseq;
let _lastMSecs = 0;
let _lastNSecs = 0;
function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng$1.default)();
    if (node == null) {
      node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }
    if (clockseq == null) {
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
    }
  }
  let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
  let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
  if (dt < 0 && options.clockseq === void 0) {
    clockseq = clockseq + 1 & 16383;
  }
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
    nsecs = 0;
  }
  if (nsecs >= 1e4) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }
  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;
  msecs += 122192928e5;
  const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
  b[i++] = tl >>> 24 & 255;
  b[i++] = tl >>> 16 & 255;
  b[i++] = tl >>> 8 & 255;
  b[i++] = tl & 255;
  const tmh = msecs / 4294967296 * 1e4 & 268435455;
  b[i++] = tmh >>> 8 & 255;
  b[i++] = tmh & 255;
  b[i++] = tmh >>> 24 & 15 | 16;
  b[i++] = tmh >>> 16 & 255;
  b[i++] = clockseq >>> 8 | 128;
  b[i++] = clockseq & 255;
  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }
  return buf || (0, _stringify$2.unsafeStringify)(b);
}
var _default$9 = v1;
v1$1.default = _default$9;
var v3$1 = {};
var v35$1 = {};
var parse$1 = {};
Object.defineProperty(parse$1, "__esModule", {
  value: true
});
parse$1.default = void 0;
var _validate$1 = _interopRequireDefault$5(validate$1);
function _interopRequireDefault$5(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function parse(uuid2) {
  if (!(0, _validate$1.default)(uuid2)) {
    throw TypeError("Invalid UUID");
  }
  let v;
  const arr = new Uint8Array(16);
  arr[0] = (v = parseInt(uuid2.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 255;
  arr[2] = v >>> 8 & 255;
  arr[3] = v & 255;
  arr[4] = (v = parseInt(uuid2.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 255;
  arr[6] = (v = parseInt(uuid2.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 255;
  arr[8] = (v = parseInt(uuid2.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 255;
  arr[10] = (v = parseInt(uuid2.slice(24, 36), 16)) / 1099511627776 & 255;
  arr[11] = v / 4294967296 & 255;
  arr[12] = v >>> 24 & 255;
  arr[13] = v >>> 16 & 255;
  arr[14] = v >>> 8 & 255;
  arr[15] = v & 255;
  return arr;
}
var _default$8 = parse;
parse$1.default = _default$8;
Object.defineProperty(v35$1, "__esModule", {
  value: true
});
v35$1.URL = v35$1.DNS = void 0;
v35$1.default = v35;
var _stringify$1 = stringify$1;
var _parse = _interopRequireDefault$4(parse$1);
function _interopRequireDefault$4(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str));
  const bytes = [];
  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}
const DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
v35$1.DNS = DNS;
const URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
v35$1.URL = URL;
function v35(name, version2, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;
    if (typeof value === "string") {
      value = stringToBytes(value);
    }
    if (typeof namespace === "string") {
      namespace = (0, _parse.default)(namespace);
    }
    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 15 | version2;
    bytes[8] = bytes[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }
      return buf;
    }
    return (0, _stringify$1.unsafeStringify)(bytes);
  }
  try {
    generateUUID.name = name;
  } catch (err) {
  }
  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}
var md5$1 = {};
Object.defineProperty(md5$1, "__esModule", {
  value: true
});
md5$1.default = void 0;
function md5(bytes) {
  if (typeof bytes === "string") {
    const msg = unescape(encodeURIComponent(bytes));
    bytes = new Uint8Array(msg.length);
    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }
  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = "0123456789abcdef";
  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 255;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
    output.push(hex);
  }
  return output;
}
function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
function wordsToMd5(x, len) {
  x[len >> 5] |= 128 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;
  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }
  return [a, b, c, d];
}
function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }
  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));
  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 255) << i % 32;
  }
  return output;
}
function safeAdd(x, y) {
  const lsw = (x & 65535) + (y & 65535);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 65535;
}
function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
var _default$7 = md5;
md5$1.default = _default$7;
Object.defineProperty(v3$1, "__esModule", {
  value: true
});
v3$1.default = void 0;
var _v$1 = _interopRequireDefault$3(v35$1);
var _md = _interopRequireDefault$3(md5$1);
function _interopRequireDefault$3(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const v3 = (0, _v$1.default)("v3", 48, _md.default);
var _default$6 = v3;
v3$1.default = _default$6;
var v4$1 = {};
var native = {};
Object.defineProperty(native, "__esModule", {
  value: true
});
native.default = void 0;
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var _default$5 = {
  randomUUID
};
native.default = _default$5;
Object.defineProperty(v4$1, "__esModule", {
  value: true
});
v4$1.default = void 0;
var _native = _interopRequireDefault$2(native);
var _rng = _interopRequireDefault$2(rng$1);
var _stringify = stringify$1;
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function v4(options, buf, offset) {
  if (_native.default.randomUUID && !buf && !options) {
    return _native.default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || _rng.default)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return (0, _stringify.unsafeStringify)(rnds);
}
var _default$4 = v4;
v4$1.default = _default$4;
var v5$1 = {};
var sha1$1 = {};
Object.defineProperty(sha1$1, "__esModule", {
  value: true
});
sha1$1.default = void 0;
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;
    case 1:
      return x ^ y ^ z;
    case 2:
      return x & y ^ x & z ^ y & z;
    case 3:
      return x ^ y ^ z;
  }
}
function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}
function sha1(bytes) {
  const K = [1518500249, 1859775393, 2400959708, 3395469782];
  const H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof bytes === "string") {
    const msg = unescape(encodeURIComponent(bytes));
    bytes = [];
    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    bytes = Array.prototype.slice.call(bytes);
  }
  bytes.push(128);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);
  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);
    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }
    M[i] = arr;
  }
  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);
    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }
    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }
    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];
    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }
    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }
  return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
}
var _default$3 = sha1;
sha1$1.default = _default$3;
Object.defineProperty(v5$1, "__esModule", {
  value: true
});
v5$1.default = void 0;
var _v = _interopRequireDefault$1(v35$1);
var _sha = _interopRequireDefault$1(sha1$1);
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const v5 = (0, _v.default)("v5", 80, _sha.default);
var _default$2 = v5;
v5$1.default = _default$2;
var nil = {};
Object.defineProperty(nil, "__esModule", {
  value: true
});
nil.default = void 0;
var _default$1 = "00000000-0000-0000-0000-000000000000";
nil.default = _default$1;
var version$1 = {};
Object.defineProperty(version$1, "__esModule", {
  value: true
});
version$1.default = void 0;
var _validate = _interopRequireDefault(validate$1);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function version(uuid2) {
  if (!(0, _validate.default)(uuid2)) {
    throw TypeError("Invalid UUID");
  }
  return parseInt(uuid2.slice(14, 15), 16);
}
var _default = version;
version$1.default = _default;
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "NIL", {
    enumerable: true,
    get: function get() {
      return _nil.default;
    }
  });
  Object.defineProperty(exports, "parse", {
    enumerable: true,
    get: function get() {
      return _parse2.default;
    }
  });
  Object.defineProperty(exports, "stringify", {
    enumerable: true,
    get: function get() {
      return _stringify2.default;
    }
  });
  Object.defineProperty(exports, "v1", {
    enumerable: true,
    get: function get() {
      return _v2.default;
    }
  });
  Object.defineProperty(exports, "v3", {
    enumerable: true,
    get: function get() {
      return _v22.default;
    }
  });
  Object.defineProperty(exports, "v4", {
    enumerable: true,
    get: function get() {
      return _v3.default;
    }
  });
  Object.defineProperty(exports, "v5", {
    enumerable: true,
    get: function get() {
      return _v4.default;
    }
  });
  Object.defineProperty(exports, "validate", {
    enumerable: true,
    get: function get() {
      return _validate2.default;
    }
  });
  Object.defineProperty(exports, "version", {
    enumerable: true,
    get: function get() {
      return _version.default;
    }
  });
  var _v2 = _interopRequireDefault2(v1$1);
  var _v22 = _interopRequireDefault2(v3$1);
  var _v3 = _interopRequireDefault2(v4$1);
  var _v4 = _interopRequireDefault2(v5$1);
  var _nil = _interopRequireDefault2(nil);
  var _version = _interopRequireDefault2(version$1);
  var _validate2 = _interopRequireDefault2(validate$1);
  var _stringify2 = _interopRequireDefault2(stringify$1);
  var _parse2 = _interopRequireDefault2(parse$1);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
})(commonjsBrowser);
const EventEmitter = eventsExports;
const { v4: uuid } = commonjsBrowser;
let XHR$1;
class HTTPConnection extends EventEmitter {
  constructor(_XHR, url, options) {
    super();
    XHR$1 = _XHR;
    this.options = options;
    this.connected = false;
    this.subscriptions = false;
    this.status = "loading";
    this.url = url;
    this.pollId = uuid();
    setTimeout(() => this.create(), 0);
    this._emit = (...args) => !this.closed ? this.emit(...args) : null;
  }
  onError(err) {
    if (!this.closed && this.listenerCount("error")) this.emit("error", err);
  }
  create() {
    if (!XHR$1) return this.onError(new Error("No HTTP transport available"));
    this.on("error", () => {
      if (this.connected) this.close();
    });
    this.init();
  }
  init() {
    this.send({ jsonrpc: "2.0", method: "net_version", params: [], id: 1 }, (err, response) => {
      if (err) return this.onError(err);
      this.connected = true;
      this._emit("connect");
      this.send({ jsonrpc: "2.0", id: 1, method: "eth_pollSubscriptions", params: [this.pollId, "immediate"] }, (err2, response2) => {
        if (!err2) {
          this.subscriptions = true;
          this.pollSubscriptions();
        }
      });
    });
  }
  pollSubscriptions() {
    this.send({ jsonrpc: "2.0", id: 1, method: "eth_pollSubscriptions", params: [this.pollId] }, (err, result) => {
      if (err) {
        this.subscriptionTimeout = setTimeout(() => this.pollSubscriptions(), 1e4);
        return this.onError(err);
      } else {
        if (!this.closed) this.subscriptionTimeout = this.pollSubscriptions();
        if (result) {
          result.map((p) => {
            let parse2;
            try {
              parse2 = JSON.parse(p);
            } catch (e) {
              parse2 = false;
            }
            return parse2;
          }).filter((n) => n).forEach((p) => this._emit("payload", p));
        }
      }
    });
  }
  close() {
    clearTimeout(this.subscriptionTimeout);
    this._emit("close");
    this.closed = true;
    this.removeAllListeners();
  }
  filterStatus(res) {
    if (res.status >= 200 && res.status < 300) return res;
    const error = new Error(res.statusText);
    error.res = res;
    throw error.message;
  }
  error(payload2, message, code = -1) {
    this._emit("payload", { id: payload2.id, jsonrpc: payload2.jsonrpc, error: { message, code } });
  }
  send(payload2, internal) {
    if (this.closed) return this.error(payload2, "Not connected");
    if (payload2.method === "eth_subscribe") {
      if (this.subscriptions) {
        payload2.pollId = this.pollId;
      } else {
        return this.error(payload2, "Subscriptions are not supported by this HTTP endpoint");
      }
    }
    const xhr = new XHR$1();
    let responded = false;
    const res = (err, result) => {
      if (!responded) {
        xhr.abort();
        responded = true;
        if (internal) {
          internal(err, result);
        } else {
          const { id, jsonrpc } = payload2;
          const load = err ? { id, jsonrpc, error: { message: err.message, code: err.code } } : { id, jsonrpc, result };
          this._emit("payload", load);
        }
      }
    };
    try {
      xhr.open("POST", this.url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.timeout = 60 * 1e3;
      xhr.onerror = res;
      xhr.ontimeout = res;
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          try {
            const response = JSON.parse(xhr.responseText);
            res(response.error, response.result);
          } catch (e) {
            res(e);
          }
        }
      };
      xhr.send(JSON.stringify(payload2));
    } catch (e) {
      res({ message: e.message, code: -1 });
    }
  }
}
var http = (XHR2) => (url, options) => new HTTPConnection(XHR2, url, options);
const resolve = resolve$1;
const provider = provider$1;
const presets = presets$1;
const injected = {
  ethereum: typeof window !== "undefined" && typeof window.ethereum !== "undefined" ? window.ethereum : null,
  web3: typeof window !== "undefined" && typeof window.web3 !== "undefined" ? window.web3.currentProvider : null
};
const ws = typeof window !== "undefined" && typeof window.WebSocket !== "undefined" ? window.WebSocket : null;
const XHR = typeof window !== "undefined" && typeof window.XMLHttpRequest !== "undefined" ? window.XMLHttpRequest : null;
if (injected.ethereum) injected.ethereum.__isProvider = true;
const connections = {
  injected: injected.ethereum || requireInjected()(injected.web3),
  ipc: unavailable("IPC connections are unavliable in the browser"),
  ws: ws$1(ws),
  http: http(XHR)
};
var browser = (targets, options) => {
  if (targets && !Array.isArray(targets) && typeof targets === "object" && !options) {
    options = targets;
    targets = void 0;
  }
  if (!targets) targets = ["injected", "frame"];
  if (!options) options = {};
  targets = [].concat(targets);
  targets.forEach((t) => {
    if (t.startsWith("alchemy") && !options.alchemyId) throw new Error("Alchemy was included as a connection target but no Alchemy project ID was passed in options e.g. { alchemyId: '123abc' }");
    if (t.startsWith("infura") && !options.infuraId) throw new Error("Infura was included as a connection target but no Infura project ID was passed in options e.g. { infuraId: '123abc' }");
  });
  const sets = presets(options);
  return provider(connections, resolve(targets, sets), options);
};
const browser$1 = /* @__PURE__ */ getDefaultExportFromCjs(browser);
const browser$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: browser$1
}, Symbol.toStringTag, { value: "Module" }));
export {
  browser$2 as b
};
