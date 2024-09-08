import { type DashboardItems } from "./types";
import dolphin from "/dolphin.png"
import monkey from "/monkey.png"
import prisonIsland from "/prisonIsland.png"
import prisonNakupenda from "/prisonNakupenda.png"
import nungwi from "/nungwi.png"
import spice from "/spice1.png"
import sunset from "/sunset.png"
import stoneT from "/stoneTown.png"
import safariBlue from "/safariBlue.png"
import groundT from "/groundTransfer.png"

export const dashItems: DashboardItems[] = [
  {
    id: 1,
    heading: "Ground Transfer",
    text:"We offer seamless ground transfers across Zanzibar, Tanzania mainland, and nearby islands, ensuring comfortable and stylish transportation from airports, hotels, and to breathtaking wild safari destinations. Our reliable service guarantees a smooth journey, whether you're arriving for a relaxing holiday or exploring the islands and embarking on an adventurous safari. Experience stress-free transfers, allowing you to focus on enjoying the beauty and excitement of your trip.",
    image:groundT,
    alt:"Tourists Ground transfer vehicles"
  },
  {
    id: 2,
    heading: "Stone Town Tour",
    text:"Zanzibar, at the southern tip of the Middle East, is a vibrant blend of Arab, Indian, and African cultures, best experienced in Stone Town. A few hours of walking will reveal why this UNESCO World Heritage Site is so special. Key landmarks include the Palace Museum, Old Fort, Former Slave Market, and Darajani Market, perfect for finding unique souvenirs. With over 200 years of history, Stone Town is filled with grand Arab houses and over 100 hand-carved wooden doors. Its maze-like streets are a fascinating place to explore for hours or even days.",
    image:stoneT,
    alt:"The OldFort"
  },
  {
    id: 3,
    heading: "Spice Tour",
    text:"Zanzibar earned its reputation as a major seaport through its historic export of slaves and spices. Renowned as the SPICE ISLAND during the 18th and 19th centuries, it was the global center of clove production. Our spice tours offer an immersive experience, allowing you to explore lush plantations, uncover the island's rich history, and learn about the cultivation of various spices. Your guide will provide detailed insights into the uses of each spice plant, enriching your understanding of this aromatic heritage.",
    image:spice,
    alt:"Spices Display"
  },
  {
    id: 4,
    heading: "Prison Island Tour",
    text:"We are delighted to start your adventure with a visit to Prison Island (Changuu Island). Originally intended as a penal institution during the days of the sultans, the island never served as a prison after the abolition of the slave trade. Today, it stands as a historical site. You'll encounter the island's famous giant tortoises, descendants of four Aldabra tortoises gifted by Seychelles in 1919. These majestic creatures have thrived here, and the island now boasts a nursery where you can see baby tortoises of various ages. After exploring the island's history, you can enjoy snorkeling among vibrant coral reefs or relax with some sunbathing and swimming in the pristine waters nearby.",
    image:prisonIsland,
    alt:"Prison Island from far View"
  },
  {
    id: 5,
    heading: "Prison Nakupenda",
    text:"We’re excited to kick off your day of adventure with a visit to Prison Island (Changuu Island). Originally intended as a prison during the sultans' era, it was never used for that purpose after the abolition of the slave trade. Today, the island is a historic site. You’ll have the opportunity to admire the giant tortoises in their reserved habitat. In 1919, the Seychelles government gifted four Aldabra giant tortoises to the island, which have since thrived and bred freely. Many of the original tortoises are still there, and you'll also find a nursery showcasing baby tortoises of various ages. After exploring Prison Island, we'll board a boat for a scenic half-hour ride to Nakupenda Sandbank.",
    image:prisonNakupenda,
  },
  {
    id: 6,
    heading: "Safari Blue",
    text:"Safari Blue offers a full day of ocean adventure with swimming, snorkeling, and sunbathing, guided by our expert instructors. Enjoy chilled sodas, mineral water, beer, and a Zanzibari seafood lunch with grilled fish, lobster, and tropical fruits. Explore Menai Bay Conservation Area, where you have a 75% chance of spotting Indo-Pacific humpback and bottlenose dolphins. Relax on a beautiful sandbank, snorkel with high-quality gear, and savor cold drinks and local snacks. On Kwale Island, enjoy a buffet lunch of grilled seafood and a variety of tropical fruits. Experience sailing on a traditional ngalawa canoe and conclude the day with a stunning African sunset as you return by lateen sail.",
    image:safariBlue,
    alt:"Snorkeling-Safari Blue"
  },
  {
    id: 7,
    heading: "Jozani Forest Tour",
    text:"This tour takes you to one of East Africa's last natural rainforests, the Jozani Forest Reserve. Home to towering exotic trees and diverse wildlife, it's particularly famous for the Red Colobus Monkeys, unique to Zanzibar. Nestled between Chwaka Bay, the forest offers a tranquil walk through mangroves, providing a vital refuge for the island's flora and fauna. Enjoy a pleasant, guided tour in this protected paradise.",
    image:monkey,
    alt:"Red Colobus Monkey"
  },
  {
    id: 8,
    heading: "Dolphin Tour",
    text:"Just off Zanzibar's southern coast, Kizimkazi’s Bottlenose and Spinner dolphins, accustomed to human presence, swim playfully alongside visitors in their sparkling waters. This enchanting experience includes a visit to one of the island’s oldest mosques, an architectural gem. For added adventure, combine this tour with a trek through the lush Jozani Forest and a visit to Zala Park, ensuring a full day of exploration and wonder.",
    image:dolphin,
    alt:"Dolphins-Menai Bay"
  },
  {
    id: 9,
    heading: "Nungwi Village Tour",
    text:"This half-day tour takes you from Mkokotoni fishing village to Nungwi village. Visit the natural Mnarani Aquarium and explore the local boatyard where traditional dhows are crafted. Enjoy time swimming and relaxing on pristine sandy beaches. For a full-day experience, you can combine this tour with additional activities such as a spice tour or extended beach time.",
    image:nungwi,
    alt:"Nungwi Beach"
  },
  {
    id: 10,
    heading: "Sunset Cruising",
    text:"This delightful evening cruise begins at 5:00 PM from Stone Town, setting sail on a traditional dhow as you glide along the west coast. From Forodhani, you'll travel past Maruhubi and up to Mtoni Marine, all while enjoying the stunning sunset. Onboard, you'll experience the vibrant rhythms of local Taarabu music and savor a selection of soft drinks and snacks, including fried octopus, crispy potatoes, cassava, and nuts.",
    image:sunset,
    alt:"Boat Cruising"
  },
]