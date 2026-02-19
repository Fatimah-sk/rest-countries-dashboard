export function CountryCard(country) {
  const name = country.name?.common ?? "Unknown";
  const capital = country.capital?.[0] ?? "—";
  const population = country.population?.toLocaleString("en-US") ?? "—";
  const region = country.region ?? "—";
  const flag = country.flags?.png ?? "";
  const code = country.cca3;

  return `
    <article class="card" data-code="${code}">
      <img class="flag" src="${flag}" alt="${name} flag" loading="lazy" />
      <div class="card-body">
        <h3>${name}</h3>
        <p><b>Capital:</b> ${capital}</p>
        <p><b>Population:</b> ${population}</p>
        <p><b>Region:</b> ${region}</p>
      </div>
    </article>
  `;
}
