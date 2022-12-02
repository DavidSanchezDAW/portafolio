let projects = document.getElementById("projects");
for(let i = 1; i < 11; i++) {
    projects.innerHTML += "<img src='img/" + i + ".jpg' alt='project " + i + "' />";
}