﻿try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.exchange.clients.owa2.client.common.compose.js'] = (new Date()).getTime();
Type.registerNamespace("_cmc");_cmc.$4x=function(n,t,i){this.$$d_$E5Y=Function.createDelegate(this,this.$E5Y);this.$$d_$3Nv=Function.createDelegate(this,this.$3Nv);_cmc.$4x.initializeBase(this,[n]);this.$19=t;this.set_$WY(2);this.get_$4X().set_$U5(22);n.setAttribute("contenteditable","true");n.setAttribute("spellcheck","true");n.setAttribute("useinlinestyle","true");n.style.outline="none";this.$AP8(n,i.get_$1f());this.$Bn(352)};_cmc.$4x.prototype={$19:null,$192:null,$9l:!1,$1bX:null,$5Uz:!1,$16w:null,$170:null,set_$eU:function(n){if(n){var t=this.$192===n;this.$192=n;n.get_$6bd()||this.$81W(n);t||this.$4("CallContext")}return n},set_$FD:function(n){this.$9l=n;this.$4("IsInitialized");return n},add_$1Iu:function(n){this.$16w||(this.$16w=new(_js.$CS.$$(_y.$1Ah)));this.$16w.$IP(n)},remove_$1Iu:function(n){this.$16w&&this.$16w.$S6(n)},add_$1CN:function(n){this.$170||(this.$170=new(_js.$CS.$$(_y.$1Ai)));this.$170.$IP(n)},remove_$1CN:function(n){this.$170&&this.$170.$S6(n)},get_$AGt:function(){var n=this.$6UE();return n?n.toString():null},get_$AGv:function(){var n=this.$6UE();return n?n.startContainer:null},$4c1:function(){this.$2me("bold",!1,null)},$59S:function(){this.$2me("italic",!1,null)},$5pG:function(){this.$2me("underline",!1,null)},$6Gb:function(n){this.$2me("forecolor",!1,n)},$5yo:function(n){this.$2me("backcolor",!1,n)},$2Gr:function(){this.$2me("undo",!1,null)},$2DM:function(){this.$2me("redo",!1,null)},$EwM:function(){this.$1L9(352)},$Bi3:function(){var t=null;var n=this.$40F();if(!this.$6fJ(n.getRangeAt(0)))return null;n.focusNode.childNodes.length>0&&n.focusNode.childNodes[n.focusOffset-1].nodeName.toLowerCase()==="a"?t=n.focusNode.childNodes[n.focusOffset-1]:n.focusNode.childNodes.length>0&&n.focusNode.lastChild.nodeName.toLowerCase()==="a"?t=n.focusNode.lastChild:n.focusNode.previousSibling&&n.focusNode.previousSibling.nodeName.toLowerCase()==="a"&&(t=n.focusNode.previousSibling);return t},$6UE:function(){var u=this.$1Aj();if(u){var i=u.startContainer;var t=u.startOffset;if(!t)return null;if(i.nodeName==="#text"){var f=t;var n=document.createRange();n.setEnd(i,f);for(;;){t--;n.setStart(i,t);var r=n.toString();if(r.startsWith(" ")||r.startsWith(String.fromCharCode(160))||r.startsWith(String.fromCharCode(8203))){n.setStart(i,t+1);return n}else if(!t)return n}}}return null},$E5Y:function(n){var t=this.$6UE();if(t){t.deleteContents();this.$53C(t,$(n));var i=this.$40F();t.collapse(!1);i.removeAllRanges();i.addRange(t)}},$3Nv:function(){return!!this.$5ox()},$3ah:function(n){this.$16w&&this.$16w.$Nl(n)},$3ai:function(n){this.$170&&this.$170.$Nl(n)},$3YA:function(n){if(!this.$5Uz){this.$1bX=null;_js.Trace.logInfo(this.get_$p(),"selectionRangeAtLastBlur set to null on focus")}this.$3ah(new _cmc.$u3(this))},$4K:function(){this.$5Uz=!0;var n=_js.$C.prototype.$4K.call(this);this.$5Uz=!1;_js.Trace.logInfo(this.get_$p(),n?"can focus":"cannot focus");_js.Trace.logInfo(this.get_$p(),this.$1bX?"selectionRangeAtLastBlur is not null":"selectionRangeAtLastBlur is null");if(n&&this.$1bX&&this.$6fJ(this.$1bX)){var t=this.$40F();t.removeAllRanges();t.addRange(this.$1bX);_js.Trace.logInfo(this.get_$p(),"focus set to selectionRangeAtLastBlur");this.$1bX=null}return n},get_$6XJ:function(){return this.get_$S().find("table").length>0},$1Aj:function(){var n=null;var t=null;try{n=this.$5ox();if(!n){t=document.activeElement;this.get_$S().focus();n=this.$5ox()}}catch(i){_js.Trace.logException(_cmc.$4x.$2B,i,"Exception encountered attempting to get selection for insertion")}finally{$B(t)||t.focus()}return n},$3R:function(){_js.$C.prototype.$3R.call(this);this.get_$S()[0].parentNode.appendChild($(_cmc.$4x.$9Jk)[0]);var n=this.$8TW();this.set_$eU(new _cmc.$1NZ(n));_js.Trace.logInfo(_cmc.$4x.$2B,"sending get content callback with content on activation with content "+n);this.set_$FD(!0)},$1Zz:function(n){_js.$C.prototype.$1Zz.call(this,n);n.get_$9t()===8&&n.$P8();if(n.get_$9t()===9&&n.$Xo()){var t=new _cmc.$u4(this,!0);this.$3ai(t);t.get_$DS()&&this.$Y0(n)}},$1ja:function(n){_js.$C.prototype.$1ja.call(this,n);var t=this.$5ox();if(t){this.$1bX=t;_js.Trace.logInfo(this.get_$p(),"selectionRangeAtLastBlur is set to current selection")}},$8TW:function(){var n=this.get_$S().clone();n.removeAttr("contenteditable");n.removeAttr("spellcheck");n.removeClass();n.css("min-height","");n.css("height","");n.css("overflow","");n.removeAttr("tabindex");n.removeAttr("id");n.removeAttr("autoid");var t=n.wrap("<div>").parents().html();this.$19.get_$E1()&&document.documentMode===11&&(t=t.replace(_cmc.$4x.$35s,""));var i='<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style type="text/css" style="display:none"><!-- p {margin-top:0;margin-bottom:0;} --></style></head><body>'+t+"</body></html>";_js.Trace.logInfo(_cmc.$4x.$2B,"Got full content from content editable div: "+i);return i},$81W:function(n){if(_y.$1Al.isInstanceOfType(n)){var r=this.$8TW();n.set_$Cg(r);_js.Trace.logInfo(_cmc.$4x.$2B,"executing get content call context, content="+r)}else if(_y.$1RC.isInstanceOfType(n)){var u=n.get_$Cg();var h=this.$7BW(u);var s=this.$8eX(h);this.get_$S().html(s);_js.Trace.logInfo(_cmc.$4x.$2B,"executing set content call context, content="+u)}else if(_y.$1Ar.isInstanceOfType(n)){var t=n;var i=null;if(t.get_$56A()){var c=n.get_$Cg();var f=this.$7BW(c);var e=this.$8eX(f);i=$("<div>"+e+"</div>").contents()}else{var o=$("<div/>").text(t.get_$Cg()).html();i=$("<div>"+o+"</div>").contents()}t.get_$42c()===1?this.$C5o(i):t.get_$42c()===2?this.$8en(i,t.get_$7d1()):this.$C5p(i,t.get_$AC8(),t.get_$9eJ())}else if(_y.$1BW.isInstanceOfType(n))this.get_$S().focus();else throw Error.notImplemented("content editable div does not support call context type "+Object.getType(n).getName());},$AP8:function(n,t){var u="Calibri";var f="#000000";var r="12";if(t){t.get_$3AN()&&(u=t.get_$3AN());t.get_$3AM()&&(f=t.get_$3AM());t.get_$2Kj()>0&&t.get_$2Kj()<_cmc.$4x.$1pZ.length&&(r=_cmc.$4x.$1pZ[t.get_$2Kj()])}var i=n.style;i.fontSize=r+"pt";i.color=f;i.backgroundColor="#FFFFFF";var e=this.$3zq(u);i.fontFamily=e;_js.Trace.logInfo(_cmc.$4x.$2B,"applying user default font "+u+", color "+f+", size "+r+", family "+e)},$3zq:function(n){for(var t=0;t<_cmc.$4x.$1Mg.length;++t)if(_cmc.$4x.$1Mg[t][0]===n)return _cmc.$4x.$1Mg[t][1];return n},$5ox:function(){var t=this.$40F();if(t)try{var n=t.getRangeAt(0);if(this.$6fJ(n))return n}catch(i){_js.Trace.logInfo(_cmc.$4x.$2B,"CED: TryGetSelectionRange: Ignoring an exception. Details: "+i.message)}return null},$6fJ:function(n){if($B(n.commonAncestorContainer))return!1;var r=n.commonAncestorContainer;var u=$(r);var t=this.getAttachedElement();var i=u.closest(t);return i.length?!0:!1},$53C:function(n,t){for(var u=t.get(),e=u.length,i=0;i<e;++i){var r=u[i];n.collapse(!1);if($B(n.insertNode))$B(n.pasteHTML)||n.pasteHTML(r.innerHTML);else{var f=document.importNode(r,!0);n.insertNode(f)}}},$8en:function(n,t){_js.Trace.logInfo(_cmc.$4x.$2B,"Appending element. Html: "+n.html()+"");var u=this.get_$S().find('div[id^="Signature"]');if(t&&u&&u.length>0){var r=u.get(0);var i=document.createRange();i.selectNodeContents(r.previousSibling?r.previousSibling:r);i.collapse(!0);this.$53C(i,n)}else this.get_$S().append(n)},$C5o:function(n){_js.Trace.logInfo(_cmc.$4x.$2B,"Prepending element. Html: "+n.html()+"");this.get_$S().prepend(n)},$C5p:function(n,t,i){var r=this.$1Aj();if(r){_js.Trace.logInfo(_cmc.$4x.$2B,"Got a good selection range. Calling InsertElementAtRange");!r.collapsed&&i&&r.deleteContents();var f=r.cloneRange();this.$53C(r,n);var u=this.$40F();u.removeAllRanges();if(t){_js.Trace.logInfo(_cmc.$4x.$2B,"Set new selection after insertion");r.collapse(!1);u.addRange(r)}else{_js.Trace.logInfo(_cmc.$4x.$2B,"Restore original selection range after insertion");u.addRange(f)}}else{_js.Trace.logInfo(_cmc.$4x.$2B,"Could not get a Range to insert content, so appending the element to the end of the CED");this.$8en(n,!0)}},$2me:function(n,t,i){this.$4K();if(this.get_$k()&&_y.$JF.isInstanceOfType(this.get_$k())){var r=this.get_$k().get_$do();if(r){r.document.execCommand(n,t,i);return}}document.execCommand(n,t,i)},$7BW:function(n){_js.Trace.logInfo(this.get_$p(),"RemovePStyles: RemovePStyles");return n.replace(_cmc.$4x.$4oH,"$1").replace(_cmc.$4x.$4ox,"")},$8eX:function(n){return this.$19.get_$E1()&&document.documentMode===11?n.replace(_cmc.$4x.$804,"<p>&#8203;</p>"):n},$40F:function(){if(this.get_$k()&&_y.$JF.isInstanceOfType(this.get_$k())){var n=this.get_$k().get_$do();if(n)return n.getSelection()}return window.getSelection()}};_cmc.$i1=function(n){_cmc.$i1.initializeBase(this,[n])};_cmc.$i1.prototype={set_$eU:function(n){n&&this.$3tz(n);return n},$3tz:function(n){if(_cmc.$11P.isInstanceOfType(n)){var t=n;if(t.$569){t.$56W=!0;return}var f=t.$Fd?_ff.$2n.$1om(t.$Fd):"";var r=this.get_$1O();var i=r.substring(0,this.get_$7E1())+f+r.substr(this.get_$7E0());i=this.$7Xh(i,this.get_$De());this.set_$1O(i)}else if(_cmc.$uS.isInstanceOfType(n)){var u=n;u.$2E6=this.get_$1O().substring(this.get_$7E1(),this.get_$7E0())}}};_cmc.$1La=function(n,t){this.$2Y=n;this.$6D8=t};_cmc.$1La.prototype={$2Y:null,$6D8:0,get_$4mc:function(){return this.$6D8},get_$Bo:function(){return this.$2Y},get_$DS:function(){return!1},set_$DS:function(n){return n}};_cmc.$18p=function(n,t,i,r){this.$2Y=n;this.$vS=t;this.$kE=i;this.$1TX=r};_cmc.$18p.prototype={$2Y:null,$vS:null,$kE:0,$1TX:null,get_$2jJ:function(){return this.$vS},get_$4eo:function(){return this.$kE},get_$4ep:function(){return this.$1TX},get_$Bo:function(){return this.$2Y},get_$DS:function(){return!1},set_$DS:function(n){return n}};_cmc.$IM=function(n,t,i){this.$6aG=n;this.$Fd=t;this.$569=i};_cmc.$IM.prototype={$Fd:null,$569:!1,$1HC:!1,$6aG:0,$2gb:!1,$2DW:!0,$36A:!0,$6hn:!1,$7U9:null,get_$Cg:function(){return this.$Fd},get_$56A:function(){return this.$569},get_$6bd:function(){return this.$1HC},get_$42c:function(){return this.$6aG},get_$AC8:function(){return this.$2gb},get_$9eJ:function(){return this.$2DW},get_$7d1:function(){return this.$36A},get_$6ho:function(){return this.$6hn},get_$A6K:function(){return this.$7U9}};_cmc.$1VM=function(){};_cmc.$1VM.prototype={get_$6bd:function(){return!1}};function CommonComposeComponent(){}CommonComposeComponent.$$cctor=function(){_a.$v.get_$P().$q(CommonComposeComponent)};CommonComposeComponent.prototype={$2ki:function(n,t,i){n.$Bw(_cmc.$tS).$1J()},$Bjd:function(){return null}};_cmc.$1LZ=function(){};_cmc.$1LZ.prototype={$Fd:null,$1HC:!1,get_$Cg:function(){return this.$Fd},set_$Cg:function(n){this.$Fd=n;return n},get_$6bd:function(){return this.$1HC}};_cmc.$1Lc=function(n){this.$Fd=n};_cmc.$1Lc.prototype={$Fd:null,$1HC:!1,get_$Cg:function(){return this.$Fd},get_$6bd:function(){return this.$1HC}};_cmc.$1NZ=function(n){this.$1HC=!0;this.$Fd=n};_cmc.$1NZ.prototype={$Fd:null,$1HC:!1,get_$Cg:function(){return this.$Fd},set_$Cg:function(n){this.$Fd=n;return n},get_$6bd:function(){return this.$1HC}};_cmc.$1Na=function(){};_cmc.$1Na.prototype={$Fd:null,$1HC:!1,get_$Cg:function(){return this.$Fd},set_$Cg:function(n){this.$Fd=n;return n},get_$6bd:function(){return this.$1HC}};_cmc.$1FQ=function(n){this.$Fd=n};_cmc.$1FQ.prototype={$Fd:null,$1HC:!1,get_$Cg:function(){return this.$Fd},get_$6bd:function(){return this.$1HC}};_cmc.$1FR=function(n){this.$7CS=n};_cmc.$1FR.prototype={$7CS:!1,get_$6bd:function(){return!1},get_$E6o:function(){return this.$7CS}};_cmc.$gT=function(n){this.$8M=n};_cmc.$gT.prototype={$8M:null,get_$6bd:function(){return!1}};_cmc.$hM=function(n){this.$15a=n};_cmc.$hM.prototype={$15a:null,get_$6bd:function(){return!1}};_cmc.$11Q=function(n,t,i,r,u,f){this.$B7=n;this.$2Uq=t;this.$5B0=i;this.$1o9=r;this.$42X=u;this.$535=f};_cmc.$11Q.prototype={$B7:null,$2Uq:null,$5B0:null,$1o9:null,$42X:null,$535:null,get_$6bd:function(){return!1},get_$C5Y:function(){return this.$42X}};_cmc.$Sm=function(n,t){this.$15a=n;this.$2mr=t};_cmc.$Sm.prototype={$15a:null,$2mr:null,get_$6bd:function(){return!1}};_cmc.$rj=function(n,t){this.$2Kr=n;this.$15a=t};_cmc.$rj.prototype={$2Kr:null,$15a:null,get_$6bd:function(){return!1}};_cmc.$rk=function(n,t,i){this.$15a=n;this.$B7=t;this.$2Kr=i};_cmc.$rk.prototype={$15a:null,$B7:null,$2Kr:null,get_$6bd:function(){return!1}};_cmc.$Gj=function(n,t){this.$7Q3=n;this.$7Py=t};_cmc.$Gj.prototype={$7Q3:!1,$7Py:!1,get_$EfD:function(){return this.$7Q3},get_$Ef4:function(){return this.$7Py},get_$6bd:function(){return!1}};_cmc.$uS=function(n){if(n==="text"||n==="html")this.$vc=n;else throw Error.argument("coercionType","Unsupported coercionType value.");};_cmc.$uS.prototype={$vc:null,$2E6:null,$2TA:!1,$3hh:null,set_$6de:function(n){this.$2TA=n;return n},set_$1DS:function(n){if(n==="subject"||n==="body")this.$3hh=n;else throw Error.argument("sourceProperty","Unsupported sourceProperty value.");return n},get_$6bd:function(){return!1}};_cmc.$11P=function(n,t,i){_cmc.$11P.initializeBase(this,[0,n,i]);this.$2DW=t;this.$1HC=!1};_cmc.$11P.prototype={$56W:!1,$2TA:!1,$3hh:null,set_$6de:function(n){this.$2TA=n;return n},set_$1DS:function(n){if(n==="subject"||n==="body")this.$3hh=n;else throw Error.argument("sourceProperty","Unsupported sourceProperty value.");return n}};_cmc.$14Y=function(){};_cmc.$14Y.prototype={get_$6bd:function(){return!1}};_cmc.$18o=function(n,t){this.$2Y=n;this.$6hL=t};_cmc.$18o.prototype={$2Y:null,$6hL:null,get_$1n:function(){return this.$6hL},get_$Bo:function(){return this.$2Y},get_$DS:function(){return!1},set_$DS:function(n){return n}};_cmc.$1Lb=function(n,t){this.$2Y=n;this.$27O=t};_cmc.$1Lb.prototype={$2Y:null,$27O:null,get_$nX:function(){return this.$27O},get_$Bo:function(){return this.$2Y},get_$DS:function(){return!1},set_$DS:function(n){return n}};_cmc.$u3=function(n){this.$2Y=n};_cmc.$u3.prototype={$2Y:null,get_$Bo:function(){return this.$2Y},get_$DS:function(){return!1},set_$DS:function(n){return n}};_cmc.$u4=function(n,t){this.$2Y=n;this.$Km=t};_cmc.$u4.prototype={$2Y:null,$Km:!1,get_$Bo:function(){return this.$2Y},get_$DS:function(){return this.$Km},set_$DS:function(n){this.$Km=n;return n}};_cmc.$18q=function(n,t,i,r,u){this.$2Y=n;this.$9l=t;this.$HW=i;this.$2mF=r;this.$7Q8=u};_cmc.$18q.prototype={$2Y:null,$9l:!1,$HW:!1,$2mF:null,$7Q8:!1,get_$FD:function(){return this.$9l},get_$QE:function(){return this.$HW},get_$4lX:function(){return this.$2mF},get_$EfS:function(){return this.$7Q8},get_$Bo:function(){return this.$2Y},get_$DS:function(){return!1},set_$DS:function(n){return n}};_cmc.$1Jm=function(n,t){_cmc.$1Jm.initializeBase(this);this.$5h=n;this.$2B=t};_cmc.$1Jm.prototype={$5h:null,$2B:null,$1Sp:function(n){if(this.$5h){var t=this;_js.$D.get_$P().$2W(_a.$0.$1n,"ComposeCopyPasteViewModel.OnAttachViaString",function(){var i=_a.$8.$1g(_a.$0.$1n,"AttachmentCopyAndPasteItemAttachments",!0);t.$5h.$36f(n,null,i)},0)}}};_cmc.$tS=function(){};_cmc.$tS.prototype={$I:function(n,t){return new _cmc.$1Jm(n,t)}};_cmc.$4x.registerClass("_cmc.$4x",_js.$C);_cmc.$i1.registerClass("_cmc.$i1",_fc.$1M);_cmc.$1La.registerClass("_cmc.$1La",null,_y.$1QB,_y.$1cm);_cmc.$18p.registerClass("_cmc.$18p",null,_y.$1QD,_y.$1cm);_cmc.$IM.registerClass("_cmc.$IM",null,_y.$1Ar,_h.$1Ag);_cmc.$1VM.registerClass("_cmc.$1VM",null,_y.$1BQ,_h.$1Ag);CommonComposeComponent.registerClass("CommonComposeComponent",null,_a.$1e2);_cmc.$1LZ.registerClass("_cmc.$1LZ",null,_y.$1Al,_h.$1Ag);_cmc.$1Lc.registerClass("_cmc.$1Lc",null,_y.$1RC,_h.$1Ag);_cmc.$1NZ.registerClass("_cmc.$1NZ",null,_y.$1Al,_h.$1Ag);_cmc.$1Na.registerClass("_cmc.$1Na",null,_y.$1Al,_h.$1Ag);_cmc.$1FQ.registerClass("_cmc.$1FQ",null,_y.$1RC,_h.$1Ag);_cmc.$1FR.registerClass("_cmc.$1FR",null,_y.$1BW,_h.$1Ag);_cmc.$gT.registerClass("_cmc.$gT",null,_h.$1Ag);_cmc.$hM.registerClass("_cmc.$hM",null,_h.$1Ag);_cmc.$11Q.registerClass("_cmc.$11Q",null,_y.$1cc,_h.$1Ag);_cmc.$Sm.registerClass("_cmc.$Sm",null,_h.$1Ag);_cmc.$rj.registerClass("_cmc.$rj",null,_h.$1Ag);_cmc.$rk.registerClass("_cmc.$rk",null,_h.$1Ag);_cmc.$Gj.registerClass("_cmc.$Gj",null,_y.$116,_h.$1Ag);_cmc.$uS.registerClass("_cmc.$uS",null,_y.$1ck,_h.$1Ag);_cmc.$11P.registerClass("_cmc.$11P",_cmc.$IM,_y.$1ck,_h.$1Ag);_cmc.$14Y.registerClass("_cmc.$14Y",null,_y.$11d,_h.$1Ag);_cmc.$18o.registerClass("_cmc.$18o",null,_y.$1QA,_y.$1cm);_cmc.$1Lb.registerClass("_cmc.$1Lb",null,_y.$1QC,_y.$1cm);_cmc.$u3.registerClass("_cmc.$u3",null,_y.$1Ah,_y.$1cm);_cmc.$u4.registerClass("_cmc.$u4",null,_y.$1Ai,_y.$1cm);_cmc.$18q.registerClass("_cmc.$18q",null,_y.$1QE,_y.$1cm);_cmc.$1Jm.registerClass("_cmc.$1Jm",_a.$Ew);_cmc.$tS.registerClass("_cmc.$tS");_cmc.$4x.$804=new RegExp("<p>\\s*</p>","gim");_cmc.$4x.$35s=new RegExp("​","gim");_cmc.$4x.$2B=_a.$0.$IH;_cmc.$4x.$1pZ=["","8","10","12","14","18","24","36"];_cmc.$4x.$1Mg=[["Angsana New","'Angsana New',Serif"],["Arial","Arial,Helvetica,sans-serif"],["Calibri","Calibri,Arial,Helvetica,sans-serif"],["Cambria","Cambria,Serif"],["Comic Sans MS","'Comic Sans MS',Fantasy,cursive"],["Candara","Candara,Sans-Serif"],["Consolas","Consolas,monospace"],["Constantia","Constantia,Serif"],["Corbel","Corbel,Sans-Serif"],["Cordia New","'Cordia New',Sans-Serif"],["Courier New","'Courier New',monospace"],["DaunPenh","DaunPenh,Sans-Serif"],["Gautami","Gautami,Sans-Serif"],["Georgia","Georgia,serif"],["Gungsuh","Gungsuh,Serif"],["Helvetica","Helvetica, Sans-Serif"],["Impact","Impact, Charcoal, sans-serif"],["Iskoola Pota","'Iskoola Pota',Sans-Serif"],["Kalinga","Kalinga,Sans-Serif"],["Kartika","Kartika,Sans-Serif"],["Latha","Latha,Sans-Serif"],["Lucida Console","'Lucida Console', Monaco, monospace"],["Lucida Sans Unicode","'Lucida Sans Unicode', 'Lucida Grande', sans-serif"],["Mangal","Mangal,Sans-Serif"],["Palatino Linotype","'Palatino Linotype', 'Book Antiqua', Palatino, serif"],["Segoe","Segoe,'Segoe UI', Sans-Serif"],["Segoe UI","'Segoe UI',Sans-Serif"],["Symbol","Symbol,'Segoe UI',Tahoma,Sans-Serif"],["Tahoma","Tahoma, Geneva, sans-serif"],["Times","Times,'Times New Roman',Serif"],["Times New Roman","'Times New Roman', Times, serif"],["Trebuchet MS","'Trebuchet MS', sans-serif"],["Tunga","Tunga,Sans-Serif"],["Verdana","Verdana, Geneva, sans-serif"],["Vrinda","Vrinda,Sans-Serif"],["Wingdings","Wingdings,Zapf Dingbats"],["黑体","SimHei,'黑体',Sans-Serif"],["微軟正黑體","'Microsoft JhengHei','微軟正黑體',Sans-Serif"],["微软雅黑","'Microsoft YaHei','微软雅黑',Sans-Serif"],["宋体","SimSun,'宋体',Serif"],["宋体-ExtB","SimSun-ExtB,Serif"],["仿宋","FangSong,'仿宋',Serif"],["楷体","KaiTi,'楷体'，Sans-Serif"],["細明體","MingLiU,'細明體',Serif"],["細明體_HKSCS","MingLiU_HKSCS,'細明體_HKSCS',Serif"],["新細明體","PMingLiU,'新細明體',Serif"],["新細明體-ExtB","PMingLiU-ExtB,'新細明體-ExtB',Serif"],["맑은 고딕","'Malgun Gothic','맑은 고딕',Sans-Serif"],["굴림","Gulim,'굴림',Sans-Serif"],["돋움","Dotum,'돋움',Sans-Serif"],["바탕","Batang,'바탕',Serif"],["メイリオ","Meiryo,'メイリオ',Sans-Serif"],["ＭＳ ゴシック","'MS Gothic','ＭＳ ゴシック',Sans-Serif"],["ＭＳ Ｐゴシック","'MS PGothic','ＭＳ Ｐゴシック',Sans-Serif"],["ＭＳ 明朝","'MS Mincho','ＭＳ 明朝',Serif"],["ＭＳ Ｐ明朝","'MS PMincho','ＭＳ Ｐ明朝',Serif"],["Nyala","Nyala,Sans-Serif"],["Raavi","Raavi,Sans-Serif"],["Shruti","Shruti,Sans-Serif"],["Sylfaen","Sylfaen,Serif"]];_cmc.$4x.$9Jk='<style type="text/css" style="display:none;">P{margin-top:0;margin-bottom:0;}</style>';_cmc.$4x.$4oH=new RegExp("(<style[^>]*>)[\\s]*p[\\s]*{[^}]*}","i");_cmc.$4x.$4ox=new RegExp("}[\\s]*p[\\s]*{[^}]*","gi");CommonComposeComponent.$$cctor();
window.scriptsLoaded['microsoft.exchange.clients.owa2.client.common.compose.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.exchange.clients.owa2.client.common.compose.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }
