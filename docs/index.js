// const languages = document.getElementById("languages");
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
    `,
    links: {github: "https://github.com/TechFellasAbp/sprint-master"},
    date: "jun/2026",
  },
  {
    name: "Narvana",
    img: "images/narvana.png",
    description: "Projeto de jogo 3D como TCC.",
    longDescription: `Projeto de jogo para TCC do curso técnico em Desenvolvimento de Sistemas. <br>
        Stack: <ul><li>Godot</li><li>GDScript</li><li>BeepBox</li><li>Clip Studio Paint</li><li>Obsidian</li></ul>
        <br>Participei como Product Owner, Scrum Master, game designer, desenvolvedora de mecânicas, programadora, música, artista 2D e 3D.<br>
    `,
    addScreenshots: ["images/narvana-screenshot.png"],
    links: {github: "https://github.com/HeyLavenderBee/Narvana", deploy: "https://pirarucu-games.itch.io/narvana"},
    tags: ["Acadêmico", "TCC", "Jogo"],
    date: "dez/2025",
  },
  {
    name: "Crud Mundo",
    img: "images/crud-mundo.png",
    description: "Sistema web e mobile com CRUD de países e cidades pelo mundo.",
    longDescription: `Crud Mundo é um projeto do curso técnico de desenvolver a mesma aplicação de duas formas: web e mobile<br>
        A aplicação web foi desenvolvida com HTML, CSS, PHP e MySQL, com consumo de API externa para dar mais informações sobre os países.<br>
        A aplicação mobile foi desenvolvida com React Native dentro do Expo GO e com banco de dados no Supabase.<br>
        Em ambas as aplicações é possível adicionar, editar, deletar e visualizar países e cidades.<br>
        Desenvolvi todos os aspectos de ambas as aplicações, como era um projeto individual.<br>
        Link para o projeto: <a href="https://github.com/HeyLavenderBee/crud-mundok">https://github.com/HeyLavenderBee/crud-mundo</a>.
    `,
    addScreenshots: ["images/crud-mundo-screenshot1.png","images/crud-mundo-screenshot1.png"],
    tags: ["Acadêmico", "Web", "Mobile"],
    date: "nov/2025",
  },
  {
    name: "PikPik Likes TV!",
    img: "images/pikpik-cover.png",
    description: "Jogo para competição global desenvolvido em 4 dias.",
    longDescription: `Projeto de jogo para TCC do curso técnico em Desenvolvimento de Sistemas. Stack: Godot, GDScript, BeepBox, Clip Studio Paint, Obsidian.
        <br>Desenvolvi todas as partes e aspectos do jogo, como a arte, programação, música, efeitos sonoros, etc.<br>
    `,
    links: {deploy: "https://sharkhivestudios.itch.io/pikpik-likes-tv"},
    addScreenshots: ["images/pikpik-screenshot1.png","images/pikpik-screenshot2.png"],
    tags: ["Pessoal", "Competição", "Jogo"],
    date: "ago/2026",
  },
  {
    name: "Santa Duck",
    img: "images/santa-duck.png",
    description: "Projeto de jogo para competição global.",
    longDescription: `Projeto de jogo para TCC do curso técnico em Desenvolvimento de Sistemas. Stack: Godot, GDScript, BeepBox, Clip Studio Paint, Obsidian.
        <br>Desenvolvi todas as partes e aspectos do jogo, como a arte, programação, música, efeitos sonoros, etc.<br>
    `,
    links: {deploy: "https://heylavenderbee.itch.io/santa-duck"},
    addScreenshots: ["images/santa-duck-screenshot1.png","images/santa-duck-screenshot2.png"],
    tags: ["Pessoal", "Competição", "Jogo"],
    date: "dez/2024",
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
            <div class="project-card" id="${"project"+index}">
                <img class="project-img" src="${project.img}" />
                <div class="project-text">
                    <h4>${project.name}</h4>
                    <p>${project.description}</p>
                    <div class="project-links-row">
                        <span class="project-tags">
                            ${htmlTags}
                        </span>
                        <button id="${"project"+index}" onclick="openProjectDialog(${index})" class="see-more-button">Ver mais</button>
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

  let screenshots = ``;
  if(projects[index].addScreenshots){
    screenshots += `<h3>Fotos adicionais</h3>`;
    screenshots += `<div class="project-screenshots">`;
    // screenshots += `<button> < </button>`;
    let i = 0;
    for (let img of projects[index].addScreenshots){
      screenshots += `<a id="screenshot${index}" onClick="openScreenshotViewDialog(${index}, ${i})"><img class="project-screenshot" src="${img}"></a>`;
      i++;
    }
    // screenshots += `<button> > </button>`;
    screenshots += `</div>`;
  }

  let links = ``;
  if(projects[index].links){
    for(let link in projects[index].links){
      if(link == "github"){
        links += `<br>Link do GitHub: <a class="project-link" href="${projects[index].links.github}">${projects[index].links.github}</a>`;
      }
      if(link == "deploy"){
        links += `<br>Link de deploy: <a class="project-link" href="${projects[index].links.deploy}">${projects[index].links.deploy}</a>`;
      }
    }
  }

  projectinfoDialog.innerHTML = `
    <button id="close-dialog-button" onclick="closeProjectDialog()">Fechar</button>
    <div class="project-dialog-cover">
      <img class="cover-image" src="${projects[index].img}" />
      <div>
        <h2>${projects[index].name}</h2>
        Desenvolvido em: ${projects[index].date}<br>
        ${links}
      </div>
    </div>
    ${projects[index].longDescription}
    ${screenshots}
    <dialog id="screenshot-view" class="screenshot-view"></dialog>
  `;
}

function closeProjectDialog() {
  projectinfoDialog.close();
}

function openScreenshotViewDialog(projectIndex, imgIndex) {
  console.log(imgIndex);
  document.getElementById("screenshot-view").innerHTML = `
    <button id="close-dialog-button" onclick="closeScreenshotViewDialog()">Fechar</button>
    <img src="${projects[projectIndex].addScreenshots[imgIndex]}">
  `;
  document.getElementById("screenshot-view").showModal();
}

function closeScreenshotViewDialog() {
  document.getElementById("screenshot-view").close();
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

// languages.addEventListener("click", changeSelectedLanguage);

// document.getElementById("screenshot-view").showModal();

closeDialogButton.addEventListener("click", () => {
  projectinfoDialog.close();
});

document.addEventListener('click', () => {
  projectinfoDialog.close();
});
