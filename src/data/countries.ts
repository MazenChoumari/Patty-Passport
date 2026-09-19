export type RouteZone =
  | "Levant Route"
  | "Aegean Route"
  | "Iberian & Western Route"
  | "Adriatic Route"
  | "North African Route";

import type { PriceItemType } from "@/data/pricing";

export type MenuItem = {
  name: string;
  description: string;
  priceType: PriceItemType;
  tags?: string[];
  /** true when this item is a reasonable placeholder suggestion, not from the source brief */
  suggested?: boolean;
};

export type CountryFood = {
  vegBurger: MenuItem;
  chickenBurger: MenuItem;
  beefBurger: MenuItem;
  quickBiteHero: "veg" | "chicken" | "beef";
  loadedFries: [MenuItem, MenuItem];
  salad: MenuItem;
  coldDrink: MenuItem;
  alcoholicDrink: MenuItem;
  hotDrink: MenuItem;
  desserts: [MenuItem, MenuItem];
};

export type Playlist = {
  name: string;
  tracks: { title: string; artist: string }[];
};

export type Activities = {
  greetingPractice: { phrase: string; meaning: string };
  quiz: { question: string; options: string[]; answerIndex: number };
  kidsActivity: string;
};

export type CountryDetail = {
  greetingLocal: string;
  greetingRomanized?: string;
  greetingEnglish: string;
  cultureFacts: string[];
  food: CountryFood;
  playlist: Playlist;
  activities: Activities;
};

export type Country = {
  slug: string;
  destinationNumber: number;
  name: string;
  flagEmoji: string;
  route: RouteZone;
  tagline: string;
  detail?: CountryDetail;
};

export const countries: Country[] = [
  {
    slug: "lebanon",
    destinationNumber: 1,
    name: "Lebanon",
    flagEmoji: "🇱🇧",
    route: "Levant Route",
    tagline: "Cedars, souks & toum",
    detail: {
      greetingLocal: "يا ميت أهلا وسهلا بلبنان، نورتونا!",
      greetingRomanized: "Ya meet ahla w sahla bi Lebnen, nawartouna!",
      greetingEnglish: "A hundred welcomes to Lebanon, you have brightened our day!",
      cultureFacts: [
        "Lebanon is home to some of the oldest cedar forests on Earth — the cedar sits proudly on the national flag.",
        "Beirut's souks have been trading spices, textiles and gossip for over 5,000 years.",
        "Lebanese hospitality runs deep: guests are traditionally served food the moment they sit down, invited or not.",
        "Toum, the garlicky whipped sauce on your Shawarma Souk Burger, is whipped by hand into a cloud-like emulsion — no eggs required.",
        "Lebanon has more registered UNESCO World Heritage Sites per capita than almost any other country in the region.",
      ],
      food: {
        vegBurger: {
          name: "Halloumi Village Burger",
          description:
            "Grilled halloumi, tomato, basil, cucumber-mint, lemony labneh, olive oil, on a sesame or za'atar brioche.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Halal-friendly", "No pork"],
        },
        chickenBurger: {
          name: "Shish Tawouk Street Burger",
          description:
            "Yoghurt-garlic-lemon marinated chicken, lettuce, tomato, pickles, coriander, toum, soft potato bun.",
          priceType: "chickenBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        beefBurger: {
          name: "Shawarma Souk Burger",
          description:
            "Beef patty topped with shawarma slices, peppers, onions, sumac, pomegranate molasses, toum, sesame bun.",
          priceType: "beefBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "Batata Harra Fries",
            description: "Garlic, coriander, chilli, lemon, tahini-lemon drizzle.",
            priceType: "loadedFries",
            tags: ["Vegan-friendly", "Vegetarian"],
          },
          {
            name: "Za'atar & Cheese Fries",
            description: "Za'atar, halloumi/akkawi cheese, tomato, yoghurt-mint sauce.",
            priceType: "loadedFries",
            tags: ["Vegetarian", "Contains dairy"],
          },
        ],
        salad: {
          name: "Tabbouleh Mountain Salad",
          description: "Parsley, mint, tomato, fine bulgur, lemon, olive oil, allspice.",
          priceType: "salad",
          tags: ["Vegan-friendly", "Vegetarian"],
        },
        coldDrink: {
          name: "Lemon Mint Corniche Cooler",
          description: "Fresh lemon and mint over ice, inspired by Beirut's seaside walk.",
          priceType: "coldCountryDrink",
          tags: ["Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Arak Sea Breeze",
          description: "Lebanon's aniseed spirit, lengthened with soda and citrus.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Levant Strong Coffee",
          description: "Finely ground and simmered Lebanese-style, cardamom option available.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly"],
        },
        desserts: [
          {
            name: "Knefe bel Kaak",
            description:
              "Warm cheese and semolina in toasted kaak bread, orange blossom syrup, pistachios.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
          {
            name: "Baklava Ice-Cream Sundae",
            description: "Layered baklava crumble over ice cream, honey-nut syrup.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
        ],
      },
      playlist: {
        name: "Beirut Nights",
        tracks: [
          { title: "Nassam Alayna El Hawa", artist: "Fairuz" },
          { title: "Bala Wala Shi", artist: "Mashrou' Leila" },
          { title: "Balak", artist: "Yasmine Hamdan" },
          { title: "Aatini El Nay", artist: "Fairuz" },
        ],
      },
      activities: {
        greetingPractice: {
          phrase: "Marhaba!",
          meaning: "Hello! — the everyday Lebanese greeting.",
        },
        quiz: {
          question: "What is the national tree of Lebanon, found on its flag?",
          options: ["Olive tree", "Cedar tree", "Palm tree", "Fig tree"],
          answerIndex: 1,
        },
        kidsActivity:
          "Color the Lebanese flag: red, white, red stripes with a green cedar tree in the middle.",
      },
    },
  },
  {
    slug: "syria",
    destinationNumber: 2,
    name: "Syria",
    flagEmoji: "🇸🇾",
    route: "Levant Route",
    tagline: "Old-city spice & sumac",
    detail: {
      greetingLocal: "أهلاً وسهلاً فيك بسوريا!",
      greetingRomanized: "Ahlan wa sahlan feek bi Souriya!",
      greetingEnglish: "Welcome and warmly received in Syria!",
      cultureFacts: [
        "Damascus and Aleppo are among the oldest continuously inhabited cities in the world.",
        "Aleppo pepper, dried and mildly smoky, is one of the region's most prized spice exports.",
        "Syrian mosaics, textiles and soap-making traditions stretch back thousands of years.",
        "Mulberry trees line many Syrian orchards, giving the region its distinctive silk and mulberry drinks.",
      ],
      food: {
        vegBurger: {
          name: "Falafel Old City Burger",
          description: "Falafel patty, tahini, pickled turnip, tomato, parsley, sesame bun.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Vegan-friendly", "Halal-friendly"],
        },
        chickenBurger: {
          name: "Aleppo Pepper Chicken Burger",
          description: "Aleppo-pepper spiced chicken, roasted peppers, garlic yoghurt, herbs.",
          priceType: "chickenBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        beefBurger: {
          name: "Kebab Sumac Burger",
          description: "Kebab-style beef, sumac onions, parsley, tahini-yoghurt sauce.",
          priceType: "beefBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        quickBiteHero: "beef",
        loadedFries: [
          {
            name: "Aleppo Chilli Fries",
            description: "Fries tossed in Aleppo pepper oil with garlic and herbs.",
            priceType: "loadedFries",
            tags: ["Vegetarian"],
          },
          {
            name: "Fattoush Fries",
            description: "Lettuce, tomato, cucumber, radish, crisp bread, sumac dressing.",
            priceType: "loadedFries",
            tags: ["Vegetarian"],
          },
        ],
        salad: {
          name: "Fattoush Garden Salad",
          description: "Mixed greens, radish, cucumber, crisp bread, pomegranate-sumac dressing.",
          priceType: "salad",
          tags: ["Vegan-friendly", "Vegetarian"],
        },
        coldDrink: {
          name: "Mulberry Silk Juice",
          description: "Fresh mulberry juice, lightly sweetened, served over ice.",
          priceType: "coldCountryDrink",
          tags: ["Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Arak Aleppo Nights",
          description: "Anise arak served with ice and a splash of water, Aleppo-style.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Syrian Cardamom Coffee",
          description: "Finely ground coffee simmered with cardamom.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly"],
        },
        desserts: [
          {
            name: "Bouza Arabieh Pistachio",
            description: "Stretchy mastic-based ice cream rolled in crushed pistachios.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
          {
            name: "Ma'amoul Cloud",
            description: "Warm date-and-nut semolina cookies with a small scoop of ice cream.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
        ],
      },
      playlist: {
        name: "Old City Nights",
        tracks: [
          { title: "Ya Tayr", artist: "George Wassouf" },
          { title: "Habibi Ya Nour El Ain (live)", artist: "Amr Diab" },
          { title: "Ana Hawait", artist: "Sabah Fakhri" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "Marhaba!", meaning: "Hello! — a warm, everyday greeting." },
        quiz: {
          question: "Which Syrian city is famous for its ancient covered souks?",
          options: ["Aleppo", "Reykjavik", "Lyon", "Perth"],
          answerIndex: 0,
        },
        kidsActivity: "Match the spice: can you find Aleppo pepper on the spice card?",
      },
    },
  },
  {
    slug: "palestine",
    destinationNumber: 3,
    name: "Palestine",
    flagEmoji: "🇵🇸",
    route: "Levant Route",
    tagline: "Olives, za'atar & sumac",
    detail: {
      greetingLocal: "أهلاً بكم في فلسطين!",
      greetingRomanized: "Ahlan bikom fi Falastin!",
      greetingEnglish: "Welcome to Palestine!",
      cultureFacts: [
        "Olive trees are central to Palestinian culture — some groves are said to be over a thousand years old.",
        "Za'atar, a wild thyme-sesame-sumac blend, is a breakfast staple drizzled with olive oil.",
        "Palestinian embroidery (tatreez) uses geometric patterns unique to each region and village.",
        "Nablus is famous across the region for its traditional olive-oil soap making.",
      ],
      food: {
        vegBurger: {
          name: "Hummus & Sabich Burger",
          description: "Fried eggplant, hummus, boiled egg slices, pickles, amba mango sauce.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Halal-friendly"],
        },
        chickenBurger: {
          name: "Musakhan Chicken Burger",
          description: "Sumac-spiced chicken, caramelized onions, pine nuts, olive oil, taboon-style bun.",
          priceType: "chickenBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        beefBurger: {
          name: "Kefta Olives Burger",
          description: "Herb-packed kefta patty, grilled tomato, olives, tahini-yoghurt sauce.",
          priceType: "beefBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "Musakhan Fries",
            description: "Sumac onions, shredded chicken, pine nuts, olive oil.",
            priceType: "loadedFries",
            tags: ["Halal-friendly"],
          },
          {
            name: "Hummus Fries",
            description: "Warm hummus, olive oil, paprika, drizzled over crisp fries.",
            priceType: "loadedFries",
            tags: ["Vegetarian"],
          },
        ],
        salad: {
          name: "Olive & Herb Salad",
          description: "Mixed olives, parsley, tomato, onion, olive oil and lemon.",
          priceType: "salad",
          tags: ["Vegan-friendly", "Vegetarian"],
        },
        coldDrink: {
          name: "Pomegranate Field Juice",
          description: "Fresh pomegranate juice, lightly chilled.",
          priceType: "coldCountryDrink",
          tags: ["Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Local Wine / Arak Glass",
          description: "A glass of regional wine or arak, served neat or with water and ice.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Sage Tea",
          description: "Black tea steeped with fresh sage leaves.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly"],
        },
        desserts: [
          {
            name: "Kunafa Nabulsi Slice",
            description: "Warm cheese pastry topped with crisp semolina and orange-blossom syrup.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains dairy"],
          },
          {
            name: "Madluka",
            description: "Milk and semolina pudding, crushed nuts and syrup.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
        ],
      },
      playlist: {
        name: "Olive Grove Sessions",
        tracks: [
          { title: "Ya Halali Ya Mali", artist: "Traditional (Dabke)" },
          { title: "Bein El Wardat", artist: "Mohammed Assaf" },
          { title: "Ana Dammi Falastini", artist: "Amal Murkus" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "Ahlan!", meaning: "Hi! — a friendly, casual welcome." },
        quiz: {
          question: "What wild herb blend is a Palestinian breakfast staple?",
          options: ["Za'atar", "Basil", "Paprika", "Dill"],
          answerIndex: 0,
        },
        kidsActivity: "Trace the olive branch pattern and color it in green and gold.",
      },
    },
  },
  {
    slug: "turkey",
    destinationNumber: 4,
    name: "Türkiye",
    flagEmoji: "🇹🇷",
    route: "Aegean Route",
    tagline: "Bazaars, tea & sizzle",
    detail: {
      greetingLocal: "Türkiye'ye hoş geldiniz!",
      greetingRomanized: "Türkiye'ye hoş geldiniz!",
      greetingEnglish: "Welcome to Türkiye!",
      cultureFacts: [
        "Istanbul is the only city in the world that spans two continents, Europe and Asia.",
        "Turkish tea is traditionally served in small tulip-shaped glasses, always with sugar on the side.",
        "The Grand Bazaar in Istanbul has over 4,000 shops and has been trading since the 15th century.",
        "Türkiye is one of the world's largest producers of hazelnuts, the secret behind many local desserts.",
      ],
      food: {
        vegBurger: {
          name: "Menemen Veg Burger",
          description: "Pepper-tomato menemen, soft egg, melted cheese, herbs.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Halal-friendly"],
        },
        chickenBurger: {
          name: "Doner Chicken Burger",
          description: "Sliced doner chicken, tomato, onion, pickles, yoghurt-garlic sauce.",
          priceType: "chickenBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        beefBurger: {
          name: "Sujuk Fire Burger",
          description: "Beef patty, grilled sujuk sausage, spicy pepper sauce.",
          priceType: "beefBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "Iskender Fries",
            description: "Tomato butter sauce, yoghurt, sliced meat over crisp fries.",
            priceType: "loadedFries",
            tags: ["Halal-friendly"],
          },
          {
            name: "Sujuk Fries",
            description: "Grilled sujuk, yoghurt-garlic sauce, fresh herbs.",
            priceType: "loadedFries",
            tags: ["Halal-friendly"],
          },
        ],
        salad: {
          name: "Çoban Shepherd Salad",
          description: "Diced tomato, cucumber, pepper, onion, olive oil and lemon.",
          priceType: "salad",
          tags: ["Vegan-friendly", "Vegetarian"],
        },
        coldDrink: {
          name: "Ayran Cool Glass",
          description: "Chilled, lightly salted yoghurt drink.",
          priceType: "coldCountryDrink",
          tags: ["Vegetarian", "Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Rakı Table Drink",
          description: "Anise-flavoured rakı, served with water and ice, turns milky white.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Turkish Tea",
          description: "Strong black tea served in a tulip glass.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly"],
        },
        desserts: [
          {
            name: "Künefe Tray",
            description: "Crisp shredded pastry, melted cheese, sweet syrup, pistachio.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains dairy", "Contains nuts"],
          },
          {
            name: "Lokum Delight Bowl",
            description: "Turkish delight, mixed nuts, a touch of rosewater.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
        ],
      },
      playlist: {
        name: "Bosphorus Breeze",
        tracks: [
          { title: "Kalimba", artist: "Tarkan" },
          { title: "Şımarık", artist: "Tarkan" },
          { title: "Nem Kaldı", artist: "Sezen Aksu" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "Merhaba!", meaning: "Hello! — a warm, universal greeting." },
        quiz: {
          question: "Which Turkish city sits on two continents?",
          options: ["Ankara", "Izmir", "Istanbul", "Antalya"],
          answerIndex: 2,
        },
        kidsActivity: "Color the tulip-shaped tea glass — red, gold rim, and a sugar cube on the side.",
      },
    },
  },
  {
    slug: "cyprus",
    destinationNumber: 5,
    name: "Cyprus",
    flagEmoji: "🇨🇾",
    route: "Aegean Route",
    tagline: "Island halloumi & sun",
    detail: {
      greetingLocal: "Καλώς ήρθατε στην Κύπρο!",
      greetingRomanized: "Kalós írthate stin Kýpro!",
      greetingEnglish: "Welcome to Cyprus!",
      cultureFacts: [
        "Cyprus is the third-largest island in the Mediterranean and is named for its ancient copper mines.",
        "Halloumi cheese originated in Cyprus and can be grilled without melting.",
        "According to Greek mythology, Aphrodite rose from the sea near Paphos, Cyprus.",
        "Cypriot villages are famous for slow-cooked meze spreads shared across the whole table.",
      ],
      food: {
        vegBurger: {
          name: "Halloumi Island Burger",
          description: "Grilled halloumi, tomato, rocket, olive tapenade, herb bun.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Contains dairy"],
        },
        chickenBurger: {
          name: "Mediterranean Chicken Burger",
          description: "Lemon-oregano chicken, tomato, red onion, tzatziki.",
          priceType: "chickenBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        beefBurger: {
          name: "Olive & Feta Beef Burger",
          description: "Beef patty, crumbled feta, kalamata olives, sun-dried tomato.",
          priceType: "beefBurger",
          tags: ["Contains dairy"],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "Halloumi Fries",
            description: "Crisp halloumi strips over fries with a herb drizzle.",
            priceType: "loadedFries",
            tags: ["Vegetarian", "Contains dairy"],
          },
          {
            name: "Village Fries",
            description: "Tomato, cucumber, olives and oregano scattered over fries.",
            priceType: "loadedFries",
            tags: ["Vegetarian"],
          },
        ],
        salad: {
          name: "Village Salad",
          description: "Tomato, cucumber, onion, olives, feta, olive oil.",
          priceType: "salad",
          tags: ["Vegetarian", "Contains dairy"],
        },
        coldDrink: {
          name: "Carob & Grape Cooler",
          description: "Sweet carob syrup and grape juice over ice.",
          priceType: "coldCountryDrink",
          tags: ["Alcohol-free"],
          suggested: true,
        },
        alcoholicDrink: {
          name: "Brandy Sour",
          description: "Cyprus's classic brandy, lemon and soda cocktail.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Cyprus Coffee",
          description: "Greek-style coffee, unsweetened option available.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly"],
          suggested: true,
        },
        desserts: [
          {
            name: "Loukoumades",
            description: "Warm honey-soaked doughnuts with cinnamon.",
            priceType: "dessert",
            tags: ["Vegetarian"],
          },
          {
            name: "Carob Cake Slice",
            description: "Moist carob-syrup cake with walnuts.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
        ],
      },
      playlist: {
        name: "Aphrodite's Shore",
        tracks: [
          { title: "Anna Vissi Classics (mix)", artist: "Anna Vissi" },
          { title: "Cypriot Village Dances", artist: "Traditional" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "Yassou!", meaning: "Hi! — a casual Greek-Cypriot greeting." },
        quiz: {
          question: "What cheese, famous for grilling without melting, comes from Cyprus?",
          options: ["Feta", "Halloumi", "Mozzarella", "Gouda"],
          answerIndex: 1,
        },
        kidsActivity: "Match the goddess Aphrodite to her legendary birthplace on the map.",
      },
    },
  },
  {
    slug: "greece",
    destinationNumber: 6,
    name: "Greece",
    flagEmoji: "🇬🇷",
    route: "Aegean Route",
    tagline: "Islands, olives & ouzo",
    detail: {
      greetingLocal: "Καλώς ήρθατε στην Ελλάδα!",
      greetingRomanized: "Kalós írthate stin Elláda!",
      greetingEnglish: "Welcome to Greece!",
      cultureFacts: [
        "Greece has over 6,000 islands, though fewer than 230 are inhabited.",
        "The olive tree has been cultivated in Greece for more than 6,000 years.",
        "Ancient Greek philosophers gave the Western world democracy, geometry and theatre.",
        "A traditional Greek meze table can stretch on for hours — food is meant to be shared slowly.",
      ],
      food: {
        vegBurger: {
          name: "Spanakopita Veg Burger",
          description: "Spinach and feta patty, dill, tzatziki, tomato.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Contains dairy"],
        },
        chickenBurger: {
          name: "Souvlaki Burger",
          description: "Lemon-oregano marinated chicken, tzatziki, onion, tomato.",
          priceType: "chickenBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        beefBurger: {
          name: "Aegean Beef Burger",
          description: "Beef patty, feta, olive tapenade, cucumber, yoghurt sauce.",
          priceType: "beefBurger",
          tags: ["Contains dairy"],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "Feta & Oregano Fries",
            description: "Crumbled feta, oregano, olive oil drizzle.",
            priceType: "loadedFries",
            tags: ["Vegetarian", "Contains dairy"],
          },
          {
            name: "Greek Salad Fries",
            description: "Tomato, cucumber, olives and feta piled over fries.",
            priceType: "loadedFries",
            tags: ["Vegetarian", "Contains dairy"],
          },
        ],
        salad: {
          name: "Horiatiki Greek Salad",
          description: "Tomato, cucumber, green pepper, onion, olives, feta, olive oil.",
          priceType: "salad",
          tags: ["Vegetarian", "Contains dairy"],
        },
        coldDrink: {
          name: "Honey Lemon Frappé",
          description: "Chilled frothy coffee blended with honey and lemon notes.",
          priceType: "coldCountryDrink",
          tags: ["Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Ouzo Glass",
          description: "Classic anise spirit, served with ice, turns cloudy white.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Mountain Tea",
          description: "Herbal Greek mountain tea with honey and lemon.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly"],
        },
        desserts: [
          {
            name: "Loukoumades Honey Clouds",
            description: "Warm honey doughnuts dusted with cinnamon and walnuts.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
          {
            name: "Galaktoboureko Slice",
            description: "Custard-filled filo pastry soaked in citrus syrup.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains dairy"],
          },
        ],
      },
      playlist: {
        name: "Island Hopping",
        tracks: [
          { title: "Autí Í Nýchta Ménei", artist: "Anna Vissi" },
          { title: "Zorba's Dance", artist: "Mikis Theodorakis" },
          { title: "Kalinychta", artist: "Giorgos Mazonakis" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "Yassou!", meaning: "Hi! — a friendly everyday Greek greeting." },
        quiz: {
          question: "About how many islands does Greece have?",
          options: ["60", "600", "6,000", "16"],
          answerIndex: 2,
        },
        kidsActivity: "Color the Greek flag's blue and white stripes and its corner cross.",
      },
    },
  },
  {
    slug: "italy",
    destinationNumber: 7,
    name: "Italy",
    flagEmoji: "🇮🇹",
    route: "Iberian & Western Route",
    tagline: "Piazzas, basil & espresso",
    detail: {
      greetingLocal: "Benvenuti in Italia!",
      greetingRomanized: "Benvenuti in Italia!",
      greetingEnglish: "Welcome to Italy!",
      cultureFacts: [
        "Italy has more UNESCO World Heritage Sites than any other country on Earth.",
        "Espresso culture runs so deep that many Italians drink it standing at the bar in seconds flat.",
        "Pizza Margherita was named after Queen Margherita, its colors matching the Italian flag.",
        "Italy is home to over 3,000 native grape varieties, more than any other wine-producing country.",
      ],
      food: {
        vegBurger: {
          name: "Caprese Burger",
          description: "Fresh mozzarella, tomato, basil, balsamic glaze, herb bun.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Contains dairy"],
        },
        chickenBurger: {
          name: "Pesto Chicken Burger",
          description: "Grilled chicken, basil pesto, sun-dried tomato, mozzarella.",
          priceType: "chickenBurger",
          tags: ["Contains dairy", "Contains nuts"],
        },
        beefBurger: {
          name: "Bistecca Burger",
          description: "Beef patty, aged provolone, rocket, truffle mayo.",
          priceType: "beefBurger",
          tags: ["Contains dairy"],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "Truffle & Parm Fries",
            description: "Shaved parmesan, truffle oil, chopped parsley.",
            priceType: "loadedFries",
            tags: ["Vegetarian", "Contains dairy"],
          },
          {
            name: "Arrabbiata Fries",
            description: "Spicy tomato arrabbiata sauce, chilli flakes, basil.",
            priceType: "loadedFries",
            tags: ["Vegan-friendly", "Vegetarian"],
          },
        ],
        salad: {
          name: "Caprese Salad",
          description: "Tomato, buffalo mozzarella, basil, olive oil, balsamic.",
          priceType: "salad",
          tags: ["Vegetarian", "Contains dairy"],
        },
        coldDrink: {
          name: "Blood Orange Soda",
          description: "Sparkling blood orange soda over ice.",
          priceType: "coldCountryDrink",
          tags: ["Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Aperol Spritz",
          description: "Aperol, prosecco and soda, garnished with orange.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Espresso",
          description: "Classic short, strong Italian espresso shot.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly"],
        },
        desserts: [
          {
            name: "Tiramisu",
            description: "Espresso-soaked ladyfingers, mascarpone cream, cocoa.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains dairy"],
          },
          {
            name: "Affogato",
            description: "Vanilla gelato drowned in a hot shot of espresso.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains dairy"],
          },
        ],
      },
      playlist: {
        name: "Piazza Evenings",
        tracks: [
          { title: "Con Te Partirò", artist: "Andrea Bocelli" },
          { title: "Volare", artist: "Domenico Modugno" },
          { title: "Adesso Tu", artist: "Eros Ramazzotti" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "Ciao!", meaning: "Hi/bye! — the all-purpose Italian greeting." },
        quiz: {
          question: "Pizza Margherita's colors match which flag?",
          options: ["France", "Italy", "Spain", "Greece"],
          answerIndex: 1,
        },
        kidsActivity: "Color the Italian flag: green, white and red vertical stripes.",
      },
    },
  },
  {
    slug: "spain",
    destinationNumber: 8,
    name: "Spain",
    flagEmoji: "🇪🇸",
    route: "Iberian & Western Route",
    tagline: "Tapas, sun & sangria",
    detail: {
      greetingLocal: "¡Bienvenidos a España!",
      greetingRomanized: "¡Bienvenidos a España!",
      greetingEnglish: "Welcome to Spain!",
      cultureFacts: [
        "Spain is the world's largest producer of olive oil, growing over 260 million olive trees.",
        "The tradition of tapas is said to have started as a small plate used to cover a drink.",
        "Spanish siesta culture reflects the Mediterranean rhythm of long lunches and later dinners.",
        "Flamenco, born in Andalusia, blends singing, guitar and rhythmic hand-clapping into one art form.",
      ],
      food: {
        vegBurger: {
          name: "Pisto Veg Burger",
          description: "Spanish ratatouille-style pisto, manchego, roasted pepper aioli.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Contains dairy"],
        },
        chickenBurger: {
          name: "Bravas Chicken Burger",
          description: "Crispy chicken, patatas bravas sauce, garlic aioli.",
          priceType: "chickenBurger",
          tags: ["No pork"],
        },
        beefBurger: {
          name: "Iberian Beef Burger",
          description: "Beef patty, jamón crisps, manchego, roasted pepper.",
          priceType: "beefBurger",
          tags: ["Contains dairy"],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "Patatas Bravas Fries",
            description: "Spiced tomato bravas sauce, garlic aioli.",
            priceType: "loadedFries",
            tags: ["Vegetarian"],
          },
          {
            name: "Jamón & Manchego Fries",
            description: "Crisp jamón, shaved manchego, olive oil.",
            priceType: "loadedFries",
            tags: ["Contains dairy"],
          },
        ],
        salad: {
          name: "Side Salad + Gazpacho Shot",
          description: "Fresh side salad served with a chilled gazpacho shot.",
          priceType: "salad",
          tags: ["Vegan-friendly", "Vegetarian"],
        },
        coldDrink: {
          name: "Granizado Lemon",
          description: "Icy lemon slush, Spanish summer style.",
          priceType: "coldCountryDrink",
          tags: ["Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Sangria",
          description: "Red wine, chopped fruit and a splash of brandy.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Thick Hot Chocolate",
          description: "Rich, thick Spanish-style hot chocolate — pairs with churros.",
          priceType: "hotDrink",
          tags: ["Vegetarian", "Contains dairy"],
        },
        desserts: [
          {
            name: "Crema Catalana",
            description: "Citrus-spiced custard with a brûléed sugar top.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains dairy"],
          },
          {
            name: "Churros & Chocolate",
            description: "Fried churros with thick hot chocolate for dipping.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains dairy"],
          },
        ],
      },
      playlist: {
        name: "Tapas & Sunset",
        tracks: [
          { title: "Bamboléo", artist: "Gipsy Kings" },
          { title: "Clandestino", artist: "Manu Chao" },
          { title: "Malamente", artist: "Rosalía" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "¡Hola!", meaning: "Hi! — the everyday Spanish greeting." },
        quiz: {
          question: "What is Spain the world's largest producer of?",
          options: ["Olive oil", "Coffee", "Rice", "Cocoa"],
          answerIndex: 0,
        },
        kidsActivity: "Color the Spanish flag: red-yellow-red horizontal stripes.",
      },
    },
  },
  {
    slug: "france",
    destinationNumber: 9,
    name: "France",
    flagEmoji: "🇫🇷",
    route: "Iberian & Western Route",
    tagline: "Bistros, herbs & Riviera",
    detail: {
      greetingLocal: "Bienvenue en France !",
      greetingRomanized: "Bienvenue en France !",
      greetingEnglish: "Welcome to France!",
      cultureFacts: [
        "France is the world's most visited country, drawing tens of millions of travellers every year.",
        "The French Riviera has inspired painters from Matisse to Picasso with its Mediterranean light.",
        "A proper café crème is meant to be sipped slowly — coffee culture here is unhurried.",
        "France has over 1,000 varieties of cheese, roughly one for every day of the year (and then some).",
      ],
      food: {
        vegBurger: {
          name: "Ratatouille Burger",
          description: "Stewed ratatouille vegetables, goat cheese, herb aioli.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Contains dairy"],
        },
        chickenBurger: {
          name: "Herb Chicken Burger",
          description: "Herbes de Provence chicken, dijon mayo, caramelized onion.",
          priceType: "chickenBurger",
          tags: ["No pork"],
        },
        beefBurger: {
          name: "Bistro Burger",
          description: "Beef patty, brie, caramelized onion, dijon mustard.",
          priceType: "beefBurger",
          tags: ["Contains dairy"],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "Ratatouille Fries",
            description: "Stewed pepper, courgette and tomato over fries.",
            priceType: "loadedFries",
            tags: ["Vegan-friendly", "Vegetarian"],
          },
          {
            name: "Dijon Fries",
            description: "Dijon mustard aioli drizzle, chopped chives.",
            priceType: "loadedFries",
            tags: ["Vegetarian"],
          },
        ],
        salad: {
          name: "Niçoise-Inspired Salad",
          description: "Green beans, egg, tomato, olives, herb vinaigrette.",
          priceType: "salad",
          tags: ["Vegetarian"],
        },
        coldDrink: {
          name: "Sparkling Citrus Lemonade",
          description: "House-made sparkling lemonade with citrus zest.",
          priceType: "coldCountryDrink",
          tags: ["Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Pastis",
          description: "Anise-flavoured pastis, served with water and ice.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Café Crème",
          description: "Espresso lengthened with steamed milk.",
          priceType: "hotDrink",
          tags: ["Vegetarian", "Contains dairy"],
        },
        desserts: [
          {
            name: "Tarte Tatin",
            description: "Caramelized upside-down apple tart.",
            priceType: "dessert",
            tags: ["Vegetarian"],
          },
          {
            name: "Crème Brûlée Cup",
            description: "Silky vanilla custard with a brûléed sugar crust.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains dairy"],
          },
        ],
      },
      playlist: {
        name: "Riviera Bistro",
        tracks: [
          { title: "La Vie en Rose", artist: "Édith Piaf" },
          { title: "Alors on Danse", artist: "Stromae" },
          { title: "Formidable", artist: "Stromae" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "Bonjour !", meaning: "Hello! — a classic French daytime greeting." },
        quiz: {
          question: "About how many varieties of cheese does France produce?",
          options: ["About 50", "Over 1,000", "Exactly 12", "About 200"],
          answerIndex: 1,
        },
        kidsActivity: "Color the French flag: blue, white and red vertical stripes.",
      },
    },
  },
  {
    slug: "monaco",
    destinationNumber: 10,
    name: "Monaco",
    flagEmoji: "🇲🇨",
    route: "Iberian & Western Route",
    tagline: "Riviera glam & citrus",
    detail: {
      greetingLocal: "Benvegnùa in Munegu!",
      greetingRomanized: "Benvegnùa in Munegu!",
      greetingEnglish: "Welcome to Monaco! (Monégasque)",
      cultureFacts: [
        "Monaco is the world's second-smallest country, yet packs a Grand Prix through its streets every year.",
        "Monégasque, the local language, blends French and Ligurian Italian influences.",
        "The Prince's Palace has overlooked the harbour since the 13th century.",
        "Monaco's citrus and olive groves cling to the same steep terraces as its famous casino district.",
      ],
      food: {
        vegBurger: {
          name: "Riviera Veg Burger",
          description: "Grilled courgette, goat cheese, sun-dried tomato tapenade.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Contains dairy"],
        },
        chickenBurger: {
          name: "Herb Lemon Chicken Burger",
          description: "Lemon-herb chicken, arugula, citrus aioli.",
          priceType: "chickenBurger",
          tags: ["No pork"],
        },
        beefBurger: {
          name: "Luxury Beef Burger",
          description: "Beef patty, truffle mayo, aged cheese, caramelized shallot.",
          priceType: "beefBurger",
          tags: ["Contains dairy"],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "Riviera Fries",
            description: "Herb oil, sea salt, shaved parmesan.",
            priceType: "loadedFries",
            tags: ["Vegetarian", "Contains dairy"],
          },
          {
            name: "Cheese & Onion Fries",
            description: "Melted cheese, caramelized onion.",
            priceType: "loadedFries",
            tags: ["Vegetarian", "Contains dairy"],
          },
        ],
        salad: {
          name: "Mediterranean Riviera Salad",
          description: "Mixed leaves, citrus segments, olives, shaved fennel.",
          priceType: "salad",
          tags: ["Vegan-friendly", "Vegetarian"],
        },
        coldDrink: {
          name: "Citrus Spritz",
          description: "Sparkling citrus soda over ice, non-alcoholic.",
          priceType: "coldCountryDrink",
          tags: ["Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Rosé Spritz",
          description: "Chilled rosé wine lengthened with soda.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Espresso",
          description: "Classic short, strong espresso, as in neighboring Italy and France.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly"],
          suggested: true,
        },
        desserts: [
          {
            name: "Riviera Fruit Tart",
            description: "Buttery tart shell, pastry cream, glazed seasonal fruit.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains dairy"],
          },
          {
            name: "Chocolate Mousse",
            description: "Silky dark chocolate mousse.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains dairy"],
          },
        ],
      },
      playlist: {
        name: "Monte Carlo Evenings",
        tracks: [
          { title: "La Mer", artist: "Charles Trenet" },
          { title: "Riviera Lounge Mix", artist: "Various Artists" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "Bonjour !", meaning: "Hello! — French is Monaco's everyday language." },
        quiz: {
          question: "What is Monaco famous for hosting through its streets every year?",
          options: ["A marathon", "A Grand Prix", "A boat race", "A film festival"],
          answerIndex: 1,
        },
        kidsActivity: "Color the Monaco flag: red on top, white on the bottom.",
      },
    },
  },
  {
    slug: "malta",
    destinationNumber: 11,
    name: "Malta",
    flagEmoji: "🇲🇹",
    route: "Iberian & Western Route",
    tagline: "Harbours, capers & honey",
    detail: {
      greetingLocal: "Merħba f'Malta!",
      greetingRomanized: "Merħba f'Malta!",
      greetingEnglish: "Welcome to Malta!",
      cultureFacts: [
        "Malta's capital Valletta is one of the smallest capital cities in Europe, and entirely a UNESCO site.",
        "The Maltese language is the only Semitic language written in the Latin alphabet.",
        "Malta's colourful fishing boats, called luzzus, often have a painted eye on the bow for protection.",
        "Honey rings (qagħaq tal-għasel) are a beloved Maltese treat dating back generations.",
      ],
      food: {
        vegBurger: {
          name: "Caponata Veg Burger",
          description: "Sweet-sour caponata vegetables, ricotta, herb bun.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Contains dairy"],
        },
        chickenBurger: {
          name: "Mediterranean Chicken Burger",
          description: "Herb-marinated chicken, sun-dried tomato, caper mayo.",
          priceType: "chickenBurger",
          tags: ["No pork"],
        },
        beefBurger: {
          name: "Coastal Beef Burger",
          description: "Beef patty, olives, capers, sun-dried tomato aioli.",
          priceType: "beefBurger",
          tags: [],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "Caponata Fries",
            description: "Sweet-sour caponata vegetables spooned over fries.",
            priceType: "loadedFries",
            tags: ["Vegetarian"],
          },
          {
            name: "Herb & Olive Fries",
            description: "Chopped olives, herbs, olive oil drizzle.",
            priceType: "loadedFries",
            tags: ["Vegan-friendly", "Vegetarian"],
          },
        ],
        salad: {
          name: "Tomato, Capers, Olives & Onion Salad",
          description: "Ripe tomato, capers, olives, red onion, olive oil.",
          priceType: "salad",
          tags: ["Vegan-friendly", "Vegetarian"],
        },
        coldDrink: {
          name: "Bitter Orange Soda",
          description: "Kinnie-style bitter orange and herb soda over ice.",
          priceType: "coldCountryDrink",
          tags: ["Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Maltese Wine / Beer",
          description: "A glass of local Maltese wine or beer.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Maltese-Style Tea",
          description: "A comforting cup of tea, Maltese café style.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly"],
          suggested: true,
        },
        desserts: [
          {
            name: "Honey Rings",
            description: "Qagħaq tal-għasel — pastry rings filled with treacle and spice.",
            priceType: "dessert",
            tags: ["Vegetarian"],
          },
          {
            name: "Ricotta Pastry Bites",
            description: "Flaky pastry filled with sweetened ricotta.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains dairy"],
          },
        ],
      },
      playlist: {
        name: "Valletta Harbour",
        tracks: [
          { title: "Malta Ghannielli (Traditional Għana)", artist: "Traditional" },
          { title: "Mediterranean Harbour Lounge", artist: "Various Artists" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "Bonġu!", meaning: "Good morning! — a friendly Maltese greeting." },
        quiz: {
          question: "What is Malta's colourful traditional fishing boat called?",
          options: ["Luzzu", "Gondola", "Dhow", "Junk"],
          answerIndex: 0,
        },
        kidsActivity: "Draw an eye on your paper boat, just like Malta's luzzu fishing boats.",
      },
    },
  },
  {
    slug: "slovenia",
    destinationNumber: 12,
    name: "Slovenia",
    flagEmoji: "🇸🇮",
    route: "Adriatic Route",
    tagline: "Alps, herbs & honey",
    detail: {
      greetingLocal: "Dobrodošli v Sloveniji!",
      greetingRomanized: "Dobrodošli v Sloveniji!",
      greetingEnglish: "Welcome to Slovenia!",
      cultureFacts: [
        "Slovenia is one of the most forested countries in Europe, covered nearly 60% by trees.",
        "Beekeeping is a national tradition — Slovenia has more beekeepers per capita than almost anywhere.",
        "Lake Bled's tiny island church is reached only by traditional wooden gondola boats.",
        "Slovenia touches the Alps, the Mediterranean and the Pannonian plain all at once.",
      ],
      food: {
        vegBurger: {
          name: "Grilled Veg & Cheese Burger",
          description: "Grilled seasonal vegetables, melted alpine cheese, herb aioli.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Contains dairy"],
        },
        chickenBurger: {
          name: "Paprika Herb Chicken Burger",
          description: "Paprika-marinated chicken, herbs, creamy sauce.",
          priceType: "chickenBurger",
          tags: ["No pork"],
        },
        beefBurger: {
          name: "Balkan Grill Burger",
          description: "Char-grilled beef patty, roasted pepper, ajvar relish.",
          priceType: "beefBurger",
          tags: [],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "Ajvar Fries",
            description: "Roasted red pepper ajvar relish spooned over fries.",
            priceType: "loadedFries",
            tags: ["Vegan-friendly", "Vegetarian"],
          },
          {
            name: "Herb & Garlic Fries",
            description: "Fresh herbs, roasted garlic, olive oil.",
            priceType: "loadedFries",
            tags: ["Vegan-friendly", "Vegetarian"],
          },
        ],
        salad: {
          name: "Bean & Herb Salad",
          description: "Slow-cooked beans, fresh herbs, light vinaigrette.",
          priceType: "salad",
          tags: ["Vegan-friendly", "Vegetarian"],
        },
        coldDrink: {
          name: "Elderflower Drink",
          description: "Light, floral elderflower cordial over ice.",
          priceType: "coldCountryDrink",
          tags: ["Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Local Wine Spritz",
          description: "Slovenian white wine lengthened with sparkling water.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Herbal Mountain Tea",
          description: "Alpine herbal tea blend.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly"],
          suggested: true,
        },
        desserts: [
          {
            name: "Walnut Strudel Slice",
            description: "Rolled pastry filled with sweetened walnut filling.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
          {
            name: "Honey Nut Cake",
            description: "Moist honey cake studded with toasted nuts.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
        ],
      },
      playlist: {
        name: "Alpine Lake Mornings",
        tracks: [
          { title: "Slovenian Folk Instrumentals", artist: "Traditional" },
          { title: "Bled Lake Ambience", artist: "Various Artists" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "Živjo!", meaning: "Hi! — a casual Slovenian greeting." },
        quiz: {
          question: "How do visitors traditionally reach the island church on Lake Bled?",
          options: ["By bridge", "By wooden gondola boat", "By cable car", "By swimming"],
          answerIndex: 1,
        },
        kidsActivity: "Color the Slovenian flag: white, blue and red stripes with the coat of arms.",
      },
    },
  },
  {
    slug: "croatia",
    destinationNumber: 13,
    name: "Croatia",
    flagEmoji: "🇭🇷",
    route: "Adriatic Route",
    tagline: "Adriatic coast & ajvar",
    detail: {
      greetingLocal: "Dobrodošli u Hrvatsku!",
      greetingRomanized: "Dobrodošli u Hrvatsku!",
      greetingEnglish: "Welcome to Croatia!",
      cultureFacts: [
        "Croatia has over a thousand islands scattered along its Adriatic coastline.",
        "The necktie, as we know it today, traces its origin to 17th-century Croatian soldiers.",
        "Dubrovnik's ancient city walls have guarded the Adriatic for over a thousand years.",
        "Croatian cuisine blends Mediterranean coastal flavors with hearty inland, Central European cooking.",
      ],
      food: {
        vegBurger: {
          name: "Adriatic Veg Burger",
          description: "Grilled vegetables, soft cheese, sun-dried tomato spread.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Contains dairy"],
        },
        chickenBurger: {
          name: "Dalmatian Herb Chicken Burger",
          description: "Herb-crusted chicken, olive oil aioli, arugula.",
          priceType: "chickenBurger",
          tags: ["No pork"],
        },
        beefBurger: {
          name: "Coastal Beef Burger",
          description: "Beef patty, ajvar relish, aged cheese.",
          priceType: "beefBurger",
          tags: ["Contains dairy"],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "Ajvar Fries",
            description: "Roasted red pepper ajvar relish over crisp fries.",
            priceType: "loadedFries",
            tags: ["Vegan-friendly", "Vegetarian"],
          },
          {
            name: "Cheese & Herb Fries",
            description: "Melted local cheese, chopped herbs.",
            priceType: "loadedFries",
            tags: ["Vegetarian", "Contains dairy"],
          },
        ],
        salad: {
          name: "Tomato-Onion-Olive Salad",
          description: "Ripe tomato, red onion, olives, olive oil, oregano.",
          priceType: "salad",
          tags: ["Vegan-friendly", "Vegetarian"],
        },
        coldDrink: {
          name: "Citrus Soda",
          description: "Sparkling citrus soda over ice.",
          priceType: "coldCountryDrink",
          tags: ["Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Local Wine Spritz",
          description: "Croatian white wine lengthened with soda, called gemišt.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Espresso",
          description: "Strong Adriatic-style coffee culture, served short.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly"],
          suggested: true,
        },
        desserts: [
          {
            name: "Walnut Pudding Cake",
            description: "Moist cake layered with sweet walnut filling.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
          {
            name: "Citrus Semolina Slice",
            description: "Semolina cake soaked in citrus syrup.",
            priceType: "dessert",
            tags: ["Vegetarian"],
          },
        ],
      },
      playlist: {
        name: "Dalmatian Coast Drive",
        tracks: [
          { title: "Klapa Coastal Harmonies", artist: "Traditional Klapa" },
          { title: "Dubrovnik Sunset Lounge", artist: "Various Artists" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "Bok!", meaning: "Hi! — a cheerful, casual Croatian greeting." },
        quiz: {
          question: "Which everyday accessory traces its origin to 17th-century Croatian soldiers?",
          options: ["The necktie", "The umbrella", "The wristwatch", "The beret"],
          answerIndex: 0,
        },
        kidsActivity: "Color the Croatian checkerboard crest — red and white squares.",
      },
    },
  },
  {
    slug: "bosnia",
    destinationNumber: 14,
    name: "Bosnia & Herzegovina",
    flagEmoji: "🇧🇦",
    route: "Adriatic Route",
    tagline: "Grills, cezve & rakija",
    detail: {
      greetingLocal: "Dobrodošli u Bosnu i Hercegovinu!",
      greetingRomanized: "Dobrodošli u Bosnu i Hercegovinu!",
      greetingEnglish: "Welcome to Bosnia & Herzegovina!",
      cultureFacts: [
        "Sarajevo's Baščaršija old bazaar has been a trading hub since the 15th century.",
        "Bosnian coffee is brewed in a copper cezve and served with sugar cubes and Turkish delight.",
        "Bosnia and Herzegovina sits at a crossroads of Ottoman, Central European and Mediterranean influence.",
        "Ćevapi — small grilled beef sausages — are a beloved street food often eaten by hand in flatbread.",
      ],
      food: {
        vegBurger: {
          name: "Burek Veg Burger",
          description: "Spiced spinach-and-cheese burek filling, flaky pastry crumble, herb sauce.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Contains dairy"],
        },
        chickenBurger: {
          name: "Kajmak Chicken Burger",
          description: "Grilled chicken, creamy kajmak, roasted pepper relish.",
          priceType: "chickenBurger",
          tags: ["No pork", "Contains dairy"],
        },
        beefBurger: {
          name: "Ćevapi Burger",
          description: "Minced beef ćevapi-style patty, onion, ajvar, flatbread bun.",
          priceType: "beefBurger",
          tags: [],
        },
        quickBiteHero: "beef",
        loadedFries: [
          {
            name: "Ćevapi Fries",
            description: "Chopped ćevapi, onion and ajvar over fries.",
            priceType: "loadedFries",
            tags: [],
          },
          {
            name: "Paprika Fries",
            description: "Smoked paprika seasoning, herb aioli.",
            priceType: "loadedFries",
            tags: ["Vegetarian"],
          },
        ],
        salad: {
          name: "Shopska-Style Salad",
          description: "Tomato, cucumber, onion, grated white cheese.",
          priceType: "salad",
          tags: ["Vegetarian", "Contains dairy"],
        },
        coldDrink: {
          name: "Yoghurt Drink",
          description: "Chilled, lightly salted yoghurt drink.",
          priceType: "coldCountryDrink",
          tags: ["Vegetarian", "Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Rakija",
          description: "Traditional Balkan fruit brandy, served neat.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Bosnian Coffee",
          description: "Cezve-brewed coffee served with sugar cubes.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly"],
          suggested: true,
        },
        desserts: [
          {
            name: "Bosnia Apple Dream",
            description: "Spiced apple filling in delicate layered pastry.",
            priceType: "dessert",
            tags: ["Vegetarian"],
          },
          {
            name: "Honey Walnut Squares",
            description: "Layered pastry squares soaked in honey syrup.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
        ],
      },
      playlist: {
        name: "Baščaršija Evenings",
        tracks: [
          { title: "Sevdalinka Classics", artist: "Traditional Sevdah" },
          { title: "Sarajevo Old Town Ambience", artist: "Various Artists" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "Zdravo!", meaning: "Hi! — a friendly, everyday greeting." },
        quiz: {
          question: "What is the traditional copper pot used to brew Bosnian coffee called?",
          options: ["Cezve", "Samovar", "Ibrik-teapot", "Kettle"],
          answerIndex: 0,
        },
        kidsActivity: "Color the Bosnian flag: blue field, yellow triangle, white stars.",
      },
    },
  },
  {
    slug: "montenegro",
    destinationNumber: 15,
    name: "Montenegro",
    flagEmoji: "🇲🇪",
    route: "Adriatic Route",
    tagline: "Bays, herbs & honey puffs",
    detail: {
      greetingLocal: "Dobrodošli u Crnu Goru!",
      greetingRomanized: "Dobrodošli u Crnu Goru!",
      greetingEnglish: "Welcome to Montenegro!",
      cultureFacts: [
        "Montenegro's name literally translates to \"Black Mountain.\"",
        "The Bay of Kotor is often called Europe's southernmost fjord, ringed by dramatic peaks.",
        "Montenegro is one of the most mountainous countries in Europe relative to its small size.",
        "Coastal Montenegrin cuisine blends Adriatic seafood traditions with hearty mountain cooking.",
      ],
      food: {
        vegBurger: {
          name: "Coastal Veg Burger",
          description: "Grilled vegetables, soft cheese, herb spread.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Contains dairy"],
        },
        chickenBurger: {
          name: "Coastal Herb Chicken Burger",
          description: "Herb-marinated chicken, garlic aioli, tomato.",
          priceType: "chickenBurger",
          tags: ["No pork"],
        },
        beefBurger: {
          name: "Balkan Grill Beef Burger",
          description: "Char-grilled beef patty, roasted pepper, onion relish.",
          priceType: "beefBurger",
          tags: [],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "Herb & Garlic Fries",
            description: "Fresh herbs, roasted garlic, olive oil.",
            priceType: "loadedFries",
            tags: ["Vegan-friendly", "Vegetarian"],
          },
          {
            name: "Ajvar Fries",
            description: "Roasted red pepper ajvar relish over fries.",
            priceType: "loadedFries",
            tags: ["Vegan-friendly", "Vegetarian"],
          },
        ],
        salad: {
          name: "Mixed Tomato-Cucumber-Onion-Cheese Salad",
          description: "Tomato, cucumber, onion, grated white cheese.",
          priceType: "salad",
          tags: ["Vegetarian", "Contains dairy"],
        },
        coldDrink: {
          name: "Lemonade",
          description: "Fresh-squeezed house lemonade over ice.",
          priceType: "coldCountryDrink",
          tags: ["Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Local Wine",
          description: "A glass of Montenegrin regional wine.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Montenegrin Espresso",
          description: "Strong, short coffee, Adriatic café style.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly"],
          suggested: true,
        },
        desserts: [
          {
            name: "Priganice Honey Puffs",
            description: "Warm fried dough puffs drizzled with honey.",
            priceType: "dessert",
            tags: ["Vegetarian"],
          },
          {
            name: "Walnut Layer Cake",
            description: "Layered cake with sweet walnut filling.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
        ],
      },
      playlist: {
        name: "Bay of Kotor Sunset",
        tracks: [
          { title: "Montenegrin Folk Ballads", artist: "Traditional" },
          { title: "Adriatic Bay Ambience", artist: "Various Artists" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "Zdravo!", meaning: "Hi! — a warm, everyday greeting." },
        quiz: {
          question: "What does the name \"Montenegro\" translate to?",
          options: ["Blue Sea", "Black Mountain", "Golden Bay", "White Cliff"],
          answerIndex: 1,
        },
        kidsActivity: "Color the Bay of Kotor's mountains and boats on your placemat.",
      },
    },
  },
  {
    slug: "albania",
    destinationNumber: 16,
    name: "Albania",
    flagEmoji: "🇦🇱",
    route: "Adriatic Route",
    tagline: "Coastal cheese & raki",
    detail: {
      greetingLocal: "Mirë se vini në Shqipëri!",
      greetingRomanized: "Mirë se vini në Shqipëri!",
      greetingEnglish: "Welcome to Albania!",
      cultureFacts: [
        "Albanians call their own country Shqipëria, meaning \"Land of the Eagles.\"",
        "The Albanian Riviera's beaches rival the Greek islands just across the water.",
        "Nodding your head in Albania can traditionally mean \"no,\" and shaking it can mean \"yes.\"",
        "Albanian cuisine layers Mediterranean, Ottoman and Balkan influences into one table.",
      ],
      food: {
        vegBurger: {
          name: "Pepper & White Cheese Burger",
          description: "Roasted pepper, crumbled white cheese, herb spread.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Contains dairy"],
        },
        chickenBurger: {
          name: "Yoghurt Herb Chicken Burger",
          description: "Yoghurt-marinated chicken, fresh herbs, garlic sauce.",
          priceType: "chickenBurger",
          tags: ["No pork"],
        },
        beefBurger: {
          name: "Coastal Beef Burger",
          description: "Beef patty, roasted pepper relish, white cheese.",
          priceType: "beefBurger",
          tags: ["Contains dairy"],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "White Cheese Fries",
            description: "Crumbled Albanian white cheese, herb oil.",
            priceType: "loadedFries",
            tags: ["Vegetarian", "Contains dairy"],
          },
          {
            name: "Spicy Pepper Fries",
            description: "Roasted pepper relish with a chilli kick.",
            priceType: "loadedFries",
            tags: ["Vegan-friendly", "Vegetarian"],
          },
        ],
        salad: {
          name: "Tomato-Cucumber-Onion Cheese Salad",
          description: "Tomato, cucumber, onion, crumbled white cheese.",
          priceType: "salad",
          tags: ["Vegetarian", "Contains dairy"],
        },
        coldDrink: {
          name: "Yoghurt Drink",
          description: "Chilled, lightly salted yoghurt drink.",
          priceType: "coldCountryDrink",
          tags: ["Vegetarian", "Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Raki",
          description: "Albanian grape or fruit brandy, served neat.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Albanian Coffee",
          description: "Strong Balkan-style coffee, brewed slowly.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly"],
          suggested: true,
        },
        desserts: [
          {
            name: "Revani",
            description: "Sweet semolina cake soaked in syrup.",
            priceType: "dessert",
            tags: ["Vegetarian"],
          },
          {
            name: "Almond Citrus Cookies",
            description: "Delicate almond cookies with citrus zest.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
        ],
      },
      playlist: {
        name: "Riviera Road Trip",
        tracks: [
          { title: "Albanian Folk Iso-Polyphony", artist: "Traditional" },
          { title: "Albanian Riviera Sunset Mix", artist: "Various Artists" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "Tungjatjeta!", meaning: "Hello! — a classic formal Albanian greeting." },
        quiz: {
          question: "What does \"Shqipëria,\" Albania's own name for itself, mean?",
          options: ["Land of the Eagles", "Land of the Sun", "Land of the Sea", "Land of the Mountains"],
          answerIndex: 0,
        },
        kidsActivity: "Color the double-headed eagle from the Albanian flag.",
      },
    },
  },
  {
    slug: "egypt",
    destinationNumber: 17,
    name: "Egypt",
    flagEmoji: "🇪🇬",
    route: "North African Route",
    tagline: "Nile spice & dukka",
    detail: {
      greetingLocal: "أهلاً بيكم في مصر!",
      greetingRomanized: "Ahlan beekom fi Masr!",
      greetingEnglish: "Welcome to Egypt!",
      cultureFacts: [
        "The Great Pyramid of Giza was the tallest man-made structure on Earth for almost 3,800 years.",
        "The Nile River has shaped Egyptian life, farming and trade for thousands of years.",
        "Dukka, a nutty-spice blend, is traditionally eaten by dipping bread in oil and then the mix.",
        "Cairo's markets have traded spices, textiles and gold along Nile trade routes for centuries.",
      ],
      food: {
        vegBurger: {
          name: "Ta'ameya Veg Burger",
          description: "Egyptian fava-bean falafel, tahini, pickles, herb bun.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Vegan-friendly", "Halal-friendly"],
        },
        chickenBurger: {
          name: "Koshari Chicken Burger",
          description: "Spiced chicken, crispy onions, tangy tomato-vinegar sauce.",
          priceType: "chickenBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        beefBurger: {
          name: "Hawawshi Burger",
          description: "Spiced minced beef, peppers, onion, baladi-style bun.",
          priceType: "beefBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "Dukka Fries",
            description: "Nutty dukka spice blend, olive oil drizzle.",
            priceType: "loadedFries",
            tags: ["Vegan-friendly", "Vegetarian", "Contains nuts"],
          },
          {
            name: "Koshari Fries",
            description: "Crispy onions, tomato-vinegar sauce, chickpeas over fries.",
            priceType: "loadedFries",
            tags: ["Vegetarian"],
          },
        ],
        salad: {
          name: "Baladi Salad",
          description: "Finely chopped tomato, cucumber, onion, parsley, lemon.",
          priceType: "salad",
          tags: ["Vegan-friendly", "Vegetarian"],
        },
        coldDrink: {
          name: "Sugarcane / Hibiscus Drink",
          description: "Choice of fresh sugarcane juice or chilled hibiscus (karkade).",
          priceType: "coldCountryDrink",
          tags: ["Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Local Wine / Beer",
          description: "A glass of Egyptian wine or beer.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Egyptian Spiced Coffee",
          description: "Coffee gently spiced with cardamom, Egyptian style.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly"],
          suggested: true,
        },
        desserts: [
          {
            name: "Basbousa",
            description: "Sweet semolina cake soaked in syrup, topped with almonds.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
          {
            name: "Konafa Street Slice",
            description: "Crisp shredded pastry, sweet syrup, nut topping.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
        ],
      },
      playlist: {
        name: "Nile Nights",
        tracks: [
          { title: "Alf Leila W Leila", artist: "Umm Kulthum" },
          { title: "Habibi Ya Nour El Ain", artist: "Amr Diab" },
          { title: "Enta Omri", artist: "Umm Kulthum" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "Ahlan!", meaning: "Hi! — a warm, casual Egyptian greeting." },
        quiz: {
          question: "Which river has shaped Egyptian life for thousands of years?",
          options: ["The Nile", "The Amazon", "The Danube", "The Tigris"],
          answerIndex: 0,
        },
        kidsActivity: "Color a small pyramid and camel on your Egypt activity card.",
      },
    },
  },
  {
    slug: "libya",
    destinationNumber: 18,
    name: "Libya",
    flagEmoji: "🇱🇾",
    route: "North African Route",
    tagline: "Desert dates & harissa",
    detail: {
      greetingLocal: "أهلاً بكم في ليبيا!",
      greetingRomanized: "Ahlan bikom fi Libya!",
      greetingEnglish: "Welcome to Libya!",
      cultureFacts: [
        "Libya is home to five UNESCO World Heritage Sites, including the Roman ruins of Leptis Magna.",
        "The Sahara Desert covers over 90% of Libya's land area.",
        "Dates from Libyan oases have been traded across North Africa for centuries.",
        "Libyan cuisine blends Mediterranean coastal dishes with Saharan and Ottoman influences.",
      ],
      food: {
        vegBurger: {
          name: "Chickpea Veg Burger",
          description: "Spiced chickpea patty, tahini, pickled vegetables.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Vegan-friendly", "Halal-friendly"],
        },
        chickenBurger: {
          name: "Harissa Chicken Burger",
          description: "Harissa-spiced chicken, garlic yoghurt, herbs.",
          priceType: "chickenBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        beefBurger: {
          name: "Bazin Spice Beef Burger",
          description: "Beef patty seasoned with traditional bazin spices, onion relish.",
          priceType: "beefBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "Harissa Fries",
            description: "Spicy harissa sauce drizzled over crisp fries.",
            priceType: "loadedFries",
            tags: ["Vegan-friendly", "Vegetarian"],
          },
          {
            name: "Garlic & Herb Fries",
            description: "Roasted garlic, fresh herbs, olive oil.",
            priceType: "loadedFries",
            tags: ["Vegan-friendly", "Vegetarian"],
          },
        ],
        salad: {
          name: "Tomato-Onion Olive Salad",
          description: "Tomato, onion, olives, olive oil, lemon.",
          priceType: "salad",
          tags: ["Vegan-friendly", "Vegetarian"],
        },
        coldDrink: {
          name: "Date & Orange Drink",
          description: "Blended date and orange juice, lightly chilled.",
          priceType: "coldCountryDrink",
          tags: ["Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Wine / Beer",
          description: "A glass of regional wine or beer.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Libyan Spiced Tea",
          description: "Black tea gently spiced, often served sweet.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly"],
          suggested: true,
        },
        desserts: [
          {
            name: "Date Semolina Bars",
            description: "Semolina bars layered with sweet date paste.",
            priceType: "dessert",
            tags: ["Vegetarian"],
          },
          {
            name: "Citrus Honey Donuts",
            description: "Fried dough drizzled with honey and citrus zest.",
            priceType: "dessert",
            tags: ["Vegetarian"],
          },
        ],
      },
      playlist: {
        name: "Saharan Coastline",
        tracks: [
          { title: "Libyan Folk Traditions", artist: "Traditional" },
          { title: "Mediterranean Desert Winds", artist: "Various Artists" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "Ahlan!", meaning: "Hi! — a warm, casual welcome." },
        quiz: {
          question: "What desert covers over 90% of Libya's land area?",
          options: ["The Sahara", "The Gobi", "The Kalahari", "The Atacama"],
          answerIndex: 0,
        },
        kidsActivity: "Color a palm tree and desert dunes on your Libya activity card.",
      },
    },
  },
  {
    slug: "tunisia",
    destinationNumber: 19,
    name: "Tunisia",
    flagEmoji: "🇹🇳",
    route: "North African Route",
    tagline: "Harissa heat & mint tea",
    detail: {
      greetingLocal: "أهلاً وسهلاً بكم في تونس!",
      greetingRomanized: "Ahlan wa sahlan bikom fi Tounes!",
      greetingEnglish: "Welcome to Tunisia!",
      cultureFacts: [
        "Tunisia is the northernmost country in Africa and sits just across the sea from Sicily.",
        "The ancient city of Carthage, once a rival to Rome, was founded near modern-day Tunis.",
        "Harissa, Tunisia's fiery chilli paste, is a source of national pride and often has protected status.",
        "Tunisian mint tea is traditionally poured from a height to create a light foam on top.",
      ],
      food: {
        vegBurger: {
          name: "Harissa Veg Burger",
          description: "Roasted vegetables, harissa spread, soft cheese.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Contains dairy"],
        },
        chickenBurger: {
          name: "Mechouia Chicken Burger",
          description: "Smoky grilled pepper mechouia relish, spiced chicken.",
          priceType: "chickenBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        beefBurger: {
          name: "Merguez Burger",
          description: "Beef patty topped with spicy merguez sausage, harissa mayo.",
          priceType: "beefBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "Harissa & Egg Fries",
            description: "Harissa sauce, soft egg, herbs over crisp fries.",
            priceType: "loadedFries",
            tags: ["Vegetarian"],
          },
          {
            name: "Merguez Fries",
            description: "Sliced merguez sausage, harissa mayo drizzle.",
            priceType: "loadedFries",
            tags: ["Halal-friendly"],
          },
        ],
        salad: {
          name: "Mechouia Salad",
          description: "Smoky grilled pepper, tomato and garlic salad, olive oil.",
          priceType: "salad",
          tags: ["Vegan-friendly", "Vegetarian"],
        },
        coldDrink: {
          name: "Citronade",
          description: "Fresh lemon soda, lightly sweetened.",
          priceType: "coldCountryDrink",
          tags: ["Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Boukha Cocktail / Wine",
          description: "Boukha fig brandy cocktail or a glass of Tunisian wine.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Tunisian Mint Tea with Pine Nuts",
          description: "Sweet mint tea topped with toasted pine nuts.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly", "Contains nuts"],
          suggested: true,
        },
        desserts: [
          {
            name: "Makroudh Date Diamonds",
            description: "Semolina pastry diamonds filled with date paste.",
            priceType: "dessert",
            tags: ["Vegetarian"],
          },
          {
            name: "Bambalouni Beach Donuts",
            description: "Fried sugared donuts, Tunisian beach-stall style.",
            priceType: "dessert",
            tags: ["Vegetarian"],
          },
        ],
      },
      playlist: {
        name: "Carthage Coastline",
        tracks: [
          { title: "Ya Bhar", artist: "Saber Rebaï" },
          { title: "Tunisian Malouf Classics", artist: "Traditional Malouf" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "Ahla!", meaning: "Hi! — a friendly, everyday Tunisian greeting." },
        quiz: {
          question: "What ancient city, once a rival to Rome, was founded near modern Tunis?",
          options: ["Carthage", "Alexandria", "Athens", "Babylon"],
          answerIndex: 0,
        },
        kidsActivity: "Practice pouring pretend tea from a height to make foam, like a Tunisian tea master.",
      },
    },
  },
  {
    slug: "algeria",
    destinationNumber: 20,
    name: "Algeria",
    flagEmoji: "🇩🇿",
    route: "North African Route",
    tagline: "Couscous & orange blossom",
    detail: {
      greetingLocal: "مرحباً بكم في الجزائر!",
      greetingRomanized: "Marhaban bikom fi Al-Jaza'ir!",
      greetingEnglish: "Welcome to Algeria!",
      cultureFacts: [
        "Algeria is the largest country in Africa by land area.",
        "Couscous, a UNESCO-recognized culinary tradition, is a Friday family staple across Algeria.",
        "The Sahara covers most of southern Algeria, home to dramatic dunes and ancient rock art.",
        "Orange blossom water perfumes many Algerian pastries and even morning coffee.",
      ],
      food: {
        vegBurger: {
          name: "Couscous Veg Burger",
          description: "Spiced couscous-vegetable patty, herb yoghurt sauce.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Halal-friendly"],
        },
        chickenBurger: {
          name: "Ras el Hanout Chicken Burger",
          description: "Ras el hanout spiced chicken, caramelized onion, herb sauce.",
          priceType: "chickenBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        beefBurger: {
          name: "Merguez Beef Burger",
          description: "Beef patty topped with spicy merguez sausage.",
          priceType: "beefBurger",
          tags: ["Halal-friendly", "No pork"],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "Harira Fries",
            description: "Warm harira-spiced tomato sauce drizzled over fries.",
            priceType: "loadedFries",
            tags: ["Vegetarian"],
          },
          {
            name: "Spicy Fries",
            description: "Ras el hanout spice blend, chilli oil.",
            priceType: "loadedFries",
            tags: ["Vegan-friendly", "Vegetarian"],
          },
        ],
        salad: {
          name: "Carrot & Orange Cumin Salad",
          description: "Shredded carrot, orange segments, cumin, olive oil.",
          priceType: "salad",
          tags: ["Vegan-friendly", "Vegetarian"],
        },
        coldDrink: {
          name: "Orange & Mint Drink",
          description: "Fresh orange juice with a hint of mint.",
          priceType: "coldCountryDrink",
          tags: ["Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Wine",
          description: "A glass of Algerian regional wine.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Algerian Mint Tea",
          description: "Sweet green tea with fresh mint leaves.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly"],
          suggested: true,
        },
        desserts: [
          {
            name: "Makroud Almond Slice",
            description: "Semolina pastry filled with sweet almond paste.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
          {
            name: "Orange Blossom Semolina Cake",
            description: "Moist semolina cake perfumed with orange blossom water.",
            priceType: "dessert",
            tags: ["Vegetarian"],
          },
        ],
      },
      playlist: {
        name: "Casbah Sundown",
        tracks: [
          { title: "Ya Rayah", artist: "Rachid Taha" },
          { title: "Raï Classics", artist: "Cheb Khaled" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "Ahlan!", meaning: "Hi! — a warm, casual Algerian greeting." },
        quiz: {
          question: "Algeria is the largest country in which continent?",
          options: ["Africa", "Asia", "South America", "Europe"],
          answerIndex: 0,
        },
        kidsActivity: "Color the Algerian flag: green and white with a red star and crescent.",
      },
    },
  },
  {
    slug: "morocco",
    destinationNumber: 21,
    name: "Morocco",
    flagEmoji: "🇲🇦",
    route: "North African Route",
    tagline: "Tagines, mint tea & spice",
    detail: {
      greetingLocal: "مرحبا بكم في المغرب!",
      greetingRomanized: "Marhban bikom fi Al-Maghrib!",
      greetingEnglish: "Welcome to Morocco!",
      cultureFacts: [
        "Marrakech's Jemaa el-Fnaa square transforms nightly into an open-air food market and stage.",
        "Moroccan tagines are named after the cone-shaped clay pot they're slow-cooked in.",
        "Morocco is one of the world's largest producers of argan oil, pressed from a tree unique to the region.",
        "Mint tea is a symbol of hospitality in Morocco, often poured three times, each brew a little different.",
      ],
      food: {
        vegBurger: {
          name: "Chermoula Veg Burger",
          description: "Herb-and-spice chermoula marinated vegetables, preserved lemon aioli.",
          priceType: "vegBurger",
          tags: ["Vegetarian", "Vegan-friendly", "Halal-friendly"],
        },
        chickenBurger: {
          name: "Tagine Chicken Burger",
          description: "Slow-spiced tagine chicken, apricot, preserved lemon, almonds.",
          priceType: "chickenBurger",
          tags: ["Halal-friendly", "No pork", "Contains nuts"],
        },
        beefBurger: {
          name: "Tagine Beef Burger",
          description: "Slow-spiced tagine beef, caramelized onion, almonds, cinnamon touch.",
          priceType: "beefBurger",
          tags: ["Halal-friendly", "No pork", "Contains nuts"],
        },
        quickBiteHero: "chicken",
        loadedFries: [
          {
            name: "Harissa Fries",
            description: "Spicy harissa sauce drizzled over crisp fries.",
            priceType: "loadedFries",
            tags: ["Vegan-friendly", "Vegetarian"],
          },
          {
            name: "Orange-Almond Fries",
            description: "Orange zest, toasted almonds, honey drizzle.",
            priceType: "loadedFries",
            tags: ["Vegetarian", "Contains nuts"],
          },
        ],
        salad: {
          name: "Orange & Olive Salad",
          description: "Orange segments, olives, red onion, cinnamon, olive oil.",
          priceType: "salad",
          tags: ["Vegan-friendly", "Vegetarian"],
        },
        coldDrink: {
          name: "Orange Blossom Lemonade",
          description: "Lemonade infused with a touch of orange blossom water.",
          priceType: "coldCountryDrink",
          tags: ["Alcohol-free"],
        },
        alcoholicDrink: {
          name: "Spiced Wine / Cocktail",
          description: "Warmly spiced wine or a Moroccan-inspired cocktail.",
          priceType: "alcoholicCountryDrink",
          tags: ["Contains alcohol"],
        },
        hotDrink: {
          name: "Moroccan Mint Tea",
          description: "Green tea steeped with fresh mint, poured with a flourish.",
          priceType: "hotDrink",
          tags: ["Vegan-friendly"],
          suggested: true,
        },
        desserts: [
          {
            name: "M'hanncha Snake Cake",
            description: "Coiled almond-paste pastry dusted with cinnamon and sugar.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
          {
            name: "Almond Honey Cigars",
            description: "Crisp pastry cigars filled with sweet almond paste, honey drizzle.",
            priceType: "dessert",
            tags: ["Vegetarian", "Contains nuts"],
          },
        ],
      },
      playlist: {
        name: "Marrakech Nights",
        tracks: [
          { title: "Ghir Enta", artist: "Saad Lamjarred" },
          { title: "Gnawa Trance Sessions", artist: "Traditional Gnawa" },
          { title: "Ana Hayran", artist: "Abdelaziz Stati" },
        ],
      },
      activities: {
        greetingPractice: { phrase: "Marhba!", meaning: "Welcome! — a warm Moroccan greeting." },
        quiz: {
          question: "What is the cone-shaped clay pot Moroccan tagines are named after?",
          options: ["The tagine pot", "The wok", "The dutch oven", "The paella pan"],
          answerIndex: 0,
        },
        kidsActivity: "Color the geometric tile pattern found in Moroccan riads.",
      },
    },
  },
];

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}

export const countriesWithDetail = () => countries.filter((c) => c.detail);
