"use strict";exports.id=468,exports.ids=[468],exports.modules={16379:(e,t,r)=>{e.exports=r(30517)},45851:()=>{"getAll"in Headers.prototype||(Headers.prototype.getAll=function(e){if("set-cookie"!==(e=e.toLowerCase()))throw Error("Headers.getAll is only supported for Set-Cookie header");let t=[...this.entries()].filter(([t])=>t===e);return t.map(([,e])=>e)})}};