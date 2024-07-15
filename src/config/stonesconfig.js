// config.js

import { FaBalanceScale } from "react-icons/fa";
import { GiBullseye, GiCrystalGrowth, GiStarSwirl, GiGroundSprout, GiAllSeeingEye, GiEyeShield, GiPsychicWaves, GiMeditation, GiQueenCrown, GiGrassMushroom, GiLindenLeaf } from "react-icons/gi";
import { PiFlowerLotus, PiFeatherFill, PiBirdBold, PiCloverFill, PiFlowerTulipDuotone, PiTreasureChestFill, PiShootingStarFill, PiButterflyFill } from "react-icons/pi";
import { MdSunnySnowing, MdHealthAndSafety, MdOutlineWbTwilight, MdFavorite } from "react-icons/md";
import { LuSword } from "react-icons/lu";
import { SiShell } from "react-icons/si";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { TbTopologyStar3, TbZodiacAquarius, TbZodiacAries, TbZodiacCancer, TbZodiacCapricorn, TbZodiacGemini, TbZodiacLeo, TbZodiacLibra, TbZodiacPisces, TbZodiacSagittarius, TbZodiacScorpio, TbZodiacTaurus, TbZodiacVirgo } from "react-icons/tb";
import muladharaIcon from '../assets/chakras/muladhara.png'; 
import swadisthanaIcon from '../assets/chakras/swadhisthana.png'; 
import manipuraIcon from '../assets/chakras/manipura.png'; 
import anahataIcon from '../assets/chakras/anahata.png'; 
import visuddhaIcon from '../assets/chakras/visuddha.png'; 
import ajnaIcon from '../assets/chakras/ajna.png'; 
import sahasraraIcon from '../assets/chakras/sahasrara.png'; 
import earthEIcon from '../assets/elements/earth.png'; 
import airIcon from '../assets/elements/air.png'; 
import fireIcon from '../assets/elements/fire.png'; 
import waterIcon from '../assets/elements/water.png'; 
import earthIcon from '../assets/planets/earth.png'; 
import jupiterIcon from '../assets/planets/jupiter.png'; 
import marsIcon from '../assets/planets/mars.png'; 
import mercuryIcon from '../assets/planets/mercury.png'; 
import moonIcon from '../assets/planets/moon.png'; 
import neptuneIcon from '../assets/planets/neptune.png'; 
import plutoIcon from '../assets/planets/pluto.png'; 
import saturnIcon from '../assets/planets/saturn.png'; 
import sunIcon from '../assets/planets/sun.png'; 
import uranusIcon from '../assets/planets/uranus.png'; 
import venusIcon from '../assets/planets/venus.png'; 

export const crystalNames = [
  "Agate", "Alexandrite", "Amazonite", "Amber", "Amethyst", "Ametrine", "Andalusite", "Angelite", "Apatite", "Aquamarine",
  "Aventurine", "Azurite", "Beryl", "Bloodstone", "Boji Stone", "Bronzite", "Calcite", "Carnelian", "Celestite", "Chalcedony",
  "Chrysoberyl", "Chrysocolla", "Chrysoprase", "Citrine", "Coral", "Diamond", "Dumortierite", "Emerald", "Fluorite", "Garnet",
  "Goldstone", "Hematite", "Herkimer Diamond", "Howlite", "Iolite", "Jade", "Jasper", "Jet", "Kunzite", "Kyanite",
  "Labradorite", "Lapis Lazuli", "Larimar", "Lepidolite", "Malachite", "Moldavite", "Moonstone", "Morganite", "Obsidian", "Onyx",
  "Opal", "Pearl", "Peridot", "Pietersite", "Prehnite", "Pyrite", "Quartz", "Rhodochrosite", "Rhodonite", "Rose Quartz",
  "Ruby", "Rutilated Quartz", "Sapphire", "Sardonyx", "Selenite", "Seraphinite", "Serpentine", "Smoky Quartz", "Snowflake Obsidian", "Sodalite",
  "Spinel", "Sugilite", "Sunstone", "Tanzanite", "Tiger's Eye", "Topaz", "Tourmaline", "Turquoise", "Unakite", "Variscite",
  "Zebra Jasper", "Zoisite"
];

export const characteristicsList = [
  { icon: <FaBalanceScale />, name: 'Balance' },
  { icon: <PiFlowerLotus />, name: 'Calming' },
  { icon: <MdSunnySnowing />, name: 'Clarity' },
  { icon: <PiFeatherFill />, name: 'Cleansing' },
  { icon: <PiBirdBold />, name: 'Communication' },
  { icon: <GiQueenCrown />, name: 'Self Confidence' },
  { icon: <LuSword />, name: 'Courage' },
  { icon: <SiShell />, name: 'Creativity' },
  { icon: <GiStarSwirl />, name: 'Divine Guidance' },
  { icon: <MdHealthAndSafety />, name: 'Trauma Work' },
  { icon: <GiBullseye />, name: 'Focus' },
  { icon: <GiGroundSprout />, name: 'Grounding' },
  { icon: <PiCloverFill />, name: 'Luck' },
  { icon: <PiFlowerTulipDuotone />, name: 'Intuition' },
  { icon: <BsFillSuitHeartFill />, name: 'Love' },
  { icon: <GiAllSeeingEye />, name: 'Manifestation' },
  { icon: <GiMeditation />, name: 'Meditation' },
  { icon: <MdOutlineWbTwilight />, name: 'Motivation' },
  { icon: <GiGrassMushroom />, name: 'Nature' },
  { icon: <GiLindenLeaf />, name: 'Personal Development' },
  { icon: <PiTreasureChestFill />, name: 'Wealth' },
  { icon: <GiEyeShield />, name: 'Protection' },
  { icon: <GiPsychicWaves />, name: 'Psychic Abilities' },
  { icon: <PiShootingStarFill />, name: 'Spiritual Growth' },
  { icon: <PiButterflyFill />, name: 'Transformation' },
  { icon: <TbTopologyStar3 />, name: 'Vitality' },
];

export const elementsList = [
  { icon: earthEIcon, name: 'Earth' },
  { icon: airIcon, name: 'Air' },
  { icon: fireIcon, name: 'Fire' },
  { icon: waterIcon, name: 'Water' },
];

export const chakrasList = [
  { icon: muladharaIcon, name: 'Root' },
  { icon: swadisthanaIcon, name: 'Sacral' },
  { icon: manipuraIcon, name: 'Solar Plexus' },
  { icon: anahataIcon, name: 'Heart' },
  { icon: visuddhaIcon, name: 'Throat' },
  { icon: ajnaIcon, name: 'Third Eye' },
  { icon: sahasraraIcon, name: 'Crown' },
];

export const zodiacsList = [
  { icon: <TbZodiacAquarius />, name: 'Aquarius' },
  { icon: <TbZodiacAries />, name: 'Aries' },
  { icon: <TbZodiacCancer />, name: 'Cancer' },
  { icon: <TbZodiacCapricorn />, name: 'Capricorn' },
  { icon: <TbZodiacGemini />, name: 'Gemini' },
  { icon: <TbZodiacLeo />, name: 'Leo' },
  { icon: <TbZodiacLibra />, name: 'Libra' },
  { icon: <TbZodiacPisces />, name: 'Pisces' },
  { icon: <TbZodiacSagittarius />, name: 'Sagittarius' },
  { icon: <TbZodiacScorpio />, name: 'Scorpio' },
  { icon: <TbZodiacTaurus />, name: 'Taurus' },
  { icon: <TbZodiacVirgo />, name: 'Virgo' },
];

export const planetsList = [
  { icon: earthIcon, name: 'Earth' },
  { icon: jupiterIcon, name: 'Jupiter' },
  { icon: marsIcon, name: 'Mars' },
  { icon: mercuryIcon, name: 'Mercury' },
  { icon: moonIcon, name: 'Moon' },
  { icon: neptuneIcon, name: 'Neptune' },
  { icon: plutoIcon, name: 'Pluto' },
  { icon: saturnIcon, name: 'Saturn' },
  { icon: sunIcon, name: 'Sun' },
  { icon: uranusIcon, name: 'Uranus' },
  { icon: venusIcon, name: 'Venus' },
];
