var w=Object.defineProperty;var A=(o,t,r)=>t in o?w(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r;var h=(o,t,r)=>A(o,typeof t!="symbol"?t+"":t,r);import{aB as k,aC as v,r as N,o as f,T as y,aA as T,aD as E,aE as L,aF as U,ad as I,aG as P,aH as F}from"./index-Bpj1oEu7.js";function g(o,t){return k(o.abi,t,o.extensions)}function C(o,t){return o in t.readContract.functions}class B{constructor(t,r,e){h(this,"featureName",v.name);h(this,"set",f(async t=>{const r=await this._parseAndUploadMetadata(t),e=this.contractWrapper;if(this.supportsContractMetadata(e))return y.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setContractURI",args:[r],parse:a=>({receipt:a,data:this.get})});throw new T(v)}));h(this,"update",f(async t=>await this.set.prepare({...await this.get(),...t})));this.contractWrapper=t,this.schema=r,this.storage=e}parseOutputMetadata(t){return this.schema.output.parseAsync(t)}parseInputMetadata(t){return this.schema.input.parseAsync(t)}async get(){let t;if(this.supportsContractMetadata(this.contractWrapper)){const r=await this.contractWrapper.read("contractURI",[]);r&&r.includes("://")&&(t=await this.storage.downloadJSON(r))}if(!t)try{let r;try{C("name",this.contractWrapper)&&(r=await this.contractWrapper.read("name",[]))}catch{}let e;try{C("symbol",this.contractWrapper)&&(e=await this.contractWrapper.read("symbol",[]))}catch{}let a;try{a=await N(this.contractWrapper.address,this.contractWrapper.getProvider(),this.storage,this.contractWrapper.options)}catch{}t={name:r||(a==null?void 0:a.name),symbol:e,description:a==null?void 0:a.info.title}}catch{throw new Error("Could not fetch contract metadata")}return this.parseOutputMetadata(t)}async _parseAndUploadMetadata(t){const r=await this.parseInputMetadata(t);return this.storage.upload(r)}supportsContractMetadata(t){return g(t,"ContractMetadata")}}class G{constructor(t){this.contractWrapper=t}addTransactionListener(t){this.contractWrapper.addListener(E.Transaction,t)}removeTransactionListener(t){this.contractWrapper.off(E.Transaction,t)}addEventListener(t,r){const e=this.contractWrapper.readContract.interface.getEvent(t),n={address:this.contractWrapper.address,topics:[this.contractWrapper.readContract.interface.getEventTopic(e)]},s=i=>{const c=this.contractWrapper.readContract.interface.parseLog(i);r(this.toContractEvent(c.eventFragment,c.args,i))};return this.contractWrapper.getProvider().on(n,s),()=>{this.contractWrapper.getProvider().off(n,s)}}listenToAllEvents(t){const e={address:this.contractWrapper.address},a=n=>{try{const s=this.contractWrapper.readContract.interface.parseLog(n);t(this.toContractEvent(s.eventFragment,s.args,n))}catch(s){console.error("Could not parse event:",n,s)}};return this.contractWrapper.getProvider().on(e,a),()=>{this.contractWrapper.getProvider().off(e,a)}}removeEventListener(t,r){const e=this.contractWrapper.readContract.interface.getEvent(t);this.contractWrapper.readContract.off(e.name,r)}removeAllListeners(){this.contractWrapper.readContract.removeAllListeners();const r={address:this.contractWrapper.address};this.contractWrapper.getProvider().removeAllListeners(r)}async getAllEvents(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{fromBlock:0,toBlock:"latest",order:"desc"};const e=(await this.contractWrapper.readContract.queryFilter({},t.fromBlock,t.toBlock)).sort((a,n)=>t.order==="desc"?n.blockNumber-a.blockNumber:a.blockNumber-n.blockNumber);return this.parseEvents(e)}async getEvents(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{fromBlock:0,toBlock:"latest",order:"desc"};const e=this.contractWrapper.readContract.interface.getEvent(t),a=r.filters?e.inputs.map(c=>r.filters[c.name]):[],n=this.contractWrapper.readContract.filters[e.name](...a),i=(await this.contractWrapper.readContract.queryFilter(n,r.fromBlock,r.toBlock)).sort((c,d)=>r.order==="desc"?d.blockNumber-c.blockNumber:c.blockNumber-d.blockNumber);return this.parseEvents(i)}parseEvents(t){return t.map(r=>{const e=Object.fromEntries(Object.entries(r).filter(a=>typeof a[1]!="function"&&a[0]!=="args"));if(r.args){const a=Object.entries(r.args),n=a.slice(a.length/2,a.length),s={};for(const[i,c]of n)s[i]=c;return{eventName:r.event||"",data:s,transaction:e}}return{eventName:r.event||"",data:{},transaction:e}})}toContractEvent(t,r,e){const a=Object.fromEntries(Object.entries(e).filter(s=>typeof s[1]!="function"&&s[0]!=="args")),n={};return t.inputs.forEach((s,i)=>{if(Array.isArray(r[i])){const c=s.components;if(c){const d=r[i];if(s.type==="tuple[]"){const u=[];for(let p=0;p<d.length;p++){const m=d[p],W={};for(let l=0;l<c.length;l++){const b=c[l].name;W[b]=m[l]}u.push(W)}n[s.name]=u}else{const u={};for(let p=0;p<c.length;p++){const m=c[p].name;u[m]=d[p]}n[s.name]=u}}}else n[s.name]=r[i]}),{eventName:t.name,data:n,transaction:a}}}function M(o){return F(o)}class R{constructor(t){this.contractWrapper=t}async gasCostOf(t,r){const e=await L(this.contractWrapper.getProvider(),await this.contractWrapper.populateTransaction(t,r));return M(e)}async gasLimitOf(t,r){return this.contractWrapper.estimateGas(t,r)}async currentGasPriceInGwei(){const t=await this.contractWrapper.getProvider().getGasPrice();return U(t,"gwei")}}class _{constructor(t,r,e){h(this,"featureName",I.name);h(this,"set",f(async t=>g(this.contractWrapper,"AppURI")?y.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAppURI",args:[t]}):await this.metadata.update.prepare({app_uri:t})));this.contractWrapper=t,this.metadata=r,this.storage=e}async get(){return g(this.contractWrapper,"AppURI")?await this.contractWrapper.read("appURI",[]):P((await this.metadata.get()).app_uri||"",this.storage.getGatewayUrls())}}export{G as C,R as G,B as a,_ as b,g as d,C as h};
