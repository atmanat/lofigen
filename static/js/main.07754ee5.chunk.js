(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{696:function(e,t,a){e.exports=a(713)},701:function(e,t,a){},702:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},703:function(e,t,a){},713:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a.n(n),s=a(535),o=a.n(s),i=(a(701),a(702),a(703),a(7)),c=a(0),l=a(1),u=a(5),d=a(3),h=a(2),m=a(10),f=a(11),p=[0,2,4,5,7,9,11],g=function(){function e(t,a,n){Object(c.a)(this,e),this.degree=t,this.semitoneDist=p[t-1],this.intervals=a,this.nextChordIdxs=n}return Object(l.a)(e,[{key:"degree",value:function(){return this.degree}},{key:"semitoneDist",value:function(){return this.semitoneDist}},{key:"intervals",value:function(){return this.intervals}},{key:"nextChordIdxs",value:function(){return this.nextChordIdxs}},{key:"nextChordIdx",value:function(){return this.nextChordIdxs[Math.floor(Math.random()*this.nextChordIdxs.length)]}},{key:"generateVoicing",value:function(e){if(e<3)return this.intervals.slice(0,3);var t=this.intervals.slice(1,e);t.sort((function(){return Math.random()-.5}));for(var a=1;a<t.length;a++)for(;t[a]<t[a-1];)t[a]+=12;return t.unshift(0),t}}]),e}(),k=function(e){return e.map((function(e){return e-1}))},v=[new g(1,[0,4,7,11,14,17,21],k([2,3,4,5,6,7])),new g(2,[0,3,7,10,14,17,21],k([3,5,7])),new g(3,[0,3,7,10,13,17,20],k([4,6])),new g(4,[0,4,7,11,14,18,21],k([2,5])),new g(5,[0,4,7,10,14,17,21],k([1,3,6])),new g(6,[0,3,7,10,14,17,20],k([2,4])),new g(7,[0,3,6,10,13,17,20],k([1,3]))],O=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,null,[{key:"generate",value:function(e){if(e<2)return null;for(var t=[],a=v[Math.floor(Math.random()*v.length)],n=0;n<e;n++)t.push(new g(a.degree,Object(f.a)(a.intervals),Object(f.a)(a.nextChordIdxs))),a=v[a.nextChordIdx()];return t}}]),e}(),b=[1,2,3,4,5,6],w="".concat("/lofigen","/PianoSamples/"),y=[];["A","C","D#","F#"].forEach((function(e){b.forEach((function(t){y.push(e+t)}))}));var j={};y.forEach((function(e){var t=e;e.includes("#")&&(t=e.replace("#","sharp")),j[e]="".concat(w+t,"v").concat(1,".wav")}));var C=j,E=new m.c(1e3,"lowpass"),L=new m.j(.5),x=function(){function e(t){Object(c.a)(this,e),this.sampler=new m.h(C,(function(){t()})).chain(E,L,m.f)}return Object(l.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),A={C4:"".concat("/lofigen","/DrumSamples/kick.wav")},M=new m.l(-3),N=function(){function e(t){Object(c.a)(this,e),this.sampler=new m.h(A,(function(){t()})).chain(M,m.f)}return Object(l.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),S={C4:"".concat("/lofigen","/DrumSamples/snare.wav")},D=new m.c(6e3,"lowpass"),I=new m.l(-6),B=new m.j(.3),z=function(){function e(t){Object(c.a)(this,e),this.sampler=new m.h(S,(function(){t()})).chain(D,I,B,m.f)}return Object(l.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),F={C4:"".concat("/lofigen","/DrumSamples/hat.wav")},H=new m.c(2400,"lowpass"),V=new m.l(-9),q=new m.j(.7),P=function(){function e(t){Object(c.a)(this,e),this.sampler=new m.h(F,(function(){t()})).chain(H,V,q,m.f)}return Object(l.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),R=new m.c(2e3,"lowshelf"),W=new m.l(-32),G=new m.g("pink").chain(R,W,m.f),J=a(15),$=new m.b(16),K=function(e){var t=Object(n.useState)(Object(f.a)($.getValue())),a=Object(J.a)(t,2),s=a[0],o=a[1],i=Object(n.useRef)(),c=function e(){o(Object(f.a)($.getValue())),i.current=requestAnimationFrame(e)};return Object(n.useEffect)((function(){return e.audio.connect($),i.current=requestAnimationFrame(c),function(){return cancelAnimationFrame(i.current)}}),[]),r.a.createElement("div",{className:"freqList"},s.map((function(e,t){var a=Math.max(3*(69+.5*e),10);return r.a.createElement("div",{key:t,className:"freqBar",style:{height:"".concat(a,"px")}})})))},Q=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],T=new m.a({threshold:-6,ratio:3,attack:.5,release:.1}),U=new m.c(2e3,"lowpass"),X=new m.l(-6);m.f.chain(T,U,X),m.k.bpm.value=156,m.k.swing=1;var Y=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).nextChord=function(){var e=n.state.progress===n.state.progression.length-1?0:n.state.progress+1;if(4===n.state.progress){var t=Math.random()<.15,a=Math.random()<.2,r=Math.random()<.25;n.setState(Object(i.a)(Object(i.a)({},n.state),{},{progress:e,kickOff:t,snareOff:a,hatOff:r}))}else if(0===n.state.progress){var s=Math.random()<.15,o=Math.random()<.2,c=Math.random()<.25,l=.66*Math.random();n.setState(Object(i.a)(Object(i.a)({},n.state),{},{progress:e,kickOff:s,snareOff:o,hatOff:c,melodyDensity:l}))}else n.setState(Object(i.a)(Object(i.a)({},n.state),{},{progress:e}))},n.playChord=function(){var e=n.state.progression[n.state.progress],t=m.d(n.state.key+"3").transpose(e.semitoneDist),a=e.generateVoicing(4),r=m.d(t).harmonize(a).map((function(e){return m.d(e).toNote()}));n.nextChord(),n.pn.triggerAttackRelease(r,"1n")},n.playMelody=function(){var e=n.state.progression[n.state.progress],t=m.d(n.state.key+"5").transpose(e.semitoneDist),a=e.intervals.map((function(e){return e>=12?e-12:e})),r=m.d(t).harmonize(a).map((function(e){return m.d(e).toNote()})),s=Math.floor(Math.random()*r.length);Math.random()<n.state.melodyDensity&&n.pn.triggerAttackRelease(r[s])},n.generateProgression=function(){n.setState({key:Q[Math.floor(Math.random()*Q.length)],progress:0,progression:O.generate(8),genChordsOnce:!0})},n.toggle=function(){n.setState(Object(i.a)(Object(i.a)({},n.state),{},{progress:0})),"started"===m.k.state?(m.k.stop(),n.noise.stop()):(n.noise.start(0),n.chords.start(0),n.melody.start(0),n.kickLoop.start(0),n.snareLoop.start(0),n.hatLoop.start(0),m.k.start())},n.state={key:"C",progression:[],progress:0,pianoLoaded:!1,kickLoaded:!1,snareLoaded:!1,hatLoaded:!1,contextStarted:!1,genChordsOnce:!1,kickOff:!1,snareOff:!1,hatOff:!1,melodyDensity:.33},n.pn=new x((function(){return n.setState(Object(i.a)(Object(i.a)({},n.state),{},{pianoLoaded:!0}))})).sampler,n.kick=new N((function(){return n.setState(Object(i.a)(Object(i.a)({},n.state),{},{kickLoaded:!0}))})).sampler,n.snare=new z((function(){return n.setState(Object(i.a)(Object(i.a)({},n.state),{},{snareLoaded:!0}))})).sampler,n.hat=new P((function(){return n.setState(Object(i.a)(Object(i.a)({},n.state),{},{hatLoaded:!0}))})).sampler,n.noise=G,n.chords=new m.e(n.playChord,"1n"),n.melody=new m.e(n.playMelody,"8n"),n.kickLoop=new m.i((function(e,t){n.state.kickOff||("C4"===t&&Math.random()<.9?n.kick.triggerAttack(t):"."===t&&Math.random()<.1&&n.kick.triggerAttack("C4"))}),["C4","","","","","","","C4","C4","",".","","","","",""],"8n"),n.snareLoop=new m.i((function(e,t){n.state.snareOff||""!==t&&Math.random()<.8&&n.snare.triggerAttack(t)}),["","C4"],"2n"),n.hatLoop=new m.i((function(e,t){n.state.hatOff||""!==t&&Math.random()<.8&&n.hat.triggerAttack(t)}),["C4","C4","C4","C4","C4","C4","C4","C4"],"4n"),n.kickLoop.humanize=!0,n.snareLoop.humanize=!0,n.hatLoop.humanize=!0,n.nextChord=n.nextChord.bind(Object(u.a)(n)),n.playChord=n.playChord.bind(Object(u.a)(n)),n.playMelody=n.playMelody.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.progression.map((function(t,a){return r.a.createElement("li",{className:a===(e.state.progress+7)%8?"live":"",key:a},t.degree)})),a=r.a.createElement("div",{className:"prep"},r.a.createElement("div",{className:"sampleLoad"},this.state.pianoLoaded&&this.state.kickLoaded&&this.state.snareLoaded&&this.state.hatLoaded?this.state.contextStarted?"":r.a.createElement("button",{className:"contextBtn",onClick:function(){m.m(),e.setState(Object(i.a)(Object(i.a)({},e.state),{},{contextStarted:!0}))}},"stArt Audio context"):"loAding sAmples")),n=r.a.createElement("div",{className:"playable"},r.a.createElement("button",{className:"generateBtn",onClick:this.generateProgression},"generAte cHords"),this.state.genChordsOnce?r.a.createElement("div",null,r.a.createElement("div",{className:"info"},r.a.createElement("h3",{className:"key"},this.state.key.toLowerCase()),r.a.createElement("ol",{className:"progressionList"},t)),r.a.createElement("button",{className:"playBtn",onClick:this.toggle},"started"===m.k.state?"stop":"plAy")):""),s=r.a.createElement("section",{className:"visualizer"},r.a.createElement(K,{audio:m.f}));return r.a.createElement("div",null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"lofi generAtor"),r.a.createElement("h5",null,"by Vin-HuynH")),r.a.createElement("div",{className:"instructions"},r.a.createElement("h3",null,"How to use lofigen"),r.a.createElement("ol",null,this.state.pianoLoaded&&this.state.kickLoaded&&this.state.snareLoaded&&this.state.hatLoaded?"":r.a.createElement("li",null,"WAit for sAmples to loAd"),this.state.contextStarted?"":r.a.createElement("li",null,"stArt Audio context"),r.a.createElement("li",null,"generAte cHords"),r.a.createElement("li",null,"press plAy And enjoy"))),this.state.pianoLoaded&&this.state.kickLoaded&&this.state.snareLoaded&&this.state.hatLoaded&&this.state.contextStarted?n:a),r.a.createElement("section",{className:"gradient "+this.state.key.replace("#","s")}),"started"===m.k.state?s:"",r.a.createElement("section",{className:"backdrop"}))}}]),a}(n.Component);var Z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[696,1,2]]]);
//# sourceMappingURL=main.07754ee5.chunk.js.map