const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"] ');

let lastChecked;

function handleClick(e) {
  // console.log(e);

  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);

      if (checkbox === this || lastChecked === checkbox) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

console.log(checkboxes);

checkboxes.forEach((e) => e.addEventListener("click", handleClick));
