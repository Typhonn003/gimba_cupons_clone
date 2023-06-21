export const cupomCard = (data) => {
  const whatsappLink =
    "https://api.whatsapp.com/send?text=Aqui%20no%20Gimba%20tem%20CUPONS%20com%20desconto%20exclusivos!%20https%3A%2F%2Fwww.gimba.com.br%2Fcupons";

  const { img_alt, img, title, description, cupomCode, cupomAppCode, link } =
    data;

  const cardContainer = document.createElement("li");
  const cardTop = document.createElement("div");
  const cardTopImg = document.createElement("img");
  const cardBot = document.createElement("div");
  const cardTitle = document.createElement("h2");
  const cardDescription = document.createElement("p");
  const cardCupom = document.createElement("div");
  const cupomValue = document.createElement("span");
  const copyButton = document.createElement("button");
  const cardAppCupom = document.createElement("span");
  const cardBtns = document.createElement("div");
  const shareBtn = document.createElement("a");
  const shareImg = document.createElement("img");
  const acessBtn = document.createElement("a");
  const acessImg = document.createElement("img");
  const acessMsg = document.createElement("p");

  cardContainer.classList = "cardDefault";
  cardTop.classList = "cardTop";
  cardBot.classList = "cardBot";
  cardTitle.classList = "cardTitle";
  cardDescription.classList = "cardDescription";
  cardCupom.classList = "cardCupom";
  cupomValue.classList = "cupomValue";
  copyButton.classList = "cupomBtnCopy";
  cardAppCupom.classList = "cardAppCupom";
  cardBtns.classList = "cardButtons";

  cardTitle.innerText = title;
  cardDescription.innerText = description;
  cupomValue.innerText = cupomCode;
  copyButton.innerText = "Copiar cupom";
  cardAppCupom.innerHTML = `no app utilize o cupom <strong>${cupomAppCode}</strong>`;
  acessMsg.innerText = "Acessar categoria";

  cardTopImg.setAttribute("src", img);
  cardTopImg.setAttribute("alt", img_alt);
  shareBtn.setAttribute("href", whatsappLink);
  shareBtn.setAttribute("target", "_blank");
  shareImg.setAttribute("src", "src/img/compartilhar.png");
  shareImg.setAttribute("alt", "Imagem de ícone de compartilhar com texto");
  acessImg.setAttribute("src", "src/img/acessar.png");
  acessImg.setAttribute("alt", "Imagem de ícone de acessar categoria");
  acessBtn.setAttribute("href", link);
  acessBtn.setAttribute("target", "_blank");

  cardTop.appendChild(cardTopImg);
  shareBtn.appendChild(shareImg);
  cardCupom.append(cupomValue, copyButton);
  acessBtn.append(acessImg, acessMsg);
  cardBtns.append(shareBtn, acessBtn);
  cardBot.append(cardTitle, cardDescription, cardCupom, cardAppCupom, cardBtns);
  cardContainer.append(cardTop, cardBot);

  return cardContainer;
};
