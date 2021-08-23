# Quiz - JavaScript Basics

### Nombre completo:
> 

-----------

## Self-Evaluation

#### Auto evaluación de los temas vistos en clase. Responde  a las siguientes preguntas sin utilizar ningun recurso para solucionarlas. Tu conocimiento es muy importante para nosotros. 

#### Objetivo de la evaluación: conocer que tanto haz aprendido sobre JavaScript y ver que temas se necesitan para una asesoria.

Reglas:

1. No googlear
2. No buscar en ningun libro
3. Realizarlo de forma individual

---

##### 1. ¿Qué es un algoritmo?

> Son instrucciones para decirle a la computadora qué hacer.

##### 2. ¿Qué es un lenguaje de programación?

> Son instrucciones para decirle a la computadora qué hacer en un mismo sistema o manera de codear.

##### 3. Describe que es un tipo de dato:

> Es el formato o elemento que se ingresa, sus características pueden ser letras, numerales, etc.

##### 4. ¿Cuáles son los tipos de dato que conoces?

> String, number, operadores, booleans, variables.


##### 6. ¿Qué es NaN?

> Significa Not a Number, es un tipo de dato que se muestra con algunas operaciones, significa que el resultado no es un número.

##### 7. ¿Cual es el uso de `typeof`?

> Es un operador que nos regresa el tipo de dato que estamos ingresando.

##### 8. ¿Cuál es la diferencia entre `==` y `===`?

> == es igual y compara los valores y === es strict equal, y compara los tipos de datos.

##### 9. ¿Qué es una variable?

> Es un espacio o cajita que guarda o almacena información.

##### 10. ¿Qué es un statement?

> Cada línea del código.

##### 11. Del siguiente statement `a = b * 2` identifica sus partes _(literals, variables, operators)._

> operadores: = y * variables: a,b,2

##### 12. ¿Qué es una expression?

> Cada parte de un statement que hace referencia a un valor.

##### 13. ¿Cuántas expressions puedes identificar del siguiente statement `a = b * 2;`?

> 4.

##### 14. ¿Cuál es la diferencia entre lenguaje `interpreted` y `compiled`?

> El compilado necesita un compilador para traducir el código, el interpretado no.

##### 15. Es JavaScript `interpreted` o `compiled`? Justifica tu respuesta.

> Interpretado, porque no es necesario un compilador, se lee de inicio a fin.

##### 16. ¿Cuales son los tipos de comentarios en JavaScript?

> Se puede comentar // al inicio // al final, pero no sé los tipos.

---------

## Sección Inténtalo tu mismo:

---

### Output Exercises.

Considera: `var a = 1;`

Escribe el código para:

##### 1 Imprimir `a` en consola:

> _console.log(a);_

##### 2. mostrar `a` en una alerta:

> _alert("a");_

### Input Exercises.

Pregunta al usuario su nombre con una función __prompt__ y que el mensaje diga: 
`"Porfavor, escribe tu nombre"` y guarda su nombre en una variable llamada `username`, después loguea el valor en consola

Solución:

js
// prompt("Porfavor, escribe tu nombre","Nombre");
var username=(Nombre)

### Sección: Operadores

---

##### 1. Completa la oración:

JavaScript has both u___ and b___ operators, and one special t___ operator

> unary, boolean

##### 2. Tipos de Operadores

Nombre los _tipos de operadores_ que conoces, y da un ejemplo básico de cada uno que menciones:

> Aritméticos ej: suma, resta
Condicionales ej: >,<,==
Typeof

##### 3. Describe el uso de los operadores aritméticos:

> Realizar operaciones aritméticas.


##### 4. ¿Qué es coercion en JS?

> Si lo vimos pero no lo recuerdo exactamente.


##### 5. ¿Es esto un código válido en JS?

js
var amount = 100;

{
  amount = amount * 2;
  console.log(amount)
}

> No, hace falta algo antes de los corchetes creo.


### Estructuras de Control

##### 1. Describe que son y para que funcionan las estructuras de control:

> Son usadas cuando quieres hacer algo específico como repetir operaciones.


##### 2. Realiza una estructura de control simple utilizando una condicion, si la condición se cumple, retorna true, en caso contrario, retorna false.

js
// var edad=10;
if (edad<18){
    "True"
} else {
    "False"
}

##### 3. Escribe un bloque de código para validar si una variable `number` es menor que `10` para loguear `one digit`, de lo contrario, loguea `two digits`.

Solution:

js
// (ops así de mi cabeza no sé)


### Ciclos

##### 1. Describe que es un ciclo y para que funcionan:

> Es cuando una serie de instrucciones se repiten hasta cumplirse una condición, sirven para validar

##### 2. Realiza un ciclo for iterando el siguiente arreglo: var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:

js
// var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i=0; i<11;i++){  
}


##### 3. Escribe un bloque de código para loguear los números de `0-9` usando `while` y  `do-while`  loops.

**`while`** solution:

js
// (ops así de mi cabeza no sé)

**`do-while`** solution:

js
// (ops así de mi cabeza no sé)

##### 4. ¿Cuales son las 3 clausulas de sintaxis para un `for` loop?

> no me acuerdo :(

### Sección: Functions

---

##### 1. ¿Qué es una función?

> Es código que realizan instrucciones específicas.

##### 2 Escribe una función `sum` que reciba dos numberos como argumentos y que regrese la suma de ambos.

Solution:

js
// function Sumadosvalores(num1,num2){
    var total=num1+num2
    return "La suma es "+total
}
console.log(Sumadosvalores(4,9))

##### 3. ¿Qué es el scope en JavaScript?

> El alcance que tiene nuestro código, global o local según dónde pongas las variables.

##### 4. Responde `true` o `false` para las siguientes preguntas:

Consider:

js
function outer() {
  var a = 1;

  function inner() {
    var b = 2;
  }

  inner();
}

outer();

##### 5. ¿La función `inner` tiene acceso a al scope de la función `outer`?

> True

###### 6. ¿La función `outer` tiene acceso al scope de la función `inner`?

> False

## Section: Challenges

---

##### 1. Crea una funcion llamada `calculateAreaOfACircle` que reciba `radius` como parámetro. Usa una variable llamada `PI` igual a `3.14159`.

Solution:

js
// var PI(3.14159);


// crea tu funcion aqui



##### 2. Escribe una función que revierta el siguiente array
 var arr = [1,2,3,4]
js
// your code here


##### 3. Escribe una funcion que compare dos arreglos y retorne true si son idénticos, retorna false en caso contrario.

js
// your code here