const SCENES = {

intro:{
bg:"zoo",
speaker:"Narrator",
portrait:"seth_neutral.png",
text:`The zoo hums with low, lazy energy.

Somewhere between the animal calls and the distant chatter of families, you spot him.

Seth.

He’s leaning against a railing, half-listening to someone, half somewhere else entirely.

Then his eyes flick to you.

You’ve been noticed.`,
choices:[
{text:"Open bold",effect:{chem:2},next:"flirt"},
{text:"Play it cool",effect:{comfort:2},next:"calm"}
]
},

flirt:{
speaker:"Seth",
portrait:"seth_flirty.png",
text:`“…You always start conversations like that?”

He studies you.

“…Not bad.”`,
choices:[{text:"Continue",next:"walk"}]
},

calm:{
speaker:"Seth",
portrait:"seth_happy.png",
text:`“You seem normal. That’s rare here.”`,
choices:[{text:"Continue",next:"walk"}]
},

walk:{
speaker:"Narrator",
portrait:"seth_happy.png",
text:`You walk together.

The path is quieter. Cooler. Intentional.

Seth doesn’t rush conversation.

Which somehow makes everything feel more important.`,
choices:[
{text:"Ask about animals",effect:{comfort:1},next:"animals"},
{text:"Ask about life",effect:{chem:1},next:"life"}
]
},

animals:{
speaker:"Seth",
portrait:"seth_happy.png",
text:`“People think this job is about animals.

It’s not.

It’s about attention.”`,
choices:[{text:"Continue",next:"patio_intro"}]
},

life:{
speaker:"Seth",
portrait:"seth_flirty.png",
text:`“I hike. I travel. I raise two kids who think I’m embarrassing.”

He glances at you.

“…They’re right.”`,
choices:[{text:"Continue",next:"patio_intro"}]
},

patio_intro:{
bg:"patio",
speaker:"Narrator",
portrait:"seth_drunk_smirk.png",
text:`The patio glows warm.

Drinks arrive.

The night loosens just enough.`,
choices:[
{text:"Drink more",effect:{chem:2,buzz:2},next:"patio_mid"},
{text:"Stay sharp",effect:{respect:2},next:"patio_mid"}
]
},

patio_mid:{
speaker:"Seth",
portrait:"seth_drunk.png",
text:`“You’re interesting,” he says.

“Which is either very good… or very dangerous.”`,
choices:[
{text:"Lean in",effect:{chem:2},next:"texting"},
{text:"Hold steady",effect:{comfort:2},next:"texting"}
]
},

texting:{
bg:"text",
speaker:"Narrator",
portrait:"seth_happy.png",
text:`Later that night, your phone lights up.`,
phone:[
{side:"in",text:"Seth: You alive?"},
{side:"in",text:"Seth: Or did I win?"}
],
choices:[
{text:"Flirty reply",effect:{chem:2},next:"hike"},
{text:"Sincere reply",effect:{comfort:2},next:"hike"}
]
},

hike:{
bg:"hike",
speaker:"Narrator",
portrait:"seth_sad.png",
text:`The trail opens into something real.

No noise.

No distractions.

Just him.`,
choices:[
{text:"Go real",effect:{real:1},next:"ending"},
{text:"Go passion",effect:{passion:1},next:"ending"}
]
}

};
