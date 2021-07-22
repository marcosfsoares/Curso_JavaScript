// var não respeita escopo de bloco
function doSomething() {
    var a = 1;
    if (true) {
      var b = 2; // b é declarado dentro do if mas é visível fora
    }
    var c = a + b; // 3
    console.log(c)
  }
doSomething();

// let respeita escopo de bloco. b só é definida no escopo do if
/*
function doSomethingElse() {
    let d = 1
    if (true) {
      let e = 2 // b é declarado dentro do if e não é visível fora
    }
    let f = d + e // Uncaught ReferenceError: b is not defined
}

doSomethingElse();
*/