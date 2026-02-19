import axios from "axios";

const API = "https://restcountries.com/v3.1";

// LISTE (maks 10 fields)
export async function fetchAllCountries() {
  const res = await axios.get(
    `${API}/all?fields=name,capital,population,region,flags,cca3`
  );
  return res.data;
}

// DETAILS (maks 10 fields)
export async function fetchCountryByCode(code) {
  const res = await axios.get(
    `${API}/alpha/${code}?fields=name,capital,population,region,flags,languages,currencies,borders,cca3`
  );

  // alpha kan returnere array eller objekt, så vi håndterer begge
  return Array.isArray(res.data) ? res.data[0] : res.data;
}
