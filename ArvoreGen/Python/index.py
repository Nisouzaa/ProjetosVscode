import tkinter as tk
from collections import deque
import time

class Visualizador:
    def __init__(self, root):
        self.root = root
        self.root.title("Visualizador de Algoritmos")

        self.frame = tk.Frame(root)
        self.frame.pack(pady=20)

        self.status = tk.Label(root, text="Selecione um algoritmo", font=("Arial", 12))
        self.status.pack(pady=10)

        self.bubble_button = tk.Button(root, text="Bubble Sort", command=self.visualizar_bubble)
        self.bubble_button.pack(pady=5)

        self.bfs_button = tk.Button(root, text="Busca em Largura (BFS)", command=self.visualizar_bfs)
        self.bfs_button.pack(pady=5)

    def desenhar_lista(self, lista, destaque=-1):
        for widget in self.frame.winfo_children():
            widget.destroy()
        for i, val in enumerate(lista):
            bg = "#90cdf4" if i == destaque or i == destaque + 1 else "#e0e0e0"
            lbl = tk.Label(self.frame, text=str(val), width=4, height=2, bg=bg, relief="solid", font=("Arial", 14))
            lbl.pack(side=tk.LEFT, padx=5)
        self.root.update()

    def visualizar_bubble(self):
        lista = [5, 3, 8, 1, 4]
        n = len(lista)
        self.status.config(text="Executando Bubble Sort")
        for i in range(n):
            for j in range(0, n - i - 1):
                self.desenhar_lista(lista, j)
                self.root.after(300)
                if lista[j] > lista[j + 1]:
                    lista[j], lista[j + 1] = lista[j + 1], lista[j]
                self.root.update()
                time.sleep(0.3)
        self.status.config(text="Bubble Sort finalizado")

    def desenhar_grafo(self, visitados):
        for widget in self.frame.winfo_children():
            widget.destroy()
        for no in ['A', 'B', 'C', 'D']:
            bg = "#9ae6b4" if no in visitados else "#f0f0f0"
            lbl = tk.Label(self.frame, text=no, width=4, height=2, bg=bg, relief="groove", font=("Arial", 14))
            lbl.pack(side=tk.LEFT, padx=10)
        self.root.update()

    def visualizar_bfs(self):
        grafo = {
            'A': ['B', 'C'],
            'B': ['A', 'D'],
            'C': ['A', 'D'],
            'D': ['B', 'C']
        }
        fila = deque(['A'])
        visitados = set()
        self.status.config(text="Executando BFS")

        def visitar():
            if not fila:
                self.status.config(text="BFS finalizado")
                return
            vertice = fila.popleft()
            if vertice not in visitados:
                visitados.add(vertice)
                self.desenhar_grafo(visitados)
                fila.extend(grafo[vertice])
                self.root.after(600, visitar)

        visitar()

if __name__ == "__main__":
    root = tk.Tk()
    app = Visualizador(root)
    root.mainloop()
