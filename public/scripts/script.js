document.addEventListener("DOMContentLoaded", function () {
  const cardSection = document.querySelector(".card-section");
  const flipCard = document.querySelector(".flip-card");
  const cardFaceFront = document.querySelector(".card-face-front");
  const cardFaceBack = document.querySelector(".card-face-back");
  const spinButton = document.querySelector(".spin");
  const deleteButton = document.querySelector(".delete-button");

  // Flip the card when the spin button is clicked
  spinButton.addEventListener("click", function () {
    flipCard.classList.toggle("spin");

    if (flipCard.classList.contains("spin")) {
      cardFaceFront.classList.add("hidden");
      cardFaceBack.classList.add("block");
    } else {
      cardFaceFront.classList.remove("hidden");
      cardFaceBack.classList.remove("block");
    }
  });

  // Close the card
  deleteButton.addEventListener("click", function () {
    cardSection.classList.add("closed");
  });
});
