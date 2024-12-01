const baseSetCards = [
 { name: "Artisan", cost: 6, type: "Action", image: "images/Artisan.jpg" },
    { name: "Bandit", cost: 5, type: "Attack, Action", image: "images/Bandit.jpg" },
    { name: "Bureaucrat", cost: 4, type: "Attack, Action", image: "images/Bureaucrat.jpg" },
    { name: "Cellar", cost: 2, type: "Action", image: "images/Cellar.jpg" },
    { name: "Chapel", cost: 2, type: "Action", image: "images/Chapel.jpg" },
    { name: "Council Room", cost: 5, type: "Action", image: "images/CouncilRoom.jpg" },
    { name: "Festival", cost: 5, type: "Action", image: "images/Festival.jpg" },
    { name: "Harbinger", cost: 3, type: "Action", image: "images/Harbinger.jpg" },
    { name: "Laboratory", cost: 5, type: "Action", image: "images/Laboratory.jpg" },
    { name: "Library", cost: 5, type: "Action", image: "images/Library.jpg" },
    { name: "Market", cost: 5, type: "Action", image: "images/Market.jpg" },
    { name: "Merchant", cost: 3, type: "Action", image: "images/Merchant.jpg" },
    { name: "Militia", cost: 4, type: "Attack, Action", image: "images/Militia.jpg" },
    { name: "Mine", cost: 5, type: "Action", image: "images/Mine.jpg" },
    { name: "Moat", cost: 2, type: "Reaction, Action", image: "images/Moat.jpg" },
    { name: "Moneylender", cost: 4, type: "Action", image: "images/Moneylender.jpg" },
    { name: "Poacher", cost: 4, type: "Action", image: "images/Poacher.jpg" },
    { name: "Remodel", cost: 4, type: "Action", image: "images/Remodel.jpg" },
    { name: "Sentry", cost: 5, type: "Action", image: "images/Sentry.jpg" },
    { name: "Smithy", cost: 4, type: "Action", image: "images/Smithy.jpg" },
    { name: "Throne Room", cost: 4, type: "Action", image: "images/ThroneRoom.jpg" },
    { name: "Vassal", cost: 3, type: "Action", image: "images/Vassal.jpg" },
    { name: "Village", cost: 3, type: "Action", image: "images/Village.jpg" },
    { name: "Witch", cost: 5, type: "Attack, Action", image: "images/Witch.jpg" },
    { name: "Workshop", cost: 3, type: "Action", image: "images/Workshop.jpg" },
    { name: "Gardens", cost: 4, type: "Victory", image: "images/Gardens.jpg" },
];

const darkAgesCards = [
      { name: "Altar", cost: 6, type: "Action", image: "images/Altar.jpg" },
    { name: "Ironmonger", cost: 4, type: "Action", image: "images/Ironmonger.jpg" },
    { name: "Poor House", cost: 1, type: "Action", image: "images/PoorHouse.jpg" },
    { name: "Bandit Camp", cost: 5, type: "Action", image: "images/BanditCamp.jpg" },
    { name: "Rebuild", cost: 5, type: "Action", image: "images/Rebuild.jpg" },
    { name: "Rats", cost: 4, type: "Action", image: "images/Rats.jpg" },
    { name: "Marauder", cost: 4, type: "Attack, Action", image: "images/Marauder.jpg" },
    { name: "Vagrant", cost: 2, type: "Action", image: "images/Vagrant.jpg" },
    { name: "Graverobber", cost: 5, type: "Action", image: "images/Graverobber.jpg" },
    { name: "Mystic", cost: 5, type: "Action", image: "images/Mystic.jpg" },
    { name: "Cultist", cost: 5, type: "Action", image: "images/Cultist.jpg" },
    { name: "Hermit", cost: 3, type: "Action", image: "images/Hermit.jpg" },
    { name: "Death Cart", cost: 4, type: "Action", image: "images/DeathCart.jpg" },
    { name: "Urchin", cost: 3, type: "Attack, Action", image: "images/Urchin.jpg" },
    { name: "Wandering Minstrel", cost: 4, type: "Action", image: "images/WanderingMinstrel.jpg" },
    { name: "Market Square", cost: 3, type: "Reaction, Action", image: "images/MarketSquare.jpg" },
    { name: "Storeroom", cost: 3, type: "Action", image: "images/Storeroom.jpg" },
    { name: "Rogue", cost: 5, type: "Attack, Action", image: "images/Rogue.jpg" },
    { name: "Knights", cost: 5, type: "Attack, Action", image: "images/Knights.jpg" },
    { name: "Armory", cost: 4, type: "Action", image: "images/Armory.jpg" },
    { name: "Squire", cost: 2, type: "Action", image: "images/Squire.jpg" },
    { name: "Sage", cost: 3, type: "Action", image: "images/Sage.jpg" },
    { name: "Band of Misfits", cost: 5, type: "Action", image: "images/BandofMisfits.jpg" },
    { name: "Junk Dealer", cost: 5, type: "Action", image: "images/JunkDealer.jpg" },
    { name: "Procession", cost: 4, type: "Action", image: "images/Procession.jpg" },
    { name: "Hunting Grounds", cost: 6, type: "Action", image: "images/HuntingGrounds.jpg" },
    { name: "Count", cost: 5, type: "Action", image: "images/Count.jpg" },
    { name: "Scavenger", cost: 4, type: "Action", image: "images/Scavenger.jpg" },
    { name: "Feodum", cost: 4, type: "Victory", image: "images/Feodum.jpg" },
    { name: "Fortress", cost: 4, type: "Action", image: "images/Fortress.jpg" },
    { name: "Forager", cost: 3, type: "Action", image: "images/Forager.jpg" },
    { name: "Catacombs", cost: 5, type: "Action", image: "images/Catacombs.jpg" },
    { name: "Counterfeit", cost: 5, type: "Treasure", image: "images/Counterfeit.jpg" },
    { name: "Pillage", cost: 5, type: "Attack, Action", image: "images/Pillage.jpg" },
    { name: "Beggar", cost: 2, type: "Reaction, Action", image: "images/Beggar.jpg" },
];

const guildsCornucopiaCards = [
    { name: "Farming Village", cost: 4, type: "Action", image: "images/FarmingVillage.jpg" },
    { name: "Fortune Teller", cost: 3, type: "Attack, Action", image: "images/FortuneTeller.jpg" },
    { name: "Hamlet", cost: 2, type: "Action", image: "images/Hamlet.jpg" },
    { name: "Harvest", cost: 5, type: "Action", image: "images/Harvest.jpg" },
    { name: "Horn of Plenty", cost: 5, type: "Treasure", image: "images/HornofPlenty.jpg" },
    { name: "Horse Traders", cost: 4, type: "Action, Reaction", image: "images/HorseTraders.jpg" },
    { name: "Fairgrounds", cost: 6, type: "Victory", image: "images/Fairgrounds.jpg" },
    { name: "Advisor", cost: 4, type: "Action", image: "images/Advisor.jpg" },
    { name: "Baker", cost: 5, type: "Action", image: "images/Baker.jpg" },
    { name: "Butcher", cost: 5, type: "Action", image: "images/Butcher.jpg" },
    { name: "Candlestick Maker", cost: 2, type: "Action", image: "images/CandlestickMaker.jpg" },
    { name: "Doctor", cost: 3, type: "Action", image: "images/Doctor.jpg" },
    { name: "Herald", cost: 3, type: "Action", image: "images/Herald.jpg" },
    { name: "Hunting Party", cost: 5, type: "Action", image: "images/HuntingParty.jpg" },
    { name: "Jester", cost: 5, type: "Attack, Action", image: "images/Jester.jpg" },
    { name: "Menagerie", cost: 3, type: "Action", image: "images/Menagerie.jpg" },
    { name: "Remake", cost: 4, type: "Action", image: "images/Remake.jpg" },
    { name: "Tournament", cost: 4, type: "Action", image: "images/Tournament.jpg" },
    { name: "Young Witch", cost: 4, type: "Attack, Action", image: "images/YoungWitch.jpg" },
    { name: "Journeyman", cost: 5, type: "Action", image: "images/Journeyman.jpg" },
    { name: "Masterpiece", cost: 3, type: "Treasure", image: "images/Masterpiece.jpg" },
    { name: "Merchant Guild", cost: 5, type: "Action", image: "images/MerchantGuild.jpg" },
    { name: "Plaza", cost: 4, type: "Action", image: "images/Plaza.jpg" },
    { name: "Soothsayer", cost: 5, type: "Attack, Action", image: "images/Soothsayer.jpg" },
    { name: "Stonemason", cost: 2, type: "Action", image: "images/Stonemason.jpg" },
    { name: "Taxman", cost: 4, type: "Attack, Action", image: "images/Taxman.jpg" }
];

let savedSets = []; // To store saved sets

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
        const costs = [2, 3, 4, 5];
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

    // Sort the supply cards by cost (ascending)
    supply.sort((a, b) => a.cost - b.cost);

    // Determine additional setup cards
    const additionalCards = getAdditionalSetupCards(supply);

    // Call the display function
    displaySupply(supply, additionalCards);
}

function getAdditionalSetupCards(supply) {
    const additionalCardsMap = {
        "Soothsayer": { name: "Curse", image: "images/Curse.jpg" },
        "Witch": { name: "Curse", image: "images/Curse.jpg" },
        "Young Witch": { name: "Curse", image: "images/Curse.jpg" },
        "Jester": { name: "Curse", image: "images/Curse.jpg" },
        "Baker": { name: "Coffers", image: "images/Coffers.jpg" },
       "Butcher": { name: "Coffers", image: "images/Coffers.jpg" },
       "Candlestick Maker": { name: "Coffers", image: "images/Coffers.jpg" },
       "Plaza": { name: "Coffers", image: "images/Coffers.jpg" },
       "Merchant Guild": { name: "Coffers", image: "images/Coffers.jpg" },
       "Hermit": { name: "Madman", image: "images/Madman.jpg" },
       "Urchin": { name: "Mercenary", image: "images/Mercenary.jpg" },
       "Tournament": { name: "Prizes", image: "images/Prizes.jpg" },
       "Cultist": { name: "Ruins", image: "images/Ruins.jpg" },
        "Death Cart": { name: "Ruins", image: "images/Ruins.jpg" },
        "Marauder": { name: "Ruins", image: "images/Ruins.jpg" },
        "Marauder": { name: "Spoils", image: "images/Spoils.jpg" },
            "Pillage": { name: "Spoils", image: "images/Spoils.jpg" },
            "Bandit Camp": { name: "Spoils", image: "images/Spoils.jpg" },

        // Add other special cards and their setup requirements here
    };

    const additionalCards = [];
    supply.forEach(card => {
        if (additionalCardsMap[card.name]) {
            const extraCard = additionalCardsMap[card.name];
            if (!additionalCards.find(ac => ac.name === extraCard.name)) {
                additionalCards.push(extraCard);
            }
        }
    });

    return additionalCards;
}

function displaySupplyByColumns(supply, columns = 2) {
    const supplyList = document.getElementById("supply-list");
    supplyList.innerHTML = ""; // Clear previous supply

    // Determine the number of rows based on the number of columns
    const rows = Math.ceil(supply.length / columns);

    // Create a 2D array to organize cards into columns
    const columnsArray = Array.from({ length: columns }, (_, colIndex) => {
        return supply.slice(colIndex * rows, (colIndex + 1) * rows);
    });

    // Reorganize cards to display by columns
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            const card = columnsArray[col][row];
            if (card) {
                const cardElement = document.createElement("div");
                cardElement.classList.add("card");
                cardElement.innerHTML = `
                    <img src="${card.image}" alt="${card.name}">
                    <p>${card.name} (${card.cost})</p>
                `;
                supplyList.appendChild(cardElement);
            }
        }
    }
}

    // Display additional setup cards
    if (additionalCards.length > 0) {
        const extraSetupHeader = document.createElement("h3");
        extraSetupHeader.textContent = "Additional Setup Cards:";
        supplyList.appendChild(extraSetupHeader);

        additionalCards.forEach(extraCard => {
            const extraCardElement = document.createElement("div");
            extraCardElement.classList.add("card");
            extraCardElement.innerHTML = `
                <img src="${extraCard.image}" alt="${extraCard.name}">
                <p>${extraCard.name}</p>
            `;
            supplyList.appendChild(extraCardElement);
        });
    }
}

// Example usage (ensure this is connected to your button):
document.getElementById("generate-supply").addEventListener("click", generateSupply);




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
