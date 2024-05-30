let submit = document.querySelector("#submit-btn");

function finalSubmit() {
  submit.addEventListener("click", () => {
    console.log("Final Submit");

    let show = document.querySelector(".visible");
    let hide = document.querySelector(".hidden");

    show.style.display = "none";
    hide.style.display = "flex";
  });

  let btn = document.querySelectorAll(".btn");
  let rating = document.querySelector(".rating");

  btn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.classList.add("active");

      let value = e.target.innerHTML;
      console.log(value);

      rating.innerHTML = `You selected ${value} out of 5`;
    });
  });
}
finalSubmit();
