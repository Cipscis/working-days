(()=>{"use strict";var e,t,n;function r(e){return[e.getFullYear(),e.getMonth(),e.getDate()]}function o(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}!function(e){e.OIA="OIA"}(e||(e={})),function(e){e[e.JANUARY=0]="JANUARY",e[e.FEBRUARY=1]="FEBRUARY",e[e.MARCH=2]="MARCH",e[e.APRIL=3]="APRIL",e[e.MAY=4]="MAY",e[e.JUNE=5]="JUNE",e[e.JULY=6]="JULY",e[e.AUGUST=7]="AUGUST",e[e.SEPTEMBER=8]="SEPTEMBER",e[e.OCTOBER=9]="OCTOBER",e[e.NOVEMBER=10]="NOVEMBER",e[e.DECEMBER=11]="DECEMBER"}(t||(t={})),function(e){e[e.MONDAY=1]="MONDAY",e[e.TUESDAY=2]="TUESDAY",e[e.WEDNESDAY=3]="WEDNESDAY",e[e.THURSDAY=4]="THURSDAY",e[e.FRIDAY=5]="FRIDAY",e[e.SATURDAY=6]="SATURDAY",e[e.SUNDAY=0]="SUNDAY"}(n||(n={}));const a=new Map;function A(e){return[e,t.APRIL,25]}function u(e){const t=a.get(e);if(void 0!==t)return t;let r=A(e);const o=new Date(...r).getDay();return o===n.SATURDAY?r[2]+=2:o===n.SUNDAY?r[2]+=1:r=null,a.set(e,r),r}const c={0:[t.APRIL,14],1:[t.APRIL,3],2:[t.MARCH,23],3:[t.APRIL,11],4:[t.MARCH,31],5:[t.APRIL,18],6:[t.APRIL,8],7:[t.MARCH,28],8:[t.APRIL,16],9:[t.APRIL,5],10:[t.MARCH,25],11:[t.APRIL,13],12:[t.APRIL,2],13:[t.MARCH,22],14:[t.APRIL,10],15:[t.MARCH,30],16:[t.APRIL,17],17:[t.APRIL,7],18:[t.MARCH,27]},i=new Map;function s(e){if(e<1900||e>2199)throw new RangeError("Dates for Easter outside the years 1900-2199 have not been defined.");const t=i.get(e);if(t)return t;const o=c[e%19],a=new Date(e,o[0],o[1]),A=a.getDay(),u=n.SUNDAY-A+7,s=new Date(a);s.setDate(s.getDate()+u);const E=r(s);return i.set(e,E),E}const E=new Map;function D(e){if(e<1900||e>2199)throw new RangeError("Dates for Easter outside the years 1900-2199 have not been defined.");const t=E.get(e);if(t)return t;const n=s(e),r=[n[0],n[1],n[2]+1];return 32===r[2]&&(r[1]+=1,r[2]=1),E.set(e,r),r}const R=new Map;function T(e){if(e<1900||e>2199)throw new RangeError("Dates for Easter outside the years 1900-2199 have not been defined.");const t=R.get(e);if(t)return t;const n=s(e),r=[n[0],n[1],n[2]-2];return r[2]<=0&&(r[1]-=1,r[2]+=31),R.set(e,r),r}const f=new Map([[2022,[2022,t.JUNE,24]],[2023,[2023,t.JULY,14]],[2024,[2024,t.JUNE,28]],[2025,[2025,t.JUNE,20]],[2026,[2026,t.JULY,10]],[2027,[2027,t.JUNE,25]],[2028,[2028,t.JULY,14]],[2029,[2029,t.JULY,6]],[2030,[2030,t.JUNE,21]],[2031,[2031,t.JULY,11]],[2032,[2032,t.JULY,2]],[2033,[2033,t.JUNE,24]],[2034,[2034,t.JULY,7]],[2035,[2035,t.JUNE,29]],[2036,[2036,t.JULY,18]],[2037,[2037,t.JULY,10]],[2038,[2038,t.JUNE,25]],[2039,[2039,t.JULY,15]],[2040,[2040,t.JULY,6]],[2041,[2041,t.JULY,19]],[2042,[2042,t.JULY,11]],[2043,[2043,t.JULY,3]],[2044,[2044,t.JUNE,24]],[2045,[2045,t.JULY,7]],[2046,[2046,t.JUNE,29]],[2047,[2047,t.JULY,19]],[2048,[2048,t.JULY,3]],[2049,[2049,t.JUNE,25]],[2050,[2050,t.JULY,15]],[2051,[2051,t.JUNE,30]],[2052,[2052,t.JUNE,21]]]),Y=f.keys(),l=Math.max(...Y);function U(e){if(e>l)throw new RangeError(`The date for Matariki in the year ${e} is unknown`);return f.get(e)??null}const N=new Map;function M(e){const o=N.get(e);if(o)return o;if(e<1952)throw new RangeError("The Sovereign's Birthday prior to the year 1952 is not defined.");if(1952===e)return[e,t.JUNE,2];if(1953===e)throw new RangeError("The date of the Sovereign's Birthday in 1953 is unknown.");if(e>2022)return null;const a=new Date(e,t.JUNE,1),A=a.getDay();if(A!==n.MONDAY){const e=(n.MONDAY+7-A)%7;a.setDate(a.getDate()+e)}const u=r(a);return N.set(e,u),u}const d=new Map;function g(e){return[e,t.FEBRUARY,6]}function I(e){const t=d.get(e);if(void 0!==t)return t;let r=g(e);const o=new Date(...r).getDay();return o===n.SATURDAY?r[2]+=2:o===n.SUNDAY?r[2]+=1:r=null,d.set(e,r),r}const L=new Map;function _(e){const o=L.get(e);if(o)return o;const a=new Date(e,t.OCTOBER,22),A=a.getDay();if(A!==n.MONDAY){const e=(n.MONDAY+7-A)%7;a.setDate(a.getDate()+e)}const u=r(a);return L.set(e,u),u}function S(e){return 2022===e?[2022,t.SEPTEMBER,26]:null}function w(a,c=e.OIA){if(c===e.OIA)return function(e){return!(function(e){const t=e.getDay();return t===n.SATURDAY||t===n.SUNDAY}(e)||function(e){return o(g(e.getFullYear()),r(e))}(e)||function(e){const t=e.getFullYear();if(t<1900||t>2199)throw new RangeError("Dates for Easter outside the years 1900-2199 have not been defined.");return o(T(t),r(e))}(e)||function(e){const t=e.getFullYear();if(t<1900||t>2199)throw new RangeError("Dates for Easter outside the years 1900-2199 have not been defined.");return o(D(t),r(e))}(e)||function(e){const t=r(e),[n]=t;return o(t,A(n))}(e)||function(e){const t=M(e.getFullYear()),n=r(e);return!!t&&o(t,n)}(e)||function(e){const t=U(e.getFullYear());return!!t&&o(t,r(e))}(e)||function(e){return o(_(e.getFullYear()),r(e))}(e)||function(e){const t=u(e.getFullYear());return!!t&&o(t,r(e))}(e)||function(e){const t=I(e.getFullYear());return!!t&&o(t,r(e))}(e)||e.getMonth()===t.DECEMBER&&e.getDate()>=25||e.getMonth()===t.JANUARY&&e.getDate()<=15||function(e){const t=r(e),[n]=t,a=S(n);return!!a&&o(t,a)}(e))}(a);throw new TypeError(`Unrecognised working day definition ${JSON.stringify(c)}`)}function O(t,n,r=e.OIA){t>n&&([t,n]=[n,t]),t=new Date(t.getFullYear(),t.getMonth(),t.getDate()),n=new Date(n.getFullYear(),n.getMonth(),n.getDate());let o=0;const a=new Date(t);for(;a<n;)a.setDate(a.getDate()+1),w(a,r)&&(o+=1);return o}var h;!function(e){e[e.ANZAC_DAY=0]="ANZAC_DAY",e[e.ANZAC_DAY_MONDAYISED=1]="ANZAC_DAY_MONDAYISED",e[e.WAITANGI_DAY=2]="WAITANGI_DAY",e[e.WAITANGI_DAY_MONDAYISED=3]="WAITANGI_DAY_MONDAYISED",e[e.GOOD_FRIDAY=4]="GOOD_FRIDAY",e[e.EASTER_SUNDAY=5]="EASTER_SUNDAY",e[e.EASTER_MONDAY=6]="EASTER_MONDAY",e[e.LABOUR_DAY=7]="LABOUR_DAY",e[e.MATARIKI=8]="MATARIKI",e[e.SOVEREIGNS_BIRTHDAY=9]="SOVEREIGNS_BIRTHDAY",e[e.QUEEN_ELIZABETH_II_MEMORIAL_DAY=10]="QUEEN_ELIZABETH_II_MEMORIAL_DAY"}(h||(h={}));const m={[h.ANZAC_DAY]:A,[h.ANZAC_DAY_MONDAYISED]:u,[h.WAITANGI_DAY]:g,[h.WAITANGI_DAY_MONDAYISED]:I,[h.GOOD_FRIDAY]:T,[h.EASTER_SUNDAY]:s,[h.EASTER_MONDAY]:D,[h.LABOUR_DAY]:_,[h.MATARIKI]:U,[h.SOVEREIGNS_BIRTHDAY]:M,[h.QUEEN_ELIZABETH_II_MEMORIAL_DAY]:S},y=Object.freeze({DATE:"#example-date",DATE_OUTPUT:"#example-date-output",RANGE_START:"#example-range-start",RANGE_END:"#example-range-end",RANGE_OUTPUT:"#example-range-output",EXTEND_START:"#example-extend-start",EXTEND_NUMBER:"#example-extend-number",EXTEND_OUTPUT:"#example-extend-output",GET_YEAR:"#example-get-year",GET_HOLIDAY:"#example-get-holiday",GET_OUTPUT:"#example-get-output"}),p=/^\d{4}-\d{2}-\d{2}$/,H=document.querySelector(y.DATE);H instanceof HTMLInputElement&&H.addEventListener("input",(e=>{const t=document.querySelector(y.DATE_OUTPUT);if(t){const n=H.value;if(p.test(n)){const r=new Date(n);try{const e=w(r);t.innerHTML=e?"Working day":"Not a working day"}catch(e){if(!(e instanceof RangeError))throw t.innerHTML="An unexpected error was encountered",e;t.innerHTML=`RangeError: ${e.message}`}}else t.innerHTML="Please select a valid date"}}));const J=document.querySelector(y.RANGE_START),P=document.querySelector(y.RANGE_END);if(J instanceof HTMLInputElement&&P instanceof HTMLInputElement){const e=function(e){const t=document.querySelector(y.RANGE_OUTPUT);if(t){const n=J.value,r=P.value;if(p.test(n)&&p.test(r)){const o=new Date(n),a=new Date(r);try{const e=O(o,a);t.innerHTML=`${e} working day${1===e?"":"s"}`}catch(e){if(!(e instanceof RangeError))throw t.innerHTML="An unexpected error was encountered",e;t.innerHTML=`RangeError: ${e.message}`}}else t.innerHTML="Please select a valid pair of dates"}};J.addEventListener("input",e),P.addEventListener("input",e)}const v=document.querySelector(y.EXTEND_START),B=document.querySelector(y.EXTEND_NUMBER);if(v instanceof HTMLInputElement&&B instanceof HTMLInputElement){const t=function(t){const n=document.querySelector(y.EXTEND_OUTPUT);if(n){const r=v.value,o=B.value;if(p.test(r)){const a=new Date(r);try{const t=function(t,n,r=e.OIA){n=Math.floor(n),t=new Date(t.getFullYear(),t.getMonth(),t.getDate());const o=new Date(t);o.setDate(o.getDate()+n);let a=Math.abs(n)-O(t,o,r);if(n>0)for(;O(t,o,r)<n;)o.setDate(o.getDate()+a),a=Math.abs(n)-O(t,o,r);else for(;O(t,o,r)<-n;)o.setDate(o.getDate()-a),a=Math.abs(n)-O(t,o,r);return o}(a,Number(o));n.innerHTML=new Intl.DateTimeFormat("en-NZ",{year:"numeric",month:"long",day:"numeric",weekday:"short"}).format(t)}catch(t){if(!(t instanceof RangeError))throw n.innerHTML="An unexpected error was encountered",t;n.innerHTML=`RangeError: ${t.message}`}}else n.innerHTML="Please select a valid pair of dates"}};v.addEventListener("input",t),B.addEventListener("input",t)}const G=document.querySelector(y.GET_YEAR),F=document.querySelector(y.GET_HOLIDAY);if(G instanceof HTMLInputElement&&F instanceof HTMLSelectElement){const e=function(e){const t=document.querySelector(y.GET_OUTPUT);if(t){const n=Number(G.value),r=Number(F.value);try{const e=function(e,t){return(0,m[e])(t)}(r,n);t.innerHTML=e?new Intl.DateTimeFormat("en-NZ",{year:"numeric",month:"long",day:"numeric",weekday:"short"}).format(new Date(...e)):`The selected holiday does not occur in the year ${n}`}catch(e){if(!(e instanceof RangeError))throw t.innerHTML="An unexpected error was encountered",e;t.innerHTML=`RangeError: ${e.message}`}}};G.addEventListener("input",e),F.addEventListener("change",e)}})();
//# sourceMappingURL=docs-script.bundle.js.map