import{f as m}from"./countries-CxOU1yJM.js";function g(e){const t=e.name?.common??"Unknown",n=e.capital?.[0]??"—",a=e.population?.toLocaleString("en-US")??"—",u=e.region??"—",p=e.flags?.png??"";return`
    <article class="card" data-code="${e.cca3}">
      <img class="flag" src="${p}" alt="${t} flag" loading="lazy" />
      <div class="card-body">
        <h3>${t}</h3>
        <p><b>Capital:</b> ${n}</p>
        <p><b>Population:</b> ${a}</p>
        <p><b>Region:</b> ${u}</p>
      </div>
    </article>
  `}function f(e){const t=document.createElement("div");return t.innerHTML=`
    <input class="input" id="searchInput" placeholder="Search country..." />
  `,t.querySelector("#searchInput").addEventListener("input",a=>e(a.target.value)),t}function h(e){const t=document.createElement("div");return t.innerHTML=`
    <select class="select" id="regionSelect">
      <option value="all">All regions</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  `,t.querySelector("#regionSelect").addEventListener("change",n=>{e(n.target.value)}),t}const l=document.querySelector("#grid"),o=document.querySelector("#status"),v=document.querySelector("#search"),w=document.querySelector("#filter");let s=[],d="",c="all";function r(){const e=s.filter(t=>(t.name?.common?.toLowerCase()??"").includes(d.toLowerCase())).filter(t=>c==="all"?!0:t.region===c);l.innerHTML=e.map(g).join(""),o.textContent=e.length===0?"No countries found.":""}async function L(){o.textContent="Loading countries...";try{s=await m(),o.textContent="",r()}catch(e){console.error(e),o.textContent="Error loading countries. Try again."}}v.appendChild(f(e=>{d=e,r()}));w.appendChild(h(e=>{c=e,r()}));l.addEventListener("click",e=>{const t=e.target.closest(".card");if(!t)return;const n=t.dataset.code;window.location.href=`details.html?code=${n}`});const i=document.getElementById("scrollTopBtn");window.addEventListener("scroll",()=>{window.scrollY>150?i.classList.add("show"):i.classList.remove("show")});i.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});L();
