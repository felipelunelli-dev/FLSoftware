var WA="https://api.whatsapp.com/send/?phone=554491385227";
var D={
pizzaria:{e:"🍕",n:"Pizzaria Fornalha",t:"Peça sua pizza em 1 minuto e receba quentinha.",a:"#E8452C",afg:"#fff",bg:"#FFF3E0",fg:"#3B1509",card:"#fff",verb:"Enviar pedido",ob:"Pedido da Pizzaria Fornalha:",
c:[["Pizzas",[["Margherita","Molho, mussarela e manjericão",44],["Calabresa","Calabresa, cebola e azeitona",48],["Quatro Queijos","Mussarela, provolone, gorgonzola e parmesão",56],["Frango com Catupiry","Frango desfiado e catupiry",54]]],["Bebidas",[["Refrigerante 2L","Cola ou guaraná",12],["Suco natural 500ml","Laranja ou maracujá",9]]]]},
salao:{e:"💇",n:"Studio Aurora",t:"Escolha o serviço e agende pelo WhatsApp.",a:"#B0275F",afg:"#fff",bg:"#FDF1F6",fg:"#3A0F26",card:"#fff",verb:"Pedir horário",ob:"Quero agendar no Studio Aurora:",
c:[["Cabelo",[["Corte feminino","Lavagem e finalização",70],["Escova","Modelada ou lisa",45],["Coloração","Raiz ou completa",120],["Hidratação","Tratamento profundo",60]]],["Unhas e estética",[["Manicure","Mãos com esmaltação",30],["Pedicure","Pés com esmaltação",35],["Design de sobrancelha","Com henna",40]]]]},
oficina:{e:"🔧",n:"Auto Center Motor Forte",t:"Veja os preços e peça seu orçamento sem sair de casa.",a:"#F28A1B",afg:"#1D1F23",bg:"#1D1F23",fg:"#FFE9CC",card:"#2B2E34",verb:"Pedir orçamento",ob:"Quero orçamento na Motor Forte:",
c:[["Revisão e óleo",[["Troca de óleo e filtro","Óleo sintético",189],["Revisão completa","Freios, suspensão e fluidos",350],["Alinhamento","Alinhamento 3D",90]]],["Freios e pneus",[["Pastilhas dianteiras","Mão de obra incluída",160],["Balanceamento","Por roda",25],["Troca de pneu","Por pneu",20]]]]}
};
var cart={};
function R(v){return "R$ "+v.toLocaleString("pt-BR",{minimumFractionDigits:2})}
function wa(msg){return WA+(msg?"&text="+encodeURIComponent(msg):"")}
function total(k){var s=0,n=0,l=[];D[k].c.forEach(function(c){c[1].forEach(function(i){var q=cart[i[0]]||0;if(q){s+=q*i[2];n+=q;l.push(q+"x "+i[0])}})});return {s:s,n:n,l:l}}
function upd(k){var t=total(k),b=document.getElementById("cart"),d=D[k];
b.className="cart"+(t.n?"":" off");
b.querySelector("span").textContent=t.n?t.n+" item(ns) • "+R(t.s):"Toque em + para escolher";
b.querySelector("a").href=wa(t.n?d.ob+"\n"+t.l.join("\n")+"\nTotal: "+R(t.s):"")}
function anim(a,b){[a,b].forEach(function(e){if(!e)return;var c=e===a?"pop":"bump";e.classList.remove(c);void e.offsetWidth;e.classList.add(c)})}
function show(k){var d=D[k],h="";cart={};
d.c.forEach(function(c){h+='<div class="cat">'+c[0]+'</div>';c[1].forEach(function(i,x){h+='<div class="it"><div><b>'+i[0]+'</b><span>'+i[1]+'</span></div><em>'+R(i[2])+'</em><button aria-label="Adicionar '+i[0]+'" data-n="'+i[0]+'">+</button></div>'})});
var el=document.getElementById("demo");
el.style.cssText="--d-bg:"+d.bg+";--d-fg:"+d.fg+";--d-a:"+d.a+";--d-afg:"+d.afg+";--d-card:"+d.card;
el.innerHTML='<div class="bar"><span class="bl"><img src="logo.png" alt="" width="22" height="22">Demonstração feita pela Fl Software</span><a href="#">Ver o site da Fl Software</a></div><div class="w"><a class="back" href="#'+k+'">← Voltar ao site</a><div class="dh"><div class="e">'+d.e+'</div><h1>'+d.n+'</h1><p>'+d.t+'</p></div>'+h+'<p class="note">Exemplo de como seu cardápio ou catálogo pode ficar. O pedido chega pronto no seu WhatsApp.</p></div><div class="cart off" id="cart"><span></span><a href="#" target="_blank" rel="noopener">'+d.verb+'</a></div>';
el.querySelectorAll(".it").forEach(function(n,i){n.style.animationDelay=Math.min(i,10)*50+"ms"});
el.querySelectorAll(".it button").forEach(function(b){b.onclick=function(){var n=b.getAttribute("data-n");cart[n]=(cart[n]||0)+1;upd(k);anim(b,document.querySelector("#cart span"))}});
upd(k)}
var S={
pizzaria:{b:"Fazer pedido",h:"A melhor pizza da cidade, direto do forno a lenha.",s:"Desde 2012 fazemos massa fermentada por 48 horas e usamos ingredientes frescos todos os dias. Peça pelo site e receba em casa ou retire no balcão.",d:[["Forno a lenha","Borda crocante e sabor de pizza de verdade."],["Entrega rápida","Em média 40 minutos na sua porta."],["Sem taxa de aplicativo","Você pede direto e paga menos."]],hr:"Terça a domingo, das 18h às 23h30",end:"Rua das Flores, 120 - Centro"},
salao:{b:"Agendar horário",h:"Beleza e cuidado do jeito que você merece.",s:"Um espaço acolhedor com profissionais experientes em corte, coloração, unhas e estética. Escolha seus serviços e peça seu horário pelo WhatsApp.",d:[["Profissionais especializadas","Cada serviço com quem mais entende."],["Produtos de qualidade","Linhas profissionais para o seu cabelo."],["Horário marcado","Sem fila e sem espera."]],hr:"Segunda a sábado, das 9h às 19h",end:"Av. Central, 450 - Sala 3"},
oficina:{b:"Pedir orçamento",h:"Seu carro em boas mãos, com preço claro.",s:"Mecânica geral, revisão, freios e pneus com garantia por escrito. Veja os valores e peça seu orçamento sem sair de casa.",d:[["Garantia em todo serviço","Trabalho feito com segurança."],["Preço transparente","Você sabe o valor antes de aprovar."],["Atendimento ágil","Seu carro pronto no prazo combinado."]],hr:"Segunda a sexta, das 8h às 18h",end:"Rua do Comércio, 800 - Distrito Industrial"}};
function site(k){var d=D[k],s=S[k],c="";
s.d.forEach(function(i){c+='<div><b>'+i[0]+'</b><span>'+i[1]+'</span></div>'});
var el=document.getElementById("demo");
el.style.cssText="--d-bg:"+d.bg+";--d-fg:"+d.fg+";--d-a:"+d.a+";--d-afg:"+d.afg+";--d-card:"+d.card;
el.innerHTML='<div class="bar"><span class="bl"><img src="logo.png" alt="" width="22" height="22">Demonstração feita pela Fl Software</span><a href="#">Ver o site da Fl Software</a></div><div class="w"><div class="sh"><div class="e">'+d.e+'</div><h1>'+d.n+'</h1><p>'+s.h+'</p><a class="sb" href="#'+k+'-pedido">'+s.b+'</a></div><div class="ss"><h2>Sobre nós</h2><p>'+s.s+'</p></div><div class="ss"><h2>Por que escolher</h2><div class="sc">'+c+'</div></div><div class="ss"><h2>Onde e quando</h2><p>'+s.hr+'<br>'+s.end+'</p></div><div class="ss"><a class="sb" href="#'+k+'-pedido">'+s.b+'</a></div><p class="note">Exemplo de site criado pela Fl Software.</p></div>'}
function route(){var h=location.hash.slice(1),k=h.replace(/-pedido$/,""),ped=k!==h,home=document.getElementById("home"),dm=document.getElementById("demo");
if(D[k]){home.hidden=true;dm.hidden=false;(ped?show:site)(k);document.title=D[k].n+" | Fl Software";window.scrollTo(0,0)}
else{dm.hidden=true;home.hidden=false;document.title="Fl Software - Desenvolvendo Soluções";
if(k){var s=document.getElementById(k);if(s)s.scrollIntoView()}}}
document.querySelectorAll(".wa").forEach(function(a){a.href=wa("Olá! Quero uma demonstração para minha empresa.");a.target="_blank";a.rel="noopener"});
window.addEventListener("hashchange",route);route();

document.documentElement.classList.add("js");
(function(){var els=document.querySelectorAll(".sv,.pf,section h2,.cta .btn");
if(!("IntersectionObserver" in window)){return}
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.15});
els.forEach(function(e){var p=e.parentNode,i=Array.prototype.indexOf.call(p.children,e);e.classList.add("rv");e.style.setProperty("--d",(i%3)*0.1+"s");io.observe(e)})})();
