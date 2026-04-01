const bodyEl = document.body;
const textBox = document.getElementById("textBox");
const choicesEl = document.getElementById("choices");
const nameplateEl = document.getElementById("nameplate");
const sceneTagEl = document.getElementById("sceneTag");
const vibeTextEl = document.getElementById("vibeText");
const routeNotesEl = document.getElementById("routeNotes");
const chapterTextEl = document.getElementById("chapterText");
const portraitImg = document.getElementById("portraitImg");

const phoneBox = document.getElementById("phoneBox");
const phoneMessagesEl = document.getElementById("phoneMessages");

const restartBtn = document.getElementById("restartBtn");
const galleryBtn = document.getElementById("galleryBtn");

const endingOverlay = document.getElementById("endingOverlay");
const endingTitleEl = document.getElementById("endingTitle");
const endingSubtitleEl = document.getElementById("endingSubtitle");
const endingBodyEl = document.getElementById("endingBody");
const endingPortraitEl = document.getElementById("endingPortrait");
const playAgainBtn = document.getElementById("playAgainBtn");
const closeEndingBtn = document.getElementById("closeEndingBtn");

const galleryOverlay = document.getElementById("galleryOverlay");
const galleryGrid = document.getElementById("galleryGrid");
const closeGalleryBtn = document.getElementById("closeGalleryBtn");

let state = {};
let currentSceneId = "intro";

function resetState() {
  state = {
    chemistry: 0,
    comfort: 0,
    respect: 0,
    boldness: 0,
    buzz: 0,
    buzzFlirt: 0,
    secondDate: 0,

    madeLaugh: false,
    talkedAnimals: false,
    talkedTravel: false,
    talkedBeer: false,
    handledKidsWell: false,
    gotPushy: false,
    feltReal: false,
    textGood: false,
    textFlirty: false,
    textSincere: false,
    wantsReal: false,
    wantsPassion: false,
    dodgedTruth: false,
    spokeClearly: false
  };
}

function applyEffect(effect = {}) {
  Object.keys(effect).forEach((key) => {
    if (typeof state[key] === "number") {
      state[key] += effect[key];
    }
  });
}

function applyFlags(flags = {}) {
  Object.keys(flags).forEach((key) => {
    state[key] = flags[key];
  });
}

function setPortrait(file) {
  if (!file) return;
  portraitImg.classList.add("swap");
  setTimeout(() => {
    portraitImg.src = "assets/portraits/" + file;
    portraitImg.classList.remove("swap");
  }, 110);
}

function setBackground(bg) {
  bodyEl.setAttribute("data-bg", bg || "zoo");
}

function setPhone(messages) {
  if (!messages || !messages.length) {
    phoneBox.classList.add("hidden");
    phoneMessagesEl.innerHTML = "";
    return;
  }

  phoneBox.classList.remove("hidden");
  phoneMessagesEl.innerHTML = "";

  messages.forEach((msg) => {
    const div = document.createElement("div");
    div.className = `msg ${msg.side}`;
    div.textContent = msg.text;
    phoneMessagesEl.appendChild(div);
  });
}

function updateVibe() {
  const total = state.chemistry + state.comfort + state.respect + state.boldness;
  const alcohol = state.buzz;

  if (state.gotPushy && state.respect <= 2) {
    vibeTextEl.textContent =
      "The chemistry is real, but Seth is quietly assessing whether you're fun or a future problem.";
    return;
  }

  if (alcohol >= 3 && state.chemistry >= 5) {
    vibeTextEl.textContent =
      "The buzz is real. The tension is realer. You are approaching dangerous patio territory.";
    return;
  }

  if (state.secondDate > 0 && state.feltReal) {
    vibeTextEl.textContent =
      "This has moved beyond banter. There is actual emotional weight here now.";
    return;
  }

  if (total <= 4) {
    vibeTextEl.textContent =
      "Polite opening. Some intrigue. Nobody has fully embarrassed themselves yet.";
  } else if (total <= 8) {
    vibeTextEl.textContent =
      "The vibe is solid. Seth is engaged, amused, and annoyingly attractive about it.";
  } else if (total <= 13) {
    vibeTextEl.textContent =
      "This is going well. Warmth, tension, and dangerous conversational momentum.";
  } else {
    vibeTextEl.textContent =
      "Absurdly good chemistry. One of you should act normal, but that ship may have sailed.";
  }
}

function updateRouteNotes() {
  const notes = [];

  if (state.madeLaugh) notes.push("You have made Seth laugh.");
  if (state.talkedAnimals) notes.push("You let him talk like a real person, not a zoo kiosk.");
  if (state.handledKidsWell) notes.push("You did not get weird about the kids.");
  if (state.talkedTravel) notes.push("Travel talk landed.");
  if (state.talkedBeer) notes.push("Beer discourse survived.");
  if (state.textGood || state.textFlirty || state.textSincere) notes.push("Text chemistry established.");
  if (state.feltReal) notes.push("A few moments have felt sincerely human.");
  if (state.buzz >= 2) notes.push("Alcohol has entered the chat.");
  if (state.gotPushy) notes.push("Caution: you may be overplaying the swagger.");

  if (!notes.length) {
    routeNotesEl.textContent =
      "Seth appears sarcastic, employed, and distressingly handsome.";
    return;
  }

  routeNotesEl.textContent = notes.join(" ");
}

function disableChoices() {
  choicesEl.querySelectorAll("button").forEach((btn) => {
    btn.disabled = true;
  });
}

function renderScene(sceneId) {
  if (sceneId === "ending") {
    showEnding();
    return;
  }

  const scene = SCENES[sceneId];
  if (!scene) return;

  currentSceneId = sceneId;
  disableChoices();
  textBox.classList.add("scene-changing");

  setTimeout(() => {
    setBackground(scene.bg);
    setPortrait(scene.portrait || "seth_happy.png");
    setPhone(scene.phone || []);

    nameplateEl.textContent = scene.speaker || "Narrator";
    sceneTagEl.textContent = scene.tag || "Scene";
    chapterTextEl.textContent = scene.chapter || "Chapter";
    textBox.textContent = scene.text || "";
    choicesEl.innerHTML = "";

    (scene.choices || []).forEach((choice) => {
      const btn = document.createElement("button");
      btn.textContent = choice.text;

      btn.onclick = () => {
        applyEffect(choice.effect || {});
        applyFlags(choice.flags || {});
        updateVibe();
        updateRouteNotes();
        renderScene(choice.next);
      };

      choicesEl.appendChild(btn);
    });

    updateVibe();
    updateRouteNotes();
    textBox.classList.remove("scene-changing");
  }, 180);
}

function chooseEndingId() {
  const total = state.chemistry + state.comfort + state.respect + state.boldness;

  if (state.gotPushy && state.respect <= 2) {
    return "bad";
  }

  if (state.wantsPassion && state.chemistry >= 10 && state.boldness >= 5 && state.buzz >= 2) {
    return "passionate";
  }

  if (
    state.wantsReal &&
    state.feltReal &&
    state.comfort >= 8 &&
    state.respect >= 6 &&
    state.secondDate > 0
  ) {
    return "true";
  }

  if (
    state.handledKidsWell &&
    state.textGood || state.textFlirty || state.textSincere
  ) {
    if (state.comfort >= 5 || state.chemistry >= 6) {
      return "friendzone";
    }
  }

  if (state.dodgedTruth || (total >= 10 && !state.wantsReal && !state.wantsPassion)) {
    return "bittersweet";
  }

  if (state.wantsPassion && state.chemistry >= 9) {
    return "passionate";
  }

  if (state.wantsReal && state.feltReal) {
    return "true";
  }

  return "bittersweet";
}

function getUnlockedEndings() {
  return JSON.parse(localStorage.getItem("seth_endings") || "[]");
}

function unlockEnding(id) {
  const unlocked = getUnlockedEndings();
  if (!unlocked.includes(id)) {
    unlocked.push(id);
    localStorage.setItem("seth_endings", JSON.stringify(unlocked));
  }
}

function showEnding() {
  const endingId = chooseEndingId();
  const ending = ENDINGS[endingId];

  endingTitleEl.textContent = ending.title;
  endingSubtitleEl.textContent = ending.subtitle;
  endingBodyEl.textContent = ending.body;
  endingPortraitEl.src = "assets/cg/" + ending.image;

  unlockEnding(endingId);
  renderGallery();

  endingOverlay.classList.remove("hidden");
}

function hideEnding() {
  endingOverlay.classList.add("hidden");
}

function renderGallery() {
  const unlocked = getUnlockedEndings();
  galleryGrid.innerHTML = "";

  GALLERY_ORDER.forEach((id) => {
    const item = ENDINGS[id];
    const isUnlocked = unlocked.includes(id);

    const card = document.createElement("div");
    card.className = `gallery-item ${isUnlocked ? "" : "gallery-locked"}`;

    card.innerHTML = `
      <div class="gallery-thumb">
        <img src="assets/cg/${item.image}" alt="${item.title}">
      </div>
      <div class="gallery-meta">
        <h3>${isUnlocked ? item.title : "Locked Ending"}</h3>
        <p>${isUnlocked ? item.subtitle : "Play more routes to unlock this CG."}</p>
      </div>
    `;

    galleryGrid.appendChild(card);
  });
}

function showGallery() {
  renderGallery();
  galleryOverlay.classList.remove("hidden");
}

function hideGallery() {
  galleryOverlay.classList.add("hidden");
}

function startGame() {
  hideEnding();
  hideGallery();
  resetState();
  setBackground("zoo");
  setPhone([]);
  updateVibe();
  updateRouteNotes();
  renderScene("intro");
}

restartBtn.onclick = startGame;
playAgainBtn.onclick = startGame;
closeEndingBtn.onclick = hideEnding;
galleryBtn.onclick = showGallery;
closeGalleryBtn.onclick = hideGallery;

startGame();
