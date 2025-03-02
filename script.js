// create a function that reveals sections when we scroll to them
function revealSection(section) {
  // check if the section has been scrolled to already
  const revealed = section.classList.contains("revealed");

  // if it hasn't, reveal it and stop any further scrolling
  if (!revealed) {
    section.classList.add("revealed");
    window.scrollTo(0, section.offsetTop - 100);
    return;
  }
}