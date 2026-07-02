document.querySelectorAll('.reveal').forEach(el=>{new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.15}).observe(el)});
document.querySelector('.form').addEventListener('submit',e=>{e.preventDefault();alert('Заявка пока тестовая. Нужно подключить Telegram или Google Таблицу.');});
