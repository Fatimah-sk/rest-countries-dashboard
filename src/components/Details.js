export function DetailsView(country) {
  const name = country.name?.common ?? "Unknown";
  const flag = country.flags?.svg ?? country.flags?.png ?? "";
  const capital = country.capital?.[0] ?? "—";
  const region = country.region ?? "—";
  const population = country.population?.toLocaleString("en-US") ?? "—";

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "—";

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c) => `${c.name} (${c.symbol ?? ""})`.trim())
        .join(", ")
    : "—";

  const borders = country.borders?.join(", ") ?? "—";

  return `
    <div class="details-card">
      <img class="flag-big" src="${flag}" alt="${name} flag" />
      <div>
        <h2>${name}</h2>
        <p><b>Capital:</b> ${capital}</p>
        <p><b>Region:</b> ${region}</p>
        <p><b>Population:</b> ${population}</p>
        <p><b>Languages:</b> ${languages}</p>
        <p><b>Currencies:</b> ${currencies}</p>
        <p><b>Borders:</b> ${borders}</p>
      </div>
    </div>
  `;
}
