const languages = document.getElementById("languages");
const ptButton = document.getElementById("pt-br-button");
const enButton = document.getElementById("en-button");
const projectinfoDialog = document.getElementById("project-info-dialog");
const closeDialogButton = document.getElementById("close-dialog-button");

const projectsSection = document.getElementById("projects-section");

var selectedLanguage = "pt-br";

var projects = [
  {
    name: "Sprint Master",
    img: "images/abp-1sem.png",
    description:
      "Aplicação web para certificação de conhecimento na metodologia Scrum como Projeto de ABP (Aprendizado Baseado em Projetos) do 1° semestre da Fatec.",
    tags: ["Acadêmico", "ABP", "Faculdade"],
    longDescription: `Sprint Master foi um projeto do primeiro semestre da faculdade. Stack: Node.js, HTML, CSS, JavaScript e PostgreSQL.
        <br>Participei como Product Owner e desenvolvedora front e backend.<br>
        Link para o projeto: <a href="https://github.com/TechFellasAbp/sprint-master">https://github.com/TechFellasAbp/sprint-master</a>.
    `,
    date: "06/2026",
  },
  {
    name: "Narvana",
    img: "images/narvana.png",
    description: "Projeto de jogo como TCC.",
    longDescription: `Projeto de jogo para TCC do curso técnico em Desenvolvimento de Sistemas. Stack: Godot, GDScript, BeepBox, Clip Studio Paint, Obsidian.
        <br>Participei como Product Owner, Scrum Master, game designer, desenvolvedora de mecânicas, programadora, música, artista 2D e 3D.<br>
        Link para o projeto: <a href="https://github.com/HeyLavenderBee/Narvana">https://github.com/HeyLavenderBee/Narvana</a>.
    `,
    tags: ["Acadêmico", "TCC", "Jogo"],
    date: "12/2025",
  },
  {
    name: "Santa Duck",
    img: "images/santa-duck.png",
    description: "Projeto de jogo para competição global.",
    longDescription: `Projeto de jogo para TCC do curso técnico em Desenvolvimento de Sistemas. Stack: Godot, GDScript, BeepBox, Clip Studio Paint, Obsidian.
        <br>Participei como Product Owner, Scrum Master, game designer, desenvolvedora de mecânicas, programadora, música, artista 2D e 3D.<br>
        Link para o projeto: <a href="https://heylavenderbee.itch.io/santa-duck">https://heylavenderbee.itch.io/santa-duck</a>.
    `,
    tags: ["Pessoal", "Competição", "Jogo"],
    date: "12/2024",
  },
  {
    name: "Santa Duck",
    img: "images/santa-duck.png",
    description: "Projeto de jogo para competição global.",
    longDescription: `Projeto de jogo para TCC do curso técnico em Desenvolvimento de Sistemas. Stack: Godot, GDScript, BeepBox, Clip Studio Paint, Obsidian.
        <br>Participei como Product Owner, Scrum Master, game designer, desenvolvedora de mecânicas, programadora, música, artista 2D e 3D.<br>
        Link para o projeto: <a href="https://heylavenderbee.itch.io/santa-duck">https://heylavenderbee.itch.io/santa-duck</a>.
    `,
    tags: ["Pessoal", "Competição", "Jogo"],
    date: "12/2024",
  },
  {
    name: "Santa Duck",
    img: "images/santa-duck.png",
    description: "Projeto de jogo para competição global.",
    longDescription: `Projeto de jogo para TCC do curso técnico em Desenvolvimento de Sistemas. Stack: Godot, GDScript, BeepBox, Clip Studio Paint, Obsidian.
        <br>Participei como Product Owner, Scrum Master, game designer, desenvolvedora de mecânicas, programadora, música, artista 2D e 3D.<br>
        Link para o projeto: <a href="https://heylavenderbee.itch.io/santa-duck">https://heylavenderbee.itch.io/santa-duck</a>.
    `,
    tags: ["Pessoal", "Competição", "Jogo"],
    date: "12/2024",
  },
  {
    name: "Santa Duck",
    img: "images/santa-duck.png",
    description: "Projeto de jogo para competição global.",
    longDescription: `Projeto de jogo para TCC do curso técnico em Desenvolvimento de Sistemas. Stack: Godot, GDScript, BeepBox, Clip Studio Paint, Obsidian.
        <br>Participei como Product Owner, Scrum Master, game designer, desenvolvedora de mecânicas, programadora, música, artista 2D e 3D.<br>
        Link para o projeto: <a href="https://heylavenderbee.itch.io/santa-duck">https://heylavenderbee.itch.io/santa-duck</a>.
    `,
    tags: ["Pessoal", "Competição", "Jogo"],
    date: "12/2024",
  },
];

function loadProjects() {
  let projectsHtml = ``;
  let index = 0;
  for (let project of projects) {
    let htmlTags = ``;
    for (let tag of project.tags) {
      htmlTags += `<button class="tag">${tag}</button>`;
    }
    let htmlContent = `
            <div class="project-card">
                <img class="project-img" src="${project.img}" />
                <div class="project-text">
                    <h4>${project.name}</h4>
                    <p>${project.description}</p>
                    <div class="project-links-row">
                        <span class="project-tags">
                            ${htmlTags}
                        </span>
                        <button id="${"project" + index}" onclick="openProjectDialog(${index})" class="see-more-button">Ver mais</button>
                    </div>
                </div>
            </div>
        `;
    index++;
    projectsHtml += htmlContent;
  }

  projectsSection.innerHTML = projectsHtml;
  console.log("oie");
}

loadProjects();

function openProjectDialog(index) {
  projectinfoDialog.showModal();
  projectinfoDialog.innerHTML = `
    <img class="cover-image" src="${projects[index].img}" />
    <h2>${projects[index].name}</h2>
    ${projects[index].longDescription}<br><br>
    Desenvolvido em: ${projects[index].date}<br><br>
    <button id="close-dialog-button" onclick="closeProjectDialog()">Fechar</button>
  `;
}

function closeProjectDialog() {
  projectinfoDialog.close();
}

function changeSelectedLanguage() {
  if (selectedLanguage == "pt-br") {
    ptButton.className = "link";
    enButton.className = "link pressed";
    selectedLanguage = "en";
  } else {
    ptButton.className = "link pressed";
    enButton.className = "link";
    selectedLanguage = "pt-br";
  }
}

languages.addEventListener("click", changeSelectedLanguage);

closeDialogButton.addEventListener("click", () => {
  projectinfoDialog.close();
});
