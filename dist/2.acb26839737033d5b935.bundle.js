(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{81:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(2),a=r(20),s=r(7),c=r(6),u=r(9),l=r(1),f=o.a.forwardRef((function(e,t){e.position,e.rotation,e.color;var r=e.edgeColor,o=void 0===r?"gray":r,a=e.dimensions,s=void 0===a?{width:1,height:1,widthSegments:1,heightSegments:1}:a,c=e.showEdges,u=e.showSurface,f=void 0===u||u,h=(e.visible,e.side),d=void 0===h?i.DoubleSide:h;e.onPointerDown,e.onPointerEnter,e.onPointerLeave,e.onPointerMove,e.onPointerOut,e.onPointerOver,e.onPointerUp,e.onClick,e.onUpdate,e.onWheel,e.rest;if(!c&&!f)throw new Error("at least one of showEdges or showSurface should be true, otherwise use visible ");var m=Object(n.useRef)(null),p=Object(n.useMemo)((function(){var e=s.width,t=s.height,r=s.widthSegments,n=s.heightSegments,o=new i.PlaneBufferGeometry(e,t,r,n);return{planeGeo:o,edgesGeo:c?new i.EdgesGeometry(o):null}}),[]),v=p.planeGeo,y=p.edgesGeo,b=new i.Plane(new i.Vector3(0,0,1),1);return Object(l.c)("group",null,f&&Object(l.c)("mesh",{ref:function(e){m.current=e},geometry:v,onUpdate:function(e){e.lookAt(b.normal)},position:[0,0,0]},Object(l.c)("meshPhongMaterial",{attach:"material",side:d,color:"#ed81e1"})),c&&Object(l.c)("lineSegments",{geometry:y},Object(l.c)("lineBasicMaterial",{attach:"material",color:o})))})),h=r(79),d=r(78),m=r(21),p=r.n(m);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function j(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var x=new i.Vector3;function S(e,t,r){x.setFromMatrixPosition(e.matrixWorld),x.project(t);var n=r.width/2,o=r.height/2;return[x.x*n+n,-x.y*o+o]}var P=o.a.forwardRef((function(e,t){var r=e.children,o=e.eps,i=void 0===o?.001:o,s=e.style,c=e.className,u=e.prepend,f=e.center,h=j(e,["children","eps","style","className","prepend","center"]),d=Object(a.h)(),m=d.gl,y=d.scene,g=d.camera,w=d.size,x=O(Object(n.useState)((function(){return document.createElement("div")})),1)[0],P=Object(n.useRef)(null),A=Object(n.useRef)([0,0]);return Object(n.useEffect)((function(){if(P.current){y.updateMatrixWorld();var e=S(P.current,g,w);return x.style.cssText="position:absolute;top:0;left:0;transform:translate3d(".concat(e[0],"px,").concat(e[1],"px,0);"),m.domElement.parentNode&&(u?m.domElement.parentNode.prepend(x):m.domElement.parentNode.appendChild(x)),function(){m.domElement.parentNode&&m.domElement.parentNode.removeChild(x),p.a.unmountComponentAtNode(x)}}}),[]),Object(n.useEffect)((function(){p.a.render(Object(l.c)("div",{style:b({transform:f?"translate3d(-50%,-50%,0)":"none"},s),className:c,ref:t},r),x)})),Object(a.f)((function(){if(P.current){var e=S(P.current,g,w);(Math.abs(A.current[0]-e[0])>i||Math.abs(A.current[1]-e[1])>i)&&(x.style.transform="translate3d(".concat(e[0],"px,").concat(e[1],"px,0)")),A.current=e}})),Object(l.c)("group",v({},h,{ref:P}))})),A=r(70);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=I(e);if(t){var o=I(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return B(this,r)}}function B(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?T(e):t}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k=function(e){D(a,e);var t,r,n,o=V(a);function a(e){var t,r=e.radiusTop,n=void 0===r?1:r,s=e.radiusBottom,c=void 0===s?1:s,u=e.height,l=void 0===u?2:u,f=e.radialSegments,h=void 0===f?8:f,d=e.heightSegments,m=void 0===d?1:d,p=e.drawingMode,v=void 0===p?"dynamic":p,y=e.openTop,b=void 0!==y&&y,g=e.openBottom,O=void 0!==g&&g,w=e.thetaStart,j=void 0===w?0:w,x=e.thetaLength,S=void 0===x?2*Math.PI:x;return C(this,a),R(T(t=o.call(this)),"parameters",void 0),R(T(t),"verIdx",0),R(T(t),"indexArray",[]),R(T(t),"groupStart",0),R(T(t),"indices",[]),R(T(t),"positions",void 0),R(T(t),"normals",void 0),R(T(t),"uvs",void 0),R(T(t),"positionAttr",void 0),R(T(t),"numVertices",void 0),R(T(t),"positionNumComponents",3),R(T(t),"normalNumComponents",3),R(T(t),"uvNumComponents",2),R(T(t),"drawingMode",void 0),t.type="CustomCylinderBufferGeometry",t.parameters={radiusTop:n,radiusBottom:c,height:l,radialSegments:h,heightSegments:m,openTop:b,openBottom:O,thetaStart:j,thetaLength:S},t.drawingMode=v,t.numVertices=(m+1)*(h+1)+2*(2*h+1),t.positions=new Float32Array(t.numVertices*t.positionNumComponents),t.normals=new Float32Array(t.numVertices*t.normalNumComponents),t.uvs=new Float32Array(t.numVertices*t.uvNumComponents),t._generateTorso(),b||n>0&&t._generateCap(!0),O||c>0&&t._generateCap(!1),t.setIndex(t.indices),t.positionAttr=new i.BufferAttribute(t.positions,t.positionNumComponents),"dynamic"===v&&t.positionAttr.setUsage(i.DynamicDrawUsage),t.setAttribute("position",t.positionAttr),t.setAttribute("normal",new i.BufferAttribute(t.normals,t.normalNumComponents)),t.setAttribute("uv",new i.BufferAttribute(t.uvs,t.uvNumComponents)),t}return t=a,(r=[{key:"updateHeight",value:function(e){if("static"===this.drawingMode)throw new Error("darwMode should be set to dynamic!");this.parameters.height!==e&&(this.parameters.height=e,this.clearGroups(),this.groupStart=0,this.verIdx=0,this.indexArray=[],this.indices=[],this._generateTorso(),this.parameters.openTop||this.parameters.radiusTop>0&&this._generateCap(!0),this.parameters.openBottom||this.parameters.radiusBottom>0&&this._generateCap(!1),this.positionAttr.needsUpdate=!0,this.computeBoundingSphere())}},{key:"_generateTorso",value:function(){var e,t,r=this.parameters,n=r.radiusBottom,o=r.radiusTop,a=r.height,s=r.heightSegments,c=r.radialSegments,u=r.thetaLength,l=r.thetaStart,f=new i.Vector3,h=new i.Vector3,d=0,m=(n-o)/a;for(t=0;t<=s;t++){var p=[],v=t/s,y=(1-v)*(n-o)+o;for(e=0;e<=c;e++){var b=e/c,g=b*u+l,O=Math.sin(g),w=Math.cos(g);h.x=y*w,h.y=v*a,h.z=y*O,this.positions.set([h.x,h.y,h.z],this.verIdx*this.positionNumComponents),f.set(O,m,w).normalize(),this.normals.set([f.x,f.y,f.z],this.verIdx*this.normalNumComponents),this.uvs.set([b,1-v],this.verIdx*this.uvNumComponents),p.push(this.verIdx++)}this.indexArray.push(p)}for(e=0;e<c;e++)for(t=0;t<s;t++){var j=this.indexArray[t][e],x=this.indexArray[t][e+1],S=this.indexArray[t+1][e],P=this.indexArray[t+1][e+1];this.indices.push(j,S,x),this.indices.push(S,P,x),d+=6}this.addGroup(this.groupStart,d,0),this.groupStart+=d}},{key:"_generateCap",value:function(){var e,t,r,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],o=this.parameters,a=o.radiusBottom,s=o.radiusTop,c=o.height,u=o.radialSegments,l=o.thetaLength,f=o.thetaStart,h=new i.Vector2,d=new i.Vector3,m=0,p=!0===n?s:a,v=n?c:0,y=n?1:-1;for(t=this.verIdx,e=1;e<=u;e++)this.positions.set([0,v,0],3*this.verIdx),this.normals.set([0,y,0],3*this.verIdx),this.uvs.set([.5,.5],2*this.verIdx),this.verIdx++;for(r=this.verIdx,e=0;e<=u;e++){var b=e/u,g=b*l+f,O=Math.cos(g),w=Math.sin(g);d.x=p*O,d.y=v,d.z=p*w,this.positions.set([d.x,d.y,d.z],3*this.verIdx),this.normals.set([0,y,0],3*this.verIdx),h.x=.5*O+.5,h.y=.5*w*y+.5,this.uvs.set([h.x,h.y],2*this.verIdx),this.verIdx++}for(e=0;e<u;e++){var j=t+e,x=r+e;n?this.indices.push(x+1,x,j):this.indices.push(x,x+1,j),m+=3}this.addGroup(this.groupStart,m,n?1:2),this.groupStart+=m}},{key:"height",set:function(e){this.updateHeight(e)},get:function(){return this.parameters.height}}])&&_(t.prototype,r),n&&_(t,n),a}(i.BufferGeometry),U=(i.Geometry,new i.Vector3(0,0,0)),z=(new i.Vector3(1,0,0),new i.Vector3(0,1,0),new i.Vector3(0,0,1),Math.PI);function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return G(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object(a.d)({CustomCylinderBufferGeometry:k});var N=Object(A.a)((function(e){var t=e.mag,r=e.direction,n=e.color,o=void 0===n?"#3761fa":n,a=e.onPointerDown,s=e.hover;return Object(l.c)("mesh",{onPointerDown:a,onPointerOver:function(e){e.stopPropagation(),s(!0)},onPointerOut:function(e){s(!1)},onUpdate:function(e){var n=H(e),o=r instanceof i.Vector3?r.clone().normalize():(new i.Vector3).fromArray(r).normalize(),a=new i.Quaternion;a.setFromUnitVectors(n,o),e.applyQuaternion(a),e.updateMatrixWorld(),e.scale.set(1,t,1)}},Object(l.c)("customCylinderBufferGeometry",{attach:"geometry",args:[{radiusTop:.02,radiusBottom:.02,height:1,radialSegments:25,heightSegments:2,drawingMode:"static"}]}),Object(l.c)("meshBasicMaterial",{attach:"material",color:o}))})),W=Object(A.a)((function(e){var t=e.position,r=e.direction,n=e.color,o=void 0===n?"#3761fa":n,a=e.onPointerDown,s=e.hover;return Object(l.c)("mesh",{onUpdate:function(e){var t=H(e),n=r instanceof i.Vector3?r.clone().normalize():(new i.Vector3).fromArray(r).normalize(),o=new i.Quaternion;o.setFromUnitVectors(t,n),e.applyQuaternion(o),e.updateMatrixWorld()},onPointerDown:a,onPointerOver:function(e){e.stopPropagation(),s(!0)},onPointerOut:function(e){s(!1)},position:t},Object(l.c)("customCylinderBufferGeometry",{attach:"geometry",args:[{radiusTop:0,radiusBottom:.06,height:.09,radialSegments:30,heightSegments:1,drawingMode:"static"}]}),Object(l.c)("meshBasicMaterial",{attach:"material",color:o}))})),q=o.a.forwardRef((function(e,t){var r=e.vector,o=e.color,a=e.origin,s=void 0===a?U:a,c=e.onPointerDown,u=Object(n.useMemo)((function(){var e=r instanceof i.Vector3?r.clone():new i.Vector3(r[0],r[1],r[2]);return{_mag:e.length(),_dir:e.normalize().toArray()}}),[r]),f=u._mag,h=u._dir,d=F(Object(A.c)((function(){return{newDir:h,mag:f}})),2),m=d[0],p=m.newDir,v=m.mag,y=(d[1],Object(A.b)([v,p],(function(e,t){return(new i.Vector3).fromArray(t).normalize().multiplyScalar(e-.09).toArray()}))),b=F(Object(n.useState)(!1),2),g=b[0],O=b[1];return Object(n.useEffect)((function(){document.body.style.cursor=g?"pointer":"auto"}),[g]),Object(l.c)("group",{ref:t,position:s},Object(l.c)(N,{mag:v.interpolate((function(e){return e-.09})),direction:p,color:o,onPointerDown:c,hover:O}),Object(l.c)(W,{position:y,direction:p,color:o,onPointerDown:c,hover:O}))})),L=new i.Matrix4;function H(e){L.extractRotation(e.matrix);var t=new i.Vector3(0,1,0);return t.applyMatrix4(L).normalize(),t}var Q=q,$=function(e,t){return{xAxes:[t,0,0],yAxes:[0,t,0],zAxes:[0,0,t]}[e]},J=function(e,t){return{xAxes:[t,0,0],yAxes:[0,t,0],zAxes:[0,0,t]}[e]},X={xAxes:"rgb(255, 127, 14)",yAxes:"rgb(23, 227, 57)",zAxes:"rgb(0,128,255)"},Y=function(e){var t=e.axes,r=e.thickness,o=void 0===r?.002:r,i=e.length,a=void 0===i?.15:i,s=e.tickValues,c=e.color,u=void 0===c?"black":c,f=e.scale,h=(e.format,Object(n.useMemo)((function(){return function(e){return{xAxes:[0,0,0],yAxes:[0,0,z/2],zAxes:[0,0,z/2]}[e]}(t)}),[t])),d=s.map((function(e,r){return Object(l.c)("group",{key:r},Object(l.c)("mesh",{position:$(t,f(e)),rotation:h},Object(l.c)("cylinderBufferGeometry",{attach:"geometry",args:[o,o,a,20]}),Object(l.c)("meshBasicMaterial",{attach:"material",color:u})))}));return Object(l.c)("group",null,d)},K=function(e){var t=e.axes,r=(e.color,e.origin),n=void 0===r?U:r,o=e.scale,i=e.tickValues,a=e.format;return Object(l.c)("group",null,Object(l.c)(Q,{vector:J(t,o(i.slice(-1)[0])),color:X[t],origin:n}),Object(l.c)(Y,{tickValues:i.slice(i.length/2+1,i.length-1),axes:t,scale:o,format:a}),Object(l.c)(P,{position:J(t,o(i.slice(-1)[0]))},Object(l.c)("div",null,t)))},Z=function(){var e=[-3,3],t=[-10,10],r=Object(n.useMemo)((function(){var r=Object(d.a)().domain(t).range(e),n=Object(h.a)(".0f"),o=r.ticks(10);return{scale:r,tickValues:o,format:n}}),[]),a=r.tickValues,s=r.scale,c=r.format;return Object(l.c)(o.a.Fragment,null,Object(l.c)(K,{axes:"zAxes",scale:s,tickValues:a,format:c}),Object(l.c)(K,{axes:"yAxes",scale:s,tickValues:a,format:c}),Object(l.c)(K,{axes:"xAxes",scale:s,tickValues:a,format:c}),Object(l.c)(Q,{vector:[1,2,1],color:new i.Color("rgb(189, 183, 107)")}))},ee=r(71);function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}Object(a.d)({OrbitControls:ee.a});var re=function(e){var t=Object(n.useRef)(null),r=Object(a.h)(),o=r.camera,i=r.gl;return Object(n.useEffect)((function(){t.current.target.set(0,0,0)}),[]),Object(a.f)((function(){t&&t.current&&t.current.update()})),Object(l.c)("orbitControls",te({ref:t,args:[o,i.domElement]},e))},ne="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,oe="undefined"!=typeof window;function ie(e){var t=e.element,r=e.useWindow;if(!oe)return{x:0,y:0};var n=(t?t.current:document.body).getBoundingClientRect();return r?{x:window.scrollX,y:window.scrollY}:{x:n.left,y:n.top}}function ae(e,t,r,o,i){var a=Object(n.useRef)(ie({useWindow:o})),s=null,c=function(){var t=ie({element:r,useWindow:o});e({prevPos:a.current,currPos:t}),a.current=t,s=null};ne((function(){if(oe){var e=function(){i?null===s&&(s=setTimeout(c,i)):c()};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}}),t)}ae.defaultProps={deps:[],element:!1,useWindow:!1,wait:null};var se=r(74),ce=r(28),ue=r(72),le=r(75),fe=r(76),he=r(5),de={uniforms:{tDiffuse:{value:null},tDisp:{value:null},byp:{value:0},amount:{value:.08},angle:{value:.02},seed:{value:.02},seed_x:{value:.02},seed_y:{value:.02},distortion_x:{value:.5},distortion_y:{value:.6},col_s:{value:.05}},vertexShader:"varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }",fragmentShader:"uniform int byp; //should we apply the glitch\n    uniform sampler2D tDiffuse;\n    uniform sampler2D tDisp;\n    uniform float amount;\n    uniform float angle;\n    uniform float seed;\n    uniform float seed_x;\n    uniform float seed_y;\n    uniform float distortion_x;\n    uniform float distortion_y;\n    uniform float col_s;\n    varying vec2 vUv;\n    float rand(vec2 co){\n      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n    }\n    void main() {\n      if(byp<1) {\n        vec2 p = vUv;\n        float xs = floor(gl_FragCoord.x / 0.5);\n        float ys = floor(gl_FragCoord.y / 0.5);\n        //based on staffantans glitch shader for unity https://github.com/staffantan/unityglitch\n        vec4 normal = texture2D (tDisp, p*seed*seed);\n        if(p.y<distortion_x+col_s && p.y>distortion_x-col_s*seed) {\n          if(seed_x>0.){\n            p.y = 1. - (p.y + distortion_y);\n          }\n          else {\n            p.y = distortion_y;\n          }\n        }\n        p.x+=normal.x*seed_x*(seed/5.);\n        p.y+=normal.y*seed_y*(seed/5.);\n        //base from RGB shift shader\n        vec2 offset = amount * vec2( cos(angle), sin(angle));\n        vec4 cr = texture2D(tDiffuse, p + offset);\n        vec4 cga = texture2D(tDiffuse, p);\n        vec4 cb = texture2D(tDiffuse, p - offset);\n        gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);\n      }\n      else {\n        gl_FragColor=texture2D (tDiffuse, vUv);\n      }\n    }"},me=function(e){he.a.call(this),void 0===de&&console.error("THREE.GlitchPass relies on THREE.DigitalGlitch");var t=de;this.uniforms=i.UniformsUtils.clone(t.uniforms),void 0===e&&(e=64),this.uniforms.tDisp.value=this.generateHeightmap(e),this.material=new i.ShaderMaterial({uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.camera=new i.OrthographicCamera(-1,1,1,-1,0,1),this.scene=new i.Scene,this.quad=new i.Mesh(new i.PlaneBufferGeometry(2,2),null),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.factor=0};me.prototype=Object.assign(Object.create(he.a.prototype),{constructor:me,render:function(e,t,r,n,o){var a=Math.max(0,this.factor);this.uniforms.tDiffuse.value=r.texture,this.uniforms.seed.value=Math.random()*a,this.uniforms.byp.value=0,a?(this.uniforms.amount.value=Math.random()/90*a,this.uniforms.angle.value=i.Math.randFloat(-Math.PI,Math.PI)*a,this.uniforms.distortion_x.value=i.Math.randFloat(0,1)*a,this.uniforms.distortion_y.value=i.Math.randFloat(0,1)*a,this.uniforms.seed_x.value=i.Math.randFloat(-.3,.3)*a,this.uniforms.seed_y.value=i.Math.randFloat(-.3,.3)*a):this.uniforms.byp.value=1,this.quad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),e.render(this.scene,this.camera)):(e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera))},generateHeightmap:function(e){for(var t=new Float32Array(e*e*3),r=e*e,n=0;n<r;n++){var o=i.Math.randFloat(0,1);t[3*n+0]=o,t[3*n+1]=o,t[3*n+2]=o}var a=new i.DataTexture(t,e,e,i.RGBFormat,i.FloatType);return a.needsUpdate=!0,a}});var pe={uniforms:{byp:{value:0},texture:{type:"t",value:null},time:{type:"f",value:0},factor:{type:"f",value:0},resolution:{type:"v2",value:null}},vertexShader:"varying vec2 vUv;\n    void main(){  \n      vUv = uv; \n      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);\n      gl_Position = projectionMatrix * modelViewPosition;\n    }",fragmentShader:"uniform int byp; //should we apply the glitch ?\n    uniform float time;\n    uniform float factor;\n    uniform vec2 resolution;\n    uniform sampler2D texture;\n    \n    varying vec2 vUv;\n    \n    void main() {  \n      if (byp<1) {\n        vec2 uv1 = vUv;\n        vec2 uv = gl_FragCoord.xy/resolution.xy;\n        float frequency = 6.0;\n        float amplitude = 0.015 * factor;\n        float x = uv1.y * frequency + time * .7; \n        float y = uv1.x * frequency + time * .3;\n        uv1.x += cos(x+y) * amplitude * cos(y);\n        uv1.y += sin(x-y) * amplitude * cos(y);\n        vec4 rgba = texture2D(texture, uv1);\n        gl_FragColor = rgba;\n      } else {\n        gl_FragColor = texture2D(texture, vUv);\n      }\n    }"},ve=function(e){he.a.call(this),void 0===pe&&console.error("THREE.WaterPass relies on THREE.WaterShader");var t=pe;this.uniforms=i.UniformsUtils.clone(t.uniforms),void 0===e&&(e=64),this.uniforms.resolution.value=new i.Vector2(e,e),this.material=new i.ShaderMaterial({uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.camera=new i.OrthographicCamera(-1,1,1,-1,0,1),this.scene=new i.Scene,this.quad=new i.Mesh(new i.PlaneBufferGeometry(2,2),null),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.factor=0,this.time=0};function ye(e){var t=e.down,r=Object(n.useRef)(),o=Object(a.h)(),s=o.scene,c=o.gl,u=o.size,f=o.camera,h=Object(n.useMemo)((function(){return new i.Vector2(u.width,u.height)}),[u]);return Object(n.useEffect)((function(){r.current.setSize(u.width,u.height)}),[u]),Object(a.f)((function(){return r.current.render()}),1),Object(l.c)("effectComposer",{ref:r,args:[c]},Object(l.c)("renderPass",{attachArray:"passes",scene:s,camera:f}),Object(l.c)("waterPass",{attachArray:"passes",factor:1.5}),Object(l.c)("unrealBloomPass",{attachArray:"passes",args:[h,.5,1,0]}),Object(l.c)("glitchPass",{attachArray:"passes",factor:t?1:0}))}ve.prototype=Object.assign(Object.create(he.a.prototype),{constructor:ve,render:function(e,t,r,n,o){var i=Math.max(0,this.factor);this.uniforms.byp.value=i?0:1,this.uniforms.texture.value=r.texture,this.uniforms.time.value=this.time,this.uniforms.factor.value=this.factor,this.time+=.05,this.quad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),e.render(this.scene,this.camera)):(e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera))}}),Object(a.d)({EffectComposer:se.a,ShaderPass:ce.a,RenderPass:ue.a,WaterPass:ve,UnrealBloomPass:le.a,FilmPass:fe.a,GlitchPass:me});var be=r.p+"fonts/bold.blob";function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Oe(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}Object(n.forwardRef)((function(e,t){var r=e.children,o=e.vAlign,s=void 0===o?"center":o,c=e.hAlign,u=void 0===c?"center":c,f=e.size,h=void 0===f?1:f,d=(e.color,Oe(e,["children","vAlign","hAlign","size","color"])),m=Object(a.g)(i.FontLoader,be),p=Object(n.useMemo)((function(){return{font:m,size:40,height:50}}),[m]),v=Object(a.i)((function(e){var t=new i.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x="center"===u?-t.x/2:"right"===u?0:-t.x,e.position.y="center"===s?-t.y/2:"top"===s?0:-t.y}),[r]);return Object(l.c)("group",ge({ref:t},d,{scale:[.1*h,.1*h,.1]}),Object(l.c)("mesh",{ref:v},Object(l.c)("textGeometry",{attach:"geometry",args:[r,p]}),Object(l.c)("meshNormalMaterial",{attach:"material"})))})),r(73);function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function je(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?we(Object(r),!0).forEach((function(t){xe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function xe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Se(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Pe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Pe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(){var e=Object(c.b)(),t=Se(Object(n.useState)({toggle1:!1,toggle2:!1}),2),r=t[0],o=r.toggle1,h=(r.toggle2,t[1],Se(Object(s.c)((function(){return{transform:"scale(1)",opacity:.7,fill:"black"}})),2));h[0];(0,h[1])({transform:o?" scale(1.6)":"scale(1)",opacity:1,fill:o?"red":"black"});var d=Se(Object(n.useState)({scrolled:!1,navOpen:!1}),2),m=d[0],p=m.scrolled,v=m.navOpen,y=d[1],b=Se(Object(s.c)((function(){return{navBackColor:Object(u.a)(e.palette.white.light,0)}})),2);b[0].navBackColor;(0,b[1])({navBackColor:p&&!v?Object(u.a)(e.palette.white.lightest,.95):Object(u.a)(e.palette.white.light,0)}),ae((function(e){var t=e.currPos;y((function(e){return je(je({},e),{},{scrolled:t.y<35})}))}),[],null,!1,0);var g=Se(Object(n.useState)(!1),2),O=(g[0],g[1],Se(Object(n.useState)(!1),2)),w=O[0],j=(O[1],Se(Object(n.useState)(!1),2)),x=j[0],S=j[1],P=Object(n.useRef)([0,0]),A=Object(n.useCallback)((function(e){var t=e.clientX,r=e.clientY;P.current=[t-window.innerWidth/2,r-window.innerHeight/2]}),[]),M=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);return Object(n.useEffect)((function(){document.body.style.cursor="pointer"}),[w]),Object(l.c)("div",{className:"course",style:{width:"80vw",height:"80vh",margin:"10vh 10vw auto 10vw",position:"absolute"}},Object(l.c)(a.a,{pixelRatio:Math.min(2,M?window.devicePixelRatio:1),camera:{fov:100,position:[0,0,10]},onMouseMove:A,onMouseUp:function(){return S(!1)},onMouseDown:function(){return S(!0)},onCreated:function(e){var t=e.gl;t.toneMapping=i.Uncharted2ToneMapping,t.setClearColor(new i.Color("#1d1d42"))}},Object(l.c)("pointLight",{distance:100,intensity:4,color:new i.Color("white")}),Object(l.c)(Z,null),Object(l.c)(re,null),Object(l.c)(f,{position:[0,0,0],dimensions:{width:5,height:4}}),Object(l.c)("ambientLight",{intensity:.6,color:new i.Color("white")}),Object(l.c)(ye,{down:x})))}}}]);