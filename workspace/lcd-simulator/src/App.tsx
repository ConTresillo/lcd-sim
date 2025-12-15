// // src/App.tsx
// import * as React from 'react';
// import ComponentTest from './components/controls/ComponentTest';
// 
// const App: React.FC = () => {
//   return (
//     <div className="min-h-screen">
//       <ComponentTest />
//     </div>
//   );
// };
// 
// export default App;

import React from 'react';
import ComponentTest from './components/ComponentTest.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <ComponentTest />
    </div>
  );
};

export default App;