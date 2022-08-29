const applyColor = () => {
  const r = document.querySelector("#r").value;
  const g = document.querySelector("#g").value;
  const b = document.querySelector("#b").value;
  document.body.style.background = `rgb(${r}, ${g}, ${b})`;
};

document.querySelectorAll(".inputs input").forEach((input) => {
  input.addEventListener("input", () => {
    input.parentNode.style.setProperty("--value", input.value);
    input.parentNode.style.setProperty(
      "--text-value",
      JSON.stringify(input.value)
    );
    applyColor();
  });
});

applyColor();
