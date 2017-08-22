if (self.CavalryLogger) { CavalryLogger.start_js(["yZxz6"]); }

__d("MFirefoxAppDetect",[],(function a(b,c,d,e,f,g){function h(i,j){if(!navigator.mozApps){j();return;}if(window.locationbar&&!window.locationbar.visible){i();return;}if(navigator.mozApps.getSelf){var k=navigator.mozApps.getSelf();k.onsuccess=function(){k.result?i():j();};k.onerror=j;}else j();}g.isFirefoxApp=h;}),null);
__d('MPageHeaderLeft',['$','DOM','MFirefoxAppDetect'],(function a(b,c,d,e,f,g,h,i,j){var k={};function l(n){if(!k.back_button){var o=h('page');k.back_button=i.find(o,'a','back-button');k.menu_button=i.find(o,'a','menu-link');}if(n.show_back_button){i.hide(k.menu_button);i.show(k.back_button);}else{i.hide(k.back_button);i.show(k.menu_button);}}var m=function n(o){var p=window.navigator;if(p.standalone||k.isMozApp){l(o);}else if(k.isMozApp===undefined){k.lastConfig=o;j.isFirefoxApp(function q(){k.isMozApp=true;if(o===k.lastConfig){n(o);delete k.lastConfig;}},function q(){k.isMozApp=false;});}};g.main=m;}),null);
__d('TypeaheadNormalizer',[],(function a(b,c,d,e,f,g){var h={normalize:function i(j){return (''+j).toLocaleLowerCase().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,'').replace(/ +/g,' ').replace(/^\s*|\s*$/g,'');}};f.exports=h;}),null);
__d('TypeaheadInternationalNormalizer',['TypeaheadNormalizer'],(function a(b,c,d,e,f,g,h){var i={normalize:function j(k){var l=i._charmap;return h.normalize(k).replace(/[\u00e0-\u0450]/g,function(m){return m in l?l[m]:m;});},_charmap:{'\u00e0':'a','\u00e1':'a','\u00e2':'a','\u00e3':'a','\u00e4':'a','\u00e5':'a','\u00e6':'ae','\u00e7':'c','\u00e8':'e','\u00e9':'e','\u00ea':'e','\u00eb':'e','\u00ec':'i','\u00ed':'i','\u00ee':'i','\u00ef':'i','\u00f0':'d','\u00f1':'n','\u00f2':'o','\u00f3':'o','\u00f4':'o','\u00f5':'o','\u00f6':'o','\u00f8':'o','\u00f9':'u','\u00fa':'u','\u00fb':'u','\u00fc':'u','\u00fd':'y','\u00ff':'y','\u0153':'oe','\u0430':'a','\u0431':'b','\u0432':'v','\u0433':'g','\u0434':'d','\u0435':'e','\u0437':'z','\u0438':'i','\u0439':'j','\u043a':'k','\u043b':'l','\u043c':'m','\u043d':'n','\u043e':'o','\u043f':'p','\u0440':'r','\u0441':'s','\u0442':'t','\u0443':'u','\u0444':'f','\u0445':'h','\u0446':'c','\u0447':'ch','\u0448':'sh','\u044b':'y','\u044d':'e','\u044e':'u','\u044f':'ya'}};f.exports=i;}),null);
__d('TypeaheadSource',['DOM','TypeaheadNormalizer','createDeprecatedProperties','eventsMixinDeprecated','ex'],(function a(b,c,d,e,f,g,h,i,j,k,l){function m(n){'use strict';n=n||{};this.disableLongerQueryCacheHit=n.disableLongerQueryCacheHit;this._raw={};this._lookup={};this._firstSeenOnValue={};this.setNormalizer(i.normalize);this._excludeIDs={};}m.prototype.bindToTypeahead=function(n){'use strict';this._changeListener=n.listen('change',this.didChange.bind(this));this._startListener=n.listen('start',this.didStart.bind(this));this._clearListener=n.listen('clear',this.didClear.bind(this));};m.prototype.unbindFromTypeahead=function(){'use strict';this._changeListener.remove();this._startListener.remove();this._clearListener.remove();this._clearListener=null;};m.prototype.didChange=function(n){'use strict';return;};m.prototype.didStart=function(){'use strict';return;};m.prototype.didClear=function(){'use strict';return;};m.prototype.clearCache=function(){'use strict';this._raw={};this._lookup={};};m.prototype.addExcludeID=function(n){'use strict';if(n)this._excludeIDs[n]=true;};m.prototype.removeExcludeID=function(n){'use strict';if(n)delete this._excludeIDs[n];};m.prototype.addResult=function(n,o){'use strict';n=(this.getTransformer()||this._defaultTransformer)(n);if(n.id in this._raw)return;this._raw[n.id]=n;this._firstSeenOnValue[n.id]=this._firstSeenOnValue[n.id]||o;var p=this.tokenize(n.tokenizable||n.name);for(var q=0;q<p.length;++q){this._lookup[p[q]]=this._lookup[p[q]]||[];if(Object.prototype.toString.call(this._lookup[p[q]])!=='[object Array]')throw new Error(l('Lookup entry was not an array. key: %s. value: %s',p[q],this._lookup[p[q]]));this._lookup[p[q]].push(n.id);}};m.prototype.waitForResults=function(){'use strict';this.invoke('waiting');return this;};m.prototype.getResult=function(n){'use strict';return this._raw[n];};m.prototype.emptyResults=function(){'use strict';return [];};m.prototype.getMatchedResults=function(n){'use strict';var o=[];if(n===''){o=this.emptyResults();}else{var p=n,q={},r={},s={},t={},u=this.getQueryExtractor();if(u)n=u(n);var v=this.tokenize(n),w=v[v.length-1];v.sort(function(fa,ga){return ga.length-fa.length;});for(var x=0;x<v.length;++x){if(v[x] in t){v.splice(x--,1);continue;}t[v[x]]=true;var y=v[x];for(var z in this._lookup){var aa=this.checkFragmentMatches(z,y,p,w);if(aa){if(!(z in s)){s[z]=true;}else continue;var ba=this._lookup[z];for(var ca=0;ca<ba.length;++ca){var da=ba[ca];if(!r[da])r[da]={};if(!(y in r[da])){r[da][y]=true;q[da]=(q[da]||0)+1;}}}}}for(var ea in q)if(q[ea]==v.length&&!this._excludeIDs[ea]&&(!this.disableLongerQueryCacheHit||!this._firstSeenOnValue[ea]||this._firstSeenOnValue[ea].length<=n.length))o.push(ea);}this.sortHits(n,o);return this.renderNodes(n,o);};m.prototype.checkFragmentMatches=function(n,o,p,q){'use strict';return n.substr(0,o.length)===o;};m.prototype.matchResults=function(n){'use strict';var o=this.getMatchedResults(n);this.invoke('resultsready',o);this.invoke('complete');};m.prototype.sortHits=function(n,o){'use strict';var p=[],q;for(q=0;q<o.length;q++)p.push(this._raw[o[q]]);var r=function t(u,v){var w=u.sort||u.name,x=v.sort||v.name;return w.localeCompare(x);},s=this.getSortHandler()||function(t,u,v){u.sort(v);};s.call(this,n,p,r);o.splice(0,o.length);for(q=0;q<p.length;q++)o.push(p[q].id);};m.prototype.renderNodes=function(n,o){'use strict';var p=Math.min(this.getMaximumResultCount(),o.length),q=[];for(var r=0;r<p;r++)if(o[r] in this._raw){var s=this._raw[o[r]];if(!this.clientRendered)s=this.createNode(s);q.push(s);}return q;};m.prototype.createNode=function(n){'use strict';return h.create('a',{sigil:'typeahead-result',href:n.uri,name:n.name,rel:n.id,className:'jx-result'},n.display);};m.prototype.normalize=function(n){'use strict';return this.getNormalizer()(n);};m.prototype.tokenize=function(n){'use strict';n=this.normalize(n);if(!n.length)return [];return n.split(/\s/g);};m.prototype._defaultTransformer=function(n){'use strict';return {name:n[0],display:n[0],uri:n[1],id:n[2]};};k(m,['waiting','resultsready','complete','after_complete','initial_render','initial_results_ready','req_dispatch','req_sent','req_recv','unlock_render']);j(m,{normalizer:null,queryExtractor:null,transformer:null,maximumResultCount:5,sortHandler:null});Object.assign(m.prototype,{_raw:null,_lookup:null,_firstOnValue:null,_excludeIDs:null,_changeListener:null,_startListener:null,_clearListener:null,clientRendered:false});f.exports=m;}),null);
__d('TypeaheadOnDemandSource',['setTimeoutAcrossTransitions','TypeaheadSource','createDeprecatedProperties'],(function a(b,c,d,e,f,g,h,i,j){var k,l;k=babelHelpers.inherits(m,i);l=k&&k.prototype;function m(n,o){'use strict';l.constructor.call(this,o);this.uri=n;this.haveData={'':true};}m.prototype.didChange=function(n){'use strict';this.lastChange=Date.now();n=this.normalize(n);if(this.haveData[n]){this.matchResults(n);}else{this.waitForResults();h(this.sendRequest.bind(this,this.lastChange,n),this.getQueryDelay());}};m.prototype.sendRequest=function(){'use strict';throw new Error('Use MTypeaheadOnDemandSource!');};m.prototype.ondata=function(n,o,p){'use strict';if(p)for(var q=0;q<p.length;q++)this.addResult(p[q],o);this.haveData[o]=true;if(n!=this.lastChange)return;this.matchResults(o);};m.prototype.clearCache=function(){'use strict';l.clearCache.call(this);this.haveData={'':true};};j(m,{queryDelay:125,auxiliaryData:{}});Object.assign(m.prototype,{uri:null,lastChange:null,haveData:null});f.exports=m;}),null);
__d('TypeaheadCompositeSource',['TypeaheadSource','TypeaheadOnDemandSource','isElementNode'],(function a(b,c,d,e,f,g,h,i,j){var k,l;k=babelHelpers.inherits(m,h);l=k&&k.prototype;function m(n,o){'use strict';l.constructor.call(this);o=o||{};this.sources=n;this.cacheSourceCount=n.length;this.isWorkUser=o.isWorkUser;this.delayRender=false;this.allowEmptyMergeKey=true;this.shouldMergeResults=true;for(var p=0;p<this.sources.length;++p){var q=this.sources[p];q.listen('waiting',this.childWaiting.bind(this));q.listen('resultsready',this.childResultsReady.bind(this));q.listen('complete',this.childComplete.bind(this));if(q instanceof i){q.listen('req_dispatch',this.childRequestDispatch.bind(this));q.listen('req_sent',this.childRequestSent.bind(this));q.listen('req_recv',this.childRequestReceived.bind(this));q.listen('unlock_render',this.startRender.bind(this));if(q.enableImmediateReturnOfCachedResults===false)--this.cacheSourceCount;if(q.enableEagerSendRequest)this.delayRender=true;this.listen('initial_results_ready',q.setCacheResultsLength.bind(q));}}}m.prototype.didChange=function(n){'use strict';this.results=[];this.completeCount=0;this.readyCount=0;this.lockRender=true;for(var o=0;o<this.sources.length;++o)this.sources[o].didChange(n);};m.prototype.didStart=function(){'use strict';for(var n=0;n<this.sources.length;++n)this.sources[n].didStart();};m.prototype.didClear=function(){'use strict';this.results=[];};m.prototype.addExcludeID=function(n){'use strict';for(var o=0;o<this.sources.length;++o)this.sources[o].addExcludeID(n);};m.prototype.removeExcludeID=function(n){'use strict';for(var o=0;o<this.sources.length;++o)this.sources[o].removeExcludeID(n);};m.prototype.childWaiting=function(){'use strict';if(!this.results||!this.results.length)this.invoke('waiting');};m.prototype.childResultsReady=function(n){'use strict';if(this.shouldMergeResults){this.results=this.mergeResults(this.results||[],n);}else this.results=n;++this.readyCount;if(this.readyCount==this.cacheSourceCount){if(this.results!==null)this.results.forEach(function(o){o.isFromCache=true;});this.invoke('initial_results_ready',this.countValidResults(this.results));}if(!this.delayRender||!this.lockRender){this.invoke('resultsready',this.results);if(this.readyCount==this.cacheSourceCount)this.invoke('initial_render');}};m.prototype.childComplete=function(){'use strict';this.completeCount++;if(this.completeCount==this.sources.length){this.invoke('complete');this.invoke('after_complete');}};m.prototype.childRequestDispatch=function(n){'use strict';this.invoke('req_dispatch',n);};m.prototype.childRequestSent=function(){'use strict';this.invoke('req_sent');};m.prototype.childRequestReceived=function(n){'use strict';this.invoke('req_recv',n);};m.prototype.startRender=function(){'use strict';this.lockRender=false;this.invoke('resultsready',this.results);this.invoke('initial_render');};m.prototype.countValidResults=function(n){'use strict';var o=0;n.forEach(function(p){var q=j(p)?p.getAttribute(this.mergeKey):p[this.mergeKey];if(q!=null)++o;},this);return o;};m.prototype.getResult=function(n){'use strict';var o;for(var p=0;p<this.sources.length;++p){o=this.sources[p].getResult(n);if(o!==undefined)break;}return o;};m.prototype.disableEmptyMergeKey=function(){'use strict';this.allowEmptyMergeKey=false;};m.prototype.mergeResults=function(n,o){'use strict';var p=[].concat(n);if(o.length===0)return p;var q={},r;for(r=0;r<n.length;++r){var s=n[r],t=j(s)?s.getAttribute(this.mergeKey):s[this.mergeKey];q[t]=true;}for(r=0;r<o.length;++r){var u=o[r],v=j(u)?u.getAttribute(this.mergeKey):u[this.mergeKey];if((this.allowEmptyMergeKey||v!=null)&&!(v in q))p.push(u);}return p;};m.prototype.setShouldMergeResults=function(n){'use strict';this.shouldMergeResults=n;};Object.assign(m.prototype,{sources:null,results:null,completeCount:0,mergeKey:'rel',isWorkUser:false});f.exports=m;}),null);
__d('TypeaheadPreloadedSource',['TypeaheadSource'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,h);j=i&&i.prototype;function k(l){'use strict';j.constructor.call(this);this.uri=l;}k.prototype.didChange=function(l){'use strict';if(this.ready){this.matchResults(l);}else{this.lastValue=l;this.waitForResults();}};k.prototype.didStart=function(){'use strict';throw new Error('Use MTypeaheadPreloadedSource!');};k.prototype.ondata=function(l){'use strict';for(var m=0;m<l.length;++m)this.addResult(l[m]);if(this.lastValue!==null)this.matchResults(this.lastValue);this.ready=true;};Object.assign(k.prototype,{ready:false,uri:null,lastValue:null});f.exports=k;}),null);
__d('MInputFocus',['DOM','MViewport','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g,h,i,j){var k={scrollTo:function l(m,n){j(function(){h.hide(m);i.scrollTo(0,n);h.show(m);m.setSelectionRange(m.selectionEnd,m.selectionEnd);},0);}};f.exports=k;}),null);
__d('MTypeaheadCache',['MCache','URI'],(function a(b,c,d,e,f,g,h,i){var j='1',k=1209600000;function l(p){var q=h.getItem(p);if(!q||q.cacheVersion!==j){q={cacheVersion:j,cachedKeys:{}};h.setItem(p,q);}var r=q.cachedKeys,s=false,t=Date.now()-k;for(var u in r)if(r[u].time<t){s=true;delete r[u];}if(s)h.setItem(p,q);return q;}function m(p){return 'typeahead_'+p;}function n(p){var q=new i(p),r=q.getQueryData(),s=r.cacheBust;if(!s)q.addQueryData('noBust','');q.removeQueryData('cacheBust');var t=q.toString();return {cacheKey:t,busterToken:s};}var o={get:function p(q,r){var s=n(r),t=s.cacheKey,u=s.busterToken,v=l(m(q)).cachedKeys[t];if(v&&v.cacheBusterToken===u)return v.data;return null;},set:function p(q,r,s){var t=m(q),u=l(t),v=n(r),w=v.cacheKey,x=v.busterToken;u.cachedKeys[w]={cacheBusterToken:x,time:Date.now(),data:s};h.setItem(t,u);}};f.exports=o;}),null);
__d('MTypeaheadCachableSource',['MRequest','MTypeaheadCache','TypeaheadPreloadedSource','createDeprecatedProperties','eventsMixinDeprecated'],(function a(b,c,d,e,f,g,h,i,j,k,l){var m,n;m=babelHelpers.inherits(o,j);n=m&&m.prototype;function o(p,q){'use strict';n.constructor.call(this,p);this.sourceKey=q||null;}o.prototype.didStart=function(){'use strict';var p=this.ondata,q=o._bootstrapping;if(this.sourceKey){if(q[this.sourceKey]===true){o.listen('bootstrapped',function(s){s.source_key===this.sourceKey&&this.didStart();}.bind(this));return;}var r=i.get(this.sourceKey,this.uri);if(r){this.invoke('rawresultsready',r);p.call(this,r);return;}}if(this.uri)this.sendRequest();};o.prototype.sendRequest=function(){'use strict';var p=o._bootstrapping;p[this.sourceKey]=true;var q=new h(this.uri).setMethod('GET').setIgnoreErrors(true);q.listen('done',function(r){r=r.payload||r;for(var s=0;s<r.length;++s)r[s].bootstrap=1;if(this.sourceKey)i.set(this.sourceKey,this.uri,r);this.invoke('rawresultsready',r);this.ondata.call(this,r);delete p[this.sourceKey];this.invoke('bootstrapped',{source_key:this.sourceKey});}.bind(this));q.listen('finally',function(){delete p[this.sourceKey];}.bind(this));q.listen('open',function(){var r=q.getTransport();r.withCredentials=true;if(window.FW_ENABLED&&!this.getNofwheaders()){r.setRequestHeader('FB_FW','1');if(window.FB_FW_VERSION)r.setRequestHeader('FB_FW_VERSION',window.FB_FW_VERSION);if(window.FB_FW_DEVICE)r.setRequestHeader('FB_FW_DEVICE',window.FB_FW_DEVICE);}}.bind(this));if(this.getAuxiliaryData())q.setData(this.getAuxiliaryData());q.send();};l(o,['bootstrapped','rawresultsready']);k(o,{nofwheaders:false,showSecondaryAction:false,auxiliaryData:{}});Object.assign(o,{_bootstrapping:{}});Object.assign(o.prototype,{sourceKey:null});f.exports=o;}),null);
__d('MTypeaheadHelpers',['cx','CSS','DOM','MLegacyDataStore','fbt','HTML','MDynaTemplate','FWLoader'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n){var o=c('FWLoader').FW,p=43,q=65536,r={getSecondaryAction:function s(t){if(t.action=='phone'){return this.getPhoneAction(t);}else if(t.action=='add_friend'){return this.getAddAction(t);}else if(t.action=='add_contact'){return this.getAddContactAction(t);}else if(t.action=='message')return this.getMessageAction(t);return null;},getPhoneAction:function s(t){if(!t.paths||!(t.paths.mobile||t.paths.sms))return null;var u=n.renderToHtml('@CallButtonTemplate',{call_uri:t.paths.mobile,call_style:t.paths.mobile?'':'display:none;',sms_uri:t.paths.sms,sms_style:t.paths.sms?'':'display:none;'});return new m(u);},getAddAction:function s(t){if(!t.paths||!t.paths[t.action])return null;return new m(t.paths[t.action]);},getAddContactAction:function s(t){if(!t.paths||!t.paths[t.action])return null;return t.paths[t.action];},getMessageAction:function s(t){var u=n.renderToHtml('@MessageButtonTemplate',{message_uri:t.paths.message});return new m(u);},determineIconSize:function s(t,u){var v=u.photoSize||p,w=u.photo,x=new Image(),y=function z(aa){var ba=this;if(aa.type==='load'){var ca=document.getElementById(ba.targetID);if(ca){if(ba.naturalWidth>v||ba.naturalHeight>v){var da=window.devicePixelRatio,ea=Math.round(ba.naturalHeight/da),fa=Math.round(ba.naturalWidth/da);ea=Math.min(ea,v);fa=Math.min(fa,v);ca.style.backgroundSize=fa<ea?fa+'px auto':'auto '+ea+'px';}ca.style.backgroundImage='url('+ba.src+')';}}ba.onload=null;ba.onerror=null;ba.targetID=null;};x.targetID=t;x.onload=y;x.onerror=y;x.src=w;},getI18NTypeMap:function s(t){var u={App:l._("App"),Event:l._("Event"),Group:l._("Group"),Page:l._("Page"),page:l._("page"),Place:l._("Place"),User:l._("User")};if(u[t])return u[t];return t;},createNode:function s(t,u){if(t instanceof HTMLElement)return t;var v=[];if(t.photo){var w=j.create('div',{className:'profile-icon'});v.push(w);this.determineIconSize(j.uniqID(w),t);}var x=[t.display];if(t.verified){x.push(t.verified);}else if(t.is_verified){var y=j.create('span',{className:"_56_f _5dzy _5dz_ _3twv badge"});x.push(y);}var z=j.create('i',{className:'img presence',sigil:'presence'},'');j.hide(z);x.push(z);var aa=j.create('span',{className:'mfsl'},x);v.push(aa);if(!t.photo)i.conditionClass(aa,'noimage',true);var ba=t.subtext;i.conditionClass(aa,'name',true);if(ba)v.push(j.create('span',{className:'subtext mfss fcg'},ba));var ca={href:t.uri,name:t.name||t.display,className:'primary touchable',sigil:'touchable typeahead-result',rel:t.id};if(t.meta)ca.meta=t.meta;var da=j.create('a',ca,v),ea=JSON.stringify(t);if(!(ea.length>q))da.setAttribute('data-extra',ea);da.setAttribute('data-testid',t.id);if(t.weak_reference)da.setAttribute('weak_reference',true);if(t.renderType)da.setAttribute('renderType',t.renderType);if(window.FW_ENABLED&&o.isIOS())k.set(da,{nativeClick:true});if(t.bootstrap)k.set(da,{bootstrap:1});if(t.gender)k.set(da,{gender:t.gender});if(t.untranslatedType)k.set(da,{type:t.untranslatedType});if(t.openinnewtab)da.setAttribute('target','_blank');if(t.isNullStateSuggestion)k.set(da,{isNullStateSuggestion:t.isNullStateSuggestion});var fa=[da];if(u){var ga=this.getSecondaryAction(t);if(ga)fa.push(ga);}if(t.nativethirdpartyappicon)fa.push(new m(n.renderToHtml('@NativeThirdPartyAppIconTemplate')));var ha='jx-result';if(t.nativethirdpartyappicon||u&&this.getSecondaryAction(t))ha+=' hasSecondaryAction';if(t.action=='add_friend'&&t.addfriendtemplate)n.renderToHtml('@AddFriendLoadResourcesTemplate');var ia=j.create('div',{className:ha,sigil:'jx-result'+(t.action=='add_friend'?' undoable-action':''),rel:t.id},fa);if(t.renderType!=null)ia.setAttribute('renderType',t.renderType);if(t.untranslatedType!=null)ia.setAttribute('type',t.untranslatedType);if(t.category!=null)ia.setAttribute('category',t.category);return ia;}};f.exports=r;}),null);
__d('MTypeaheadOnDemandSource',['setTimeoutAcrossTransitions','MRequest','MTypeaheadHelpers','Stratcom','TypeaheadInternationalNormalizer','TypeaheadNormalizer','TypeaheadOnDemandSource','createDeprecatedProperties','throttle'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q,r;q=babelHelpers.inherits(s,n);r=q&&q.prototype;function s(t,u){'use strict';r.constructor.call(this,t,u);this.previousResults=null;this.setNormalizer(l.normalize);this.setSanitizer(m.normalize);this._allowFreeformEntry=false;this._cacheResultsLength=0;this._maxResults=1e+06;k.listen('m-typeahead-logger:new-session-id',null,function(v){this._sessionID=v.getData().sessionID;}.bind(this));}s.prototype.setAllowFreeformEntry=function(t){'use strict';this._allowFreeformEntry=t;};s.prototype.createNode=function(t){'use strict';return j.createNode(t,this.getShowSecondaryAction());};s.prototype.didChange=function(t){'use strict';this.lastChange=Date.now();var u=this.getSanitizer()(t);if(this.haveData[u]){var v=this.normalize(u),w=this.getMatchedResults(v);this.invoke('resultsready',w);if(this.enableEagerSendRequest)this.invoke('unlock_render');this.invoke('complete');}else{if(this.enableImmediateReturnOfCachedResults===true){this.previousResults=this.getMatchedResults(t);this.invoke('resultsready',this.previousResults);}else this.previousResults=null;if(this._cacheResultsLength>=this._maxResults){if(this.enableEagerSendRequest)this.invoke('unlock_render');this.invoke('complete');return;}if(!this.enableEagerSendRequest)this.waitForResults();this.invoke('req_dispatch',this._sessionID);if(this.throttleSendRequest){this.throttleSendRequest(this.lastChange,t);}else h(this.sendRequest.bind(this,this.lastChange,t),this.getQueryDelay());if(this.enableEagerSendRequest){this.invoke('unlock_render');this.waitForResults();}}};s.prototype.setEnableImmediateReturnOfCachedResults=function(t){'use strict';this.enableImmediateReturnOfCachedResults=t;};s.prototype.setEnableEagerSendRequest=function(t){'use strict';this.enableEagerSendRequest=t;};s.prototype.setThrottleSendRequest=function(t){'use strict';this.throttleSendRequest=p.acrossTransitionsWithBlocking(this.sendRequest.bind(this),t);};s.prototype.setCacheResultsLength=function(t){'use strict';this._cacheResultsLength=t;};s.prototype.setMaxResults=function(t){'use strict';this._maxResults=t;};s.prototype.sendRequest=function(t,u){'use strict';if(t!=this.lastChange)return;if(!this.uri)return;var v=new i(this.uri);v.setData(Object.assign(this.getAuxiliaryData()||{},{q:u,session_id:this._sessionID}));v.setMethod('GET');v.listen('done',function(w,x,y){this.ondata(w,x,y);}.bind(this,this.lastChange,u));v.send();this.invoke('req_sent');};s.prototype.ondata=function(t,u,v){'use strict';v=v.payload||v;this.invoke('req_recv',v?v.length:0);var w=0,x=0,y={};if(this.previousResults!=null){x=this.previousResults.length;for(w=0;w<this.previousResults.length;w++){var z=this.previousResults[w];z.idx=w;this._raw[z.id]=z;this.addToLookup(z.id,u);y[z.id]=z.id;}}if(v){if(v.length!==0){var aa;for(aa=0;aa<v.length;++aa)v[aa].idx=aa+x;for(aa=0;aa<v.length;aa++)if(!(v[aa].uid in y))this.addResult(v[aa],u);}else if(this._allowFreeformEntry)this.addResult({text:u,uid:0,path:'#'},u);this.haveData[u]=true;if(t!=this.lastChange)return;this.matchResults(u);}};s.prototype.addResult=function(t,u){'use strict';var v=this.addToLookup.bind(this);if(t.uid in this._raw)this._raw[t.uid].idx=t.idx;t=(this.getTransformer()||this._defaultTransformer)(t);this._firstSeenOnValue[t.id]=this._firstSeenOnValue[t.id]||u;if(!(t.id in this._raw)){this._raw[t.id]=t;v(t.id,t.name);v(t.id,u);}else{this._raw[t.id]=t;v(t.id,u);}};s.prototype.addToLookup=function(t,u){'use strict';var v=this.tokenize(u);for(var w=0;w<v.length;++w){this._lookup[v[w]]=this._lookup[v[w]]||[];this._lookup[v[w]].push(t);}};s.prototype.sortHits=function(t,u){'use strict';var v=function(w,x){var y=this._raw[w],z=isNaN(y.idx)?Number.MAX_VALUE:y.idx,aa=this._raw[x],ba=isNaN(aa.idx)?Number.MAX_VALUE:aa.idx;return z-ba;}.bind(this);u.sort(v);};s.prototype.renderNodes=function(t,u){'use strict';return n.prototype.renderNodes.apply(this,arguments);};s.prototype.clearCache=function(){'use strict';r.clearCache.call(this);this.previousResults=null;};o(s,{sanitizer:null,transformer:function t(u){return {name:u.text,uri:u.path,id:u.uid,photo:u.photo,display:u.display||u.text,action:u.action,paths:u.paths,permissions:u.permissions,photoSize:u.photo_size,type:u.type,openinnewtab:u.openinnewtab,subtext:u.text_only_subtext||u.subtext,nativethirdpartyappicon:u.nativethirdpartyappicon,idx:u.idx,renderType:u.render_type,untranslatedType:u.untranslated_type,verified:u.verified,weak_reference:u.weak_reference,geo_location_type:u.geo_location_type,city_id:u.city_id,city_text:u.city_text,isScoped:u.is_scoped,categoryID:u.cid,tagID:u.tid,category:u.category,location:u.location,street_address:u.street_address,postal_code:u.postal_code};},showSecondaryAction:true});f.exports=s;}),null);
__d('MTypeaheadTouchSource',['MTypeaheadCachableSource','MTypeaheadHelpers','TypeaheadInternationalNormalizer','createDeprecatedProperties'],(function a(b,c,d,e,f,g,h,i,j,k){var l,m;l=babelHelpers.inherits(n,h);m=l&&l.prototype;function n(o,p){'use strict';m.constructor.call(this,o,p);this.setNormalizer(j.normalize);}n.prototype.createNode=function(o){'use strict';return i.createNode(o,this.getShowSecondaryAction());};n.prototype.matchResults=function(o){'use strict';var p=this.normalize(o);h.prototype.matchResults.call(this,p);};n.prototype.ondata=function(o){'use strict';for(var p=0;p<o.length;++p)o[p].idx=p;h.prototype.ondata.apply(this,[o]);};k(n,{transformer:function o(p){var q=p.openinnewtab!=null?p.openinnewtab:p.type==='App';return {name:p.text,uri:p.path,id:p.uid,photo:p.photo,photoSize:p.photo_size,gender:p.gender,display:p.display||p.text,action:p.action,paths:p.paths,permissions:p.permissions,type:p.type,openinnewtab:q,subtext:p.subtext,nativethirdpartyappicon:p.nativethirdpartyappicon,bootstrap:p.bootstrap,idx:p.idx,tokenType:p.tokenType,renderType:p.render_type,untranslatedType:p.untranslated_type,weak_reference:p.weak_reference,is_verified:p.is_verified};},sortHandler:function o(p,q,r){var s=function t(u,v){var w=isNaN(u.idx)?Number.MAX_VALUE:u.idx,x=isNaN(v.idx)?Number.MAX_VALUE:v.idx;return w-x;};q.sort(s);}});f.exports=n;}),null);
__d('MCommentActionsFlyout',['Bootloader','DOM','MActionBubbleHelper','MLegacyDataStore','MModalDialog','MParent','MRequest','Stratcom','URI'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q='ban_user_from_page_comment_sigil',r='editCommentSigil',s='deleteCommentSigil',t='deleteCommentAndBlockAuthorSigil',u='deleteCommentAndRemoveAuthorSigil',v='hideCommentSigil',w='reportCommentSigil',x='commentFlyoutSigil',y=false;function z(ja,ka,la){var ma=i.find(ja,'*',ka);j.toggleActionBubbleItem(ma,la,'MCommentActionsFlyout',ka);}function aa(ja){var ka=m.bySigil(ja,'comment-metadata');return ka;}function ba(ja,ka){var la=k.get(ka);ja.addQueryData('_ft_',la.linkdata);}function ca(ja,ka){ba(ka,ja);var la=new n(ka);la.send();}function da(ja,ka){l.open(ka);}function ea(){var ja=aa(this.getCausalElement()),ka=this.getRoot(),la=k.get(ja);z(ka,r,!!la.editCommentURI);z(ka,s,!!la.deleteCommentURI);z(ka,t,!!la.deleteCommentAndBlockAuthorURI);z(ka,u,!!la.deleteCommentAndRemoveAuthorURI);z(ka,v,!!la.hideCommentURI);z(ka,w,!!la.reportCommentURI);z(ka,q,!!la.banUserFromPageURIParams&&!y);}function fa(ja){var ka=k.get(ja.getNode(x)),la=aa(ka.layer.getCausalElement()),ma=k.get(la);if(ja.getNode(r)){ca(la,new p(ma.editCommentURI));}else if(ja.getNode(s)){ca(la,new p(ma.deleteCommentURI));}else if(ja.getNode(t)){ca(la,new p(ma.deleteCommentAndBlockAuthorURI));}else if(ja.getNode(u)){ca(la,new p(ma.deleteCommentAndRemoveAuthorURI));}else if(ja.getNode(v)){ca(la,new p(ma.hideCommentURI));}else if(ja.getNode(w)){if(ma.reportIsModalDialog){da(la,new p(ma.reportCommentURI));}else ca(la,new p(ma.reportCommentURI));}else if(ja.getNode(q))if(ma.banUserFromPageURIParams)h.loadModules(["MPagesBanUserUtils"],function(na){na.banUserFromPage(ma.banUserFromPageURIParams.pageID,ma.banUserFromPageURIParams.userID,ma.banUserFromPageURIParams.userName,function(){y=true;});},'MCommentActionsFlyout');ka.layer.hide();ja.kill();}var ga,ha,ia=function ja(ka){if(ga)return;ga=ka;var la=ka.getRoot();o.addSigil(la,x);ha=[o.listen('m:page:unload',null,function(){while(ha.length>0)ha.pop().remove();ga=null;}),ka.addListener('beforeshow',ea,ka),i.listen(la,'click',null,fa)];};f.exports={registerFlyout:ia};}),null);
__d('MUFICommentActionLink',['DOM','MPageController','MUFIConfig','Stratcom','SubscriptionsHandler'],(function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';function m(n,o){var p;if(!j.canReactToComment)return;if(n.href)n.setAttribute('data-uri',n.href);n.removeAttribute('href');if(o)(function(){var q=new l();q.addSubscriptions(h.listen(n,'click',null,function(event){i.load(n.getAttribute('data-uri'));}),k.listen('m:page:unload',null,function(){q.release();}),k.listen('m:feed-ufi-flyout:reset',null,function(){q.release();}));})();}f.exports={init:m};}),null);
__d('MUFIComments',['Bootloader','MLiveData','MParent','MViewport','Stratcom','SubscriptionsHandler','getActiveElement'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';var o='feed-ufi-comments',p='m-ufi',q='MSITE_COMMENT_TYPING_FUNNEL';function r(t){return t+'_mufiseencomments';}function s(t,u,v){this.$MUFIComments1=t;this.$MUFIComments2=r(u);this.$MUFIComments3=i.get(u);this.$MUFIComments5=false;this.$MUFIComments6=v;this.$MUFIComments7=false;this.$MUFIComments8=null;this.$MUFIComments9=null;this.$MUFIComments4=new m();this.$MUFIComments4.addSubscriptions(this.$MUFIComments3.listen('change',this.onChange.bind(this)),l.listen('m:page:unload',null,this.onUnload.bind(this)));this.$MUFIComments10(u);}s.prototype.$MUFIComments10=function(t){if(!this.$MUFIComments11())h.loadModules(["MUFICommentTypingSubscriptionController","FunnelLogger"],function(u,v){var w=new u(t,function(x){this.$MUFIComments9=x;this.onLiveEventUpdate();}.bind(this));if(!w.didSubscribe())return;this.$MUFIComments7=true;this.$MUFIComments4.addSubscriptions(w);this.$MUFIComments8=v;v.startFunnel(q);}.bind(this),'MUFIComments');};s.prototype.onChange=function(){var t=this.$MUFIComments3.getData();if(t.request_id===this.$MUFIComments6||t.comments===undefined)return;this.$MUFIComments12(t.logging_interaction_key);};s.prototype.$MUFIComments11=function(){return !!j.bySigil(this.$MUFIComments1,o);};s.prototype.onLiveEventUpdate=function(){if(this.$MUFIComments7)this.$MUFIComments12();};s.prototype.$MUFIComments13=function(t,u){return t.filter(function(v){return u.hasCommentAuthor(v);});};s.prototype.$MUFIComments12=function(t){h.loadModules(["DataStore","MReactComponentRenderer","MUFICommentAuthorUtil","MUFICommentList.react"],function(u,v,w,x){var y,z=this,aa=this.$MUFIComments3.getData();aa.showPillOnMount=true;aa.seenCommentsCacheID=this.$MUFIComments2;aa.comments=aa.comments?this.$MUFIComments13(aa.comments,w):[];if(this.$MUFIComments7){var ba=this.$MUFIComments9||{},ca=ba.friendCount,da=ba.otherCount;aa.isAnyLiveTyping=Math.max(da,ca)>0;aa.isFriendLiveTyping=ca>0;aa.bootloadedFunnelLoggerModule=this.$MUFIComments8;}if(l.hasSigil(n(),'mufi-composer'))(function(){var ga=z.$MUFIComments1.offsetHeight;aa.onDone=function(){k.scrollBy(0,this.$MUFIComments1.offsetHeight-ga);ga=this.$MUFIComments1.offsetHeight;}.bind(z);})();if(this.$MUFIComments11())aa.isFeedFlyout=true;aa.ufiNodeMetadata={feedbackSource:u.get(this.$MUFIComments1,'feedback_source'),feedbackReferrer:u.get(this.$MUFIComments1,'feedback_referrer')};v(x,this.$MUFIComments1,aa);var ea=aa.logging_interaction_key,fa=ea?[ea]:[];if(t&&t!==ea)fa.push(t);l.invoke('m:ufi:live-comments:render',null,{ufi:j.bySigil(this.$MUFIComments1,p),logKeys:fa});}.bind(this),'MUFIComments');if(!this.$MUFIComments5){this.$MUFIComments14();this.$MUFIComments5=true;}};s.prototype.$MUFIComments14=function(){this.$MUFIComments1.style.display='run-in';this.$MUFIComments1.offsetHeight;this.$MUFIComments1.style.display='block';};s.prototype.onUnload=function(){this.$MUFIComments4.release();this.$MUFIComments7=false;this.$MUFIComments9=null;};f.exports=s;}),null);
__d('MActionBubbleLayout',['CSS','cx'],(function a(b,c,d,e,f,g,h,i){function j(k){'use strict';this.$MActionBubbleLayout1=null;this.$MActionBubbleLayout2=k;}j.prototype.enable=function(){'use strict';this.$MActionBubbleLayout1=this.$MActionBubbleLayout2.addListener('adjustDimensions',this.$MActionBubbleLayout3.bind(this));if(this.$MActionBubbleLayout2.isShown())this.$MActionBubbleLayout2.updatePosition();};j.prototype.disable=function(){'use strict';this.$MActionBubbleLayout1.remove();this.$MActionBubbleLayout1=null;if(this.$MActionBubbleLayout2.isShown())this.$MActionBubbleLayout2.updatePosition();};j.prototype.$MActionBubbleLayout3=function(){'use strict';var k=this.$MActionBubbleLayout2;this.$MActionBubbleLayout4(true);var l=this.$MActionBubbleLayout2.getContentRoot();if(l.clientWidth>=k.getMaxWidth())this.$MActionBubbleLayout4(false);};j.prototype.$MActionBubbleLayout4=function(k){'use strict';var l=this.$MActionBubbleLayout2;l.setWidth(k?'auto':'wide');l.applyWidth();h.conditionClass(l.getRoot(),"_55i0",k);};f.exports=j;}),null);
__d('prefetchImage',[],(function a(b,c,d,e,f,g){function h(i,j){var k=true,l=new Image();l.onload=function(){k=false;j&&j();};l.src=i;return {cancel:function m(){if(!k)return;k=false;l.onload=null;l.src='data:image/gif;base64,'+'R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';}};}f.exports=h;}),null);