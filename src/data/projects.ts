import wordbombImg from "../images/wordbomb.svg"
import basys3ponggameImg from "../images/basys3ponggame.svg"
import chadmartImg from "../images/chadmart.svg"
import airpurifierImg from "../images/airpurifier.png"
import globaltalkImg from "../images/globaltalk.svg"
import isoslimeImg from "../images/isoslime.svg"
import sonarslimeImg from "../images/sonarslime.svg"

export interface IProject {
    "title": string;
    "image": string;
    "description": string;
    "link": Array<{
        "type": string;
        "url": string;
    }>,
    "tags": string[];
    "languages": string[];
}

export const projectsData = [
    {
        "title": "Word Bomb - 2-Player English Vocabulary Game",
        "image": wordbombImg,
        "description": "\"Word Bomb\" is the game related to English vocabulary, required 2 players to battle each other.\n",
        "link": [
            {
                "type": "website",
                "url": "https://wordbomb.netlify.app/"
            },
            {
                "type": "github",
                "url": "https://github.com/creampiney/word-bomb-multiplayer"
            }
        ],
        "tags": ["Web Dev"],
        "languages": ["TypeScript"]
    },
    {
        "title": "Pong Game in BASYS 3 Board",
        "image": basys3ponggameImg,
        "description": "Multiplayer Pong Game in Basys 3 using Verilog (Term Project of Hardware Synthesis Laboratory 1/2023)",
        "link": [
            {
                "type": "github",
                "url": "https://github.com/creampiney/pong-game-basys3"
            }
        ],
        "tags": ["Hardware", "Game Dev"],
        "languages": ["Verilog"]
    },
    {
        "title": "ChadMart - E-Commerce Platform",
        "image": chadmartImg,
        "description": "An e-commerce platform for digital currency build with Next.Js App Router, a part of Hackathon called 10 days project where each teams have 10 days to build a product from a given problem",
        "link": [
            {
                "type": "website",
                "url": "https://chad.jjus.dev/"
            },
            {
                "type": "github",
                "url": "https://github.com/JusJira/10days-project-2023"
            }
        ],
        "tags": ["Web Dev", "Competition"],
        "languages": ["TypeScript"]
    },
    {
        "title": "Air Purifier IoT",
        "image": airpurifierImg,
        "description": "IoT for air purifier including dust, temperature, and moisture sensors with web application in final project of Embedded System Laboratory",
        "link": [
            {
                "type": "website",
                "url": "https://final-project-embedded.netlify.app/"
            },
            {
                "type": "github",
                "url": "https://github.com/creampiney/final-embedded-lab"
            }
        ],
        "tags": ["IoT", "Web Dev"],
        "languages": ["C", "TypeScript"]
    },
    {
        "title": "GlobalTalk - E-Learning Platform",
        "image": globaltalkImg,
        "description": "Learning platform created in competition \"Hack to School Hackathon\" hosted by Thinc and Cleverse",
        "link": [
            {
                "type": "github",
                "url": "https://github.com/thinc-org/hacktoschool-yilongma"
            }
        ],
        "tags": ["Web Dev", "Competition"],
        "languages": ["TypeScript"]
    },
    {
        "title": "IsoSlime - JavaFx Puzzle Game",
        "image": isoslimeImg,
        "description": "IsoSlime is a puzzle and short story game created with Java (using JavaFx for GUI) inspired from Sokoban (Famous box sliding puzzle game), ice sliding puzzle, and more puzzles games. This game is a part of final project in \"Programming Methodology\"",
        "link": [
            {
                "type": "github",
                "url": "https://github.com/creampiney/isoslime"
            }
        ],
        "tags": ["Game Dev"],
        "languages": ["Java"]
    },
    {
        "title": "SonarSlime - Discord SFX Bot",
        "image": sonarslimeImg,
        "description": "SonarSlime Discord Bot for playing sound effect in discord server",
        "link": [
            {
                "type": "github",
                "url": "https://github.com/creampiney/discord-sfx-sonarslime"
            }
        ],
        "tags": ["Bot"],
        "languages": ["Python"]
    }
]