export const adventures = {
   eloHell: {
      prop: "eloHell",
      type: "fight",
      tier: 1,
      tooltip: "ELO Hell, The Trenches, all you know about this place is everyone in here sucks except you.",
      label: "ELO Hell",
      progress: { current: 0, max: 10 },
      enemies: ["toxicGamer", "afkGamer", "feeder"],
      boss: ["smurf"],
   },

   haydensMuseum: {
      prop: "haydensMuseum",
      type: "fight",
      tier: 2,
      tooltip:
         "A place of knowledge, so finding a battle here is not so easy. You pick a fight with the nearest intimidating statue",
      conditions: [{ type: "adventure", name: "eloHell", value: true }],
      label: "Hayden's Museum",
      progress: { current: 0, max: 10 },
      enemies: ["curatedArt", "displayCase", "interactiveExhibit"],
      boss: ["nakedManStatue"],
   },

   nicksAnthill: {
      prop: "nicksAnthill",
      type: "fight",
      tier: 3,
      tooltip: "They may be just ants, but you'd be surprised with how many bullets they can take.",
      conditions: [{ type: "adventure", name: "haydensMuseum", value: true }],
      label: "Nick's Anthill",
      progress: { current: 0, max: 10 },
      enemies: ["workerAnt", "soldierAnt"],
      boss: ["queenAnt"],
   },

   mumble: {
      prop: "mumble",
      type: "fight",
      tier: 4,
      tooltip: "They may be just ants, but you'd be surprised with how many bullets they can take.",
      conditions: [{ type: "adventure", name: "nicksAnthill", value: true }],
      label: "Kenny's Mumble",
      progress: { current: 0, max: 10 },
      enemies: ["Hayden", "Nick", "Mike", "Daniel", "Jake", "Zach", "Joe", "Tony", "Other Zach", "Brandon"],
      boss: ["Kenny"],
   },

   spirgsLair: {
      prop: "spirgsLair",
      type: "fight",
      tier: 5,
      tooltip: "A grandiose city. You are enamored with the vista, until you realize the city is built with corpses. ",
      label: "ELO Hell",
      conditions: [{ type: "adventure", name: "mumble", value: true }],
      progress: { current: 0, max: 1 },
      enemies: [],
      boss: ["Spirg"],
   },
};