// // main.tsx
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { ThemeContext } from '../application/shared/themeContext';
// import { neonBlue } from '../infrastructure/themes/neonBlue';
// 
// createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <ThemeContext.Provider value={neonBlue}>
//       <App />
//     </ThemeContext.Provider>
//   </React.StrictMode>
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeContext } from '../application/shared/themeContext';
import { neonBlue } from '../infrastructure/themes/neonBlue';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContext.Provider value={neonBlue}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>
);