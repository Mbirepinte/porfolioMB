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
      value: 80
    },
    {
      title: "CSS3",
      value: 70
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "SQL",
      value: 70
    },
    {
      title: "ReactJS",
      value: 70
    },
    {
      title: "NodeJS",
      value: 70
    },
    {
      title: "Estimation de compétences",
      value: 1
    },
    {
      title: "Second degré",
      value: 100
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
      subtitle: "Hackaton - Projet réalisé en 24h sur le thème voyage. TravelMito vous permet d'esquiver habilement une invitation à aller voir le dernier film des frères Dardenne, en pretextant un voyage et en vous en fournissant les preuves. ATTENTION : Ne fonctionne pas sur mobile, et mettra un peu de temps à charger suivant votre connexion.",
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
        year: "2022 - Maintenant",
        position: "Développeur Web Fullstack, Spécialité Javascript",
        company: "Wild Code School",
        details: "Je suis actuellement en formation à la Wild Code School, où je suis formé au développement web et mobile. J'ai déjà pu mettre en pratique mes compétences en Javascript, React, NodeJS, SQL, HTML et CSS."
      },
      {
        id: 2,
        year: "2015 - 2022",
        position: "Assistant projet",
        company: "Tissot Industrie",
        details: "J'ai évolué  dans mon entreprise en tant qu'assistant projet. J'avais pour tâche, la réalisation d'études techniques et financières de projets clés en main internationaux, dans le secteur de l'oil and gas. Une autre composante de mon poste était le suivi de facturation, le planning, le reporting, de projets concrétisés. J'ai pu m'excercer sur VBA/Excel à cette occasion."
      },
      {
        id: 3,
        year: "2013 - 2015",
        position: "Contrôleur Qualité",
        company: "Tissot Industrie",
        details: "J'ai travaillé en tant que contrôleur qualité, dans une chaudronnerie familiale qui vient de fêter ses 80 ans. J'avais pour tâche entre autre, les contrôles non destructifs d'assemblages métalliques electrosoudés, la constitution de dossiers de fin d'affaire, et la veille normative. Bénéficiant d'une grande autonomie, c'est à ce poste que j'ai pu produire mes premiers codes via des formulaires VBA automatisés. "
      },
      {
        id: 4,
        year: "2004 - 2013",
        position: "Equipier puis Manager",
        company: "McDonald's",
        details: "En 2004, afin de financer mes études, je fais mes débuts en tant qu'équipier dans un restaurant du Sud de Bordeaux. Ayant l'opportunité d'évoluer, je mets mes études de côté et obtient mes galons de manager."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2005 - 2009",
        graduation: "Licence Histoire de l'art",
        university: "Université de Bordeaux 3",
        details: "Passionné d'archéologie, je m'oriente -sans succès - vers la licence correspondante."
      },
      {
        id: 2,
        year: "2001 - 2004",
        graduation: "Licence of Sciences de la matière",
        university: "Université de Bordeaux 1",
        details: ""
      },
      {
        id: 3,
        year: "2000 - 2001",
        graduation: "Baccalauréat Scientifique ",
        university: "Lycée Jean Moulin, Langon(33)",
        details: "Mention assez bien"
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