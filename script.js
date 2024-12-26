//defining base card names,cost,type,image
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

//defining dark ages card names,cost,type,image
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

//defining guilds cornucopia card names,cost,type,image
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
    { name: "Herald", cost: 4, type: "Action", image: "images/Herald.jpg" },
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

const seasideCards = [
 { name: "Astrolabe", cost: 3, type: "Action, Treasure", image: "images/Astrolabe.jpg" },
 { name: "Bazaar", cost: 5, type: "Action", image: "images/Bazaar.jpg" },
 { name: "Blockade", cost: 4, type: "Action, Attack", image: "images/Blockade.jpg" },
 { name: "Caravan", cost: 4, type: "Action", image: "images/Caravan.jpg" },
 { name: "Corsair", cost: 5, type: "Action, Attack", image: "images/Corsair.jpg" },
 { name: "Cutpurse", cost: 4, type: "Action, Attack", image: "images/Cutpurse.jpg" },
 { name: "Fishing Village", cost: 3, type: "Action", image: "images/FishingVillage.jpg" }, 
 { name: "Haven", cost: 2, type: "Action", image: "images/Haven.jpg" },
 { name: "Island", cost: 4, type: "Action, Victory", image: "images/Island.jpg" },
 { name: "Lighthouse", cost: 2, type: "Action", image: "images/Lighthouse.jpg" },
 { name: "Lookout", cost: 3, type: "Action", image: "images/Lookout.jpg" },
 { name: "Merchant Ship", cost: 5, type: "Action", image: "images/MerchantShip.jpg" },
 { name: "Monkey", cost: 3, type: "Action", image: "images/Monkey.jpg" },
 { name: "Native Village", cost: 2, type: "Action", image: "images/NativeVillage.jpg" },
 { name: "Outpost", cost: 5, type: "Action", image: "images/Outpost.jpg" },
 { name: "Pirate", cost: 5, type: "Action, Reaction", image: "images/Pirate.jpg" },
 { name: "Sailor", cost: 4, type: "Action", image: "images/Sailor.jpg" },
 { name: "Salvager", cost: 4, type: "Action", image: "images/Salvager.jpg" },
 { name: "Sea Chart", cost: 3, type: "Action", image: "images/SeaChart.jpg" },
 { name: "Sea Witch", cost: 5, type: "Action", image: "images/SeaWitch.jpg" },
 { name: "Smugglers", cost: 3, type: "Action", image: "images/Smugglers.jpg" },
 { name: "Tactician", cost: 5, type: "Action", image: "images/Tactician.jpg" },
 { name: "Tide Pools", cost: 4, type: "Action", image: "images/TidePools.jpg" },
 { name: "Treasure Map", cost: 4, type: "Action", image: "images/TreasureMap.jpg" },
 { name: "Treasury", cost: 5, type: "Action", image: "images/Treasury.jpg" },
 { name: "Warehouse", cost: 3, type: "Action", image: "images/Warehouse.jpg" },
 { name: "Wharf", cost: 5, type: "Action", image: "images/Wharf.jpg" },
];


// var savedSets = []; // To store saved sets

//main function, generates set of cards
function generateSupply() {
    const includeAttack = document.getElementById("include-attack").checked;
    const balancedCost = document.getElementById("balanced-cost").checked;
    const includeBaseSet = document.getElementById("include-base-set").checked;
    const includeDarkAges = document.getElementById("include-dark-ages").checked;
    const includeGuildsCornucopia = document.getElementById("include-guilds-cornucopia").checked;
  const includeSeaside = document.getElementById("include-seaside").checked;

    // Combine selected sets
    let filteredCards = [];
    if (includeBaseSet) filteredCards = filteredCards.concat(baseSetCards);
    if (includeDarkAges) filteredCards = filteredCards.concat(darkAgesCards);
    if (includeGuildsCornucopia) filteredCards = filteredCards.concat(guildsCornucopiaCards);
    if (includeSeaside) filteredCards = filteredCards.concat(seasideCards);

    // Apply the "Include Attack" filter
    if (!includeAttack) {
        filteredCards = filteredCards.filter(card => !card.type.includes("Attack"));
    }

    // Generate the supply
    const supply = [];
    const usedCards = new Set();

    if (balancedCost) {
        const costs = [2, 3, 4, 5];
        costs.forEach(cost => {
            const costCards = filteredCards.filter(card => card.cost === cost);
            if (costCards.length > 0) {
                let randomCard;
                do {
                    randomCard = costCards[Math.floor(Math.random() * costCards.length)];
                } while (usedCards.has(randomCard.name));
                supply.push(randomCard);
                usedCards.add(randomCard.name);
            }
        });
    }

    // Add random cards until we have 10
    while (supply.length < 10 && filteredCards.length > 0) {
        let randomCard;
        do {
            randomCard = filteredCards[Math.floor(Math.random() * filteredCards.length)];
        } while (usedCards.has(randomCard.name));
        supply.push(randomCard);
        usedCards.add(randomCard.name);
    }

    // Sort the supply cards by cost (ascending)
    supply.sort((a, b) => a.cost - b.cost);

    // Determine additional setup cards
   const additionalCards = getAdditionalSetupCards(supply, filteredCards);


    // Call the display function
    displaySupply(supply, additionalCards);
}

function getAdditionalSetupCards(supply, filteredCards) {
    const additionalCardsMap = {
        "Soothsayer": [{ name: "Curse", image: "images/Curse.jpg" }],
        "Witch": [{ name: "Curse", image: "images/Curse.jpg" }],
        "Young Witch": [{ name: "Curse", image: "images/Curse.jpg" }],
        "Jester": [{ name: "Curse", image: "images/Curse.jpg" }],
        "Baker": [{ name: "Coffers", image: "images/Coffers.jpg" }],
        "Butcher": [{ name: "Coffers", image: "images/Coffers.jpg" }],
        "Candlestick Maker": [{ name: "Coffers", image: "images/Coffers.jpg" }],
        "Plaza": [{ name: "Coffers", image: "images/Coffers.jpg" }],
        "Merchant Guild": [{ name: "Coffers", image: "images/Coffers.jpg" }],
        "Hermit": [{ name: "Madman", image: "images/Madman.jpg" }],
        "Urchin": [{ name: "Mercenary", image: "images/Mercenary.jpg" }],
        "Tournament": [
            { name: "Prizes", image: "images/Prizes.jpg" },
            { name: "Curse", image: "images/Curse.jpg" }
        ],
        "Cultist": [{ name: "Ruins", image: "images/Ruins.jpg" }],
        "Death Cart": [{ name: "Ruins", image: "images/Ruins.jpg" }],
        "Marauder": [
            { name: "Ruins", image: "images/Ruins.jpg" },
            { name: "Spoils", image: "images/Spoils.jpg" }
        ],
        "Pillage": [{ name: "Spoils", image: "images/Spoils.jpg" }],
     "Island": [{ name: "Island Mat", image: "images/IslandMat.jpg" }],
     "Native Village": [{ name: "Native Village Mat", image: "images/NativeVillageMat.jpg" }],
     "Blockade": [{ name: "Curse", image: "images/Curse.jpg" }],
     "Sea Witch": [{ name: "Curse", image: "images/Curse.jpg" }],
        "Bandit Camp": [{ name: "Spoils", image: "images/Spoils.jpg" }]
    };

    const additionalCards = [];

    const addCardAndDependencies = card => {
        if (additionalCardsMap[card.name]) {
            additionalCardsMap[card.name].forEach(extraCard => {
                if (!additionalCards.find(ac => ac.name === extraCard.name)) {
                    additionalCards.push(extraCard);
                }
            });
        }
    };

    supply.forEach(card => {
        if (!card) {
            console.error("Skipping undefined or invalid card:", card);
            return;
        }

        // Add dependencies for cards in the supply
        addCardAndDependencies(card);

        // Special case for Young Witch: Add a random card costing 2-3 as an additional card
        if (card.name === "Young Witch") {
            const possibleBaneCards = filteredCards.filter(
                c =>
                    c.cost >= 2 &&
                    c.cost <= 3 &&
                    c.name !== "Young Witch" &&
                    !supply.find(sc => sc.name === c.name) // Exclude cards already in the supply
            );

            if (possibleBaneCards.length > 0) {
                const baneCard = possibleBaneCards[Math.floor(Math.random() * possibleBaneCards.length)];
                if (!additionalCards.find(ac => ac.name === baneCard.name)) {
                    additionalCards.push({
                        name: baneCard.name,
                        image: baneCard.image
                    });
                }

                // Add dependencies for the Bane card
                addCardAndDependencies(baneCard);
            }
        }
    });

    return additionalCards;
}

function displaySupply(supply, additionalCards = []) {
    const supplyList = document.getElementById("supply-list");
    supplyList.innerHTML = ""; // Clear previous supply

    // Display the 10 sorted cards
    supply.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.name}">
        `;
        supplyList.appendChild(cardElement);
    });

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
            `;
            supplyList.appendChild(extraCardElement);
        });
    }
}


// Example usage (ensure this is connected to your button):
document.getElementById("generate-supply").addEventListener("click", generateSupply);

console.log("Filtered Cards:", filteredCards);
console.log("Final Supply:", supply);
