/* esm.sh - esbuild bundle(@radix-ui/react-context@1.1.1) es2022 production */
import*as o from"/stable/react@18.3.1/es2022/react.mjs";import{jsx as f}from"/stable/react@18.3.1/es2022/jsx-runtime.js";function l(t,s){let c=o.createContext(s),a=r=>{let{children:e,...n}=r,u=o.useMemo(()=>n,Object.values(n));return f(c.Provider,{value:u,children:e})};a.displayName=t+"Provider";function i(r){let e=o.useContext(c);if(e)return e;if(s!==void 0)return s;throw new Error(`\`${r}\` must be used within \`${t}\``)}return[a,i]}function $(t,s=[]){let c=[];function a(r,e){let n=o.createContext(e),u=c.length;c=[...c,e];let d=p=>{let{scope:m,children:v,...x}=p,R=m?.[t]?.[u]||n,S=o.useMemo(()=>x,Object.values(x));return f(R.Provider,{value:S,children:v})};d.displayName=r+"Provider";function C(p,m){let v=m?.[t]?.[u]||n,x=o.useContext(v);if(x)return x;if(e!==void 0)return e;throw new Error(`\`${p}\` must be used within \`${r}\``)}return[d,C]}let i=()=>{let r=c.map(e=>o.createContext(e));return function(n){let u=n?.[t]||r;return o.useMemo(()=>({[`__scope${t}`]:{...n,[t]:u}}),[n,u])}};return i.scopeName=t,[a,h(i,...s)]}function h(...t){let s=t[0];if(t.length===1)return s;let c=()=>{let a=t.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(r){let e=a.reduce((n,{useScope:u,scopeName:d})=>{let p=u(r)[`__scope${d}`];return{...n,...p}},{});return o.useMemo(()=>({[`__scope${s.scopeName}`]:e}),[e])}};return c.scopeName=s.scopeName,c}export{l as createContext,$ as createContextScope};
//# sourceMappingURL=react-context.mjs.map