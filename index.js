// Expand or collapse the box based on the selected boxNumber.
function expandBox(boxNumber) {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
      const selectBox = box.querySelector('.select-box');
      if (index + 1 === boxNumber) {
        box.classList.add('expanded');
        selectBox.style.display = 'block';
        document.getElementById(`box${boxNumber}`).checked = true;
      } else {
        box.classList.remove('expanded');
        selectBox.style.display = 'none';
      }
    });
  }