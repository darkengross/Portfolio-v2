export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I harness data to create intelligent, scalable solutions.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full opacity-50",
    titleClassName: "justify-end",
    img: "/b1.jpeg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI enthusiast with a passion for Model development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title:
      "Currently working on research related to Instagram political data analysis.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 opacity-75",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Image Classification using VITs",
    des: "Two phase model development with from-scratch vit implementation and fine tuning of pytorch's vit-b-16 pretrained vision transformer",
    img: "/p1.png",
    iconLists: [
      "/pytorch.svg",
      "/python.svg",
      "/streamlit.svg",
      "/fastapi.svg",
      "/jupyter.svg",
    ],
    link: "https://github.com/darkengross/Vit-finetuned-classification",
  },
  {
    id: 2,
    title: "Instagram Data Analysis",
    des: "Research on Instagram data of Lok sabha politicians. The data is fetched via Crowdtangle",
    img: "/p2.jpeg",
    iconLists: [
      "/python.svg",
      "/jupyter.svg",
      "/plotly.svg",
      "/sklearn.svg",
      "/hf.svg",
    ],
    link: "None",
  },
  {
    id: 3,
    title: "Anime Face Generator using GAN",
    des: "A Generative model made using Generative adversarial network(GAN) and trained on Anime Faces dataset from Kaggle.",
    img: "/p3.jpeg",
    iconLists: ["/python.svg", "/jupyter.svg"],
    link: "https://www.ui.aiimg.com",
  },
  {
    id: 4,
    title: "ASL Recognition",
    des: "A Comparative project that uses many machine learning algorithms and deep learning algorithms to predict American sign language.",
    img: "/p4.jpeg",
    iconLists: [
      "/sklearn.svg",
      "/tensorflow.svg",
      "/jupyter.svg",
      "/python.svg",
    ],
    link: "https://github.com/darkengross/ASL_Recognition",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Working with Adrian was a seamless experience. His attention to detail and commitment to excellence are unparalleled. Adrian's ability to understand complex requirements and translate them into functional solutions is impressive. Highly recommended!",
    name: "Sarah Lee",
    title: "CEO of Tech Innovators",
  },
  {
    quote:
      "Adrian's expertise in frontend development is outstanding. His approach to problem-solving and innovative thinking make him an invaluable asset to any team. Adrian's work ethic and dedication to quality are truly commendable.",
    name: "David Kim",
    title: "Lead Developer at CodeCrafters",
  },
  {
    quote:
      "Adrian has been a key player in our project's success. His ability to collaborate effectively and deliver high-quality results within tight deadlines sets him apart. Adrian's passion for technology and continuous learning is evident in his work.",
    name: "Emily Davis",
    title: "Product Manager at NextGen Solutions",
  },
  {
    quote:
      "Adrian's contribution to our project was exceptional. His ability to adapt to changing requirements and deliver top-notch solutions is remarkable. Adrian's dedication to his craft and commitment to client satisfaction make him an excellent choice for any development project.",
    name: "Mark Thompson",
    title: "CTO of BrightFuture Tech",
  },
];

export const companies = [
  {
    id: 1,
    name: "Pytorch",
    img: "/pytorch-ww.svg",
  },
  {
    id: 2,
    name: "TensorFlow",
    img: "/tensorflow-ww.svg",
  },
  {
    id: 3,
    name: "scikit-learn",
    img: "/sklearn.svg",
  },
  {
    id: 5,
    name: "Docker",
    img: "/docker-ww.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/darkengross",
  },
  {
    id: 2,
    img: "/leetcode.svg",
    link: "https://leetcode.com/u/Khushal_G/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/khushal-goyal-a27b54227/",
  },
];
