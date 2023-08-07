import { cupomCard } from "./cupomCard.js";
import { cupons } from "./cupons.js";

export const body = document.querySelector("body");

const cupomList = document.querySelector("#cupomCards");

export function renderDepartments(data) {
  data.forEach((info) => {
    const card = cupomCard(info);
    cupomList.appendChild(card);
  });
}

renderDepartments(cupons);
