(this.webpackJsonppalette=this.webpackJsonppalette||[]).push([[0],{227:function(e,t,i){},369:function(e,t,i){"use strict";i.r(t);var n=i(0),c=i.n(n),l=i(21),r=i.n(l),s=(i(227),i(40)),o=i(26),a=i(25),d=i(51),h=i(90),j=i(413),b=i(410),f=i(411),u=i(406),x=i(209),O=i.n(x),v=i(414),g=i(417),p=i(412),m=i(418),y=i(211),w=i(404),C=i(405),S=i(202),k=i(203),L=i(97),M=i(116),A=i(416),z=i(204),P=i(3),B=function e(t,i){Object(h.a)(this,e),this.x=void 0,this.y=void 0,this.x=t,this.y=i},T=function e(t){Object(h.a)(this,e),this.colors=void 0,this.isSelected=void 0,this.isVisible=void 0,this.colors=t,this.isSelected=!0,this.isVisible=!0},D=function(e){var t=function(e){return("0"+e.toString(16)).substr(-2)};return"#"+t(Math.round(255*e[0]))+t(Math.round(255*e[1]))+t(Math.round(255*e[2]))},I=function(e,t,i){if(e<0||t<0||i<0||e>1||t>1||i>1)return[0,0,0];1===e&&(e=0);var n=i-t,c=[[i,n,n],[i,i,n],[n,i,n],[n,i,i],[n,n,i],[i,n,i]],l=[[1,1],[0,-1],[2,1],[1,-1],[0,1],[2,-1]],r=Math.floor(6*e),s=l[r][0],o=l[r][1],a=c[r];return a[s]+=t*(e-r/6)*6*o,a},E=function(e){var t=document.getElementById(e);return t?t.getContext("2d"):null},R=function(e){return Object(n.useEffect)((function(){!function(){for(var t=E("colormap"),i=function(i,n,c,l){for(var r=e.width,s=0;s<r;++s){var o=I(1*s/r,c,l);t.fillStyle=D(o),t.fillRect(s,i,1,n)}},n=e.height,c=1/n,l=0;l<n;++l){var r=1-c*l;i(1*l,1,r,r)}t.save()}()}),[]),Object(P.jsx)("canvas",{id:"colormap",width:e.width,height:e.height,style:{position:"absolute",zIndex:1}})},F=function(e){var t=function(t,i){var n=1*t/e.width,c=1-1/e.height*i;return[n,c,c]},i=function(e,t,i,n,c){var l=new Path2D;l.moveTo(t+n,i),l.arc(t,i,n,0,2*Math.PI),e&&(e.strokeStyle="#ffffff",e.fillStyle="#ffffff",e.font="14px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(""+c,t,i),e.save())};return Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{style:{width:e.width,textAlign:"center"},children:"Hue"}),Object(P.jsxs)("div",{style:{width:e.width,height:20,position:"relative",fontSize:"x-small",marginLeft:0,textAlign:"center"},children:[Object(P.jsx)("div",{style:{position:"absolute",textAlign:"left"},children:"0"}),Object(P.jsx)("div",{style:{position:"absolute",left:e.width/6-10,width:20},children:"60"}),Object(P.jsx)("div",{style:{position:"absolute",left:e.width/6*2-10,width:20},children:"120"}),Object(P.jsx)("div",{style:{position:"absolute",left:e.width/6*3-10,width:20},children:"180"}),Object(P.jsx)("div",{style:{position:"absolute",left:e.width/6*4-10,width:20},children:"240"}),Object(P.jsx)("div",{style:{position:"absolute",left:e.width/6*5-10,width:20},children:"300"}),Object(P.jsx)("div",{style:{position:"absolute",left:e.width/6*6-80,width:80,textAlign:"right"},children:"360"})]}),Object(P.jsxs)("div",{style:{width:e.width,height:e.height,marginLeft:0,position:"relative"},children:[Object(P.jsx)(R,{width:e.width,height:e.height}),Object(P.jsx)("canvas",{id:"overlay",style:{position:"absolute",zIndex:2},width:e.width,height:e.height,onMouseMove:function(n){for(var c=n.nativeEvent,l=[],r=c.offsetX,s=e.width/e.ncolors,o=0;o<e.ncolors;++o){var a=(r+s*o)%e.width,d=(c.offsetY+0*o)%e.height;l.push(new B(a,d))}!function(t,n){var c=E("overlay");c.clearRect(0,0,e.width,e.height);for(var l=0;l<t.length;++l){var r=t[l];i(c,r.x,r.y,n,l)}}(l,4);for(var h=[],j=0,b=l;j<b.length;j++){var f=b[j],u=t(f.x,f.y);h.push(D(I(u[0],u[1],u[2])))}e.setColors(h)},onMouseLeave:e.onMouseLeave,onClick:function(i){var n=function(i,n){for(var c=[],l=i,r=e.width/e.ncolors,s=0;s<e.ncolors;++s){var o=(l+r*s)%e.width,a=(n+0*s)%e.height;c.push(new B(o,a))}for(var d=[],h=0,j=c;h<j.length;h++){var b=j[h],f=t(b.x,b.y);d.push(D(I(f[0],f[1],f[2])))}return d}(i.nativeEvent.offsetX,i.nativeEvent.offsetY);e.onClick(n)}})]})]})},N=function(){var e={};return function(t){return t in e||(e[t]=function(e,t){for(var i=[],n=0;n<t;++n){for(var c={x:2018+n},l=0;l<e;++l)c["data"+l]=Math.floor(100*Math.random());i.push(c)}return i}(t,4)),e[t]}}(),V=function(e){for(var t=N(e.colors.length),i=[],n=0;n<e.colors.length;++n)i.push(Object(P.jsx)(y.a,{dataKey:"data"+n,fill:e.colors[n],isAnimationActive:!1},"bar"+n));return Object(P.jsx)(w.a,{width:"90%",height:240,children:Object(P.jsxs)(C.a,{data:t,children:[Object(P.jsx)(S.a,{dataKey:"x"}),Object(P.jsx)(k.a,{}),Object(P.jsx)(L.a,{}),i]})})},H=function(){var e={};return function(t){if(t in e)return e[t];for(var i=[],n=0;n<t;++n)i.push({i:n,data:Math.floor(100*Math.random())});return e[t]=i,i}}(),J=function(e){for(var t=H(e.colors.length),i=[],n=0;n<e.colors.length;++n)i.push(Object(P.jsx)(M.a,{fill:e.colors[n]},"cell"+n));return Object(P.jsx)(w.a,{width:"50%",height:240,children:Object(P.jsx)(A.a,{height:240,children:Object(P.jsx)(z.a,{data:t,dataKey:"data",label:!0,outerRadius:"70%",isAnimationActive:!1,children:i})})})},K=function(e){for(var t=e.colors,i={width:(e.width-10*(t.length-1))/t.length,height:20,marginRight:10,fontSize:"x-small",textAlign:"center",display:"flex",justifyContent:"center",alignContent:"center",flexDirection:"column"},n=[],c=[],l=0;l<e.colors.length;++l)n.push(Object(P.jsx)("div",{style:Object(d.a)(Object(d.a)({},i),{},{background:e.colors[l],color:"#ffffff"}),children:l},"sample-box"+l)),c.push(Object(P.jsx)("div",{style:Object(d.a)(Object(d.a)({},i),{},{color:e.colors[l],height:10,marginTop:2}),children:e.colors[l]},"sample-text"+l));var r=Object(P.jsx)("div",{style:{display:"flex",flexDirection:"row",marginTop:0},children:c});return Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{style:{display:"flex",flexDirection:"row",margin:0},children:n}),r]})},Y=function(e){return Object(P.jsx)("div",{style:{width:e.width},children:Object(P.jsxs)(u.a,{container:!0,spacing:2,direction:"column",children:[Object(P.jsx)(u.a,{item:!0,children:Object(P.jsxs)(b.a,{size:"small",children:[Object(P.jsx)(f.a,{style:{fontSize:"small"},children:"# of colors"}),Object(P.jsxs)(v.a,{value:e.ncolors,onChange:function(t){e.setNumColors(t.target.value)},style:{textAlign:"center",marginTop:8},children:[Object(P.jsx)(g.a,{value:2,children:"2"}),Object(P.jsx)(g.a,{value:3,children:"3"}),Object(P.jsx)(g.a,{value:4,children:"4"}),Object(P.jsx)(g.a,{value:5,children:"5"}),Object(P.jsx)(g.a,{value:6,children:"6"}),Object(P.jsx)(g.a,{value:7,children:"7"}),Object(P.jsx)(g.a,{value:8,children:"8"}),Object(P.jsx)(g.a,{value:9,children:"9"}),Object(P.jsx)(g.a,{value:10,children:"10"}),Object(P.jsx)(g.a,{value:11,children:"11"}),Object(P.jsx)(g.a,{value:12,children:"12"})]})]})}),Object(P.jsx)(u.a,{item:!0,children:Object(P.jsxs)(b.a,{size:"small",children:[Object(P.jsx)(f.a,{style:{fontSize:"small"},children:"Background"}),Object(P.jsxs)(m.a,{value:e.backgroundColor,exclusive:!0,onChange:function(t,i){e.setBackgroundColor(i)},size:"small",children:[Object(P.jsx)(p.a,{value:"#ffffff",children:"Light"}),Object(P.jsx)(p.a,{value:"#111111",children:"Dark"})]})]})})]})})},G=function(e){for(var t=Object(n.useState)(!1),i=Object(a.a)(t,2),c=i[0],l=i[1],r=Object(n.useState)(!1),s=Object(a.a)(r,2),o=s[0],h=s[1],j=[],b=0;b<e.palette.colors.length;++b)j.push(Object(P.jsx)("div",{style:{width:20,height:20,background:e.palette.colors[b],marginRight:b+1<e.palette.colors.length?2:0,border:"solid 1px #444444"}},"palette-box"+b));var f={border:"solid 1px #ffffff",padding:3};e.palette.isSelected?f={border:"solid 2px #000000",padding:2}:c&&(f={border:"solid 1px #000000",padding:3});var u={display:"flex"};return o&&(u={display:"none"}),Object(P.jsxs)("div",{style:Object(d.a)(Object(d.a)({},u),{},{textAlign:"center",alignContent:"center",alignItems:"center",flexDirection:"row"}),children:[Object(P.jsx)("div",{onMouseEnter:function(e){l(!0)},onMouseLeave:function(e){l(!1)},style:Object(d.a)(Object(d.a)({display:"flex",flexDirection:"row"},f),{},{cursor:"pointer"}),onClick:function(t){e.selectPalette(e.palette)},children:j}),Object(P.jsx)(O.a,{fontSize:"small",style:{cursor:"pointer"},onClick:function(){h(!0)}})]})},X=function(e){var t,i=[],n=0,c=Object(o.a)(e.paletteList);try{var l=function(){var c=t.value;c.isVisible&&i.push(Object(P.jsx)("div",{style:{marginBottom:1},children:Object(P.jsx)(G,{palette:c,selectPalette:function(t){e.onPaletteSelected(t);var i,n=Object(o.a)(e.paletteList);try{for(n.s();!(i=n.n()).done;){var l=i.value;l.isSelected=l===c}}catch(r){n.e(r)}finally{n.f()}}})},"palette"+n)),++n};for(c.s();!(t=c.n()).done;)l()}catch(h){c.e(h)}finally{c.f()}var r,s="",a=Object(o.a)(e.paletteList);try{for(a.s();!(r=a.n()).done;){var d=r.value;d.isSelected&&(s=d.colors.join("\n"))}}catch(h){a.e(h)}finally{a.f()}return Object(P.jsxs)(u.a,{container:!0,children:[Object(P.jsx)(u.a,{item:!0,container:!0,style:{marginTop:10},children:Object(P.jsx)(u.a,{item:!0,children:Object(P.jsx)(K,{width:e.width,colors:e.currentColors})})}),Object(P.jsxs)(u.a,{item:!0,container:!0,children:[Object(P.jsx)(u.a,{item:!0,xs:8,children:Object(P.jsxs)("div",{style:{background:e.bgcolor,border:"solid 1px",marginTop:"10px",marginRight:"20px",padding:"5px"},children:[Object(P.jsx)("h4",{style:{border:"none 1px",margin:"0px",marginBottom:"20px",padding:"0px"},children:"Sample Charts"}),Object(P.jsx)(V,{colors:e.currentColors}),Object(P.jsx)(J,{colors:e.currentColors})]})}),Object(P.jsxs)(u.a,{item:!0,children:[Object(P.jsxs)(u.a,{container:!0,alignItems:"center",spacing:2,children:[Object(P.jsx)(u.a,{item:!0,children:Object(P.jsx)("h4",{children:"Palette List"})}),Object(P.jsx)(u.a,{item:!0,children:Object(P.jsx)(j.a,{variant:"outlined",size:"small",onClick:e.clearPaletteList,children:"Clear all"})})]}),i,Object(P.jsx)("h4",{children:"Selected Palette"}),Object(P.jsx)("pre",{style:{fontSize:"large"},children:s})]})]})]})},_=function(e){var t=Object(n.useState)(6),i=Object(a.a)(t,2),c=i[0],l=i[1],r=Object(n.useState)("#ffffff"),d=Object(a.a)(r,2),h=d[0],j=d[1],b=Object(n.useState)([]),f=Object(a.a)(b,2),x=f[0],O=f[1],v=Object(n.useState)(Array(c).fill("#ffffff")),g=Object(a.a)(v,2),p=g[0],m=g[1];return Object(P.jsxs)(u.a,{container:!0,justify:"center",style:{background:"#bbbbbb"},children:[Object(P.jsxs)(u.a,{item:!0,container:!0,style:{width:e.width+20,border:"solid 1px",background:"white",padding:"10px"},children:[Object(P.jsx)("h1",{style:{marginTop:"0px",marginBottom:"0px",fontSize:"large"},children:"Color Palette Generator for Charts"}),Object(P.jsxs)(u.a,{item:!0,container:!0,direction:"column",style:{width:e.width},children:[Object(P.jsx)(u.a,{item:!0,children:Object(P.jsx)(F,{width:e.width,height:e.height,ncolors:c,setColors:m,onClick:function(e){var t,i=Object(s.a)(x),n=Object(o.a)(i);try{for(n.s();!(t=n.n()).done;){t.value.isSelected=!1}}catch(c){n.e(c)}finally{n.f()}i.push(new T(e)),O(i)},onMouseLeave:function(){var e=x.find((function(e){return e.isSelected}));e&&m(e.colors)}})}),Object(P.jsx)(u.a,{item:!0,style:{padding:0,width:e.width},children:Object(P.jsx)(X,{width:e.width,ncolors:c,paletteList:x,currentColors:p,onPaletteSelected:function(e){m(e.colors)},clearPaletteList:function(){var e,t=Object(s.a)(x),i=Object(o.a)(t);try{for(i.s();!(e=i.n()).done;){e.value.isVisible=!1}}catch(n){i.e(n)}finally{i.f()}O(t)},bgcolor:h})})]})]}),Object(P.jsxs)(u.a,{item:!0,style:{background:"white",width:"200px",marginLeft:"3px",paddingLeft:"5px",paddingRight:"5px",border:"solid 1px"},children:[Object(P.jsx)("h4",{className:"myh4",children:"About"}),Object(P.jsxs)("p",{children:[" ","You can generate constant hue strided palettes while looking at various sample charts."]}),Object(P.jsx)("h4",{className:"myh4",children:"How to use"}),Object(P.jsx)("p",{children:Object(P.jsxs)("ol",{style:{paddingLeft:"24px"},children:[Object(P.jsx)("li",{children:"Move a pointer on color map to find a palette you like."}),Object(P.jsx)("li",{children:"Click to save a current palette into a palette list."}),Object(P.jsx)("li",{children:"Color code of current palette is shown under the list."})]})}),Object(P.jsx)("h4",{className:"myh4",children:"Control"}),Object(P.jsx)("p",{children:Object(P.jsx)(Y,{width:e.width,backgroundColor:h,setBackgroundColor:j,ncolors:c,setNumColors:l})}),Object(P.jsx)("p",{children:Object(P.jsxs)("a",{href:"https://github.com/iszk1215/palette",children:[Object(P.jsx)("img",{src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",width:"28px",style:{verticalAlign:"middle"}}),Object(P.jsx)("span",{style:{verticalAlign:"middle"},children:" Feedback "})]})}),Object(P.jsx)("p",{style:{fontSize:"small"},children:"Jun 30, 2021"})]})]})},q=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,420)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;i(e),n(e),c(e),l(e),r(e)}))};r.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(_,{width:1080,height:200})}),document.getElementById("root")),q()}},[[369,1,2]]]);
//# sourceMappingURL=main.5befb59d.chunk.js.map