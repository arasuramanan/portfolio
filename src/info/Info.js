import photo from "../img/333.jpg";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
// import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Arasu Ramanan",
    lastName: "Ramanan",
    initials: "", // the example uses first and last, but feel free to use three or more if you like.
    position: "MERN Stack Developer",
    selfPortrait: photo, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '💻',
            text: 'Programmer'
        },
        {
            emoji: '🌎',
            text: 'India'
        },
        {
            emoji: "📧",
            text: "arasua1993@gmail.com"
        },

    ],
    skills: {
        proficientWith: ['javascript', 'git', 'github', 'bootstrap', 'html5', 'css3'],
        exposedTo: ['React', 'Node.js', 'Express', 'MongoDB']
      },
    socials: [
        {
          link: "https://drive.google.com/file/d/1L8qdP3cb6fo5rstxSyy_NGIe_xZpi1NP/view?usp=sharing",
          icon: "fa fa-file",
          label: 'resume'
        },
        {
          link: "https://facebook.com",
          icon: 'fa fa-facebook',
          label: 'facebook'
        },
        {
          link: "https://www.instagram.com/arasu_ramanan/",
          icon: 'fa fa-instagram',
          label: 'instagram'
        },
        {
          link: "https://github.com/arasuramanan",
          icon: "fa fa-github",
          label: 'github'
        },
        {
          link: "https://www.linkedin.com/in/arasu-ramanan-13057b26b/",
          icon: "fa fa-linkedin",
          label: 'linkedin'
        },
        {
          link: "https://twitter.com/arasu_ram",
          icon: "fa fa-twitter",
          label: 'twitter'
        },
        
      ],
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    // ],
    bio: "Hello! I'm Arasu Ramanan. I'm a MERN Stack Developer. I know React, Node, Express, MongoDB",
    SkillSet :
        {
            proficientWith: ['javascript', 'React', 'git', 'github', 'bootstrap'],
            exposedTo: ['Node']
        }
    ,
       hobbies: [
       {
           label: 'reading',
             emoji: '📖'
         },
         {
             label: 'gardening',
             emoji: '🎭'
         },
         {
             label: 'movies',
             emoji: '🎥'
         },
        //  {
        //      label: 'cookin',
        //      emoji: '🌶'
        //  }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Form Conversion MERN",
            live: "https://nflcbe.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            // source1: "https://github.com/arasuramanan/forma23",
            // source2: "https://github.com/arasuramanan/formb23", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Spotify Clone MERN",
            live: "https://sensational-chebakia-359bb2.netlify.app/auth/login",
            // source1: "https://github.com/arasuramanan/FoodOrdering-Backend",
            // source2: "https://github.com/arasuramanan/FoodOrdering-FrontEnd",
            image: mock2
        },
        {
            title: "Youtube Clone MERN",
            live: "https://inquisitive-entremet-b0e1b3.netlify.app",
            // source: "https://github.com/arasuramanan/First-Webcode",
            image: mock4
        },
        {
            title: "Chat App MERN",
            live: "https://classy-bienenstitch-9438f1.netlify.app",
            // source1: "https://github.com/arasuramanan/chat-backend",
            // source2: "https://github.com/arasuramanan/chat-frontEnd",
            image: mock3
        },

        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]


}