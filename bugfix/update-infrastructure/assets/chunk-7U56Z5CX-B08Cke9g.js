import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{$ as t,H as n,T as r,V as i,W as a,Z as o,j as s,k as c,lt as l,pt as u,q as d,ut as f}from"./src-CuMxYmxj.js";import{g as p,o as m,u as h}from"./chunk-7DKRZKHE-DA-s0DpE.js";import{n as g,r as _,t as v}from"./chunk-5HRBRIJM-J-Ewefta.js";import{i as y,n as b}from"./chunk-BO7VGL7K-DEHKOkqr.js";function x(e=``,t=0,n=``,r=R){return`${De}-${e}${n!==null&&n.length>0?`${r}${n}`:``}-${t}`}function S(e,t,n){if(!t.id||t.id===`</join></fork>`||t.id===`</choice>`)return;t.cssClasses&&(Array.isArray(t.cssCompiledStyles)||(t.cssCompiledStyles=[]),t.cssClasses.split(` `).forEach(e=>{if(n.get(e)){let r=n.get(e);t.cssCompiledStyles=[...t.cssCompiledStyles,...r.styles]}}));let r=e.find(e=>e.id===t.id);r?Object.assign(r,t):e.push(t)}function C(e){return e?.classes?.join(` `)??``}function w(e){return e?.styles??[]}function T(){return new Map}function E(e=``){let t=e;return e===H&&(Y++,t=`${Fe}${Y}`),t}function D(e=``,t=I){return e===H?Fe:t}function O(e=``){let t=e;return e===Ie&&(Y++,t=`${Le}${Y}`),t}function k(e=``,t=I){return e===Ie?Le:t}function A(e,t,n){let r=E(e.id.trim()),i=D(e.id.trim(),e.type),o=E(t.id.trim()),c=D(t.id.trim(),t.type);Q(r,i,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),Q(o,c,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),J.relations.push({id1:r,id2:o,relationTitle:s.sanitizeText(n,a())})}var j,M,N,ee,P,F,te,ne,re,I,ie,ae,oe,se,ce,le,ue,de,fe,pe,me,he,ge,_e,L,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,R,Oe,ke,Ae,je,z,B,Me,Ne,V,Pe,H,Fe,Ie,Le,Re,ze,Be,Ve,U,W,He,G,K,Ue,q,J,Y,We,Ge,Ke,X,qe,Je,Z,Ye,Xe,Q,Ze,$,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt;function ft(){return(ft=e((()=>{g(),b(),h(),o(),j=function(){var e=r(function(e,t,n,r){for(n||={},r=e.length;r--;n[e[r]]=t);return n},`o`),t=[1,2],n=[1,3],i=[1,4],a=[2,4],o=[1,9],s=[1,11],c=[1,16],l=[1,17],u=[1,18],d=[1,19],f=[1,32],p=[1,20],m=[1,21],h=[1,22],g=[1,23],_=[1,24],v=[1,26],y=[1,27],b=[1,28],x=[1,29],S=[1,30],C=[1,31],w=[1,34],T=[1,35],E=[1,36],D=[1,37],O=[1,33],k=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],A=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],j=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],M={trace:r(function(){},`trace`),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,classDef:38,CLASSDEF_ID:39,CLASSDEF_STYLEOPTS:40,DEFAULT:41,style:42,STYLE_IDS:43,STYLEDEF_STYLEOPTS:44,class:45,CLASSENTITY_IDS:46,STYLECLASS:47,direction_tb:48,direction_bt:49,direction_rl:50,direction_lr:51,eol:52,";":53,EDGE_STATE:54,STYLE_SEPARATOR:55,left_of:56,right_of:57,$accept:0,$end:1},terminals_:{2:`error`,4:`SPACE`,5:`NL`,6:`SD`,14:`DESCR`,15:`-->`,16:`HIDE_EMPTY`,17:`scale`,18:`WIDTH`,19:`COMPOSIT_STATE`,20:`STRUCT_START`,21:`STRUCT_STOP`,22:`STATE_DESCR`,23:`AS`,24:`ID`,25:`FORK`,26:`JOIN`,27:`CHOICE`,28:`CONCURRENT`,29:`note`,31:`NOTE_TEXT`,33:`acc_title`,34:`acc_title_value`,35:`acc_descr`,36:`acc_descr_value`,37:`acc_descr_multiline_value`,38:`classDef`,39:`CLASSDEF_ID`,40:`CLASSDEF_STYLEOPTS`,41:`DEFAULT`,42:`style`,43:`STYLE_IDS`,44:`STYLEDEF_STYLEOPTS`,45:`class`,46:`CLASSENTITY_IDS`,47:`STYLECLASS`,48:`direction_tb`,49:`direction_bt`,50:`direction_rl`,51:`direction_lr`,53:`;`,54:`EDGE_STATE`,55:`STYLE_SEPARATOR`,56:`left_of`,57:`right_of`},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[52,1],[52,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:r(function(e,t,n,r,i,a,o){var s=a.length-1;switch(i){case 3:return r.setRootDoc(a[s]),a[s];case 4:this.$=[];break;case 5:a[s]!=`nl`&&(a[s-1].push(a[s]),this.$=a[s-1]);break;case 6:case 7:this.$=a[s];break;case 8:this.$=`nl`;break;case 12:this.$=a[s];break;case 13:let e=a[s-1];e.description=r.trimColon(a[s]),this.$=e;break;case 14:this.$={stmt:`relation`,state1:a[s-2],state2:a[s]};break;case 15:let t=r.trimColon(a[s]);this.$={stmt:`relation`,state1:a[s-3],state2:a[s-1],description:t};break;case 19:this.$={stmt:`state`,id:a[s-3],type:`default`,description:``,doc:a[s-1]};break;case 20:var c=a[s],l=a[s-2].trim();if(a[s].match(`:`)){var u=a[s].split(`:`);c=u[0],l=[l,u[1]]}this.$={stmt:`state`,id:c,type:`default`,description:l};break;case 21:this.$={stmt:`state`,id:a[s-3],type:`default`,description:a[s-5],doc:a[s-1]};break;case 22:this.$={stmt:`state`,id:a[s],type:`fork`};break;case 23:this.$={stmt:`state`,id:a[s],type:`join`};break;case 24:this.$={stmt:`state`,id:a[s],type:`choice`};break;case 25:this.$={stmt:`state`,id:r.getDividerId(),type:`divider`};break;case 26:this.$={stmt:`state`,id:a[s-1].trim(),note:{position:a[s-2].trim(),text:a[s].trim()}};break;case 29:this.$=a[s].trim(),r.setAccTitle(this.$);break;case 30:case 31:this.$=a[s].trim(),r.setAccDescription(this.$);break;case 32:case 33:this.$={stmt:`classDef`,id:a[s-1].trim(),classes:a[s].trim()};break;case 34:this.$={stmt:`style`,id:a[s-1].trim(),styleClass:a[s].trim()};break;case 35:this.$={stmt:`applyClass`,id:a[s-1].trim(),styleClass:a[s].trim()};break;case 36:r.setDirection(`TB`),this.$={stmt:`dir`,value:`TB`};break;case 37:r.setDirection(`BT`),this.$={stmt:`dir`,value:`BT`};break;case 38:r.setDirection(`RL`),this.$={stmt:`dir`,value:`RL`};break;case 39:r.setDirection(`LR`),this.$={stmt:`dir`,value:`LR`};break;case 42:case 43:this.$={stmt:`state`,id:a[s].trim(),type:`default`,description:``};break;case 44:this.$={stmt:`state`,id:a[s-2].trim(),classes:[a[s].trim()],type:`default`,description:``};break;case 45:this.$={stmt:`state`,id:a[s-2].trim(),classes:[a[s].trim()],type:`default`,description:``}}},`anonymous`),table:[{3:1,4:t,5:n,6:i},{1:[3]},{3:5,4:t,5:n,6:i},{3:6,4:t,5:n,6:i},e([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],a,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:o,5:s,8:8,9:10,10:12,11:13,12:14,13:15,16:c,17:l,19:u,22:d,24:f,25:p,26:m,27:h,28:g,29:_,32:25,33:v,35:y,37:b,38:x,42:S,45:C,48:w,49:T,50:E,51:D,54:O},e(k,[2,5]),{9:38,10:12,11:13,12:14,13:15,16:c,17:l,19:u,22:d,24:f,25:p,26:m,27:h,28:g,29:_,32:25,33:v,35:y,37:b,38:x,42:S,45:C,48:w,49:T,50:E,51:D,54:O},e(k,[2,7]),e(k,[2,8]),e(k,[2,9]),e(k,[2,10]),e(k,[2,11]),e(k,[2,12],{14:[1,39],15:[1,40]}),e(k,[2,16]),{18:[1,41]},e(k,[2,18],{20:[1,42]}),{23:[1,43]},e(k,[2,22]),e(k,[2,23]),e(k,[2,24]),e(k,[2,25]),{30:44,31:[1,45],56:[1,46],57:[1,47]},e(k,[2,28]),{34:[1,48]},{36:[1,49]},e(k,[2,31]),{39:[1,50],41:[1,51]},{43:[1,52]},{46:[1,53]},e(A,[2,42],{55:[1,54]}),e(A,[2,43],{55:[1,55]}),e(k,[2,36]),e(k,[2,37]),e(k,[2,38]),e(k,[2,39]),e(k,[2,6]),e(k,[2,13]),{13:56,24:f,54:O},e(k,[2,17]),e(j,a,{7:57}),{24:[1,58]},{24:[1,59]},{23:[1,60]},{24:[2,46]},{24:[2,47]},e(k,[2,29]),e(k,[2,30]),{40:[1,61]},{40:[1,62]},{44:[1,63]},{47:[1,64]},{24:[1,65]},{24:[1,66]},e(k,[2,14],{14:[1,67]}),{4:o,5:s,8:8,9:10,10:12,11:13,12:14,13:15,16:c,17:l,19:u,21:[1,68],22:d,24:f,25:p,26:m,27:h,28:g,29:_,32:25,33:v,35:y,37:b,38:x,42:S,45:C,48:w,49:T,50:E,51:D,54:O},e(k,[2,20],{20:[1,69]}),{31:[1,70]},{24:[1,71]},e(k,[2,32]),e(k,[2,33]),e(k,[2,34]),e(k,[2,35]),e(A,[2,44]),e(A,[2,45]),e(k,[2,15]),e(k,[2,19]),e(j,a,{7:72}),e(k,[2,26]),e(k,[2,27]),{4:o,5:s,8:8,9:10,10:12,11:13,12:14,13:15,16:c,17:l,19:u,21:[1,73],22:d,24:f,25:p,26:m,27:h,28:g,29:_,32:25,33:v,35:y,37:b,38:x,42:S,45:C,48:w,49:T,50:E,51:D,54:O},e(k,[2,21])],defaultActions:{5:[2,1],6:[2,2],46:[2,46],47:[2,47]},parseError:r(function(e,t){if(t.recoverable)this.trace(e);else{var n=Error(e);throw n.hash=t,n}},`parseError`),parse:r(function(e){var t=this,n=[0],i=[],a=[null],o=[],s=this.table,c=``,l=0,u=0,d=0,f=2,p=1,m=o.slice.call(arguments,1),h=Object.create(this.lexer),g={yy:{}};for(var _ in this.yy)Object.prototype.hasOwnProperty.call(this.yy,_)&&(g.yy[_]=this.yy[_]);h.setInput(e,g.yy),g.yy.lexer=h,g.yy.parser=this,h.yylloc===void 0&&(h.yylloc={});var v=h.yylloc;o.push(v);var y=h.options&&h.options.ranges;this.parseError=typeof g.yy.parseError==`function`?g.yy.parseError:Object.getPrototypeOf(this).parseError;function b(e){n.length-=2*e,a.length-=e,o.length-=e}r(b,`popStack`);function x(){var e=i.pop()||h.lex()||p;return typeof e!=`number`&&(e instanceof Array&&(i=e,e=i.pop()),e=t.symbols_[e]||e),e}r(x,`lex`);for(var S,C,w,T,E,D={},O,k,A,j;;){if(w=n[n.length-1],this.defaultActions[w]?T=this.defaultActions[w]:(S??=x(),T=s[w]&&s[w][S]),T===void 0||!T.length||!T[0]){var M=``;for(O in j=[],s[w])this.terminals_[O]&&O>f&&j.push(`'`+this.terminals_[O]+`'`);M=h.showPosition?`Parse error on line `+(l+1)+`:
`+h.showPosition()+`
Expecting `+j.join(`, `)+`, got '`+(this.terminals_[S]||S)+`'`:`Parse error on line `+(l+1)+`: Unexpected `+(S==p?`end of input`:`'`+(this.terminals_[S]||S)+`'`),this.parseError(M,{text:h.match,token:this.terminals_[S]||S,line:h.yylineno,loc:v,expected:j})}if(T[0]instanceof Array&&T.length>1)throw Error(`Parse Error: multiple actions possible at state: `+w+`, token: `+S);switch(T[0]){case 1:n.push(S),a.push(h.yytext),o.push(h.yylloc),n.push(T[1]),S=null,C?(S=C,C=null):(u=h.yyleng,c=h.yytext,l=h.yylineno,v=h.yylloc,d>0&&d--);break;case 2:if(k=this.productions_[T[1]][1],D.$=a[a.length-k],D._$={first_line:o[o.length-(k||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(k||1)].first_column,last_column:o[o.length-1].last_column},y&&(D._$.range=[o[o.length-(k||1)].range[0],o[o.length-1].range[1]]),E=this.performAction.apply(D,[c,u,l,g.yy,T[1],a,o].concat(m)),E!==void 0)return E;k&&(n=n.slice(0,-1*k*2),a=a.slice(0,-1*k),o=o.slice(0,-1*k)),n.push(this.productions_[T[1]][0]),a.push(D.$),o.push(D._$),A=s[n[n.length-2]][n[n.length-1]],n.push(A);break;case 3:return!0}}return!0},`parse`)};M.lexer=function(){return{EOF:1,parseError:r(function(e,t){if(this.yy.parser)this.yy.parser.parseError(e,t);else throw Error(e)},`parseError`),setInput:r(function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match=``,this.conditionStack=[`INITIAL`],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},`setInput`),input:r(function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},`input`),unput:r(function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},`unput`),more:r(function(){return this._more=!0,this},`more`),reject:r(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError(`Lexical error on line `+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:``,token:null,line:this.yylineno});return this},`reject`),less:r(function(e){this.unput(this.match.slice(e))},`less`),pastInput:r(function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?`...`:``)+e.substr(-20).replace(/\n/g,``)},`pastInput`),upcomingInput:r(function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?`...`:``)).replace(/\n/g,``)},`upcomingInput`),showPosition:r(function(){var e=this.pastInput(),t=Array(e.length+1).join(`-`);return e+this.upcomingInput()+`
`+t+`^`},`showPosition`),test_match:r(function(e,t){var n,r,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),r=e[0].match(/(?:\r\n?|\n).*/g),r&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],n=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var a in i)this[a]=i[a];return!1}return!1},`test_match`),next:r(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var e,t,n,r;this._more||(this.yytext=``,this.match=``);for(var i=this._currentRules(),a=0;a<i.length;a++)if(n=this._input.match(this.rules[i[a]]),n&&(!t||n[0].length>t[0].length)){if(t=n,r=a,this.options.backtrack_lexer){if(e=this.test_match(n,i[a]),e!==!1)return e;if(this._backtrack){t=!1;continue}return!1}if(!this.options.flex)break}return t?(e=this.test_match(t,i[r]),e!==!1&&e):this._input===``?this.EOF:this.parseError(`Lexical error on line `+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:``,token:null,line:this.yylineno})},`next`),lex:r(function(){return this.next()||this.lex()},`lex`),begin:r(function(e){this.conditionStack.push(e)},`begin`),popState:r(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},`popState`),_currentRules:r(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},`_currentRules`),topState:r(function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:`INITIAL`},`topState`),pushState:r(function(e){this.begin(e)},`pushState`),stateStackSize:r(function(){return this.conditionStack.length},`stateStackSize`),options:{"case-insensitive":!0},performAction:r(function(e,t,n,r){switch(n){case 0:return 41;case 1:return 48;case 2:return 49;case 3:return 50;case 4:return 51;case 5:break;case 6:break;case 7:return 5;case 8:break;case 9:break;case 10:break;case 11:break;case 12:return this.pushState(`SCALE`),17;case 13:return 18;case 14:this.popState();break;case 15:return this.begin(`acc_title`),33;case 16:return this.popState(),`acc_title_value`;case 17:return this.begin(`acc_descr`),35;case 18:return this.popState(),`acc_descr_value`;case 19:this.begin(`acc_descr_multiline`);break;case 20:this.popState();break;case 21:return`acc_descr_multiline_value`;case 22:return this.pushState(`CLASSDEF`),38;case 23:return this.popState(),this.pushState(`CLASSDEFID`),`DEFAULT_CLASSDEF_ID`;case 24:return this.popState(),this.pushState(`CLASSDEFID`),39;case 25:return this.popState(),40;case 26:return this.pushState(`CLASS`),45;case 27:return this.popState(),this.pushState(`CLASS_STYLE`),46;case 28:return this.popState(),47;case 29:return this.pushState(`STYLE`),42;case 30:return this.popState(),this.pushState(`STYLEDEF_STYLES`),43;case 31:return this.popState(),44;case 32:return this.pushState(`SCALE`),17;case 33:return 18;case 34:this.popState();break;case 35:this.pushState(`STATE`);break;case 36:return this.popState(),t.yytext=t.yytext.slice(0,-8).trim(),25;case 37:return this.popState(),t.yytext=t.yytext.slice(0,-8).trim(),26;case 38:return this.popState(),t.yytext=t.yytext.slice(0,-10).trim(),27;case 39:return this.popState(),t.yytext=t.yytext.slice(0,-8).trim(),25;case 40:return this.popState(),t.yytext=t.yytext.slice(0,-8).trim(),26;case 41:return this.popState(),t.yytext=t.yytext.slice(0,-10).trim(),27;case 42:return 48;case 43:return 49;case 44:return 50;case 45:return 51;case 46:this.pushState(`STATE_STRING`);break;case 47:return this.pushState(`STATE_ID`),`AS`;case 48:return this.popState(),`ID`;case 49:this.popState();break;case 50:return`STATE_DESCR`;case 51:return 19;case 52:this.popState();break;case 53:return this.popState(),this.pushState(`struct`),20;case 54:break;case 55:return this.popState(),21;case 56:break;case 57:return this.begin(`NOTE`),29;case 58:return this.popState(),this.pushState(`NOTE_ID`),56;case 59:return this.popState(),this.pushState(`NOTE_ID`),57;case 60:this.popState(),this.pushState(`FLOATING_NOTE`);break;case 61:return this.popState(),this.pushState(`FLOATING_NOTE_ID`),`AS`;case 62:break;case 63:return`NOTE_TEXT`;case 64:return this.popState(),`ID`;case 65:return this.popState(),this.pushState(`NOTE_TEXT`),24;case 66:return this.popState(),t.yytext=t.yytext.substr(2).trim(),31;case 67:return this.popState(),t.yytext=t.yytext.slice(0,-8).trim(),31;case 68:return 6;case 69:return 6;case 70:return 16;case 71:return 54;case 72:return 24;case 73:return t.yytext=t.yytext.trim(),14;case 74:return 15;case 75:return 28;case 76:return 55;case 77:return 5;case 78:return`INVALID`}},`anonymous`),rules:[/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[9,10],inclusive:!1},struct:{rules:[9,10,22,26,29,35,42,43,44,45,54,55,56,57,71,72,73,74,75],inclusive:!1},FLOATING_NOTE_ID:{rules:[64],inclusive:!1},FLOATING_NOTE:{rules:[61,62,63],inclusive:!1},NOTE_TEXT:{rules:[66,67],inclusive:!1},NOTE_ID:{rules:[65],inclusive:!1},NOTE:{rules:[58,59,60],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[31],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[30],inclusive:!1},CLASS_STYLE:{rules:[28],inclusive:!1},CLASS:{rules:[27],inclusive:!1},CLASSDEFID:{rules:[25],inclusive:!1},CLASSDEF:{rules:[23,24],inclusive:!1},acc_descr_multiline:{rules:[20,21],inclusive:!1},acc_descr:{rules:[18],inclusive:!1},acc_title:{rules:[16],inclusive:!1},SCALE:{rules:[13,14,33,34],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[48],inclusive:!1},STATE_STRING:{rules:[49,50],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[9,10,36,37,38,39,40,41,46,47,51,52,53],inclusive:!1},ID:{rules:[9,10],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,10,11,12,15,17,19,22,26,29,32,35,53,57,68,69,70,71,72,73,74,76,77,78],inclusive:!0}}}}();function N(){this.yy={}}return r(N,`Parser`),N.prototype=M,M.Parser=N,new N}(),j.parser=j,M=j,N=`LR`,ee=`TB`,P=`state`,F=`relation`,te=`classDef`,ne=`style`,re=`applyClass`,I=`default`,ie=`divider`,ae=`fill:none`,oe=`fill: #333`,se=`c`,ce=`text`,le=`normal`,ue=`rect`,de=`rectWithTitle`,fe=`stateStart`,pe=`stateEnd`,me=`divider`,he=`roundedWithTitle`,ge=`note`,_e=`noteGroup`,L=`statediagram`,ve=`${L}-state`,ye=`transition`,be=`note`,xe=`${ye} note-edge`,Se=`${L}-${be}`,Ce=`${L}-cluster`,we=`${L}-cluster-alt`,Te=`parent`,Ee=`note`,De=`state`,R=`----`,Oe=`${R}${Ee}`,ke=`${R}${Te}`,Ae=r((e,t=ee)=>{if(!e.doc)return t;let n=t;for(let t of e.doc)t.stmt===`dir`&&(n=t.value);return n},`getDir`),je={getClasses:r(function(e,t){return t.db.extract(t.db.getRootDocV2()),t.db.getClasses()},`getClasses`),draw:r(async function(e,n,r,i){t.info(`REF0:`),t.info(`Drawing state diagram (v2)`,n);let{securityLevel:o,state:s,layout:c}=a();i.db.extract(i.db.getRootDocV2());let l=i.db.getData(),u=v(n,o);l.type=i.type,l.layoutAlgorithm=c,l.nodeSpacing=s?.nodeSpacing||50,l.rankSpacing=s?.rankSpacing||50,l.markers=[`barb`],l.diagramId=n,await y(l,u),p.insertTitle(u,`statediagramTitleText`,s?.titleTopMargin??25,i.db.getDiagramTitle()),_(u,8,L,s?.useMaxWidth??!0)},`draw`),getDir:Ae},z=new Map,B=0,r(x,`stateDomId`),Me=r((e,n,r,i,o,c,l,u)=>{t.trace(`items`,n),n.forEach(t=>{switch(t.stmt){case P:V(e,t,r,i,o,c,l,u);break;case I:V(e,t,r,i,o,c,l,u);break;case F:{V(e,t.state1,r,i,o,c,l,u),V(e,t.state2,r,i,o,c,l,u);let n={id:`edge`+B,start:t.state1.id,end:t.state2.id,arrowhead:`normal`,arrowTypeEnd:`arrow_barb`,style:ae,labelStyle:``,label:s.sanitizeText(t.description,a()),arrowheadStyle:oe,labelpos:se,labelType:ce,thickness:le,classes:ye,look:l};o.push(n),B++}}})},`setupDoc`),Ne=r((e,t=ee)=>{let n=t;if(e.doc)for(let t of e.doc)t.stmt===`dir`&&(n=t.value);return n},`getDir`),r(S,`insertOrUpdateNode`),r(C,`getClassesFromDbInfo`),r(w,`getStylesFromDbInfo`),V=r((e,n,r,i,o,c,l,u)=>{let d=n.id,f=r.get(d),p=C(f),m=w(f);if(t.info(`dataFetcher parsedItem`,n,f,m),d!==`root`){let r=ue;n.start===!0?r=fe:n.start===!1&&(r=pe),n.type!==I&&(r=n.type),z.get(d)||z.set(d,{id:d,shape:r,description:s.sanitizeText(d,a()),cssClasses:`${p} ${ve}`,cssStyles:m});let f=z.get(d);n.description&&(Array.isArray(f.description)?(f.shape=de,f.description.push(n.description)):f.description?.length>0?(f.shape=de,f.description=f.description===d?[n.description]:[f.description,n.description]):(f.shape=ue,f.description=n.description),f.description=s.sanitizeTextOrArray(f.description,a())),f.description?.length===1&&f.shape===de&&(f.shape=f.type===`group`?he:ue),!f.type&&n.doc&&(t.info(`Setting cluster for XCX`,d,Ne(n)),f.type=`group`,f.isGroup=!0,f.dir=Ne(n),f.shape=n.type===ie?me:he,f.cssClasses=`${f.cssClasses} ${Ce} ${c?we:``}`);let h={labelStyle:``,shape:f.shape,label:f.description,cssClasses:f.cssClasses,cssCompiledStyles:[],cssStyles:f.cssStyles,id:d,dir:f.dir,domId:x(d,B),type:f.type,isGroup:f.type===`group`,padding:8,rx:10,ry:10,look:l};if(h.shape===me&&(h.label=``),e&&e.id!==`root`&&(t.trace(`Setting node `,d,` to be child of its parent `,e.id),h.parentId=e.id),h.centerLabel=!0,n.note){let e={labelStyle:``,shape:ge,label:n.note.text,cssClasses:Se,cssStyles:[],cssCompilesStyles:[],id:d+Oe+`-`+B,domId:x(d,B,Ee),type:f.type,isGroup:f.type===`group`,padding:a().flowchart.padding,look:l,position:n.note.position},t=d+ke,r={labelStyle:``,shape:_e,label:n.note.text,cssClasses:f.cssClasses,cssStyles:[],id:d+ke,domId:x(d,B,Te),type:`group`,isGroup:!0,padding:16,look:l,position:n.note.position};B++,r.id=t,e.parentId=t,S(i,r,u),S(i,e,u),S(i,h,u);let s=d,c=e.id;n.note.position===`left of`&&(s=e.id,c=d),o.push({id:s+`-`+c,start:s,end:c,arrowhead:`none`,arrowTypeEnd:``,style:ae,labelStyle:``,classes:xe,arrowheadStyle:oe,labelpos:se,labelType:ce,thickness:le,look:l})}else S(i,h,u)}n.doc&&(t.trace(`Adding nodes children `),Me(n,n.doc,r,i,o,!c,l,u))},`dataFetcher`),Pe=r(()=>{z.clear(),B=0},`reset`),H=`[*]`,Fe=`start`,Ie=H,Le=`end`,Re=`color`,ze=`fill`,Be=`bgFill`,Ve=`,`,r(T,`newClassesList`),U=[],W=[],He=N,G=[],K=T(),Ue=r(()=>({relations:[],states:new Map,documents:{}}),`newDoc`),q={root:Ue()},J=q.root,Y=0,We=0,Ge={LINE:0,DOTTED_LINE:1},Ke={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},X=r(e=>JSON.parse(JSON.stringify(e)),`clone`),qe=r(e=>{t.info(`Setting root doc`,e),G=e},`setRootDoc`),Je=r(()=>G,`getRootDoc`),Z=r((e,t,n)=>{if(t.stmt===F)Z(e,t.state1,!0),Z(e,t.state2,!1);else if(t.stmt===P&&(t.id===`[*]`?(t.id=n?e.id+`_start`:e.id+`_end`,t.start=n):t.id=t.id.trim()),t.doc){let e=[],n=[],r;for(r=0;r<t.doc.length;r++)if(t.doc[r].type===ie){let i=X(t.doc[r]);i.doc=X(n),e.push(i),n=[]}else n.push(t.doc[r]);if(e.length>0&&n.length>0){let r={stmt:P,id:m(),type:`divider`,doc:X(n)};e.push(X(r)),t.doc=e}t.doc.forEach(e=>Z(t,e,!0))}},`docTranslator`),Ye=r(()=>(Z({id:`root`},{id:`root`,doc:G},!0),{id:`root`,doc:G}),`getRootDocV2`),Xe=r(e=>{let n;n=e.doc?e.doc:e,t.info(n),Ze(!0),t.info(`Extract initial document:`,n),n.forEach(e=>{switch(t.warn(`Statement`,e.stmt),e.stmt){case P:Q(e.id.trim(),e.type,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles);break;case F:tt(e.state1,e.state2,e.description);break;case te:at(e.id.trim(),e.classes);break;case ne:{let t=e.id.trim().split(`,`),n=e.styleClass.split(`,`);t.forEach(e=>{let t=$(e);if(t===void 0){let n=e.trim();Q(n),t=$(n)}t.styles=n.map(e=>e.replace(/;/g,``)?.trim())})}break;case re:st(e.id.trim(),e.styleClass)}});let r=Qe(),i=a().look;Pe(),V(void 0,Ye(),r,U,W,!0,i,K),U.forEach(e=>{if(Array.isArray(e.label)){if(e.description=e.label.slice(1),e.isGroup&&e.description.length>0)throw Error(`Group nodes can only have label. Remove the additional description for node [`+e.id+`]`);e.label=e.label[0]}})},`extract`),Q=r(function(e,n=I,r=null,i=null,o=null,c=null,l=null,u=null){let d=e?.trim();if(J.states.has(d)?(J.states.get(d).doc||(J.states.get(d).doc=r),J.states.get(d).type||(J.states.get(d).type=n)):(t.info(`Adding state `,d,i),J.states.set(d,{id:d,descriptions:[],type:n,doc:r,note:o,classes:[],styles:[],textStyles:[]})),i&&(t.info(`Setting state description`,d,i),typeof i==`string`&&nt(d,i.trim()),typeof i==`object`&&i.forEach(e=>nt(d,e.trim()))),o){let e=J.states.get(d);e.note=o,e.note.text=s.sanitizeText(e.note.text,a())}c&&(t.info(`Setting state classes`,d,c),(typeof c==`string`?[c]:c).forEach(e=>st(d,e.trim()))),l&&(t.info(`Setting state styles`,d,l),(typeof l==`string`?[l]:l).forEach(e=>ct(d,e.trim()))),u&&(t.info(`Setting state styles`,d,l),(typeof u==`string`?[u]:u).forEach(e=>lt(d,e.trim())))},`addState`),Ze=r(function(e){U=[],W=[],q={root:Ue()},J=q.root,Y=0,K=T(),e||c()},`clear`),$=r(function(e){return J.states.get(e)},`getState`),Qe=r(function(){return J.states},`getStates`),$e=r(function(){t.info(`Documents = `,q)},`logDocuments`),et=r(function(){return J.relations},`getRelations`),r(E,`startIdIfNeeded`),r(D,`startTypeIfNeeded`),r(O,`endIdIfNeeded`),r(k,`endTypeIfNeeded`),r(A,`addRelationObjs`),tt=r(function(e,t,n){if(typeof e==`object`)A(e,t,n);else{let r=E(e.trim()),i=D(e),o=O(t.trim()),c=k(t);Q(r,i),Q(o,c),J.relations.push({id1:r,id2:o,title:s.sanitizeText(n,a())})}},`addRelation`),nt=r(function(e,t){let n=J.states.get(e),r=t.startsWith(`:`)?t.replace(`:`,``).trim():t;n.descriptions.push(s.sanitizeText(r,a()))},`addDescription`),rt=r(function(e){return e.substring(0,1)===`:`?e.substr(2).trim():e.trim()},`cleanupLabel`),it=r(()=>(We++,`divider-id-`+We),`getDividerId`),at=r(function(e,t=``){K.has(e)||K.set(e,{id:e,styles:[],textStyles:[]});let n=K.get(e);t?.split(Ve).forEach(e=>{let t=e.replace(/([^;]*);/,`$1`).trim();if(RegExp(Re).exec(e)){let e=t.replace(ze,Be).replace(Re,ze);n.textStyles.push(e)}n.styles.push(t)})},`addStyleClass`),ot=r(function(){return K},`getClasses`),st=r(function(e,t){e.split(`,`).forEach(function(e){let n=$(e);if(n===void 0){let t=e.trim();Q(t),n=$(t)}n.classes.push(t)})},`setCssClass`),ct=r(function(e,t){let n=$(e);n!==void 0&&n.styles.push(t)},`setStyle`),lt=r(function(e,t){let n=$(e);n!==void 0&&n.textStyles.push(t)},`setTextStyle`),ut={getConfig:r(()=>a().state,`getConfig`),getData:r(()=>{let e=a();return{nodes:U,edges:W,other:{},config:e,direction:Ae(Ye())}},`getData`),addState:Q,clear:Ze,getState:$,getStates:Qe,getRelations:et,getClasses:ot,getDirection:r(()=>He,`getDirection`),addRelation:tt,getDividerId:it,setDirection:r(e=>{He=e},`setDirection`),cleanupLabel:rt,lineType:Ge,relationType:Ke,logDocuments:$e,getRootDoc:Je,setRootDoc:qe,getRootDocV2:Ye,extract:Xe,trimColon:r(e=>e&&e[0]===`:`?e.substr(1).trim():e.trim(),`trimColon`),getAccTitle:n,setAccTitle:f,getAccDescription:i,setAccDescription:l,addStyleClass:at,setCssClass:st,addDescription:nt,setDiagramTitle:u,getDiagramTitle:d},dt=r(e=>`
defs #statediagram-barbEnd {
    fill: ${e.transitionColor};
    stroke: ${e.transitionColor};
  }
g.stateGroup text {
  fill: ${e.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${e.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${e.stateLabelColor};
}

g.stateGroup rect {
  fill: ${e.mainBkg};
  stroke: ${e.nodeBorder};
}

g.stateGroup line {
  stroke: ${e.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${e.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${e.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${e.noteBorderColor};
  fill: ${e.noteBkgColor};

  text {
    fill: ${e.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${e.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${e.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${e.edgeLabelBackground};
  p {
    background-color: ${e.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${e.edgeLabelBackground};
    fill: ${e.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${e.transitionLabelColor||e.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${e.transitionLabelColor||e.tertiaryTextColor};
}

.stateLabel text {
  fill: ${e.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${e.specialStateColor};
  stroke: ${e.specialStateColor};
}

.node .fork-join {
  fill: ${e.specialStateColor};
  stroke: ${e.specialStateColor};
}

.node circle.state-end {
  fill: ${e.innerEndBackground};
  stroke: ${e.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${e.compositeBackground||e.background};
  // stroke: ${e.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${e.stateBkg||e.mainBkg};
  stroke: ${e.stateBorder||e.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${e.mainBkg};
  stroke: ${e.stateBorder||e.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${e.lineColor};
}

.statediagram-cluster rect {
  fill: ${e.compositeTitleBackground};
  stroke: ${e.stateBorder||e.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${e.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${e.stateBorder||e.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${e.compositeBackground||e.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${e.altBackground?e.altBackground:`#efefef`};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${e.altBackground?e.altBackground:`#efefef`};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${e.noteBkgColor};
  stroke: ${e.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${e.noteBkgColor};
  stroke: ${e.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${e.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${e.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${e.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${e.lineColor};
  stroke: ${e.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${e.textColor};
}
`,`getStyles`)})))()}export{dt as a,je as i,ut as n,M as r,ft as t};