// Visualizador interativo de Bubble Sort e BFS em JavaScript puro

const array = [5, 3, 8, 1, 4];
let current = { i: 0, j: 0 };
let intervalId = null;
const grafo = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C"]
};

let visitados = [];

function renderArray() {
  const container = document.getElementById("array");
  container.innerHTML = "";
  array.forEach((num, index) => {
    const div = document.createElement("div");
    div.className = `box ${current.j === index || current.j + 1 === index ? "highlight" : ""}`;
    div.textContent = num;
    container.appendChild(div);
  });
}

function bubbleSortStep() {
  let { i, j } = current;
  if (i < array.length) {
    if (j < array.length - i - 1) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
      current.j++;
    } else {
      current.i++;
      current.j = 0;
    }
    renderArray();
  } else {
    clearInterval(intervalId);
  }
}

function startSorting() {
  current = { i: 0, j: 0 };
  intervalId = setInterval(bubbleSortStep, 500);
}

function bfs(inicio) {
  visitados = [];
  const fila = [inicio];
  const visitadoSet = new Set();

  function visitar() {
    if (fila.length === 0) return;
    const vertice = fila.shift();
    if (!visitadoSet.has(vertice)) {
      visitadoSet.add(vertice);
      visitados.push(vertice);
      renderGrafo();
      fila.push(...grafo[vertice]);
      setTimeout(visitar, 600);
    }
  }
  visitar();
}

function renderGrafo() {
  const container = document.getElementById("grafo");
  container.innerHTML = "";
  Object.keys(grafo).forEach((no) => {
    const div = document.createElement("div");
    div.className = `circle ${visitados.includes(no) ? "visited" : ""}`;
    div.textContent = no;
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderArray();
  renderGrafo();
  document.getElementById("sortBtn").onclick = startSorting;
  document.getElementById("bfsBtn").onclick = () => bfs("A");
});

