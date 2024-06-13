// console.log("teste");
// console.log('teste');
// console.log(`teste again`); // String

// console.log(1424, 14.24) // int, float - tudo é number ?

/* Por que não usei isso antes ? 
a
a
a
a
a
*/
// Arroz
// console.log('Aqui um texto lindo');
// console.log('Olá mundo de praxe');
// console.log('Meu nome é "Elara". Estou aprendendo JavaScript às', 10, 'da manhã.' );
// // alert("Olá");

// let name = 'Daniel'; // String

// console.log(name, "Olá?");  // não podemos utilizar variáveis com palavras reservadas como if, let e etc let let = algo;

// let arrozBom;
// arrozBom = "Prato Bom";
// console.log(arrozBom);

// const num1 = 23;

// console.log(typeof num1); // Serve para saber o tipo da variável

// let text = document.querySelector('p');

// const name = "Elara";
// const secondName = "Mendes";
// let age = 25;
// let weight = 101;
// let height = 1.8;
// let thisYear = 2024
// thisYear = thisYear - age;

// let birthYear = thisYear;
// const IMC = weight/(height * height);
// const roundedIMC = IMC.toFixed(2)

// console.log(`${name} ${secondName} has ${age} years, her weight is ${weight}kg and her height is ${height}m. Her IMC is ${roundedIMC} and She was born in ${birthYear}.`);
// // text.innerHTML = (`${name} ${secondName} has ${age} years, her weight is ${weight}kg and her height is ${height}m. Her IMC is ${roundedIMC} and She was born in ${birthYear}.`);

// Template Strings

// Pode-se redeclarar uma variável com var e não com let exemplo
// var name = "Elara";
// var name = "Mendes";
// console.log(name);
// Não é recomendado o uso do var e nem da criação de variáveis globais (sem let, const ou var para identificar).

// Tipos primitivos
// let name; // undefined -> não aponta pra local algum na memória
// let name1 = null; // define explicitamente que não deseja que aponte pra algum local na memória
// let aprovado = true; // valor booleano
// let reprovado = false; // valor booleano

// console.log(typeof reprovado);

// Falta falar sobre symbol

/**
 * Operadores Aritméticos
 * - => Subtração - Quarto
 * + => Adição, Concatenação
 * / => Divisão - Terceiro
 * * => Multiplicação - Quarto
 * ** => Potenciação - Segundo
 * % => Resto de Divisão - Terceiro
 * --- As contas possui precedência como na matemática ---
 * Podemos usar parênteses para mudar essa ordem () - Primeiro
 * 
 * Incremento (++) - Sempre se usa let na variável - Ex: contador++ ou ++contador
 * Decremento (--) 
 * -- Possui o pós incremento e o pré incremento, o mesmo com o decremento ---
 * Operadores de atribuição // += -= *= 
 * erro NaN = Not a Number => Prestar atenção nos tipos de dados
 * 
 * parseInt('numero') converte para inteiro
 * parseFloat -> converte para flutuante
 * Number
 */



// let numberOne = prompt('Escreva um numéro: ');
// let numberTwo = prompt('Escreva outro número: ');

// let maxNumber = Math.max(numberOne, numberTwo);



// Ex 1
// let text = document.querySelector('p');
// const num1 = 8.9;
// const num2 = 7;
// const num3 = 4;
// const num4 = 5;
// const num5 = 6;


// const media1 = (num1+num2)/2;
// const media2 = (num3+num4+num5)/3;

// const total = (media1+media2)/2;

// text.innerHTML = total;

/**
 * 
 * objeto window
 * Metódos
 * .alert('') - alerta
 * .prompt('') - pergunta
 * .confirm('') - caixa de confirmação que retorna true ou false
 */

// Ex 2

// let num1 = prompt('Digite um número: ');
// let num2 = prompt('Digite outro número: ');

// num1 = parseFloat(num1);
// num2 = parseFloat(num2);
// resultado = num1 + num2;

// alert(`O resultado é ${resultado}`);

// let varA = 'A'; // b c a 
// let varB = 'B';
// let varC = 'C';
// let varADois = 'A';

// varA = varB;
// varB = varC;
// varC = varADois;

// console.log(varA, varB, varC);

// o uso índice [0,1,2,3,4,5] charAt é similar / para strings .concat para concatenar ainda... use template strings
// indexof = a palavra inicia em tal indice lastindexof = busca do final
//match(/[a-z]/g) com a flag g torna tudo em uma array
//search = similar ao indexof
// replace = replace('arroz', 'outra') troca palavras replace(/a/g, 'arroz') a flag g muda em todas as partes que aparecem o "a"
// length = o tamanho da string
//slice(2, 5) = exibe determinada parte da string, tendo inicio e fim
// split = serve para remover determinado caractere e transforma a string num array, como texto.split(' ', 2); aqui estou removendo os espaços da frase e só quero apenas duas palavras.
// toUpperCase = torna maiuscula
// toLowerCase = torna minuscula

// let texto = "um teste";

// console.log(texto[2]);


// Numbers

// toString() - Converte a variável para String (Temporariamente) ao colocar 2 dentro do paratenses ele irá retornar o valor binário
// toFixed(2) - Arredonda números, o 2 serve pra escolher a quantidade de casas decimais
// Number.isInteger(variavel) - serve pra saber se um numero é inteiro ou não, retornando true ou false
// Number.isNaN(variavel) - dá pra tratar erros de certa forma com isso e condicionais

/**
 * Quando se tem uma string e um número, o javascript irá concatenar e não somar
 */

// Vamos testar algo

// let num1 = 10;
// let str1 = "Arroz";

// total = num1 * str1.length;

// console.log(total);

// Funciona muahahahahaha

// IEEE 754-2008 - padrão dos números

//Objeto Math

/**
 * 
 * Math.floor(variavel) / arredonda pra baixo
 * Math.ceil(variavel) / arredonda pra cima
 * Math.round(variavel) / arredonda para o numero mais próximo
 * Math.max(sequencia/variavel) / retorna o maior número
 * Math.min(sequencia/variavel) / retorna o menor número
 * Math.math() / gera números aleatórios
 * Math.PI / gera o pi
 * Math.pow(x, y) / serve para elevar um número ao outro
 * 
 * (!! (variavel)) / verifica true ou false
 */

/**
 * const ou let .document.getElementById('variavel');
 */


/**
 * 
 * Uma array é como uma lista que pode ter qualquer coisa dentro como Strings, números, objetos e etc. 
 * 
 * Ex variavel = ["conteudo", "conteudo2", "conteudo3"];
 * 
 * É possível selecionar apenas um item como nos indíces.
 * 
 * ao buscar um índice que não existe ele cria um.
 * 
 * para adicionar ao final do array é só usar .push no objeto. nomes.push('texto');
 * 
 * para adicionar no começo nomes.ushift('texto');
 * 
 * nomes.pop(); remove o final da array, possível adicionar o removido em uma variavel.
 * 
 * nome.shift(). remove o primeiro elemento.
 * 
 *  * 
 */

// const nomes = ['Camila', 'Lapada', 'Seca'];
// nomes[3] = 'Naruto';
// console.log(nomes.length);
// console.log(nomes);

/**
 * 
 * Funções
 * 
 * Começa pela palavra function, o nome dela e parenteses e então chaves
 * para se criar um bloco de código. Não precisa de ponto e vírgula nela.
 * Ao chamar ela precisa sim de ponto e vírgula, pois eu quero que seja executada.
 * 
 * 
 */

// function ohayou(namae) { // paramentro
//     return `Bom dia em português pra ${namae}`; // paramentro sendo chamado
// }

// const nome = ohayou('Elara'); // alterando o parametro apos chamar a função
// console.log(nome);

// function soma(x, y) {
//     const resultado = x + y;
//     return resultado;
// }

// console.log(soma(4, 7));
// console.log(soma(9, 7));
// console.log(soma(100, 7));

/**
 * 
 * Objetos
 * 
 * Servem para criar grandes grupos de algo que se queira? 
 */

// const pessoa1 = {
//     nome: 'Elara',
//     sobrenome: 'Mendes',
//     idade: 24,

//     fala() {
//         console.log(`${this.nome} é o meu verdadeiro nome! e minha idade é ${this.idade}`);
//     },

//     aumentaIdade() {
//         this.idade++;
//     }
// };

// pessoa1.aumentaIdade();
// pessoa1.fala();

// Maneira mais intuitiva é usar uma função e é chamada de factory, como uma fábrica de objetos

// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     }
// };

// const pessoa1 = criaPessoa('Elara', 'Mendes', 24);
// const pessoa2 = criaPessoa('Daniel', 'Mendes', 24);
// const pessoa3 = criaPessoa('Camila', 'Mendes', 24);

// console.log(pessoa1);
// console.log(pessoa2);
// console.log(pessoa3);

/**
 * 
 * Meios Primitivos e valores por referência
 * 
 */

/**
 * Lógica de Programação
 * 
 * Operadores de Comparação
 * > maior que
 * >= maior que ou igual a
 * < menor que
 * <= menor ou igual a
 * == igualdade ******
 * === igualdade estrita (valor e tipo)
 * != diferente (valor) ******
 * !== diferente estrito (valor e tipo)
 */

//console.log('Teste');

/**
 * Operadores Lógicos
 * 
 * && - AND = E
 * || - OR = OU
 * ! - NOT = NOT
 * 
 * 
 * Usando E, todas as expressões precisam ser verdadeiras para que dê True.
 * 
 * No caso de OU necessita que apenas uma expressão retorne True.
 * 
 * ! Inverte o valor
 * !! Inverte novmente, voltando ao original?
 * 
 */

/**
 * Lidando com If (se) e else (senão)
 * 
 * Estrutura Condicional
 * 
 * if (expressão) {
 *  // Código
 * } else if (outra condição) {
 *  // Código
 * }
 * 
 * Aula 2
 * 
 * Se encontrar algo verdadeiro, ele já retorna e não lê o resto
 * 
 * 
 */

console.log("arroz");