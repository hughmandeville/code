(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(6),i=n.n(c),o=n(4),r=n(1),m=(n(12),n(13),function(e){var t=e.level,n=e.levels,a=e.setInputStates,c=e.setLevel,i=e.setLockStatus,o=e.setShowHint,r=Math.round(t/n.length*100)+"%";return t===n.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{id:"nav"},l.a.createElement("a",{href:"/"},"Code")),l.a.createElement("div",{id:"completion_line",style:{width:"100%"}})):l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{id:"nav"},l.a.createElement("a",{href:"/"},"Code"),l.a.createElement("div",{id:"level"},"Level ",t+1," / ",n.length),l.a.createElement("div",{id:"cheat",onClick:function(){p(t,a,c,i,o)}},">"),l.a.createElement("div",{id:"hint_button",onClick:function(){o(!0)}},"hint")),l.a.createElement("div",{id:"completion_line",style:{width:r}}))}),s=(n(14),function(e){var t=e.level,n=e.lockStatus,a=e.setInputStates,c=e.setLevel,i=e.setLockStatus,o=e.setShowHint;return"locked"===n?l.a.createElement("div",{id:"lock_box",key:"lockbox"},l.a.createElement("span",{id:"lock",className:"material-icons"},"lock")):l.a.createElement("div",{id:"lock_box",key:"lockbox",onClick:function(){p(t,a,c,i,o)}},l.a.createElement("span",{id:"lock",className:"material-icons open"},"lock"),l.a.createElement("div",{className:"next_text"},"next\xa0>>"))}),u=function(e,t,n,a,l,c,i){var r=Object(o.a)(a);l[e+t].toString().toUpperCase()===n[t].current.value.toUpperCase()?r[t]="correct":r[t]="incorrect",c(r);var m=!1;r.length===l.length-e&&(m=r.reduce((function(e,t){return!1!==e&&"correct"===t}),!0)),i(m?"unlocked":"locked")},p=function(e,t,n,a,l){a("locked"),l(0),n(e+1),t([])},d=function(e){var t=e.level,n=e.levels,c=e.setLevel,i=t>=n.length?{hint:"",puzzle:[],completed:4}:n[t],o=i.completed,p=i.inlay,d=i.puzzle,h=Object(a.useState)(0),v=Object(r.a)(h,2),z=v[0],b=v[1],S=Object(a.useState)("locked"),g=Object(r.a)(S,2),E=g[0],f=g[1],y=Object(a.useState)([]),k=Object(r.a)(y,2),I=k[0],O=k[1],w=[],x=i.hint,L=i.image,C=i.title;return Object(a.useEffect)((function(){0===I.length&&null!=document.querySelector("input")&&document.querySelector("input").focus()}),[I]),t===n.length?l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{level:t,levels:n,setInputStates:O,setLevel:c,setLockStatus:f,showHint:z,setShowHint:b}),l.a.createElement("div",{id:"boxes",className:"won"},"Congratulations you completed all the challenges!")):l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{level:t,levels:n,setInputStates:O,setLevel:c,setLockStatus:f,showHint:z,setShowHint:b}),l.a.createElement("div",{id:"title",alt:""},L?l.a.createElement("img",{src:L}):C),l.a.createElement("div",{id:"hint"},z?l.a.createElement("span",null,x):""),l.a.createElement("div",{id:"boxes"},d.slice(0,o).map((function(e,t){return l.a.createElement("div",{key:"box"+t,className:"box"},e,null!=p&&p.length>=t?l.a.createElement("div",{className:"inlay"},p[t]):"")})),d.slice(o).map((function(e,n){var c=Object(a.createRef)();return w.push(c),l.a.createElement("div",{key:"box"+(o+n),className:"input_box"},l.a.createElement("input",{key:"level"+t+"-input"+n,ref:c,style:I.length>=n&&"correct"===I[n]?{border:"1px solid green"}:{},type:"text",className:"input",onChange:function(e){u(o,n,w,I,d,O,f)}}),null!=p&&p.length>=n?l.a.createElement("div",{className:"inlay"},p[o+n]):"")})),l.a.createElement(s,{level:t,lockStatus:E,setInputStates:O,setLevel:c,setLockStatus:f,setShowHint:b})))};n(15);var h=function(e,t){if(e.length<=t)return e;var n=Math.floor(Math.random()*(e.length-t));return e.slice(n,n+t)},v=function(e){return Object(o.a)(Array(e-2)).reduce((function(e){return e.push(e[e.length-2]+e[e.length-1]),e}),[0,1])},z=function(){var e=[{name:"roman_numerals",puzzle:h(["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV"],6),hint:"togas",completed:4},{name:"square",puzzle:h([1,4,9,16,25,36,49,64,81,100,121,144],6),hint:"square",completed:3},{name:"morse",puzzle:["S","O","S"],inlay:["...","---","..."],hint:"telegraph",completed:0},{name:"amscray",title:"amscray",puzzle:["S","C","R","A","M"],hint:"Pig Latin",completed:0},{name:"ixnay",title:"ixnay",puzzle:["N","I","X"],hint:"Pig Latin",completed:0},{name:"barney",title:"Barney in Cockney",puzzle:["T","R","O","U","B","L","E"],hint:"Barney Rubble",completed:0},{name:"brad",title:"Brad in Cockney",puzzle:["S","H","I","T"],hint:"Brad Pitt",completed:0},{name:"china",title:"China in Cockney",puzzle:["M","A","T","E"],hint:"China Plate",completed:0},{name:"olavtine",puzzle:["O","L","A","V","T","I","N","E"],inlay:["B","I","N","Y","G","V","A","R"],hint:"ROT13",completed:2},{name:"ascii",puzzle:["S","W","O","R","D","F","I","S","H"],inlay:[83,87,79,82,68,70,73,83,72],hint:"ASCII art",completed:1},{name:"phone",puzzle:[7,8,6,4,6,4],inlay:["Q","U","O","H","O","G"],hint:"Spongebob's flip phone",completed:2},{name:"emojis",puzzle:["\ud83d\ude42","\ud83d\ude43","\ud83d\ude42","\ud83d\ude43","\ud83d\ude42","\ud83d\ude43"],hint:"cut copy",completed:4},{name:"rgb",image:"img_red.png",puzzle:["FF","00","00"],hint:"RGB",completed:0},{name:"fibonacci",puzzle:h(v(12),6),hint:"Fibonacci",completed:4},{name:"pi",puzzle:[3,1,4,1,5,9],hint:"have some pie",completed:4},{name:"prime",puzzle:h([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53],6),hint:"Amazon prime",completed:4},{name:"binary",puzzle:h(["000","001","010","011","100","101","110","111"],6),hint:"binary",completed:3},{name:"days_of_week",puzzle:h(["M","T","W","T","F","S","S","M","T","W","T","F","S","S"],6),hint:"days of week",completed:4},{name:"numbers",puzzle:h(["Z","O","T","T","F","F","S","S","E","N"],6),hint:"numbers",completed:4},{name:"months",puzzle:h(["J","F","M","A","M","J","J","A","S","O","N","D","J","F","M","A","M","J","J","A","S","O","N","D"],6),hint:"months",completed:4},{name:"atbash",puzzle:["B","U","P","K","I","S"],inlay:["Y","F","K","P","R","H"],hint:"Atbash",completed:3},{name:"log",puzzle:[2,7,1,8,2,8],hint:"timber",completed:4}],t=Object(a.useState)(0),n=Object(r.a)(t,2),c=n[0],i=n[1];return l.a.createElement(d,{level:c,levels:e,setLevel:i})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.cd497463.chunk.js.map