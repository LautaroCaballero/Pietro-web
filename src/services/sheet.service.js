import axios from "axios";
import Papa from "papaparse";

// Recupera info de sheet y la pasa a JSON.
const GET_SHEET_DATA = async (url) => {
  return axios.get(url, { responseType: "blob" }).then(
    (response) =>
      new Promise((resolve, reject) => {
        Papa.parse(response.data, {
          header: true,
          complete: (results) => resolve(results.data),
          error: (error) => reject(error.message),
        });
      })
  );
};

// Exporta funciones para obtener datos de la hoja de cálculo.
export const SHEET_API = {
  GET_PRODUCTS: async () => await GET_SHEET_DATA(import.meta.env.VITE_SHEET_URL),
};
