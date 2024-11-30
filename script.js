const baseSetCards = [
 { name: "Artisan", cost: 6, type: "Action" },
    { name: "Bandit", cost: 5, type: "Attack, Action" },
    { name: "Bureaucrat", cost: 4, type: "Attack, Action" },
    { name: "Cellar", cost: 2, type: "Action" },
    { name: "Chapel", cost: 2, type: "Action" },
    { name: "Council Room", cost: 5, type: "Action" },
    { name: "Festival", cost: 5, type: "Action" },
    { name: "Harbinger", cost: 3, type: "Action" },
    { name: "Laboratory", cost: 5, type: "Action" },
    { name: "Library", cost: 5, type: "Action" },
    { name: "Market", cost: 5, type: "Action" },
    { name: "Merchant", cost: 3, type: "Action" },
    { name: "Militia", cost: 4, type: "Attack, Action" },
    { name: "Mine", cost: 5, type: "Action" },
    { name: "Moat", cost: 2, type: "Reaction, Action" },
    { name: "Moneylender", cost: 4, type: "Action" },
    { name: "Poacher", cost: 4, type: "Action" },
    { name: "Remodel", cost: 4, type: "Action" },
    { name: "Sentry", cost: 5, type: "Action" },
    { name: "Smithy", cost: 4, type: "Action" },
    { name: "Throne Room", cost: 4, type: "Action" },
    { name: "Vassal", cost: 3, type: "Action" },
    { name: "Village", cost: 3, type: "Action" },
    { name: "Witch", cost: 5, type: "Attack, Action" },
    { name: "Workshop", cost: 3, type: "Action" },
    { name: "Gardens", cost: 4, type: "Victory" },
];

const darkAgesCards = [
      { name: "Altar", cost: 6, type: "Action" },
    { name: "Ironmonger", cost: 4, type: "Action" },
    { name: "Poor House", cost: 1, type: "Action" },
    { name: "Bandit Camp", cost: 5, type: "Action" },
    { name: "Rebuild", cost: 5, type: "Action" },
    { name: "Rats", cost: 4, type: "Action" },
    { name: "Marauder", cost: 4, type: "Attack, Action" },
    { name: "Vagrant", cost: 2, type: "Action" },
    { name: "Graverobber", cost: 5, type: "Action" },
    { name: "Mystic", cost: 5, type: "Action" },
    { name: "Cultist", cost: 5, type: "Action" },
    { name: "Hermit", cost: 3, type: "Action" },
    { name: "Death Cart", cost: 4, type: "Action" },
    { name: "Urchin", cost: 3, type: "Attack, Action" },
    { name: "Wandering Minstrel", cost: 4, type: "Action" },
    { name: "Market Square", cost: 3, type: "Reaction, Action" },
    { name: "Storeroom", cost: 3, type: "Action" },
    { name: "Rogue", cost: 5, type: "Attack, Action" },
    { name: "Knights", cost: 5, type: "Attack, Action" },
    { name: "Armory", cost: 4, type: "Action" },
    { name: "Squire", cost: 2, type: "Action" },
    { name: "Sage", cost: 3, type: "Action" },
    { name: "Band of Misfits", cost: 5, type: "Action" },
    { name: "Junk Dealer", cost: 5, type: "Action" },
    { name: "Procession", cost: 4, type: "Action" },
    { name: "Hunting Grounds", cost: 6, type: "Action" },
    { name: "Count", cost: 5, type: "Action" },
    { name: "Scavenger", cost: 4, type: "Action" },
    { name: "Feodum", cost: 4, type: "Victory" },
    { name: "Fortress", cost: 4, type: "Action" },
    { name: "Forager", cost: 3, type: "Action" },
    { name: "Catacombs", cost: 5, type: "Action" },
    { name: "Counterfeit", cost: 5, type: "Treasure" },
    { name: "Pillage", cost: 5, type: "Attack, Action" },
    { name: "Beggar", cost: 2, type: "Reaction, Action" },
];

const guildsCornucopiaCards = [
    { name: "Farming Village", cost: 4, type: "Action" },
    { name: "Fortune Teller", cost: 3, type: "Attack, Action" },
    { name: "Hamlet", cost: 2, type: "Action" },
    { name: "Harvest", cost: 5, type: "Action" },
    { name: "Horn of Plenty", cost: 5, type: "Treasure" },
    { name: "Horse Traders", cost: 4, type: "Action, Reaction" },
    { name: "Fairgrounds", cost: 6, type: "Victory" },
    { name: "Advisor", cost: 4, type: "Action" },
    { name: "Baker", cost: 5, type: "Action" },
    { name: "Butcher", cost: 5, type: "Action" },
    { name: "Candlestick Maker", cost: 2, type: "Action" },
    { name: "Doctor", cost: 3, type: "Action" },
    { name: "Herald", cost: 3, type: "Action" },
    { name: "Hunting Party", cost: 5, type: "Action" },
    { name: "Jester", cost: 5, type: "Attack, Action" },
    { name: "Menagerie", cost: 3, type: "Action" },
    { name: "Remake", cost: 4, type: "Action" },
    { name: "Tournament", cost: 4, type: "Action" },
    { name: "Young Witch", cost: 4, type: "Attack, Action" },
    { name: "Journeyman", cost: 5, type: "Action" },
    { name: "Masterpiece", cost: 3, type: "Treasure" },
    { name: "Merchant Guild", cost: 5, type: "Action" },
    { name: "Plaza", cost: 4, type: "Action" },
    { name: "Soothsayer", cost: 5, type: "Attack, Action" },
    { name: "Stonemason", cost: 2, type: "Action" },
    { name: "Taxman", cost: 4, type: "Attack, Action" }
];
];

function generateSupply() {
    const includeAttack = document.getElementById("include-attack").checked;
    const balancedCost = document.getElementById("balanced-cost").checked;
    const includeBaseSet = document.getElementById("include-base-set").checked;
    const includeDarkAges = document.getElementById("include-dark-ages").checked;
    const includeGuildsCornucopia = document.getElementById("include-guilds-cornucopia").checked;

    // Combine selected sets
    let filteredCards = [];
    if (includeBaseSet) filteredCards = filteredCards.concat(baseSetCards);
    if (includeDarkAges) filteredCards = filteredCards.concat(darkAgesCards);
    if (includeGuildsCornucopia) filteredCards = filteredCards.concat(guildsCornucopiaCards);

    // Apply the "Include Attack" filter
    if (!includeAttack) {
        filteredCards = filteredCards.filter(card => !card.type.includes("Attack"));
    }

    // Generate the supply
    let supply = [];
    if (balancedCost) {
        const costs = [2, 3, 4, 5, 6];
        costs.forEach(cost => {
            const costCards = filteredCards.filter(card => card.cost === cost);
            if (costCards.length > 0) {
                supply.push(costCards[Math.floor(Math.random() * costCards.length)]);
            }
        });
    }

    // Add random cards until we have 10
    while (supply.length < 10 && filteredCards.length > 0) {
        const randomCard = filteredCards[Math.floor(Math.random() * filteredCards.length)];
        if (!supply.includes(randomCard)) {
            supply.push(randomCard);
        }
    }

    displaySupply(supply);
}

function displaySupply(supply) {
    const supplyList = document.getElementById("supply-list");
    supplyList.innerHTML = ""; // Clear previous supply
    supply.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.textContent = `${card.name} (Cost: ${card.cost}, Type: ${card.type})`;
        cardElement.className = "card";
        supplyList.appendChild(cardElement);
    });
}

function saveSet() {
    const setName = document.getElementById("set-name").value.trim();
    const supplyList = Array.from(document.getElementById("supply-list").children);

    if (!setName || supplyList.length === 0) {
        alert("Enter a set name and generate a supply first!");
        return;
    }

    const setCards = supplyList.map(el => el.textContent);
    savedSets.push({ name: setName, cards: setCards });

    displaySavedSets();
}

function displaySavedSets() {
    const savedSetsDiv = document.getElementById("saved-sets");
    savedSetsDiv.innerHTML = ""; // Clear previous saved sets

    savedSets.forEach(set => {
        const setElement = document.createElement("div");
        setElement.className = "saved-set";
        setElement.innerHTML = `
            <strong>${set.name}</strong><br>
            ${set.cards.join("<br>")}
        `;
        savedSetsDiv.appendChild(setElement);
    });
}
