(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{696:function(e,t,a){e.exports=a(713)},701:function(e,t,a){},702:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},703:function(e,t,a){},713:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a.n(n),s=a(535),o=a.n(s),i=(a(701),a(702),a(703),a(7)),c=a(0),l=a(1),h=a(5),d=a(3),u=a(2),m=a(10),p=a(11),f=[0,2,4,5,7,9,11],g=function(){function e(t,a,n){Object(c.a)(this,e),this.degree=t,this.semitoneDist=f[t-1],this.intervals=a,this.nextChordIdxs=n}return Object(l.a)(e,[{key:"degree",value:function(){return this.degree}},{key:"semitoneDist",value:function(){return this.semitoneDist}},{key:"intervals",value:function(){return this.intervals}},{key:"nextChordIdxs",value:function(){return this.nextChordIdxs}},{key:"nextChordIdx",value:function(){return this.nextChordIdxs[Math.floor(Math.random()*this.nextChordIdxs.length)]}},{key:"generateVoicing",value:function(e){if(e<3)return this.intervals.slice(0,3);var t=this.intervals.slice(1,e);t.sort((function(){return Math.random()-.5}));for(var a=1;a<t.length;a++)for(;t[a]<t[a-1];)t[a]+=12;return t.unshift(0),t}}]),e}(),k=function(e){return e.map((function(e){return e-1}))},v=[new g(1,[0,4,7,11,14,17,21],k([2,3,4,5,6,7])),new g(2,[0,3,7,10,14,17,21],k([3,5,7])),new g(3,[0,3,7,10,13,17,20],k([4,6])),new g(4,[0,4,7,11,14,18,21],k([2,5])),new g(5,[0,4,7,10,14,17,21],k([1,3,6])),new g(6,[0,3,7,10,14,17,20],k([2,4])),new g(7,[0,3,6,10,13,17,20],k([1,3]))],b=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,null,[{key:"generate",value:function(e){if(e<2)return null;for(var t=[],a=v[Math.floor(Math.random()*v.length)],n=0;n<e;n++)t.push(new g(a.degree,Object(p.a)(a.intervals),Object(p.a)(a.nextChordIdxs))),a=v[a.nextChordIdx()];return t}}]),e}(),w=[1,2,3,4,5,6],O="".concat("/lofigen","/PianoSamples/"),y=[];["A","C","D#","F#"].forEach((function(e){w.forEach((function(t){y.push(e+t)}))}));var j={};y.forEach((function(e){var t=e;e.includes("#")&&(t=e.replace("#","sharp")),j[e]="".concat(O+t,"v").concat(1,".wav")}));var C=j,E=new m.b(1e3,"lowpass"),L=new m.i(.5),x=function(){function e(t){Object(c.a)(this,e),this.sampler=new m.g(C,(function(){t()})).chain(E,L,m.e)}return Object(l.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),M={C4:"".concat("/lofigen","/DrumSamples/kick.wav")},A=new m.k(-3),S=function(){function e(t){Object(c.a)(this,e),this.sampler=new m.g(M,(function(){t()})).chain(A,m.e)}return Object(l.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),N={C4:"".concat("/lofigen","/DrumSamples/snare.wav")},D=new m.b(6e3,"lowpass"),I=new m.k(-6),B=new m.i(.3),z=function(){function e(t){Object(c.a)(this,e),this.sampler=new m.g(N,(function(){t()})).chain(D,I,B,m.e)}return Object(l.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),H={C4:"".concat("/lofigen","/DrumSamples/hat.wav")},F=new m.b(2400,"lowpass"),P=new m.k(-9),V=new m.i(.7),W=function(){function e(t){Object(c.a)(this,e),this.sampler=new m.g(H,(function(){t()})).chain(F,P,V,m.e)}return Object(l.a)(e,[{key:"sampler",value:function(){return this.sampler}}]),e}(),G=new m.b(2e3,"lowshelf"),J=new m.k(-32),R=new m.f("pink").chain(G,J,m.e),$=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],q=new m.a({threshold:-6,ratio:3,attack:.5,release:.1}),K=new m.b(2e3,"lowpass"),Q=new m.k(-6);m.e.chain(K,q,Q),m.j.bpm.value=156,m.j.swing=1;var T=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).nextChord=function(){var e=n.state.progress===n.state.progression.length-1?0:n.state.progress+1;if(4===n.state.progress){var t=Math.random()<.15,a=Math.random()<.2,r=Math.random()<.25;n.setState(Object(i.a)(Object(i.a)({},n.state),{},{progress:e,kickOff:t,snareOff:a,hatOff:r}))}else if(0===n.state.progress){var s=Math.random()<.15,o=Math.random()<.2,c=Math.random()<.25,l=.66*Math.random();n.setState(Object(i.a)(Object(i.a)({},n.state),{},{progress:e,kickOff:s,snareOff:o,hatOff:c,melodyDensity:l}))}else n.setState(Object(i.a)(Object(i.a)({},n.state),{},{progress:e}))},n.playChord=function(){var e=n.state.progression[n.state.progress],t=m.c(n.state.key+"3").transpose(e.semitoneDist),a=e.generateVoicing(4),r=m.c(t).harmonize(a).map((function(e){return m.c(e).toNote()}));n.nextChord(),n.pn.triggerAttackRelease(r,"1n")},n.playMelody=function(){var e=n.state.progression[n.state.progress],t=m.c(n.state.key+"5").transpose(e.semitoneDist),a=e.intervals.map((function(e){return e>=12?e-12:e})),r=m.c(t).harmonize(a).map((function(e){return m.c(e).toNote()})),s=Math.floor(Math.random()*r.length);Math.random()<n.state.melodyDensity&&n.pn.triggerAttackRelease(r[s])},n.generateProgression=function(){n.setState({key:$[Math.floor(Math.random()*$.length)],progress:0,progression:b.generate(8),genChordsOnce:!0})},n.toggle=function(){n.setState(Object(i.a)(Object(i.a)({},n.state),{},{progress:0})),"started"===m.j.state?(m.j.stop(),n.noise.stop()):(n.noise.start(0),n.chords.start(0),n.melody.start(0),n.kickLoop.start(0),n.snareLoop.start(0),n.hatLoop.start(0),m.j.start())},n.state={key:"C",progression:[],progress:0,pianoLoaded:!1,kickLoaded:!1,snareLoaded:!1,hatLoaded:!1,contextStarted:!1,genChordsOnce:!1,kickOff:!1,snareOff:!1,hatOff:!1,melodyDensity:.33},n.pn=new x((function(){return n.setState(Object(i.a)(Object(i.a)({},n.state),{},{pianoLoaded:!0}))})).sampler,n.kick=new S((function(){return n.setState(Object(i.a)(Object(i.a)({},n.state),{},{kickLoaded:!0}))})).sampler,n.snare=new z((function(){return n.setState(Object(i.a)(Object(i.a)({},n.state),{},{snareLoaded:!0}))})).sampler,n.hat=new W((function(){return n.setState(Object(i.a)(Object(i.a)({},n.state),{},{hatLoaded:!0}))})).sampler,n.noise=R,n.chords=new m.d(n.playChord,"1n"),n.melody=new m.d(n.playMelody,"8n"),n.kickLoop=new m.h((function(e,t){n.state.kickOff||("C4"===t&&Math.random()<.9?n.kick.triggerAttack(t):"."===t&&Math.random()<.1&&n.kick.triggerAttack("C4"))}),["C4","","","","","","","C4","C4","",".","","","","",""],"8n"),n.snareLoop=new m.h((function(e,t){n.state.snareOff||""!==t&&Math.random()<.8&&n.snare.triggerAttack(t)}),["","C4"],"2n"),n.hatLoop=new m.h((function(e,t){n.state.hatOff||""!==t&&Math.random()<.8&&n.hat.triggerAttack(t)}),["C4","C4","C4","C4","C4","C4","C4","C4"],"4n"),n.kickLoop.humanize=!0,n.snareLoop.humanize=!0,n.hatLoop.humanize=!0,n.nextChord=n.nextChord.bind(Object(h.a)(n)),n.playChord=n.playChord.bind(Object(h.a)(n)),n.playMelody=n.playMelody.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.progression.map((function(t,a){return r.a.createElement("li",{className:a===(e.state.progress+7)%8?"live":"",key:a},t.degree)})),a=r.a.createElement("div",{className:"prep"},r.a.createElement("div",{className:"sampleLoad"},this.state.pianoLoaded&&this.state.kickLoaded&&this.state.snareLoaded&&this.state.hatLoaded?this.state.contextStarted?"":r.a.createElement("button",{className:"contextBtn",onClick:function(){m.l(),e.setState(Object(i.a)(Object(i.a)({},e.state),{},{contextStarted:!0}))}},"stArt Audio context"):"loAding sAmples")),n=r.a.createElement("div",{className:"playable"},r.a.createElement("button",{className:"generateBtn",onClick:this.generateProgression},"generAte cHords"),this.state.genChordsOnce?r.a.createElement("div",null,r.a.createElement("div",{className:"info"},r.a.createElement("h3",{className:"key"},this.state.key.toLowerCase()),r.a.createElement("ol",{className:"progressionList"},t)),r.a.createElement("button",{className:"playBtn",onClick:this.toggle},"started"===m.j.state?"stop":"plAy")):"");return r.a.createElement("div",null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"lofi generAtor"),r.a.createElement("h5",null,"by Vin-HuynH")),r.a.createElement("div",{className:"instructions"},r.a.createElement("h3",null,"How to use lofigen"),r.a.createElement("ol",null,this.state.pianoLoaded&&this.state.kickLoaded&&this.state.snareLoaded&&this.state.hatLoaded?"":r.a.createElement("li",null,"WAit for sAmples to loAd"),this.state.contextStarted?"":r.a.createElement("li",null,"stArt Audio context"),r.a.createElement("li",null,"generAte cHords"),r.a.createElement("li",null,"press plAy And enjoy"))),this.state.pianoLoaded&&this.state.kickLoaded&&this.state.snareLoaded&&this.state.hatLoaded&&this.state.contextStarted?n:a),r.a.createElement("section",{className:"gradient "+this.state.key.replace("#","s")}),r.a.createElement("section",{className:"backdrop"}))}}]),a}(n.Component);var U=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[696,1,2]]]);
//# sourceMappingURL=main.4da7bafb.chunk.js.map