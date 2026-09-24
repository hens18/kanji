# Kanji Sushi & Bar à la carte menu, transcribed from the printed menu (user-supplied image).
# Obvious typos fixed (Stripe Bass -> Striped Bass, mago -> mango, etc.). raw=True marks the menu's fish icon.
# (name, price, description, raw)
MENU = [
  ("starters", "Soup, salad & kitchen", [
    ("Soup", [("Miso Soup", 3, "", False)]),
    ("Salad", [
      ("House Salad", 3, "", False), ("Seaweed Salad", 6, "", False), ("Spicy Kani Salad", 7, "", False),
      ("Avocado Salad", 6, "", False),
      ("Shrimp Mango Salad", 7, "Cooked shrimp, mango and green mix with mango sauce", False),
      ("Salmon Skin Salad", 7, "Crispy baked salmon skin chips with green mix", False)]),
    ("Appetizers from the kitchen", [
      ("Edamame", 6, "Boiled soybeans with salt", False),
      ("Harumaki", 5.5, "Vegetable spring roll", False),
      ("Shrimp Shumai", 7, "6 steamed or deep-fried shrimp dumplings with dumpling sauce", False),
      ("Age Tofu", 6, "Deep-fried tofu with tempura sauce", False),
      ("Gyoza", 7, "6 pan-fried pork dumplings", False),
      ("Takoyaki", 9, "6 deep-fried octopus balls with Japanese mayo, takoyaki sauce and fish flakes", False),
      ("Shrimp Tempura", 8.5, "", False), ("Chicken Tempura", 8.5, "", False),
      ("Vegetable Tempura", 7.5, "", False), ("Crab Rangoon", 6, "", False),
      ("Fried Chicken Wings", 9, "6 pieces", False)]),
  ]),
  ("bar-apps", "Sushi bar starters", [
    ("Appetizers from the sushi bar", [
      ("Sushi Apps", 12, "5 pieces of chef's choice assorted fish", True),
      ("Sashimi Apps", 12, "5 pieces of chef's choice assorted fish", True),
      ("Pepper Tuna Tataki", 12, "Black pepper tuna with ponzu sauce", True),
      ("Tuna and Salmon Tartare", 12, "Chunky tuna and salmon with avocado, scallions, masago and ponzu sauce", True),
      ("Yellowtail Jalapeño", 12, "Sliced yellowtail with jalapeño and ponzu sauce", True),
      ("Salmon Midori", 12, "Salmon wrapped around cucumber and spicy kani, tobiko, special sauce", True),
      ("Sexy Jalapeño", 12, "Deep-fried jalapeño with cream cheese and spicy tuna inside, spicy sauce on top", True)]),
  ]),
  ("nigiri", "Sushi & sashimi", [
    ("À la carte sushi or sashimi · 2 pieces per order", [
      ("Egg Omelette (Tamago)", 5, "", False), ("Crab Stick (Kani)", 5, "", False),
      ("Shrimp (Ebi)", 5, "", False), ("Surf Clam (Hokkigai)", 5.5, "", False),
      ("Red Snapper (Tai)", 6, "", True), ("Mackerel (Saba)", 5, "", True),
      ("Salmon (Sake)", 6, "", True), ("Squid (Ika)", 5, "", True),
      ("White Tuna (Escolar)", 6.5, "", True), ("Octopus (Tako)", 5.5, "", False),
      ("Flying Fish Roe (Tobiko)", 6, "", True), ("Yellowtail (Hamachi)", 6.5, "", True),
      ("Smoked Salmon", 5.5, "", True), ("Tuna (Maguro)", 6.5, "", True),
      ("Eel (Unagi)", 6.5, "", False), ("Scallop (Hotategai)", 7.5, "", True),
      ("Tofu Skin (Inari)", 5, "", False), ("Masago (Smelt Roe)", 5, "", True),
      ("Striped Bass (Suzuki)", 6, "", True)]),
  ]),
  ("entrees", "Sushi bar entrées", [
    ("Served with soup or salad", [
      ("Maki Combo Dinner", 17, "California roll, tuna roll and salmon roll", True),
      ("Spicy Maki Combo Dinner", 19, "Spicy tuna, spicy salmon and spicy yellowtail rolls", True),
      ("Sushi Dinner", 23, "Chef's choice of 10 pieces of sushi and a California roll", True),
      ("Sashimi Dinner", 32, "Chef's choice of 15 pieces of sashimi with sushi rice", True),
      ("Chirashi Sushi", 26, "Chef's choice of 12 pieces of sashimi over sushi rice", True),
      ("Tri Color Sashimi", 30, "4 pieces each of tuna, salmon and yellowtail with white rice", True),
      ("Tri Color Sushi", 25, "3 pieces each of tuna, salmon and yellowtail and one tuna roll", True),
      ("Unagi Don", 22, "Broiled sliced eel over sushi rice with eel sauce", False),
      ("Sushi & Sashimi Combo", 34, "Chef's choice of 5 pieces of sushi, 9 pieces of sashimi and a spicy tuna roll", True),
      ("Love Boat for Two", 78, "Chef's choice of 12 pieces of sushi, 18 pieces of sashimi and two special rolls", True)]),
  ]),
  ("classic", "Classic & hand rolls", [
    ("Raw maki", [
      ("Salmon Roll", 6, "", True), ("Spicy Tuna Roll", 7, "", True), ("Tuna Roll", 6.5, "", True),
      ("Spicy Salmon Roll", 7, "", True), ("Alaska Roll", 7, "", True), ("White Tuna Roll", 6.5, "", True),
      ("Spicy Yellowtail Roll", 7, "", True), ("Yellowtail Roll", 7, "With scallion or jalapeño", True),
      ("Tuna Avocado Roll", 7.5, "With avocado or cucumber", True),
      ("Salmon Avocado Roll", 7, "With avocado or cucumber", True),
      ("Spicy Scallop Roll", 8.5, "", True),
      ("Philadelphia Roll", 7, "Smoked salmon, cream cheese, avocado", True)]),
    ("Cooked maki", [
      ("Spicy Shrimp Roll", 7, "", False), ("California Roll", 6.5, "", False),
      ("Salmon Skin Roll", 6.5, "", False),
      ("Boston Roll", 6.5, "Cucumber, shrimp, lettuce and mayo", False),
      ("Shrimp Avocado Roll", 7, "With avocado or cucumber", False),
      ("Eel Cucumber or Avocado Roll", 7.5, "", False), ("Chicken Tempura Roll", 7.5, "", False),
      ("Shrimp Tempura Roll", 7.5, "", False), ("Spider Roll", 10, "", False),
      ("Futo Maki Roll", 7.5, "", False), ("Spicy Crab Roll", 7, "", False),
      ("Spicy California Roll", 7, "", False)]),
    ("Vegetable maki", [
      ("Avocado Roll", 6, "", False), ("Asparagus Roll", 5, "", False), ("Cucumber Roll", 5, "", False),
      ("Oshinko Roll", 5, "", False), ("Sweet Potato Roll", 5.5, "", False),
      ("A.A.C. Roll", 6.5, "", False), ("Peanut Avocado Roll", 5.5, "", False)]),
  ]),
  ("special", "Special rolls", [
    ("Raw", [
      ("Rainbow Roll", 14, "Crabmeat, avocado and cucumber inside, topped with tuna, salmon, white fish and avocado", True),
      ("Incredible Roll", 17, "Tuna, salmon, yellowtail and avocado wrapped in soybean paper, with eel sauce and spicy mayo", True),
      ("Midnight in Tokyo Roll", 16, "Spicy tuna and avocado inside, topped with fresh tuna, crunch and red tobiko, with eel sauce and wasabi sauce", True),
      ("Honeymoon Roll", 16, "Spicy salmon inside, topped with tuna, salmon and avocado, with spicy mayo and wasabi sauce", True),
      ("Old Keene Mill Roll", 15, "Shrimp tempura and cucumber inside, topped with spicy crunchy tuna, eel sauce and spicy mayo", True),
      ("Salmon Lover Roll", 15, "Spicy salmon, crab meat and cucumber inside, topped with fresh salmon, eel sauce and crunch", True),
      ("Autumn of VA Roll", 16, "Salmon, spicy tuna and asparagus inside, topped with white tuna, with spicy mayo", True),
      ("Golden Spider Roll", 17, "Soft shell crab tempura and avocado inside, topped with spicy salmon, eel sauce and spicy mayo", True),
      ("Naruto Roll", 14, "Tuna, salmon, crab stick or yellowtail with avocado and tobiko, wrapped in sliced cucumber with ponzu sauce", True),
      ("Hot Girl Roll", 15, "Tuna, avocado and cucumber inside, topped with spicy yellowtail, jalapeño and sriracha", True),
      ("Great Falls Roll", 15, "Shrimp tempura and avocado inside, topped with pepper tuna, avocado, masago, eel sauce and wasabi mayo", True)]),
    ("Cooked", [
      ("Kanji Roll", 18, "Lobster salad, steamed shrimp, crab meat, cream cheese and avocado in soybean paper, with eel sauce and spicy mayo", False),
      ("Green River Roll", 15, "Shrimp tempura and cheese inside, topped with spicy crab, avocado, eel sauce and spicy mayo", False),
      ("TNT Roll", 16, "Salmon, eel, shrimp, avocado and cucumber, fried crispy, with eel sauce and spicy mayo", False),
      ("Crunchy Spicy Tuna, Salmon or Kani Tempura Roll", 13, "Spicy tuna, salmon or kani with avocado and cream cheese, fried crispy, with spicy mayo and eel sauce", False),
      ("Dragon Roll", 14, "Eel and cucumber inside, topped with avocado and eel sauce", False),
      ("Black Dragon Roll", 16, "Shrimp tempura and cucumber, topped with eel, avocado and eel sauce", False),
      ("Snow Mountain Roll", 15, "Shrimp tempura and cream cheese, topped with crab meat, mayo and mango sauce", False),
      ("Dark Angel Roll", 16, "Spicy kani and avocado inside, topped with eel and eel sauce", False),
      ("Pikachu Roll", 15, "Shrimp tempura and avocado, topped with sliced mango and mango sauce", False),
      ("Sunrise Highway Roll", 15, "Sweet potato tempura, avocado and cream cheese, topped with spicy kani and eel sauce", False),
      ("American Dream Roll", 15, "Fried banana and shrimp tempura in soybean paper, with mango sauce and spicy mayo", False)]),
  ]),
]
