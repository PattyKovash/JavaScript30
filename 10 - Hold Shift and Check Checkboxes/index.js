const D = document;
  const inbox = D.querySelector('.inbox');
  const checkboxes = D.querySelectorAll('.inbox input[type="checkbox"]');
  let lastChecked;

  function handleCheck(e) {
    // Check if they have the shift key down
    // AND check that they are checking it
    let inBetween = false;
    let that = e.target;

    if (e.shiftKey && that.type === 'checkbox') {
      // Loop over every checkbox
      checkboxes.forEach((checkbox) => {
        if (checkbox === that || checkbox === lastChecked) {
          inBetween = !inBetween;
        }

        if (inBetween) {
          checkbox.checked = that.checked ? true : false;
        }
      });
    }

    lastChecked = that;
  }

  inbox.addEventListener('click', handleCheck);