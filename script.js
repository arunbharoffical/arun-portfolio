const btn=document.getElementById('theme');btn.addEventListener('click',()=>{document.body.classList.toggle('light');btn.textContent=document.body.classList.contains('light')?'☀':'☾';});
