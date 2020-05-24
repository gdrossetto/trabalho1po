const math = require("mathjs");
//comentário a adicionar a nao ser q vc resolva a precisao XD
//bom dia prof, variaveis em JavaScript deram dor de cabeça quanto a precisão, entao as vezes ele difere o resultado por 0,0001; isso no metodo de fibonacci causou um problemao
// nas comparações que não conseguimos resolver

//tem que alterar qual var usar dependendo da função que for chamar
//var a=-1, b=6, x=0, D=0.35,f2=10000,f1=10000; //uniforme
//var a=1.5, b=2.5, D=0.03, E=0.1, x, z,k; //dicotomica
//var a=0.5, b=0.8, E=0.01,u,l,k,x; //aurea
var a = 0,
  b = 2,
  E = 0.01,
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

/*var a = -0.4,
  b = 3,
  E = 0.001,
  der1,
  der2,
  x,
  aux; //newton*/
function newton() {
  var a = -0.4,
    b = 3,
    E = 0.001,
    der1,
    der2,
    x,
    aux; //newton

  x = a;

  der1 = math.derivative("2x^6+3x^4-12x", "x").evaluate({ x: x }); //derivada primeira

  if (math.abs(der1) <= E) {
    return x.toFixed(4);
  }
  der2 = math
    .derivative(math.derivative("2x^6+3x^4-12x", "x"), "x")
    .evaluate({ x: x }); //derivada segunda

  if (der2 == E) {
    return x.toFixed(4);
  }
  console.log("x       CP     f'(x)    f''(x)");
  console.log(
    x.toFixed(4) + "       " + der1.toFixed(4) + " " + der2.toFixed(4)
  );
  do {
    aux = x;
    x = x - der1 / der2;

    der1 = math.derivative("2x^6+3x^4-12x", "x").evaluate({ x: x }); //derivada primeira
    if (math.abs(der1) <= E) {
      //testa se f'(X) < E
      return x.toFixed(4);
    }

    der2 = math
      .derivative(math.derivative("2x^6+3x^4-12x", "x"), "x")
      .evaluate({ x: x }); //derivada segunda
    if (der2 == E) {
      //testa se f''(X) = E
      return x.toFixed(4);
    }

    if (math.abs(x - aux) / math.max(math.abs(x), 1) < E) {
      //testa se |x1-x0| / max{|x1|,1} < E
      return x.toFixed(4);
    }

    console.log(
      x.toFixed(4) +
        " " +
        (math.abs(x - aux) / math.max(math.abs(x), 1)).toFixed(4) +
        " " +
        der1.toFixed(4) +
        " " +
        der2.toFixed(4)
    );
  } while (true);
}

function Bissecao() {
  //(x^2-x*e^(-x))
  var a = 0.1,
    b = 3,
    E = 0.1,
    der1,
    x,
    N; //bisseção
  N = 0;
  for (let i = 0; i < 9999; i++) {
    //calcula o N por tentativa e erro

    if (Math.pow(2, i) >= 1 / (E / (b - a))) {
      N = i;
      break;
    }
  }
  console.log("k a      b      x      f'(x)");
  for (let i = 0; i <= N; i++) {
    x = (a + b) / 2;

    der1 = math.derivative("(x^2-x*e^(-x))", "x").evaluate({ x: x }); //derivada primeira
    console.log(
      i +
        " " +
        a.toFixed(4) +
        " " +
        b.toFixed(4) +
        " " +
        x.toFixed(4) +
        " " +
        der1.toFixed(4)
    );
    if (der1 < 0) {
      a = x;
    } else {
      if (der1 > 0) {
        b = x;
      } else {
        if (der1 == 0) {
          break;
        }
      }
    }
  }
  /*do{ //parte que esta misteriosamente dando erro devido ao while, é equivalente ao for acima
        x=(a+b)/2;
        console.log(x.toFixed(4));
        console.log(k);
        
        if(math.derivative('(x^2-x*e^(-x))', 'x').evaluate({x:x})<0){

            a = x;

            }else{
                b = x;
            }
        
        k++;
    //}while( math.derivative('(x^2-x*e^(-x))', 'x').evaluate({x:x})!==0 || k<=N);
    }while(k<=N);*/

  return x.toFixed(4);
}

function BuscaDeFibonacci() {
  var a = 0,
    b = 2,
    E = 0.01,
    u,
    l,
    Fn,
    N,
    x;

  k = 0; //fibonacci

  function Fibonacci(aux) {
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
    var N,
      var1 = 1,
      var2 = 1,
      Fib2; //fibonacci

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

  Fn = (b - a) / E;
  InteracoesFibonacci(Fn);
  // console.log(Fn.toFixed(4));

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
        math.evaluate("a^3-a^2-a+3", { a: u }).toFixed(4) +
        " " +
        math.evaluate("a^3-a^2-a+3", { a: l }).toFixed(4) +
        " "
    );

    //'a^3-a^2-a+3'
    if (
      math.evaluate("a^3-a^2-a+3", { a: u }) >
      math.evaluate("a^3-a^2-a+3", { a: l })
    ) {
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
  return x.toFixed(4);
}

//newton();
//console.log("");
//console.log("x = " + BuscaDeFibonacci());
