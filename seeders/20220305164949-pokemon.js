'use strict';
module.exports = {
 async up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Pokemon', [
    {
      "id": 1,
      "name": "bulbasaur",
      "baseExperience": 64,
      "height": 7,
      "weight": 69,
      "pokedexEntry": "For some time after its birth, it grows by taking nourishment from the seed on its back."
    },
    {
      "id": 2,
      "name": "ivysaur",
      "baseExperience": 142,
      "height": 10,
      "weight": 130,
      "pokedexEntry": "When the bud on its back starts swelling, a sweet aroma wafts to indicate the flower’s coming bloom."
    },
    {
      "id": 3,
      "name": "venusaur",
      "baseExperience": 263,
      "height": 20,
      "weight": 1000,
      "pokedexEntry": "After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon."
    },
    {
      "id": 4,
      "name": "charmander",
      "baseExperience": 62,
      "height": 6,
      "weight": 85,
      "pokedexEntry": "The fire on the tip of its tail is a measure of its life. If the Pokémon is healthy, its tail burns intensely."
    },
    {
      "id": 5,
      "name": "charmeleon",
      "baseExperience": 142,
      "height": 11,
      "weight": 190,
      "pokedexEntry": "In the rocky mountains where Charmeleon live, their fiery tails shine at night like stars."
    },
    {
      "id": 6,
      "name": "charizard",
      "baseExperience": 267,
      "height": 17,
      "weight": 905,
      "pokedexEntry": "It is said that Charizard’s fire burns hotter if it has experienced harsh battles."
    },
    {
      "id": 7,
      "name": "squirtle",
      "baseExperience": 63,
      "height": 5,
      "weight": 90,
      "pokedexEntry": "It hides in its shell to protect itself, then strikes back with spouts of water at every opportunity."
    },
    {
      "id": 8,
      "name": "wartortle",
      "baseExperience": 142,
      "height": 10,
      "weight": 225,
      "pokedexEntry": "It is said to live 10,000 years. Its furry tail is popular as a symbol of longevity."
    },
    {
      "id": 9,
      "name": "blastoise",
      "baseExperience": 265,
      "height": 16,
      "weight": 855,
      "pokedexEntry": "The jets of water it spouts from the rocket cannons on its shell can punch through thick steel."
    },
    {
      "id": 10,
      "name": "caterpie",
      "baseExperience": 39,
      "height": 3,
      "weight": 29,
      "pokedexEntry": "It releases a stench from its red antennae to repel enemies. It grows by molting repeatedly."
    },
    {
      "id": 11,
      "name": "metapod",
      "baseExperience": 72,
      "height": 7,
      "weight": 99,
      "pokedexEntry": "A steel-hard shell protects its tender body. The Pokémon quietly endures hardships while awaiting evolution."
    },
    {
      "id": 12,
      "name": "butterfree",
      "baseExperience": 198,
      "height": 11,
      "weight": 320,
      "pokedexEntry": "It loves the nectar of flowers and can locate flower patches that have even tiny amounts of pollen."
    },
    {
      "id": 13,
      "name": "weedle",
      "baseExperience": 39,
      "height": 3,
      "weight": 32,
      "pokedexEntry": "It eats its weight in leaves every day. It fends off attackers with the needle on its head."
    },
    {
      "id": 14,
      "name": "kakuna",
      "baseExperience": 72,
      "height": 6,
      "weight": 100,
      "pokedexEntry": "While awaiting evolution, it hides from predators under leaves and in nooks of branches."
    },
    {
      "id": 15,
      "name": "beedrill",
      "baseExperience": 178,
      "height": 10,
      "weight": 295,
      "pokedexEntry": "Its best attack involves flying around at high speed, striking with poison needles, then flying off."
    },
    {
      "id": 16,
      "name": "pidgey",
      "baseExperience": 50,
      "height": 3,
      "weight": 18,
      "pokedexEntry": "It is docile and prefers to avoid conflict. If disturbed, however, it can ferociously strike back."
    },
    {
      "id": 17,
      "name": "pidgeotto",
      "baseExperience": 122,
      "height": 11,
      "weight": 300,
      "pokedexEntry": "It flies over its wide territory in search of prey, downing it with its highly developed claws."
    },
    {
      "id": 18,
      "name": "pidgeot",
      "baseExperience": 216,
      "height": 15,
      "weight": 395,
      "pokedexEntry": "By flapping its wings with all its might, Pidgeot can make a gust of wind capable of bending tall trees."
    },
    {
      "id": 19,
      "name": "rattata",
      "baseExperience": 51,
      "height": 3,
      "weight": 35,
      "pokedexEntry": "It’s cautious in the extreme, and its hardy vitality lets it live in any kind of environment."
    },
    {
      "id": 20,
      "name": "raticate",
      "baseExperience": 145,
      "height": 7,
      "weight": 185,
      "pokedexEntry": "It whittles down its constantly growing fangs by gnawing on hard things. It can chew apart cinder block walls."
    },
    {
      "id": 21,
      "name": "spearow",
      "baseExperience": 52,
      "height": 3,
      "weight": 20,
      "pokedexEntry": "It flaps its small wings busily to fly. Using its beak, it searches in grass for prey."
    },
    {
      "id": 22,
      "name": "fearow",
      "baseExperience": 155,
      "height": 12,
      "weight": 380,
      "pokedexEntry": "It has the stamina to fly all day on its broad wings. It fights by using its sharp beak."
    },
    {
      "id": 23,
      "name": "ekans",
      "baseExperience": 58,
      "height": 20,
      "weight": 69,
      "pokedexEntry": "It sneaks through grass without making a sound and strikes unsuspecting prey from behind."
    },
    {
      "id": 24,
      "name": "arbok",
      "baseExperience": 157,
      "height": 35,
      "weight": 650,
      "pokedexEntry": "The pattern on its belly is for intimidation. It constricts foes while they are frozen in fear."
    },
    {
      "id": 25,
      "name": "pikachu",
      "baseExperience": 112,
      "height": 4,
      "weight": 60,
      "pokedexEntry": "Possesses cheek sacs in which it stores electricity. This clever forest-dweller roasts tough berries with an electric shock before consuming them."
    },
    {
      "id": 26,
      "name": "raichu",
      "baseExperience": 243,
      "height": 8,
      "weight": 300,
      "pokedexEntry": "It can discharge bursts of electricity exceeding 100,000 volts— a single strike with that amount of power would incapacitate one of the Copperajah of my homeland."
    },
    {
      "id": 27,
      "name": "sandshrew",
      "baseExperience": 60,
      "height": 6,
      "weight": 120,
      "pokedexEntry": "To protect itself from attackers, it curls up into a ball. It lives in arid regions with minimal rainfall."
    },
    {
      "id": 28,
      "name": "sandslash",
      "baseExperience": 158,
      "height": 10,
      "weight": 295,
      "pokedexEntry": "It curls up, then rolls into foes with its back. Its sharp spines inflict severe damage."
    },
    {
      "id": 29,
      "name": "nidoran-f",
      "baseExperience": 55,
      "height": 4,
      "weight": 70,
      "pokedexEntry": "While this Pokémon does not prefer to fight, even one drop of the venom it secretes from its barbs can be fatal."
    },
    {
      "id": 30,
      "name": "nidorina",
      "baseExperience": 128,
      "height": 8,
      "weight": 200,
      "pokedexEntry": "When it senses danger, it raises all the barbs on its body. These barbs grow more slowly than Nidorino’s."
    },
    {
      "id": 31,
      "name": "nidoqueen",
      "baseExperience": 253,
      "height": 13,
      "weight": 600,
      "pokedexEntry": "Its entire body is armored with hard scales. It will protect the young in its burrow with its life."
    },
    {
      "id": 32,
      "name": "nidoran-m",
      "baseExperience": 55,
      "height": 5,
      "weight": 90,
      "pokedexEntry": "It scans its surroundings by raising its ears out of the grass. Its toxic horn is for protection."
    },
    {
      "id": 33,
      "name": "nidorino",
      "baseExperience": 128,
      "height": 9,
      "weight": 195,
      "pokedexEntry": "It has a violent disposition and stabs foes with its horn, which oozes venom upon impact."
    },
    {
      "id": 34,
      "name": "nidoking",
      "baseExperience": 253,
      "height": 14,
      "weight": 620,
      "pokedexEntry": "One swing of its mighty tail can snap a telephone pole as if it were a matchstick."
    },
    {
      "id": 35,
      "name": "clefairy",
      "baseExperience": 113,
      "height": 6,
      "weight": 75,
      "pokedexEntry": "It can be found in quiet mountain areas on a full moon’s night. Its dancing and its tiny, faintly glowing wings confer upon it a lovely fairylike quality."
    },
    {
      "id": 36,
      "name": "clefable",
      "baseExperience": 242,
      "height": 13,
      "weight": 400,
      "pokedexEntry": "Legend says that on clear, quiet nights, it listens for the voices of its kin living on the moon. I, too, often think of my homeland, so far away."
    },
    {
      "id": 37,
      "name": "vulpix",
      "baseExperience": 60,
      "height": 6,
      "weight": 99,
      "pokedexEntry": "In its belly burns a fire, which Vulpix spits out in the form of fireballs. When young, this Pokémon has but one white tail. As the Pokémon matures, this single tail splits into six."
    },
    {
      "id": 38,
      "name": "ninetales",
      "baseExperience": 177,
      "height": 11,
      "weight": 199,
      "pokedexEntry": "The coat of gleaming golden fur is quite magnificent. This species is said to store sacred power in its nine long tails and to live for a millennium."
    },
    {
      "id": 39,
      "name": "jigglypuff",
      "baseExperience": 95,
      "height": 5,
      "weight": 55,
      "pokedexEntry": "When it wavers its big, round eyes, it begins singing a lullaby that makes everyone drowsy."
    },
    {
      "id": 40,
      "name": "wigglytuff",
      "baseExperience": 218,
      "height": 10,
      "weight": 120,
      "pokedexEntry": "Its fine fur feels sublime to the touch. It can expand its body by inhaling air."
    },
    {
      "id": 41,
      "name": "zubat",
      "baseExperience": 49,
      "height": 8,
      "weight": 75,
      "pokedexEntry": "Makes its home in gloomy caves. Atrophied eyes have left this Pokémon blind, so it scans its surroundings via sound waves that it emits from its mouth as it flies."
    },
    {
      "id": 42,
      "name": "golbat",
      "baseExperience": 159,
      "height": 16,
      "weight": 550,
      "pokedexEntry": "It sinks its sharp fangs into other creatures and slurps up their blood. A closer look at the fangs reveals that they are hollow and akin to straws."
    },
    {
      "id": 43,
      "name": "oddish",
      "baseExperience": 64,
      "height": 5,
      "weight": 54,
      "pokedexEntry": "It often plants its root feet in the ground during the day and sows seeds as it walks about at night."
    },
    {
      "id": 44,
      "name": "gloom",
      "baseExperience": 138,
      "height": 8,
      "weight": 86,
      "pokedexEntry": "The nectar it drools from its mouth smells so atrocious that it can make noses curl from more than a mile away."
    },
    {
      "id": 45,
      "name": "vileplume",
      "baseExperience": 245,
      "height": 12,
      "weight": 186,
      "pokedexEntry": "Its petals are the largest in the world. As it walks, it scatters extremely allergenic pollen."
    },
    {
      "id": 46,
      "name": "paras",
      "baseExperience": 57,
      "height": 3,
      "weight": 54,
      "pokedexEntry": "Sometimes seen at the foot of trees in humid forests. The mushrooms on its back—called tochukaso—are not present on infant specimens and instead emerge as Paras matures."
    },
    {
      "id": 47,
      "name": "parasect",
      "baseExperience": 142,
      "height": 10,
      "weight": 295,
      "pokedexEntry": "Mushroom-lacking specimens of this Pokémon lie unmoving in the forest, lending credence to the hypothesis that the large mushroom is in control of Parasect’s actions."
    },
    {
      "id": 48,
      "name": "venonat",
      "baseExperience": 61,
      "height": 10,
      "weight": 300,
      "pokedexEntry": "Its big eyes are actually clusters of tiny eyes. At night, its kind is drawn by light."
    },
    {
      "id": 49,
      "name": "venomoth",
      "baseExperience": 158,
      "height": 15,
      "weight": 125,
      "pokedexEntry": "It flutters its wings to scatter dustlike scales. The scales leach toxins if they contact skin."
    },
    {
      "id": 50,
      "name": "diglett",
      "baseExperience": 53,
      "height": 2,
      "weight": 8,
      "pokedexEntry": "This Pokémon lives underground. Because of its dark habitat, it is repelled by bright sunlight."
    },
    {
      "id": 51,
      "name": "dugtrio",
      "baseExperience": 149,
      "height": 7,
      "weight": 333,
      "pokedexEntry": "Its three heads move alternately, driving it through tough soil to depths of over 60 miles."
    },
    {
      "id": 52,
      "name": "meowth",
      "baseExperience": 58,
      "height": 4,
      "weight": 42,
      "pokedexEntry": "It is nocturnal by nature. If it spots something shiny, its eyes glitter as brightly as the shiny object."
    },
    {
      "id": 53,
      "name": "persian",
      "baseExperience": 154,
      "height": 10,
      "weight": 320,
      "pokedexEntry": "It is a very haughty Pokémon. Among fans of Persian, the size of the jewel in its forehead is a topic of much talk."
    },
    {
      "id": 54,
      "name": "psyduck",
      "baseExperience": 64,
      "height": 8,
      "weight": 196,
      "pokedexEntry": "Suffers perpetual headaches. If the agony grows too great, Psyduck’s latent power erupts, contrary to Psyduck’s intent. Ergo, I am exploring ways to ease the pain."
    },
    {
      "id": 55,
      "name": "golduck",
      "baseExperience": 175,
      "height": 17,
      "weight": 766,
      "pokedexEntry": "Its body is strong, and it has webbing on its hands and feet. Golduck can swim easily through rough seas, clawing its way through the high waves."
    },
    {
      "id": 56,
      "name": "mankey",
      "baseExperience": 61,
      "height": 5,
      "weight": 280,
      "pokedexEntry": "It lives in treetop colonies. If one member of the group becomes enraged, the whole colony rampages for no reason."
    },
    {
      "id": 57,
      "name": "primeape",
      "baseExperience": 159,
      "height": 10,
      "weight": 320,
      "pokedexEntry": "It becomes angry if it sees an opponent’s eyes and gets angrier if the opponent runs. Even after it beats the opponent, it is still angry."
    },
    {
      "id": 58,
      "name": "growlithe",
      "baseExperience": 70,
      "height": 7,
      "weight": 190,
      "pokedexEntry": "It is a Pokémon with a loyal nature. It will remain motionless until it is given an order by its Trainer."
    },
    {
      "id": 59,
      "name": "arcanine",
      "baseExperience": 194,
      "height": 19,
      "weight": 1550,
      "pokedexEntry": "Its proud and regal appearance has captured the hearts of people since long ago."
    },
    {
      "id": 60,
      "name": "poliwag",
      "baseExperience": 60,
      "height": 6,
      "weight": 124,
      "pokedexEntry": "Its skin is so thin, its internal organs are visible. It has trouble walking on its newly grown feet."
    },
    {
      "id": 61,
      "name": "poliwhirl",
      "baseExperience": 135,
      "height": 10,
      "weight": 200,
      "pokedexEntry": "The spiral pattern on its belly subtly undulates. Staring at it gradually causes drowsiness."
    },
    {
      "id": 62,
      "name": "poliwrath",
      "baseExperience": 255,
      "height": 13,
      "weight": 540,
      "pokedexEntry": "With its extremely tough muscles, it could keep swimming in the Pacific Ocean without resting."
    },
    {
      "id": 63,
      "name": "abra",
      "baseExperience": 62,
      "height": 9,
      "weight": 195,
      "pokedexEntry": "Spends 18 hours of the day sleeping. Even while asleep, Abra can control its psychic powers—should danger approach, the Pokémon will simply teleport away."
    },
    {
      "id": 64,
      "name": "kadabra",
      "baseExperience": 140,
      "height": 13,
      "weight": 565,
      "pokedexEntry": "There are rumors that a child with mystical powers became a Kadabra; however, this remains unverified. I suspect that the spoon Kadabra holds enhances its brain waves."
    },
    {
      "id": 65,
      "name": "alakazam",
      "baseExperience": 250,
      "height": 15,
      "weight": 480,
      "pokedexEntry": "The longer Alakazam lives, the larger and heavier its head becomes. Our tests have shown that the strength of its psychic powers correlates positively to the weight of its head."
    },
    {
      "id": 66,
      "name": "machop",
      "baseExperience": 61,
      "height": 8,
      "weight": 195,
      "pokedexEntry": "Though as small as a child, it has strength enough to easily throw a well-built adult. Striving to become ever stronger, Machop trains by carrying a Graveler on its shoulders."
    },
    {
      "id": 67,
      "name": "machoke",
      "baseExperience": 142,
      "height": 15,
      "weight": 705,
      "pokedexEntry": "A sturdy creature boasting a robust physique and boundless stamina. Loves training above all else and voluntarily assists with tasks such as construction and clearing land."
    },
    {
      "id": 68,
      "name": "machamp",
      "baseExperience": 253,
      "height": 16,
      "weight": 1300,
      "pokedexEntry": "In close combat, its four arms afford it offensive and defensive supremacy. In but a blink, this valiant Pokémon can overwhelm its foes with more than 1,000 blows from its fists."
    },
    {
      "id": 69,
      "name": "bellsprout",
      "baseExperience": 60,
      "height": 7,
      "weight": 40,
      "pokedexEntry": "It prefers hot and humid environments. It is quick at capturing prey with its vines."
    },
    {
      "id": 70,
      "name": "weepinbell",
      "baseExperience": 137,
      "height": 10,
      "weight": 64,
      "pokedexEntry": "This Pokémon has the appearance of a plant. It captures unwary prey by dousing them with a toxic powder."
    },
    {
      "id": 71,
      "name": "victreebel",
      "baseExperience": 221,
      "height": 17,
      "weight": 155,
      "pokedexEntry": "In its mouth, it pools a fragrant nectar-like fluid. The fluid is really an acid that dissolves anything."
    },
    {
      "id": 72,
      "name": "tentacool",
      "baseExperience": 67,
      "height": 9,
      "weight": 455,
      "pokedexEntry": "They fire beams from the glassy, magenta orbs that resemble eyes atop their heads, and they drift in shallow seas. During low tide, they can sometimes be found on beaches, desiccated."
    },
    {
      "id": 73,
      "name": "tentacruel",
      "baseExperience": 180,
      "height": 16,
      "weight": 550,
      "pokedexEntry": "It has 80 tentacles, each with a venomous tip. These tentacles are also extendible, lengthening when Tentacruel attempts to catch prey. Use caution."
    },
    {
      "id": 74,
      "name": "geodude",
      "baseExperience": 60,
      "height": 4,
      "weight": 200,
      "pokedexEntry": "Makes its home in mountainous regions, using its arms to climb along harsh mountain roads. Can be troublesome—carelessly kicking one will cause it to fly into a rage and chase after you."
    },
    {
      "id": 75,
      "name": "graveler",
      "baseExperience": 137,
      "height": 10,
      "weight": 1050,
      "pokedexEntry": "Dwells in holes dug into sheer walls of stone. It enjoys rolling down slopes as though it were a boulder during a rockfall, so keep an eye upward while traversing mountain roads."
    },
    {
      "id": 76,
      "name": "golem",
      "baseExperience": 223,
      "height": 14,
      "weight": 3000,
      "pokedexEntry": "The rocklike shell is shed each year. The cast-off shell then crumbles, reverting to a mass of soil, which can be spread across fields to promote crop growth."
    },
    {
      "id": 77,
      "name": "ponyta",
      "baseExperience": 82,
      "height": 10,
      "weight": 300,
      "pokedexEntry": "These Pokémon live in herds out in the grassland. Newborn foals lack their fiery manes, which will develop about an hour after birth."
    },
    {
      "id": 78,
      "name": "rapidash",
      "baseExperience": 175,
      "height": 17,
      "weight": 950,
      "pokedexEntry": "Fiery mane aglow, Rapidash darts like an arrow across the land. This prodigiously swift creature can traverse the vast region of Hisui in a day and a half."
    },
    {
      "id": 79,
      "name": "slowpoke",
      "baseExperience": 63,
      "height": 12,
      "weight": 360,
      "pokedexEntry": "Although slow, it is skilled at fishing with its tail. It does not feel pain if its tail is bitten."
    },
    {
      "id": 80,
      "name": "slowbro",
      "baseExperience": 172,
      "height": 16,
      "weight": 785,
      "pokedexEntry": "Though usually dim-witted, it seems to become inspired if the Shellder on its tail bites down."
    },
    {
      "id": 81,
      "name": "magnemite",
      "baseExperience": 65,
      "height": 3,
      "weight": 60,
      "pokedexEntry": "A bizarre Pokémon with but a single eye embedded in an iron sphere. I suspect this creature levitates due to the magnetism it emits from its arms, which resemble horseshoe-shaped magnets."
    },
    {
      "id": 82,
      "name": "magneton",
      "baseExperience": 163,
      "height": 10,
      "weight": 600,
      "pokedexEntry": "Three Magnemite gathered to evolve into this Pokémon. The source of much vexation on my part, as its powerful magnetism destroys my research equipment."
    },
    {
      "id": 83,
      "name": "farfetchd",
      "baseExperience": 132,
      "height": 8,
      "weight": 150,
      "pokedexEntry": "It can’t live without the stalk it holds. That’s why it defends the stalk from attackers with its life."
    },
    {
      "id": 84,
      "name": "doduo",
      "baseExperience": 62,
      "height": 14,
      "weight": 392,
      "pokedexEntry": "The brains in its two heads appear to communicate emotions to each other with a telepathic power."
    },
    {
      "id": 85,
      "name": "dodrio",
      "baseExperience": 165,
      "height": 18,
      "weight": 852,
      "pokedexEntry": "When Doduo evolves into this odd breed, one of its heads splits into two. This Pokémon runs at nearly 40 mph."
    },
    {
      "id": 86,
      "name": "seel",
      "baseExperience": 65,
      "height": 11,
      "weight": 900,
      "pokedexEntry": "This Pokémon lives on icebergs. It uses the sharp point on its head to break up ice as it swims in the sea."
    },
    {
      "id": 87,
      "name": "dewgong",
      "baseExperience": 166,
      "height": 17,
      "weight": 1200,
      "pokedexEntry": "In snow, the pure white coat covering its body obscures it from predators."
    },
    {
      "id": 88,
      "name": "grimer",
      "baseExperience": 65,
      "height": 9,
      "weight": 300,
      "pokedexEntry": "It was born when sludge in a dirty stream was exposed to the moon’s X-rays. It appears among filth."
    },
    {
      "id": 89,
      "name": "muk",
      "baseExperience": 175,
      "height": 12,
      "weight": 300,
      "pokedexEntry": "A toxic fluid seeps from its body. The fluid kills plants and trees immediately upon contact."
    },
    {
      "id": 90,
      "name": "shellder",
      "baseExperience": 61,
      "height": 3,
      "weight": 40,
      "pokedexEntry": "It swims backward by opening and closing its two shells. Its large tongue is always kept hanging out."
    },
    {
      "id": 91,
      "name": "cloyster",
      "baseExperience": 184,
      "height": 15,
      "weight": 1325,
      "pokedexEntry": "It fights by keeping its shell tightly shut for protection and by shooting spikes to repel foes."
    },
    {
      "id": 92,
      "name": "gastly",
      "baseExperience": 62,
      "height": 13,
      "weight": 1,
      "pokedexEntry": "Gaseous and completely impalpable. Also highly dangerous— inhaling part of its poisonous body will cause one to faint instantly."
    },
    {
      "id": 93,
      "name": "haunter",
      "baseExperience": 142,
      "height": 16,
      "weight": 1,
      "pokedexEntry": "This frightful, malevolent spirit can glide through walls, appearing wherever it likes. According to rumor, victims of a Haunter’s lick will wither to death day by day."
    },
    {
      "id": 94,
      "name": "gengar",
      "baseExperience": 250,
      "height": 15,
      "weight": 405,
      "pokedexEntry": "Possesses potential victims’ shadows in an effort to steal away the victims’ lives. If your shadow begins to laugh, you must take hold of a protective charm posthaste!"
    },
    {
      "id": 95,
      "name": "onix",
      "baseExperience": 77,
      "height": 88,
      "weight": 2100,
      "pokedexEntry": "This chain of immense stones resembles a giant serpent. Tremors shake the earth above as it burrows deep beneath the ground, feeding on boulders as it goes."
    },
    {
      "id": 96,
      "name": "drowzee",
      "baseExperience": 66,
      "height": 10,
      "weight": 324,
      "pokedexEntry": "It can tell what people are dreaming by sniffing with its big nose. It loves fun dreams."
    },
    {
      "id": 97,
      "name": "hypno",
      "baseExperience": 169,
      "height": 16,
      "weight": 756,
      "pokedexEntry": "Seeing its swinging pendulum can induce sleep in three seconds, even in someone who just woke up."
    },
    {
      "id": 98,
      "name": "krabby",
      "baseExperience": 65,
      "height": 4,
      "weight": 65,
      "pokedexEntry": "It lives in burrows dug on sandy beaches. Its pincers fully grow back if they are lost in battle."
    },
    {
      "id": 99,
      "name": "kingler",
      "baseExperience": 166,
      "height": 13,
      "weight": 600,
      "pokedexEntry": "The larger pincer has 10,000-horsepower strength. However, it is so heavy, it is difficult to aim."
    },
    {
      "id": 100,
      "name": "voltorb",
      "baseExperience": 66,
      "height": 5,
      "weight": 104,
      "pokedexEntry": "It looks just like a Poké Ball. It is dangerous because it may electrocute or explode on touch."
    },
    {
      "id": 101,
      "name": "electrode",
      "baseExperience": 172,
      "height": 12,
      "weight": 666,
      "pokedexEntry": "It is known to drift on winds if it is bloated to bursting with stored electricity."
    },
    {
      "id": 102,
      "name": "exeggcute",
      "baseExperience": 65,
      "height": 4,
      "weight": 25,
      "pokedexEntry": "Its six eggs converse using telepathy. They can quickly gather if they become separated."
    },
    {
      "id": 103,
      "name": "exeggutor",
      "baseExperience": 186,
      "height": 20,
      "weight": 1200,
      "pokedexEntry": "It is called the Walking Jungle. If a head grows too big, it falls off and becomes an Exeggcute."
    },
    {
      "id": 104,
      "name": "cubone",
      "baseExperience": 64,
      "height": 4,
      "weight": 65,
      "pokedexEntry": "When it thinks of its dead mother, it cries. Its crying makes the skull it wears rattle hollowly."
    },
    {
      "id": 105,
      "name": "marowak",
      "baseExperience": 149,
      "height": 10,
      "weight": 450,
      "pokedexEntry": "The bones it uses have been in its possession since it was born. It has a ferocious nature."
    },
    {
      "id": 106,
      "name": "hitmonlee",
      "baseExperience": 159,
      "height": 15,
      "weight": 498,
      "pokedexEntry": "Its legs can stretch to double their length. First-time foes are startled by Hitmonlee’s extensible reach."
    },
    {
      "id": 107,
      "name": "hitmonchan",
      "baseExperience": 159,
      "height": 14,
      "weight": 502,
      "pokedexEntry": "When Hitmonchan twists its arm while throwing a punch, the blow will pulverize even concrete. The Pokémon rests after three minutes of fighting."
    },
    {
      "id": 108,
      "name": "lickitung",
      "baseExperience": 77,
      "height": 12,
      "weight": 655,
      "pokedexEntry": "Wields its long tongue deftly, as though it were an arm. The Pokémon’s viscous saliva, once it has been collected and boiled down, yields a strong and highly useful adhesive."
    },
    {
      "id": 109,
      "name": "koffing",
      "baseExperience": 68,
      "height": 6,
      "weight": 10,
      "pokedexEntry": "Lighter-than-air gases in its body keep it aloft. The gases not only smell; they are also explosive."
    },
    {
      "id": 110,
      "name": "weezing",
      "baseExperience": 172,
      "height": 12,
      "weight": 95,
      "pokedexEntry": "It grows by feeding on gases released by garbage. Though very rare, triplets have been found."
    },
    {
      "id": 111,
      "name": "rhyhorn",
      "baseExperience": 69,
      "height": 10,
      "weight": 1150,
      "pokedexEntry": "Ludicrously strong—when it butts heads with a mountain, it is the mountain that shatters. But its short legs struggle with turns, and it is incapable of stopping unless it collides with something."
    },
    {
      "id": 112,
      "name": "rhydon",
      "baseExperience": 170,
      "height": 19,
      "weight": 1200,
      "pokedexEntry": "Rapidly rotates its horn to bore through bedrock. It swaggers around volcanic regions, protected from the lava’s heat by its tough, armorlike hide."
    },
    {
      "id": 113,
      "name": "chansey",
      "baseExperience": 395,
      "height": 11,
      "weight": 346,
      "pokedexEntry": "This purehearted Pokémon shares its eggs with the injured. These eggs are so nutritious that they’ve been nicknamed “doctors’ doubles.”"
    },
    {
      "id": 114,
      "name": "tangela",
      "baseExperience": 87,
      "height": 10,
      "weight": 350,
      "pokedexEntry": "It is cloaked entirely in blue vines, preventing any glimpse of its true identity. The vines impart a refreshing sensation when chewed—they’re useful as a spice."
    },
    {
      "id": 115,
      "name": "kangaskhan",
      "baseExperience": 172,
      "height": 22,
      "weight": 800,
      "pokedexEntry": "It raises its offspring in its belly pouch. It lets its baby out to play only when it feels safe to do so."
    },
    {
      "id": 116,
      "name": "horsea",
      "baseExperience": 59,
      "height": 4,
      "weight": 80,
      "pokedexEntry": "It makes its nest in the shade of corals. If it senses danger, it spits black ink and flees."
    },
    {
      "id": 117,
      "name": "seadra",
      "baseExperience": 154,
      "height": 12,
      "weight": 250,
      "pokedexEntry": "Its spines provide protection. Its fins and bones are prized as traditional medicine ingredients."
    },
    {
      "id": 118,
      "name": "goldeen",
      "baseExperience": 64,
      "height": 6,
      "weight": 150,
      "pokedexEntry": "It swims at a steady five knots. If it senses danger, it will strike back with its sharp horn."
    },
    {
      "id": 119,
      "name": "seaking",
      "baseExperience": 158,
      "height": 13,
      "weight": 390,
      "pokedexEntry": "To protect its family, it will fight with its drill-sharp horn. It lives in hollowed rocks in streams."
    },
    {
      "id": 120,
      "name": "staryu",
      "baseExperience": 68,
      "height": 8,
      "weight": 345,
      "pokedexEntry": "If Staryu’s body is damaged, it will regenerate as long as the red core remains. The core flashes at midnight."
    },
    {
      "id": 121,
      "name": "starmie",
      "baseExperience": 182,
      "height": 11,
      "weight": 800,
      "pokedexEntry": "At the center of its body is a red core that sends mysterious radio signals into the night sky."
    },
    {
      "id": 122,
      "name": "mr-mime",
      "baseExperience": 161,
      "height": 13,
      "weight": 545,
      "pokedexEntry": "The behavior of this clown-like Pokémon reminds one of pantomime. It creates invisible walls using a force emitted from its fingertips."
    },
    {
      "id": 123,
      "name": "scyther",
      "baseExperience": 100,
      "height": 15,
      "weight": 560,
      "pokedexEntry": "The large, wickedly sharp scythes on its forearms are truly fearsome weapons. Prey’s attempts to flee are unfailingly thwarted by this Pokémon’s nimble motions."
    },
    {
      "id": 124,
      "name": "jynx",
      "baseExperience": 159,
      "height": 14,
      "weight": 406,
      "pokedexEntry": "Its cries sound like human speech. However, it is impossible to tell what it is trying to say."
    },
    {
      "id": 125,
      "name": "electabuzz",
      "baseExperience": 172,
      "height": 11,
      "weight": 300,
      "pokedexEntry": "Feeds on electrical energy. During sudden showers beneath looming thunderclouds, one can observe Electabuzz scaling tall trees, where the Pokémon will then wait for lightning to strike."
    },
    {
      "id": 126,
      "name": "magmar",
      "baseExperience": 173,
      "height": 13,
      "weight": 445,
      "pokedexEntry": "Legend has it that this Pokémon was born from the crater of a volcano. When wounded, it bathes in lava to heal its body, much as one would soak in a hot spring."
    },
    {
      "id": 127,
      "name": "pinsir",
      "baseExperience": 175,
      "height": 15,
      "weight": 550,
      "pokedexEntry": "It grips prey with its pincers until the prey is torn apart. What it can’t tear, it tosses far away."
    },
    {
      "id": 128,
      "name": "tauros",
      "baseExperience": 172,
      "height": 14,
      "weight": 884,
      "pokedexEntry": "Once it takes aim at its prey, it makes a headlong charge. It is famous for its violent nature."
    },
    {
      "id": 129,
      "name": "magikarp",
      "baseExperience": 40,
      "height": 9,
      "weight": 100,
      "pokedexEntry": "A feeble, pitiful imbecile of a Pokémon that is nonetheless very hardy. Unperturbed by turbid water, it can be found living in all sorts of places."
    },
    {
      "id": 130,
      "name": "gyarados",
      "baseExperience": 189,
      "height": 65,
      "weight": 2350,
      "pokedexEntry": "I suspect this Pokémon to be the true identity of a dragon written of in ancient texts, which claimed that it razed an entire village with white-hot beams from its maw."
    },
    {
      "id": 131,
      "name": "lapras",
      "baseExperience": 187,
      "height": 25,
      "weight": 2200,
      "pokedexEntry": "It loves crossing the sea with people and Pokémon on its back. It understands human speech."
    },
    {
      "id": 132,
      "name": "ditto",
      "baseExperience": 101,
      "height": 3,
      "weight": 40,
      "pokedexEntry": "It has the ability to reconstitute its entire cellular structure to transform into whatever it sees."
    },
    {
      "id": 133,
      "name": "eevee",
      "baseExperience": 65,
      "height": 3,
      "weight": 65,
      "pokedexEntry": "Harbors the potential to evolve into manifold forms. Within Eevee lies the key to the mysteries of Pokémon evolution—I’m certain of it."
    },
    {
      "id": 134,
      "name": "vaporeon",
      "baseExperience": 184,
      "height": 10,
      "weight": 290,
      "pokedexEntry": "Tests show that its cells closely resemble water molecules, which perhaps explains its ability to conceal its form while submerged. I believe the origins of mermaid folklore lie with this Pokémon."
    },
    {
      "id": 135,
      "name": "jolteon",
      "baseExperience": 184,
      "height": 8,
      "weight": 245,
      "pokedexEntry": "Bristles its fur into sharp, needlelike points when enraged. One can hear electricity crackle in its breath when it exhales."
    },
    {
      "id": 136,
      "name": "flareon",
      "baseExperience": 184,
      "height": 9,
      "weight": 250,
      "pokedexEntry": "Flames burn within a saclike organ inside this Pokémon. When Flareon inhales, these flames grow in intensity, reaching a mighty 3,000 degrees Fahrenheit."
    },
    {
      "id": 137,
      "name": "porygon",
      "baseExperience": 79,
      "height": 8,
      "weight": 365,
      "pokedexEntry": "It has no discernible heartbeat and does not seem to draw breath, and yet it appears to function without issue. I cannot even begin to explain this utterly bizarre anomaly."
    },
    {
      "id": 138,
      "name": "omanyte",
      "baseExperience": 71,
      "height": 4,
      "weight": 75,
      "pokedexEntry": "It’s a Pokémon that was resurrected from a fossil using modern science. It swam in ancient seas."
    },
    {
      "id": 139,
      "name": "omastar",
      "baseExperience": 173,
      "height": 10,
      "weight": 350,
      "pokedexEntry": "It is thought that this Pokémon became extinct because its spiral shell grew too large."
    },
    {
      "id": 140,
      "name": "kabuto",
      "baseExperience": 71,
      "height": 5,
      "weight": 115,
      "pokedexEntry": "It is thought to have inhabited beaches 300 million years ago. It is protected by a sturdy shell."
    },
    {
      "id": 141,
      "name": "kabutops",
      "baseExperience": 173,
      "height": 13,
      "weight": 405,
      "pokedexEntry": "It is thought that this Pokémon came onto land because its prey adapted to life on land."
    },
    {
      "id": 142,
      "name": "aerodactyl",
      "baseExperience": 180,
      "height": 18,
      "weight": 590,
      "pokedexEntry": "It’s a Pokémon that roamed the skies in the dinosaur era. Its teeth are like saw blades."
    },
    {
      "id": 143,
      "name": "snorlax",
      "baseExperience": 189,
      "height": 21,
      "weight": 4600,
      "pokedexEntry": "This glutton appears in villages without warning and devours the entirety of their rice granaries—such occurrences have long been counted among the gravest of disasters."
    },
    {
      "id": 144,
      "name": "articuno",
      "baseExperience": 290,
      "height": 17,
      "weight": 554,
      "pokedexEntry": "This legendary bird Pokémon can create blizzards by freezing moisture in the air."
    },
    {
      "id": 145,
      "name": "zapdos",
      "baseExperience": 290,
      "height": 16,
      "weight": 526,
      "pokedexEntry": "This legendary Pokémon is said to live in thunderclouds. It freely controls lightning bolts."
    },
    {
      "id": 146,
      "name": "moltres",
      "baseExperience": 290,
      "height": 20,
      "weight": 600,
      "pokedexEntry": "It is one of the legendary bird Pokémon. Its appearance is said to indicate the coming of spring."
    },
    {
      "id": 147,
      "name": "dratini",
      "baseExperience": 60,
      "height": 18,
      "weight": 33,
      "pokedexEntry": "It is called the Mirage Pokémon because so few have seen it, but its shed skin has been found."
    },
    {
      "id": 148,
      "name": "dragonair",
      "baseExperience": 147,
      "height": 40,
      "weight": 165,
      "pokedexEntry": "If its body takes on an aura, the weather changes instantly. It is said to live in seas and lakes."
    },
    {
      "id": 149,
      "name": "dragonite",
      "baseExperience": 300,
      "height": 22,
      "weight": 2100,
      "pokedexEntry": "It is said to make its home somewhere in the sea. It guides wrecked ships to shore."
    },
    {
      "id": 150,
      "name": "mewtwo",
      "baseExperience": 340,
      "height": 20,
      "weight": 1220,
      "pokedexEntry": "Mewtwo was created by recombining Mew’s genes. It’s said to have the most savage heart among Pokémon."
    },
    {
      "id": 151,
      "name": "mew",
      "baseExperience": 300,
      "height": 4,
      "weight": 40,
      "pokedexEntry": "Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon."
    },
    {
      "id": 152,
      "name": "chikorita",
      "baseExperience": 64,
      "height": 9,
      "weight": 64,
      "pokedexEntry": "It uses the leaf on its head to determine the air’s temperature and humidity. It loves to sunbathe."
    },
    {
      "id": 153,
      "name": "bayleef",
      "baseExperience": 142,
      "height": 12,
      "weight": 158,
      "pokedexEntry": "The buds that ring its neck give off a spicy aroma that perks people up."
    },
    {
      "id": 154,
      "name": "meganium",
      "baseExperience": 236,
      "height": 18,
      "weight": 1005,
      "pokedexEntry": "Its breath has the fantastic ability to revive dead plants and flowers."
    },
    {
      "id": 155,
      "name": "cyndaquil",
      "baseExperience": 62,
      "height": 5,
      "weight": 79,
      "pokedexEntry": "Hails from the Johto region. Though usually curled into a ball due to its timid disposition, it harbors tremendous firepower."
    },
    {
      "id": 156,
      "name": "quilava",
      "baseExperience": 142,
      "height": 9,
      "weight": 190,
      "pokedexEntry": "This creature’s fur is most mysterious—it is wholly impervious to the burning touch of flame. Should Quilava turn its back to you, take heed! Such a posture indicates a forthcoming attack."
    },
    {
      "id": 157,
      "name": "typhlosion",
      "baseExperience": 240,
      "height": 17,
      "weight": 795,
      "pokedexEntry": "It attacks using blasts of fire. It creates heat shimmers with intense fire to hide itself."
    },
    {
      "id": 158,
      "name": "totodile",
      "baseExperience": 63,
      "height": 6,
      "weight": 95,
      "pokedexEntry": "It has a habit of biting everything with its well-developed jaws. Even its Trainer needs to be careful."
    },
    {
      "id": 159,
      "name": "croconaw",
      "baseExperience": 142,
      "height": 11,
      "weight": 250,
      "pokedexEntry": "Once it bites down, it won’t let go until it loses its fangs. New fangs quickly grow into place."
    },
    {
      "id": 160,
      "name": "feraligatr",
      "baseExperience": 239,
      "height": 23,
      "weight": 888,
      "pokedexEntry": "It usually moves slowly, but it goes at blinding speed when it attacks and bites prey."
    },
    {
      "id": 161,
      "name": "sentret",
      "baseExperience": 43,
      "height": 8,
      "weight": 60,
      "pokedexEntry": "It has a very nervous nature. It stands up high on its tail so it can scan wide areas."
    },
    {
      "id": 162,
      "name": "furret",
      "baseExperience": 145,
      "height": 18,
      "weight": 325,
      "pokedexEntry": "The mother puts its offspring to sleep by curling up around them. It corners foes with speed."
    },
    {
      "id": 163,
      "name": "hoothoot",
      "baseExperience": 52,
      "height": 7,
      "weight": 212,
      "pokedexEntry": "It switches its standing foot so quickly that the switch can’t be seen. It cries at the same time every day."
    },
    {
      "id": 164,
      "name": "noctowl",
      "baseExperience": 158,
      "height": 16,
      "weight": 408,
      "pokedexEntry": "If it flips its head upside down, it’s a sign that it is engaged in very complex thinking."
    },
    {
      "id": 165,
      "name": "ledyba",
      "baseExperience": 53,
      "height": 10,
      "weight": 108,
      "pokedexEntry": "It’s so timid that it can’t move unless it’s with a swarm. It conveys its feelings through scent."
    },
    {
      "id": 166,
      "name": "ledian",
      "baseExperience": 137,
      "height": 14,
      "weight": 356,
      "pokedexEntry": "It uses starlight as energy. When more stars appear at night, the patterns on its back grow larger."
    },
    {
      "id": 167,
      "name": "spinarak",
      "baseExperience": 50,
      "height": 5,
      "weight": 85,
      "pokedexEntry": "It sets a trap by spinning a web with thin but strong thread. It waits motionlessly for prey to arrive."
    },
    {
      "id": 168,
      "name": "ariados",
      "baseExperience": 140,
      "height": 11,
      "weight": 335,
      "pokedexEntry": "It attaches silk to its prey and sets it free. Later, it tracks the silk to the prey and its friends."
    },
    {
      "id": 169,
      "name": "crobat",
      "baseExperience": 268,
      "height": 18,
      "weight": 750,
      "pokedexEntry": "Its hind limbs have become another set of wings. Crobat expertly maneuvers its four wings to dart in exquisite fashion through even the most confined caves without losing any speed."
    },
    {
      "id": 170,
      "name": "chinchou",
      "baseExperience": 66,
      "height": 5,
      "weight": 120,
      "pokedexEntry": "It discharges positive and negative electricity from the tips of its antennae to shock its foes."
    },
    {
      "id": 171,
      "name": "lanturn",
      "baseExperience": 161,
      "height": 12,
      "weight": 225,
      "pokedexEntry": "Lanturn’s light can shine up from great depths. It is nicknamed the Deep-Sea Star."
    },
    {
      "id": 172,
      "name": "pichu",
      "baseExperience": 41,
      "height": 3,
      "weight": 20,
      "pokedexEntry": "Pichu stores electricity in the sacs on its cheeks but discharges it inadvertently when agitated or excited. Being yet immature, the Pokémon’s handling of electricity is rather inept."
    },
    {
      "id": 173,
      "name": "cleffa",
      "baseExperience": 44,
      "height": 3,
      "weight": 30,
      "pokedexEntry": "In silhouette, they resemble twinkling starlight. When shooting stars rain from the night sky, Cleffa gather in numbers and dance as though they are indeed incarnations of the stars."
    },
    {
      "id": 174,
      "name": "igglybuff",
      "baseExperience": 42,
      "height": 3,
      "weight": 10,
      "pokedexEntry": "It has a soft and bouncy body. Once it starts bouncing, it becomes impossible to stop."
    },
    {
      "id": 175,
      "name": "togepi",
      "baseExperience": 49,
      "height": 3,
      "weight": 15,
      "pokedexEntry": "This ovate creature is frequently mistaken for a moving egg when encountered out in the fields or in the mountains. Its guileless smile soothes the soul."
    },
    {
      "id": 176,
      "name": "togetic",
      "baseExperience": 142,
      "height": 6,
      "weight": 32,
      "pokedexEntry": "No records exist of Togetic being seen in the wilds. Rumors abound that it evolves under the loving care of a trusted human companion, upon whom the Pokémon then bestows great joy."
    },
    {
      "id": 177,
      "name": "natu",
      "baseExperience": 64,
      "height": 2,
      "weight": 20,
      "pokedexEntry": "It picks food from cactus plants, deftly avoiding buds and spines. It seems to skip about to move."
    },
    {
      "id": 178,
      "name": "xatu",
      "baseExperience": 165,
      "height": 15,
      "weight": 150,
      "pokedexEntry": "This odd Pokémon can see both the past and the future. It eyes the sun’s movement all day."
    },
    {
      "id": 179,
      "name": "mareep",
      "baseExperience": 56,
      "height": 6,
      "weight": 78,
      "pokedexEntry": "Its fluffy coat doubles in size when static electricity builds up. Touching it can be shocking."
    },
    {
      "id": 180,
      "name": "flaaffy",
      "baseExperience": 128,
      "height": 8,
      "weight": 133,
      "pokedexEntry": "If its coat becomes fully charged with electricity, its tail lights up. Flaaffy can fire hair that zaps on impact."
    },
    {
      "id": 181,
      "name": "ampharos",
      "baseExperience": 230,
      "height": 14,
      "weight": 615,
      "pokedexEntry": "The tip of its tail shines brightly. In the olden days, people sent signals using the light from this Pokémon’s tail."
    },
    {
      "id": 182,
      "name": "bellossom",
      "baseExperience": 245,
      "height": 4,
      "weight": 58,
      "pokedexEntry": "When the heavy rainfall season ends, it is drawn out by warm sunlight to dance in the open."
    },
    {
      "id": 183,
      "name": "marill",
      "baseExperience": 88,
      "height": 4,
      "weight": 85,
      "pokedexEntry": "The tip of its tail is filled with oil that is lighter than water, so it acts as a float."
    },
    {
      "id": 184,
      "name": "azumarill",
      "baseExperience": 210,
      "height": 8,
      "weight": 285,
      "pokedexEntry": "Its long ears are superb sensors. It can distinguish the movements of living things on riverbeds."
    },
    {
      "id": 185,
      "name": "sudowoodo",
      "baseExperience": 144,
      "height": 12,
      "weight": 380,
      "pokedexEntry": "Though it pretends to be a tree, it fails to fool even children. To the touch, its body feels more like rock than tree bark. Sudowoodo’s extreme aversion to water merits special note."
    },
    {
      "id": 186,
      "name": "politoed",
      "baseExperience": 250,
      "height": 11,
      "weight": 339,
      "pokedexEntry": "A group of Poliwag and Poliwhirl will form with a Politoed as the leader. Politoed’s cries make the Pokémon of the group obey."
    },
    {
      "id": 187,
      "name": "hoppip",
      "baseExperience": 50,
      "height": 4,
      "weight": 5,
      "pokedexEntry": "They are blown adrift by winds. It is said that when Hoppip gather in fields and mountains, spring is on the way."
    },
    {
      "id": 188,
      "name": "skiploom",
      "baseExperience": 119,
      "height": 6,
      "weight": 10,
      "pokedexEntry": "It blooms when the weather warms. It floats in the sky to soak up as much sunlight as possible."
    },
    {
      "id": 189,
      "name": "jumpluff",
      "baseExperience": 207,
      "height": 8,
      "weight": 30,
      "pokedexEntry": "Blown by seasonal winds, it circles the globe, scattering cotton spores as it goes."
    },
    {
      "id": 190,
      "name": "aipom",
      "baseExperience": 72,
      "height": 8,
      "weight": 115,
      "pokedexEntry": "This treetop dweller possesses a tail as dexterous as a hand. Ancient writings describe this Pokémon as a one-armed oddity."
    },
    {
      "id": 191,
      "name": "sunkern",
      "baseExperience": 36,
      "height": 3,
      "weight": 18,
      "pokedexEntry": "They may suddenly fall out of the sky in the morning. In the year following a cold summer, their population explodes."
    },
    {
      "id": 192,
      "name": "sunflora",
      "baseExperience": 149,
      "height": 8,
      "weight": 85,
      "pokedexEntry": "It gets energy from warm sunlight and is known for its habit of moving in pursuit of it."
    },
    {
      "id": 193,
      "name": "yanma",
      "baseExperience": 78,
      "height": 12,
      "weight": 380,
      "pokedexEntry": "Its frail wings are so thin that one can see clear through them. However, during flight these wings exhibit the power to churn air with force enough to launch a house skyward."
    },
    {
      "id": 194,
      "name": "wooper",
      "baseExperience": 42,
      "height": 4,
      "weight": 85,
      "pokedexEntry": "When the temperature cools in the evening, they emerge from water to seek food along the shore."
    },
    {
      "id": 195,
      "name": "quagsire",
      "baseExperience": 151,
      "height": 14,
      "weight": 750,
      "pokedexEntry": "A dim-witted Pokémon. It doesn’t care if it bumps its head into boats or rocks while swimming."
    },
    {
      "id": 196,
      "name": "espeon",
      "baseExperience": 184,
      "height": 9,
      "weight": 265,
      "pokedexEntry": "Wields an arcane power with which it can predict the weather and even people’s thoughts. When bathed in sunshine, the scarlet orb on its brow glows and builds energy."
    },
    {
      "id": 197,
      "name": "umbreon",
      "baseExperience": 184,
      "height": 10,
      "weight": 270,
      "pokedexEntry": "It is most active in the wee hours of the night, when moonlight bathes the land. Its large eyes can pierce the darkness and perceive prey with absolute clarity."
    },
    {
      "id": 198,
      "name": "murkrow",
      "baseExperience": 81,
      "height": 5,
      "weight": 21,
      "pokedexEntry": "Widely shunned as a bearer of ill fortune. Upon crossing paths with this creature, I’ve been told one must chant “Workrum, Workrum—bad luck, don’t come” as a protective incantation."
    },
    {
      "id": 199,
      "name": "slowking",
      "baseExperience": 172,
      "height": 20,
      "weight": 795,
      "pokedexEntry": "Being bitten by Shellder gave it intelligence comparable to that of internationally recognized scientists."
    },
    {
      "id": 200,
      "name": "misdreavus",
      "baseExperience": 87,
      "height": 7,
      "weight": 10,
      "pokedexEntry": "It conceals itself in darkness, sending chills up travelers’ spines with its childlike weeping. As it observes the frightened travelers with glee, the red orbs upon its chest let off an eerie light."
    },
    {
      "id": 201,
      "name": "unown",
      "baseExperience": 118,
      "height": 5,
      "weight": 50,
      "pokedexEntry": "It is hard to believe these strangely shaped Pokémon are truly living creatures. I’ve pointed out that the species’ many forms resemble writing from other lands; no one will take me seriously."
    },
    {
      "id": 202,
      "name": "wobbuffet",
      "baseExperience": 142,
      "height": 13,
      "weight": 285,
      "pokedexEntry": "It desperately tries to keep its black tail hidden. This behavior is said to be proof that its tail hides a secret."
    },
    {
      "id": 203,
      "name": "girafarig",
      "baseExperience": 159,
      "height": 15,
      "weight": 415,
      "pokedexEntry": "While it sleeps, the head on its tail keeps watch. The tail doesn’t need to sleep."
    },
    {
      "id": 204,
      "name": "pineco",
      "baseExperience": 58,
      "height": 6,
      "weight": 72,
      "pokedexEntry": "It looks just like a pinecone. Its shell protects it from bird Pokémon that peck it by mistake."
    },
    {
      "id": 205,
      "name": "forretress",
      "baseExperience": 163,
      "height": 12,
      "weight": 1258,
      "pokedexEntry": "It is encased in a steel shell. Forretress’s eyes peer out, but what lies within this Pokémon’s shell is unknown."
    },
    {
      "id": 206,
      "name": "dunsparce",
      "baseExperience": 145,
      "height": 15,
      "weight": 140,
      "pokedexEntry": "It digs into the ground with its tail and makes a mazelike nest. It can fly just a little."
    },
    {
      "id": 207,
      "name": "gligar",
      "baseExperience": 86,
      "height": 11,
      "weight": 648,
      "pokedexEntry": "Its tail is tipped by a thick, horrible stinger. To bring down prey, it will first obscure their vision by covering their faces with its body, and then it will use the stinger to inject them with venom."
    },
    {
      "id": 208,
      "name": "steelix",
      "baseExperience": 179,
      "height": 92,
      "weight": 4000,
      "pokedexEntry": "This Pokémon evolved through use of a strange item. Its body is coated with steel powder and notably hard—not even diamond can leave so much as a scratch."
    },
    {
      "id": 209,
      "name": "snubbull",
      "baseExperience": 60,
      "height": 6,
      "weight": 78,
      "pokedexEntry": "Small Pokémon flee from its scary face. It is, however, considered by many people to be cute."
    },
    {
      "id": 210,
      "name": "granbull",
      "baseExperience": 158,
      "height": 14,
      "weight": 487,
      "pokedexEntry": "It is timid in spite of its looks. If it becomes enraged, however, it will strike with its huge fangs."
    },
    {
      "id": 211,
      "name": "qwilfish",
      "baseExperience": 88,
      "height": 5,
      "weight": 39,
      "pokedexEntry": "It shoots the poison spikes on its body in all directions. Its round form makes it a poor swimmer."
    },
    {
      "id": 212,
      "name": "scizor",
      "baseExperience": 175,
      "height": 18,
      "weight": 1180,
      "pokedexEntry": "Evolved by way of a curious item. The shell covering its body has been shown to be stronger than forged steel."
    },
    {
      "id": 213,
      "name": "shuckle",
      "baseExperience": 177,
      "height": 6,
      "weight": 205,
      "pokedexEntry": "It stores berries in its shell. The berries mix with its body fluids to become delicious juices."
    },
    {
      "id": 214,
      "name": "heracross",
      "baseExperience": 175,
      "height": 15,
      "weight": 540,
      "pokedexEntry": "This Pokémon has an unparalleled horn. Heracross itself demonstrates tremendous power—it’s capable of throwing several people trained in the traditional arts of war at once."
    },
    {
      "id": 215,
      "name": "sneasel",
      "baseExperience": 86,
      "height": 9,
      "weight": 280,
      "pokedexEntry": "This Pokémon shares roots with the Sneasel of Hisui, but unlike that species, this one is spiteful in personality. I hypothesize that water and earth can affect Sneasel’s mind and body."
    },
    {
      "id": 216,
      "name": "teddiursa",
      "baseExperience": 66,
      "height": 6,
      "weight": 88,
      "pokedexEntry": "It licks its paws because of the sweet honey that has soaked into them. It is cunning, stealing into the nests of Combee and taking for itself the honey that the Combee have amassed."
    },
    {
      "id": 217,
      "name": "ursaring",
      "baseExperience": 175,
      "height": 18,
      "weight": 1258,
      "pokedexEntry": "When the cold season arrives in Hisui, this Pokémon will wander fields and mountains alike in search of its favorite berries. Ursaring’s hunger during this time makes it a ferocious danger."
    },
    {
      "id": 218,
      "name": "slugma",
      "baseExperience": 50,
      "height": 7,
      "weight": 350,
      "pokedexEntry": "Its body is made of magma. If it doesn’t keep moving, its body will cool and harden."
    },
    {
      "id": 219,
      "name": "magcargo",
      "baseExperience": 151,
      "height": 8,
      "weight": 550,
      "pokedexEntry": "Its body temperature is roughly 18,000 degrees Fahrenheit. Flames burst from gaps in its shell made of hardened magma."
    },
    {
      "id": 220,
      "name": "swinub",
      "baseExperience": 50,
      "height": 4,
      "weight": 65,
      "pokedexEntry": "Swinub excels at sniffing out mushrooms buried beneath grass or snow. Since ancient times, the people of Hisui have often relied upon this skill."
    },
    {
      "id": 221,
      "name": "piloswine",
      "baseExperience": 158,
      "height": 11,
      "weight": 558,
      "pokedexEntry": "The long fur of this Pokémon covers its eyes, ears, and even limbs, allowing Piloswine to resist harshly frigid conditions. The Pokémon’s white tusks can be used to defeat its enemies."
    },
    {
      "id": 222,
      "name": "corsola",
      "baseExperience": 144,
      "height": 6,
      "weight": 50,
      "pokedexEntry": "Many live in the clean seas of the south. They apparently can’t live in polluted waters."
    },
    {
      "id": 223,
      "name": "remoraid",
      "baseExperience": 60,
      "height": 6,
      "weight": 120,
      "pokedexEntry": "Spits water from its mouth with incredible accuracy. It captures Burmy by shooting them down off the branches from which they dangle."
    },
    {
      "id": 224,
      "name": "octillery",
      "baseExperience": 168,
      "height": 9,
      "weight": 285,
      "pokedexEntry": "While Octillery still shoots water from its mouth, the drastic anatomical difference between it and Remoraid meant that for a long time, no one believed the former evolved from the latter."
    },
    {
      "id": 225,
      "name": "delibird",
      "baseExperience": 116,
      "height": 9,
      "weight": 160,
      "pokedexEntry": "It carries food rolled up in its tail. It has a habit of sharing food with people lost in the mountains."
    },
    {
      "id": 226,
      "name": "mantine",
      "baseExperience": 170,
      "height": 21,
      "weight": 2200,
      "pokedexEntry": "This calm and gentle Pokémon swims gracefully through the sea. After building speed, it can leap out of the water. It is often misidentified as a bird Pokémon due to this behavior."
    },
    {
      "id": 227,
      "name": "skarmory",
      "baseExperience": 163,
      "height": 17,
      "weight": 505,
      "pokedexEntry": "Skarmory is clad entirely in ironhard armor. It flies at speeds over 180 mph."
    },
    {
      "id": 228,
      "name": "houndour",
      "baseExperience": 66,
      "height": 6,
      "weight": 108,
      "pokedexEntry": "It conveys its feelings using different cries. It works in a pack to cleverly take down prey."
    },
    {
      "id": 229,
      "name": "houndoom",
      "baseExperience": 175,
      "height": 14,
      "weight": 350,
      "pokedexEntry": "Long ago, people imagined its eerie howls to be the call of the grim reaper."
    },
    {
      "id": 230,
      "name": "kingdra",
      "baseExperience": 270,
      "height": 18,
      "weight": 1520,
      "pokedexEntry": "It lives in caves on the seafloor and creates giant whirlpools every time it moves."
    },
    {
      "id": 231,
      "name": "phanpy",
      "baseExperience": 66,
      "height": 5,
      "weight": 335,
      "pokedexEntry": "It is strong despite its compact size. It can easily pick up and carry an adult human on its back."
    },
    {
      "id": 232,
      "name": "donphan",
      "baseExperience": 175,
      "height": 11,
      "weight": 1200,
      "pokedexEntry": "It attacks by curling up and rolling into its foe. It can blow apart a house in one hit."
    },
    {
      "id": 233,
      "name": "porygon2",
      "baseExperience": 180,
      "height": 6,
      "weight": 325,
      "pokedexEntry": "A bizarre item caused this Pokémon to evolve. While it now exhibits many new gestures and expressions, its biology remains inscrutable."
    },
    {
      "id": 234,
      "name": "stantler",
      "baseExperience": 163,
      "height": 14,
      "weight": 712,
      "pokedexEntry": "Its strangely shaped antlers have the power to bewitch those who see them. Medicine made by grinding up the black orbs from fallen antlers is an effective treatment for insomnia."
    },
    {
      "id": 235,
      "name": "smeargle",
      "baseExperience": 88,
      "height": 12,
      "weight": 580,
      "pokedexEntry": "It marks its territory by using its tail like a paintbrush. There are more than 5,000 different marks."
    },
    {
      "id": 236,
      "name": "tyrogue",
      "baseExperience": 42,
      "height": 7,
      "weight": 210,
      "pokedexEntry": "It is famous for its eagerness to fight and always nurses injuries from challenging larger foes."
    },
    {
      "id": 237,
      "name": "hitmontop",
      "baseExperience": 159,
      "height": 14,
      "weight": 480,
      "pokedexEntry": "It fights while spinning like a top. The centrifugal force boosts its destructive power by a factor of 10."
    },
    {
      "id": 238,
      "name": "smoochum",
      "baseExperience": 61,
      "height": 4,
      "weight": 60,
      "pokedexEntry": "It tests everything by touching with its lips, which remember what it likes and dislikes."
    },
    {
      "id": 239,
      "name": "elekid",
      "baseExperience": 72,
      "height": 6,
      "weight": 235,
      "pokedexEntry": "They generate electricity by spinning their arms. During a thunderstorm, if one hears the lively voices of children out in the wilderness, what one is actually hearing are the voices of Elekid."
    },
    {
      "id": 240,
      "name": "magby",
      "baseExperience": 73,
      "height": 7,
      "weight": 214,
      "pokedexEntry": "This Pokémon lives in volcanic areas. With each breath, sparks spurt from its mouth and nose. When Magby is in good health, its flames gain a yellow tint."
    },
    {
      "id": 241,
      "name": "miltank",
      "baseExperience": 172,
      "height": 12,
      "weight": 755,
      "pokedexEntry": "It is said that kids who drink Miltank’s milk grow up to become hearty, healthy adults."
    },
    {
      "id": 242,
      "name": "blissey",
      "baseExperience": 635,
      "height": 15,
      "weight": 468,
      "pokedexEntry": "A kindhearted Pokémon that will care for any sick person or Pokémon until their health improves. The eggs it lays are delicious and bring good fortune to those who eat them."
    },
    {
      "id": 243,
      "name": "raikou",
      "baseExperience": 290,
      "height": 19,
      "weight": 1780,
      "pokedexEntry": "It is said to have fallen with lightning. It can fire thunderbolts from the rain clouds on its back."
    },
    {
      "id": 244,
      "name": "entei",
      "baseExperience": 290,
      "height": 21,
      "weight": 1980,
      "pokedexEntry": "It is said that when it roars, a volcano erupts somewhere around the globe."
    },
    {
      "id": 245,
      "name": "suicune",
      "baseExperience": 290,
      "height": 20,
      "weight": 1870,
      "pokedexEntry": "It races around the world to purify fouled water. It dashes away with the north wind."
    },
    {
      "id": 246,
      "name": "larvitar",
      "baseExperience": 60,
      "height": 6,
      "weight": 720,
      "pokedexEntry": "This Pokémon eats soil. Once it has eaten a large mountain, it goes to sleep so it can grow."
    },
    {
      "id": 247,
      "name": "pupitar",
      "baseExperience": 144,
      "height": 12,
      "weight": 1520,
      "pokedexEntry": "Its body is as hard as bedrock. By venting pressurized gas, it can launch itself like a rocket."
    },
    {
      "id": 248,
      "name": "tyranitar",
      "baseExperience": 300,
      "height": 20,
      "weight": 2020,
      "pokedexEntry": "If it rampages, it knocks down mountains and buries rivers. Maps must be redrawn afterward."
    },
    {
      "id": 249,
      "name": "lugia",
      "baseExperience": 340,
      "height": 52,
      "weight": 2160,
      "pokedexEntry": "It sleeps in a deep-sea trench. If it flaps its wings, it is said to cause a 40-day storm."
    },
    {
      "id": 250,
      "name": "ho-oh",
      "baseExperience": 340,
      "height": 38,
      "weight": 1990,
      "pokedexEntry": "Its feathers are in seven colors. It is said that anyone seeing it is promised eternal happiness."
    },
    {
      "id": 251,
      "name": "celebi",
      "baseExperience": 300,
      "height": 6,
      "weight": 50,
      "pokedexEntry": "It has the power to travel across time, but it is said to appear only in peaceful times."
    },
    {
      "id": 252,
      "name": "treecko",
      "baseExperience": 62,
      "height": 5,
      "weight": 50,
      "pokedexEntry": "The soles of its feet are covered by countless tiny hooks, enabling it to walk on walls and ceilings."
    },
    {
      "id": 253,
      "name": "grovyle",
      "baseExperience": 142,
      "height": 9,
      "weight": 216,
      "pokedexEntry": "It lives in dense jungles. While closing in on its prey, it leaps from branch to branch."
    },
    {
      "id": 254,
      "name": "sceptile",
      "baseExperience": 265,
      "height": 17,
      "weight": 522,
      "pokedexEntry": "The leaves that grow on its arms can slice down thick trees. It is without peer in jungle combat."
    },
    {
      "id": 255,
      "name": "torchic",
      "baseExperience": 62,
      "height": 4,
      "weight": 25,
      "pokedexEntry": "A fire burns inside it, so it feels very warm to hug. It launches fireballs of 1,800 degrees Fahrenheit."
    },
    {
      "id": 256,
      "name": "combusken",
      "baseExperience": 142,
      "height": 9,
      "weight": 195,
      "pokedexEntry": "Its kicking mastery lets it loose 10 kicks per second. It emits sharp cries to intimidate foes."
    },
    {
      "id": 257,
      "name": "blaziken",
      "baseExperience": 265,
      "height": 19,
      "weight": 520,
      "pokedexEntry": "Flames spout from its wrists, enveloping its knuckles. Its punches scorch its foes."
    },
    {
      "id": 258,
      "name": "mudkip",
      "baseExperience": 62,
      "height": 4,
      "weight": 76,
      "pokedexEntry": "Using the fin on its head, Mudkip senses the flow of water to keep track of what’s going on around it. Mudkip has the strength to heft boulders."
    },
    {
      "id": 259,
      "name": "marshtomp",
      "baseExperience": 142,
      "height": 7,
      "weight": 280,
      "pokedexEntry": "Its sturdy legs give it sure footing, even in mud. It burrows into dirt to sleep."
    },
    {
      "id": 260,
      "name": "swampert",
      "baseExperience": 268,
      "height": 15,
      "weight": 819,
      "pokedexEntry": "It can swim while towing a large ship. It bashes down foes with a swing of its thick arms."
    },
    {
      "id": 261,
      "name": "poochyena",
      "baseExperience": 56,
      "height": 5,
      "weight": 136,
      "pokedexEntry": "A Pokémon with a persistent nature, it chases its chosen prey until the prey becomes exhausted."
    },
    {
      "id": 262,
      "name": "mightyena",
      "baseExperience": 147,
      "height": 10,
      "weight": 370,
      "pokedexEntry": "It chases down prey in a pack. It will never disobey the commands of a skilled Trainer."
    },
    {
      "id": 263,
      "name": "zigzagoon",
      "baseExperience": 56,
      "height": 4,
      "weight": 175,
      "pokedexEntry": "It walks in zigzag fashion. It’s good at finding items in the grass and even in the ground."
    },
    {
      "id": 264,
      "name": "linoone",
      "baseExperience": 147,
      "height": 5,
      "weight": 325,
      "pokedexEntry": "It charges prey at speeds over 60 mph. However, because it can only run straight, it often fails."
    },
    {
      "id": 265,
      "name": "wurmple",
      "baseExperience": 56,
      "height": 3,
      "weight": 36,
      "pokedexEntry": "Likes sap and is abundant in the wild. Why it evolves into various different forms is unknown. One cannot tell from a Wurmple’s appearance which form it will take when it evolves."
    },
    {
      "id": 266,
      "name": "silcoon",
      "baseExperience": 72,
      "height": 6,
      "weight": 100,
      "pokedexEntry": "Wraps itself in thin strings of silk while it stores energy for evolution. It can’t extend its limbs and its movement is slow, but its eyes keep a sharp lookout—Silcoon is always on guard."
    },
    {
      "id": 267,
      "name": "beautifly",
      "baseExperience": 178,
      "height": 10,
      "weight": 284,
      "pokedexEntry": "A colorful and incredibly beautiful but also greedy Pokémon. In an effort to keep its favorite food all to itself, it will chase away Combee as they try to gather nectar."
    },
    {
      "id": 268,
      "name": "cascoon",
      "baseExperience": 72,
      "height": 7,
      "weight": 115,
      "pokedexEntry": "The silk coating its body is thin but sufficiently strong. Cascoon’s silk has a luster and texture superior to that of Silcoon’s, and clothes made using Cascoon silk are regarded as top-notch."
    },
    {
      "id": 269,
      "name": "dustox",
      "baseExperience": 173,
      "height": 12,
      "weight": 316,
      "pokedexEntry": "Tends to be drawn to bonfires on dark nights. Difficult to chase away from settlements because of the way it scatters highly toxic scales."
    },
    {
      "id": 270,
      "name": "lotad",
      "baseExperience": 44,
      "height": 5,
      "weight": 26,
      "pokedexEntry": "It looks like an aquatic plant and serves as a ferry for Pokémon that can’t swim."
    },
    {
      "id": 271,
      "name": "lombre",
      "baseExperience": 119,
      "height": 12,
      "weight": 325,
      "pokedexEntry": "It has a mischievous spirit. If it spots an angler, it will tug on the fishing line to interfere."
    },
    {
      "id": 272,
      "name": "ludicolo",
      "baseExperience": 240,
      "height": 15,
      "weight": 550,
      "pokedexEntry": "If it hears festive music, all its muscles fill with energy. It can’t help breaking out into a dance."
    },
    {
      "id": 273,
      "name": "seedot",
      "baseExperience": 44,
      "height": 5,
      "weight": 40,
      "pokedexEntry": "When it dangles from a tree branch, it looks just like an acorn. It enjoys scaring other Pokémon that try to peck at it."
    },
    {
      "id": 274,
      "name": "nuzleaf",
      "baseExperience": 119,
      "height": 10,
      "weight": 280,
      "pokedexEntry": "The sound of its grass flute makes its listeners uneasy. It lives deep in the forest."
    },
    {
      "id": 275,
      "name": "shiftry",
      "baseExperience": 240,
      "height": 13,
      "weight": 596,
      "pokedexEntry": "By flapping its leafy fans, it can whip up gusts of 100 feet per second that can level houses."
    },
    {
      "id": 276,
      "name": "taillow",
      "baseExperience": 54,
      "height": 3,
      "weight": 23,
      "pokedexEntry": "It has a gutsy spirit that makes it bravely take on tough foes. It flies in search of warm climates."
    },
    {
      "id": 277,
      "name": "swellow",
      "baseExperience": 159,
      "height": 7,
      "weight": 198,
      "pokedexEntry": "It circles the sky in search of prey and dives sharply to catch its target."
    },
    {
      "id": 278,
      "name": "wingull",
      "baseExperience": 54,
      "height": 6,
      "weight": 95,
      "pokedexEntry": "Catching sea winds with its long wings, it soars as if it were a glider. It folds its wings to rest."
    },
    {
      "id": 279,
      "name": "pelipper",
      "baseExperience": 154,
      "height": 12,
      "weight": 280,
      "pokedexEntry": "It acts as a delivery service by carrying small Pokémon in its bill. It bobs on the waves to rest."
    },
    {
      "id": 280,
      "name": "ralts",
      "baseExperience": 40,
      "height": 4,
      "weight": 66,
      "pokedexEntry": "Tends to prefer people with a chipper disposition to those who are gloomy, but it has shown no discrimination with regard to age or gender. Needs more research."
    },
    {
      "id": 281,
      "name": "kirlia",
      "baseExperience": 97,
      "height": 8,
      "weight": 202,
      "pokedexEntry": "It resembles a maiden in appearance, but it wields strange powers to project visions of paradise. I suspect the crimson ornaments on its head are the key to its abilities."
    },
    {
      "id": 282,
      "name": "gardevoir",
      "baseExperience": 259,
      "height": 16,
      "weight": 484,
      "pokedexEntry": "It will dedicate itself to defending a master it has come to adore. Its pure white dress, reminiscent of those worn by ladies of nobility, is the dress of one who is willing to risk their life."
    },
    {
      "id": 283,
      "name": "surskit",
      "baseExperience": 54,
      "height": 5,
      "weight": 17,
      "pokedexEntry": "It appears as if it is skating on water. It draws prey in with a sweet scent released from the tip of its head."
    },
    {
      "id": 284,
      "name": "masquerain",
      "baseExperience": 159,
      "height": 8,
      "weight": 36,
      "pokedexEntry": "Its antennae have eye patterns on them. Its four wings enable it to hover and fly in any direction."
    },
    {
      "id": 285,
      "name": "shroomish",
      "baseExperience": 59,
      "height": 4,
      "weight": 45,
      "pokedexEntry": "It spouts poison spores from the top of its head. These spores cause pain all over the body if inhaled."
    },
    {
      "id": 286,
      "name": "breloom",
      "baseExperience": 161,
      "height": 12,
      "weight": 392,
      "pokedexEntry": "Its short arms stretch when it throws punches. Its technique is equal to that of pro boxers."
    },
    {
      "id": 287,
      "name": "slakoth",
      "baseExperience": 56,
      "height": 8,
      "weight": 240,
      "pokedexEntry": "It spends nearly all its time in a day sprawled out. Just seeing it makes one drowsy."
    },
    {
      "id": 288,
      "name": "vigoroth",
      "baseExperience": 154,
      "height": 14,
      "weight": 465,
      "pokedexEntry": "Its heart beats at 10 times its previous rate, so it cannot sit still for even a moment."
    },
    {
      "id": 289,
      "name": "slaking",
      "baseExperience": 252,
      "height": 20,
      "weight": 1305,
      "pokedexEntry": "It is the world’s laziest Pokémon. When it is lounging, it is actually saving energy for striking back."
    },
    {
      "id": 290,
      "name": "nincada",
      "baseExperience": 53,
      "height": 5,
      "weight": 55,
      "pokedexEntry": "It grows underground, sensing its surroundings using antennae instead of its virtually blind eyes."
    },
    {
      "id": 291,
      "name": "ninjask",
      "baseExperience": 160,
      "height": 8,
      "weight": 120,
      "pokedexEntry": "Because they move so quickly, they sometimes become unseeable. They congregate around tree sap."
    },
    {
      "id": 292,
      "name": "shedinja",
      "baseExperience": 83,
      "height": 8,
      "weight": 12,
      "pokedexEntry": "It is a discarded bug shell that came to life. Peering into the crack on its back is said to steal one’s spirit."
    },
    {
      "id": 293,
      "name": "whismur",
      "baseExperience": 48,
      "height": 6,
      "weight": 163,
      "pokedexEntry": "Usually, its cries are like quiet murmurs. If frightened, it shrieks at the same volume as a jet plane."
    },
    {
      "id": 294,
      "name": "loudred",
      "baseExperience": 126,
      "height": 10,
      "weight": 405,
      "pokedexEntry": "The shock waves from its cries can tip over trucks. It stamps its feet to power up."
    },
    {
      "id": 295,
      "name": "exploud",
      "baseExperience": 245,
      "height": 15,
      "weight": 840,
      "pokedexEntry": "Its howls can be heard over six miles away. It emits all sorts of noises from the ports on its body."
    },
    {
      "id": 296,
      "name": "makuhita",
      "baseExperience": 47,
      "height": 10,
      "weight": 864,
      "pokedexEntry": "It toughens its body by slamming into thick trees. Many snapped trees can be found near its nest."
    },
    {
      "id": 297,
      "name": "hariyama",
      "baseExperience": 166,
      "height": 23,
      "weight": 2538,
      "pokedexEntry": "It loves to match power with big-bodied Pokémon. It can send a truck flying with its arm thrusts."
    },
    {
      "id": 298,
      "name": "azurill",
      "baseExperience": 38,
      "height": 2,
      "weight": 20,
      "pokedexEntry": "Its tail is filled with nutrients necessary for growth. It plays by bouncing on its tail."
    },
    {
      "id": 299,
      "name": "nosepass",
      "baseExperience": 75,
      "height": 10,
      "weight": 970,
      "pokedexEntry": "Once the people of Hisui discovered that its red nose always points north, they grew to rely on it greatly when traveling afar. The nose seems to work in a similar way to ancient compasses."
    },
    {
      "id": 300,
      "name": "skitty",
      "baseExperience": 52,
      "height": 6,
      "weight": 110,
      "pokedexEntry": "It can’t stop itself from chasing moving things, and it runs in circles, chasing its own tail."
    },
    {
      "id": 301,
      "name": "delcatty",
      "baseExperience": 140,
      "height": 11,
      "weight": 326,
      "pokedexEntry": "It is highly popular among Trainers for its sublime fur. It does not keep a nest."
    },
    {
      "id": 302,
      "name": "sableye",
      "baseExperience": 133,
      "height": 5,
      "weight": 110,
      "pokedexEntry": "It hides in the darkness of caves. Its diet of gems has transformed its eyes into gemstones."
    },
    {
      "id": 303,
      "name": "mawile",
      "baseExperience": 133,
      "height": 6,
      "weight": 115,
      "pokedexEntry": "Attached to its head is a huge set of jaws formed by horns. It can chew through iron beams."
    },
    {
      "id": 304,
      "name": "aron",
      "baseExperience": 66,
      "height": 4,
      "weight": 600,
      "pokedexEntry": "It usually lives deep in mountains. But when it’s hungry, it shows up at the foot of the mountains and eats railroad tracks and cars."
    },
    {
      "id": 305,
      "name": "lairon",
      "baseExperience": 151,
      "height": 9,
      "weight": 1200,
      "pokedexEntry": "For food, it digs up iron ore. It smashes its steely body against others to fight over territory."
    },
    {
      "id": 306,
      "name": "aggron",
      "baseExperience": 265,
      "height": 21,
      "weight": 3600,
      "pokedexEntry": "While seeking iron for food, it digs tunnels by breaking through bedrock with its steel horns."
    },
    {
      "id": 307,
      "name": "meditite",
      "baseExperience": 56,
      "height": 6,
      "weight": 112,
      "pokedexEntry": "It never misses its daily yoga workouts, and it heightens its spiritual power through meditation."
    },
    {
      "id": 308,
      "name": "medicham",
      "baseExperience": 144,
      "height": 13,
      "weight": 315,
      "pokedexEntry": "Through daily meditation, it hones its spiritual power. It can sense what others are thinking."
    },
    {
      "id": 309,
      "name": "electrike",
      "baseExperience": 59,
      "height": 6,
      "weight": 152,
      "pokedexEntry": "Using electricity stored in its fur, it stimulates its muscles to heighten its reaction speed."
    },
    {
      "id": 310,
      "name": "manectric",
      "baseExperience": 166,
      "height": 15,
      "weight": 402,
      "pokedexEntry": "It discharges electricity from its mane. The Pokémon creates a thundercloud overhead from which to drop lightning bolts."
    },
    {
      "id": 311,
      "name": "plusle",
      "baseExperience": 142,
      "height": 4,
      "weight": 42,
      "pokedexEntry": "It cheers on friends with pom-poms made of sparks. It drains power from telephone poles."
    },
    {
      "id": 312,
      "name": "minun",
      "baseExperience": 142,
      "height": 4,
      "weight": 42,
      "pokedexEntry": "It cheers on friends. If its friends are losing, its body lets off more and more sparks."
    },
    {
      "id": 313,
      "name": "volbeat",
      "baseExperience": 151,
      "height": 7,
      "weight": 177,
      "pokedexEntry": "It communicates with others by lighting up its rear at night. It loves Illumise’s sweet aroma."
    },
    {
      "id": 314,
      "name": "illumise",
      "baseExperience": 151,
      "height": 6,
      "weight": 177,
      "pokedexEntry": "With its sweet aroma, it guides Volbeat to draw signs with light in the night sky."
    },
    {
      "id": 315,
      "name": "roselia",
      "baseExperience": 140,
      "height": 3,
      "weight": 20,
      "pokedexEntry": "Though beautiful, it has highly poisonous thorns. There is an old tradition in my homeland wherein one would send these thorns to an opponent to challenge them to a duel."
    },
    {
      "id": 316,
      "name": "gulpin",
      "baseExperience": 60,
      "height": 4,
      "weight": 103,
      "pokedexEntry": "Almost all its body is its stomach. Its harsh digestive juices quickly dissolve anything it swallows."
    },
    {
      "id": 317,
      "name": "swalot",
      "baseExperience": 163,
      "height": 17,
      "weight": 800,
      "pokedexEntry": "It swallows anything whole. It sweats toxic fluids from its follicles to douse foes."
    },
    {
      "id": 318,
      "name": "carvanha",
      "baseExperience": 61,
      "height": 8,
      "weight": 208,
      "pokedexEntry": "They swarm any foe that invades their territory. Their sharp fangs can tear out boat hulls."
    },
    {
      "id": 319,
      "name": "sharpedo",
      "baseExperience": 161,
      "height": 18,
      "weight": 888,
      "pokedexEntry": "Its fangs rip through sheet iron. It swims at 75 mph and is known as the Bully of the Sea."
    },
    {
      "id": 320,
      "name": "wailmer",
      "baseExperience": 80,
      "height": 20,
      "weight": 1300,
      "pokedexEntry": "On sunny days, it lands on beaches to bounce like a ball and play. It spouts water from its nostrils."
    },
    {
      "id": 321,
      "name": "wailord",
      "baseExperience": 175,
      "height": 145,
      "weight": 3980,
      "pokedexEntry": "It’s the biggest of all Pokémon. It can dive to a depth of almost 10,000 feet on only one breath."
    },
    {
      "id": 322,
      "name": "numel",
      "baseExperience": 61,
      "height": 7,
      "weight": 240,
      "pokedexEntry": "Its humped back stores intensely hot magma. In rain, the magma cools, slowing Numel down."
    },
    {
      "id": 323,
      "name": "camerupt",
      "baseExperience": 161,
      "height": 19,
      "weight": 2200,
      "pokedexEntry": "It has volcanoes on its back. If magma builds up in its body, it shudders, then erupts violently."
    },
    {
      "id": 324,
      "name": "torkoal",
      "baseExperience": 165,
      "height": 5,
      "weight": 804,
      "pokedexEntry": "It burns coal inside its shell for energy. It blows out black soot if it is in a tough situation."
    },
    {
      "id": 325,
      "name": "spoink",
      "baseExperience": 66,
      "height": 7,
      "weight": 306,
      "pokedexEntry": "It bounces constantly, using its tail like a spring. The shock of bouncing keeps its heart beating."
    },
    {
      "id": 326,
      "name": "grumpig",
      "baseExperience": 165,
      "height": 9,
      "weight": 715,
      "pokedexEntry": "It uses black pearls to amplify its psychic power. It does an odd dance to gain control over foes."
    },
    {
      "id": 327,
      "name": "spinda",
      "baseExperience": 126,
      "height": 11,
      "weight": 50,
      "pokedexEntry": "No two Spinda have the same pattern of spots. Their tottering steps hinder the aim of foes."
    },
    {
      "id": 328,
      "name": "trapinch",
      "baseExperience": 58,
      "height": 7,
      "weight": 150,
      "pokedexEntry": "It makes a conical pit in desert sand and lies in wait at the bottom for prey to come tumbling down."
    },
    {
      "id": 329,
      "name": "vibrava",
      "baseExperience": 119,
      "height": 11,
      "weight": 153,
      "pokedexEntry": "It violently shudders its wings, generating ultrasonic waves to induce headaches in people."
    },
    {
      "id": 330,
      "name": "flygon",
      "baseExperience": 260,
      "height": 20,
      "weight": 820,
      "pokedexEntry": "It whips up sandstorms with powerful flaps of its wings. It is known as the Desert Spirit."
    },
    {
      "id": 331,
      "name": "cacnea",
      "baseExperience": 67,
      "height": 4,
      "weight": 513,
      "pokedexEntry": "By storing water in its body, this desert dweller can survive for 30 days without water."
    },
    {
      "id": 332,
      "name": "cacturne",
      "baseExperience": 166,
      "height": 13,
      "weight": 774,
      "pokedexEntry": "It becomes active at night, seeking prey that is exhausted from the day’s desert heat."
    },
    {
      "id": 333,
      "name": "swablu",
      "baseExperience": 62,
      "height": 4,
      "weight": 12,
      "pokedexEntry": "Its wings are like cotton tufts. If it perches on someone’s head, it looks like a cotton hat."
    },
    {
      "id": 334,
      "name": "altaria",
      "baseExperience": 172,
      "height": 11,
      "weight": 206,
      "pokedexEntry": "It looks like a fluffy cloud when it is in flight. It hums with its soprano voice."
    },
    {
      "id": 335,
      "name": "zangoose",
      "baseExperience": 160,
      "height": 13,
      "weight": 403,
      "pokedexEntry": "It has feuded with Seviper for many generations. Its sharp claws are its greatest weapons."
    },
    {
      "id": 336,
      "name": "seviper",
      "baseExperience": 160,
      "height": 27,
      "weight": 525,
      "pokedexEntry": "For many generations, it has feuded with Zangoose. It whets its bladed tail on rocks for battle."
    },
    {
      "id": 337,
      "name": "lunatone",
      "baseExperience": 161,
      "height": 10,
      "weight": 1680,
      "pokedexEntry": "It becomes active on nights with a full moon, so it is said to have some link to the lunar phases."
    },
    {
      "id": 338,
      "name": "solrock",
      "baseExperience": 161,
      "height": 12,
      "weight": 1540,
      "pokedexEntry": "This new Pokémon species is rumored to be an avatar of the sun. The Pokémon gives off light while spinning."
    },
    {
      "id": 339,
      "name": "barboach",
      "baseExperience": 58,
      "height": 4,
      "weight": 19,
      "pokedexEntry": "Makes its home in swamps with murky water. The poor visibility hides this Pokémon from predators, and the slime on its body makes grasping it difficult."
    },
    {
      "id": 340,
      "name": "whiscash",
      "baseExperience": 164,
      "height": 9,
      "weight": 236,
      "pokedexEntry": "Strikes its caudal fin against the swamp bed to shake the ground and startle its prey. It will then swallow the fleeing prey whole. People mistook this behavior as the cause of earthquakes."
    },
    {
      "id": 341,
      "name": "corphish",
      "baseExperience": 62,
      "height": 6,
      "weight": 115,
      "pokedexEntry": "Its hardy vitality enables it to adapt to any environment. Its pincers will never release prey."
    },
    {
      "id": 342,
      "name": "crawdaunt",
      "baseExperience": 164,
      "height": 11,
      "weight": 328,
      "pokedexEntry": "It is a ruffian that uses its pincers to pick up and toss out other Pokémon from its pond."
    },
    {
      "id": 343,
      "name": "baltoy",
      "baseExperience": 60,
      "height": 5,
      "weight": 215,
      "pokedexEntry": "It moves by spinning on its foot. It is a rare Pokémon that was discovered in ancient ruins."
    },
    {
      "id": 344,
      "name": "claydol",
      "baseExperience": 175,
      "height": 15,
      "weight": 1080,
      "pokedexEntry": "An ancient clay figurine was exposed to a mysterious ray of light, and it came to life as a Pokémon."
    },
    {
      "id": 345,
      "name": "lileep",
      "baseExperience": 71,
      "height": 10,
      "weight": 238,
      "pokedexEntry": "It lived on the seafloor 100 million years ago and was reanimated scientifically."
    },
    {
      "id": 346,
      "name": "cradily",
      "baseExperience": 173,
      "height": 15,
      "weight": 604,
      "pokedexEntry": "It lives in the shallows of warm seas. When the tide goes out, it digs up prey from beaches."
    },
    {
      "id": 347,
      "name": "anorith",
      "baseExperience": 71,
      "height": 7,
      "weight": 125,
      "pokedexEntry": "This Pokémon ancestor was reanimated from a fossil. It lived in the sea and hunted with its claws."
    },
    {
      "id": 348,
      "name": "armaldo",
      "baseExperience": 173,
      "height": 15,
      "weight": 682,
      "pokedexEntry": "It went ashore after evolving. Its entire body is clad in a sturdy armor."
    },
    {
      "id": 349,
      "name": "feebas",
      "baseExperience": 40,
      "height": 6,
      "weight": 74,
      "pokedexEntry": "It eats anything, so it can even live in polluted streams and lakes. No one pays any attention to it."
    },
    {
      "id": 350,
      "name": "milotic",
      "baseExperience": 189,
      "height": 62,
      "weight": 1620,
      "pokedexEntry": "It is the world’s most beautiful Pokémon. There are many works of art featuring Milotic."
    },
    {
      "id": 351,
      "name": "castform",
      "baseExperience": 147,
      "height": 3,
      "weight": 8,
      "pokedexEntry": "Its appearance changes with the weather. Recently, its molecules were found to be just like water."
    },
    {
      "id": 352,
      "name": "kecleon",
      "baseExperience": 154,
      "height": 10,
      "weight": 220,
      "pokedexEntry": "It can freely change its body’s color. The zigzag pattern on its belly doesn’t change, however."
    },
    {
      "id": 353,
      "name": "shuppet",
      "baseExperience": 59,
      "height": 6,
      "weight": 23,
      "pokedexEntry": "They love vengeful emotions and hang in rows under the eaves of houses where vengeful people live."
    },
    {
      "id": 354,
      "name": "banette",
      "baseExperience": 159,
      "height": 11,
      "weight": 125,
      "pokedexEntry": "A doll bore a grudge over being junked, and it became a Pokémon. It seeks the child that disowned it."
    },
    {
      "id": 355,
      "name": "duskull",
      "baseExperience": 59,
      "height": 8,
      "weight": 150,
      "pokedexEntry": "I’ve heard that the children of Hisui all begin to behave once they’ve been told the story of how this Pokémon roams about before the witching hour to spirit away misbehaving children."
    },
    {
      "id": 356,
      "name": "dusclops",
      "baseExperience": 159,
      "height": 16,
      "weight": 306,
      "pokedexEntry": "There are rumors that peeking inside its bandage-wrapped body will cause one to get pulled in through the gaps between the bandages, never to return. I’ve been too scared to verify."
    },
    {
      "id": 357,
      "name": "tropius",
      "baseExperience": 161,
      "height": 20,
      "weight": 1000,
      "pokedexEntry": "Because it continually ate only its favorite fruit, the fruit started growing around its neck."
    },
    {
      "id": 358,
      "name": "chimecho",
      "baseExperience": 159,
      "height": 6,
      "weight": 10,
      "pokedexEntry": "Can emit waves of air powerful enough to knock out prey taller than itself. I hypothesize that it amplifies the faint sound of wind within its body."
    },
    {
      "id": 359,
      "name": "absol",
      "baseExperience": 163,
      "height": 12,
      "weight": 470,
      "pokedexEntry": "It senses coming disasters and appears before people only to warn them of impending danger."
    },
    {
      "id": 360,
      "name": "wynaut",
      "baseExperience": 52,
      "height": 6,
      "weight": 140,
      "pokedexEntry": "They grow strong by pushing up against one another en masse. They love eating sweet fruit."
    },
    {
      "id": 361,
      "name": "snorunt",
      "baseExperience": 60,
      "height": 7,
      "weight": 168,
      "pokedexEntry": "Arrives alongside the first snow. It’s thought that homes Snorunt visit will prosper for many generations. By tradition, one might offer a lump of ice made from pure water at one’s front door."
    },
    {
      "id": 362,
      "name": "glalie",
      "baseExperience": 168,
      "height": 15,
      "weight": 2565,
      "pokedexEntry": "It covers its body with an armor of ice harder than steel. Uses its breath to freeze prey, which it then devours as if they were frozen desserts."
    },
    {
      "id": 363,
      "name": "spheal",
      "baseExperience": 58,
      "height": 8,
      "weight": 395,
      "pokedexEntry": "During the season when drift ice approaches the shore, Spheal prefers living on the ice—where fewer predators lurk—rather than the land. Its fur retains heat superbly and resists harsh cold."
    },
    {
      "id": 364,
      "name": "sealeo",
      "baseExperience": 144,
      "height": 11,
      "weight": 876,
      "pokedexEntry": "Its white whiskers are very sensitive. Sealeo will balance Spheal on the tip of its nose, checking its scent and its feel to be sure the Spheal is healthy."
    },
    {
      "id": 365,
      "name": "walrein",
      "baseExperience": 265,
      "height": 14,
      "weight": 1506,
      "pokedexEntry": "Its thick tusks are strong enough to shatter drift ice. They have been known to break, but they will grow back by the next year. The Hisui region is well known for these broken tusks."
    },
    {
      "id": 366,
      "name": "clamperl",
      "baseExperience": 69,
      "height": 4,
      "weight": 525,
      "pokedexEntry": "It makes a single pearl during its lifetime. The pearl is said to amplify psychic power."
    },
    {
      "id": 367,
      "name": "huntail",
      "baseExperience": 170,
      "height": 17,
      "weight": 270,
      "pokedexEntry": "It lives deep in the sea. With a tail shaped like a small fish, it attracts unsuspecting prey."
    },
    {
      "id": 368,
      "name": "gorebyss",
      "baseExperience": 170,
      "height": 18,
      "weight": 226,
      "pokedexEntry": "It lives at the bottom of the sea. In the springtime, its pink body turns more vivid for some reason."
    },
    {
      "id": 369,
      "name": "relicanth",
      "baseExperience": 170,
      "height": 10,
      "weight": 234,
      "pokedexEntry": "This rare Pokémon was discovered during a deep-sea exploration. It has not changed in over 100 million years."
    },
    {
      "id": 370,
      "name": "luvdisc",
      "baseExperience": 116,
      "height": 6,
      "weight": 87,
      "pokedexEntry": "It lives in warm seas. It is said that couples who find this Pokémon will be blessed with eternal love."
    },
    {
      "id": 371,
      "name": "bagon",
      "baseExperience": 60,
      "height": 6,
      "weight": 421,
      "pokedexEntry": "Dreaming of one day flying, it practices by leaping off cliffs every day."
    },
    {
      "id": 372,
      "name": "shelgon",
      "baseExperience": 147,
      "height": 11,
      "weight": 1105,
      "pokedexEntry": "Within its rugged shell, its cells have begun changing. The shell peels off the instant the Pokémon evolves."
    },
    {
      "id": 373,
      "name": "salamence",
      "baseExperience": 300,
      "height": 15,
      "weight": 1026,
      "pokedexEntry": "As a result of its long-held dream of flying, its cellular structure changed, and wings grew out."
    },
    {
      "id": 374,
      "name": "beldum",
      "baseExperience": 60,
      "height": 6,
      "weight": 952,
      "pokedexEntry": "They converse with one another by using magnetic pulses. In a swarm, they move in perfect unison."
    },
    {
      "id": 375,
      "name": "metang",
      "baseExperience": 147,
      "height": 12,
      "weight": 2025,
      "pokedexEntry": "It is formed by two Beldum joining together. Its steel body won’t be scratched if it collides with a jet."
    },
    {
      "id": 376,
      "name": "metagross",
      "baseExperience": 300,
      "height": 16,
      "weight": 5500,
      "pokedexEntry": "Metang combined to form it. With four brains, it has the intelligence of a supercomputer."
    },
    {
      "id": 377,
      "name": "regirock",
      "baseExperience": 290,
      "height": 17,
      "weight": 2300,
      "pokedexEntry": "Its entire body is made of rock. If any part chips off in battle, Regirock attaches rocks to repair itself."
    },
    {
      "id": 378,
      "name": "regice",
      "baseExperience": 290,
      "height": 18,
      "weight": 1750,
      "pokedexEntry": "Its body is made of ice from the ice age. It controls frigid air of −328 degrees Fahrenheit."
    },
    {
      "id": 379,
      "name": "registeel",
      "baseExperience": 290,
      "height": 19,
      "weight": 2050,
      "pokedexEntry": "Tempered by pressure underground over tens of thousands of years, its body cannot be scratched."
    },
    {
      "id": 380,
      "name": "latias",
      "baseExperience": 300,
      "height": 14,
      "weight": 400,
      "pokedexEntry": "Its body is covered with a down that can refract light in such a way that it becomes invisible."
    },
    {
      "id": 381,
      "name": "latios",
      "baseExperience": 300,
      "height": 20,
      "weight": 600,
      "pokedexEntry": "It is a highly intelligent Pokémon. By folding back its forelegs in flight, it can overtake jet planes."
    },
    {
      "id": 382,
      "name": "kyogre",
      "baseExperience": 335,
      "height": 45,
      "weight": 3520,
      "pokedexEntry": "It is said to have widened the seas by causing downpours. It had been asleep in a marine trench."
    },
    {
      "id": 383,
      "name": "groudon",
      "baseExperience": 335,
      "height": 35,
      "weight": 9500,
      "pokedexEntry": "It had been asleep in underground magma ever since it fiercely fought Kyogre long ago."
    },
    {
      "id": 384,
      "name": "rayquaza",
      "baseExperience": 340,
      "height": 70,
      "weight": 2065,
      "pokedexEntry": "It lives in the ozone layer far above the clouds and cannot be seen from the ground."
    },
    {
      "id": 385,
      "name": "jirachi",
      "baseExperience": 300,
      "height": 3,
      "weight": 11,
      "pokedexEntry": "It is said to wake up for just seven days every 1,000 years and use its power to grant any wish."
    },
    {
      "id": 386,
      "name": "deoxys-normal",
      "baseExperience": 270,
      "height": 17,
      "weight": 608,
      "pokedexEntry": "An alien virus that fell to earth on a meteorite underwent a DNA mutation to become this Pokémon."
    },
    {
      "id": 387,
      "name": "turtwig",
      "baseExperience": 64,
      "height": 4,
      "weight": 102,
      "pokedexEntry": "This Pokémon becomes more energetic the more sunlight there is. The part resembling a shell is similar to silt and is slightly damp and warm to the touch."
    },
    {
      "id": 388,
      "name": "grotle",
      "baseExperience": 142,
      "height": 11,
      "weight": 970,
      "pokedexEntry": "Appears where there is clean spring water. The fruit that grows on the shrubs on its shell is sweet, nutritious, and truly delicious."
    },
    {
      "id": 389,
      "name": "torterra",
      "baseExperience": 236,
      "height": 22,
      "weight": 3100,
      "pokedexEntry": "This remarkable, large-bodied Pokémon would serve beautifully as borrowed scenery for a garden, and its strength is peerless. Torterra roams the wilderness in search of clean water."
    },
    {
      "id": 390,
      "name": "chimchar",
      "baseExperience": 62,
      "height": 5,
      "weight": 62,
      "pokedexEntry": "Full of vigor and always in high spirits. It was once known by the name “Lantern-Tail” and feared as some kind of apparition."
    },
    {
      "id": 391,
      "name": "monferno",
      "baseExperience": 142,
      "height": 9,
      "weight": 220,
      "pokedexEntry": "The deeper the blue on its face, the more powerful it will grow to become. It leaps about every which way and lands powerful blows against its opponents with the flame on its tail."
    },
    {
      "id": 392,
      "name": "infernape",
      "baseExperience": 240,
      "height": 12,
      "weight": 550,
      "pokedexEntry": "A tall, hardy Pokémon with a dazzling appearance. It shrouds itself in flame and battles as if engaged in dance—truly a sight to behold."
    },
    {
      "id": 393,
      "name": "piplup",
      "baseExperience": 63,
      "height": 4,
      "weight": 52,
      "pokedexEntry": "Prefers cold climes and appears along coasts. It’s an adorable little thing—as cute as any child—but it’s also prideful, unwilling to accept handouts from people."
    },
    {
      "id": 394,
      "name": "prinplup",
      "baseExperience": 142,
      "height": 8,
      "weight": 230,
      "pokedexEntry": "It swims gracefully through the frigid sea and sings with a voice like the roaring tide. It has powerful, sturdy wings and dignity to match."
    },
    {
      "id": 395,
      "name": "empoleon",
      "baseExperience": 239,
      "height": 17,
      "weight": 845,
      "pokedexEntry": "Since ancient times, it has been revered by the people of Hisui, who call it the Master of the Waves. Its wings are a match for even master-crafted blades."
    },
    {
      "id": 396,
      "name": "starly",
      "baseExperience": 49,
      "height": 3,
      "weight": 20,
      "pokedexEntry": "They live in the fields and mountains, gathering in large flocks. Their cries are quite obnoxious. Though small, their wings are strong—a strike from them leaves pain that persists for a week."
    },
    {
      "id": 397,
      "name": "staravia",
      "baseExperience": 119,
      "height": 6,
      "weight": 155,
      "pokedexEntry": "They form remarkably large flocks and are constantly fighting amongst themselves. I suspect that those with magnificent plumes on their heads are the strong ones."
    },
    {
      "id": 398,
      "name": "staraptor",
      "baseExperience": 218,
      "height": 12,
      "weight": 249,
      "pokedexEntry": "It has left the flock, having gained strength enough to survive on its own. The astounding force with which Staraptor flies through the air allows it to carry away large, burly targets."
    },
    {
      "id": 399,
      "name": "bidoof",
      "baseExperience": 50,
      "height": 5,
      "weight": 200,
      "pokedexEntry": "Bidoof has an unsophisticated face and is rarely flustered by anything. There have been incidents involving Bidoof sauntering into villages and gnawing on the houses without a single care."
    },
    {
      "id": 400,
      "name": "bibarel",
      "baseExperience": 144,
      "height": 10,
      "weight": 315,
      "pokedexEntry": "Bibarel fur repels water and is also a fantastic material for heat retention. These Pokémon create dams on rivers to live in."
    },
    {
      "id": 401,
      "name": "kricketot",
      "baseExperience": 39,
      "height": 3,
      "weight": 22,
      "pokedexEntry": "When the trees take on new hues, more of these Pokémon appear. The tone they create by striking their antennae together resembles that of the marimba, an instrument of foreign lands."
    },
    {
      "id": 402,
      "name": "kricketune",
      "baseExperience": 134,
      "height": 10,
      "weight": 255,
      "pokedexEntry": "It uses its cutlass-like arms to produce sound, the melody of which varies from individual to individual. It is a worthwhile endeavor to seek out one’s favorite tunes."
    },
    {
      "id": 403,
      "name": "shinx",
      "baseExperience": 53,
      "height": 5,
      "weight": 95,
      "pokedexEntry": "Shakes its body to generate electricity. Its stature belies its aggression—one must be patient to tame this Pokémon."
    },
    {
      "id": 404,
      "name": "luxio",
      "baseExperience": 127,
      "height": 9,
      "weight": 305,
      "pokedexEntry": "Proudly uses its electrified claws as weapons. It seems to be a gracious Pokémon, evenly sharing the spoils of the hunt with others of its kind."
    },
    {
      "id": 405,
      "name": "luxray",
      "baseExperience": 262,
      "height": 14,
      "weight": 420,
      "pokedexEntry": "They form packs, each having one male as leader. Legends say that when Luxray’s two eyes shimmer with gold, the Pokémon can see through anything."
    },
    {
      "id": 406,
      "name": "budew",
      "baseExperience": 56,
      "height": 2,
      "weight": 12,
      "pokedexEntry": "When the sun’s light strengthens, the bud atop this Pokémon’s head opens. This is a sign to the people that the harsh winter is over, and the season of budding has begun."
    },
    {
      "id": 407,
      "name": "roserade",
      "baseExperience": 258,
      "height": 9,
      "weight": 145,
      "pokedexEntry": "Hidden within the bouquet on each hand are thorned whips loaded with virulent poison. Roserade moves gracefully as it corners its prey and mercilessly lashes them with its whips."
    },
    {
      "id": 408,
      "name": "cranidos",
      "baseExperience": 70,
      "height": 9,
      "weight": 315,
      "pokedexEntry": "An incredibly rare sight. They duel each other by ramming their heads together, and the resulting sound echoes throughout the area like the pealing of a bell."
    },
    {
      "id": 409,
      "name": "rampardos",
      "baseExperience": 173,
      "height": 16,
      "weight": 1025,
      "pokedexEntry": "Very little is known about its biology. Can knock down massive trees by smashing its beautiful, pearl-like crown against them."
    },
    {
      "id": 410,
      "name": "shieldon",
      "baseExperience": 70,
      "height": 5,
      "weight": 570,
      "pokedexEntry": "Much remains unknown about this Pokémon, as few have ever seen it. However, we know that it is calm and dislikes conflict, and it enjoys polishing its face against trees and rocks."
    },
    {
      "id": 411,
      "name": "bastiodon",
      "baseExperience": 173,
      "height": 13,
      "weight": 1495,
      "pokedexEntry": "Its face is sturdy—as strong as diamond—and this hardness offers a very stable defense. Much about this species is still unknown, such as its natural habitat."
    },
    {
      "id": 412,
      "name": "burmy",
      "baseExperience": 45,
      "height": 2,
      "weight": 34,
      "pokedexEntry": "If its cloak is even slightly damaged, Burmy will immediately repair it with whatever is close at hand. The Pokémon within the cloak is scrawny and vulnerable to the cold."
    },
    {
      "id": 413,
      "name": "wormadam-plant",
      "baseExperience": 148,
      "height": 5,
      "weight": 65,
      "pokedexEntry": "The cloak—fashioned from plant matter—has merged with the Pokémon and is now part of the body, like fur or skin. I suspect this fusion is an effect of the energy involved in evolution."
    },
    {
      "id": 414,
      "name": "mothim",
      "baseExperience": 148,
      "height": 9,
      "weight": 233,
      "pokedexEntry": "Scatters steel-colored scales as it flaps its wings. Despite being observed feeding primarily on the nectar of flowers, Mothim is not often seen around flower gardens."
    },
    {
      "id": 415,
      "name": "combee",
      "baseExperience": 49,
      "height": 3,
      "weight": 55,
      "pokedexEntry": "They swear fealty to a queen Pokémon and work diligently to gather nectar. Each swarm produces a different flavor of honey."
    },
    {
      "id": 416,
      "name": "vespiquen",
      "baseExperience": 166,
      "height": 12,
      "weight": 385,
      "pokedexEntry": "Commands its subjects to build its hive. It will dispatch any interlopers who dare sneak into its nest and use them as nourishment for itself."
    },
    {
      "id": 417,
      "name": "pachirisu",
      "baseExperience": 142,
      "height": 4,
      "weight": 39,
      "pokedexEntry": "A species related to the Pikachu line. Though Pachirisu is a calm Pokémon, it still presents a danger should one touch its electrified tail or cheeks."
    },
    {
      "id": 418,
      "name": "buizel",
      "baseExperience": 66,
      "height": 7,
      "weight": 295,
      "pokedexEntry": "It moves freely in the water by spinning its forked tail for propulsion. The resemblance to the screw of a steamboat is coincidental."
    },
    {
      "id": 419,
      "name": "floatzel",
      "baseExperience": 173,
      "height": 11,
      "weight": 335,
      "pokedexEntry": "Has a long, rather splendid flotation sac, which prevents Floatzel from drowning even in stormy seas. One might glimpse this species around fishing hamlets from time to time."
    },
    {
      "id": 420,
      "name": "cherubi",
      "baseExperience": 55,
      "height": 4,
      "weight": 33,
      "pokedexEntry": "Once the fruit growing alongside the main body is large and plump, Cherubi will use the nutrients within to evolve. The fruit then detaches, becoming nourishment for other creatures."
    },
    {
      "id": 421,
      "name": "cherrim",
      "baseExperience": 158,
      "height": 5,
      "weight": 93,
      "pokedexEntry": "Motionless, save for the occasional quiver. A rich array of Pokémon can be found gathered around it, drawn by the scent exuded from Cherrim’s folded petals."
    },
    {
      "id": 422,
      "name": "shellos",
      "baseExperience": 65,
      "height": 3,
      "weight": 63,
      "pokedexEntry": "Found in abundance on seashores bordering warm waters. Shellos are unexpectedly friendly and will crawl toward any person they see. Take care not to get coated in mucus!"
    },
    {
      "id": 423,
      "name": "gastrodon",
      "baseExperience": 166,
      "height": 9,
      "weight": 299,
      "pokedexEntry": "Eats beach sand for nourishment. Should one Gastrodon encounter another of a different color, a fierce battle will inevitably ensue."
    },
    {
      "id": 424,
      "name": "ambipom",
      "baseExperience": 169,
      "height": 12,
      "weight": 203,
      "pokedexEntry": "To affirm their kinship, members of this species will form a ring by linking their newly doubled tails together. On rare occasions, humans have been accepted into such rings."
    },
    {
      "id": 425,
      "name": "drifloon",
      "baseExperience": 70,
      "height": 4,
      "weight": 12,
      "pokedexEntry": "Said to lure away young children and carry them off to the afterlife. Some whisper that Drifloon are formed of reincarnated human souls, but these rumors are as yet unconfirmed."
    },
    {
      "id": 426,
      "name": "drifblim",
      "baseExperience": 174,
      "height": 12,
      "weight": 150,
      "pokedexEntry": "It drifts along at dusk, perfectly silent. Its transient, melancholy aspect touches some people deeply—every so often, one will come upon a song or poem devoted to Drifblim."
    },
    {
      "id": 427,
      "name": "buneary",
      "baseExperience": 70,
      "height": 4,
      "weight": 55,
      "pokedexEntry": "My hypothesis as to why Buneary rolls up its ears is that its hearing is far too keen. I surmise that the Pokémon protects its hearing by limiting the sound that may enter its ears."
    },
    {
      "id": 428,
      "name": "lopunny",
      "baseExperience": 168,
      "height": 12,
      "weight": 333,
      "pokedexEntry": "Its fur is warm and yet remarkably light. This Pokémon kicks as though it were a master of karate, driving back its opponents with ease."
    },
    {
      "id": 429,
      "name": "mismagius",
      "baseExperience": 173,
      "height": 9,
      "weight": 44,
      "pokedexEntry": "The incantations Mismagius chants can ward against misfortune, so a custom exists of inviting it into one’s home. Incur the Pokémon’s displeasure, however, and disaster will surely ensue."
    },
    {
      "id": 430,
      "name": "honchkrow",
      "baseExperience": 177,
      "height": 9,
      "weight": 273,
      "pokedexEntry": "One cry from this Pokémon, and a murder of Murkrow come flying. At such times, one would think the curtain of night had fallen, plunging the world into jet-black darkness."
    },
    {
      "id": 431,
      "name": "glameow",
      "baseExperience": 62,
      "height": 5,
      "weight": 39,
      "pokedexEntry": "Bewitches humans with its helical tail and piercing gaze. Its hidden claws are quite sharp as well, making this Pokémon an exceedingly tricky opponent if antagonized."
    },
    {
      "id": 432,
      "name": "purugly",
      "baseExperience": 158,
      "height": 10,
      "weight": 438,
      "pokedexEntry": "Though impudent and difficult to tame, Purugly enjoys great popularity due to its fur, the beauty of which surpasses even velveteen."
    },
    {
      "id": 433,
      "name": "chingling",
      "baseExperience": 57,
      "height": 2,
      "weight": 6,
      "pokedexEntry": "This Pokémon gave me an excruciating headache when it seemingly cried out without making a sound. Perhaps there are some sounds that the human ear is simply incapable of hearing."
    },
    {
      "id": 434,
      "name": "stunky",
      "baseExperience": 66,
      "height": 4,
      "weight": 192,
      "pokedexEntry": "The poison that gushes from its aft end is accompanied by an utterly evil-smelling odor with such potency that one whiff can induce memory loss."
    },
    {
      "id": 435,
      "name": "skuntank",
      "baseExperience": 168,
      "height": 10,
      "weight": 380,
      "pokedexEntry": "Sprays a poisonous fluid to take down prey. Sometimes, unable to stomach the stench of its own fluid, it leaves the bested prey uneaten."
    },
    {
      "id": 436,
      "name": "bronzor",
      "baseExperience": 60,
      "height": 5,
      "weight": 605,
      "pokedexEntry": "Floats using a mysterious energy. The pattern engraved upon its back is held as sacred and can sometimes be found in imagery from ancient cemeteries and other such timeworn places."
    },
    {
      "id": 437,
      "name": "bronzong",
      "baseExperience": 175,
      "height": 13,
      "weight": 1870,
      "pokedexEntry": "Some believe that its bell-like cry opens holes to another world. It has been revered as a deity since ancient times."
    },
    {
      "id": 438,
      "name": "bonsly",
      "baseExperience": 58,
      "height": 5,
      "weight": 150,
      "pokedexEntry": "Its tears elicit sympathy from those who see them, but do not be deceived! This expulsion of body water is merely a physiological mechanism for keeping itself in good health."
    },
    {
      "id": 439,
      "name": "mime-jr",
      "baseExperience": 62,
      "height": 6,
      "weight": 130,
      "pokedexEntry": "Known to turn up in bustling marketplaces now and again. It mimics people much as a child would, then watches how they react, eyes sparkling."
    },
    {
      "id": 440,
      "name": "happiny",
      "baseExperience": 110,
      "height": 6,
      "weight": 244,
      "pokedexEntry": "In imitation of Chansey, it keeps a round stone tucked into its belly pouch and cherishes it dearly. It gets along well with children and will sometimes play house with them for fun."
    },
    {
      "id": 441,
      "name": "chatot",
      "baseExperience": 144,
      "height": 5,
      "weight": 19,
      "pokedexEntry": "A versatile performer skilled in the imitation of human speech. It is said that older, more experienced Chatot can even understand the meaning of the words they mimic."
    },
    {
      "id": 442,
      "name": "spiritomb",
      "baseExperience": 170,
      "height": 10,
      "weight": 1080,
      "pokedexEntry": "It lays curses by thinking wicked thoughts. Writings tell that this Pokémon was born out of the assembly of five score and eight malevolent spirits."
    },
    {
      "id": 443,
      "name": "gible",
      "baseExperience": 60,
      "height": 7,
      "weight": 205,
      "pokedexEntry": "It nests in caves untouched by sunlight. Its sharp teeth may fall out when worn away or after an impact, but they regrow within a few days."
    },
    {
      "id": 444,
      "name": "gabite",
      "baseExperience": 144,
      "height": 14,
      "weight": 560,
      "pokedexEntry": "Though Gabite are usually of a violent disposition, when I gave one a glass bead it had been eyeing covetously, it suddenly became quite docile."
    },
    {
      "id": 445,
      "name": "garchomp",
      "baseExperience": 300,
      "height": 19,
      "weight": 950,
      "pokedexEntry": "Soars across the heavens at blinding speed—a magnificent sight! It has a feral disposition. Utmost caution is required if one meets a Garchomp out in the wilds."
    },
    {
      "id": 446,
      "name": "munchlax",
      "baseExperience": 78,
      "height": 6,
      "weight": 1050,
      "pokedexEntry": "Its robust stomach allows it to nonchalantly devour even rotted matter. It pays frequent visits to villages, seeking out food scraps intended for compost."
    },
    {
      "id": 447,
      "name": "riolu",
      "baseExperience": 57,
      "height": 7,
      "weight": 202,
      "pokedexEntry": "Though infantile in appearance, it has the mysterious ability to read the minds of humans. The pure of heart are met with Riolu’s approval, while those of ill nature earn only its loathing."
    },
    {
      "id": 448,
      "name": "lucario",
      "baseExperience": 184,
      "height": 12,
      "weight": 540,
      "pokedexEntry": "A most gallant-looking creature. It emits energy waves and controls them with precision, using them to sense even faraway beings. I have given the name “aura” to this power."
    },
    {
      "id": 449,
      "name": "hippopotas",
      "baseExperience": 66,
      "height": 8,
      "weight": 495,
      "pokedexEntry": "Though large and languid, Hippopotas is difficult to detect due to its tendency to burrow into and lurk beneath the soil. When agitated or excited, it expels sand from its nostrils."
    },
    {
      "id": 450,
      "name": "hippowdon",
      "baseExperience": 184,
      "height": 20,
      "weight": 3000,
      "pokedexEntry": "Short-tempered and easily moved to violence. It whips up whirlwinds of sand to crush its foes’ spirits, then goes in for the attack."
    },
    {
      "id": 451,
      "name": "skorupi",
      "baseExperience": 66,
      "height": 8,
      "weight": 120,
      "pokedexEntry": "Its claws are not only razor-sharp but poisonous, making Skorupi a highly dangerous Pokémon. It seems to be weakened by cold temperatures, however."
    },
    {
      "id": 452,
      "name": "drapion",
      "baseExperience": 175,
      "height": 13,
      "weight": 615,
      "pokedexEntry": "Has a brutish, ferocious temperament. With immense strength and a sturdy shell off which swords will bounce, it rampages about and wreaks havoc."
    },
    {
      "id": 453,
      "name": "croagunk",
      "baseExperience": 60,
      "height": 7,
      "weight": 230,
      "pokedexEntry": "A poison wielder with a dastardly personality. Despite such qualities, this species is afforded a measure of popularity due to its peculiar cry and comical features."
    },
    {
      "id": 454,
      "name": "toxicroak",
      "baseExperience": 172,
      "height": 13,
      "weight": 444,
      "pokedexEntry": "Its crimson claws contain a virulent toxin. This toxin can be made into a tonic by diluting it, mixing it with several types of wild grass, and boiling it down over two days."
    },
    {
      "id": 455,
      "name": "carnivine",
      "baseExperience": 159,
      "height": 14,
      "weight": 270,
      "pokedexEntry": "Though this is a plant Pokémon, it has a gluttonous and unruly temperament. Carnivine attacks its prey with its cavernous maw wide open."
    },
    {
      "id": 456,
      "name": "finneon",
      "baseExperience": 66,
      "height": 4,
      "weight": 70,
      "pokedexEntry": "What a gorgeous sight this Pokémon is as it swims with its long, pink-painted caudal fins fluttering behind it. Finneon’s beautiful appearance has led to its nickname: “finery fish.”"
    },
    {
      "id": 457,
      "name": "lumineon",
      "baseExperience": 161,
      "height": 12,
      "weight": 240,
      "pokedexEntry": "Uses its gleaming fins to hunt its prey. The view of Lumineon schooling near the surface of the sea at night is breathtaking— it’s as though there were shining stars right there."
    },
    {
      "id": 458,
      "name": "mantyke",
      "baseExperience": 69,
      "height": 10,
      "weight": 650,
      "pokedexEntry": "Though ball-like in shape, this Pokémon is a proficient swimmer. I have discovered that if a Mantyke spends much time with schools of Remoraid, it will eventually achieve evolution."
    },
    {
      "id": 459,
      "name": "snover",
      "baseExperience": 67,
      "height": 10,
      "weight": 505,
      "pokedexEntry": "One is likely to encounter this Pokémon while out in the snow. There are stories of Snover appearing in human settlements but doing no harm—rather, they bond with the children."
    },
    {
      "id": 460,
      "name": "abomasnow",
      "baseExperience": 173,
      "height": 22,
      "weight": 1355,
      "pokedexEntry": "A powerful Pokémon that can split huge boulders with ease. Dislikes associating with others and chooses to live quietly deep within the mountains, playing with the snow."
    },
    {
      "id": 461,
      "name": "weavile",
      "baseExperience": 179,
      "height": 11,
      "weight": 340,
      "pokedexEntry": "This species corners prey as a pack, under the guidance of a leader. Weavile displays increased cunning, leading me to speculate that its evolution caused further brain development."
    },
    {
      "id": 462,
      "name": "magnezone",
      "baseExperience": 268,
      "height": 12,
      "weight": 1800,
      "pokedexEntry": "I theorize that a special magnetic field influenced this Pokémon, changing its molecular structure and causing it to evolve. It emits strange radio waves toward space from its antenna."
    },
    {
      "id": 463,
      "name": "lickilicky",
      "baseExperience": 180,
      "height": 17,
      "weight": 1400,
      "pokedexEntry": "Its tongue can extend and contract freely, and it is capable of reaching lengths over 10 times Lickilicky’s height. Beware of the saliva, as it contains corrosive elements."
    },
    {
      "id": 464,
      "name": "rhyperior",
      "baseExperience": 268,
      "height": 24,
      "weight": 2828,
      "pokedexEntry": "This Pokémon evolved through use of a curious item. Its rocklike hide is composed of a mysterious substance and can withstand a blow from a masterwork sword with nary a scratch."
    },
    {
      "id": 465,
      "name": "tangrowth",
      "baseExperience": 187,
      "height": 20,
      "weight": 1286,
      "pokedexEntry": "Draped with long vines, it resembles a shrub in appearance. It swings bundles of vines as though they were arms, wrapping them around prey to ensnare them."
    },
    {
      "id": 466,
      "name": "electivire",
      "baseExperience": 270,
      "height": 18,
      "weight": 1386,
      "pokedexEntry": "Its evolution was induced by an unusual item, and its electrical output rises along with its heart rate. From its tails, it can unleash an electric current measuring 20,000 volts."
    },
    {
      "id": 467,
      "name": "magmortar",
      "baseExperience": 270,
      "height": 16,
      "weight": 680,
      "pokedexEntry": "Use of a strange item caused this Pokémon to evolve. Fireballs launched from the ends of its tubelike arms are hot enough to melt an iron pot in an instant."
    },
    {
      "id": 468,
      "name": "togekiss",
      "baseExperience": 273,
      "height": 15,
      "weight": 380,
      "pokedexEntry": "Scant few have ever sighted this Pokémon. After studying what literature remains, I am certain Togekiss will reveal itself when peace reigns in the land."
    },
    {
      "id": 469,
      "name": "yanmega",
      "baseExperience": 180,
      "height": 19,
      "weight": 515,
      "pokedexEntry": "Extremely violent. When hunting, it wastes none of its energy, aiming only for prey’s most vulnerable spots. Any who manage to tame this Pokémon must be of incredible bravery."
    },
    {
      "id": 470,
      "name": "leafeon",
      "baseExperience": 184,
      "height": 10,
      "weight": 255,
      "pokedexEntry": "Cells similar to those of plants have been found in its fur. Its hard tail can fell a large tree with one stroke, and the tail’s sharpness exceeds even that of a sword crafted by a master."
    },
    {
      "id": 471,
      "name": "glaceon",
      "baseExperience": 184,
      "height": 8,
      "weight": 259,
      "pokedexEntry": "Glaceon is able to lower its body temperature very quickly. It freezes the atmosphere, creating diamond dust that glitters like gems while it flutters and dances around."
    },
    {
      "id": 472,
      "name": "gliscor",
      "baseExperience": 179,
      "height": 20,
      "weight": 425,
      "pokedexEntry": "It glides soundlessly on pitch-black wings and sinks sharp fangs into the throat of its prey. It takes on a look of satisfaction once it has entirely drained its prey of blood."
    },
    {
      "id": 473,
      "name": "mamoswine",
      "baseExperience": 265,
      "height": 25,
      "weight": 2910,
      "pokedexEntry": "This species reached its zenith during the period known as the ice age. I suspect that Hisui’s frigid climate is in harmony with Mamoswine’s constitution, thus awakening hidden potential."
    },
    {
      "id": 474,
      "name": "porygon-z",
      "baseExperience": 268,
      "height": 9,
      "weight": 340,
      "pokedexEntry": "A curious item induced this evolution. The Pokémon’s offensive capabilities have greatly increased, but the strangeness of its behavior has magnified in equal measure. This worries me."
    },
    {
      "id": 475,
      "name": "gallade",
      "baseExperience": 259,
      "height": 16,
      "weight": 520,
      "pokedexEntry": "The blades extending from its elbows are sharper than the finest swords. Its swordsmanship, albeit self-taught, is astonishingly impressive."
    },
    {
      "id": 476,
      "name": "probopass",
      "baseExperience": 184,
      "height": 14,
      "weight": 3400,
      "pokedexEntry": "It is able to emit powerful magnetism, allowing it control over the iron sand that forms its luscious mustache. Using this iron sand, Probopass forms hard stones with which it smites its prey."
    },
    {
      "id": 477,
      "name": "dusknoir",
      "baseExperience": 263,
      "height": 22,
      "weight": 1066,
      "pokedexEntry": "Comes to those whose lives have come to an end and escorts their souls to the afterlife. Known to mistakenly take the souls of those who yet have life left in them, albeit rarely."
    },
    {
      "id": 478,
      "name": "froslass",
      "baseExperience": 168,
      "height": 13,
      "weight": 266,
      "pokedexEntry": "A Pokémon inhabited by the soul of a woman who died bearing a grudge in the snowy mountains. Legends of Froslass placing deathly curses on misbehaving men send shivers down my spine."
    },
    {
      "id": 479,
      "name": "rotom",
      "baseExperience": 154,
      "height": 3,
      "weight": 3,
      "pokedexEntry": "This bizarre Pokémon appears to be a will-o’-the-wisp powered by electricity. Be wary, as Rotom is both smart and mischievous."
    },
    {
      "id": 480,
      "name": "uxie",
      "baseExperience": 290,
      "height": 3,
      "weight": 3,
      "pokedexEntry": "A Pokémon feared but also respected for stealing away the memories of evildoers. I have found records that suggest Uxie holds dominion over knowledge."
    },
    {
      "id": 481,
      "name": "mesprit",
      "baseExperience": 290,
      "height": 3,
      "weight": 3,
      "pokedexEntry": "Known as the Being of Emotion. In legend, this Pokémon was feared, as any who showed disrespect would have their emotions thrown into disarray."
    },
    {
      "id": 482,
      "name": "azelf",
      "baseExperience": 290,
      "height": 3,
      "weight": 3,
      "pokedexEntry": "The dreaded Being of Willpower. Legends tell of this Pokémon manipulating the will of its adversaries and turning them into puppets of its own."
    },
    {
      "id": 483,
      "name": "dialga",
      "baseExperience": 340,
      "height": 54,
      "weight": 6830,
      "pokedexEntry": "This Pokémon is revered as a deity in Hisuian legend. The birth of Dialga was what caused the vast river of time to begin flowing in our world."
    },
    {
      "id": 484,
      "name": "palkia",
      "baseExperience": 340,
      "height": 42,
      "weight": 3360,
      "pokedexEntry": "This Pokémon is feared as a deity in Hisuian legend. The birth of Palkia was what caused the walls of our world to disappear, creating a sky that spans for infinity."
    },
    {
      "id": 485,
      "name": "heatran",
      "baseExperience": 300,
      "height": 17,
      "weight": 4300,
      "pokedexEntry": "Stories tell of this Pokémon being birthed from the boiling magma within Mount Coronet. Its molten-steel body holds many mysteries."
    },
    {
      "id": 486,
      "name": "regigigas",
      "baseExperience": 335,
      "height": 37,
      "weight": 4200,
      "pokedexEntry": "According to legend, Regigigas pulled landmasses together and bound them with rope to create the continent of Hisui. Though I have my doubts, the story could well contain a shred of truth."
    },
    {
      "id": 487,
      "name": "giratina-altered",
      "baseExperience": 340,
      "height": 45,
      "weight": 7500,
      "pokedexEntry": "There is one Hisuian verse that tells of a powerful light creating a deep shadow. I imagine that this deep shadow is Giratina."
    },
    {
      "id": 488,
      "name": "cresselia",
      "baseExperience": 300,
      "height": 15,
      "weight": 856,
      "pokedexEntry": "Cresselia is reminiscent of the crescent moon. It leaves a brilliant line of light in its wake as it flies across the night sky. I daresay it resembles the heavenly maiden who created the Milky Way."
    },
    {
      "id": 489,
      "name": "phione",
      "baseExperience": 216,
      "height": 4,
      "weight": 31,
      "pokedexEntry": "Can be seen floating offshore during seasons when the seas are warm. Its azure body blends in with the ocean waters—logic suggests this is a defense mechanism against natural predators."
    },
    {
      "id": 490,
      "name": "manaphy",
      "baseExperience": 270,
      "height": 3,
      "weight": 14,
      "pokedexEntry": "Rumored to migrate across the oceans and visit Hisui’s coastal waters only rarely. Although Manaphy resembles Phione, it is also quite different. The relation between the two is unclear."
    },
    {
      "id": 491,
      "name": "darkrai",
      "baseExperience": 270,
      "height": 15,
      "weight": 505,
      "pokedexEntry": "On a moonless night, a strange incident occurred in which every one of a village’s inhabitants suffered nightmares. The villagers attested that Darkrai appeared before them in these nightmares."
    },
    {
      "id": 492,
      "name": "shaymin-land",
      "baseExperience": 270,
      "height": 2,
      "weight": 21,
      "pokedexEntry": "When the turning of seasons brings the cruel winter to its end and the joyous people give thanks to the heavens, Shaymin appears and covers the withered land with flowers."
    },
    {
      "id": 493,
      "name": "arceus",
      "baseExperience": 324,
      "height": 32,
      "weight": 3200,
      "pokedexEntry": "It is the heavenly fount from which pours the light that shines across Hisui. Its luminance guides and protects all Pokémon. Hisuian mythology states that Arceus is the creator of all things."
    },
    {
      "id": 494,
      "name": "victini",
      "baseExperience": 300,
      "height": 4,
      "weight": 40,
      "pokedexEntry": "When it shares the infinite energy it creates, that being’s entire body will be overflowing with power."
    },
    {
      "id": 495,
      "name": "snivy",
      "baseExperience": 62,
      "height": 6,
      "weight": 81,
      "pokedexEntry": "They photosynthesize by bathing their tails in sunlight. When they are not feeling well, their tails droop."
    },
    {
      "id": 496,
      "name": "servine",
      "baseExperience": 145,
      "height": 8,
      "weight": 160,
      "pokedexEntry": "When it gets dirty, its leaves can’t be used in photosynthesis, so it always keeps itself clean."
    },
    {
      "id": 497,
      "name": "serperior",
      "baseExperience": 238,
      "height": 33,
      "weight": 630,
      "pokedexEntry": "It can stop its opponents’ movements with just a glare. It takes in solar energy and boosts it internally."
    },
    {
      "id": 498,
      "name": "tepig",
      "baseExperience": 62,
      "height": 5,
      "weight": 99,
      "pokedexEntry": "It loves to eat roasted berries, but sometimes it gets too excited and burns them to a crisp."
    },
    {
      "id": 499,
      "name": "pignite",
      "baseExperience": 146,
      "height": 10,
      "weight": 555,
      "pokedexEntry": "When its internal fire flares up, its movements grow sharper and faster. When in trouble, it emits smoke."
    },
    {
      "id": 500,
      "name": "emboar",
      "baseExperience": 238,
      "height": 16,
      "weight": 1500,
      "pokedexEntry": "It has mastered fast and powerful fighting moves. It grows a beard of fire."
    },
    {
      "id": 501,
      "name": "oshawott",
      "baseExperience": 62,
      "height": 5,
      "weight": 59,
      "pokedexEntry": "This Pokémon from the Unova region uses the shell on its belly as a weapon to cut down its foes. Thus, I’ve conferred upon this shell the name “scalchop.”"
    },
    {
      "id": 502,
      "name": "dewott",
      "baseExperience": 145,
      "height": 8,
      "weight": 245,
      "pokedexEntry": "Its exquisite double-scalchop technique is likely the result of daily training, and it can send even masters of the blade fleeing in defeat."
    },
    {
      "id": 503,
      "name": "samurott",
      "baseExperience": 238,
      "height": 15,
      "weight": 946,
      "pokedexEntry": "One swing of the sword incorporated in its armor can fell an opponent. A simple glare from one of them quiets everybody."
    },
    {
      "id": 504,
      "name": "patrat",
      "baseExperience": 51,
      "height": 5,
      "weight": 116,
      "pokedexEntry": "Extremely cautious, one of them will always be on the lookout, but it won’t notice a foe coming from behind."
    },
    {
      "id": 505,
      "name": "watchog",
      "baseExperience": 147,
      "height": 11,
      "weight": 270,
      "pokedexEntry": "When they see an enemy, their tails stand high, and they spit the seeds of berries stored in their cheek pouches."
    },
    {
      "id": 506,
      "name": "lillipup",
      "baseExperience": 55,
      "height": 4,
      "weight": 41,
      "pokedexEntry": "This Pokémon is far brighter than the average child, and Lillipup won’t forget the love it receives or any abuse it suffers."
    },
    {
      "id": 507,
      "name": "herdier",
      "baseExperience": 130,
      "height": 9,
      "weight": 147,
      "pokedexEntry": "The black fur that covers this Pokémon’s body is dense and springy. Even sharp fangs bounce right off."
    },
    {
      "id": 508,
      "name": "stoutland",
      "baseExperience": 250,
      "height": 12,
      "weight": 610,
      "pokedexEntry": "Stoutland is immensely proud of its impressive moustache. It’s said that moustache length is what determines social standing among this species."
    },
    {
      "id": 509,
      "name": "purrloin",
      "baseExperience": 56,
      "height": 4,
      "weight": 101,
      "pokedexEntry": "Opponents that get drawn in by its adorable behavior come away with stinging scratches from its claws and stinging pride from its laughter."
    },
    {
      "id": 510,
      "name": "liepard",
      "baseExperience": 156,
      "height": 11,
      "weight": 375,
      "pokedexEntry": "This stealthy Pokémon sneaks up behind prey without making any sound at all. It competes with Thievul for territory."
    },
    {
      "id": 511,
      "name": "pansage",
      "baseExperience": 63,
      "height": 6,
      "weight": 105,
      "pokedexEntry": "It’s good at finding berries and gathers them from all over. It’s kind enough to share them with friends."
    },
    {
      "id": 512,
      "name": "simisage",
      "baseExperience": 174,
      "height": 11,
      "weight": 305,
      "pokedexEntry": "Ill tempered, it fights by swinging its barbed tail around wildly. The leaf growing on its head is very bitter."
    },
    {
      "id": 513,
      "name": "pansear",
      "baseExperience": 63,
      "height": 6,
      "weight": 110,
      "pokedexEntry": "This Pokémon lives in caves in volcanoes. The fire within the tuft on its head can reach 600 degrees Fahrenheit."
    },
    {
      "id": 514,
      "name": "simisear",
      "baseExperience": 174,
      "height": 10,
      "weight": 280,
      "pokedexEntry": "When it gets excited, embers rise from its head and tail and it gets hot. For some reason, it loves sweets."
    },
    {
      "id": 515,
      "name": "panpour",
      "baseExperience": 63,
      "height": 6,
      "weight": 135,
      "pokedexEntry": "The water stored inside the tuft on its head is full of nutrients. Plants that receive its water grow large."
    },
    {
      "id": 516,
      "name": "simipour",
      "baseExperience": 174,
      "height": 10,
      "weight": 290,
      "pokedexEntry": "It prefers places with clean water. When its tuft runs low, it replenishes it by siphoning up water with its tail."
    },
    {
      "id": 517,
      "name": "munna",
      "baseExperience": 58,
      "height": 6,
      "weight": 233,
      "pokedexEntry": "It eats dreams and releases mist. The mist is pink when it’s eating a good dream, and black when it’s eating a nightmare."
    },
    {
      "id": 518,
      "name": "musharna",
      "baseExperience": 170,
      "height": 11,
      "weight": 605,
      "pokedexEntry": "It drowses and dreams all the time. It’s best to leave it be if it’s just woken up, as it’s a terrible grump when freshly roused from sleep."
    },
    {
      "id": 519,
      "name": "pidove",
      "baseExperience": 53,
      "height": 3,
      "weight": 21,
      "pokedexEntry": "It’s forgetful and not very bright, but many Trainers love it anyway for its friendliness and sincerity."
    },
    {
      "id": 520,
      "name": "tranquill",
      "baseExperience": 125,
      "height": 6,
      "weight": 150,
      "pokedexEntry": "These bright Pokémon have acute memories. Apparently delivery workers often choose them as their partners."
    },
    {
      "id": 521,
      "name": "unfezant",
      "baseExperience": 244,
      "height": 12,
      "weight": 290,
      "pokedexEntry": "Males have plumage on their heads. They will never let themselves feel close to anyone other than their Trainers."
    },
    {
      "id": 522,
      "name": "blitzle",
      "baseExperience": 59,
      "height": 8,
      "weight": 298,
      "pokedexEntry": "Its mane shines when it discharges electricity. They use the frequency and rhythm of these flashes to communicate."
    },
    {
      "id": 523,
      "name": "zebstrika",
      "baseExperience": 174,
      "height": 16,
      "weight": 795,
      "pokedexEntry": "They have lightning-like movements. When Zebstrika run at full speed, the sound of thunder reverberates."
    },
    {
      "id": 524,
      "name": "roggenrola",
      "baseExperience": 56,
      "height": 4,
      "weight": 180,
      "pokedexEntry": "When it detects a noise, it starts to move. The energy core inside it makes this Pokémon slightly warm to the touch."
    },
    {
      "id": 525,
      "name": "boldore",
      "baseExperience": 137,
      "height": 9,
      "weight": 1020,
      "pokedexEntry": "It relies on sound in order to monitor what’s in its vicinity. When angered, it will attack without ever changing the direction it’s facing."
    },
    {
      "id": 526,
      "name": "gigalith",
      "baseExperience": 258,
      "height": 17,
      "weight": 2600,
      "pokedexEntry": "Although its energy blasts can blow away a dump truck, they have a limitation— they can only be fired when the sun is out."
    },
    {
      "id": 527,
      "name": "woobat",
      "baseExperience": 65,
      "height": 4,
      "weight": 21,
      "pokedexEntry": "It emits ultrasonic waves as it flutters about, searching for its prey—bug Pokémon."
    },
    {
      "id": 528,
      "name": "swoobat",
      "baseExperience": 149,
      "height": 9,
      "weight": 105,
      "pokedexEntry": "The auspicious shape of this Pokémon’s nose apparently led some regions to consider Swoobat a symbol of good luck."
    },
    {
      "id": 529,
      "name": "drilbur",
      "baseExperience": 66,
      "height": 3,
      "weight": 85,
      "pokedexEntry": "It’s a digger, using its claws to burrow through the ground. It causes damage to vegetable crops, so many farmers have little love for it."
    },
    {
      "id": 530,
      "name": "excadrill",
      "baseExperience": 178,
      "height": 7,
      "weight": 404,
      "pokedexEntry": "Known as the Drill King, this Pokémon can tunnel through the terrain at speeds of over 90 mph."
    },
    {
      "id": 531,
      "name": "audino",
      "baseExperience": 390,
      "height": 11,
      "weight": 310,
      "pokedexEntry": "This Pokémon has a kind heart. By touching with its feelers, Audino can gauge other creatures’ feelings and physical conditions."
    },
    {
      "id": 532,
      "name": "timburr",
      "baseExperience": 61,
      "height": 6,
      "weight": 125,
      "pokedexEntry": "Timburr that have started carrying logs that are about three times their size are nearly ready to evolve."
    },
    {
      "id": 533,
      "name": "gurdurr",
      "baseExperience": 142,
      "height": 12,
      "weight": 400,
      "pokedexEntry": "Gurdurr excels at demolition—construction is not its forte. In any case, there’s skill in the way this Pokémon wields its metal beam."
    },
    {
      "id": 534,
      "name": "conkeldurr",
      "baseExperience": 253,
      "height": 14,
      "weight": 870,
      "pokedexEntry": "When going all out, this Pokémon throws aside its concrete pillars and leaps at opponents to pummel them with its fists."
    },
    {
      "id": 535,
      "name": "tympole",
      "baseExperience": 59,
      "height": 5,
      "weight": 45,
      "pokedexEntry": "It uses sound waves to communicate with others of its kind. People and other Pokémon species can’t hear its cries of warning."
    },
    {
      "id": 536,
      "name": "palpitoad",
      "baseExperience": 134,
      "height": 8,
      "weight": 170,
      "pokedexEntry": "On occasion, their cries are sublimely pleasing to the ear. Palpitoad with larger lumps on their bodies can sing with a wider range of sounds."
    },
    {
      "id": 537,
      "name": "seismitoad",
      "baseExperience": 255,
      "height": 15,
      "weight": 620,
      "pokedexEntry": "This Pokémon is popular among the elderly, who say the vibrations of its lumps are great for massages."
    },
    {
      "id": 538,
      "name": "throh",
      "baseExperience": 163,
      "height": 13,
      "weight": 555,
      "pokedexEntry": "They train in groups of five. Any member that can’t keep up will discard its belt and leave the group."
    },
    {
      "id": 539,
      "name": "sawk",
      "baseExperience": 163,
      "height": 14,
      "weight": 510,
      "pokedexEntry": "The karate chops of a Sawk that’s trained itself to the limit can cleave the ocean itself."
    },
    {
      "id": 540,
      "name": "sewaddle",
      "baseExperience": 62,
      "height": 3,
      "weight": 25,
      "pokedexEntry": "Since this Pokémon makes its own clothes out of leaves, it is a popular mascot for fashion designers."
    },
    {
      "id": 541,
      "name": "swadloon",
      "baseExperience": 133,
      "height": 5,
      "weight": 73,
      "pokedexEntry": "It protects itself from the cold by wrapping up in leaves. It stays on the move, eating leaves in forests."
    },
    {
      "id": 542,
      "name": "leavanny",
      "baseExperience": 225,
      "height": 12,
      "weight": 205,
      "pokedexEntry": "It keeps its eggs warm with heat from fermenting leaves. It also uses leaves to make warm wrappings for Sewaddle."
    },
    {
      "id": 543,
      "name": "venipede",
      "baseExperience": 52,
      "height": 4,
      "weight": 53,
      "pokedexEntry": "Its fangs are highly venomous. If this Pokémon finds prey it thinks it can eat, it leaps for them without any thought of how things might turn out."
    },
    {
      "id": 544,
      "name": "whirlipede",
      "baseExperience": 126,
      "height": 12,
      "weight": 585,
      "pokedexEntry": "Whirlipede protects itself with a sturdy shell and poisonous spikes while it stores up the energy it’ll need for evolution."
    },
    {
      "id": 545,
      "name": "scolipede",
      "baseExperience": 243,
      "height": 25,
      "weight": 2005,
      "pokedexEntry": "Scolipede engage in fierce territorial battles with Centiskorch. At the end of one of these battles, the victor makes a meal of the loser."
    },
    {
      "id": 546,
      "name": "cottonee",
      "baseExperience": 56,
      "height": 3,
      "weight": 6,
      "pokedexEntry": "Weaving together the cotton of both Cottonee and Eldegoss produces exquisite cloth that’s highly prized by many luxury brands."
    },
    {
      "id": 547,
      "name": "whimsicott",
      "baseExperience": 168,
      "height": 7,
      "weight": 66,
      "pokedexEntry": "As long as this Pokémon bathes in sunlight, its cotton keeps growing. If too much cotton fluff builds up, Whimsicott tears it off and scatters it."
    },
    {
      "id": 548,
      "name": "petilil",
      "baseExperience": 56,
      "height": 5,
      "weight": 66,
      "pokedexEntry": "The leaves on its head are highly valued for medicinal purposes. Dry the leaves in the sun, boil them, and then drink the bitter decoction for remarkably effective relief from fatigue."
    },
    {
      "id": 549,
      "name": "lilligant",
      "baseExperience": 168,
      "height": 11,
      "weight": 163,
      "pokedexEntry": "Essential oils made from Lilligant flowers have a sublime scent, but they’re also staggeringly expensive."
    },
    {
      "id": 550,
      "name": "basculin-red-striped",
      "baseExperience": 161,
      "height": 10,
      "weight": 180,
      "pokedexEntry": "Red and blue Basculin usually do not get along, but sometimes members of one school mingle with the other’s school."
    },
    {
      "id": 551,
      "name": "sandile",
      "baseExperience": 58,
      "height": 7,
      "weight": 152,
      "pokedexEntry": "Sandile is small, but its legs and lower body are powerful. Pushing sand aside as it goes, Sandile moves through the desert as if it’s swimming."
    },
    {
      "id": 552,
      "name": "krokorok",
      "baseExperience": 123,
      "height": 10,
      "weight": 334,
      "pokedexEntry": "Although this Pokémon has specialized eyes that allow it to see in the dark, Krokorok won’t move much at night—the desert gets cold after sunset."
    },
    {
      "id": 553,
      "name": "krookodile",
      "baseExperience": 260,
      "height": 15,
      "weight": 963,
      "pokedexEntry": "While terribly aggressive, Krookodile also has the patience to stay hidden under sand for days, lying in wait for prey."
    },
    {
      "id": 554,
      "name": "darumaka",
      "baseExperience": 63,
      "height": 6,
      "weight": 375,
      "pokedexEntry": "This popular symbol of good fortune will never fall over in its sleep, no matter how it’s pushed or pulled."
    },
    {
      "id": 555,
      "name": "darmanitan-standard",
      "baseExperience": 168,
      "height": 13,
      "weight": 929,
      "pokedexEntry": "Its internal fire burns at 2,500 degrees Fahrenheit, making enough power that it can destroy a dump truck with one punch."
    },
    {
      "id": 556,
      "name": "maractus",
      "baseExperience": 161,
      "height": 10,
      "weight": 280,
      "pokedexEntry": "Once each year, this Pokémon scatters its seeds. They’re jam-packed with nutrients, making them a precious food source out in the desert."
    },
    {
      "id": 557,
      "name": "dwebble",
      "baseExperience": 65,
      "height": 3,
      "weight": 145,
      "pokedexEntry": "It first tries to find a rock to live in, but if there are no suitable rocks to be found, Dwebble may move in to the ports of a Hippowdon."
    },
    {
      "id": 558,
      "name": "crustle",
      "baseExperience": 170,
      "height": 14,
      "weight": 2000,
      "pokedexEntry": "Its thick claws are its greatest weapons. They’re mighty enough to crack Rhyperior’s carapace."
    },
    {
      "id": 559,
      "name": "scraggy",
      "baseExperience": 70,
      "height": 6,
      "weight": 118,
      "pokedexEntry": "It protects itself with its durable skin. It’s thought that this Pokémon will evolve once its skin has completely stretched out."
    },
    {
      "id": 560,
      "name": "scrafty",
      "baseExperience": 171,
      "height": 11,
      "weight": 300,
      "pokedexEntry": "While mostly known for having the temperament of an aggressive ruffian, this Pokémon takes very good care of its family, friends, and territory."
    },
    {
      "id": 561,
      "name": "sigilyph",
      "baseExperience": 172,
      "height": 14,
      "weight": 140,
      "pokedexEntry": "A discovery was made in the desert where Sigilyph fly. The ruins of what may have been an ancient city were found beneath the sands."
    },
    {
      "id": 562,
      "name": "yamask",
      "baseExperience": 61,
      "height": 5,
      "weight": 15,
      "pokedexEntry": "The spirit of a person from a bygone age became this Pokémon. It rambles through ruins, searching for someone who knows its face."
    },
    {
      "id": 563,
      "name": "cofagrigus",
      "baseExperience": 169,
      "height": 17,
      "weight": 765,
      "pokedexEntry": "There are many depictions of Cofagrigus decorating ancient tombs. They’re symbols of the wealth that kings of bygone eras had."
    },
    {
      "id": 564,
      "name": "tirtouga",
      "baseExperience": 71,
      "height": 7,
      "weight": 165,
      "pokedexEntry": "Tirtouga is considered to be the ancestor of many turtle Pokémon. It was restored to life from a fossil."
    },
    {
      "id": 565,
      "name": "carracosta",
      "baseExperience": 173,
      "height": 12,
      "weight": 810,
      "pokedexEntry": "This Pokémon emerges from the water in search of prey despite the fact that it moves more slowly on land."
    },
    {
      "id": 566,
      "name": "archen",
      "baseExperience": 71,
      "height": 5,
      "weight": 95,
      "pokedexEntry": "Archen is said to be the ancestor of bird Pokémon. It lived in treetops, eating berries and bug Pokémon."
    },
    {
      "id": 567,
      "name": "archeops",
      "baseExperience": 177,
      "height": 14,
      "weight": 320,
      "pokedexEntry": "Though capable of flight, Archeops was apparently better at hunting on the ground."
    },
    {
      "id": 568,
      "name": "trubbish",
      "baseExperience": 66,
      "height": 6,
      "weight": 310,
      "pokedexEntry": "This Pokémon was born from a bag stuffed with trash. Galarian Weezing relish the fumes belched by Trubbish."
    },
    {
      "id": 569,
      "name": "garbodor",
      "baseExperience": 166,
      "height": 19,
      "weight": 1073,
      "pokedexEntry": "The toxic liquid it launches from its right arm is so virulent that it can kill a weakened creature instantly."
    },
    {
      "id": 570,
      "name": "zorua",
      "baseExperience": 66,
      "height": 7,
      "weight": 125,
      "pokedexEntry": "Zorua sometimes transforms into a person and goes into cities to search for food. When Zorua does this, it usually takes on the form of a child."
    },
    {
      "id": 571,
      "name": "zoroark",
      "baseExperience": 179,
      "height": 16,
      "weight": 811,
      "pokedexEntry": "Seeking to ease the burden of their solitude, lonely Trainers tell Zoroark to show illusions to them."
    },
    {
      "id": 572,
      "name": "minccino",
      "baseExperience": 60,
      "height": 4,
      "weight": 58,
      "pokedexEntry": "They pet each other with their tails as a form of greeting. Of the two, the one whose tail is fluffier is a bit more boastful."
    },
    {
      "id": 573,
      "name": "cinccino",
      "baseExperience": 165,
      "height": 5,
      "weight": 75,
      "pokedexEntry": "A special oil that seeps through their fur helps them avoid attacks. The oil fetches a high price at market."
    },
    {
      "id": 574,
      "name": "gothita",
      "baseExperience": 58,
      "height": 4,
      "weight": 58,
      "pokedexEntry": "Even when nobody seems to be around, Gothita can still be heard making a muted cry. Many believe it’s speaking to something only it can see."
    },
    {
      "id": 575,
      "name": "gothorita",
      "baseExperience": 137,
      "height": 7,
      "weight": 180,
      "pokedexEntry": "On nights when the stars shine, this Pokémon’s psychic power is at its strongest. It’s unknown just what link Gothorita has to the greater universe."
    },
    {
      "id": 576,
      "name": "gothitelle",
      "baseExperience": 245,
      "height": 15,
      "weight": 440,
      "pokedexEntry": "A criminal who was shown his fate by a Gothitelle went missing that same day and was never seen again."
    },
    {
      "id": 577,
      "name": "solosis",
      "baseExperience": 58,
      "height": 3,
      "weight": 10,
      "pokedexEntry": "Many say that the special liquid covering this Pokémon’s body would allow it to survive in the vacuum of space."
    },
    {
      "id": 578,
      "name": "duosion",
      "baseExperience": 130,
      "height": 6,
      "weight": 80,
      "pokedexEntry": "Its brain has split into two, and the two halves rarely think alike. Its actions are utterly unpredictable."
    },
    {
      "id": 579,
      "name": "reuniclus",
      "baseExperience": 245,
      "height": 10,
      "weight": 201,
      "pokedexEntry": "It’s said that drinking the liquid surrounding Reuniclus grants wisdom. Problem is, the liquid is highly toxic to anything besides Reuniclus itself."
    },
    {
      "id": 580,
      "name": "ducklett",
      "baseExperience": 61,
      "height": 5,
      "weight": 55,
      "pokedexEntry": "They are better at swimming than flying, and they happily eat their favorite food, peat moss, as they dive underwater."
    },
    {
      "id": 581,
      "name": "swanna",
      "baseExperience": 166,
      "height": 13,
      "weight": 242,
      "pokedexEntry": "Swanna start to dance at dusk. The one dancing in the middle is the leader of the flock."
    },
    {
      "id": 582,
      "name": "vanillite",
      "baseExperience": 61,
      "height": 4,
      "weight": 57,
      "pokedexEntry": "Supposedly, this Pokémon was born from an icicle. It spews out freezing air at −58 degrees Fahrenheit to make itself more comfortable."
    },
    {
      "id": 583,
      "name": "vanillish",
      "baseExperience": 138,
      "height": 11,
      "weight": 410,
      "pokedexEntry": "It blasts enemies with cold air reaching −148 degrees Fahrenheit, freezing them solid. But it spares their lives afterward—it’s a kind Pokémon."
    },
    {
      "id": 584,
      "name": "vanilluxe",
      "baseExperience": 268,
      "height": 13,
      "weight": 575,
      "pokedexEntry": "People believe this Pokémon formed when two Vanillish stuck together. Its body temperature is roughly 21 degrees Fahrenheit."
    },
    {
      "id": 585,
      "name": "deerling",
      "baseExperience": 67,
      "height": 6,
      "weight": 195,
      "pokedexEntry": "The turning of the seasons changes the color and scent of this Pokémon’s fur. People use it to mark the seasons."
    },
    {
      "id": 586,
      "name": "sawsbuck",
      "baseExperience": 166,
      "height": 19,
      "weight": 925,
      "pokedexEntry": "They migrate according to the seasons, so some people call Sawsbuck the harbingers of spring."
    },
    {
      "id": 587,
      "name": "emolga",
      "baseExperience": 150,
      "height": 4,
      "weight": 50,
      "pokedexEntry": "This Pokémon absolutely loves sweet berries. Sometimes it stuffs its cheeks full of so much food that it can’t fly properly."
    },
    {
      "id": 588,
      "name": "karrablast",
      "baseExperience": 63,
      "height": 5,
      "weight": 59,
      "pokedexEntry": "It spits a liquid from its mouth to melt through Shelmet’s shell. Karrablast doesn’t eat the shell— it eats only the contents."
    },
    {
      "id": 589,
      "name": "escavalier",
      "baseExperience": 173,
      "height": 10,
      "weight": 330,
      "pokedexEntry": "It charges its enemies, lances at the ready. An image of one of its duels is captured in a famous painting of Escavalier clashing with Sirfetch’d."
    },
    {
      "id": 590,
      "name": "foongus",
      "baseExperience": 59,
      "height": 2,
      "weight": 10,
      "pokedexEntry": "The spores released from this Pokémon’s hands are highly poisonous, but when thoroughly dried, the spores can be used as stomach medicine."
    },
    {
      "id": 591,
      "name": "amoonguss",
      "baseExperience": 162,
      "height": 6,
      "weight": 105,
      "pokedexEntry": "Amoonguss generally doesn’t move much. It tends to stand still near Poké Balls that have been dropped on the ground."
    },
    {
      "id": 592,
      "name": "frillish",
      "baseExperience": 67,
      "height": 12,
      "weight": 330,
      "pokedexEntry": "Using the invisible poison spikes on its veillike arms and legs, it paralyzes its enemies and causes them to drown."
    },
    {
      "id": 593,
      "name": "jellicent",
      "baseExperience": 168,
      "height": 22,
      "weight": 1350,
      "pokedexEntry": "Fishermen are terrified of Jellicent. It’s rumored to drag them into the sea and steal their lives away."
    },
    {
      "id": 594,
      "name": "alomomola",
      "baseExperience": 165,
      "height": 12,
      "weight": 316,
      "pokedexEntry": "The reason it helps Pokémon in a weakened condition is that any Pokémon coming after them may also attack Alomomola."
    },
    {
      "id": 595,
      "name": "joltik",
      "baseExperience": 64,
      "height": 1,
      "weight": 6,
      "pokedexEntry": "Joltik latch on to other Pokémon and suck out static electricity. They’re often found sticking to Yamper’s hindquarters."
    },
    {
      "id": 596,
      "name": "galvantula",
      "baseExperience": 165,
      "height": 8,
      "weight": 143,
      "pokedexEntry": "It lays traps of electrified threads near the nests of bird Pokémon, aiming to snare chicks that are not yet good at flying."
    },
    {
      "id": 597,
      "name": "ferroseed",
      "baseExperience": 61,
      "height": 6,
      "weight": 188,
      "pokedexEntry": "Mossy caves are their preferred dwellings. Enzymes contained in mosses help Ferroseed’s spikes grow big and strong."
    },
    {
      "id": 598,
      "name": "ferrothorn",
      "baseExperience": 171,
      "height": 10,
      "weight": 1100,
      "pokedexEntry": "Its spikes are harder than steel. This Pokémon crawls across rock walls by stabbing the spikes on its feelers into the stone."
    },
    {
      "id": 599,
      "name": "klink",
      "baseExperience": 60,
      "height": 3,
      "weight": 210,
      "pokedexEntry": "It’s suspected that Klink were the inspiration behind ancient people’s invention of the first gears."
    },
    {
      "id": 600,
      "name": "klang",
      "baseExperience": 154,
      "height": 6,
      "weight": 510,
      "pokedexEntry": "Many companies in the Galar region choose Klang as their logo. This Pokémon is considered the symbol of industrial technology."
    },
    {
      "id": 601,
      "name": "klinklang",
      "baseExperience": 260,
      "height": 6,
      "weight": 810,
      "pokedexEntry": "The three gears that compose this Pokémon spin at high speed. Its new spiked gear isn’t a living creature."
    },
    {
      "id": 602,
      "name": "tynamo",
      "baseExperience": 55,
      "height": 2,
      "weight": 3,
      "pokedexEntry": "One alone can emit only a trickle of electricity, so a group of them gathers to unleash a powerful electric shock."
    },
    {
      "id": 603,
      "name": "eelektrik",
      "baseExperience": 142,
      "height": 12,
      "weight": 220,
      "pokedexEntry": "These Pokémon have a big appetite. When they spot their prey, they attack it and paralyze it with electricity."
    },
    {
      "id": 604,
      "name": "eelektross",
      "baseExperience": 232,
      "height": 21,
      "weight": 805,
      "pokedexEntry": "They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean."
    },
    {
      "id": 605,
      "name": "elgyem",
      "baseExperience": 67,
      "height": 5,
      "weight": 90,
      "pokedexEntry": "This Pokémon was discovered about 50 years ago. Its highly developed brain enables it to exert its psychic powers."
    },
    {
      "id": 606,
      "name": "beheeyem",
      "baseExperience": 170,
      "height": 10,
      "weight": 345,
      "pokedexEntry": "Sometimes found drifting above wheat fields, this Pokémon can control the memories of its opponents."
    },
    {
      "id": 607,
      "name": "litwick",
      "baseExperience": 55,
      "height": 3,
      "weight": 31,
      "pokedexEntry": "The younger the life this Pokémon absorbs, the brighter and eerier the flame on its head burns."
    },
    {
      "id": 608,
      "name": "lampent",
      "baseExperience": 130,
      "height": 6,
      "weight": 130,
      "pokedexEntry": "It lurks in cities, pretending to be a lamp. Once it finds someone whose death is near, it will trail quietly after them."
    },
    {
      "id": 609,
      "name": "chandelure",
      "baseExperience": 260,
      "height": 10,
      "weight": 343,
      "pokedexEntry": "In homes illuminated by Chandelure instead of lights, funerals were a constant occurrence— or so it’s said."
    },
    {
      "id": 610,
      "name": "axew",
      "baseExperience": 64,
      "height": 6,
      "weight": 180,
      "pokedexEntry": "They play with each other by knocking their large tusks together. Their tusks break sometimes, but they grow back so quickly that it isn’t a concern."
    },
    {
      "id": 611,
      "name": "fraxure",
      "baseExperience": 144,
      "height": 10,
      "weight": 360,
      "pokedexEntry": "Its skin is as hard as a suit of armor. Fraxure’s favorite strategy is to tackle its opponents, stabbing them with its tusks at the same time."
    },
    {
      "id": 612,
      "name": "haxorus",
      "baseExperience": 270,
      "height": 18,
      "weight": 1055,
      "pokedexEntry": "While usually kindhearted, it can be terrifying if angered. Tusks that can slice through steel beams are how Haxorus deals with its adversaries."
    },
    {
      "id": 613,
      "name": "cubchoo",
      "baseExperience": 61,
      "height": 5,
      "weight": 85,
      "pokedexEntry": "It sniffles before performing a move, using its frosty snot to provide an icy element to any move that needs it."
    },
    {
      "id": 614,
      "name": "beartic",
      "baseExperience": 177,
      "height": 26,
      "weight": 2600,
      "pokedexEntry": "It swims energetically through frigid seas. When it gets tired, it freezes the seawater with its breath so it can rest on the ice."
    },
    {
      "id": 615,
      "name": "cryogonal",
      "baseExperience": 180,
      "height": 11,
      "weight": 1480,
      "pokedexEntry": "When the weather gets hot, these Pokémon turn into water vapor. Cryogonal are almost never seen during summer."
    },
    {
      "id": 616,
      "name": "shelmet",
      "baseExperience": 61,
      "height": 4,
      "weight": 77,
      "pokedexEntry": "It has a strange physiology that responds to electricity. When together with Karrablast, Shelmet evolves for some reason."
    },
    {
      "id": 617,
      "name": "accelgor",
      "baseExperience": 173,
      "height": 8,
      "weight": 253,
      "pokedexEntry": "Discarding its shell made it nimble. To keep itself from dehydrating, it wraps its body in bands of membrane."
    },
    {
      "id": 618,
      "name": "stunfisk",
      "baseExperience": 165,
      "height": 7,
      "weight": 110,
      "pokedexEntry": "For some reason, this Pokémon smiles slightly when it emits a strong electric current from the yellow markings on its body."
    },
    {
      "id": 619,
      "name": "mienfoo",
      "baseExperience": 70,
      "height": 9,
      "weight": 200,
      "pokedexEntry": "Though small, Mienfoo’s temperament is fierce. Any creature that approaches Mienfoo carelessly will be greeted with a flurry of graceful attacks."
    },
    {
      "id": 620,
      "name": "mienshao",
      "baseExperience": 179,
      "height": 14,
      "weight": 355,
      "pokedexEntry": "Delivered at blinding speeds, kicks from this Pokémon can shatter massive boulders into tiny pieces."
    },
    {
      "id": 621,
      "name": "druddigon",
      "baseExperience": 170,
      "height": 16,
      "weight": 1390,
      "pokedexEntry": "Druddigon are vicious and cunning. They take up residence in nests dug out by other Pokémon, treating the stolen nests as their own lairs."
    },
    {
      "id": 622,
      "name": "golett",
      "baseExperience": 61,
      "height": 10,
      "weight": 920,
      "pokedexEntry": "This Pokémon was created from clay. It received orders from its master many thousands of years ago, and it still follows those orders to this day."
    },
    {
      "id": 623,
      "name": "golurk",
      "baseExperience": 169,
      "height": 28,
      "weight": 3300,
      "pokedexEntry": "There’s a theory that inside Golurk is a perpetual motion machine that produces limitless energy, but this belief hasn’t been proven."
    },
    {
      "id": 624,
      "name": "pawniard",
      "baseExperience": 68,
      "height": 5,
      "weight": 102,
      "pokedexEntry": "A pack of these Pokémon forms to serve a Bisharp boss. Each Pawniard trains diligently, dreaming of one day taking the lead."
    },
    {
      "id": 625,
      "name": "bisharp",
      "baseExperience": 172,
      "height": 16,
      "weight": 700,
      "pokedexEntry": "Violent conflicts erupt between Bisharp and Fraxure over places where sharpening stones can be found."
    },
    {
      "id": 626,
      "name": "bouffalant",
      "baseExperience": 172,
      "height": 16,
      "weight": 946,
      "pokedexEntry": "These Pokémon live in herds of about 20 individuals. Bouffalant that betray the herd will lose the hair on their heads for some reason."
    },
    {
      "id": 627,
      "name": "rufflet",
      "baseExperience": 70,
      "height": 5,
      "weight": 105,
      "pokedexEntry": "Its chick-like looks belie its hotheadedness. It challenges its parents at every opportunity, desperate to prove its strength."
    },
    {
      "id": 628,
      "name": "braviary",
      "baseExperience": 179,
      "height": 15,
      "weight": 410,
      "pokedexEntry": "Because this Pokémon is hotheaded and belligerent, it’s Corviknight that’s taken the role of transportation in Galar."
    },
    {
      "id": 629,
      "name": "vullaby",
      "baseExperience": 74,
      "height": 5,
      "weight": 90,
      "pokedexEntry": "Vullaby grow quickly. Bones that have gotten too small for older Vullaby to wear often get passed down to younger ones in the nest."
    },
    {
      "id": 630,
      "name": "mandibuzz",
      "baseExperience": 179,
      "height": 12,
      "weight": 395,
      "pokedexEntry": "They adorn themselves with bones. There seem to be fashion trends among them, as different bones come into and fall out of popularity."
    },
    {
      "id": 631,
      "name": "heatmor",
      "baseExperience": 169,
      "height": 14,
      "weight": 580,
      "pokedexEntry": "A flame serves as its tongue, melting through the hard shell of Durant so that Heatmor can devour their insides."
    },
    {
      "id": 632,
      "name": "durant",
      "baseExperience": 169,
      "height": 3,
      "weight": 330,
      "pokedexEntry": "With their large mandibles, these Pokémon can crunch their way through rock. They work together to protect their eggs from Sandaconda."
    },
    {
      "id": 633,
      "name": "deino",
      "baseExperience": 60,
      "height": 8,
      "weight": 173,
      "pokedexEntry": "Because it can’t see, this Pokémon is constantly biting at everything it touches, trying to keep track of its surroundings."
    },
    {
      "id": 634,
      "name": "zweilous",
      "baseExperience": 147,
      "height": 14,
      "weight": 500,
      "pokedexEntry": "Their two heads will fight each other over a single piece of food. Zweilous are covered in scars even without battling others."
    },
    {
      "id": 635,
      "name": "hydreigon",
      "baseExperience": 300,
      "height": 18,
      "weight": 1600,
      "pokedexEntry": "The three heads take turns sinking their teeth into the opponent. Their attacks won’t slow until their target goes down."
    },
    {
      "id": 636,
      "name": "larvesta",
      "baseExperience": 72,
      "height": 11,
      "weight": 288,
      "pokedexEntry": "Larvesta’s body is warm all over. It spouts fire from the tips of its horns to intimidate predators and scare prey."
    },
    {
      "id": 637,
      "name": "volcarona",
      "baseExperience": 275,
      "height": 16,
      "weight": 460,
      "pokedexEntry": "This Pokémon emerges from a cocoon formed of raging flames. Ancient murals depict Volcarona as a deity of fire."
    },
    {
      "id": 638,
      "name": "cobalion",
      "baseExperience": 290,
      "height": 21,
      "weight": 2500,
      "pokedexEntry": "From the moment it’s born, this Pokémon radiates the air of a leader. Its presence will calm even vicious foes."
    },
    {
      "id": 639,
      "name": "terrakion",
      "baseExperience": 290,
      "height": 19,
      "weight": 2600,
      "pokedexEntry": "In Unovan legend, Terrakion battled against humans in an effort to protect other Pokémon."
    },
    {
      "id": 640,
      "name": "virizion",
      "baseExperience": 290,
      "height": 20,
      "weight": 2000,
      "pokedexEntry": "It darts around opponents with a flurry of quick movements, slicing them up with its horns."
    },
    {
      "id": 641,
      "name": "tornadus-incarnate",
      "baseExperience": 290,
      "height": 15,
      "weight": 630,
      "pokedexEntry": "This storm-stirring Pokémon is said to cause the seasons to turn by whipping up the air. I suspect its humanlike form to be a false one."
    },
    {
      "id": 642,
      "name": "thundurus-incarnate",
      "baseExperience": 290,
      "height": 15,
      "weight": 610,
      "pokedexEntry": "They say this wielder of electricity has waged war with its nemesis, Tornadus, since time immemorial. The lightning bolts it hurls pierce the very earth and enrich the soil."
    },
    {
      "id": 643,
      "name": "reshiram",
      "baseExperience": 340,
      "height": 32,
      "weight": 3300,
      "pokedexEntry": "According to myth, if people ignore truth and let themselves become consumed by greed, Reshiram will arrive to burn their kingdoms down."
    },
    {
      "id": 644,
      "name": "zekrom",
      "baseExperience": 340,
      "height": 29,
      "weight": 3450,
      "pokedexEntry": "Mythology tells us that if people lose the righteousness in their hearts, their kingdoms will be razed by Zekrom’s lightning."
    },
    {
      "id": 645,
      "name": "landorus-incarnate",
      "baseExperience": 300,
      "height": 15,
      "weight": 680,
      "pokedexEntry": "When the incarnations of wind and of lightning clash, Landorus arrives to quell the conflict. After the tempests and thunderbolts abate, the land is sure to be blessed with bountiful harvests."
    },
    {
      "id": 646,
      "name": "kyurem",
      "baseExperience": 330,
      "height": 30,
      "weight": 3250,
      "pokedexEntry": "It appears that this Pokémon uses its powers over ice to freeze its own body in order to stabilize its cellular structure."
    },
    {
      "id": 647,
      "name": "keldeo-ordinary",
      "baseExperience": 290,
      "height": 14,
      "weight": 485,
      "pokedexEntry": "When it is resolute, its body fills with power and it becomes swifter. Its jumps are then too fast to follow."
    },
    {
      "id": 648,
      "name": "meloetta-aria",
      "baseExperience": 270,
      "height": 6,
      "weight": 65,
      "pokedexEntry": "Its melodies are sung with a special vocalization method that can control the feelings of those who hear it."
    },
    {
      "id": 649,
      "name": "genesect",
      "baseExperience": 300,
      "height": 15,
      "weight": 825,
      "pokedexEntry": "This Pokémon existed 300 million years ago. Team Plasma altered it and attached a cannon to its back."
    },
    {
      "id": 650,
      "name": "chespin",
      "baseExperience": 63,
      "height": 4,
      "weight": 90,
      "pokedexEntry": "Such a thick shell of wood covers its head and back that even a direct hit from a truck wouldn’t faze it."
    },
    {
      "id": 651,
      "name": "quilladin",
      "baseExperience": 142,
      "height": 7,
      "weight": 290,
      "pokedexEntry": "They strengthen their lower bodies by running into one another. They are very kind and won’t start fights."
    },
    {
      "id": 652,
      "name": "chesnaught",
      "baseExperience": 239,
      "height": 16,
      "weight": 900,
      "pokedexEntry": "When it takes a defensive posture with its fists guarding its face, it could withstand a bomb blast."
    },
    {
      "id": 653,
      "name": "fennekin",
      "baseExperience": 61,
      "height": 4,
      "weight": 94,
      "pokedexEntry": "As it walks, it munches on a twig in place of a snack. It intimidates opponents by puffing hot air out of its ears."
    },
    {
      "id": 654,
      "name": "braixen",
      "baseExperience": 143,
      "height": 10,
      "weight": 145,
      "pokedexEntry": "When the twig is plucked from its tail, friction sets the twig alight. The flame is used to send signals to its allies."
    },
    {
      "id": 655,
      "name": "delphox",
      "baseExperience": 240,
      "height": 15,
      "weight": 390,
      "pokedexEntry": "Using psychic power, it generates a fiery vortex of 5,400 degrees Fahrenheit, incinerating foes swept into this whirl of flame."
    },
    {
      "id": 656,
      "name": "froakie",
      "baseExperience": 63,
      "height": 3,
      "weight": 70,
      "pokedexEntry": "It protects its skin by covering its body in delicate bubbles. Beneath its happy-go-lucky air, it keeps a watchful eye on its surroundings."
    },
    {
      "id": 657,
      "name": "frogadier",
      "baseExperience": 142,
      "height": 6,
      "weight": 109,
      "pokedexEntry": "Its swiftness is unparalleled. It can scale a tower of more than 2,000 feet in a minute’s time."
    },
    {
      "id": 658,
      "name": "greninja",
      "baseExperience": 239,
      "height": 15,
      "weight": 400,
      "pokedexEntry": "It appears and vanishes with a ninja’s grace. It toys with its enemies using swift movements, while slicing them with throwing stars of sharpest water."
    },
    {
      "id": 659,
      "name": "bunnelby",
      "baseExperience": 47,
      "height": 4,
      "weight": 50,
      "pokedexEntry": "It’s very sensitive to danger. The sound of Corviknight’s flapping will have Bunnelby digging a hole to hide underground in moments."
    },
    {
      "id": 660,
      "name": "diggersby",
      "baseExperience": 148,
      "height": 10,
      "weight": 424,
      "pokedexEntry": "The fur on its belly retains heat exceptionally well. People used to make heavy winter clothing from fur shed by this Pokémon."
    },
    {
      "id": 661,
      "name": "fletchling",
      "baseExperience": 56,
      "height": 3,
      "weight": 17,
      "pokedexEntry": "When this Pokémon gets excited, its body temperature increases sharply. If you touch a Fletchling with bare hands, you might get burned."
    },
    {
      "id": 662,
      "name": "fletchinder",
      "baseExperience": 134,
      "height": 7,
      "weight": 160,
      "pokedexEntry": "Fletchinder are exceedingly territorial and aggressive. These Pokémon fight among themselves over feeding grounds."
    },
    {
      "id": 663,
      "name": "talonflame",
      "baseExperience": 175,
      "height": 12,
      "weight": 245,
      "pokedexEntry": "Talonflame dives toward prey at speeds of up to 310 mph and assaults them with powerful kicks, giving the prey no chance to escape."
    },
    {
      "id": 664,
      "name": "scatterbug",
      "baseExperience": 40,
      "height": 3,
      "weight": 25,
      "pokedexEntry": "The powder that covers its body regulates its temperature, so it can live in any region or climate."
    },
    {
      "id": 665,
      "name": "spewpa",
      "baseExperience": 75,
      "height": 3,
      "weight": 84,
      "pokedexEntry": "The beaks of bird Pokémon can’t begin to scratch its stalwart body. To defend itself, it spews powder."
    },
    {
      "id": 666,
      "name": "vivillon",
      "baseExperience": 185,
      "height": 12,
      "weight": 170,
      "pokedexEntry": "The patterns on this Pokémon’s wings depend on the climate and topography of its habitat. It scatters colorful scales."
    },
    {
      "id": 667,
      "name": "litleo",
      "baseExperience": 74,
      "height": 6,
      "weight": 135,
      "pokedexEntry": "This hot-blooded Pokémon is filled with curiosity. When it gets angry or starts fighting, its short mane gets hot."
    },
    {
      "id": 668,
      "name": "pyroar",
      "baseExperience": 177,
      "height": 15,
      "weight": 815,
      "pokedexEntry": "The temperature of its breath is over 10,000 degrees Fahrenheit, but Pyroar doesn’t use it on its prey. This Pokémon prefers to eat raw meat."
    },
    {
      "id": 669,
      "name": "flabebe",
      "baseExperience": 61,
      "height": 1,
      "weight": 1,
      "pokedexEntry": "Flabébé wears a crown made from pollen it’s collected from its flower. The crown has hidden healing properties."
    },
    {
      "id": 670,
      "name": "floette",
      "baseExperience": 130,
      "height": 2,
      "weight": 9,
      "pokedexEntry": "It gives its own power to flowers, pouring its heart into caring for them. Floette never forgives anyone who messes up a flower bed."
    },
    {
      "id": 671,
      "name": "florges",
      "baseExperience": 248,
      "height": 11,
      "weight": 100,
      "pokedexEntry": "Its life can span several hundred years. It’s said to devote its entire life to protecting gardens."
    },
    {
      "id": 672,
      "name": "skiddo",
      "baseExperience": 70,
      "height": 9,
      "weight": 310,
      "pokedexEntry": "If it has sunshine and water, it doesn’t need to eat, because it can generate energy from the leaves on its back."
    },
    {
      "id": 673,
      "name": "gogoat",
      "baseExperience": 186,
      "height": 17,
      "weight": 910,
      "pokedexEntry": "They inhabit mountainous regions. The leader of the herd is decided by a battle of clashing horns."
    },
    {
      "id": 674,
      "name": "pancham",
      "baseExperience": 70,
      "height": 6,
      "weight": 80,
      "pokedexEntry": "Wanting to make sure it’s taken seriously, Pancham’s always giving others a glare. But if it’s not focusing, it ends up smiling."
    },
    {
      "id": 675,
      "name": "pangoro",
      "baseExperience": 173,
      "height": 21,
      "weight": 1360,
      "pokedexEntry": "Using its leaf, Pangoro can predict the moves of its opponents. It strikes with punches that can turn a dump truck into scrap with just one hit."
    },
    {
      "id": 676,
      "name": "furfrou",
      "baseExperience": 165,
      "height": 12,
      "weight": 280,
      "pokedexEntry": "Left alone, its fur will grow longer and longer, but it will only allow someone it trusts to cut it."
    },
    {
      "id": 677,
      "name": "espurr",
      "baseExperience": 71,
      "height": 3,
      "weight": 35,
      "pokedexEntry": "There’s enough psychic power in Espurr to send a wrestler flying, but because this power can’t be controlled, Espurr finds it troublesome."
    },
    {
      "id": 678,
      "name": "meowstic-male",
      "baseExperience": 163,
      "height": 6,
      "weight": 85,
      "pokedexEntry": "The eyeball patterns on the interior of its ears emit psychic energy. It keeps the patterns tightly covered because that power is too immense."
    },
    {
      "id": 679,
      "name": "honedge",
      "baseExperience": 65,
      "height": 8,
      "weight": 20,
      "pokedexEntry": "The blue eye on the sword’s handguard is the true body of Honedge. With its old cloth, it drains people’s lives away."
    },
    {
      "id": 680,
      "name": "doublade",
      "baseExperience": 157,
      "height": 8,
      "weight": 45,
      "pokedexEntry": "The two swords employ a strategy of rapidly alternating between offense and defense to bring down their prey."
    },
    {
      "id": 681,
      "name": "aegislash-shield",
      "baseExperience": 250,
      "height": 17,
      "weight": 530,
      "pokedexEntry": "Apparently, it can detect the innate qualities of leadership. According to legend, whoever it recognizes is destined to become king."
    },
    {
      "id": 682,
      "name": "spritzee",
      "baseExperience": 68,
      "height": 2,
      "weight": 5,
      "pokedexEntry": "The scent its body gives off enraptures those who smell it. Noble ladies had no shortage of love for Spritzee."
    },
    {
      "id": 683,
      "name": "aromatisse",
      "baseExperience": 162,
      "height": 8,
      "weight": 155,
      "pokedexEntry": "The scents Aromatisse can produce range from sweet smells that bolster allies to foul smells that sap an opponent’s will to fight."
    },
    {
      "id": 684,
      "name": "swirlix",
      "baseExperience": 68,
      "height": 4,
      "weight": 35,
      "pokedexEntry": "The sweet smell of cotton candy perfumes Swirlix’s fluffy fur. This Pokémon spits out sticky string to tangle up its enemies."
    },
    {
      "id": 685,
      "name": "slurpuff",
      "baseExperience": 168,
      "height": 8,
      "weight": 50,
      "pokedexEntry": "Slurpuff’s fur contains a lot of air, making it soft to the touch and lighter than it looks."
    },
    {
      "id": 686,
      "name": "inkay",
      "baseExperience": 58,
      "height": 4,
      "weight": 35,
      "pokedexEntry": "By exposing foes to the blinking of its luminescent spots, Inkay demoralizes them, and then it seizes the chance to flee."
    },
    {
      "id": 687,
      "name": "malamar",
      "baseExperience": 169,
      "height": 15,
      "weight": 470,
      "pokedexEntry": "It’s said that Malamar’s hypnotic powers played a role in certain history-changing events."
    },
    {
      "id": 688,
      "name": "binacle",
      "baseExperience": 61,
      "height": 5,
      "weight": 310,
      "pokedexEntry": "If the two don’t work well together, both their offense and defense fall apart. Without good teamwork, they won’t survive."
    },
    {
      "id": 689,
      "name": "barbaracle",
      "baseExperience": 175,
      "height": 13,
      "weight": 960,
      "pokedexEntry": "Having an eye on each palm allows it to keep watch in all directions. In a pinch, its limbs start to act on their own to ensure the enemy’s defeat."
    },
    {
      "id": 690,
      "name": "skrelp",
      "baseExperience": 64,
      "height": 5,
      "weight": 73,
      "pokedexEntry": "Skrelp looks like a piece of rotten seaweed, so it can blend in with seaweed drifting on the ocean and avoid being detected by enemies."
    },
    {
      "id": 691,
      "name": "dragalge",
      "baseExperience": 173,
      "height": 18,
      "weight": 815,
      "pokedexEntry": "Dragalge generates dragon energy by sticking the plume on its head out above the ocean’s surface and bathing it in sunlight."
    },
    {
      "id": 692,
      "name": "clauncher",
      "baseExperience": 66,
      "height": 5,
      "weight": 83,
      "pokedexEntry": "By detonating gas that accumulates in its right claw, this Pokémon launches water like a bullet. This is how Clauncher defeats its enemies."
    },
    {
      "id": 693,
      "name": "clawitzer",
      "baseExperience": 100,
      "height": 13,
      "weight": 353,
      "pokedexEntry": "Clawitzer’s right arm is a cannon that launches projectiles made of seawater. Shots from a Clawitzer’s cannon arm can sink a tanker."
    },
    {
      "id": 694,
      "name": "helioptile",
      "baseExperience": 58,
      "height": 5,
      "weight": 60,
      "pokedexEntry": "The sun powers this Pokémon’s electricity generation. Interruption of that process stresses Helioptile to the point of weakness."
    },
    {
      "id": 695,
      "name": "heliolisk",
      "baseExperience": 168,
      "height": 10,
      "weight": 210,
      "pokedexEntry": "One Heliolisk basking in the sun with its frill outspread is all it would take to produce enough electricity to power a city."
    },
    {
      "id": 696,
      "name": "tyrunt",
      "baseExperience": 72,
      "height": 8,
      "weight": 260,
      "pokedexEntry": "This Pokémon is selfish and likes to be pampered. It can also inflict grievous wounds on its Trainer just by playing around."
    },
    {
      "id": 697,
      "name": "tyrantrum",
      "baseExperience": 182,
      "height": 25,
      "weight": 2700,
      "pokedexEntry": "A single bite of Tyrantrum’s massive jaws will demolish a car. This Pokémon was the king of the ancient world."
    },
    {
      "id": 698,
      "name": "amaura",
      "baseExperience": 72,
      "height": 13,
      "weight": 252,
      "pokedexEntry": "Amaura is an ancient Pokémon that has gone extinct. Specimens of this species can sometimes be found frozen in ice."
    },
    {
      "id": 699,
      "name": "aurorus",
      "baseExperience": 104,
      "height": 27,
      "weight": 2250,
      "pokedexEntry": "When gripped by rage, Aurorus will emanate freezing air, covering everything around it in ice."
    },
    {
      "id": 700,
      "name": "sylveon",
      "baseExperience": 184,
      "height": 10,
      "weight": 235,
      "pokedexEntry": "It emits a soothing aura from its ribbon-shaped organs. It wraps these appendages around quarrelers to instantly restore calm to the situation."
    },
    {
      "id": 701,
      "name": "hawlucha",
      "baseExperience": 175,
      "height": 8,
      "weight": 215,
      "pokedexEntry": "It always strikes a pose before going for its finishing move. Sometimes opponents take advantage of that time to counterattack."
    },
    {
      "id": 702,
      "name": "dedenne",
      "baseExperience": 151,
      "height": 2,
      "weight": 22,
      "pokedexEntry": "Since Dedenne can’t generate much electricity on its own, it steals electricity from outlets or other electric Pokémon."
    },
    {
      "id": 703,
      "name": "carbink",
      "baseExperience": 100,
      "height": 3,
      "weight": 57,
      "pokedexEntry": "It’s said that somewhere in the world, there’s a mineral vein housing a large pack of slumbering Carbink. It’s also said that this pack has a queen."
    },
    {
      "id": 704,
      "name": "goomy",
      "baseExperience": 60,
      "height": 3,
      "weight": 28,
      "pokedexEntry": "Goomy hides away in the shade of trees, where it’s nice and humid. If the slime coating its body dries out, the Pokémon instantly becomes lethargic."
    },
    {
      "id": 705,
      "name": "sliggoo",
      "baseExperience": 158,
      "height": 8,
      "weight": 175,
      "pokedexEntry": "The lump on its back contains its tiny brain. It thinks only of food and escaping its enemies."
    },
    {
      "id": 706,
      "name": "goodra",
      "baseExperience": 300,
      "height": 20,
      "weight": 1505,
      "pokedexEntry": "Its form of offense is forcefully stretching out its horns. The strikes land 100 times harder than any blow from a heavyweight boxer."
    },
    {
      "id": 707,
      "name": "klefki",
      "baseExperience": 165,
      "height": 2,
      "weight": 30,
      "pokedexEntry": "Klefki sucks in metal ions with the horn topping its head. It seems this Pokémon loves keys so much that its head needed to look like one, too."
    },
    {
      "id": 708,
      "name": "phantump",
      "baseExperience": 62,
      "height": 4,
      "weight": 70,
      "pokedexEntry": "With a voice like a human child’s, it cries out to lure adults deep into the forest, getting them lost among the trees."
    },
    {
      "id": 709,
      "name": "trevenant",
      "baseExperience": 166,
      "height": 15,
      "weight": 710,
      "pokedexEntry": "Small roots that extend from the tips of this Pokémon’s feet can tie into the trees of the forest and give Trevenant control over them."
    },
    {
      "id": 710,
      "name": "pumpkaboo-average",
      "baseExperience": 67,
      "height": 4,
      "weight": 50,
      "pokedexEntry": "It is said to carry wandering spirits to the place where they belong so they can move on."
    },
    {
      "id": 711,
      "name": "gourgeist-average",
      "baseExperience": 173,
      "height": 9,
      "weight": 125,
      "pokedexEntry": "It enwraps its prey in its hairlike arms. It sings joyfully as it observes the suffering of its prey."
    },
    {
      "id": 712,
      "name": "bergmite",
      "baseExperience": 61,
      "height": 10,
      "weight": 995,
      "pokedexEntry": "Lives on mountains blanketed in perennial snow. It freezes water vapor in the air to make the ice helmet that it dons for defense."
    },
    {
      "id": 713,
      "name": "avalugg",
      "baseExperience": 180,
      "height": 20,
      "weight": 5050,
      "pokedexEntry": "As Avalugg moves about during the day, the cracks in its body deepen. The Pokémon’s body returns to a pristine state overnight."
    },
    {
      "id": 714,
      "name": "noibat",
      "baseExperience": 49,
      "height": 5,
      "weight": 80,
      "pokedexEntry": "No wavelength of sound is beyond Noibat’s ability to produce. The ultrasonic waves it generates can overcome much larger Pokémon."
    },
    {
      "id": 715,
      "name": "noivern",
      "baseExperience": 187,
      "height": 15,
      "weight": 850,
      "pokedexEntry": "Flying through the darkness, it weakens enemies with ultrasonic waves that could crush stone. Its fangs finish the fight."
    },
    {
      "id": 716,
      "name": "xerneas",
      "baseExperience": 340,
      "height": 30,
      "weight": 2150,
      "pokedexEntry": "When the horns on its head shine in seven colors, it is said to be sharing everlasting life."
    },
    {
      "id": 717,
      "name": "yveltal",
      "baseExperience": 340,
      "height": 58,
      "weight": 2030,
      "pokedexEntry": "When its life comes to an end, it absorbs the life energy of every living thing and turns into a cocoon once more."
    },
    {
      "id": 718,
      "name": "zygarde-50",
      "baseExperience": 300,
      "height": 50,
      "weight": 3050,
      "pokedexEntry": "Some say it can change to an even more powerful form when battling those who threaten the ecosystem."
    },
    {
      "id": 719,
      "name": "diancie",
      "baseExperience": 300,
      "height": 7,
      "weight": 88,
      "pokedexEntry": "It can instantly create many diamonds by compressing the carbon in the air between its hands."
    },
    {
      "id": 720,
      "name": "hoopa",
      "baseExperience": 270,
      "height": 5,
      "weight": 90,
      "pokedexEntry": "It is said to be able to seize anything it desires with its six rings and six huge arms. With its power sealed, it is transformed into a much smaller form."
    },
    {
      "id": 721,
      "name": "volcanion",
      "baseExperience": 300,
      "height": 17,
      "weight": 1950,
      "pokedexEntry": "It expels its internal steam from the arms on its back. It has enough power to blow away a mountain."
    },
    {
      "id": 722,
      "name": "rowlet",
      "baseExperience": 64,
      "height": 3,
      "weight": 15,
      "pokedexEntry": "Flies noiselessly on delicate wings. It has mastered the art of deftly launching dagger-sharp feathers from those same wings."
    },
    {
      "id": 723,
      "name": "dartrix",
      "baseExperience": 147,
      "height": 7,
      "weight": 160,
      "pokedexEntry": "Regularly basks in sunlight to gather power—presumably due to the frigid climate. Nonetheless, the edges of the blade quills set into its wings are keen as ever."
    },
    {
      "id": 724,
      "name": "decidueye",
      "baseExperience": 265,
      "height": 16,
      "weight": 366,
      "pokedexEntry": "In a tenth of a second, it can nock and fire an arrow quill, piercing an opponent’s weak point before they notice what’s happening."
    },
    {
      "id": 725,
      "name": "litten",
      "baseExperience": 64,
      "height": 4,
      "weight": 43,
      "pokedexEntry": "Trying to pet Litten before it trusts you will result in a nasty scratch from its sharp claws. Be careful."
    },
    {
      "id": 726,
      "name": "torracat",
      "baseExperience": 147,
      "height": 7,
      "weight": 250,
      "pokedexEntry": "When facing a powerful enemy, Torracat’s fighting spirit gets pumped up, and its fire bell blazes hotter."
    },
    {
      "id": 727,
      "name": "incineroar",
      "baseExperience": 265,
      "height": 18,
      "weight": 830,
      "pokedexEntry": "Incineroar’s rough and aggressive behavior is its most notable trait, but the way it helps out small Pokémon shows that it has a kind side as well."
    },
    {
      "id": 728,
      "name": "popplio",
      "baseExperience": 64,
      "height": 4,
      "weight": 75,
      "pokedexEntry": "If Popplio want to create big, powerful balloons, they must be persistent. It takes daily practice for these Pokémon to develop their skills."
    },
    {
      "id": 729,
      "name": "brionne",
      "baseExperience": 147,
      "height": 6,
      "weight": 175,
      "pokedexEntry": "On nights when the sea is calm, Brionne dance with one another to the singing of the Primarina that’s leading them."
    },
    {
      "id": 730,
      "name": "primarina",
      "baseExperience": 265,
      "height": 18,
      "weight": 440,
      "pokedexEntry": "For Primarina, every battle’s a stage. Its singing and the dancing of its balloons will mesmerize the audience."
    },
    {
      "id": 731,
      "name": "pikipek",
      "baseExperience": 53,
      "height": 3,
      "weight": 12,
      "pokedexEntry": "It may look spindly, but its neck muscles are heavy-duty. It can peck at a tree 16 times per second!"
    },
    {
      "id": 732,
      "name": "trumbeak",
      "baseExperience": 124,
      "height": 6,
      "weight": 148,
      "pokedexEntry": "From its mouth, it fires the seeds of berries it has eaten. The scattered seeds give rise to new plants."
    },
    {
      "id": 733,
      "name": "toucannon",
      "baseExperience": 218,
      "height": 11,
      "weight": 260,
      "pokedexEntry": "Known for forming harmonious couples, this Pokémon is brought to wedding ceremonies as a good luck charm."
    },
    {
      "id": 734,
      "name": "yungoos",
      "baseExperience": 51,
      "height": 4,
      "weight": 60,
      "pokedexEntry": "Although it will eat anything, it prefers fresh living things, so it marches down streets in search of prey."
    },
    {
      "id": 735,
      "name": "gumshoos",
      "baseExperience": 146,
      "height": 7,
      "weight": 142,
      "pokedexEntry": "Patient by nature, this Pokémon loses control of itself and pounces when it spots its favorite meal—Rattata!"
    },
    {
      "id": 736,
      "name": "grubbin",
      "baseExperience": 60,
      "height": 4,
      "weight": 44,
      "pokedexEntry": "It uses its big jaws to dig nests into the forest floor, and it loves to feed on sweet tree sap."
    },
    {
      "id": 737,
      "name": "charjabug",
      "baseExperience": 140,
      "height": 5,
      "weight": 105,
      "pokedexEntry": "Its digestive processes convert the leaves it eats into electricity. An electric sac in its belly stores the electricity for later use."
    },
    {
      "id": 738,
      "name": "vikavolt",
      "baseExperience": 250,
      "height": 15,
      "weight": 450,
      "pokedexEntry": "If it carries a Charjabug to use as a spare battery, a flying Vikavolt can rapidly fire high-powered beams of electricity."
    },
    {
      "id": 739,
      "name": "crabrawler",
      "baseExperience": 68,
      "height": 6,
      "weight": 70,
      "pokedexEntry": "Crabrawler has been known to mistake Exeggutor for a coconut tree and climb it. The enraged Exeggutor shakes it off and stomps it."
    },
    {
      "id": 740,
      "name": "crabominable",
      "baseExperience": 167,
      "height": 17,
      "weight": 1800,
      "pokedexEntry": "Before it stops to think, it just starts pummeling. There are records of its turning back avalanches with a flurry of punches."
    },
    {
      "id": 741,
      "name": "oricorio-baile",
      "baseExperience": 167,
      "height": 6,
      "weight": 34,
      "pokedexEntry": "This Oricorio has drunk red nectar. If its Trainer gives the wrong order, this passionate Pokémon becomes fiercely angry."
    },
    {
      "id": 742,
      "name": "cutiefly",
      "baseExperience": 61,
      "height": 1,
      "weight": 2,
      "pokedexEntry": "An opponent’s aura can tell Cutiefly what that opponent’s next move will be. Then Cutiefly can glide around the attack and strike back."
    },
    {
      "id": 743,
      "name": "ribombee",
      "baseExperience": 162,
      "height": 2,
      "weight": 5,
      "pokedexEntry": "Ribombee absolutely hate getting wet or rained on. In the cloudy Galar region, they are very seldom seen."
    },
    {
      "id": 744,
      "name": "rockruff",
      "baseExperience": 56,
      "height": 5,
      "weight": 92,
      "pokedexEntry": "This Pokémon intimidates opponents by striking the ground with the rocks on its neck. The moment an opponent flinches, Rockruff attacks."
    },
    {
      "id": 745,
      "name": "lycanroc-midday",
      "baseExperience": 170,
      "height": 8,
      "weight": 250,
      "pokedexEntry": "The rocks in its mane are sharper than a knife. Fragments that break off are treasured as good luck charms."
    },
    {
      "id": 746,
      "name": "wishiwashi-solo",
      "baseExperience": 61,
      "height": 2,
      "weight": 3,
      "pokedexEntry": "When it senses danger, its eyes tear up. The sparkle of its tears signals other Wishiwashi to gather."
    },
    {
      "id": 747,
      "name": "mareanie",
      "baseExperience": 61,
      "height": 4,
      "weight": 80,
      "pokedexEntry": "Unlike their Alolan counterparts, the Mareanie of the Galar region have not yet figured out that the branches of Corsola are delicious."
    },
    {
      "id": 748,
      "name": "toxapex",
      "baseExperience": 173,
      "height": 7,
      "weight": 145,
      "pokedexEntry": "Within the poison sac in its body is a poison so toxic that Pokémon as large as Wailord will still be suffering three days after it first takes effect."
    },
    {
      "id": 749,
      "name": "mudbray",
      "baseExperience": 77,
      "height": 10,
      "weight": 1100,
      "pokedexEntry": "It eats dirt to create mud and smears this mud all over its feet, giving them the grip needed to walk on rough terrain without slipping."
    },
    {
      "id": 750,
      "name": "mudsdale",
      "baseExperience": 175,
      "height": 25,
      "weight": 9200,
      "pokedexEntry": "Mudsdale has so much stamina that it could carry over 10 tons across the Galar region without rest or sleep."
    },
    {
      "id": 751,
      "name": "dewpider",
      "baseExperience": 54,
      "height": 3,
      "weight": 40,
      "pokedexEntry": "Dewpider normally lives underwater. When it comes onto land in search of food, it takes water with it in the form of a bubble on its head."
    },
    {
      "id": 752,
      "name": "araquanid",
      "baseExperience": 159,
      "height": 18,
      "weight": 820,
      "pokedexEntry": "It acts as a caretaker for Dewpider, putting them inside its bubble and letting them eat any leftover food."
    },
    {
      "id": 753,
      "name": "fomantis",
      "baseExperience": 50,
      "height": 3,
      "weight": 15,
      "pokedexEntry": "During the day, Fomantis basks in sunlight and sleeps peacefully. It wakes and moves around at night."
    },
    {
      "id": 754,
      "name": "lurantis",
      "baseExperience": 168,
      "height": 9,
      "weight": 185,
      "pokedexEntry": "The petals on this Pokémon’s arms are thin and super sharp, and they can fire laser beams if Lurantis gathers light first."
    },
    {
      "id": 755,
      "name": "morelull",
      "baseExperience": 57,
      "height": 2,
      "weight": 15,
      "pokedexEntry": "Morelull live in forests that stay dark even during the day. They scatter flickering spores that put enemies to sleep."
    },
    {
      "id": 756,
      "name": "shiinotic",
      "baseExperience": 142,
      "height": 10,
      "weight": 115,
      "pokedexEntry": "If you see a light deep in a forest at night, don’t go near. Shiinotic will make you fall fast asleep."
    },
    {
      "id": 757,
      "name": "salandit",
      "baseExperience": 64,
      "height": 6,
      "weight": 48,
      "pokedexEntry": "This sneaky Pokémon will slink behind its prey and immobilize it with poisonous gas before the prey even realizes Salandit is there."
    },
    {
      "id": 758,
      "name": "salazzle",
      "baseExperience": 168,
      "height": 12,
      "weight": 222,
      "pokedexEntry": "The winner of competitions between Salazzle is decided by which one has the most male Salandit with it."
    },
    {
      "id": 759,
      "name": "stufful",
      "baseExperience": 68,
      "height": 5,
      "weight": 68,
      "pokedexEntry": "The way it protects itself by flailing its arms may be an adorable sight, but stay well away. This is flailing that can snap thick tree trunks."
    },
    {
      "id": 760,
      "name": "bewear",
      "baseExperience": 175,
      "height": 21,
      "weight": 1350,
      "pokedexEntry": "The moves it uses to take down its prey would make a martial artist jealous. It tucks subdued prey under its arms to carry them to its nest."
    },
    {
      "id": 761,
      "name": "bounsweet",
      "baseExperience": 42,
      "height": 3,
      "weight": 32,
      "pokedexEntry": "When under attack, it secretes a sweet and delicious sweat. The scent only calls more enemies to it."
    },
    {
      "id": 762,
      "name": "steenee",
      "baseExperience": 102,
      "height": 7,
      "weight": 82,
      "pokedexEntry": "Any Corvisquire that pecks at this Pokémon will be greeted with a smack from its sepals followed by a sharp kick."
    },
    {
      "id": 763,
      "name": "tsareena",
      "baseExperience": 255,
      "height": 12,
      "weight": 214,
      "pokedexEntry": "A kick from the hardened tips of this Pokémon’s legs leaves a wound in the opponent’s body and soul that will never heal."
    },
    {
      "id": 764,
      "name": "comfey",
      "baseExperience": 170,
      "height": 1,
      "weight": 3,
      "pokedexEntry": "These Pokémon smell very nice. All Comfey wear different flowers, so each of these Pokémon has its own individual scent."
    },
    {
      "id": 765,
      "name": "oranguru",
      "baseExperience": 172,
      "height": 15,
      "weight": 760,
      "pokedexEntry": "It knows the forest inside and out. If it comes across a wounded Pokémon, Oranguru will gather medicinal herbs to treat it."
    },
    {
      "id": 766,
      "name": "passimian",
      "baseExperience": 172,
      "height": 20,
      "weight": 828,
      "pokedexEntry": "Passimian live in groups of about 20, with each member performing an assigned role. Through cooperation, the group survives."
    },
    {
      "id": 767,
      "name": "wimpod",
      "baseExperience": 46,
      "height": 5,
      "weight": 120,
      "pokedexEntry": "Wimpod gather in swarms, constantly on the lookout for danger. They scatter the moment they detect an enemy’s presence."
    },
    {
      "id": 768,
      "name": "golisopod",
      "baseExperience": 186,
      "height": 20,
      "weight": 1080,
      "pokedexEntry": "They live in sunken ships or in holes in the seabed. When Golisopod and Grapploct battle, the loser becomes the winner’s meal."
    },
    {
      "id": 769,
      "name": "sandygast",
      "baseExperience": 64,
      "height": 5,
      "weight": 700,
      "pokedexEntry": "Sandygast mainly inhabits beaches. It takes control of anyone who puts their hand into its mouth, forcing them to make its body bigger."
    },
    {
      "id": 770,
      "name": "palossand",
      "baseExperience": 168,
      "height": 13,
      "weight": 2500,
      "pokedexEntry": "This Pokémon lives on beaches, but it hates water. Palossand can’t maintain its castle-like shape if it gets drenched by a heavy rain."
    },
    {
      "id": 771,
      "name": "pyukumuku",
      "baseExperience": 144,
      "height": 3,
      "weight": 12,
      "pokedexEntry": "It’s covered in a slime that keeps its skin moist, allowing it to stay on land for days without drying up."
    },
    {
      "id": 772,
      "name": "type-null",
      "baseExperience": 107,
      "height": 19,
      "weight": 1205,
      "pokedexEntry": "It was modeled after a mighty Pokémon of myth. The mask placed upon it limits its power in order to keep it under control."
    },
    {
      "id": 773,
      "name": "silvally",
      "baseExperience": 285,
      "height": 23,
      "weight": 1005,
      "pokedexEntry": "The final factor needed to release this Pokémon’s true power was a strong bond with a Trainer it trusts."
    },
    {
      "id": 774,
      "name": "minior-red-meteor",
      "baseExperience": 154,
      "height": 3,
      "weight": 400,
      "pokedexEntry": "Although its outer shell is uncommonly durable, the shock of falling to the ground smashes the shell to smithereens."
    },
    {
      "id": 775,
      "name": "komala",
      "baseExperience": 168,
      "height": 4,
      "weight": 199,
      "pokedexEntry": "It remains asleep from birth to death as a result of the sedative properties of the leaves that form its diet."
    },
    {
      "id": 776,
      "name": "turtonator",
      "baseExperience": 170,
      "height": 20,
      "weight": 2120,
      "pokedexEntry": "Eating sulfur in its volcanic habitat is what causes explosive compounds to develop in its shell. Its droppings are also dangerously explosive."
    },
    {
      "id": 777,
      "name": "togedemaru",
      "baseExperience": 152,
      "height": 3,
      "weight": 33,
      "pokedexEntry": "When it’s in trouble, it curls up into a ball, makes its fur spikes stand on end, and then discharges electricity indiscriminately."
    },
    {
      "id": 778,
      "name": "mimikyu-disguised",
      "baseExperience": 167,
      "height": 2,
      "weight": 7,
      "pokedexEntry": "Its disguise made from an old rag allowed it to avoid an attack, but the impact broke the neck of the disguise. Now everyone knows it’s a Mimikyu."
    },
    {
      "id": 779,
      "name": "bruxish",
      "baseExperience": 166,
      "height": 9,
      "weight": 190,
      "pokedexEntry": "Its skin is thick enough to fend off Mareanie’s spikes. With its robust teeth, Bruxish crunches up the spikes and eats them."
    },
    {
      "id": 780,
      "name": "drampa",
      "baseExperience": 170,
      "height": 30,
      "weight": 1850,
      "pokedexEntry": "Drampa is a kind and friendly Pokémon—up until it’s angered. When that happens, it stirs up a gale and flattens everything around."
    },
    {
      "id": 781,
      "name": "dhelmise",
      "baseExperience": 181,
      "height": 39,
      "weight": 2100,
      "pokedexEntry": "After lowering its anchor, it waits for its prey. It catches large Wailord and drains their life-force."
    },
    {
      "id": 782,
      "name": "jangmo-o",
      "baseExperience": 60,
      "height": 6,
      "weight": 297,
      "pokedexEntry": "Jangmo-o strikes its scales to communicate with others of its kind. Its scales are actually fur that’s become as hard as metal."
    },
    {
      "id": 783,
      "name": "hakamo-o",
      "baseExperience": 147,
      "height": 12,
      "weight": 470,
      "pokedexEntry": "Before attacking its enemies, it clashes its scales together and roars. Its sharp claws shred the opposition."
    },
    {
      "id": 784,
      "name": "kommo-o",
      "baseExperience": 300,
      "height": 16,
      "weight": 782,
      "pokedexEntry": "Certain ruins have paintings of ancient warriors wearing armor made of Kommo-o scales."
    },
    {
      "id": 785,
      "name": "tapu-koko",
      "baseExperience": 285,
      "height": 18,
      "weight": 205,
      "pokedexEntry": "The lightning-wielding guardian deity of Melemele, Tapu Koko is brimming with curiosity and appears before people from time to time."
    },
    {
      "id": 786,
      "name": "tapu-lele",
      "baseExperience": 285,
      "height": 12,
      "weight": 186,
      "pokedexEntry": "Although called a guardian deity, Tapu Lele is devoid of guilt about its cruel disposition and can be described as nature incarnate."
    },
    {
      "id": 787,
      "name": "tapu-bulu",
      "baseExperience": 285,
      "height": 19,
      "weight": 455,
      "pokedexEntry": "It makes ringing sounds with its tail to let others know where it is, avoiding unneeded conflicts. This guardian deity of Ula’ula controls plants."
    },
    {
      "id": 788,
      "name": "tapu-fini",
      "baseExperience": 285,
      "height": 13,
      "weight": 212,
      "pokedexEntry": "Although it’s called a guardian deity, terrible calamities sometimes befall those who recklessly approach Tapu Fini."
    },
    {
      "id": 789,
      "name": "cosmog",
      "baseExperience": 40,
      "height": 2,
      "weight": 1,
      "pokedexEntry": "Cosmog is very curious but not very cautious, often placing itself in danger. If things start to look dicey, it teleports away."
    },
    {
      "id": 790,
      "name": "cosmoem",
      "baseExperience": 140,
      "height": 1,
      "weight": 9999,
      "pokedexEntry": "It sucks in dust from the air at an astounding rate, frantically building up energy within its core as preparation for evolution."
    },
    {
      "id": 791,
      "name": "solgaleo",
      "baseExperience": 340,
      "height": 34,
      "weight": 2300,
      "pokedexEntry": "Solgaleo was once known as the Beast That Devours the Sun. Energy in the form of light radiates boundlessly from it."
    },
    {
      "id": 792,
      "name": "lunala",
      "baseExperience": 340,
      "height": 40,
      "weight": 1200,
      "pokedexEntry": "It steals the light from its surroundings and then becomes the full moon, showering its own light across the night sky."
    },
    {
      "id": 793,
      "name": "nihilego",
      "baseExperience": 285,
      "height": 12,
      "weight": 555,
      "pokedexEntry": "It appeared in this world from an Ultra Wormhole. Nihilego appears to be a parasite that lives by feeding on people and Pokémon."
    },
    {
      "id": 794,
      "name": "buzzwole",
      "baseExperience": 285,
      "height": 24,
      "weight": 3336,
      "pokedexEntry": "Buzzwole goes around showing off its abnormally swollen muscles. It is one kind of Ultra Beast."
    },
    {
      "id": 795,
      "name": "pheromosa",
      "baseExperience": 285,
      "height": 18,
      "weight": 250,
      "pokedexEntry": "Although it’s alien to this world and a danger here, it’s apparently a common organism in the world where it normally lives."
    },
    {
      "id": 796,
      "name": "xurkitree",
      "baseExperience": 285,
      "height": 38,
      "weight": 1000,
      "pokedexEntry": "They’ve been dubbed Ultra Beasts. Some of them stand unmoving, like trees, with their arms and legs stuck into the ground."
    },
    {
      "id": 797,
      "name": "celesteela",
      "baseExperience": 285,
      "height": 92,
      "weight": 9999,
      "pokedexEntry": "Although it’s alien to this world and a danger here, it’s apparently a common organism in the world where it normally lives."
    },
    {
      "id": 798,
      "name": "kartana",
      "baseExperience": 285,
      "height": 3,
      "weight": 1,
      "pokedexEntry": "Although it’s alien to this world and a danger here, it’s apparently a common organism in the world where it normally lives."
    },
    {
      "id": 799,
      "name": "guzzlord",
      "baseExperience": 285,
      "height": 55,
      "weight": 8880,
      "pokedexEntry": "An unknown life-form called a UB. It may be constantly hungry—it is certainly always devouring something."
    },
    {
      "id": 800,
      "name": "necrozma",
      "baseExperience": 300,
      "height": 24,
      "weight": 2300,
      "pokedexEntry": "It needs light to survive, and it goes on a rampage seeking it out. Its laser beams will cut anything to pieces."
    },
    {
      "id": 801,
      "name": "magearna",
      "baseExperience": 300,
      "height": 10,
      "weight": 805,
      "pokedexEntry": "Built roughly 500 years ago by a scientist, the part called the Soul-Heart is the actual life-form."
    },
    {
      "id": 802,
      "name": "marshadow",
      "baseExperience": 300,
      "height": 7,
      "weight": 222,
      "pokedexEntry": "This Pokémon can conceal itself in any shadow, so it went undiscovered for a long time."
    },
    {
      "id": 803,
      "name": "poipole",
      "baseExperience": 210,
      "height": 6,
      "weight": 18,
      "pokedexEntry": "An Ultra Beast that lives in a different world, it cackles wildly as it sprays its opponents with poison from the needles on its head."
    },
    {
      "id": 804,
      "name": "naganadel",
      "baseExperience": 270,
      "height": 36,
      "weight": 1500,
      "pokedexEntry": "One kind of Ultra Beast, it fires a glowing, venomous liquid from its needles. This liquid is also immensely adhesive."
    },
    {
      "id": 805,
      "name": "stakataka",
      "baseExperience": 285,
      "height": 55,
      "weight": 8200,
      "pokedexEntry": "When stone walls started moving and attacking, the brute’s true identity was this mysterious life-form, which brings to mind an Ultra Beast."
    },
    {
      "id": 806,
      "name": "blacephalon",
      "baseExperience": 285,
      "height": 18,
      "weight": 130,
      "pokedexEntry": "A UB that appeared from an Ultra Wormhole, it causes explosions, then takes advantage of opponents’ surprise to rob them of their vitality."
    },
    {
      "id": 807,
      "name": "zeraora",
      "baseExperience": 300,
      "height": 15,
      "weight": 445,
      "pokedexEntry": "Electricity sparks from the pads on its limbs. Wherever Zeraora runs, lightning flashes and thunder echoes."
    },
    {
      "id": 808,
      "name": "meltan",
      "baseExperience": 150,
      "height": 2,
      "weight": 80,
      "pokedexEntry": "They live as a group, but when the time comes, one strong Meltan will absorb all the others and evolve."
    },
    {
      "id": 809,
      "name": "melmetal",
      "baseExperience": 300,
      "height": 25,
      "weight": 8000,
      "pokedexEntry": "Centrifugal force is behind the punches of Melmetal’s heavy hex-nut arms. Melmetal is said to deliver the strongest punches of all Pokémon."
    },
    {
      "id": 810,
      "name": "grookey",
      "baseExperience": 62,
      "height": 3,
      "weight": 50,
      "pokedexEntry": "It attacks with rapid beats of its stick. As it strikes with amazing speed, it gets more and more pumped."
    },
    {
      "id": 811,
      "name": "thwackey",
      "baseExperience": 147,
      "height": 7,
      "weight": 140,
      "pokedexEntry": "When it’s drumming out rapid beats in battle, it gets so caught up in the rhythm that it won’t even notice that it’s already knocked out its opponent."
    },
    {
      "id": 812,
      "name": "rillaboom",
      "baseExperience": 265,
      "height": 21,
      "weight": 900,
      "pokedexEntry": "The one with the best drumming techniques becomes the boss of the troop. It has a gentle disposition and values harmony among its group."
    },
    {
      "id": 813,
      "name": "scorbunny",
      "baseExperience": 62,
      "height": 3,
      "weight": 45,
      "pokedexEntry": "It has special pads on the backs of its feet, and one on its nose. Once it’s raring to fight, these pads radiate tremendous heat."
    },
    {
      "id": 814,
      "name": "raboot",
      "baseExperience": 147,
      "height": 6,
      "weight": 90,
      "pokedexEntry": "It kicks berries right off the branches of trees and then juggles them with its feet, practicing its footwork."
    },
    {
      "id": 815,
      "name": "cinderace",
      "baseExperience": 265,
      "height": 14,
      "weight": 330,
      "pokedexEntry": "It’s skilled at both offense and defense, and it gets pumped up when cheered on. But if it starts showboating, it could put itself in a tough spot."
    },
    {
      "id": 816,
      "name": "sobble",
      "baseExperience": 62,
      "height": 3,
      "weight": 40,
      "pokedexEntry": "When it gets wet, its skin changes color, and this Pokémon becomes invisible as if it were camouflaged."
    },
    {
      "id": 817,
      "name": "drizzile",
      "baseExperience": 147,
      "height": 7,
      "weight": 115,
      "pokedexEntry": "Highly intelligent but also very lazy, it keeps enemies out of its territory by laying traps everywhere."
    },
    {
      "id": 818,
      "name": "inteleon",
      "baseExperience": 265,
      "height": 19,
      "weight": 452,
      "pokedexEntry": "Its nictitating membranes let it pick out foes’ weak points so it can precisely blast them with water that shoots from its fingertips at Mach 3."
    },
    {
      "id": 819,
      "name": "skwovet",
      "baseExperience": 55,
      "height": 3,
      "weight": 25,
      "pokedexEntry": "It eats berries nonstop—a habit that has made it more resilient than it looks. It’ll show up on farms, searching for yet more berries."
    },
    {
      "id": 820,
      "name": "greedent",
      "baseExperience": 161,
      "height": 6,
      "weight": 60,
      "pokedexEntry": "Common throughout the Galar region, this Pokémon has strong teeth and can chew through the toughest of berry shells."
    },
    {
      "id": 821,
      "name": "rookidee",
      "baseExperience": 49,
      "height": 2,
      "weight": 18,
      "pokedexEntry": "Jumping nimbly about, this small-bodied Pokémon takes advantage of even the slightest opportunity to disorient larger opponents."
    },
    {
      "id": 822,
      "name": "corvisquire",
      "baseExperience": 128,
      "height": 8,
      "weight": 160,
      "pokedexEntry": "The lessons of many harsh battles have taught it how to accurately judge an opponent’s strength."
    },
    {
      "id": 823,
      "name": "corviknight",
      "baseExperience": 248,
      "height": 22,
      "weight": 750,
      "pokedexEntry": "With their great intellect and flying skills, these Pokémon very successfully act as the Galar region’s airborne taxi service."
    },
    {
      "id": 824,
      "name": "blipbug",
      "baseExperience": 36,
      "height": 4,
      "weight": 80,
      "pokedexEntry": "Often found in gardens, this Pokémon has hairs on its body that it uses to assess its surroundings."
    },
    {
      "id": 825,
      "name": "dottler",
      "baseExperience": 117,
      "height": 4,
      "weight": 195,
      "pokedexEntry": "As it grows inside its shell, it uses its psychic abilities to monitor the outside world and prepare for evolution."
    },
    {
      "id": 826,
      "name": "orbeetle",
      "baseExperience": 253,
      "height": 4,
      "weight": 408,
      "pokedexEntry": "It emits psychic energy to observe and study what’s around it—and what’s around it can include things over six miles away."
    },
    {
      "id": 827,
      "name": "nickit",
      "baseExperience": 49,
      "height": 6,
      "weight": 89,
      "pokedexEntry": "Cunning and cautious, this Pokémon survives by stealing food from others. It erases its tracks with swipes of its tail as it makes off with its plunder."
    },
    {
      "id": 828,
      "name": "thievul",
      "baseExperience": 159,
      "height": 12,
      "weight": 199,
      "pokedexEntry": "With a lithe body and sharp claws, it goes around stealing food and eggs. Boltund is its natural enemy."
    },
    {
      "id": 829,
      "name": "gossifleur",
      "baseExperience": 50,
      "height": 4,
      "weight": 22,
      "pokedexEntry": "It whirls around in the wind while singing a joyous song. This delightful display has charmed many into raising this Pokémon."
    },
    {
      "id": 830,
      "name": "eldegoss",
      "baseExperience": 161,
      "height": 5,
      "weight": 25,
      "pokedexEntry": "The cotton on the head of this Pokémon can be spun into a glossy, gorgeous yarn—a Galar regional specialty."
    },
    {
      "id": 831,
      "name": "wooloo",
      "baseExperience": 122,
      "height": 6,
      "weight": 60,
      "pokedexEntry": "If its fleece grows too long, Wooloo won’t be able to move. Cloth made with the wool of this Pokémon is surprisingly strong."
    },
    {
      "id": 832,
      "name": "dubwool",
      "baseExperience": 172,
      "height": 13,
      "weight": 430,
      "pokedexEntry": "Its majestic horns are meant only to impress the opposite gender. They never see use in battle."
    },
    {
      "id": 833,
      "name": "chewtle",
      "baseExperience": 57,
      "height": 3,
      "weight": 85,
      "pokedexEntry": "It starts off battles by attacking with its rock-hard horn, but as soon as the opponent flinches, this Pokémon bites down and never lets go."
    },
    {
      "id": 834,
      "name": "drednaw",
      "baseExperience": 170,
      "height": 10,
      "weight": 1155,
      "pokedexEntry": "This Pokémon rapidly extends its retractable neck to sink its sharp fangs into distant enemies and take them down."
    },
    {
      "id": 835,
      "name": "yamper",
      "baseExperience": 54,
      "height": 3,
      "weight": 135,
      "pokedexEntry": "This gluttonous Pokémon only assists people with their work because it wants treats. As it runs, it crackles with electricity."
    },
    {
      "id": 836,
      "name": "boltund",
      "baseExperience": 172,
      "height": 10,
      "weight": 340,
      "pokedexEntry": "It sends electricity through its legs to boost their strength. Running at top speed, it easily breaks 50 mph."
    },
    {
      "id": 837,
      "name": "rolycoly",
      "baseExperience": 48,
      "height": 3,
      "weight": 120,
      "pokedexEntry": "It can race around like a unicycle, even on rough, rocky terrain. Burning coal sustains it."
    },
    {
      "id": 838,
      "name": "carkol",
      "baseExperience": 144,
      "height": 11,
      "weight": 780,
      "pokedexEntry": "By rapidly rolling its legs, it can travel at over 18 mph. The temperature of the flames it breathes exceeds 1,800 degrees Fahrenheit."
    },
    {
      "id": 839,
      "name": "coalossal",
      "baseExperience": 255,
      "height": 28,
      "weight": 3105,
      "pokedexEntry": "While it’s engaged in battle, its mountain of coal will burn bright red, sending off sparks that scorch the surrounding area."
    },
    {
      "id": 840,
      "name": "applin",
      "baseExperience": 52,
      "height": 2,
      "weight": 5,
      "pokedexEntry": "As soon as it’s born, it burrows into an apple. Not only does the apple serve as its food source, but the flavor of the fruit determines its evolution."
    },
    {
      "id": 841,
      "name": "flapple",
      "baseExperience": 170,
      "height": 3,
      "weight": 10,
      "pokedexEntry": "It flies on wings of apple skin and spits a powerful acid. It can also change its shape into that of an apple."
    },
    {
      "id": 842,
      "name": "appletun",
      "baseExperience": 170,
      "height": 4,
      "weight": 130,
      "pokedexEntry": "Its body is covered in sweet nectar, and the skin on its back is especially yummy. Children used to have it as a snack."
    },
    {
      "id": 843,
      "name": "silicobra",
      "baseExperience": 63,
      "height": 22,
      "weight": 76,
      "pokedexEntry": "It spews sand from its nostrils. While the enemy is blinded, it burrows into the ground to hide."
    },
    {
      "id": 844,
      "name": "sandaconda",
      "baseExperience": 179,
      "height": 38,
      "weight": 655,
      "pokedexEntry": "Its unique style of coiling allows it to blast sand out of its sand sac more efficiently."
    },
    {
      "id": 845,
      "name": "cramorant",
      "baseExperience": 166,
      "height": 8,
      "weight": 180,
      "pokedexEntry": "This hungry Pokémon swallows Arrokuda whole. Occasionally, it makes a mistake and tries to swallow a Pokémon other than its preferred prey."
    },
    {
      "id": 846,
      "name": "arrokuda",
      "baseExperience": 56,
      "height": 5,
      "weight": 10,
      "pokedexEntry": "After it’s eaten its fill, its movements become extremely sluggish. That’s when Cramorant swallows it up."
    },
    {
      "id": 847,
      "name": "barraskewda",
      "baseExperience": 172,
      "height": 13,
      "weight": 300,
      "pokedexEntry": "It spins its tail fins to propel itself, surging forward at speeds of over 100 knots before ramming prey and spearing into them."
    },
    {
      "id": 848,
      "name": "toxel",
      "baseExperience": 48,
      "height": 4,
      "weight": 110,
      "pokedexEntry": "It manipulates the chemical makeup of its poison to produce electricity. The voltage is weak, but it can cause a tingling paralysis."
    },
    {
      "id": 849,
      "name": "toxtricity-amped",
      "baseExperience": 176,
      "height": 16,
      "weight": 400,
      "pokedexEntry": "It has an electrical organ on its chest. While generating electricity, it fills its surroundings with what sounds like the strumming of a bass guitar."
    },
    {
      "id": 850,
      "name": "sizzlipede",
      "baseExperience": 61,
      "height": 7,
      "weight": 10,
      "pokedexEntry": "It wraps prey up with its heated body, cooking them in its coils. Once they’re well-done, it will voraciously nibble them down to the last morsel."
    },
    {
      "id": 851,
      "name": "centiskorch",
      "baseExperience": 184,
      "height": 30,
      "weight": 1200,
      "pokedexEntry": "While its burning body is already dangerous on its own, this excessively hostile Pokémon also has large and very sharp fangs."
    },
    {
      "id": 852,
      "name": "clobbopus",
      "baseExperience": 62,
      "height": 6,
      "weight": 40,
      "pokedexEntry": "Its tentacles tear off easily, but it isn’t alarmed when that happens—it knows they’ll grow back. It’s about as smart as a three-year-old."
    },
    {
      "id": 853,
      "name": "grapploct",
      "baseExperience": 168,
      "height": 16,
      "weight": 390,
      "pokedexEntry": "Searching for an opponent to test its skills against, it emerges onto land. Once the battle is over, it returns to the sea."
    },
    {
      "id": 854,
      "name": "sinistea",
      "baseExperience": 62,
      "height": 1,
      "weight": 2,
      "pokedexEntry": "It absorbs the life-force of those who drink it. It waits patiently, but opportunities are fleeting— it tastes so bad that it gets spat out immediately."
    },
    {
      "id": 855,
      "name": "polteageist",
      "baseExperience": 178,
      "height": 2,
      "weight": 4,
      "pokedexEntry": "When angered, it launches tea from its body at the offender’s mouth. The tea causes strong chills if swallowed."
    },
    {
      "id": 856,
      "name": "hatenna",
      "baseExperience": 53,
      "height": 4,
      "weight": 34,
      "pokedexEntry": "If this Pokémon senses a strong emotion, it will run away as fast as it can. It prefers areas without people."
    },
    {
      "id": 857,
      "name": "hattrem",
      "baseExperience": 130,
      "height": 6,
      "weight": 48,
      "pokedexEntry": "Using the braids on its head, it pummels foes to get them to quiet down. One blow from those braids would knock out a professional boxer."
    },
    {
      "id": 858,
      "name": "hatterene",
      "baseExperience": 255,
      "height": 21,
      "weight": 51,
      "pokedexEntry": "If you’re too loud around it, you risk being torn apart by the claws on its tentacle. This Pokémon is also known as the Forest Witch."
    },
    {
      "id": 859,
      "name": "impidimp",
      "baseExperience": 53,
      "height": 4,
      "weight": 55,
      "pokedexEntry": "It sneaks into people’s homes, stealing things and feasting on the negative energy of the frustrated occupants."
    },
    {
      "id": 860,
      "name": "morgrem",
      "baseExperience": 130,
      "height": 8,
      "weight": 125,
      "pokedexEntry": "With sly cunning, it tries to lure people into the woods. Some believe it to have the power to make crops grow."
    },
    {
      "id": 861,
      "name": "grimmsnarl",
      "baseExperience": 255,
      "height": 15,
      "weight": 610,
      "pokedexEntry": "Its hairs work like muscle fibers. When its hairs unfurl, they latch on to opponents, ensnaring them as tentacles would."
    },
    {
      "id": 862,
      "name": "obstagoon",
      "baseExperience": 260,
      "height": 16,
      "weight": 460,
      "pokedexEntry": "It evolved after experiencing numerous fights. While crossing its arms, it lets out a shout that would make any opponent flinch."
    },
    {
      "id": 863,
      "name": "perrserker",
      "baseExperience": 154,
      "height": 8,
      "weight": 280,
      "pokedexEntry": "After many battles, it evolved dangerous claws that come together to form daggers when extended."
    },
    {
      "id": 864,
      "name": "cursola",
      "baseExperience": 179,
      "height": 10,
      "weight": 4,
      "pokedexEntry": "Be cautious of the ectoplasmic body surrounding its soul. You’ll become stiff as stone if you touch it."
    },
    {
      "id": 865,
      "name": "sirfetchd",
      "baseExperience": 177,
      "height": 8,
      "weight": 1170,
      "pokedexEntry": "After deflecting attacks with its hard leaf shield, it strikes back with its sharp leek stalk. The leek stalk is both weapon and food."
    },
    {
      "id": 866,
      "name": "mr-rime",
      "baseExperience": 182,
      "height": 15,
      "weight": 582,
      "pokedexEntry": "Its amusing movements make it very popular. It releases its psychic power from the pattern on its belly."
    },
    {
      "id": 867,
      "name": "runerigus",
      "baseExperience": 169,
      "height": 16,
      "weight": 666,
      "pokedexEntry": "Never touch its shadowlike body, or you’ll be shown the horrific memories behind the picture carved into it."
    },
    {
      "id": 868,
      "name": "milcery",
      "baseExperience": 54,
      "height": 2,
      "weight": 3,
      "pokedexEntry": "They say that any patisserie visited by Milcery is guaranteed success and good fortune."
    },
    {
      "id": 869,
      "name": "alcremie",
      "baseExperience": 173,
      "height": 3,
      "weight": 5,
      "pokedexEntry": "The cells that compose its cream fluctuated suddenly during evolution, giving the cream a bitter flavor."
    },
    {
      "id": 870,
      "name": "falinks",
      "baseExperience": 165,
      "height": 30,
      "weight": 620,
      "pokedexEntry": "The six of them work together as one Pokémon. Teamwork is also their battle strategy, and they constantly change their formation as they fight."
    },
    {
      "id": 871,
      "name": "pincurchin",
      "baseExperience": 152,
      "height": 3,
      "weight": 10,
      "pokedexEntry": "It stores electricity in each spine. Even if one gets broken off, it still continues to emit electricity for at least three hours."
    },
    {
      "id": 872,
      "name": "snom",
      "baseExperience": 37,
      "height": 3,
      "weight": 38,
      "pokedexEntry": "It eats snow that piles up on the ground. The more snow it eats, the bigger and more impressive the spikes on its back grow."
    },
    {
      "id": 873,
      "name": "frosmoth",
      "baseExperience": 166,
      "height": 13,
      "weight": 420,
      "pokedexEntry": "It shows no mercy to any who desecrate fields and mountains. It will fly around on its icy wings, causing a blizzard to chase offenders away."
    },
    {
      "id": 874,
      "name": "stonjourner",
      "baseExperience": 165,
      "height": 25,
      "weight": 5200,
      "pokedexEntry": "Once a year, on a specific date and at a specific time, they gather out of nowhere and form up in a circle."
    },
    {
      "id": 875,
      "name": "eiscue-ice",
      "baseExperience": 165,
      "height": 14,
      "weight": 890,
      "pokedexEntry": "This Pokémon keeps its heat-sensitive head cool with ice. It fishes for its food, dangling its single hair into the sea to lure in prey."
    },
    {
      "id": 876,
      "name": "indeedee-male",
      "baseExperience": 166,
      "height": 9,
      "weight": 280,
      "pokedexEntry": "Through its horns, it can pick up on the emotions of creatures around it. Positive emotions are the source of its strength."
    },
    {
      "id": 877,
      "name": "morpeko-full-belly",
      "baseExperience": 153,
      "height": 3,
      "weight": 30,
      "pokedexEntry": "It carries electrically roasted seeds with it as if they’re precious treasures. No matter how much it eats, it always gets hungry again in short order."
    },
    {
      "id": 878,
      "name": "cufant",
      "baseExperience": 66,
      "height": 12,
      "weight": 1000,
      "pokedexEntry": "If a job requires serious strength, this Pokémon will excel at it. Its copper body tarnishes in the rain, turning a vibrant green color."
    },
    {
      "id": 879,
      "name": "copperajah",
      "baseExperience": 175,
      "height": 30,
      "weight": 6500,
      "pokedexEntry": "These Pokémon live in herds. Their trunks have incredible grip strength, strong enough to crush giant rocks into powder."
    },
    {
      "id": 880,
      "name": "dracozolt",
      "baseExperience": 177,
      "height": 18,
      "weight": 1900,
      "pokedexEntry": "The powerful muscles in its tail generate its electricity. Compared to its lower body, its upper half is entirely too small."
    },
    {
      "id": 881,
      "name": "arctozolt",
      "baseExperience": 177,
      "height": 23,
      "weight": 1500,
      "pokedexEntry": "This Pokémon lived on prehistoric seashores and was able to preserve food with the ice on its body. It went extinct because it moved so slowly."
    },
    {
      "id": 882,
      "name": "dracovish",
      "baseExperience": 177,
      "height": 23,
      "weight": 2150,
      "pokedexEntry": "Its mighty legs are capable of running at speeds exceeding 40 mph, but this Pokémon can’t breathe unless it’s underwater."
    },
    {
      "id": 883,
      "name": "arctovish",
      "baseExperience": 177,
      "height": 20,
      "weight": 1750,
      "pokedexEntry": "The skin on its face is impervious to attack, but breathing difficulties made this Pokémon go extinct anyway."
    },
    {
      "id": 884,
      "name": "duraludon",
      "baseExperience": 187,
      "height": 18,
      "weight": 400,
      "pokedexEntry": "The special metal that composes its body is very light, so this Pokémon has considerable agility. It lives in caves because it dislikes the rain."
    },
    {
      "id": 885,
      "name": "dreepy",
      "baseExperience": 54,
      "height": 5,
      "weight": 20,
      "pokedexEntry": "If this weak Pokémon is by itself, a mere child could defeat it. But if Dreepy has friends to help it train, it can evolve and become much stronger."
    },
    {
      "id": 886,
      "name": "drakloak",
      "baseExperience": 144,
      "height": 14,
      "weight": 110,
      "pokedexEntry": "Without a Dreepy to place on its head and care for, it gets so uneasy it’ll try to substitute any Pokémon it finds for the missing Dreepy."
    },
    {
      "id": 887,
      "name": "dragapult",
      "baseExperience": 300,
      "height": 30,
      "weight": 500,
      "pokedexEntry": "Apparently the Dreepy inside Dragapult’s horns eagerly look forward to being launched out at Mach speeds."
    },
    {
      "id": 888,
      "name": "zacian",
      "baseExperience": 335,
      "height": 28,
      "weight": 1100,
      "pokedexEntry": "Able to cut down anything with a single strike, it became known as the Fairy King’s Sword, and it inspired awe in friend and foe alike."
    },
    {
      "id": 889,
      "name": "zamazenta",
      "baseExperience": 335,
      "height": 29,
      "weight": 2100,
      "pokedexEntry": "Now that it’s equipped with its shield, it can shrug off impressive blows, including the attacks of Dynamax Pokémon."
    },
    {
      "id": 890,
      "name": "eternatus",
      "baseExperience": 345,
      "height": 200,
      "weight": 9500,
      "pokedexEntry": "It was inside a meteorite that fell 20,000 years ago. There seems to be a connection between this Pokémon and the Dynamax phenomenon."
    },
    {
      "id": 891,
      "name": "kubfu",
      "baseExperience": 77,
      "height": 6,
      "weight": 120,
      "pokedexEntry": "If Kubfu pulls the long white hair on its head, its fighting spirit heightens and power wells up from the depths of its belly."
    },
    {
      "id": 892,
      "name": "urshifu-single-strike",
      "baseExperience": 275,
      "height": 19,
      "weight": 1050,
      "pokedexEntry": "The energy released by this Pokémon’s fists forms shock waves that can blow away Dynamax Pokémon in just one hit."
    },
    {
      "id": 893,
      "name": "zarude",
      "baseExperience": 300,
      "height": 18,
      "weight": 700,
      "pokedexEntry": "Once the vines on Zarude’s body tear off, they become nutrients in the soil. This helps the plants of the forest grow."
    },
    {
      "id": 894,
      "name": "regieleki",
      "baseExperience": 290,
      "height": 12,
      "weight": 1450,
      "pokedexEntry": "Its entire body is made up of a single organ that generates electrical energy. Regieleki is capable of creating all Galar’s electricity."
    },
    {
      "id": 895,
      "name": "regidrago",
      "baseExperience": 290,
      "height": 21,
      "weight": 2000,
      "pokedexEntry": "Its body is composed of crystallized dragon energy. Regidrago is said to have the powers of every dragon Pokémon."
    },
    {
      "id": 896,
      "name": "glastrier",
      "baseExperience": 290,
      "height": 22,
      "weight": 8000,
      "pokedexEntry": "Glastrier has tremendous physical strength, and the mask of ice covering its face is 100 times harder than diamond."
    },
    {
      "id": 897,
      "name": "spectrier",
      "baseExperience": 290,
      "height": 20,
      "weight": 445,
      "pokedexEntry": "As it dashes through the night, Spectrier absorbs the life-force of sleeping creatures. It craves silence and solitude."
    },
    {
      "id": 898,
      "name": "calyrex",
      "baseExperience": 250,
      "height": 11,
      "weight": 77,
      "pokedexEntry": "Calyrex is known in legend as a king that ruled over Galar in ancient times. It has the power to cause hearts to mend and plants to spring forth."
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pokemon', null, {});
  }
}
