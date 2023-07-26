// import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import "../app.css";
// import Home from "../pages/Home";
// import Header from '../components/header/Header';
// import '../style/home.css'
// import menu from '../assets/menu.png'

// function Main() {
//   const [isMenuActive, setIsMenuActive] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuActive(!isMenuActive);
//   };
//   return (
//     <main>
//       <Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
//       <section className='main-content'>
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//         <img
//           src={menu}
//           className='menu'
//           onClick={toggleMenu}
//         />
//       </section>
//     </main>
//   );
// }

// export default Main;