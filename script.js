let state={};

function start(){
state={chem:0,comfort:0,respect:0,buzz:0,real:0,passion:0};
render("intro");
}

function render(id){
if(id==="ending"){end();return;}

let s=SCENES[id];

document.body.dataset.bg=s.bg||"zoo";
document.getElementById("portrait").src="assets/portraits/"+s.portrait;
document.getElementById("speaker").textContent=s.speaker;
document.getElementById("text").textContent=s.text;

if(s.phone){
openPhone(s.phone);
}

let c=document.getElementById("choices");
c.innerHTML="";

s.choices.forEach(ch=>{
let b=document.createElement("button");
b.textContent=ch.text;
b.onclick=()=>{
Object.assign(state,ch.effect||{});
render(ch.next);
};
c.appendChild(b);
});
}

function openPhone(msgs){
let box=document.getElementById("phoneOverlay");
let m=document.getElementById("messages");
m.innerHTML="";
msgs.forEach(x=>{
let d=document.createElement("div");
d.className="msg "+x.side;
d.textContent=x.text;
m.appendChild(d);
});
box.classList.remove("hidden");
}

function closePhone(){
document.getElementById("phoneOverlay").classList.add("hidden");
}

function end(){
let e="cg_bittersweet.png";
if(state.passion) e="cg_passionate.png";
if(state.real) e="cg_true.png";

document.getElementById("cg").src="assets/cg/"+e;
document.getElementById("ending").classList.remove("hidden");
}

start();
