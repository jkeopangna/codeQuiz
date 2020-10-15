///////TITLE PAGE///////

// Variable of title for h1 element
var title = document.createElement("h1");
title.innerHTML = "Javascript Quiz";
document.body.appendChild(title);
title.setAttribute("style", "color: navy");
title.style.textAlign = "center";
title.style.fontFamily = "comic sans ms";
title.style.marginTop = "10rem"

// Variable for p element under title
var p = document.createElement("h2");
p.innerHTML = "Challenge yourself to a timed quiz about Javascript. But watch the clock! Time will be subtracted when any questions are answered incorrectly. Check out the high scores after you finish!"
document.body.appendChild(p);
p.style.fontSize = "18px"
p.style.textAlign = "center"