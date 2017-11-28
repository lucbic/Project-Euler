function $(x) {return document.querySelector(x)}
let answer = $('.answer');
let botao = $('.botao');
let num = 0;

for (i=0; i<1000; i++) {
  if ((i % 3===0) || (i % 5===0)) {
    num +=i;
  }
}

botao.addEventListener('click', function(){
  answer.innerHTML = "The answer is " + num;
})
