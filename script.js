let state={};

function reset(){
  state={
    chemistry:0,
    comfort:0,
    respect:0,
    boldness:0,
    buzz:0,
    real:false,
    passion:false
  };
}

function apply(e){
  for(let k in e){
    if(state[k]!=undefined) state[k]+=e[k];
  }
}

function setPortrait(p){
  document.getElementById("portrait").src="assets/portraits/"+p;
}

function setPhone(msgs){
  const box=document.getElementById("phone");
  if(!msgs){box.classList.add("hidden");return;}
  box.classList.remove("hidden");
  box.innerHTML="";
  msgs.forEach(m=>{
    const d=document.createElement("div");
    d.className="msg "+m.side;
    d.textContent=m.text;
    box.appendChild(d);
  });
}

function render(id){
  if(id==="ending"){end();return;}
  const s=SCENES[id];

  document.body.dataset.bg=s.bg||"zoo";
  setPortrait(s.portrait||"seth_neutral.png");
  setPhone(s.phone);

  document.getElementById("speaker").textContent=s.speaker||"";
  document.getElementById("text").textContent=s.text||"";
  document.getElementById("chapter").textContent=s.chapter||"";

  const c=document.getElementById("choices");
  c.innerHTML="";
  (s.choices||[]).forEach(ch=>{
    const b=document.createElement("button");
    b.textContent=ch.text;
    b.onclick=()=>{
      apply(ch.effect||{});
      Object.assign(state,ch.flags||{});
      render(ch.next);
    };
    c.appendChild(b);
  });
}

function choose(){
  if(state.passion) return "passion";
  if(state.real) return "true";
  if(state.chemistry>5) return "friend";
  if(state.respect<1) return "bad";
  return "sad";
}

function unlock(id){
  let u=JSON.parse(localStorage.getItem("endings")||"[]");
  if(!u.includes(id)){
    u.push(id);
    localStorage.setItem("endings",JSON.stringify(u));
  }
}

function end(){
  const id=choose();
  const e=ENDINGS[id];

  document.getElementById("cg").src="assets/cg/"+e.image;
  document.getElementById("endTitle").textContent=e.title;

  unlock(id);

  document.getElementById("ending").classList.remove("hidden");
}

function start(){
  document.getElementById("ending").classList.add("hidden");
  reset();
  render("intro");
}

function openGallery(){
  const g=document.getElementById("gallery");
  const grid=document.getElementById("galleryGrid");
  grid.innerHTML="";

  let u=JSON.parse(localStorage.getItem("endings")||"[]");

  ORDER.forEach(id=>{
    const img=document.createElement("img");
    img.src="assets/cg/"+ENDINGS[id].image;
    if(!u.includes(id)) img.style.filter="grayscale(100%)";
    grid.appendChild(img);
  });

  g.classList.remove("hidden");
}

function closeGallery(){
  document.getElementById("gallery").classList.add("hidden");
}

start();
