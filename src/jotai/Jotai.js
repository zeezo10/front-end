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

