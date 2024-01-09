//API que configura chamada quando o target elemento intersecta com o viewport do dispositivo
const observer = new IntersectionObserver((entries) =>{
 entries.forEach((entry)=>{ //observa multiplos elementos, corre sempre que a visibilidade de um dos elementos muda
  console.log(entry)
  if (entry.isIntersecting){  //verifica se esta a cruzar com o viewport ou não
   entry.target.classList.remove('hide'); //quando não interseta
   entry.target.classList.add('show'); //se estiver fica visivel
  }else{
   entry.target.classList.remove('show'); //quando não interseta
   entry.target.classList.add('hide'); //quando não interseta
  }

 });
});


//chamar elementos escondidos
const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el)=> observer.observe(el)); //itera sobre os elementos escondidos e diz ao observador para os observar