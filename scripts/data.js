let materials = [
  {
    id: 0,
    name: "Third Age iron",
    qty: 0,
    goal: 0,
    hide: false,
    level: "5",
    faction: "Agnostic",
    location:
      "Varrock Dig Site\nKharid-et\nInfernal Source\nEverlight\nStormguard Citadel\nWarforge!",
  }
];

function checkSaveMats() {
  if (localStorage.getItem("archMats") != null) {
    const saveData = JSON.parse(localStorage.archMats);
    materials.forEach((mat, i) => {
      if (!saveData[i]) {
        saveData.push(mat);
      }
    });
    materials = saveData;
  } else {
    localStorage.archMats = JSON.stringify(materials);
  }
}

checkSaveMats();
