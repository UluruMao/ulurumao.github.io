// Project cards and detail pages are static HTML; content lives in content/projects.json.
function openDialog(dialog){dialog.showModal();document.body.style.overflow='hidden'}
document.addEventListener('click',event=>{
  const close=event.target.closest('[data-close]');
  if(close)close.closest('dialog').close();
  const media=event.target.closest('[data-lightbox]');
  if(media){const image=document.querySelector('#expanded-image');image.src=media.dataset.lightbox;image.alt=media.dataset.alt||'Project image';openDialog(document.querySelector('#media-dialog'))}
});
document.querySelectorAll('dialog').forEach(dialog=>{
  dialog.addEventListener('close',()=>{document.body.style.overflow=''});
  dialog.addEventListener('click',event=>{if(event.target===dialog){const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)dialog.close()}});
});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  const category=button.dataset.filter;
  let visible=0;
  document.querySelectorAll('[data-project-grid] .project-card').forEach(card=>{card.hidden=category!=='all'&&card.dataset.category!==category;if(!card.hidden)visible++});
  const grid=document.querySelector('[data-project-grid]');
  document.querySelector('[data-result-count]').textContent=String(visible).padStart(2,'0')+' '+(grid.dataset.countLabel||'projects');
}));

const playButton=document.querySelector('[data-play]');let sparkTimer;
if(playButton)playButton.addEventListener('click',()=>{
  clearTimeout(sparkTimer);playButton.classList.remove('is-playing');void playButton.offsetWidth;playButton.classList.add('is-playing');
  playButton.querySelectorAll('.spark').forEach(s=>s.remove());
  for(let i=0;i<12;i++){const spark=document.createElement('span');spark.className='spark';spark.textContent=['✦','✳','✧'][i%3];spark.style.cssText=`left:50%;top:48%;color:${['#fc6945','#8a75b0','#617b49'][i%3]};--x:${Math.cos(i*Math.PI/6)*(100+Math.random()*100)}px;--y:${Math.sin(i*Math.PI/6)*(90+Math.random()*90)}px;--r:${i*40}deg`;playButton.append(spark);setTimeout(()=>spark.remove(),1300)}
  document.querySelector('[data-scene-status]').textContent='A little spark of curiosity!';
  sparkTimer=setTimeout(()=>{playButton.classList.remove('is-playing');document.querySelector('[data-scene-status]').textContent=''},1500);
});

document.querySelector('[data-current-year]').textContent=new Date().getFullYear();
