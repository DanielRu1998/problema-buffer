# problema-buffer

Esta es una posible solución a un problema que se presenta.

## Planteamiento del problema

Dada una colección de numeros, posicionar a la izquierda todos aquellos que son pares, y los impares del lado derecho de la coleción.
El Algoritmo que esta comentado(Ver final de script) lo resuelve para una entrada pequeña, en este caso un array.
Pero ¿Qué pasa si se pide un archivo que contenga una colección bastante grande que incluso desborde la memoria que disponemos?

## Solución

Para este caso utilizaremos un enfoque diferente, se dará un archivo de entrada que será incluso del tamaño de GB, no podemos almacenar en memoria
todos los pares e impares dado que la memoria no dará para almacenar en nuestro ordenador, es por eso que se opta por dar como 
solución "Un nuevo archivo de salida (output)" de esta manera no imprimiremos en consola el resultado, si no que generaremos un archivo 
de salida con la solución que se busca.

## Explicación del código

Se utilizan las herramientas de node para leer y escribir archivos "fs" de esta manera escribiremos funciones asincronas, ya que no sabremos
cuanto tardara la ejecición de lectura y escritura, el objetivo se centra en leer "Linea" por "Linea" el archivo, de esta manera vamos dividiendo
la entrada en subconjuntos de análisis, primero se recorre el archivo encontrando los "Numeros Pares", y al momento de hacer la lectura, 
escribiremos en el archivo de salida dicho valor, para así no ir guardando datos innecesarios, una vez acabados los "Pares", 
volvemos a correr el algoritmo para numeros "Impares".

Se utilizarón algunas validaciones y una expresión regular para reconocer los numeros de entrada.


## Como correr el código

Únicamente se necesita crear el archivo de entrada "input.txt" que es el que contendra los valores en primera instancia desordenados,
finalmente al correr el script generara el archivo "output.txt" que contendra la solución.

### Autor: Daniel Rubio Ramón
