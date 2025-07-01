from collections import deque

# lista, tupla, Sets
lista = [1, 2, 3]

tupla =(4, 5, 6)

conjunto = {7, 8, 9}

# dicionario (Hashmap)
dicionario = {'a':1, 'b':2}

# pilha (list)
pilha = []

pilha.append(11)

pilha.pop()

# fila (deque)
fila = deque()

fila.append(11)

fila.popleft()

# Árvore com dicionários

arvore = {
    'valor': 1,
    'esquerda': {'valor':2, 'esquerda': None, 'direira': None},
    'direira': {'valor': 3, 'esquerda': None, 'direira': None}
}

# Grafico com lista deadjacência

grafo = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D'],
    'D': ['B', 'C']
}

# Busca Binária
def busca_binaria(arr, alvo):
    innicio, fim = 0, len(arr) -1
    while inicio <= fim:
        meio = (inicio + fim) // 2
        if arr[meio] == alvo:
            return meio
        elif arr[meio] < alvo:
            innicio = meio + 1
        else:
            fim = meio - 1
    return -1


# Bubble Sort
def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(0, len(arr) - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]


# Insertion Sort
def insertion_sort(arr):
    for i in range(1, len(arr)):
        chave = arr[i]
        j = i - 1
        while j >= 0 and chave < arr[j]:
            arr[j + 1] = arr[j]
        arr[j + 1] = chave


# Merge Sort
def marge_sort(arr):
    if len(arr) > 1 :
        meio = len(arr) // 2
        esq = arr[:meio]
        dir = arr[meio:]

        marge_sort(esq)
        marge_sort(dir)

        i = j = k = 0
        while i < len(esq) and j < len(dir):
            if esq[i] < dir[j]:
                arr[i] = esq[i]
                i += 1
            else:
                arr[k] = dir[j]
                j += 1
            k += 1 
        while i < len(esq):
            arr[k] = esq[i]
            j += 1
            k += 1
# Recursão simples
def fatorial(n):
    return 1 if n <= 1 else n * fatorial(n - 1)

# DFS
def dfs(grafo, inicio, visitado=None):
    if visitado is None:
        visitado = set()
    visitado.add(inicio)
    for vizinho in grafo[inicio]:
        if vizinho not in visitado:
            dfs(grafo, vizinho, visitado)
    return visitado

# BFS
def bfs(grafo, inicio):
    visitado = set()
    fila = deque([inicio])
    while fila:
        vertice = fila.popleft()
        if vertice not in visitado:
            visitado.add(vertice)
            fila.extend(grafo[vertice])
    return visitado

# Greedy: troco mínimo
def troco_minimo(valor, moedas=[100, 50, 25, 10, 5, 1]):
    resultado = []
    for moeda in moedas:
        while valor >= moeda:
            valor -= moeda
            resultado.append(moeda)
    return resultado