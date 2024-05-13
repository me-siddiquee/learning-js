function toggle(btnclass) {
  const gamingbtn = document.querySelector(btnclass);
  if (!gamingbtn.classList.contains('is-toggled')) {
    gamingbtn.classList.add('is-toggled');
  } else {
    gamingbtn.classList.remove('is-toggled');
  }
}