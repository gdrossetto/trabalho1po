const math = require("mathjs");

function MetodoFibonacci(func, A, B, e) {
  var a = A,
    b = B,
    E = e,
    u,
    l,
    Fn,
    N,
    Fib,
    k,
    var1 = 1,
    var2 = 1,
    aux,
    k = 0; //fibonacci
  //var a=0.1, b=3, E=0.1,der1, N;//bisseção

  function Fibonacci(aux) {
    var1 = 1;
    var2 = 1;
    // console.log(aux.toFixed(4));
    if (aux == 0 || aux == 1) {
      //console.log('aux='+aux.toFixed(4)+' Fib='+Fib.toFixed(4));
      return 1;
    } else {
      for (let i = 0; i <= aux - 2; i++) {
        Fib = var1 + var2;
        var1 = var2;
        var2 = Fib;
        //console.log('for fib='+Fib.toFixed(4)+' var1='+var1.toFixed(4)+' var2='+var2.toFixed(4));
      }
    }
    //console.log('aux='+aux.toFixed(4)+' Fib='+Fib.toFixed(4));
    return Fib;
  }

  function InteracoesFibonacci(Fib) {
    N = 1;

    if (Fib == 0) {
      N = 0;
    } else {
      do {
        N++;
        Fib2 = var1 + var2;
        var1 = var2;
        var2 = Fib2;
      } while (Fib2 <= Fib);
    }
  }

  function BuscaDeFibonacci() {
    Fn = (b - a) / E;
    InteracoesFibonacci(Fn);
    // console.log(Fn.toFixed(4));
    console.log(N.toFixed(4));
    // console.log(k.toFixed(4));
    u = a + (Fibonacci(N - k - 2) / Fibonacci(N - k)) * (b - a);
    l = a + (Fibonacci(N - k - 1) / Fibonacci(N - k)) * (b - a);
    console.log("k a      b      b-a    u      l      f(u)   f(l)");

    do {
      console.log(
        k +
          " " +
          a.toFixed(4) +
          " " +
          b.toFixed(4) +
          " " +
          (b - a).toFixed(4) +
          " " +
          u.toFixed(4) +
          " " +
          l.toFixed(4) +
          " " +
          math.evaluate(func, { a: u }).toFixed(4) +
          " " +
          math.evaluate(func, { a: l }).toFixed(4) +
          " "
      );

      //'a^3-a^2-a+3'
      if (math.evaluate(func, { a: u }) > math.evaluate(func, { a: l })) {
        //f(u)>f(l)

        a = u;
        u = l;

        l = a + (Fibonacci(N - k - 1) / Fibonacci(N - k)) * (b - a);
        // console.log('error: N='+N.toFixed(4)+' k='+k.toFixed(4)+' a='+a.toFixed(4)+' b='+b.toFixed(4)+' l='+l.toFixed(4))
      } else {
        b = l;
        l = u;
        u = a + (Fibonacci(N - k - 2) / Fibonacci(N - k)) * (b - a);
      }
      k++;
    } while (k < N - 1);
    //console.log(a.toFixed(4)+' '+b.toFixed(4));
    x = (a + b) / 2;
    console.log(x);
  }
  BuscaDeFibonacci();
  console.log("");
  console.log("x = " + x.toFixed(4));

  return x.toFixed(4);
}

console.log(MetodoFibonacci());
