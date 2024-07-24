import { FaBalanceScale } from "react-icons/fa";
import {
  GiBullseye,
  GiCrystalGrowth,
  GiStarSwirl,
  GiGroundSprout,
  GiAllSeeingEye,
  GiEyeShield,
  GiPsychicWaves,
  GiMeditation,
  GiQueenCrown,
  GiGrassMushroom,
  GiLindenLeaf,
  GiDreamCatcher,
} from "react-icons/gi";
import {
  PiFlowerLotus,
  PiFeatherFill,
  PiBirdBold,
  PiCloverFill,
  PiFlowerTulipDuotone,
  PiTreasureChestFill,
  PiShootingStarFill,
  PiButterflyFill,
} from "react-icons/pi";
import {
  MdSunnySnowing,
  MdOutlineWbTwilight,
  MdFavorite,
} from "react-icons/md";
import { LuSword } from "react-icons/lu";
import { SiShell } from "react-icons/si";
import { BsFillSuitHeartFill } from "react-icons/bs";
import {
  TbTopologyStar3,
  TbZodiacAquarius,
  TbZodiacAries,
  TbZodiacCancer,
  TbZodiacCapricorn,
  TbZodiacGemini,
  TbZodiacLeo,
  TbZodiacLibra,
  TbZodiacPisces,
  TbZodiacSagittarius,
  TbZodiacScorpio,
  TbZodiacTaurus,
  TbZodiacVirgo,
} from "react-icons/tb";
import muladharaIcon from "../assets/chakras/muladhara.png";
import swadisthanaIcon from "../assets/chakras/swadhisthana.png";
import manipuraIcon from "../assets/chakras/manipura.png";
import anahataIcon from "../assets/chakras/anahata.png";
import visuddhaIcon from "../assets/chakras/visuddha.png";
import ajnaIcon from "../assets/chakras/ajna.png";
import sahasraraIcon from "../assets/chakras/sahasrara.png";
import earthEIcon from "../assets/elements/earth.png";
import airIcon from "../assets/elements/air.png";
import fireIcon from "../assets/elements/fire.png";
import waterIcon from "../assets/elements/water.png";
import earthIcon from "../assets/planets/earth.png";
import jupiterIcon from "../assets/planets/jupiter.png";
import marsIcon from "../assets/planets/mars.png";
import mercuryIcon from "../assets/planets/mercury.png";
import moonIcon from "../assets/planets/moon.png";
import neptuneIcon from "../assets/planets/neptune.png";
import plutoIcon from "../assets/planets/pluto.png";
import saturnIcon from "../assets/planets/saturn.png";
import sunIcon from "../assets/planets/sun.png";
import uranusIcon from "../assets/planets/uranus.png";
import venusIcon from "../assets/planets/venus.png";

export const crystalNames = [
  "Agate",
  "Alexandrite",
  "Amazonite",
  "Amber",
  "Amethyst",
  "Ametrine",
  "Andalusite",
  "Angelite",
  "Apatite",
  "Aquamarine",
  "Aventurine",
  "Azurite",
  "Beryl",
  "Bloodstone",
  "Boji Stone",
  "Bronzite",
  "Calcite",
  "Carnelian",
  "Celestite",
  "Chalcedony",
  "Chrysoberyl",
  "Chrysocolla",
  "Chrysoprase",
  "Citrine",
  "Coral",
  "Diamond",
  "Dumortierite",
  "Emerald",
  "Fluorite",
  "Garnet",
  "Goldstone",
  "Hematite",
  "Herkimer Diamond",
  "Howlite",
  "Iolite",
  "Jade",
  "Jasper",
  "Jet",
  "Kunzite",
  "Kyanite",
  "Labradorite",
  "Lapis Lazuli",
  "Larimar",
  "Lepidolite",
  "Malachite",
  "Moldavite",
  "Moonstone",
  "Morganite",
  "Obsidian",
  "Onyx",
  "Opal",
  "Pearl",
  "Peridot",
  "Pietersite",
  "Prehnite",
  "Pyrite",
  "Quartz",
  "Rhodochrosite",
  "Rhodonite",
  "Rose Quartz",
  "Ruby",
  "Rutilated Quartz",
  "Sapphire",
  "Sardonyx",
  "Selenite",
  "Seraphinite",
  "Serpentine",
  "Smoky Quartz",
  "Snowflake Obsidian",
  "Sodalite",
  "Spinel",
  "Sugilite",
  "Sunstone",
  "Tanzanite",
  "Tiger's Eye",
  "Topaz",
  "Tourmaline",
  "Turquoise",
  "Unakite",
  "Variscite",
  "Zebra Jasper",
  "Zoisite",
];

export const characteristicsList = [
  {
    icon: <FaBalanceScale size={24} />,
    name: "Balance",
    description: "Create harmony in all areas of your life.",
  },
  {
    icon: <PiFlowerLotus size={24} />,
    name: "Calming",
    description:
      "Promote a relaxed environment by reducing stress, anxiety and anger.",
  },
  {
    icon: <MdSunnySnowing size={24} />,
    name: "Clarity",
    description:
      "Bring clarity to the mind and improve decision-making skills.",
  },
  {
    icon: <PiFeatherFill size={24} />,
    name: "Cleansing",
    description:
      "Remove energetic blockages from body, mind, soul or environment.",
  },
  {
    icon: <PiBirdBold size={24} />,
    name: "Communication",
    description: "Express your truth and encourage compassionate listening.",
  },
 
  {
    icon: <LuSword size={24} />,
    name: "Courage",
    description: "Overcome fears and difficult situations.",
  },
  {
    icon: <SiShell size={24} />,
    name: "Creativity",
    description: "Stimulate imagination and new forms of artistic expression.",
  },
  {
    icon: <GiStarSwirl size={24} />,
    name: "Divine Guidance",
    description: "Receive messages from spirit guides and guardian angels.",
  },
  {
    icon: <GiDreamCatcher size={24} />,
    name: "Dreamwork",
    description: "Facilitate lucid dreaming and dream recall.",
  },
  {
    icon: <GiBullseye size={24} />,
    name: "Focus",
    description:
      "Provide direction for the successful achievement of each goal.",
  },
  {
    icon: <GiGroundSprout size={24} />,
    name: "Grounding",
    description: "Reconnect with the energy of the earth.",
  },
  {
    icon: <PiCloverFill size={24} />,
    name: "Luck",
    description: "Promote joy, positivity and finding your happiness.",
  },
  {
    icon: <PiFlowerTulipDuotone size={24} />,
    name: "Intuition",
    description: "Strengthen your instinctive nature and inner wisdom.",
  },
  {
    icon: <BsFillSuitHeartFill size={24} />,
    name: "Love",
    description: "Deepen appreciation and respect for yourself and others.",
  },
  {
    icon: <GiAllSeeingEye size={24} />,
    name: "Manifestation",
    description: "Let your dreams become reality.",
  },
  {
    icon: <GiMeditation size={24} />,
    name: "Meditation",
    description: "Develop inner silence to achieve a peaceful state of being.",
  },
  {
    icon: <MdOutlineWbTwilight size={24} />,
    name: "Motivation",
    description: "Increase determination and perseverance in pursuing a goal.",
  },
  {
    icon: <GiGrassMushroom size={24} />,
    name: "Nature",
    description: "Connect with nature and the elemental energies.",
  },
  {
    icon: <GiLindenLeaf size={24} />,
    name: "Personal Development",
    description: "Embrace the lesson that will determine your life path.",
  },
  {
    icon: <PiTreasureChestFill size={24} />,
    name: "Wealth",
    description: "Attain prosperity, good health and abundance.",
  },
  {
    icon: <GiEyeShield size={24} />,
    name: "Protection",
    description:
      "Ward off negative energies and protect yourself from harmful psychic influences.",
  },
  {
    icon: <GiPsychicWaves size={24} />,
    name: "Psychic Abilities",
    description:
      "Attune yourself to knowledge beyond the boundaries of the physical world.",
  },
  {
    icon: <GiQueenCrown size={24} />,
    name: "Self Confidence",
    description: "Increase your self-confidence and trust in your abilities.",
  },
  {
    icon: <PiShootingStarFill size={24} />,
    name: "Spiritual Growth",
    description: "Promote the evolution of your soul.",
  },
  {
    icon: <PiButterflyFill size={24} />,
    name: "Transformation",
    description: "Support the changes and embrace the experience.",
  },
  {
    icon: <TbTopologyStar3 size={24} />,
    name: "Vitality",
    description: "Increase energetic levels and uplift the spirit.",
  },
];

export const elementsList = [
  {
    icon: earthEIcon,
    name: "Earth",
    description:
      "Relates to the body. Symbolizes foundation, grounding, stability and security.",
  },
  {
    icon: waterIcon,
    name: "Water",
    description:
      "Relates to emotions. Symbolizes intuition, wisdom, renewal and dreams.",
  },
  {
    icon: fireIcon,
    name: "Fire",
    description:
      "Relates to the energy. Symbolizes action, strength, passion and vitality.",
  },
  {
    icon: airIcon,
    name: "Air",
    description:
      "Relates to the mind. Symbolizes thoughts, intellect, perception and communication.",
  },
];

export const chakrasList = [
  {
    icon: muladharaIcon,
    name: "Root",
    description: `The Root Chakra is the foundation of your life. It identifies with your physical body and regulates your basic survival and fundamental needs, such as physical safety, good health, and financial security.
    Crystals that resonate with the Root Chakra carry a vibration that opens and clears blockages that prevent you from establishing a solid foundation for your life. Root Chakra stones keep you grounded to the energy of the Earth, increase vitality, and provide stability for the manifestation of abundance.`,
    location: "Location: At the base of the spine and the coccyx.",
  },
  {
    icon: swadisthanaIcon,
    name: "Sacral",
    description: `The Sacral Chakra identifies with your emotions, desires, and pleasures. It focuses on finding a balance between your wants and needs and developing a deeper understanding of what brings you joy.
    Crystals associated with the Sacral Chakra address issues related to suppressed emotions. They reconnect you with your feelings to develop a healthy emotional balance and regain a love for life.`,
    location: "Location: Below the navel, in the center of the lower abdomen.",
  },
  {
    icon: manipuraIcon,
    name: "Solar Plexus",
    description: `The Solar Plexus Chakra relates to your identity and willpower. It embodies how you present yourself in the world and strengthens your drive to fulfill your life’s purpose.
    Crystals that resonate with the Solar Plexus Chakra enhance your self-esteem and can ignite creative inspiration. Their vibrations increase awareness of your authentic self by fostering a sense of confidence and empowerment.`,
    location:
      "Location: Upper abdomen, between the navel and the lower rib line.",
  },
  {
    icon: anahataIcon,
    name: "Heart",
    description: `The Heart Chakra embodies love and acceptance. It represents the balance and integration of your inner and outer worlds by enhancing awareness of the connection you have with yourself and the relationships you have with others.
    Crystals associated with the Heart Chakra expand your ability to give and receive love. They open your heart to greater compassion, forgiveness, and understanding.`,
    location: "Location: Center of the chest, just above the heart.",
  },
  {
    icon: visuddhaIcon,
    name: "Throat",
    description: `The Throat Chakra holds the power of self-expression. It empowers you to communicate the truth of your heart and live in harmony with yourself and others.
    Crystals that resonate with the Throat Chakra inspire your authentic truth. They enhance the abilities to speak and listen for effective communication and better understanding.`,
    location: "Location: Center of the throat.",
  },
  {
    icon: ajnaIcon,
    name: "Third Eye",
    description: `The Third Eye Chakra encompasses the concept of wholeness. It reflects inner wisdom, develops intuition, and guides the vision for your life.
    Crystals that activate the Third Eye Chakra stimulate psychic abilities and intuitive gifts. They increase awareness of the 'bigger picture' of life and bring to light the obstacles that block the path to realizing your dreams.`,
    location: "Location: Forehead, between the eyebrows.",
  },
  {
    icon: sahasraraIcon,
    name: "Crown",
    description: `The Crown Chakra defines your reality. It encompasses your life experiences and holds your beliefs about yourself and the world.
    Crystals that resonate with the Crown Chakra increase awareness of higher states of consciousness. They connect you with the divine source, where you can find bliss and discover the wisdom of the universe.`,
    location: "Location: Crown of the head.",
  },
];

export const zodiacsList = [
  {
    icon: <TbZodiacAries size={24} />,
    name: "Aries",
    description:
      "Aries is the first sign of the zodiac and represents the rebirth of the astrological cycle. In this time of new beginnings, it encourages you to step into the power of change. With an energy of confidence, drive, and determination, it encourages the courage to act boldly and explore your infinite potential.",
    season: "March 21 - April 19",
  },
  {
    icon: <TbZodiacTaurus size={24} />,
    name: "Taurus",
    description:
      "With strong and steady progress toward your goal, Taurus embraces the value of patience and persistence. With tremendous willpower and tenacity, it encourages you to stay true to yourself. This energy brings awareness of the feeling of being alive in your body.",
    season: "April 20-May 20",
  },
  {
    icon: <TbZodiacGemini size={24} />,
    name: "Gemini",
    description:
      "Gemini invites you to explore the world with genuine curiosity. It is a time to be social, learn, connect, and express your ideas with others. It encourages you to gain a broader perspective by gaining a better understanding of other peoples experiences and points of view.",
    season: "May 21 -June 21",
  },
  {
    icon: <TbZodiacCancer size={24} />,
    name: "Cancer",
    description:
      "Cancer navigates the world of emotions. With a sense of warm intimacy, it invites you to delve deep into your feelings. It offers a quiet time of self-reflection and expands the capacity for love and compassion. It asks you to consider what is most important in your life and to nurture connections with those you care about.",
    season: "June 22 - July 22",
  },
  {
    icon: <TbZodiacLeo size={24} />,
    name: "Leo",
    description:
      "Leo takes center stage as if the whole world is watching. With an energy of confidence, courage, and integrity, it empowers the authority to perform loudly and proudly. Its charismatic enthusiasm embraces the kind of leadership that increases generosity and camaraderie. It empowers you to be your extraordinary self, and don not let anyone take your light.",
    season: "July 23 - August 22",
  },
  {
    icon: <TbZodiacVirgo size={24} />,
    name: "Virgo",
    description:
      "Virgo s nurturing energy supports growth and well-being.It promotes conscious healthy living and brings awareness to the details that require dedication and improvement. ) Self-care is a practice of respect, and by taking the time to nourish your body, other areas of your life will thrive. The goal is not perfection, but to increase awareness of your needs and the needs of others.",
    season: "August 23 - September 22",
  },
  {
    icon: <TbZodiacLibra size={24} />,
    name: "Libra",
    description:
      "Libra strives to achieve beauty and balance in all areas of life. As a sociable sign, it desires committed partnerships and values ​​respect in relationships. It honors truth and justice and embraces an open mind that weighs all options before making a decision. By applying logical thinking that is free of judgment, it increases the potential for world peace and harmony.",
    season: "September 23 - October 23",
  },
  {
    icon: <TbZodiacScorpio size={24} />,
    name: "Scorpio",
    description:
      "Highly perceptive of the world, Scorpio inspires an ambitious drive to uncover the deepest and darkest truths. Seductive yet soulful, it holds nothing back in the quest for enlightenment and power. It reveals a sensual shadow side and seeks personal connection, freeing desires for physical intimacy and intense passion.",
    season: "October 24 - November 21",
  },
  {
    icon: <TbZodiacSagittarius size={24} />,
    name: "Sagittarius",
    description:
      "Sagittarius expansive and abundant energy unleashes a world of infinite possibilities. With an optimistic vegetative spirit, they seek knowledge, understanding and meaning through higher truth. Free your mind of limiting beliefs and open your heart to adventure. This free-spirited sign strives to reach new heights and experience all the world has to offer.",
    season: "November 22 - December 21",
  },
  {
    icon: <TbZodiacCapricorn size={24} />,
    name: "Capricorn",
    description:
      "Grounded by realistic visions of the future, Capricorn energy supports practicality, dedication, and discipline. With a focus on long-term achievement, it emphasizes that success develops over time. Driven by heartfelt ambition, it embraces the ideals of hard work and skilled mastery. It suggests that what you do today determines tomorrows results.",
    season: "December 22 - January 19",
  },
  {
    icon: <TbZodiacAquarius size={24} />,
    name: "Aquarius",
    description:
      "Aquarius energy encourages you to break free from social norms and take a ride on the wild side. This visionary energy inspires radical change and innovation. Looking to the future with a progressive mindset, it expands the imagination to bring the unfathomable into reality. Disregard the opinions and judgments of others and let your unique spirit roam free.",
    season: "January 20 - February 18",
  },
  {
    icon: <TbZodiacPisces size={24} />,
    name: "Pisces",
    description:
      "Pisces is the last of the zodiac signs.With heightened intuition, it is a time to absorb all the experience and wisdom gained in this past cycle. Surrender to the flow of emotions and embrace what you feel with a compassionate heart. The connection between reality and spirituality encourages healing through emotional expression. Let go of the illusions that bind you and trust in the Universe s plan.",
    season: "19. February - 20. March",
  },
];

export const planetsList = [
  {
    icon: sunIcon,
    name: "Sun",
    description:
      "The source of life and vitality. It represents the core of your self: your external personality, your ego and your identity.",
  },
  {
    icon: moonIcon,
    name: "Moon",
    description:
      "Influences emotions and feelings. It is reflective, intuitive and represents your deepest inner self.",
  },
  {
    icon: mercuryIcon,
    name: "Mercury",
    description:
      "Corresponds to communication and connection. It coordinates your thought process and how you understand and share information.",
  },
  {
    icon: venusIcon,
    name: "Venus",
    description:
      "Represents romantic love and physical attraction. It determines the kind of beauty you appreciate and the kind of things you enjoy.",
  },
  {
    icon: earthIcon,
    name: "Earth",
    description:
      "The anchor of your existence. It anchors the mind in reality and guides your earthly mission to achieve balance and wholeness.",
  },
  {
    icon: marsIcon,
    name: "Mars",
    description:
      "Driving forces of action, determination and desire. Its instinctive energy influences your motives and assertiveness.",
  },
  {
    icon: jupiterIcon,
    name: "Jupiter",
    description:
      "Increases abundance and happiness. It promotes personal and spiritual growth through the pursuit of new experiences, opportunities and higher knowledge.",
  },
  {
    icon: saturnIcon,
    name: "Saturn",
    description:
      "Transforms life s challenges into your greatest strengths. By teaching discipline, responsibility and structure, it develops maturity by testing your personal limits.",
  },
  {
    icon: uranusIcon,
    name: "Uranus",
    description:
      "Progressiv und exzentrisch. Inspiriert zu innovativem Denken, fordert es radikale Veranderungen und Befreiung von der ungerecht etablierten Ordnung.",
  },
  {
    icon: neptuneIcon,
    name: "Neptune",
    description:
      "Shapes the subconscious, increases spiritual perception and psychic receptivity. It strengthens imagination, intuition, dreams and enlightenment.",
  },
  {
    icon: plutoIcon,
    name: "Pluto",
    description:
      "Represents transformation through rebirth and regeneration. In exploring deeper truths, it raises questions of power and self-control.",
  },
];
