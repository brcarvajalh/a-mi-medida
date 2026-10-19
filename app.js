(() => {
'use strict';
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const fmt = new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0});
const money = value => fmt.format(value);
const catalog = [
['1','Blazer estructurado','Línea Áurea','Chaquetas','Formal',299900,'#69638f','#e5e0f3'],
['2','Camisa de vestir','Norte Studio','Camisas','Formal',149900,'#e5e4dd','#eee9e1'],
['3','Pantalón recto','Raíz Moda','Pantalones','Formal',189900,'#474956','#e4e9f2'],
['4','Chaqueta casual','Distrito Textil','Chaquetas','Casual',239900,'#a88970','#f3e8dd'],
['5','Camiseta esencial','Raíz Moda','Camisetas','Casual',79900,'#e6dcdd','#f0e3e4'],
['6','Jeans de corte relajado','Norte Studio','Pantalones','Casual',179900,'#627fa9','#e6eaf5'],
['7','Sobrecamisa urbana','Distrito Textil','Camisas','Urbano',169900,'#789c86','#e1eee3'],
['8','Pantalón cargo','Línea Áurea','Pantalones','Urbano',209900,'#9a9979','#eaeade'],
['9','Camiseta gráfica','Norte Studio','Camisetas','Urbano',99900,'#9a83b0','#f2e7f6'],
['10','Chaqueta deportiva','Raíz Moda','Chaquetas','Deportivo',199900,'#6b9f9b','#e1f0ed'],
['11','Pantalón jogger','Distrito Textil','Pantalones','Deportivo',129900,'#7d8195','#e5e8ef'],
['12','Camiseta deportiva','Línea Áurea','Camisetas','Deportivo',89900,'#a7b18e','#ecf0e3'],
['13','Blazer de lino','Distrito Textil','Chaquetas','Formal',349900,'#d0b2a4','#f5e8e0'],
['14','Camisa Oxford','Línea Áurea','Camisas','Casual',159900,'#9caecc','#e7edf7'],
['15','Pantalón chino','Norte Studio','Pantalones','Casual',169900,'#c5ae8a','#efe9de'],
['16','Camisa oversize','Raíz Moda','Camisas','Urbano',139900,'#ba93ac','#efe3ef'],
['17','Chaqueta cortavientos','Norte Studio','Chaquetas','Deportivo',249900,'#7b9eb0','#e2edf2'],
['18','Camiseta cuello alto','Distrito Textil','Camisetas','Formal',119900,'#78678e','#e9e5f3']
].map(([id,name,brand,category,style,price,color,shade])=>({id,name,brand,category,style,price,color,shade}));
const charts={
top:{S:[94,86],M:[102,94],L:[110,102],XL:[120,112],'2XL':[132,124],'3XL':[146,138]},
bottom:{S:[80,98],M:[88,106],L:[98,116],XL:[108,126],'2XL':[120,138],'3XL':[134,152]}
};
const looks=[
{id:'l1',title:'Elegancia sin esfuerzo',subtitle:'Para reuniones, oficina o cenas',style:'Formal',ids:['1','2','3'],color:'#eadff1',accent:'#6f598b'},
{id:'l2',title:'Casual con personalidad',subtitle:'Comodidad para todos los días',style:'Casual',ids:['4','5','6'],color:'#e6e9db',accent:'#758c76'},
{id:'l3',title:'Urbano a tu manera',subtitle:'Capas y siluetas relajadas',style:'Urbano',ids:['7','8','9'],color:'#f0e0db',accent:'#a47e6f'},
{id:'l4',title:'En movimiento',subtitle:'Funcional y con estilo',style:'Deportivo',ids:['10','11','12'],color:'#dbe9e8',accent:'#6a9697'}
];
const icons={
home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M9 21v-8h6v8"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/>',
sparkle:'<path d="m12 3 1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8z"/><path d="m19 18 .5 1.5L21 20l-1.5.5L19 22l-.5-1.5L17 20l1.5-.5z"/>',
heart:'<path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
back:'<path d="m15 18-6-6 6-6"/>',
check:'<path d="m4 12 5 5L20 6"/>',
sliders:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2" fill="currentColor"/><circle cx="16" cy="17" r="2" fill="currentColor"/>',
close:'<path d="M18 6 6 18M6 6l12 12"/>',
hanger:'<path d="M10 6a2 2 0 0 1 4 0c0 2-2 2-2 4l8.5 6a2 2 0 0 1-1.2 3.7H4.7A2 2 0 0 1 3.5 16L12 10"/>',
plus:'<path d="M12 5v14M5 12h14"/>'
};
function icon(name,size=22){return '<svg aria-hidden="true" width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">'+(icons[name]||icons.sparkle)+'</svg>'}
function safeGet(key,fallback){try{const v=JSON.parse(localStorage.getItem(key));return v===null?fallback:v}catch(_){return fallback}}
function persist(key,data){try{localStorage.setItem(key,JSON.stringify(data));return true}catch(_){toast('No se pudo guardar en este navegador');return false}}
let profile=safeGet('amm-profile',{});
if(!profile || Array.isArray(profile) || typeof profile!=='object')profile={};
let favorites=safeGet('amm-favorites',[]);
if(!Array.isArray(favorites))favorites=[];
favorites=favorites.map(String);
let savedLooks=safeGet('amm-looks',[]);
if(!Array.isArray(savedLooks))savedLooks=[];
let filters={query:'',style:'Todos',category:'Todas',budget:'999999'};
let selectedProduct=null,selectedLook=null,installPrompt=null,toastTimeout=null;
function suggest(p){
const bottom=p.category==='Pantalones';
const keys=bottom?['waist','hips']:['chest','waist'];
const vals=keys.map(k=>Number(profile[k])||0);
if(vals.some(n=>!n))return {short:'Agrega tus medidas',label:'Completa tus medidas para estimar una talla',ok:false};
const allowance=profile.fit==='loose'?8:profile.fit==='fitted'?0:4;
const sizes=bottom?charts.bottom:charts.top;
for(const [size,limits] of Object.entries(sizes)){
if(vals.every((v,i)=>v+allowance<=limits[i]))return {short:'Talla '+size+'*',label:'Talla orientativa: '+size,ok:true};
}
return {short:'Sin coincidencia',label:'Sin talla sugerida en esta tabla de ejemplo',ok:false};
}
function garment(p){
const fill=p.color,shade=p.shade;
const common='stroke="#29263e" stroke-opacity=".13" stroke-width="1.8" stroke-linejoin="round"';
let body='';
if(p.category==='Pantalones'){
body='<path d="M65 45h111l-7 52-15 126h-39l-7-105-9 105H60L65 97z" fill="'+fill+'" '+common+'/>'+
'<path d="M65 85h104M119 45l-11 73M79 58h21M140 58h20" stroke="#fff" stroke-opacity=".37" stroke-width="3" fill="none"/>'+
'<path d="M65 45h111v17H65z" fill="#fff" opacity=".12"/><path d="M115 222v-35M62 222v-35" stroke="#fff" opacity=".16" stroke-width="2"/>';
}else if(p.category==='Camisetas'){
body='<path d="M92 47 117 39 143 47 175 63l27 49-37 18-15-25-2 121H85l-1-121-15 25-37-18 27-49z" fill="'+fill+'" '+common+'/>'+
'<path d="M97 48q20 29 42 0" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="5"/><path d="M85 218h63" stroke="#fff" stroke-opacity=".25" stroke-width="3"/>';
if(p.name.includes('gráfica'))body+='<circle cx="118" cy="124" r="25" fill="#ffe3ef" opacity=".87"/><path d="m105 124 10 10 20-23" fill="none" stroke="#74578e" stroke-width="5"/>';
}else if(p.category==='Camisas'){
body='<path d="m91 46 26-9 26 9 34 20 26 48-36 18-17-27-3 121H86l-3-121-17 27-36-18 26-48z" fill="'+fill+'" '+common+'/>'+
'<path d="M91 46 116 69 106 96 85 57m58-11-26 23 11 27 22-39" fill="#fff" fill-opacity=".25" stroke="#fff" stroke-opacity=".56" stroke-width="3"/>'+
'<path d="M117 69v156M111 109h12" stroke="#fff" stroke-opacity=".48" stroke-width="2"/><circle cx="117" cy="116" r="3" fill="#fff"/><circle cx="117" cy="148" r="3" fill="#fff"/><circle cx="117" cy="180" r="3" fill="#fff"/>';
}else{
body='<path d="M88 43 114 35 141 43 180 63l27 53-40 18-14-28-3 126H86l-2-126-15 28-39-18 27-53z" fill="'+fill+'" '+common+'/>'+
'<path d="M88 43 117 91 103 163 85 57m56-14-24 48 15 72 21-106" fill="#fff" fill-opacity=".23" stroke="#fff" stroke-opacity=".44" stroke-width="3"/>'+
'<path d="M117 92v141" stroke="#fff" stroke-opacity=".4" stroke-width="2"/><path d="M86 193h25v27H87m39-27h25v27h-26" fill="none" stroke="#fff" stroke-opacity=".26" stroke-width="3"/>';
}
return '<svg class="garment-svg" viewBox="0 0 240 270" role="img" aria-label="Ilustración de '+p.category+'"><ellipse cx="118" cy="244" rx="65" ry="9" fill="#19192a" opacity=".08"/><circle cx="121" cy="123" r="96" fill="'+shade+'" opacity=".5"/>'+body+'</svg>';
}
function card(p){const loved=favorites.includes(p.id);const s=suggest(p);return '<article class="product-card"><div class="product-photo" style="--product-bg:'+p.shade+'">'+garment(p)+'<button class="heart-button '+(loved?'is-loved':'')+'" data-fav="'+p.id+'" aria-label="'+(loved?'Quitar':'Agregar')+' '+p.name+' '+(loved?'de':'a')+' favoritos">'+(loved?'♥':icon('heart',20))+'</button><span class="product-style">'+p.style+'</span></div><div class="product-copy"><p class="product-brand">'+p.brand+'</p><h3>'+p.name+'</h3><p class="product-price">'+money(p.price)+'</p><div class="card-foot"><span class="size-chip '+(s.ok?'is-match':'')+'">'+s.short+'</span><button class="arrow-button" data-detail="'+p.id+'" aria-label="Ver detalles de '+p.name+'">'+icon('arrow',19)+'</button></div></div></article>'}
function renderHome(){
$('#home-picks').innerHTML=catalog.slice(0,4).map(card).join('');
$('#home-profile-text').textContent=profile.chest&&profile.waist?'Tu perfil de medidas está listo. Explora tus sugerencias.':'Completa tus medidas y descubre sugerencias de talla.';
$('#home-profile-cta').textContent=profile.chest&&profile.waist?'Ver mi perfil':'Crear mi perfil';
}
function renderStyleChips(){
const root=$('#style-chips');
root.innerHTML=['Todos','Formal','Casual','Urbano','Deportivo'].map(s=>'<button type="button" class="filter-chip '+(filters.style===s?'active':'')+'" data-style="'+s+'">'+s+'</button>').join('');
}
function renderExplore(){
renderStyleChips();
const q=filters.query.toLocaleLowerCase('es').trim();
const list=catalog.filter(p=>(p.name+' '+p.brand+' '+p.style+' '+p.category).toLocaleLowerCase('es').includes(q)&&(filters.style==='Todos'||filters.style===p.style)&&(filters.category==='Todas'||filters.category===p.category)&&p.price<=Number(filters.budget));
$('#search-input').value=filters.query;
$('#category-filter').value=filters.category;
$('#budget-filter').value=filters.budget;
$('#result-count').textContent=list.length+' prendas';
$('#explore-grid').innerHTML=list.length?list.map(card).join(''):empty('No encontramos prendas','Prueba con otro estilo, categoría o presupuesto.');
}
function renderFavorites(){
const list=catalog.filter(p=>favorites.includes(p.id));
$('#favorites-grid').innerHTML=list.length?list.map(card).join(''):empty('Todavía no guardas prendas','Toca el corazón de una prenda para guardarla aquí.','explore','Explorar prendas');
$('#favorites-count').textContent=list.length+' guardadas';
$$('[data-fav-count]').forEach(el=>el.textContent=favorites.length||'');
}
function renderLooks(){
$('#looks-grid').innerHTML=looks.map(look=>{
const selected=savedLooks.includes(look.id);
return '<article class="look-card"><div class="look-visual" style="--look-bg:'+look.color+'">'+look.ids.map((id,i)=>{const p=catalog.find(x=>x.id===id);return '<div class="look-item look-item-'+i+'">'+garment(p)+'</div>'}).join('')+'<span class="look-label">'+look.style+'</span></div><div class="look-copy"><h3>'+look.title+'</h3><p>'+look.subtitle+'</p><div class="look-actions"><button class="outlined small-button" data-open-look="'+look.id+'">Ver conjunto '+icon('arrow',16)+'</button><button class="save-look '+(selected?'saved':'')+'" data-save-look="'+look.id+'">'+(selected?'✓ Guardado':'+ Guardar')+'</button></div></div></article>'}).join('');
$('#look-count').textContent=savedLooks.length?('Tienes '+savedLooks.length+' looks guardados.'):'Combina prendas y guarda tus conjuntos favoritos.';
}
function empty(title,desc,route,label){return '<div class="empty"><span class="empty-icon">♡</span><h3>'+title+'</h3><p>'+desc+'</p>'+(route?'<button class="primary-button" data-go="'+route+'">'+label+' '+icon('arrow',17)+'</button>':'')+'</div>'}
function renderAll(){renderHome();renderExplore();renderFavorites();renderLooks()}
function route(name,update=true){
const valid=['home','explore','looks','favorites','profile'];
if(!valid.includes(name))name='home';
$$('[data-screen]').forEach(el=>{const active=el.dataset.screen===name;el.hidden=!active;el.classList.toggle('screen-active',active)});
$$('[data-nav]').forEach(el=>{const active=el.dataset.nav===name;el.classList.toggle('active',active);el.setAttribute('aria-current',active?'page':'false')});
$('#top-title').textContent=name==='home'?'A Mi Medida':name==='explore'?'Explorar':name==='looks'?'Mis looks':name==='favorites'?'Favoritos':'Mi perfil';
$('#top-subtitle').textContent=name==='home'?'La moda se adapta a ti':name==='explore'?'Encuentra tu próximo look':name==='looks'?'Tu estilo, a tu manera':name==='favorites'?'Lo que te encanta':'Hecho para ti';
if(update && location.hash!=='#'+name)location.hash=name;
window.scrollTo({top:0,behavior:'instant'});
if(name==='profile')fillForm();
}
function openDetail(id){
const p=catalog.find(x=>x.id===String(id));if(!p)return;selectedProduct=p;selectedLook=null;
const bottom=p.category==='Pantalones';
const cells=Object.entries(bottom?charts.bottom:charts.top).map(([k,v])=>'<tr><th>'+k+'</th><td>'+v[0]+'</td><td>'+v[1]+'</td></tr>').join('');
$('#sheet-content').innerHTML='<div class="sheet-art" style="--product-bg:'+p.shade+'">'+garment(p)+'</div><p class="eyebrow">'+p.brand+' · '+p.style+'</p><h2 id="sheet-title">'+p.name+'</h2><p class="sheet-price">'+money(p.price)+'</p><span class="size-chip">'+suggest(p).label+'</span><h3>Guía de tallas de demostración</h3><table class="size-table"><thead><tr><th>Talla</th><th>'+(bottom?'Cintura':'Pecho')+'</th><th>'+(bottom?'Cadera':'Cintura')+'</th></tr></thead><tbody>'+cells+'</tbody></table><p class="small-note">Estas tablas son ficticias; la sugerencia no garantiza ajuste ni disponibilidad.</p><div class="sheet-actions"><button class="primary-button" data-sheet-fav="'+p.id+'">'+(favorites.includes(p.id)?'♥ Quitar de favoritos':'♡ Guardar en favoritos')+'</button><button class="outlined" data-sheet-profile="true">Editar medidas</button></div>';
showSheet();
}
function openLook(id){
const l=looks.find(x=>x.id===id);if(!l)return;selectedLook=l;selectedProduct=null;
const products=l.ids.map(id=>catalog.find(p=>p.id===id));
$('#sheet-content').innerHTML='<div class="look-mini-banner" style="background:'+l.color+'">'+icon('sparkle',45)+'</div><p class="eyebrow">'+l.style+'</p><h2 id="sheet-title">'+l.title+'</h2><p class="sheet-subtitle">'+l.subtitle+'</p><div class="look-products">'+products.map(p=>'<button class="look-line" data-detail="'+p.id+'"><span class="look-line-image" style="background:'+p.shade+'">'+garment(p)+'</span><span><b>'+p.name+'</b><small>'+money(p.price)+'</small></span>'+icon('arrow',17)+'</button>').join('')+'</div><p class="small-note">Precios y marcas simulados. El conjunto no está a la venta.</p><button class="primary-button full" data-save-look="'+l.id+'">'+(savedLooks.includes(l.id)?'✓ Quitar look guardado':'+ Guardar este look')+'</button>';
showSheet();
}
let priorFocus=null;
function showSheet(){priorFocus=document.activeElement;$('#sheet-overlay').hidden=false;document.body.classList.add('modal-open');$('#close-sheet').focus()}
function closeSheet(){$('#sheet-overlay').hidden=true;document.body.classList.remove('modal-open');if(priorFocus&&priorFocus.focus)priorFocus.focus()}
function toggleFav(id){
id=String(id);favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];
persist('amm-favorites',favorites);renderAll();
if(selectedProduct&&selectedProduct.id===id){const b=$('[data-sheet-fav]');if(b)b.textContent=favorites.includes(id)?'♥ Quitar de favoritos':'♡ Guardar en favoritos'}
}
function toggleLook(id){
savedLooks=savedLooks.includes(id)?savedLooks.filter(x=>x!==id):[...savedLooks,id];
persist('amm-looks',savedLooks);renderLooks();
if(selectedLook&&selectedLook.id===id){const b=$('#sheet-content [data-save-look]');if(b)b.textContent=savedLooks.includes(id)?'✓ Quitar look guardado':'+ Guardar este look'}
toast(savedLooks.includes(id)?'Look guardado':'Look retirado de guardados');
}
function toast(message){const el=$('#toast');el.textContent=message;el.hidden=false;clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.hidden=true,2500)}
function fillForm(){['height','chest','waist','hips'].forEach(k=>{$('#'+k).value=profile[k]||''});$('#fit').value=profile.fit||'regular';$('#preferred').value=profile.preferred||'Formal';$('#profile-summary').textContent=profile.chest&&profile.waist?'Perfil activo · sugerencias habilitadas':'Configura tus medidas para recibir sugerencias orientativas';}
function saveProfile(event){event.preventDefault();const obj={};['height','chest','waist','hips'].forEach(k=>obj[k]=$('#'+k).value?Number($('#'+k).value):'');obj.fit=$('#fit').value;obj.preferred=$('#preferred').value;profile=obj;if(persist('amm-profile',obj)){toast('¡Tu perfil está guardado!');renderAll();route('home')}}
function clearProfile(){profile={};try{localStorage.removeItem('amm-profile')}catch(_){};$('#profile-form').reset();fillForm();renderAll();toast('Datos eliminados de este navegador')}
function initNavigation(){
$$('[data-nav]').forEach(el=>{el.innerHTML='<span class="nav-icon">'+icon(el.dataset.icon,23)+'</span><span>'+el.dataset.label+'</span>'});
$('#header-mark').innerHTML=icon('hanger',25);
$('#header-fav-icon').innerHTML=icon('heart',21);
document.body.addEventListener('click',e=>{
const button=e.target.closest('button');if(!button)return;
if(button.dataset.nav){route(button.dataset.nav);return}
if(button.dataset.go){closeSheetIfOpen();route(button.dataset.go);return}
if(button.dataset.fav){toggleFav(button.dataset.fav);return}
if(button.dataset.detail){openDetail(button.dataset.detail);return}
if(button.dataset.sheetFav){toggleFav(button.dataset.sheetFav);return}
if(button.dataset.saveLook){toggleLook(button.dataset.saveLook);return}
if(button.dataset.openLook){openLook(button.dataset.openLook);return}
if(button.dataset.sheetProfile){closeSheet();route('profile');return}
});
window.addEventListener('hashchange',()=>route(location.hash.replace('#',''),false));
$('#search-input').addEventListener('input',e=>{filters.query=e.target.value;renderExplore()});
$('#category-filter').addEventListener('change',e=>{filters.category=e.target.value;renderExplore()});
$('#budget-filter').addEventListener('change',e=>{filters.budget=e.target.value;renderExplore()});
$('#style-chips').addEventListener('click',e=>{const b=e.target.closest('[data-style]');if(!b)return;filters.style=b.dataset.style;renderExplore()});
$('#profile-form').addEventListener('submit',saveProfile);
$('#clear-profile').addEventListener('click',clearProfile);
$('#example-profile').addEventListener('click',()=>{profile={height:180,chest:110,waist:99,hips:113,fit:'regular',preferred:'Formal'};fillForm();toast('Ejemplo cargado. Pulsa Guardar perfil.')});
$('#close-sheet').addEventListener('click',closeSheet);
$('#sheet-overlay').addEventListener('click',e=>{if(e.target.id==='sheet-overlay')closeSheet()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#sheet-overlay').hidden)closeSheet()});
$('#profile-to-explore').addEventListener('click',()=>route('explore'));
}
function closeSheetIfOpen(){if(!$('#sheet-overlay').hidden)closeSheet()}
function initInstall(){
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;$('#install-action').hidden=false});
$('#install-action').addEventListener('click',async()=>{if(!installPrompt){toast('Usa la opción de instalación del navegador');return}installPrompt.prompt();try{await installPrompt.userChoice}catch(_){}installPrompt=null;$('#install-action').hidden=true});
if(window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone){const b=$('#install-action');if(b)b.hidden=true;$('#install-help').innerHTML='<b>¡Ya tienes la app instalada!</b> Abre A Mi Medida desde el ícono de tu celular.';}
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}))}
}
initNavigation();fillForm();renderAll();route(location.hash.replace('#','')||'home',false);initInstall();
})();