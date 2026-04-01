const SCENES = {

intro:{
  chapter:"Zoo",
  bg:"zoo",
  speaker:"Narrator",
  portrait:"seth_neutral.png",
  text:`You spot Seth at the zoo.

He notices you immediately.`,
  choices:[
    {text:"Flirt",effect:{chemistry:2},next:"flirt"},
    {text:"Be normal",effect:{comfort:2},next:"normal"}
  ]
},

flirt:{
  speaker:"Seth",
  portrait:"seth_flirty.png",
  text:`Bold. I respect it.`,
  choices:[{text:"Continue",next:"patio"}]
},

normal:{
  speaker:"Seth",
  portrait:"seth_happy.png",
  text:`Alright, you're not insane. Good start.`,
  choices:[{text:"Continue",next:"patio"}]
},

patio:{
  chapter:"Patio",
  bg:"patio",
  portrait:"seth_drunk_smirk.png",
  text:`You get drinks.`,
  choices:[
    {text:"Drink heavy",effect:{buzz:2,chemistry:2},next:"text"},
    {text:"Stay chill",effect:{comfort:2},next:"text"}
  ]
},

text:{
  chapter:"Texts",
  bg:"texting",
  phone:[
    {side:"incoming",text:"Seth: You alive?"},
    {side:"incoming",text:"Seth: Or did I win?"}
  ],
  text:`You smile at your phone.`,
  choices:[
    {text:"Flirty reply",effect:{chemistry:2},next:"hike"},
    {text:"Sincere reply",effect:{comfort:2},next:"hike"}
  ]
},

hike:{
  chapter:"Hike",
  bg:"hike",
  portrait:"seth_sad.png",
  text:`This got real.`,
  choices:[
    {text:"Go real",effect:{respect:2},flags:{real:true},next:"ending"},
    {text:"Go hot",effect:{chemistry:2,boldness:2},flags:{passion:true},next:"ending"}
  ]
}

};

const ENDINGS={
true:{title:"Real Thing",image:"cg_true.png"},
passion:{title:"Patio Heat",image:"cg_passionate.png"},
friend:{title:"Friend Route",image:"cg_friendzone.png"},
sad:{title:"Almost",image:"cg_bittersweet.png"},
bad:{title:"Too Much",image:"cg_bad.png"}
};

const ORDER=["true","passion","friend","sad","bad"];
