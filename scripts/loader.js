$(document).ready(() => {
    projects.forEach(project => {
        $("#project-grid").append(`
            <div class="col">
                <div class="card">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                        <div class="justify-content-center flip-card-front">
                            <h1>${project.title}</h1>
                            <br>
                            <h3 class="text-dark">(${project.tech})</h3>
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