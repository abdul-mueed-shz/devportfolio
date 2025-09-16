/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Hi! its Abdul",
  logo_name: "Abdul Mueed",
  nickname: "",
  subTitle:
    "Software engineer specializing in (Spring Boot, Nest JS, Fast API, Next/React JS, Vue JS) 💻 - Open Source Contributor 🌟 - Community Builder 👨‍🏫",
  resumeLink:
    "https://drive.google.com/file/d/1e1YNbUtC15uYsfpsOotgFaHXbWSTQqUv/view?usp=drive_link",
  portfolio_repository: "https://github.com/abdul-mueed-shz",
};

const socialMediaLinks = [
  {
    name: "Stackoverflow",
    link: "https://stackoverflow.com/users/20266286/abdul-mueed",
    fontAwesomeIcon: "fa-stack-overflow", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#F48024", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Github",
    link: "https://github.com/abdul-mueed-shz",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/-abdulmueed/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCXjxgG6B0LzoDAmcYNcRaWQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:abdulmueedshahbaz@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/AlMoeedShz",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/al_mo_eed/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];
const socialMediaLinksHome = [...socialMediaLinks];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in full-stack development using Next.js, React.js, Vue.js with responsive design and modern UI libraries",
        "⚡ Expertise in backend development with Spring Boot, NestJS, Fast API, and Django REST Framework using best practices",
        "⚡ Demonstrated ability in building microservices architecture and scalable distributed systems",
        "⚡ Experienced in creating optimized REST APIs and Single Page Applications with design patterns",
      ],

      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:openjdk",
          style: {
            color: "#ED8B00",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Next JS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Nest JS",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: {
            color: "#E0234E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "VueJs",
          fontAwesomeClassname: "simple-icons:vuedotjs",
          style: {
            color: "green",
          },
        },
        {
          skillName: "Springboot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#339940",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#00758f",
          },
        },
        {
          skillName: "Neo4j",
          fontAwesomeClassname: "simple-icons:neo4j",
          style: {
            color: "#008CC1",
          },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "#231F20",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multi-cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Routing DNS records across different websites with secure SSL certificates",
        "⚡ Enabling secure connection with IP access restrictions",
        "⚡ Storing data over uniquely modelled bucket lists from backend",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#00758f",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience",
        "⚡ Enabling engaging user experience for generating leads",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            backgroundColor: "#31A8FF",
            borderRadius: "9px",
            padding: "1px 2px",
            color: "#001E36",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#3A67AE",
      },
      profileLink: "",
    },
    {
      siteName: "Udemy",
      iconifyClassname: "simple-icons:udemy",
      style: {
        color: "#E65050",
      },
      profileLink: "",
    },
    {
      siteName: "AWS",
      iconifyClassname: "logos:aws",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "#",
    },
    {
      siteName: "Qwiklabs",
      iconifyClassname: "simple-icons:qwiklabs",
      style: {
        color: "#EDC70E",
      },
      profileLink:
        "https://www.qwiklabs.com/public_profiles/8692b167-1af9-4c81-a795-789a654b1113",
    },
    {
      siteName: "Microsoft",
      iconifyClassname: "logos:microsoft-windows",
      style: {
        color: "#fda",
      },
      profileLink: "https://docs.microsoft.com/en-us/users/muhammadAbdullah/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Information Technology University, Lahore",
      subtitle: "Bachelor's in Computer Sciences",
      logo_path: "nust-logo.png",
      alt_name: "NUST - Islamabad",
      duration: "2018 - Present",
      descriptions: [
        "⚡ Gained deep insights of fundamental software engineering courses like DS, Algorithms, DBMS, OS, Advanced Programming, Artificial Intelligence etc.",
        "⚡ The transparent methodology of providing diversity and building confidence by NUST has helped to develop me as a person not to forget mentioning the community bonding techniques that talks about growth",
        "⚡ Apart from this, I have done courses on MERN Stack Development, Cloud Computing, Data Science, and Managing successful Start-ups",
        "⚡ My favorite co-curricular hobby has been to manage big tech communities since I have represented NUST as an MLSA, Google DSC Lead and AWS Educate Cloud Ambassador simultaneously",
      ],
      website_link: "https://nust.edu.pk/",
    },
    {
      title: "Hamza Army Public School and College, Rawalpindi",
      subtitle: "Intermediate and Primary",
      logo_path: "haps-logo.svg",
      alt_name: "HAPSAC",
      duration: "2006 - 2018",
      descriptions: [
        "⚡ Shortlisted as House Captain for school disciplines for two times in a row",
        "⚡ Swiftly conducted sports and other extra-curricular events in college",
        "⚡ Was awarded as 'Pride of Hamza' which is the highest ranked award in the college in my final year",
      ],
      website_link: "http://www.hamza.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Real-World problem solving and innovation",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1zODqrRzxxpqLr9tA46TM4j9-4yOcMEOh/view?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#E48564",
    },
    {
      title: "Managing the Company of the Future",
      subtitle: "- Prof. Julian Birkinshow",
      logo_path: "uol-logo.png",
      certificate_link:
        "https://coursera.org/share/a04db611f13675addbc9ed77198d9528",
      alt_name: "univeristy of London",
      color_code: "#E9E9E9",
    },
    {
      title: "Introduction to Serverless Deployment",
      subtitle: "- AWS Training",
      logo_path: "aws-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1bJu0_lVEKHTASH-g02tNgwzz9F3_7FzS/view?usp=sharing",
      alt_name: "AWS",
      color_code: "#222E3C",
    },
    {
      title: "Deep Dive into DocumentDB",
      subtitle: "- AWS Training",
      logo_path: "aws-logo.png",
      certificate_link:
        "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=ImgRkZjt5EWH9MnPQ5dDow2",
      alt_name: "AWS",
      color_code: "#222E3C",
    },

    {
      title: "Intro to ML: Language Processing",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/8692b167-1af9-4c81-a795-789a654b1113",
      alt_name: "Qwiklabs",
      color_code: "#8AB2F4",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.youracclaim.com/badges/053e0af0-c9be-4c47-8d1d-198ebe991e75/linked_in_profile",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Intro to ML: image Processing",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/8692b167-1af9-4c81-a795-789a654b1113",
      alt_name: "Qwiklabs",
      color_code: "#1F70C199",
    },
    {
      title: "Kubernetes in Google Cloud",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/8692b167-1af9-4c81-a795-789a654b1113",
      alt_name: "GCP",
      color_code: "#0C9D5899",
    },
    {
      title: "Performance Assessment at UNICEF",
      subtitle: "- UNICEF",
      logo_path: "UNICEF-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/11kl0jHW2IWN2O3Nq2lBJTd6cWgqI1eJl/view?usp=sharing",
      alt_name: "UNICEF",
      color_code: "#E9E9E7",
    },
    {
      title: "Intermediate ML: TensorFlow on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/8692b167-1af9-4c81-a795-789a654b1113",
      alt_name: "Qwiklabs",
      color_code: "#6AC097",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/8692b167-1af9-4c81-a795-789a654b1113",
      alt_name: "Google",
      color_code: "#4285F499",
    },
    {
      title: "Amazon ElastiCache Service Primer",
      subtitle: "- AWS Training",
      logo_path: "aws-logo.png",
      certificate_link:
        "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=-onl1wc0xEC_ZGYcLyBBkw2",
      alt_name: "AWS",
      color_code: "#222E3C",
    },
    {
      title: "Machine Learning APIs",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/8692b167-1af9-4c81-a795-789a654b1113",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Machine Learning in the Cloud with AWS Batch",
      subtitle: "- AWS Training",
      logo_path: "aws-logo.png",
      certificate_link:
        "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=VG0IjyOVVUigjOdlbsY4rw2",
      alt_name: "AWS",
      color_code: "#222E3C",
    },
    {
      title: "BigQuery Basics for Data Analysts",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/8692b167-1af9-4c81-a795-789a654b1113",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Amazon DynamoDB Service Primer",
      subtitle: "- AWS Training",
      logo_path: "aws-logo.png",
      certificate_link:
        "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=djjRwh9lakiGZ13wZ7h1dA2",
      alt_name: "AWS",
      color_code: "#222E3C",
    },

    {
      title: "Data Science on Google Cloud",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/8692b167-1af9-4c81-a795-789a654b1113",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "AWS Foundations: Machine Learning Basics",
      subtitle: "- AWS Training",
      logo_path: "aws-logo.png",
      certificate_link:
        "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=yDSgbKsl_kqxW_Pxq2LVEQ2",
      alt_name: "AWS",
      color_code: "#222E3C",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "As a Full Stack Developer with three years of industry experience, I have a solid background in both frontend and backend development. My expertise spans various technologies and frameworks, enabling me to build and maintain comprehensive web applications across diverse domains, including e-commerce and social media platforms.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title:
            "Software Engineer – Backend & Frontend (Spring Boot/Vue.js/Quasar)",
          company: "Nakisa",
          company_url: "https://nakisa.com/",
          logo_path: "abduls-work/nakisa-logo.svg", // You can place the logo image here
          imageWrapperStyles: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          duration: "Feb 2025 – Present",
          location: "On Site",
          description:
            "At Nakisa, a global leader in enterprise business solutions, I engineer scalable backend services using Spring Boot, Spring Security, and Spring Cloud. I build rich frontend UIs with Vue.js and Quasar, applying state management via Pinia and Vuex. I work with MySQL for persistent storage, Docker for containerization, and Nginx as a reverse proxy. I follow modern practices with TypeScript and Swagger to deliver maintainable and well-documented APIs.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer II (Vue Js/Springboot/Django)",
          company: "Redmath",
          company_url: "https://redmath.com/",
          logo_path: "abduls-work/redmath-logo.png",
          imageWrapperStyles: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          duration: "Aug 2022 - Feb 2025",
          location: "On Site",
          description:
            "I developed reusable components in Vue JS and React JS, improved code quality through refactoring, and handled microservice architecture in Spring Boot and Java. I collaborated with cross-functional teams to translate stakeholder requirements into successful project outcomes.",
          color: "#0879bf",
        },
        {
          title: "Full Stack Software Engineer (Vue Js/Django)",
          company: "Ez Bridge, USA",
          company_url: "https://ezbridge.io/",
          logo_path: "abduls-work/ezbridge-logo.png",
          imageWrapperStyles: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          duration: "June 2021 - Aug 2022",
          location: "Remote Work",
          description:
            "I implemented token-based authentication in Django Rest Framework, integrated APIs from Google, Facebook, and Instagram to enhance influencer ranking algorithms, and designed reusable UI components in Vue.js. I also enhanced the application with robust database, text, and logging mechanisms.",
          color: "#0879bf",
        },
        {
          title: "Game Developer (Unity)",
          company: "Mindstorm Studios",
          company_url: "https://mindstormstudios.com/",
          logo_path: "abduls-work/mindstorm.svg",
          duration: "July 2021 - Sep 2021",
          location: "Hybrid",
          imageWrapperStyles: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          description:
            "I innovated game mechanics with a dynamic power-up system, introducing abilities like speed boosts and shields, enhancing gameplay. I implemented solutions for environmental challenges and fixed UI bugs, improving user interaction and level design. I refined running, jumping, and animation systems for a seamless gaming experience.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Developer Student Club - Core Team Member",
          company: "Google Developers",
          company_url:
            "https://dsc.community.dev/information-technology-university/",
          logo_path: "gdsc-itu.jpeg",
          duration: "July 2020 - July 2021",
          location: "ITU, Lahore",
          description:
            "Worked as a core team member of the club for one of the most prestigious universities in Pakistan. Conducted tonnes of events in order to make student the next big assests in the market. The program provides an ecosystem that encourages sharing of knowledge, learning and community building using the power of Google and its resources. Finally, it gives the exposure of mentoring people to become the next Google Developer Expert and preserving the chain.",
          color: "#4285F4",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "October 2020 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like StudentCodeIn, Hacktoberfest, flutter mobile apps, and VueJs, ReactJs, Java, and Django applications. These contributions include bug fixes, feature requests and formulating proper documentation for a project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects involve use of various tech architectures and tools including ReactJs, VueJs, Redux, Vuex, Pinia, Hooks, Composables, Django, Springboot, MySql, Apache Ignite, and HTML/CSS. My best experience is to create Full stack applications and deploy them using an efficient cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const blogs = {
  title: "Blogs",
  subtitle:
    "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character. This part is coming soon feel free to reach out again for follow up 😉",
  link: "/",
  avatar_image_path: "blogs_image.svg",
  section: [
    {
      title: "My first ever blog",
      date: "20-09-2020",
      text: "abc",
      image:
        "https://image.shutterstock.com/image-photo/islamabad-pakistan-april-25-2019-260nw-1407461093.jpg",
    },
    {
      title: "My second ever blog",
      date: "20-09-2020",
      text: "abc",
      image:
        "https://image.shutterstock.com/image-photo/islamabad-pakistan-april-25-2019-260nw-1407461093.jpg",
    },
    {
      title: "My third ever blog",
      date: "20-09-2020",
      text: "abc",
      image:
        "https://image.shutterstock.com/image-photo/islamabad-pakistan-april-25-2019-260nw-1407461093.jpg",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "address_image.svg",
    description:
      "I am available on almost every social media. And here is the fun part, I'm very responsive, so feel free to reach me out if you want a Freelance work to be done or need a speaker for your tech talk. You can hit me up and have a Tech Savvy advice too! I can help you with Vue / React / Springboot / Django / (MERN/MEVN) and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "B/1325, Satellite Town, Rawalpindi, Punjab, Pakistan",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+92 3234942960",
  },
};

export {
  blogs,
  certifications,
  competitiveSites,
  contactPageData,
  degrees,
  experience,
  greeting,
  projectsHeader,
  settings,
  skills,
  socialMediaLinks,
  socialMediaLinksHome,
};
