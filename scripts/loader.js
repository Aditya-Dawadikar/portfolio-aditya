$(document).ready(() => {
    projects.forEach(project => {
        $("#project-grid").append(`
            <div class="col">
                <div class="card">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                        <div class="justify-content-center flip-card-front">
                            <h3>${project.title}</h3>
                            <h6 class="text-dark">(${project.tech})</h6>
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
            </div>
        `);
    })
});

function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
    // document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
  }