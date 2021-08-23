# JS Closures / Scoping exercises

1. What’s the result of executing this code and why.
  ```js
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }
  
  test();
  ```

> Creo que retornará undefinied y después 2 no imprime 1(a) porque console log está antes de declarar la variable, 2 lo imprime porque es el valor dentro de la función foo. Según el control de flujo primero hace el console log pero aún no existe la variable a, las funciones las realiza porque salen de ese flujo, las lleva hacia arriba, por eso si la imprime.


2. What is result?
  ```js
  var a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);
  ```
> Primer ejercicio con clousure, el clousure es la habilidad de js de tratar funciones como valores, al declarar una variable se le asigna una función, variable result es igual a first result que es igual a some function. Si das console log a result imprime 5 porque toma el valor de other function porque hicimos clousure con las dos variables de abajo.
3. What is the result of the following code? Explain your answer.
  ```js
  var fullname = 'John Doe';
  var obj = {
     fullname: 'Colin Ihrig',
     prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
           return this.fullname;
        }
     }
  };
  
  console.log(obj.prop.getFullname());

  var test = obj.prop.getFullname;
  
  console.log(test());
  ```
> Va a imprimir Aurelio de Rosa y después John Doe, porque console.log(obj.prop.getFullname()); tiene acceso a fullname: Aurelio de Rosa de manera local y el console.log(test()); no encuentra Aurelio de la Rosa por ser local y por tanto imprime fullname: John Doe por ser global.
4. What will you see in the console for the following example?
  ```js
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  console.log(a);    
  ```

> Imprime 1 porque el console.log(a) al estar fuera de la function b toma el valor de a=1 por estar declarado de manera global, el valor de a que está dentro de la function b no lo detecta porque es local.