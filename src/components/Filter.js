export function Filter(onFilter) {
  const el = document.createElement("div");
  el.innerHTML = `
    <select class="select" id="regionSelect">
      <option value="all">All regions</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  `;

  el.querySelector("#regionSelect").addEventListener("change", (e) => {
    onFilter(e.target.value);
  });

  return el;
}
