// import React, { useState } from 'react';

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header id="top" className="relative">
//       <div className="flex flex-col-2 md:flex-row justify-between items-center mx-4 md:mx-10 capitalize font-semi-bold gap-4">
//         {/* Logo */}
//         <div className="flex items-center gap-2 mt-4">
//           <p className="border border-gray-900 rounded-full px-4 py-2 font-bold animate-bounce">j</p>
//           <p>jessica</p>
//         </div>

//         {/* Bouton menu icône */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden text-3xl z-50 border border-black p-2 rounded-md hover:bg-gray-300 transition-transform duration-200 active:scale-90"
//         >
//           <i className={`bi ${menuOpen ? 'bi-x' : 'bi-list'}`}></i>
//         </button>

//         {/* Liens (mode desktop) */}
//         <div className="hidden md:flex gap-4 capitalize">
//           <a href="#" className="px-2 py-1 rounded hover:bg-gray-300">
//             accueil
//           </a>
//           <a href="#a-propos" className="px-2 py-1 rounded hover:bg-gray-300">
//             a propos
//           </a>
//           <a href="#services" className="px-2 py-1 rounded hover:bg-gray-300">
//             services
//           </a>
//           <a href="#projets" className="px-2 py-1 rounded hover:bg-gray-300">
//             projets
//           </a>
//           <a href="#" className="px-2 py-1 rounded hover:bg-gray-300">
//             cv
//           </a>
//           <a
//             href="#contact"
//             className="border border-black px-2 py-1 rounded-none transition-transform duration-300 hover:bg-gray-200 active:scale-95"
//           >
//             contactez-moi
//           </a>
//         </div>
//       </div>

//       {/* Bandeau menu mobile */}
//       <div
//         className={`absolute top-0 left-0 w-full bg-white shadow-lg transform ${
//           menuOpen ? 'translate-y-0' : '-translate-y-full'
//         } transition-transform duration-300 md:hidden z-40 capitalize`}
//       >
//         <div className="flex flex-col items-center py-6 gap-4 text-lg font-semibold">
//           <a
//             href="#a-propos"
//             className="hover:bg-gray-300 transition-colors duration-200 px-4 py-2 rounded-md"
//             onClick={toggleMenu} // ferme le menu au clic
//           >
//             a propos
//           </a>
//           <a
//             href="#home"
//             className="hover:bg-gray-300 transition-colors duration-200 px-4 py-2 rounded-md"
//             onClick={toggleMenu}
//           >
//             home
//           </a>
//           <a
//             href="#services"
//             className="hover:bg-gray-300 transition-colors duration-200 px-4 py-2 rounded-md"
//             onClick={toggleMenu}
//           >
//             services
//           </a>
//           <a
//             href="#projets"
//             className="hover:bg-gray-300 transition-colors duration-200 px-4 py-2 rounded-md"
//             onClick={toggleMenu}
//           >
//             projets
//           </a>
//           <a
//             href="#"
//             className="hover:bg-gray-300 transition-colors duration-200 px-4 py-2 rounded-md"
//             onClick={toggleMenu}
//           >
//             cv
//           </a>
//           <a
//             href="#contact"
//             className="border px-2 py-1 hover:bg-gray-300 transition-colors duration-200 rounded-md"
//             onClick={toggleMenu}
//           >
//             hire me
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }
// import React from 'react';

// export default function MainContent() {
//   return (
//     <section className="text-black">
//       {/* Section Home */}
//       <section id="home" className="hero-section">
//         <div className="rounded-xl mx-8">
//           <div className="text-center mt-8">
//             <h1 className="capitalize text-gray-600 mt-8">
//               je suis{' '}
//               <span className="font-bold text-2xl text-black capitalize mt-8">
//                 jessica zabibu omari
//               </span>
//             </h1>
//             <p className="capitalize text-gray-600">
//               Je conçois des interfaces web et mobiles modernes avec passion et précision
//             </p>
//           </div>

//           <div className="flex flex-col items-center justify-center text-center mt-8 rounded">
//             <img
//               src="images/homepage2.jpeg"
//               className="w-80 h-80 rounded-xl object-cover"
//               alt="Jessica portrait"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Section À propos */}
//       <section id="a-propos" className="about mt-8 mx-4 md:mx-20">
//         <h1 className="text-center capitalize font-bold border-b mx-4 md:mx-20 text-4xl">
//           Qui suis-je ?
//         </h1>

//         <div className="flex flex-col md:flex-row justify-between gap-10 items-center mt-8">
//           <img
//             src="images/homepage1.jpeg"
//             className="w-80 h-80 rounded-xl object-cover mb-4 md:mb-0"
//             alt="Jessica présentation"
//           />
//           <div>
//             <p>
//               Je suis{' '}
//               <span className="font-bold text-black-400 text-2xl">
//                 Jessica Zabibu Omari
//               </span>
//               , développeuse web et web mobile à Lubumbashi. Passionnée par la technologie et
//               la résolution de problèmes, je combine mes compétences en développement et en
//               gestion pour livrer des interfaces performantes et intuitives. Avec une formation
//               en gestion et une expertise technique en développement web, j'apporte une
//               approche unique alliant vision business et excellence technique à chaque projet
//               que j'entreprends.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Section Services */}
//       <section className="services py-12 px-4 md:px-20 text-white">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
//           Mes Services
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg mb-4">
//                 {service.emoji}
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-black">{service.title}</h3>
//               <p className="text-black mb-4">{service.description}</p>
//               <ul className="text-sm space-y-1 text-black">
//                 {service.features.map((feature, i) => (
//                   <li key={i}>• {feature}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </section>
//     </section>
//   );
// }

// // Les données de tes services mises dans un tableau
// const services = [
//   {
//     emoji: '🎨',
//     title: 'Sites Portfolio',
//     description:
//       'Créez votre vitrine professionnelle avec un design unique qui reflète votre personnalité et vos compétences.',
//     features: [
//       'Design sur mesure',
//       'Design responsive',
//       'SEO optimisé',
//       'Portfolio interactif',
//     ],
//   },
//   {
//     emoji: '🌐',
//     title: 'Sites Web Dynamiques',
//     description:
//       'Développement de sites modernes avec des fonctionnalités avancées et une expérience utilisateur exceptionnelle.',
//     features: ['CMS sur mesure', 'Interface admin', 'Base de données', 'APIs intégrées'],
//   },
//   {
//     emoji: '🛒',
//     title: 'E-commerce',
//     description:
//       'Solutions e-commerce complètes pour développer votre activité en ligne efficacement.',
//     features: [
//       'Boutique en ligne',
//       'Paiement sécurisé',
//       'Gestion stock',
//       'Analytics avancées',
//     ],
//   },
//   {
//     emoji: '💻',
//     title: 'Applications Web',
//     description:
//       'Applications web complexes et performantes adaptées à vos besoins métier spécifiques.',
//     features: ['Développement SaaS', 'Dashboard admin', 'API REST', 'Déploiement cloud'],
//   },
//   {
//     emoji: '📱',
//     title: 'Applications Mobiles',
//     description:
//       'Applications mobiles natives et hybrides pour iOS et Android avec une expérience utilisateur optimale.',
//     features: [
//       'iOS & Android',
//       'Design UI/UX',
//       'Push notifications',
//       'Déploiement stores',
//     ],
//   },
//   {
//     emoji: '⚡',
//     title: 'Web & Mobile',
//     description:
//       'Solutions complètes alliant web et mobile pour une présence digitale totale et cohérente.',
//     features: [
//       'Écosystème complet',
//       'Synchronisation',
//       'Design uniforme',
//       'Performance optimisée',
//     ],
//   },
//   {
//     emoji: '🛠️',
//     title: 'Maintenance & Support',
//     description:
//       'Services de maintenance continue, mises à jour sécuritaires et support technique pour vos applications.',
//     features: [
//       'Maintenance préventive',
//       'Mises à jour sécurité',
//       'Support 24/7',
//       'Optimisation performance',
//     ],
//   },
// ];

