export const confirmModal = () => {
  const closeModal = () => {
    modalContainer.classList.add("scale-out-center");
    setTimeout(() => {
      backgroundContainer.remove();
    }, 100);
  };

  const backgroundContainer = document.createElement("div");
  const modalContainer = document.createElement("div");
  const swalContainer = document.createElement("div");
  const swalLineLong = document.createElement("span");
  const swalLineTip = document.createElement("span");
  const swalRing = document.createElement("div");
  const swalCorners = document.createElement("div");
  const messageContainer = document.createElement("div");
  const sucessTitle = document.createElement("h2");
  const sucessMessage = document.createElement("p");
  const confirmBtn = document.createElement("button");

  backgroundContainer.classList = "modalBackground";
  modalContainer.classList = "modalContainer";
  swalContainer.classList = "swal-icon swal-icon--success";
  swalLineLong.classList =
    "swal-icon--success__line swal-icon--success__line--long";
  swalLineTip.classList =
    "swal-icon--success__line swal-icon--success__line--tip";
  swalRing.classList = "swal-icon--success__ring";
  swalCorners.classList = "swal-icon--success__hide-corners";
  messageContainer.classList = "messageBot";
  confirmBtn.classList = "confirmBtn";

  sucessTitle.innerText = "Cupom Copiado!";
  sucessMessage.innerText = "Boas compras!";
  confirmBtn.innerText = "Ok";

  confirmBtn.addEventListener("click", () => {
    closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  backgroundContainer.addEventListener("click", (event) => {
    if (event.target === backgroundContainer) {
      closeModal();
    }
  });

  swalContainer.append(swalLineLong, swalLineTip, swalRing, swalCorners);
  messageContainer.append(sucessTitle, sucessMessage);
  modalContainer.append(swalContainer, messageContainer, confirmBtn);
  backgroundContainer.append(modalContainer);

  return backgroundContainer;
};
