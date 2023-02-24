const scrollable = document.getElementById("scrollable");
const button = document.querySelector("button");

// The third argument is the capture phase
// document.body.addEventListener("click", onClick, true);

// const abortController = new AbortController();

// button.addEventListener("click", onClick, {
//   capture: true,
//   once: true,
//   passive: true,
//   signal: abortController.signal,
// });

// abortController.abort();

// function onClick(event) {
//   event.stopPropagation();
//   console.log(event.target);
//   console.log(this);
// }

// window.addEventListener("keydown", (event) => {
//   console.log(event.code);
// });

// scrollable.addEventListener("scroll", (event) => {
//   console.log(event.target.scrollTop);
// });

// scrollable.addEventListener("mousemove", (event) => {
//   console.log(event.pageX, event.pageY);
// });

// button.addEventListener("dragstart", (event) => {
//   console.log(event);
// });

// scrollable.addEventListener("drop", (event) => {
//   scrollable.prepend(button);
// });

// scrollable.addEventListener("dragover", (event) => {
//   event.preventDefault();
// });

scrollable.addEventListener("click", (event) => {
  if (event.target !== this) {
    event.target.textContent = "COK";
  }
});
