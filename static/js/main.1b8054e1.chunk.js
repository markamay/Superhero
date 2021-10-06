(this.webpackJsonpsuperhero=this.webpackJsonpsuperhero||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(6),i=n.n(c),s=(n(11),n(3)),o=n.n(s),j=n(5),d=n(2),h=n(0),l=function(){return Object(h.jsxs)("div",{className:"footer",children:[Object(h.jsx)("p",{children:"Author: Mark May"}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"mailto:markamay@live.com",children:"markamay@live.com"})})]})},b=function(){return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("h1",{children:"SuperPedia"}),Object(h.jsx)("h2",{children:"The Unofficial Encylopedia of all Super-Beings"})]})},u=function(){return Object(h.jsx)("div",{className:"no-heroes-found",children:Object(h.jsx)("h2",{children:"No super-beings found matching that search term."})})},p=function(e){var t,n=e.heading,r=e.description;return t=r&&"-"!==r?r:"N/A",Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:n}),Object(h.jsx)("td",{children:t})]})},O=function(e){var t=e.heading;return Object(h.jsx)("tr",{children:Object(h.jsx)("th",{colSpan:"2",className:"sub-heading",children:t})})},g=function(e){var t=e.appearance;return Object(h.jsxs)("table",{className:"sub-details",children:[Object(h.jsx)(O,{heading:"Appearance"}),Object(h.jsx)(p,{heading:"Gender",description:t.gender}),Object(h.jsx)(p,{heading:"Race",description:t.race}),Object(h.jsx)(p,{heading:"Height",description:t.height[0]}),Object(h.jsx)(p,{heading:"Weight",description:t.weight[0]}),Object(h.jsx)(p,{heading:"Eye Color",description:t.eyeColor}),Object(h.jsx)(p,{heading:"Hair Color",description:t.hairColor})]})},x=function(e){var t=e.powerstats;return Object(h.jsxs)("table",{className:"sub-details",children:[Object(h.jsx)(O,{heading:"Power Stats"}),Object(h.jsx)(p,{heading:"Intelligence",description:t.intelligence}),Object(h.jsx)(p,{heading:"Strength",description:t.strength}),Object(h.jsx)(p,{heading:"Speed",description:t.speed}),Object(h.jsx)(p,{heading:"Durability",description:t.durability}),Object(h.jsx)(p,{heading:"Power",description:t.power}),Object(h.jsx)(p,{heading:"Combat",description:t.combat})]})},f=function(e){var t=e.biography,n=t.aliases.join(", ");return Object(h.jsxs)("table",{class:"sub-details",children:[Object(h.jsx)(O,{heading:"Biography"}),Object(h.jsx)(p,{heading:"Full Name",description:t.fullName}),Object(h.jsx)(p,{heading:"Alter Egos",description:t.alterEgos}),Object(h.jsx)(p,{heading:"Aliases",description:n}),Object(h.jsx)(p,{heading:"Place of Birth",description:t.placeOfBirth}),Object(h.jsx)(p,{heading:"First Appearance",description:t.firstAppearance}),Object(h.jsx)(p,{heading:"Publisher",description:t.publisher}),Object(h.jsx)(p,{heading:"Alignment",description:t.alignment})]})},m=function(e){var t=e.workDetails;return Object(h.jsxs)("table",{className:"sub-details",children:[Object(h.jsx)(O,{heading:"Work"}),Object(h.jsx)(p,{heading:"Occupation",description:t.occupation}),Object(h.jsx)(p,{heading:"Base",description:t.base})]})},v=function(e){var t=e.hero;return Object(h.jsxs)("div",{className:"full-details",children:[Object(h.jsx)("h2",{children:t.name}),Object(h.jsx)("img",{src:t.images.sm,alt:"".concat(t.name," avatar")}),Object(h.jsx)(f,{biography:t.biography}),Object(h.jsx)(g,{appearance:t.appearance}),Object(h.jsx)(x,{powerstats:t.powerstats}),Object(h.jsx)(m,{workDetails:t.work})]})},y=function(e){var t=e.hero;return Object(h.jsxs)("div",{className:"small-details",children:[Object(h.jsx)("img",{src:t.images.xs,alt:"".concat(t.name," thumbnail")}),Object(h.jsx)("h3",{children:t.name}),Object(h.jsx)("p",{class:"sub-title",children:t.biography.fullName?"(".concat(t.biography.fullName,")"):""})]})},N=function(e){var t,n=e.hero,a=Object(r.useState)(!1),c=Object(d.a)(a,2),i=c[0],s=c[1],o=n.biography.alignment;return t="good"===o?"green":"bad"===o?"red":"gray",Object(h.jsx)("div",{className:"superhero-card-border",style:{backgroundColor:t},children:Object(h.jsx)("div",{className:"superhero-card",onClick:function(){s(!i)},children:i?Object(h.jsx)(v,{hero:n}):Object(h.jsx)(y,{hero:n})})})},w=function(e){var t=e.heroes;return Object(h.jsx)("div",{children:t.length?t.map((function(e){return Object(h.jsx)(N,{hero:e},e.id)})):Object(h.jsx)(u,{})})},k=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),i=Object(d.a)(c,2),s=i[0],u=i[1];Object(r.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var p=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://akabab.github.io/superhero-api/api/all.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container main-content",children:[Object(h.jsx)(b,{}),Object(h.jsx)("input",{type:"text",value:s,onChange:function(e){u(e.target.value)},placeholder:"Search for a hero (either by name or by good/bad affiliation)"}),Object(h.jsx)(w,{heroes:function(){if(!s.trim())return n;var e=s.trim().toLowerCase();return"bad"===e||"good"===e?n.filter((function(t){return t.biography.alignment===e})):n.filter((function(t){var n=t.name.toLowerCase(),r=t.biography.fullName?t.biography.fullName.toLowerCase():"";return n.includes(e)||r.includes(e)}))}()}),Object(h.jsx)(l,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),C()}},[[14,1,2]]]);
//# sourceMappingURL=main.1b8054e1.chunk.js.map