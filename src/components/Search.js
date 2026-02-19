export function Search(onSearch) {
  const el = document.createElement("div");
  el.innerHTML = `
    <input class="input" id="searchInput" placeholder="Search country..." />
  `;

  const input = el.querySelector("#searchInput");
  input.addEventListener("input", (e) => onSearch(e.target.value));

  return el;
}
