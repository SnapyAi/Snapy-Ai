/* esm.sh - esbuild bundle(@radix-ui/react-compose-refs@1.1.1) es2022 production */
import*as f from"/stable/react@19.0.0/es2022/react.mjs";function l(n,o){if(typeof n=="function")return n(o);n!=null&&(n.current=o)}function i(...n){return o=>{let u=!1,c=n.map(t=>{let e=l(t,o);return!u&&typeof e=="function"&&(u=!0),e});if(u)return()=>{for(let t=0;t<c.length;t++){let e=c[t];typeof e=="function"?e():l(n[t],null)}}}}function s(...n){return f.useCallback(i(...n),n)}export{i as composeRefs,s as useComposedRefs};
//# sourceMappingURL=react-compose-refs.mjs.map