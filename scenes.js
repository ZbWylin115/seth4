const SCENES = {
  intro: {
    chapter: "Chapter 1 — Zoo",
    tag: "Zoo",
    bg: "zoo",
    speaker: "Narrator",
    portrait: "seth_happy.png",
    text: `A warm afternoon settles over the zoo like it has nowhere else to be.

Near one of the shaded enclosures, a staff member finishes explaining animal enrichment to a family with the patience of a saint and the expression of a man who has absolutely had enough of other people for one day.

When the family leaves, he glances over.

His tag says SETH.

He catches you looking. Not shyly. More like: well, now you've committed to this.`,
    choices: [
      {
        text: `“So do all the zoo employees look this good, or are you the premium exhibit?”`,
        effect: { chemistry: 2, boldness: 1 },
        next: "intro_flirty"
      },
      {
        text: `“You handled that better than I would've. One of those kids would've been airborne.”`,
        effect: { comfort: 1, respect: 1 },
        flags: { madeLaugh: true },
        next: "intro_sarcastic"
      },
      {
        text: `“You were good with them. That can't be accidental.”`,
        effect: { comfort: 2, respect: 1 },
        next: "intro_warm"
      }
    ]
  },

  intro_flirty: {
    chapter: "Chapter 1 — Zoo",
    tag: "Zoo",
    bg: "zoo",
    speaker: "Seth",
    portrait: "seth_flirty.png",
    text: `He gives you a long, evaluating look.

“Wow. You opened with that.”

He folds his arms.

“Bold. Slightly embarrassing. Not ineffective.”`,
    choices: [
      {
        text: `“I prefer a strong first impression.”`,
        effect: { chemistry: 1, boldness: 1 },
        next: "walk_start"
      },
      {
        text: `“I can still pivot to normal, if required.”`,
        effect: { comfort: 1, respect: 1 },
        next: "walk_start"
      }
    ]
  },

  intro_sarcastic: {
    chapter: "Chapter 1 — Zoo",
    tag: "Zoo",
    bg: "zoo",
    speaker: "Seth",
    portrait: "seth_happy.png",
    text: `He snorts.

“Oh good, you're funny. That helps. I was worried I'd have to carry the entire conversational burden myself.”

He tilts his head.

“For the record, the flamingos are innocent. The children are often not.”`,
    choices: [
      {
        text: `“So you do have standards. Hot.”`,
        effect: { chemistry: 1 },
        next: "walk_start"
      },
      {
        text: `“Thank God. I was worried you were one of those aggressively wholesome zoo men.”`,
        effect: { comfort: 2 },
        flags: { madeLaugh: true },
        next: "walk_start"
      }
    ]
  },

  intro_warm: {
    chapter: "Chapter 1 — Zoo",
    tag: "Zoo",
    bg: "zoo",
    speaker: "Seth",
    portrait: "seth_flustered.png",
    text: `That softens him a little.

“Thanks. Most people hear 'zoo' and immediately ask me what animal could kill them fastest. Which, to be fair, is one of the better questions.”

He studies you for a beat.

“But you seem less exhausting than average.”`,
    choices: [
      {
        text: `“That might be the nicest thing anyone's said to me.”`,
        effect: { comfort: 2 },
        next: "walk_start"
      },
      {
        text: `“I'm aiming for memorable, not exhausting.”`,
        effect: { comfort: 1, chemistry: 1 },
        next: "walk_start"
      }
    ]
  },

  walk_start: {
    chapter: "Chapter 1 — Zoo",
    tag: "Zoo",
    bg: "zoo",
    speaker: "Narrator",
    portrait: "seth_happy.png",
    text: `Seth jerks his head toward a quieter service path.

“Walk with me,” he says. “I've got a few minutes before I go back to being educational infrastructure.”

You fall into step beside him.

The path is calmer back here. More shade, more birds, fewer people. Seth visibly approves of that ratio.`,
    choices: [
      {
        text: "Ask what animal he never gets tired of",
        effect: { comfort: 1, respect: 1 },
        flags: { talkedAnimals: true },
        next: "animal_talk"
      },
      {
        text: "Ask what he does when he's not here",
        effect: { comfort: 1, chemistry: 1 },
        next: "life_talk"
      },
      {
        text: "Tell him he looks like he belongs in the hidden part",
        effect: { chemistry: 2, boldness: 1 },
        next: "flirt_path"
      }
    ]
  },

  animal_talk: {
    chapter: "Chapter 1 — Zoo",
    tag: "Zoo",
    bg: "zoo",
    speaker: "Seth",
    portrait: "seth_happy.png",
    text: `“Otters are overpowered. Goats are underrated. Big cats are beautiful, but they know it, which makes them a little tedious.”

He glances over.

“People think this job is about spectacle. It isn't. It's care. Routine. Attention. Half of love is maintenance, which is not a sexy sentence, but it's true.”`,
    choices: [
      {
        text: `“Actually that was an alarmingly attractive sentence.”`,
        effect: { chemistry: 2 },
        next: "bridge_to_patio"
      },
      {
        text: `“That might be the most grounded thing I've heard all week.”`,
        effect: { comfort: 1, respect: 2 },
        flags: { feltReal: true },
        next: "bridge_to_patio"
      }
    ]
  },

  life_talk: {
    chapter: "Chapter 1 — Zoo",
    tag: "Zoo",
    bg: "zoo",
    speaker: "Seth",
    portrait: "seth_flirty.png",
    text: `“Hiking. Beer. Traveling when my schedule and wallet stop fighting each other.”

He slides his hands into his pockets.

“I've got two kids, too. Older son, younger daughter. They're both old enough to roast me on sight, which really keeps a man humble.”`,
    choices: [
      {
        text: `“That explains the expression. You've seen things.”`,
        effect: { comfort: 2 },
        flags: { madeLaugh: true, handledKidsWell: true },
        next: "kids_followup"
      },
      {
        text: `“That sounds like a dad's job description, honestly.”`,
        effect: { comfort: 1, respect: 1 },
        flags: { handledKidsWell: true },
        next: "kids_followup"
      },
      {
        text: `“That is… deeply, inconveniently attractive.”`,
        effect: { chemistry: 2, boldness: 1 },
        next: "kids_followup"
      }
    ]
  },

  kids_followup: {
    chapter: "Chapter 1 — Zoo",
    tag: "Zoo",
    bg: "zoo",
    speaker: "Seth",
    portrait: "seth_flustered.png",
    text: `He laughs under his breath.

“Oh, it absolutely is. If your children can't humble you in under thirty seconds, you've failed as a parent.”

He looks ahead, then back at you.

“They're great, though. Smart. Mean in a way I have to respect. So naturally I blame myself.”`,
    choices: [
      {
        text: "Ask if they'd approve of you flirting with him like this",
        effect: { chemistry: 1, comfort: 1 },
        next: "bridge_to_patio"
      },
      {
        text: "Say he talks about them like he's proud of them",
        effect: { comfort: 2, respect: 1 },
        flags: { feltReal: true },
        next: "bridge_to_patio"
      }
    ]
  },

  flirt_path: {
    chapter: "Chapter 1 — Zoo",
    tag: "Zoo",
    bg: "zoo",
    speaker: "Seth",
    portrait: "seth_flirty.png",
    text: `He cuts his eyes toward you.

“That sounded better in your head, didn't it?”

A beat.

Then his mouth twitches.

“Don't look so wounded. It still worked.”`,
    choices: [
      {
        text: `“Good. I'd hate to waste premium material on a weekday.”`,
        effect: { chemistry: 1, comfort: 1 },
        flags: { madeLaugh: true },
        next: "bridge_to_patio"
      },
      {
        text: `“You seem like a man who appreciates effort.”`,
        effect: { chemistry: 2 },
        next: "bridge_to_patio"
      },
      {
        text: `“I can go harder.”`,
        effect: { chemistry: 2, boldness: 1 },
        flags: { gotPushy: true },
        next: "bridge_to_patio"
      }
    ]
  },

  bridge_to_patio: {
    chapter: "Chapter 1 — Zoo",
    tag: "Zoo",
    bg: "zoo",
    speaker: "Narrator",
    portrait: "seth_happy.png",
    text: `You reach a railing overlooking a quieter part of the zoo.

Seth rests his forearms there, relaxed. The light catches in his beard, and for one profoundly annoying moment he looks even better than he did five minutes ago.

“I'm off soon,” he says. “There's a place nearby with a patio, respectable beer, and a low concentration of screaming children. One of my finer discoveries.”

His eyes settle on you.

“You want to keep this going, or should I assume you've peaked already?”`,
    choices: [
      {
        text: `“Please. I haven't even started showing off yet.”`,
        effect: { chemistry: 2, boldness: 1 },
        next: "patio_open"
      },
      {
        text: `“Yeah. I'd like that.”`,
        effect: { comfort: 2, respect: 1 },
        next: "patio_open"
      },
      {
        text: `“Only if your beer opinions are as good as your face.”`,
        effect: { chemistry: 1, comfort: 1 },
        next: "patio_open"
      }
    ]
  },

  patio_open: {
    chapter: "Chapter 2 — Patio",
    tag: "Patio",
    bg: "patio",
    speaker: "Narrator",
    portrait: "seth_happy.png",
    text: `The patio is strung with warm lights and soft conversation.

Seth has changed out of his work shirt. This helps nobody. Least of all you.

He settles across from you with the ease of someone who already knows how to exist in a room.

“So,” he says, lifting his menu, “what exactly are your intentions with the sarcastic zoo dad?”`,
    choices: [
      {
        text: `“To flirt irresponsibly and hope the universe rewards courage.”`,
        effect: { chemistry: 2, boldness: 1 },
        next: "patio_drinks"
      },
      {
        text: `“To find out if there's a real person under all this targeted harassment.”`,
        effect: { comfort: 2, chemistry: 1 },
        flags: { madeLaugh: true },
        next: "patio_drinks"
      },
      {
        text: `“Honestly? I saw you and wanted another hour.”`,
        effect: { comfort: 2, chemistry: 1 },
        flags: { feltReal: true },
        next: "patio_drinks"
      }
    ]
  },

  patio_drinks: {
    chapter: "Chapter 2 — Patio",
    tag: "Patio",
    bg: "patio",
    speaker: "Seth",
    portrait: "seth_drunk_smirk.png",
    text: `He smiles into the menu.

“Good answers. Better than the usual. Usually I get something bleak like 'seeing what happens' from a man whose emotional range is three IPA names and a truck payment.”

A server appears.

Seth glances at you. “Alright. How are we playing this?”`,
    choices: [
      {
        text: "Get one good beer and keep it classy",
        effect: { respect: 1, comfort: 1, buzz: 1 },
        next: "patio_mid"
      },
      {
        text: "Match him drink for drink and lean into the night",
        effect: { chemistry: 2, boldness: 1, buzz: 2 },
        next: "patio_mid"
      },
      {
        text: "Get something lighter and stay sharp",
        effect: { respect: 2 },
        next: "patio_mid"
      }
    ]
  },

  patio_mid: {
    chapter: "Chapter 2 — Patio",
    tag: "Patio",
    bg: "patio",
    speaker: "Seth",
    portrait: "seth_drunk_smirk.png",
    text: `Drinks arrive. The night loosens a notch.

Seth takes a sip and studies you over the rim of his glass.

“Alright,” he says. “Now tell me whether you're actually fun, or just aesthetically committed to the idea.”`,
    choices: [
      {
        text: "Ask him about travel",
        effect: { comfort: 1, chemistry: 1 },
        flags: { talkedTravel: true },
        next: "travel_scene"
      },
      {
        text: "Ask what kind of beer snob he is",
        effect: { comfort: 1, chemistry: 1 },
        flags: { talkedBeer: true },
        next: "beer_scene"
      },
      {
        text: "Tell him he's extremely attractive when he's mean",
        effect: { chemistry: 2, boldness: 1 },
        next: "heat_scene"
      }
    ]
  },

  travel_scene: {
    chapter: "Chapter 2 — Patio",
    tag: "Patio",
    bg: "patio",
    speaker: "Seth",
    portrait: "seth_flirty.png",
    text: `“Anywhere green,” he says. “Trails, weather, decent food, one local bar everyone insists is the real one.”

He taps his glass.

“The older I get, the more I think a trip is fifty percent scenery and fifty percent who you're with. Beautiful places are wasted on bad company.”`,
    choices: [
      {
        text: `“Then I'd better qualify as decent company.”`,
        effect: { chemistry: 1, comfort: 1 },
        next: "late_patioshift"
      },
      {
        text: `“Window seat or aisle? This decides everything.”`,
        effect: { comfort: 2 },
        flags: { madeLaugh: true },
        next: "late_patioshift"
      }
    ]
  },

  beer_scene: {
    chapter: "Chapter 2 — Patio",
    tag: "Patio",
    bg: "patio",
    speaker: "Seth",
    portrait: "seth_drunk_smirk.png",
    text: `“I like clean lagers, good stouts, the occasional Belgian, and I hate overpriced nonsense that tastes like somebody infused a candle with resentment.”

He arches a brow.

“And you? Are you actually into beer, or are you flirting through beverage discourse because it's the only socially acceptable foreplay left?”`,
    choices: [
      {
        text: `“Both. I believe in layered strategy.”`,
        effect: { chemistry: 1, comfort: 1 },
        flags: { madeLaugh: true },
        next: "late_patioshift"
      },
      {
        text: `“A little of both, but I can be sincere if rewarded.”`,
        effect: { comfort: 1, respect: 1 },
        next: "late_patioshift"
      }
    ]
  },

  heat_scene: {
    chapter: "Chapter 2 — Patio",
    tag: "Patio",
    bg: "patio",
    speaker: "Seth",
    portrait: "seth_flirty.png",
    text: `His eyes narrow, amused.

“That's unfortunate for both of us.”

He says it dryly, but he doesn't look away.

“Because now I have to decide whether to encourage you or protect my peace.”`,
    choices: [
      {
        text: `“Encourage me. Obviously.”`,
        effect: { chemistry: 2, boldness: 1 },
        next: "late_patioshift"
      },
      {
        text: `“Your peace is overrated.”`,
        effect: { chemistry: 2, boldness: 1 },
        flags: { gotPushy: true },
        next: "late_patioshift"
      },
      {
        text: `“You can do both. You seem talented.”`,
        effect: { chemistry: 1, comfort: 1 },
        next: "late_patioshift"
      }
    ]
  },

  late_patioshift: {
    chapter: "Chapter 2 — Patio",
    tag: "Patio",
    bg: "patio",
    speaker: "Narrator",
    portrait: "seth_drunk.png",
    text: `The evening deepens. The drinks settle in.

Patio lights blur softly overhead. Conversation around you fades into the background until it is mostly just Seth, the table, the warm air, and the increasingly obvious fact that this has become a real moment.

He is looking at you in that unmistakable way people do when they have stopped pretending not to consider the possibility.`,
    choices: [
      {
        text: "Hold eye contact and let the silence work",
        effect: { chemistry: 1, comfort: 1, respect: 1 },
        next: "patio_close"
      },
      {
        text: "Touch his hand, briefly",
        effect: { chemistry: 2, boldness: 1 },
        next: "patio_close"
      },
      {
        text: "Make him laugh one more time before things get serious",
        effect: { comfort: 2 },
        flags: { madeLaugh: true },
        next: "patio_close"
      }
    ]
  },

  patio_close: {
    chapter: "Chapter 2 — Patio",
    tag: "Patio",
    bg: "patio",
    speaker: "Seth",
    portrait: "seth_flustered.png",
    text: `He doesn't pull away.

Interesting.

He glances down at your hand, or your mouth, or maybe both, then back up.

“Well,” he says softly, “this is either going somewhere or becoming an anecdote. Try not to make me hate the anecdote.”

He reaches for his phone.

“You text, or are you one of those men who tries to build mystique by answering three business days later?”`,
    choices: [
      {
        text: `“I text. I just prefer not to sound deranged.”`,
        effect: { comfort: 1, respect: 1 },
        next: "text_intro"
      },
      {
        text: `“I can be charming in any medium.”`,
        effect: { chemistry: 1, boldness: 1 },
        next: "text_intro"
      },
      {
        text: `“Depends. Do I get rewarded for good behavior?”`,
        effect: { chemistry: 1, buzzFlirt: 1 },
        next: "text_intro"
      }
    ]
  },

  text_intro: {
    chapter: "Chapter 3 — Texting",
    tag: "Texts",
    bg: "texting",
    speaker: "Narrator",
    portrait: "seth_happy.png",
    phone: [
      { side: "incoming", text: "Seth: Made it home." },
      { side: "incoming", text: "Seth: Congratulations on surviving two drinks and my personality." },
      { side: "incoming", text: "Seth: Early reviews are mixed, but promising." }
    ],
    text: `Later that night, your phone lights up.

The man is apparently just as sarcastic over text. Good. That would have been a devastating thing to lose.`,
    choices: [
      {
        text: `Text back: “Cruel. I was just about to say your customer service was excellent.”`,
        effect: { comfort: 1, chemistry: 1 },
        flags: { textGood: true, madeLaugh: true },
        next: "text_mid"
      },
      {
        text: `Text back: “I survived you. I'm not sure you're surviving me.”`,
        effect: { chemistry: 2, boldness: 1 },
        flags: { textFlirty: true },
        next: "text_mid"
      },
      {
        text: `Text back: “I had a really good time tonight.”`,
        effect: { comfort: 2, respect: 1 },
        flags: { textSincere: true, feltReal: true },
        next: "text_mid"
      }
    ]
  },

  text_mid: {
    chapter: "Chapter 3 — Texting",
    tag: "Texts",
    bg: "texting",
    speaker: "Narrator",
    portrait: "seth_flirty.png",
    phone: [
      { side: "incoming", text: "Seth: See, now that's workable." },
      { side: "incoming", text: "Seth: You free this weekend?" },
      { side: "incoming", text: "Seth: I know a trail with a view and minimal nonsense." }
    ],
    text: `There it is: the second date.

Not an accident. Not a vague maybe. A real invitation.`,
    choices: [
      {
        text: `“Only if the view is competing with you.”`,
        effect: { chemistry: 2, boldness: 1 },
        next: "text_close"
      },
      {
        text: `“Yeah. I'd like that.”`,
        effect: { comfort: 2, respect: 1 },
        next: "text_close"
      },
      {
        text: `“Depends. Is this hike code for murder?”`,
        effect: { comfort: 1 },
        flags: { madeLaugh: true },
        next: "text_close"
      }
    ]
  },

  text_close: {
    chapter: "Chapter 3 — Texting",
    tag: "Texts",
    bg: "texting",
    speaker: "Narrator",
    portrait: "seth_happy.png",
    phone: [
      { side: "incoming", text: "Seth: God, you're suspicious." },
      { side: "incoming", text: "Seth: Saturday. 10am." },
      { side: "incoming", text: "Seth: Wear shoes that imply you respect gravity." }
    ],
    text: `He sends the location.

You stare at the screen like an idiot for a few seconds, which is embarrassing but not, on balance, the worst sign.`,
    choices: [
      {
        text: "Go to the hike",
        effect: { secondDate: 1 },
        next: "hike_open"
      }
    ]
  },

  hike_open: {
    chapter: "Chapter 4 — Hike",
    tag: "Hike",
    bg: "hike",
    speaker: "Narrator",
    portrait: "seth_happy.png",
    text: `The morning is cool, bright, and unfairly scenic.

Seth is already there when you arrive, coffee in hand, looking very much like a man who knows exactly how to wear a flannel and ruin someone's concentration.

“You made it,” he says. “And in functional shoes. I'm touched.”`,
    choices: [
      {
        text: `“I wanted to impress you with my survival instincts.”`,
        effect: { chemistry: 1, comfort: 1 },
        next: "hike_mid"
      },
      {
        text: `“I took your warning about gravity very seriously.”`,
        effect: { comfort: 2 },
        flags: { madeLaugh: true },
        next: "hike_mid"
      },
      {
        text: `“You should be touched. I can be very obedient when motivated.”`,
        effect: { chemistry: 2, boldness: 1 },
        next: "hike_mid"
      }
    ]
  },

  hike_mid: {
    chapter: "Chapter 4 — Hike",
    tag: "Hike",
    bg: "hike",
    speaker: "Seth",
    portrait: "seth_flirty.png",
    text: `The trail winds upward. Conversation comes easier out here.

Seth is quieter for a little while, then says, “You know what's irritating? You were supposed to be a funny patio man. Manageable. Temporary. And now here you are, persisting.”`,
    choices: [
      {
        text: `“I can leave if you want less enchantment in your life.”`,
        effect: { comfort: 1, chemistry: 1 },
        next: "hike_real"
      },
      {
        text: `“That sounds dangerously close to fondness.”`,
        effect: { chemistry: 2 },
        next: "hike_real"
      },
      {
        text: `“I'm resilient. It's one of my worst traits.”`,
        effect: { comfort: 1, madeHimLaugh: 1 },
        flags: { madeLaugh: true },
        next: "hike_real"
      }
    ]
  },

  hike_real: {
    chapter: "Chapter 4 — Hike",
    tag: "Hike",
    bg: "hike",
    speaker: "Seth",
    portrait: "seth_sad.png",
    text: `He exhales through a smile.

“I like you,” he says. “That's the irritating part.”

The trail opens to a wider overlook. He slows.

“I don't do chaos well anymore. I have a life. Kids. Work. Responsibilities. Which makes this less dramatic, maybe, but more real.”

He looks at you directly.

“So what are we actually doing here?”`,
    choices: [
      {
        text: "Tell him you want something real, not just heat",
        effect: { comfort: 2, respect: 2 },
        flags: { feltReal: true, wantsReal: true },
        next: "final_turn"
      },
      {
        text: "Tell him the heat is very much still part of your argument",
        effect: { chemistry: 2, boldness: 2 },
        flags: { wantsPassion: true },
        next: "final_turn"
      },
      {
        text: "Deflect with humor because you're scared",
        effect: { comfort: 1 },
        flags: { dodgedTruth: true, madeLaugh: true },
        next: "final_turn"
      }
    ]
  },

  final_turn: {
    chapter: "Chapter 5 — Decision",
    tag: "Decision",
    bg: "hike",
    speaker: "Narrator",
    portrait: "seth_flustered.png",
    text: `For a moment, it is just the two of you, the open view, and the shape of whatever this has been quietly becoming.

This is no longer just flirting.

Now it counts.`,
    choices: [
      {
        text: "Step closer and kiss him",
        effect: { chemistry: 2, boldness: 1 },
        next: "ending"
      },
      {
        text: "Take his hand first and let him choose the pace",
        effect: { comfort: 2, respect: 1 },
        next: "ending"
      },
      {
        text: "Say exactly what you want without touching him yet",
        effect: { respect: 2, comfort: 1, chemistry: 1 },
        flags: { spokeClearly: true },
        next: "ending"
      }
    ]
  }
};

const ENDINGS = {
  true: {
    title: "The Real Thing",
    subtitle: "Not just chemistry. Structure.",
    image: "cg_true.png",
    body: `No rush. No performance. No accidental half-measures.

Just warmth, steadiness, and the quiet certainty that this is something both of you are choosing on purpose.

Whatever this becomes, it is not flimsy.`
  },
  passionate: {
    title: "Patio Heat",
    subtitle: "You acted. He didn't stop you.",
    image: "cg_passionate.png",
    body: `The tension finally cashes out.

The chemistry wins. Decisively.

This is not subtle, not uncertain, and not likely to stay hypothetical for long.`
  },
  friendzone: {
    title: "Promising Trouble",
    subtitle: "He likes you. Unfortunately for his peace.",
    image: "cg_friendzone.png",
    body: `You didn't lose him. In fact, you may have become something worse: emotionally viable.

The flirting remains. The warmth remains. The door stays open.

This could still become something beautiful.`
  },
  bittersweet: {
    title: "Almost",
    subtitle: "Wrong timing. Right people.",
    image: "cg_bittersweet.png",
    body: `It could have worked.

That is what makes it ache.

No explosions. No cruelty. Just the low, miserable dignity of a near miss.`
  },
  bad: {
    title: "Too Much, Too Soon",
    subtitle: "You pushed past the line.",
    image: "cg_bad.png",
    body: `You had something real. Then you overplayed it.

Seth doesn't shut you down harshly. He just steps back.

Which is worse.`
  }
};

const GALLERY_ORDER = ["true", "passionate", "friendzone", "bittersweet", "bad"];
