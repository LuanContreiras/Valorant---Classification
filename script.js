var teamSmoke = {
  icon:
    "https://i.pinimg.com/originals/fa/6e/87/fa6e871683cb8706ba5471211a2ebb4e.png",
  nome: "Team Smoke",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

var teams = [teamSmoke];

function calculo(team) {
  var pontos = team.vitorias * 3 + team.empates;
  return pontos;
}

function exibir(teams) {
  var elem = "";
  for (var i = 0; i < teams.length; i++) {
    elem += "<tr><td>" + `<img src="${teams[i].icon}">` + "</td>";
    elem += "<td>" + teams[i].nome + "</td>";
    elem += "<td>" + teams[i].vitorias + "</td>";
    elem += "<td>" + teams[i].empates + "</td>";
    elem += "<td>" + teams[i].derrotas + "</td>";
    elem += "<td>" + teams[i].pontos + "</td>";
    elem +=
      "<td><button class='actions ' onClick='adicionarVitoria(" +
      i +
      ")'>Vitória</button></td>";
    elem +=
      "<td><button class='actions ' onClick='adicionarEmpate(" +
      i +
      ")'>Empate</button></td>";
    //    elem +=
    //      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elem += "</tr>";
  }
  var tabelaEquipes = document.getElementById("tabelaJogadores");
  tabelaEquipes.innerHTML = elem;
}

exibir(teams);

//botões
function adicionarVitoria(i) {
  var team = teams[i];
  team.vitorias++;
  team.pontos = calculo(team);

  for (var cont = 0; cont < teams.length; cont++) {
    if (cont != i) {
      var outrasEquipes = teams[cont];
      outrasEquipes.derrotas++;
    }
  }
  exibir(teams);
}

function adicionarEmpate() {
  for (var id = 0; id < teams.length; id++) {
    var team = teams[id];
    team.empates++;
    team.pontos = calculo(team);
  }
  exibir(teams);
}

// ---------- Botão de derrota desnecessário --------------
//function adicionarDerrota(i) {
//  var team = teams[i];
//  team.derrotas++;
//  exibir(teams);
//}

function adicionarTime() {
  var nome = document.getElementById("teamName");
  var icone = document.getElementById("teamIcon");
  teams.push({
    icon: icone.value,
    nome: nome.value,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
  nome.value = "";
  icone.value = "";
  exibir(teams);
}

function zeraPontos() {
  for (var i = 0; i < teams.length; i++) {
    teams[i].vitorias = 0;
    teams[i].empates = 0;
    teams[i].derrotas = 0;
    teams[i].pontos = 0;
  }
  exibir(teams);
}

// -------------- Desafios concluidos ------------------
//Imagem para cada jogador(times)
//Adicionar time
//Zerar pontos
//Empate conta para todos os jogadores
//Quando um vence, demais perdem