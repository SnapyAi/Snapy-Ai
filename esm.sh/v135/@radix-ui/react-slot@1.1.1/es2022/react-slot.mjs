/* esm.sh - esbuild bundle(@radix-ui/react-slot@1.1.1) es2022 production */
import*as n from"/stable/react@19.0.0/es2022/react.mjs";import{composeRefs as R}from"/v135/@radix-ui/react-compose-refs@1.1.1/es2022/react-compose-refs.mjs";import{Fragment as d,jsx as c}from"/stable/react@19.0.0/es2022/jsx-runtime.js";var u=n.forwardRef((e,t)=>{let{children:r,...o}=e,l=n.Children.toArray(r),i=l.find(g);if(i){let a=i.props.children,s=l.map(p=>p===i?n.Children.count(a)>1?n.Children.only(null):n.isValidElement(a)?a.props.children:null:p);return c(f,{...o,ref:t,children:n.isValidElement(a)?n.cloneElement(a,void 0,s):null})}return c(f,{...o,ref:t,children:r})});u.displayName="Slot";var f=n.forwardRef((e,t)=>{let{children:r,...o}=e;if(n.isValidElement(r)){let l=h(r);return n.cloneElement(r,{...y(o,r.props),ref:t?R(t,l):l})}return n.Children.count(r)>1?n.Children.only(null):null});f.displayName="SlotClone";var m=({children:e})=>c(d,{children:e});function g(e){return n.isValidElement(e)&&e.type===m}function y(e,t){let r={...t};for(let o in t){let l=e[o],i=t[o];/^on[A-Z]/.test(o)?l&&i?r[o]=(...s)=>{i(...s),l(...s)}:l&&(r[o]=l):o==="style"?r[o]={...l,...i}:o==="className"&&(r[o]=[l,i].filter(Boolean).join(" "))}return{...e,...r}}function h(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var v=u;export{v as Root,u as Slot,m as Slottable};
//# sourceMappingURL=react-slot.mjs.map