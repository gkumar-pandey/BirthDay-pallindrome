const userBirthDate = document.querySelector("#birth-date");
const btn = document.querySelector(".btn");
const outputMsg = document.querySelector(".output-msg");

btn.addEventListener("click", () => {
  const birthDate = userBirthDate.value;
  console.log(birthDate);
});
