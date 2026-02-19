import{f as p}from"./countries-Bl6yzoRH.js";function g(e){const t=e.name?.common??"Unknown",n=e.capital?.[0]??"—",a=e.population?.toLocaleString("en-US")??"—",u=e.region??"—",d=e.flags?.png??"";return`
    <article class="card" data-code="${e.cca3}">
      <img class="flag" src="${d}" alt="${t} flag" loading="lazy" />
      <div class="card-body">
        <h3>${t}</h3>
        <p><b>Capital:</b> ${n}</p>
        <p><b>Population:</b> ${a}</p>
        <p><b>Region:</b> ${u}</p>
      </div>
    </article>
  `}function m(e){const t=document.createElement("div");return t.innerHTML=`
    <input class="input" id="searchInput" placeholder="Search country..." />
  `,t.querySelector("#searchInput").addEventListener("input",a=>e(a.target.value)),t}function f(e){const t=document.createElement("div");return t.innerHTML=`
    <select class="select" id="regionSelect">
      <option value="all">All regions</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  `,t.querySelector("#regionSelect").addEventListener("change",n=>{e(n.target.value)}),t}const c=document.querySelector("#grid"),o=document.querySelector("#status"),h=document.querySelector("#search"),v=document.querySelector("#filter");let l=[],s="",r="all";function i(){const e=l.filter(t=>(t.name?.common?.toLowerCase()??"").includes(s.toLowerCase())).filter(t=>r==="all"?!0:t.region===r);c.innerHTML=e.map(g).join(""),o.textContent=e.length===0?"No countries found.":""}async function C(){o.textContent="Loading countries...";try{l=await p(),o.textContent="",i()}catch(e){console.error(e),o.textContent="Error loading countries. Try again."}}h.appendChild(m(e=>{s=e,i()}));v.appendChild(f(e=>{r=e,i()}));c.addEventListener("click",e=>{const t=e.target.closest(".card");if(!t)return;const n=t.dataset.code;window.location.href=`details.html?code=${n}`});C();
