import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.band.create({
    data: {
      name: "Radiohead",
      slug: "radiohead",
      description: "Rock alternativo experimental britânico",
      status: "ACTIVE",
      tracks: {
        create: [
          { title: "Creep", slug: "creep-radiohead", durationInSeconds: 238 },
          {
            title: "Karma Police",
            slug: "karma-police-radiohead",
            durationInSeconds: 260,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Arctic Monkeys",
      slug: "arctic-monkeys",
      description: "Indie rock britânico moderno",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Do I Wanna Know",
            slug: "do-i-wanna-know-arctic",
            durationInSeconds: 272,
          },
          {
            title: "R U Mine",
            slug: "r-u-mine-arctic",
            durationInSeconds: 201,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Foo Fighters",
      slug: "foo-fighters",
      description: "Rock alternativo americano",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Everlong",
            slug: "everlong-foo-fighters",
            durationInSeconds: 250,
          },
          {
            title: "The Pretender",
            slug: "the-pretender-foo-fighters",
            durationInSeconds: 269,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "The Strokes",
      slug: "the-strokes",
      description: "Indie rock nova-iorquino",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Last Nite",
            slug: "last-nite-strokes",
            durationInSeconds: 193,
          },
          { title: "Someday", slug: "someday-strokes", durationInSeconds: 188 },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Muse",
      slug: "muse",
      description: "Rock progressivo alternativo",
      status: "ACTIVE",
      tracks: {
        create: [
          { title: "Uprising", slug: "uprising-muse", durationInSeconds: 305 },
          {
            title: "Starlight",
            slug: "starlight-muse",
            durationInSeconds: 240,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Pink Floyd",
      slug: "pink-floyd",
      description: "Rock progressivo psicodélico",
      status: "ACTIVE",
      tracks: {
        create: [
          { title: "Time", slug: "time-pink-floyd", durationInSeconds: 412 },
          { title: "Money", slug: "money-pink-floyd", durationInSeconds: 382 },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Queen",
      slug: "queen",
      description: "Rock clássico britânico",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Bohemian Rhapsody",
            slug: "bohemian-rhapsody-queen",
            durationInSeconds: 354,
          },
          {
            title: "Dont Stop Me Now",
            slug: "dont-stop-me-now-queen",
            durationInSeconds: 209,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Led Zeppelin",
      slug: "led-zeppelin",
      description: "Hard rock e blues rock",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Stairway to Heaven",
            slug: "stairway-to-heaven",
            durationInSeconds: 482,
          },
          {
            title: "Kashmir",
            slug: "kashmir-led-zeppelin",
            durationInSeconds: 515,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "The Rolling Stones",
      slug: "the-rolling-stones",
      description: "Rock clássico inglês",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Gimme Shelter",
            slug: "gimme-shelter",
            durationInSeconds: 270,
          },
          {
            title: "Paint It Black",
            slug: "paint-it-black",
            durationInSeconds: 202,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "The Beatles",
      slug: "the-beatles",
      description: "Banda mais influente do rock",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Come Together",
            slug: "come-together-beatles",
            durationInSeconds: 259,
          },
          {
            title: "Hey Jude",
            slug: "hey-jude-beatles",
            durationInSeconds: 431,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Metallica",
      slug: "metallica",
      description: "Heavy metal americano",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Enter Sandman",
            slug: "enter-sandman-metallica",
            durationInSeconds: 331,
          },
          {
            title: "Master of Puppets",
            slug: "master-of-puppets-metallica",
            durationInSeconds: 515,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Slipknot",
      slug: "slipknot",
      description: "Nu metal e metal extremo",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Duality",
            slug: "duality-slipknot",
            durationInSeconds: 252,
          },
          {
            title: "Psychosocial",
            slug: "psychosocial-slipknot",
            durationInSeconds: 284,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "System of a Down",
      slug: "system-of-a-down",
      description: "Metal alternativo experimental",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Chop Suey",
            slug: "chop-suey-soad",
            durationInSeconds: 210,
          },
          { title: "Toxicity", slug: "toxicity-soad", durationInSeconds: 218 },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Iron Maiden",
      slug: "iron-maiden",
      description: "Heavy metal britânico clássico",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Fear of the Dark",
            slug: "fear-of-the-dark",
            durationInSeconds: 438,
          },
          { title: "The Trooper", slug: "the-trooper", durationInSeconds: 245 },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Pantera",
      slug: "pantera",
      description: "Groove metal americano",
      status: "ACTIVE",
      tracks: {
        create: [
          { title: "Walk", slug: "walk-pantera", durationInSeconds: 315 },
          {
            title: "Cowboys from Hell",
            slug: "cowboys-from-hell",
            durationInSeconds: 244,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Legião Urbana",
      slug: "legiao-urbana",
      description: "Rock brasileiro dos anos 80",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Tempo Perdido",
            slug: "tempo-perdido-legiao",
            durationInSeconds: 303,
          },
          {
            title: "Pais e Filhos",
            slug: "pais-e-filhos-legiao",
            durationInSeconds: 305,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Charlie Brown Jr",
      slug: "charlie-brown-jr",
      description: "Rock, skate punk e reggae",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Zoio de Lula",
            slug: "zoio-de-lula-cbjr",
            durationInSeconds: 182,
          },
          { title: "Céu Azul", slug: "ceu-azul-cbjr", durationInSeconds: 199 },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "O Rappa",
      slug: "o-rappa",
      description: "Rock brasileiro com reggae",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Minha Alma",
            slug: "minha-alma-o-rappa",
            durationInSeconds: 269,
          },
          {
            title: "Pescador de Ilusões",
            slug: "pescador-de-ilusoes-o-rappa",
            durationInSeconds: 241,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Los Hermanos",
      slug: "los-hermanos",
      description: "Rock alternativo e MPB",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Anna Julia",
            slug: "anna-julia-los-hermanos",
            durationInSeconds: 209,
          },
          {
            title: "Último Romance",
            slug: "ultimo-romance-los-hermanos",
            durationInSeconds: 258,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Titãs",
      slug: "titas",
      description: "Rock brasileiro clássico",
      status: "ACTIVE",
      tracks: {
        create: [
          { title: "Epitáfio", slug: "epitafio-titas", durationInSeconds: 230 },
          {
            title: "Pra Dizer Adeus",
            slug: "pra-dizer-adeus",
            durationInSeconds: 241,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Daft Punk",
      slug: "daft-punk",
      description: "Música eletrônica francesa",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "One More Time",
            slug: "one-more-time-daft-punk",
            durationInSeconds: 320,
          },
          {
            title: "Around the World",
            slug: "around-the-world-daft-punk",
            durationInSeconds: 429,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Bob Marley and The Wailers",
      slug: "bob-marley-and-the-wailers",
      description: "Reggae jamaicano clássico",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Redemption Song",
            slug: "redemption-song-marley",
            durationInSeconds: 231,
          },
          {
            title: "Three Little Birds",
            slug: "three-little-birds",
            durationInSeconds: 180,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Racionais MCs",
      slug: "racionais-mcs",
      description: "Rap nacional brasileiro",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Negro Drama",
            slug: "negro-drama-racionais",
            durationInSeconds: 356,
          },
          {
            title: "Vida Loka",
            slug: "vida-loka-racionais",
            durationInSeconds: 295,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Gorillaz",
      slug: "gorillaz",
      description: "Projeto alternativo eletrônico",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Clint Eastwood",
            slug: "clint-eastwood-gorillaz",
            durationInSeconds: 341,
          },
          {
            title: "Feel Good Inc",
            slug: "feel-good-inc",
            durationInSeconds: 221,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Coldplay",
      slug: "coldplay",
      description: "Pop rock britânico",
      status: "ACTIVE",
      tracks: {
        create: [
          { title: "Yellow", slug: "yellow-coldplay", durationInSeconds: 266 },
          {
            title: "Fix You",
            slug: "fix-you-coldplay",
            durationInSeconds: 295,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "The Lumineers",
      slug: "the-lumineers",
      description: "Folk rock alternativo",
      status: "ACTIVE",
      tracks: {
        create: [
          { title: "Ho Hey", slug: "ho-hey-lumineers", durationInSeconds: 163 },
          {
            title: "Cleopatra",
            slug: "cleopatra-lumineers",
            durationInSeconds: 201,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Vampire Weekend",
      slug: "vampire-weekend",
      description: "Indie pop com influências africanas",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "A-Punk",
            slug: "a-punk-vampire-weekend",
            durationInSeconds: 138,
          },
          {
            title: "Oxford Comma",
            slug: "oxford-comma",
            durationInSeconds: 210,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Tame Impala",
      slug: "tame-impala",
      description: "Rock psicodélico moderno",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "The Less I Know The Better",
            slug: "less-i-know-the-better",
            durationInSeconds: 216,
          },
          {
            title: "Feels Like We Only Go Backwards",
            slug: "feels-like-we-only-go-backwards",
            durationInSeconds: 213,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Phoenix",
      slug: "phoenix",
      description: "Indie pop francês",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Lisztomania",
            slug: "lisztomania-phoenix",
            durationInSeconds: 240,
          },
          { title: "1901", slug: "1901-phoenix", durationInSeconds: 194 },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Foster the People",
      slug: "foster-the-people",
      description: "Indie pop americano",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Pumped Up Kicks",
            slug: "pumped-up-kicks",
            durationInSeconds: 240,
          },
          { title: "Houdini", slug: "houdini-foster", durationInSeconds: 203 },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Green Day",
      slug: "green-day",
      description: "Punk rock californiano",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Boulevard of Broken Dreams",
            slug: "boulevard-broken-dreams",
            durationInSeconds: 260,
          },
          {
            title: "American Idiot",
            slug: "american-idiot",
            durationInSeconds: 174,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Blink-182",
      slug: "blink-182",
      description: "Pop punk dos anos 2000",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "All The Small Things",
            slug: "all-the-small-things",
            durationInSeconds: 167,
          },
          {
            title: "I Miss You",
            slug: "i-miss-you-blink",
            durationInSeconds: 227,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "My Chemical Romance",
      slug: "my-chemical-romance",
      description: "Emo rock alternativo",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Welcome to the Black Parade",
            slug: "welcome-black-parade",
            durationInSeconds: 311,
          },
          { title: "Helena", slug: "helena-mcr", durationInSeconds: 222 },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Bad Religion",
      slug: "bad-religion",
      description: "Hardcore punk melódico",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "21st Century Digital Boy",
            slug: "21st-century-digital-boy",
            durationInSeconds: 170,
          },
          {
            title: "Infected",
            slug: "infected-bad-religion",
            durationInSeconds: 249,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Dead Kennedys",
      slug: "dead-kennedys",
      description: "Punk rock político",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Holiday in Cambodia",
            slug: "holiday-in-cambodia",
            durationInSeconds: 224,
          },
          {
            title: "California Über Alles",
            slug: "california-uber-alles",
            durationInSeconds: 215,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Caetano Veloso",
      slug: "caetano-veloso",
      description: "MPB e tropicalismo",
      status: "ACTIVE",
      tracks: {
        create: [
          { title: "Sozinho", slug: "sozinho-caetano", durationInSeconds: 240 },
          {
            title: "Alegria Alegria",
            slug: "alegria-alegria",
            durationInSeconds: 173,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Gilberto Gil",
      slug: "gilberto-gil",
      description: "MPB com reggae e tropicalismo",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Aquele Abraço",
            slug: "aquele-abraco",
            durationInSeconds: 181,
          },
          {
            title: "Expresso 2222",
            slug: "expresso-2222",
            durationInSeconds: 214,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Marisa Monte",
      slug: "marisa-monte",
      description: "MPB contemporânea",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Ainda Bem",
            slug: "ainda-bem-marisa",
            durationInSeconds: 224,
          },
          { title: "Beija Eu", slug: "beija-eu", durationInSeconds: 236 },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Skank",
      slug: "skank",
      description: "Pop rock brasileiro",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Garota Nacional",
            slug: "garota-nacional",
            durationInSeconds: 214,
          },
          {
            title: "Vou Deixar",
            slug: "vou-deixar-skank",
            durationInSeconds: 230,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Jota Quest",
      slug: "jota-quest",
      description: "Pop rock nacional",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Dias Melhores",
            slug: "dias-melhores",
            durationInSeconds: 235,
          },
          { title: "Fácil", slug: "facil-jota-quest", durationInSeconds: 217 },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Calvin Harris",
      slug: "calvin-harris",
      description: "EDM e dance pop",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "I'm Not Alone",
            slug: "im-not-alone",
            durationInSeconds: 195,
          },
          {
            title: "Summer",
            slug: "summer-calvin-harris",
            durationInSeconds: 222,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Avicii",
      slug: "avicii",
      description: "EDM melódico",
      status: "ACTIVE",
      tracks: {
        create: [
          { title: "Levels", slug: "levels-avicii", durationInSeconds: 227 },
          {
            title: "I Could Be The One",
            slug: "i-could-be-the-one",
            durationInSeconds: 215,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Justice",
      slug: "justice",
      description: "Eletrônica francesa",
      status: "ACTIVE",
      tracks: {
        create: [
          { title: "D.A.N.C.E", slug: "dance-justice", durationInSeconds: 250 },
          { title: "Genesis", slug: "genesis-justice", durationInSeconds: 214 },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Disclosure",
      slug: "disclosure",
      description: "House e UK garage",
      status: "ACTIVE",
      tracks: {
        create: [
          { title: "Latch", slug: "latch-disclosure", durationInSeconds: 255 },
          {
            title: "White Noise",
            slug: "white-noise-disclosure",
            durationInSeconds: 236,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Deadmau5",
      slug: "deadmau5",
      description: "Progressive house",
      status: "ACTIVE",
      tracks: {
        create: [
          { title: "Strobe", slug: "strobe-deadmau5", durationInSeconds: 632 },
          {
            title: "Ghosts n Stuff",
            slug: "ghosts-n-stuff",
            durationInSeconds: 249,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Miles Davis Quintet",
      slug: "miles-davis-quintet",
      description: "Jazz modal e bebop",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "So What",
            slug: "so-what-miles-davis",
            durationInSeconds: 545,
          },
          {
            title: "Freddie Freeloader",
            slug: "freddie-freeloader",
            durationInSeconds: 587,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "John Coltrane Quartet",
      slug: "john-coltrane-quartet",
      description: "Jazz espiritual e hard bop",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "My Favorite Things",
            slug: "my-favorite-things-coltrane",
            durationInSeconds: 799,
          },
          { title: "Naima", slug: "naima-coltrane", durationInSeconds: 282 },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Ray Charles Orchestra",
      slug: "ray-charles-orchestra",
      description: "Soul, jazz e rhythm and blues",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Hit the Road Jack",
            slug: "hit-the-road-jack",
            durationInSeconds: 121,
          },
          {
            title: "Georgia on My Mind",
            slug: "georgia-on-my-mind",
            durationInSeconds: 215,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "B.B. King Band",
      slug: "bb-king-band",
      description: "Blues elétrico tradicional",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "The Thrill Is Gone",
            slug: "thrill-is-gone",
            durationInSeconds: 325,
          },
          {
            title: "Every Day I Have the Blues",
            slug: "every-day-i-have-the-blues",
            durationInSeconds: 166,
          },
        ],
      },
    },
  });

  await prisma.band.create({
    data: {
      name: "Amy Winehouse Band",
      slug: "amy-winehouse-band",
      description: "Soul moderno com jazz",
      status: "ACTIVE",
      tracks: {
        create: [
          {
            title: "Back to Black",
            slug: "back-to-black-amy",
            durationInSeconds: 241,
          },
          {
            title: "Rehab",
            slug: "rehab-amy-winehouse",
            durationInSeconds: 214,
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
