(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[629],{705:function(i,t,l){!function(i){"use strict";i.defineMode("gas",(function(i,t){var l=[],n="",e={".abort":"builtin",".align":"builtin",".altmacro":"builtin",".ascii":"builtin",".asciz":"builtin",".balign":"builtin",".balignw":"builtin",".balignl":"builtin",".bundle_align_mode":"builtin",".bundle_lock":"builtin",".bundle_unlock":"builtin",".byte":"builtin",".cfi_startproc":"builtin",".comm":"builtin",".data":"builtin",".def":"builtin",".desc":"builtin",".dim":"builtin",".double":"builtin",".eject":"builtin",".else":"builtin",".elseif":"builtin",".end":"builtin",".endef":"builtin",".endfunc":"builtin",".endif":"builtin",".equ":"builtin",".equiv":"builtin",".eqv":"builtin",".err":"builtin",".error":"builtin",".exitm":"builtin",".extern":"builtin",".fail":"builtin",".file":"builtin",".fill":"builtin",".float":"builtin",".func":"builtin",".global":"builtin",".gnu_attribute":"builtin",".hidden":"builtin",".hword":"builtin",".ident":"builtin",".if":"builtin",".incbin":"builtin",".include":"builtin",".int":"builtin",".internal":"builtin",".irp":"builtin",".irpc":"builtin",".lcomm":"builtin",".lflags":"builtin",".line":"builtin",".linkonce":"builtin",".list":"builtin",".ln":"builtin",".loc":"builtin",".loc_mark_labels":"builtin",".local":"builtin",".long":"builtin",".macro":"builtin",".mri":"builtin",".noaltmacro":"builtin",".nolist":"builtin",".octa":"builtin",".offset":"builtin",".org":"builtin",".p2align":"builtin",".popsection":"builtin",".previous":"builtin",".print":"builtin",".protected":"builtin",".psize":"builtin",".purgem":"builtin",".pushsection":"builtin",".quad":"builtin",".reloc":"builtin",".rept":"builtin",".sbttl":"builtin",".scl":"builtin",".section":"builtin",".set":"builtin",".short":"builtin",".single":"builtin",".size":"builtin",".skip":"builtin",".sleb128":"builtin",".space":"builtin",".stab":"builtin",".string":"builtin",".struct":"builtin",".subsection":"builtin",".symver":"builtin",".tag":"builtin",".text":"builtin",".title":"builtin",".type":"builtin",".uleb128":"builtin",".val":"builtin",".version":"builtin",".vtable_entry":"builtin",".vtable_inherit":"builtin",".warning":"builtin",".weak":"builtin",".weakref":"builtin",".word":"builtin"},b={},r=(t.architecture||"x86").toLowerCase();function u(i,t){for(var l,n=!1;null!=(l=i.next());){if("/"===l&&n){t.tokenize=null;break}n="*"===l}return"comment"}return"x86"===r?(n="#",b.ax="variable",b.eax="variable-2",b.rax="variable-3",b.bx="variable",b.ebx="variable-2",b.rbx="variable-3",b.cx="variable",b.ecx="variable-2",b.rcx="variable-3",b.dx="variable",b.edx="variable-2",b.rdx="variable-3",b.si="variable",b.esi="variable-2",b.rsi="variable-3",b.di="variable",b.edi="variable-2",b.rdi="variable-3",b.sp="variable",b.esp="variable-2",b.rsp="variable-3",b.bp="variable",b.ebp="variable-2",b.rbp="variable-3",b.ip="variable",b.eip="variable-2",b.rip="variable-3",b.cs="keyword",b.ds="keyword",b.ss="keyword",b.es="keyword",b.fs="keyword",b.gs="keyword"):"arm"!==r&&"armv6"!==r||(n="@",e.syntax="builtin",b.r0="variable",b.r1="variable",b.r2="variable",b.r3="variable",b.r4="variable",b.r5="variable",b.r6="variable",b.r7="variable",b.r8="variable",b.r9="variable",b.r10="variable",b.r11="variable",b.r12="variable",b.sp="variable-2",b.lr="variable-2",b.pc="variable-2",b.r13=b.sp,b.r14=b.lr,b.r15=b.pc,l.push((function(i,t){if("#"===i)return t.eatWhile(/\w/),"number"}))),{startState:function(){return{tokenize:null}},token:function(i,t){if(t.tokenize)return t.tokenize(i,t);if(i.eatSpace())return null;var r,a,o=i.next();if("/"===o&&i.eat("*"))return t.tokenize=u,u(i,t);if(o===n)return i.skipToEnd(),"comment";if('"'===o)return function(i,t){for(var l,n=!1;null!=(l=i.next());){if(l===t&&!n)return!1;n=!n&&"\\"===l}}(i,'"'),"string";if("."===o)return i.eatWhile(/\w/),a=i.current().toLowerCase(),(r=e[a])||null;if("="===o)return i.eatWhile(/\w/),"tag";if("{"===o)return"braket";if("}"===o)return"braket";if(/\d/.test(o))return"0"===o&&i.eat("x")?(i.eatWhile(/[0-9a-fA-F]/),"number"):(i.eatWhile(/\d/),"number");if(/\w/.test(o))return i.eatWhile(/\w/),i.eat(":")?"tag":(a=i.current().toLowerCase(),(r=b[a])||null);for(var s=0;s<l.length;s++)if(r=l[s](o,i,t))return r},lineComment:n,blockCommentStart:"/*",blockCommentEnd:"*/"}}))}(l(8))}}]);
//# sourceMappingURL=629.5d7c026a.chunk.js.map