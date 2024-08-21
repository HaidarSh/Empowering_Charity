var d=Object.defineProperty;var f=(s,e,t)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var n=(s,e,t)=>f(s,typeof e!="symbol"?e+"":e,t);import{dh as C,a1 as w,v as W,di as y,a2 as R,X as p,aP as T,aR as A,o as c,T as m}from"./index-Bpj1oEu7.js";import{a as b,b as E,G as S,C as O}from"./contract-appuri-5c40af52.browser.esm-BAnTQ_sf.js";import{C as v}from"./contract-interceptor-d7b164a7.browser.esm-C_yNedqZ.js";import{C as D}from"./contract-platform-fee-e756e68f.browser.esm-2V1bAqDV.js";import{C as F}from"./contract-roles-71988d2e.browser.esm-BbtrJ9Qb.js";import{C as V}from"./contract-sales-918c7cb8.browser.esm-CWAxrqjl.js";import{D as P}from"./drop-claim-conditions-e6f2abbf.browser.esm-DTK3g72V.js";import{S as B}from"./erc-20-standard-1e9d9631.browser.esm-C3gU59Rt.js";import"./index-BpAmJqjQ.js";import"./treeify-CBgv0pvn.js";import"./assertEnabled-d1700f0b.browser.esm-DAvQjFbQ.js";import"./setErc20Allowance-7f76f677.browser.esm-COMTzzOn.js";import"./erc-20-9a18a51c.browser.esm-CYDKuO-r.js";const o=class o extends B{constructor(t,r,a){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},h=arguments.length>4?arguments[4]:void 0,u=arguments.length>5?arguments[5]:void 0,g=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new w(t,r,h,i,a);super(g,a,u);n(this,"claim",c((()=>{var t=this;return async function(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),r,a)}})()));n(this,"claimTo",c((()=>{var t=this;return async function(r,a){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return t.erc20.claimTo.prepare(r,a,{checkERC20Allowance:i})}})()));n(this,"delegateTo",c(async t=>m.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await p(t)]})));n(this,"burnTokens",c(async t=>this.erc20.burn.prepare(t)));n(this,"burnFrom",c(async(t,r)=>this.erc20.burnFrom.prepare(t,r)));this.abi=W.parse(h||[]),this.metadata=new b(this.contractWrapper,y,this.storage),this.app=new E(this.contractWrapper,this.metadata,this.storage),this.roles=new F(this.contractWrapper,o.contractRoles),this.encoder=new R(this.contractWrapper),this.estimator=new S(this.contractWrapper),this.events=new O(this.contractWrapper),this.sales=new V(this.contractWrapper),this.platformFees=new D(this.contractWrapper),this.interceptor=new v(this.contractWrapper),this.claimConditions=new P(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.read("getVotes",[await p(t)]))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.read("delegates",[await p(t)])}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[T("transfer"),A])}async prepare(t,r,a){return m.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}};n(o,"contractRoles",C);let l=o;export{l as TokenDrop};
