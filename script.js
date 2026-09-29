function somaMaior() {
    let A = Number(prompt("Enter a number for A:"));
    let B = Number(prompt("Enter a number for B:"));
    let C = Number(prompt("Enter a number for C:"));
    let soma = A + B;

    if (soma > C) {
        alert("A SOMA DE A+B É: " + soma);
    } else {
        console.log("FIM");
    }
}


function tempoCasamento(){
    let Nome = String(prompt("Digite seu nome"));
  let genero = String(prompt("Qual seu genero? 'M' ou 'F'?")).toUpperCase();
  console.log(`
    =======
    Nome:${Nome},
    genero: ${genero},
    Estado estadoCivil :${(prompt("Qual o seu estado civil? Solteiro(a) ou Casado(a)?"))
          .toUpperCase()}
    `);
    console.log(genero);
    console.log((prompt("Qual o seu estado civil? Solteiro(a) ou Casado(a)?"))
            .toUpperCase())

  if (genero === 'F' && (prompt("Qual o seu estado civil? Solteiro(a) ou Casado(a)?"))
      .toUpperCase() === 'Casada') 
    let tempoCasada = Number(prompt('Quantos anos de casada?'));
alert(`
    =========
     Nome:${Nome},
    genero: ${genero},
    tempode tempoCasada : & {tempodecasada}
    `);
    {
  }
}

function imparPar() {
    let num = number(prompt( "digite um numero"));
    if(num % 2 === 0){
        alert("par");
        }else if(num === 1){
                alert("este numero é impar")
            }
        
    }
function valoresIguais() {
    let a = parseInt(prompt("digite um número:"));
    let b =parseInt(prompt("digite outro numero:"));

    if(a === b){
        let C = a + b ;
        alert("A soma de A + B é; " + C);
    } else {
            let c =a + b;
            alert("o produto de A * b é: "+ C);
        }
    }
