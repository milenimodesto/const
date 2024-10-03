/**
 * ordena um array em ordem crescente usando o algoritmo selection sort.
 * @param {number[]} arr - o array a ser ordenado.
 * @returns {numer[]} - o array ordenado em ordem crescente.
 */
function selectionSortAscending(arr){
    let n = arr.length;
    // Loop para percorrer todos os elemento do array 
    for (let i=0; i< n - 1; i++){
        //Assume que o menor elemento está na posição.
        let minIndex = i;
        // loop para encontrar o menor elemento.
        for (let j= i + 1; j < n; j++)
}
    }

    for (let j= i + 1; j < n; j++){
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }

