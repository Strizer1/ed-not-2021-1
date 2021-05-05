/* 
    ESTRUTURA DE DADOS PILHA
    - Pilha é uma lista linear de acesso restrito, que permite apenas as operações
    de inserção (enqueue) e retirada (dequeue), ambas ocorrendo no final da
    estrutura e a outra o início da estrutura.
    - Como consequência, a pilha funciona pelo princípio FIFO (First In, First Out -
    primeiro a entrar, primeiro a sair).
    - A principal aplicação das filas são tarefas de processamento de itens em ordem
    de chegada. 
*/

export class Queue {

    #data

    constructor() {
        this.#data = []     // Vetor vazio
    }

    // Inserção na fila (ocorre no final)
    enqueue(val) {
        this.#data.push(val)
    }

    // Remoção da fila (ocorre no início)
    dequeue() {
        return this.#data.shift()
    }

    print() {
        return JSON.stringify(this.#data)
    }

    // Espiadinha no início da fila (próximo a ser removido)
    peek() {
        return this.#data[0]
    }

    // A fila está vazia?
    get empty() {
        return this.#data.length === 0
    }
}