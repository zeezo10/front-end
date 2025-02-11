// import { atom } from "jotai";
// import {loadable} from "jotai/utils"

// export const searchQueryAtom = atom("");

// const FetchProducts = atom(async () => {
//     const response = await fetch("https://fe-test-api.jmm88.com/api/products")
//     const data = await response.json();
//     return data;
// })

// export const loadableProducts = loadable(FetchProducts)

import { atom } from "jotai";
import { loadable } from "jotai/utils";

export const searchQueryAtom = atom(""); 

export const productsAtom = loadable(
  atom(async () => {
    const res = await fetch("https://fe-test-api.jmm88.com/api/products"); 
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return data; 
  })
);



//--------------------------------------------------------------------

// export const productByIdAtom = atom((get) => 
//     loadable(
//       atom(async (id) => {
//         if (!id) return null; // Prevent unnecessary fetch calls
//         const res = await fetch(`https://fe-test-api.jmm88.com/api/products/${id}`);
//         if (!res.ok) throw new Error("Failed to fetch product");
//         return await res.json();
//       })
//     )
//   );