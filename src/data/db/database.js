import Mock from "../mock";

const database = {
  information: {
    name: 'Michael Birepinte',
    aboutContent: "Je suis un développeur junior, web et mobile. Tout juste reconverti, mais ayant toujours été très à l'aise avec la technologie, je suis à la recherche d'une nouvelle première expérience professionnelle. Curieux, autonome, et enthousiaste, je suis disponible pour travailler sur vos projets.",
    age: 38,
    phone: '',
    nationality: '',
    language: 'Français, Anglais',
    email: 'mickael.birepinte@gmail.com',
    address: 'Floirac, Gironde (33270), France',
    freelanceStatus: 'Alternance, ou stage de préembauche',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/michael-birepinte/',
      dribbble: '',
      github: 'https://github.com/Mbirepinte'
    },
    brandImage: '/images/tissot-portraits-58.jpg',
    aboutImage: '/images/tissot-bureaux-62.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/CV-MichaelBirepinte Nov22.pdf'
  },
  services: [
    {
      title: "Développement Web et Mobile",
      icon: 'brush-alt',
      details: "De formation fullstack, je suis aussi à l'aise avec le front-end que le back-end. Ayant travaillé en mode projet en mettant en pratique la méthode SCRUM, je saurais m'intégrer parfaitement à votre équipe."
    },
    /* {
      title: "Web Development",
      icon: 'code',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    }, */
/*     {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    } */
  ],
  reviews: [
    {
      id: 3,
      content: "This web developer is a great asset to any team. He is a hard worker and a great communicator. He is always willing to learn new things and is a great problem solver.",
      author: {
        name: 'Bill G.',
        designation: 'Développeur à la retraite, Microsoft'
      }
    },
    {
      id: 2,
      content: "J'ai déjà vu des CD tourner, mais jamais de cette façon. Les bras m'en tombent.",
      author: {
        name: 'Olga Yasnolpolskaya',
        designation: 'CTO de Workit'
      }
    },
    {
      id: 1,
      content: "Il casse pas trois pattes à un canard, mais il se débrouille.",
      author: {
        name: 'David Faure',
        designation: 'Formateur Wild Code School aux intestins fragiles'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "jQuery",
      value: 85
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "Photoshop",
      value: 65
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "The Weeknd",
      subtitle: "Projet 1 - Réalisation d'un site vitrine pour un artiste qui me doit beaucoup.",
      imageUrl: "/images/theweeknd.png",
      largeImageUrl: ["/images/theweeknd.png"],
      url: 'https://theweekndproject.netlify.app/'
    },
    {
      id: 2,
      title: "Eat's Simply",
      subtitle: "Projet 2 - Réalisation d'un site de recettes de cuisine. Une API a été maltraitée dans le cadre de ce projet.",
      imageUrl: "/images/eat-simply.jpeg",
      largeImageUrl: [
        "/images/eat-simply.jpeg"
      ],
      url: 'https://eat-s-simply.netlify.app/'
    },
    {
      id: 3,
      title: "Travel Mito",
      subtitle: "Hackaton - Projet réalisé sur 24h sur le thème voyage. TravelMito vous permet d'esquiver habilement une invitation à aller voir le dernier film des frères Dardenne, en pretextant un voyage et vous en fournissant les preuves. ATTENTION : Ne fonctionne pas sur mobile, et mettra un peu de temps à charger suivant votre connexion.",
      imageUrl: "/images/travelmito1.png",
      largeImageUrl: ["/images/travelmito1.png", "/images/travelmito2.png"],
      url: 'https://mbirepinte-github-io-travel-mito.vercel.app/'
    },
    {
      id: 4,
      title: "Portfolio 2.0 (en cours)",
      subtitle: "Familiarisation avec React Fiber et les animations blender.",
      imageUrl: "/images/portfolio-image-3.jpg",
      url: '#'
    },
   /*  */
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2018 - Present",
        position: "Frontend Web Developer",
        company: "Abc Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 2,
        year: "2016 - 2018",
        position: "Frontend Web Developer",
        company: "CBA Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 3,
        year: "2014 - 1016",
        position: "UI/UX Designer",
        company: "Example Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2018 - 2019",
        graduation: "Master of Science",
        university: "Abc University",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 2,
        year: "2016 - 2018",
        graduation: "Bachelor of Science",
        university: "Abc University",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 3,
        year: "2015 - 2016",
        graduation: "Higher Schoold Graduation",
        university: "Abc College",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      }
    ]
  },

  contactInfo: {
    phoneNumbers: ['+33 6 23 56 63 37'],
    emailAddress: ['mickael.birepinte@gmail.com'],
    address: "Floirac, Gironde (33270), France"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});