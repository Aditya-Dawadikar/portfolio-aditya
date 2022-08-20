$(document).ready(() => {
    projects.forEach(project => {
        $("#project-grid").append(`
            <div class="col-md-3 justify-content-center">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                        <div class="justify-content-center flip-card-front">
                            <h3>${project.title}</h3>
                            <p>${project.category}</p>
                            <h6 class="text-white">(${project.tech})</h6>
                        </div>
                        <div class="flip-card-back">
                            <div class="description">
                                ${project.description}
                            </div>
                            <a href="${project.link}" target="_blank">LINK</a>
                        </div>
                        </div>
                    </div>
            </div>
        `);
    })
});

function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}