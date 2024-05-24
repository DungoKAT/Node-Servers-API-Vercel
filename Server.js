import ServerImage from "./ServerImage.js";

const coffeeText = "Like a busy coffee shop";

const Servers = [
    // *** Server Midjourney ***
    {
        id: 1,
        pathname: "midjourney",
        name: "Midjourney",
        icon: ServerImage.midjourney.icon,
        coverImage: ServerImage.midjourney.cover,
        description:
            "The official server for Midjourney, a text-to-image AI where your imagination is the only limit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 2nd, 2020",
            },
            {
                text: "Try out the official Midjourney text-to-image AI",
            },
            {
                text: "Weekly office hours with newest updates and the future",
            },
            {
                text: "Chat with other creators about their real-life projects",
            },
            {
                text: "Ask questions and explore prompting tips",
            },
        ],
        about: [
            "Midjourney is a new emerging text-to-image AI that brings your imagination into reality. Simply submit a text prompt and the bot will generate a beautiful piece of art in under 60 seconds.",
            "This community is ready and eager to help you with anything Midjourney related. Explore our resource channels, prompt-crafting forum and support channels, where our team of guides is ready to help you around the server.",
        ],
        supportLanguage: ["English"],
        online: 1360201,
        members: 19786050,
        verified: true,
        partnered: false,
        category: {
            main: ["Science & Tech", "Entertainment"],
            sub: ["Creative Arts", "Collaboration", "Wiki & Guide"],
        },
        social: [
            {
                media: "facebook",
                url: "https://www.facebook.com/groups/officialmidjourney",
            },
            {
                media: "x",
                url: "https://twitter.com/midjourney",
            },
            {
                media: "reddit",
                url: "https://www.reddit.com/r/midjourney/",
            },
            {
                media: "instagram",
                url: "https://www.instagram.com/realmidjourney",
            },
        ],
    },
    // *** Server Limewire ***
    {
        id: 2,
        pathname: "limewire",
        name: "LimeWire - create AI Images, Audio & Video",
        icon: ServerImage.limewire.icon,
        coverImage: ServerImage.limewire.cover,
        description:
            "Our active text-to-image AI community powers your journey to generate the best art, images, and design.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "November 29th, 2022",
            },
            {
                text: "Generate Art",
            },
            {
                text: "Talk about AI art",
            },
            {
                text: "Create connections",
            },
            {
                text: "Learn a New Skill",
            },
        ],
        about: [
            "Welcome to our community of artists, designers and tech enthusiasts! You’ll find a space where creativity and innovation collide to form something truly magical.",
            "Picture this - a world where your imagination is the only limit to the images you create. A place where the lines between reality and digital art blur, and you have the power to bring your vision to life. That’s precisely what we offer here.",
            "Our community is driven by the passion for art, high quality images and cutting-edge technology that makes it all possible. With the help of AI, we’re pushing the boundaries of what’s possible in the world of digital imagery. And we’d love for you to join us on this journey.",
            "As a member of our community, you’ll have access to tools and resources to help you bring your unique vision to life. But that’s just the start. You’ll also be part of a network of like-minded individuals equally passionate about art, design and technology. Together, we’ll explore new ideas, share our work, and support each other as we push the limits of what’s possible.",
            "So if you’re ready to take your image creation to the next level, join us and let’s create something truly remarkable!",
        ],
        supportLanguage: ["English"],
        online: 66186,
        members: 2300944,
        verified: true,
        partnered: false,
        category: {
            main: ["Science & Tech"],
            sub: ["Creative Arts", "Anime & Manga", "Art", "Comics & Cartoons"],
        },
        social: [
            {
                media: "x",
                url: "https://twitter.com/limewire",
            },
            {
                media: "instagram",
                url: "https://www.instagram.com/limewire/",
            },
            {
                media: "tiktok",
                url: "https://www.tiktok.com/@LimeWireOfficial",
            },
        ],
    },
    // *** Server Leonard-AI ***
    {
        id: 3,
        pathname: "leonardo-ai",
        name: "Leonardo.Ai",
        icon: ServerImage.leonardo_ai.icon,
        coverImage: ServerImage.leonardo_ai.cover,
        description:
            "Leonardo.Ai is a generative AI platform for content creation. Create game assets, artwork, design elements, and more!",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "June 22nd, 2022",
            },
            {
                text: "Weekly community challenges",
            },
            {
                text: "Advice on how to get the best out of your prompts",
            },
            {
                text: "Community feedback and kudos on your art generations",
            },
            {
                text: "Find like-minded individuals to collaborate with",
            },
        ],
        about: [
            "Leonardo.ai is all about friendly interaction, collaboration and support.",
            "We encourage our members to create and share using the platform (and are often blown away by what they produce). In addition, our community has first access to the latest information, releases, updates, guides, and access to our cutting-edge features. We also keep an eye on our biggest collaborators and periodically offer incentives and bonuses just for getting involved.",
            "All in all, Leonardo.ai Discord is THE place to be for game developers and artists, or even just those with a passing interest in AI generation content.",
        ],
        supportLanguage: ["English"],
        online: 123450,
        members: 20000000,
        verified: true,
        partnered: false,
        category: {
            main: ["Science & Tech"],
            sub: ["Creative Arts", "Game Developer", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://twitter.com/LeonardoAi_",
            },
            {
                media: "facebook",
                url: "https://www.facebook.com/LeonardoAiOfficial/",
            },
            {
                media: "instagram",
                url: "https://www.instagram.com/leonardoaiofficial/",
            },
            {
                mediaL: "reddit",
                url: "https://www.reddit.com/r/leonardoai/",
            },
            {
                media: "tiktok",
                url: "https://www.tiktok.com/@leonardo_ai",
            },
        ],
    },
    // *** Server Genshin Impact Official ***
    {
        id: 4,
        pathname: "genshin-impact-official",
        name: "Genshin Impact Official",
        icon: ServerImage.genshin_impact.icon,
        coverImage: ServerImage.genshin_impact.cover,
        description:
            "Welcome to Teyvat, Traveler! This is the place to discuss with others about your favorite game: Genshin Impact!",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "December 13th, 2018",
            },
            {
                text: "Look for your fellow Travelers in your region, whether it's to discuss in another language and/or group up!",
            },
            {
                text: "Discuss team-building and strategies! Whether it's starting off or Abyss!",
            },
            {
                text: "Chat about other Content Creator's showcase? Whether it's Fan Art, Cosplay, and more!",
            },
            {
                text: "Catch all the latest news, subscribe to our update channels so you can also have it on your discord servers!",
            },
        ],
        about: [
            "Our official server is all about sharing and enhancing your experience with our game, Genshin Impact. There are plenty of different things you can do in our server; this includes having a general conversation with your fellow Travelers, staying up-to-date with our update/preview channels, finding help or helping others with team building/abyss/co-op, discuss other content creator's work (Fan Art, Cosplay, and more), and many more for our community.",
            "We hope your enjoy our server as it may be your first stop to many more different experiences!",
        ],
        supportLanguage: ["English"],
        online: 282239,
        members: 1499840,
        verified: true,
        partnered: false,
        category: {
            main: ["Entertainment", "Gaming"],
            sub: ["Anime & Manga", "Content Creator"],
        },
    },
    // *** Server Python ***
    {
        id: 5,
        pathname: "python",
        name: "Python",
        icon: ServerImage.python.icon,
        coverImage: ServerImage.python.cover,
        description:
            "We're a large community focused around the Python programming language. We believe that anyone can learn to code.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 8th, 2017",
            },
            {
                text: "Find and offer help with Python questions",
            },
            {
                text: "Chat with other programmers about various topics",
            },
            {
                text: "Join community events that improve your technical skills",
            },
            {
                text: "Learn about open-source contribution",
            },
        ],
        about: [
            "We're a large community focused around the Python programming language. We believe anyone can learn to code, and are very dedicated to helping novice developers take their first steps into the world of programming. We also attract a lot of expert developers who are seeking friendships, collaborators, and who wish to hone their craft by teaching and getting involved in the community.",
            "Our website: https://pythondiscord.org",
        ],
        supportLanguage: ["English"],
        online: 37571,
        members: 391449,
        verified: false,
        partnered: false,
        category: {
            main: ["Education", "Science & Tech"],
            sub: ["Programming", "Collaboration", "Studying & Teaching"],
        },
        social: [
            {
                media: "youtube",
                url: "https://www.youtube.com/c/PythonDiscord",
            },
            {
                media: "github",
                url: "https://github.com/python-discord/",
            },
            {
                media: "patreon",
                url: "https://www.patreon.com/python_discord",
            },
            {
                media: "x",
                url: "https://twitter.com/PythonDiscord",
            },
        ],
    },
    // *** Server Valorant ***
    {
        id: 6,
        pathname: "valorant",
        name: "VALORANT",
        icon: ServerImage.valorant.icon,
        coverImage: ServerImage.valorant.cover,
        description:
            "The official VALORANT Discord server, in collaboration with Riot Games. Find the latest news and talk about the game!",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "February 20th, 2020",
            },
            {
                text: "Latest VALORANT news",
            },
            {
                text: "Fun community events",
            },
            {
                text: "Talk about your favourite esports",
            },
            {
                text: "Find people to play with",
            },
        ],
        about: [
            "This is the official Discord server for the free-to-play first-person hero shooter developed and published by Riot Games: VALORANT.",
            "Our server is English speaking but open to all regions. We host community events and keep our users up to date with the latest VALORANT news and updates.",
            "Feel free to talk about the game, its esports, or about anything else in our server!",
        ],
        supportLanguage: ["English"],
        online: 231744,
        members: 1104115,
        verified: false,
        partnered: true,
        category: {
            main: ["Entertainment", "Gaming"],
            sub: ["LFG", "Emoji", "General Chatting"],
        },
        social: [
            {
                media: "x",
                url: "https://twitter.com/valcordgg",
            },
        ],
    },
    // *** Server Lofi Girl ***
    {
        id: 7,
        pathname: "lofi-girl",
        name: "Lofi Girl",
        icon: ServerImage.lofi_girl.icon,
        coverImage: ServerImage.lofi_girl.cover,
        description:
            "The friendliest community on Discord 🧡 Join now to meet amazing people from all around the world 🌎",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "May 5th, 2020",
            },
            {
                text: "Friendliest Community on Discord",
            },
            {
                text: "Interactive Events to Connect With the Community",
            },
            {
                text: "Array of Diverse Topics to Discuss Your Interests",
            },
            {
                text: "Always Be Up-To-Date on Lofi Girl",
            },
        ],
        about: [
            "Welcome to Lofi Girl’s official Discord server!👋 The friendliest community on Discord 🧡 Join now to meet amazing people from all around the world 🌎",
            "Lofi Girl is a radio-style channel that runs the 24/7 ‘beats to relax/study to’ livestream on YouTube with over 10 million subscribers. Our music is available on a wide variety of platforms, including Spotify, Apple Music, Deezer, and more.",
            "The Discord server is a place to hang out in the very heart of the lofi hip hop community. Connect with other Lofi Girl fans, make new friends from all over the world, engage in interesting discussions, listen to chill music, and have a good time! 🌎",
            "Want to invite your friends to the server? Send them this link: https://discord.gg/lofigirl",
        ],
        supportLanguage: ["English"],
        online: 70700,
        members: 928091,
        verified: true,
        partnered: true,
        category: {
            main: ["Music"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://twitter.com/lofigirl",
            },
            {
                media: "facebook",
                url: "https://www.facebook.com/lofigirl",
            },
            {
                media: "instagram",
                url: "https://www.instagram.com/lofigirl/",
            },
            {
                media: "reddit",
                url: "https://www.reddit.com/r/LofiGirl/",
            },
            {
                media: "tiktok",
                url: "https://www.tiktok.com/@lofigirl",
            },
            {
                media: "youtube",
                url: "https://www.youtube.com/c/LofiGirl",
            },
        ],
    },
    // *** Mock Server 1 ***
    {
        id: 8,
        pathname: "mock-server-1",
        name: "Mock Server 1 Gaming",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 1000,
        members: 50000,
        verified: true,
        partnered: false,
        category: {
            main: ["Gaming"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
            {
                media: "youtube",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 2 ***
    {
        id: 9,
        pathname: "mock-server-2",
        name: "Mock Server 2 Entertainment",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 1500,
        members: 70000,
        verified: false,
        partnered: true,
        category: {
            main: ["Entertainment"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
            {
                media: "youtube",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 3 ***
    {
        id: 10,
        pathname: "mock-server-3",
        name: "Mock Server 3 Education",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 15000,
        members: 500000,
        verified: true,
        partnered: false,
        category: {
            main: ["Education"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 4 ***
    {
        id: 11,
        pathname: "mock-server-4",
        name: "Mock Server 4 Science & Tech",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 15000,
        members: 500000,
        verified: true,
        partnered: false,
        category: {
            main: ["Science & Tech"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 5 ***
    {
        id: 12,
        pathname: "mock-server-5",
        name: "Mock Server 5 Music",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 8000,
        members: 90000,
        verified: false,
        partnered: false,
        category: {
            main: ["Music"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 6 ***
    {
        id: 13,
        pathname: "mock-server-6",
        name: "Mock Server 6 Gaming | Entertainment",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 28000,
        members: 170000,
        verified: true,
        partnered: false,
        category: {
            main: ["Gaming", "Entertainment"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 7 ***
    {
        id: 14,
        pathname: "mock-server-7",
        name: "Mock Server 7 Gaming | Education",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 28000,
        members: 170000,
        verified: true,
        partnered: false,
        category: {
            main: ["Gaming", "Education"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 8 ***
    {
        id: 15,
        pathname: "mock-server-8",
        name: "Mock Server 8 Gaming | Science & Tech",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 2800,
        members: 17000,
        verified: true,
        partnered: false,
        category: {
            main: ["Gaming", "Science & Tech"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 9 ***
    {
        id: 16,
        pathname: "mock-server-9",
        name: "Mock Server 9 Gaming | Music",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 3000,
        members: 12000,
        verified: true,
        partnered: true,
        category: {
            main: ["Gaming", "Music"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 10 ***
    {
        id: 16,
        pathname: "mock-server-10",
        name: "Mock Server 10 Entertainment | Education",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 3500,
        members: 22000,
        verified: false,
        partnered: false,
        category: {
            main: ["Entertainment", "Education"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 11 ***
    {
        id: 17,
        pathname: "mock-server-11",
        name: "Mock Server 11 Entertainment | Science & Tech",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 3500,
        members: 25000,
        verified: false,
        partnered: false,
        category: {
            main: ["Entertainment", "Science & Tech"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 12 ***
    {
        id: 18,
        pathname: "mock-server-12",
        name: "Mock Server 12 Entertainment | Music",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 3500,
        members: 25000,
        verified: true,
        partnered: false,
        category: {
            main: ["Entertainment", "Music"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 13 ***
    {
        id: 19,
        pathname: "mock-server-13",
        name: "Mock Server 13 Education | Science & Tech",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 3500,
        members: 25000,
        verified: true,
        partnered: false,
        category: {
            main: ["Education", "Science & Tech"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 14 ***
    {
        id: 20,
        pathname: "mock-server-14",
        name: "Mock Server 14 Education | Music",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 3500,
        members: 25000,
        verified: true,
        partnered: false,
        category: {
            main: ["Education", "Music"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 15 ***
    {
        id: 21,
        pathname: "mock-server-15",
        name: "Mock Server 15 Gaming | Entertainment | Education",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 5000,
        members: 50000,
        verified: true,
        partnered: false,
        category: {
            main: ["Gaming", "Entertainment", "Education"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 16 ***
    {
        id: 22,
        pathname: "mock-server-16",
        name: "Mock Server 16 Gaming | Entertainment | Science & Tech",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 5000,
        members: 50000,
        verified: true,
        partnered: true,
        category: {
            main: ["Gaming", "Entertainment", "Science & Tech"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 17 ***
    {
        id: 23,
        pathname: "mock-server-17",
        name: "Mock Server 17 Gaming | Entertainment | Music",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 5000,
        members: 50000,
        verified: false,
        partnered: false,
        category: {
            main: ["Gaming", "Entertainment", "Music"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 18 ***
    {
        id: 24,
        pathname: "mock-server-18",
        name: "Mock Server 18 Gaming | Education | Science & Tech",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 7000,
        members: 70000,
        verified: false,
        partnered: true,
        category: {
            main: ["Gaming", "Education", "Science & Tech"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 19 ***
    {
        id: 25,
        pathname: "mock-server-19",
        name: "Mock Server 19 Gaming | Education | Music",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 7000,
        members: 70000,
        verified: false,
        partnered: false,
        category: {
            main: ["Gaming", "Education", "Music"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 20 ***
    {
        id: 26,
        pathname: "mock-server-20",
        name: "Mock Server 20 Gaming | Science & Tech | Music",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 8000,
        members: 80000,
        verified: true,
        partnered: true,
        category: {
            main: ["Gaming", "Science & Tech", "Music"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 21 ***
    {
        id: 27,
        pathname: "mock-server-21",
        name: "Mock Server 21 Entertainment | Education | Science & Tech",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 15000,
        members: 100000,
        verified: true,
        partnered: true,
        category: {
            main: ["Entertainment", "Education", "Science & Tech"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 22 ***
    {
        id: 28,
        pathname: "mock-server-22",
        name: "Mock Server 22 Entertainment | Education | Music",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 25000,
        members: 150000,
        verified: true,
        partnered: true,
        category: {
            main: ["Entertainment", "Education", "Music"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
    // *** Mock Server 23 ***
    {
        id: 28,
        pathname: "mock-server-23",
        name: "Mock Server 23 Entertainment | Science & Tech | Music",
        icon: ServerImage.mock.icon,
        coverImage: ServerImage.mock.cover,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        joinReason: [
            {
                text: coffeeText,
            },
            {
                text: "January 1st, 2021",
            },
            {
                text: "Mock Join Reason 1",
            },
            {
                text: "Mock Join Reason 2",
            },
            {
                text: "Mock Join Reason 3",
            },
            {
                text: "Mock Join Reason 4",
            },
        ],
        about: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim rhoncus libero in tempus. Donec bibendum dapibus mi, vel tincidunt arcu iaculis ut.",
            "Maecenas semper velit vitae mollis laoreet. Quisque egestas, purus a fringilla maximus, ligula ex scelerisque dolor, vitae imperdiet odio nulla ac neque.",
            "Suspendisse quis tempor elit. Phasellus quis est nunc. Curabitur id magna faucibus, vehicula sapien vitae, pellentesque turpis. Donec suscipit justo in viverra lacinia.",
            "Quisque tristique congue arcu id vulputate. Curabitur ligula nunc, dignissim in feugiat ac, hendrerit ut purus. Curabitur a tellus sed nisl dignissim dignissim. Duis porttitor, risus ut viverra accumsan, diam lacus accumsan velit, a tristique lacus tortor vitae nunc.",
        ],
        supportLanguage: ["English", "Lorem"],
        online: 30000,
        members: 200000,
        verified: true,
        partnered: true,
        category: {
            main: ["Entertainment", "Science & Tech", "Music"],
            sub: ["Fandom", "Books", "Creative Arts", "Art", "Content Creator"],
        },
        social: [
            {
                media: "x",
                url: "https://www.lipsum.com/",
            },
            {
                media: "facebook",
                url: "https://www.lipsum.com/",
            },
            {
                media: "instagram",
                url: "https://www.lipsum.com/",
            },
            {
                media: "reddit",
                url: "https://www.lipsum.com/",
            },
            {
                media: "tiktok",
                url: "https://www.lipsum.com/",
            },
        ],
    },
];

export default Servers;
