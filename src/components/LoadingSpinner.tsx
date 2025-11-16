// import React, { useState, useEffect } from 'react';
// import { Loader2 } from 'lucide-react';

// const LoadingSpinner: React.FC = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading time
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!isLoading) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero">
//       <div className="text-center text-white">
//         <div className="drone-animation mb-6">
//           <Loader2 className="w-16 h-16 mx-auto animate-spin" />
//         </div>
//         <h2 className="text-2xl font-bold mb-2">Hertz Dynamics</h2>
//         <p className="text-primary-light">Loading drone technology...</p>
//       </div>
//     </div>
//   );
// };

// export default LoadingSpinner;


import React, { useState, useEffect } from 'react';

const LoadingSpinner: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero">
      <style>{`
        .hex-loader {
          display: flex;
          gap: 10px;
          justify-content: center;
          align-items: center;
        }
        .hex {
          width: 40px;
          height: 23px;
          background: #3b82f6; /* Tailwind blue-500 */
          position: relative;
          animation: pulse 1.2s infinite ease-in-out;
        }
        .hex:before,
        .hex:after {
          content: "";
          position: absolute;
          width: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
        }
        .hex:before {
          bottom: 100%;
          border-bottom: 12px solid #3b82f6;
        }
        .hex:after {
          top: 100%;
          border-top: 12px solid #3b82f6;
        }
        .hex:nth-child(1) { animation-delay: 0s; }
        .hex:nth-child(2) { animation-delay: 0.2s; }
        .hex:nth-child(3) { animation-delay: 0.4s; }
        @keyframes pulse {
          0%, 80%, 100% { transform: scale(0.9); opacity: 0.7; }
          40% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>

      <div className="text-center text-white">
        <div className="drone-animation mb-6">
          <div className="hex-loader">
            <div className="hex"></div>
            <div className="hex"></div>
            <div className="hex"></div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">Hertz Dynamics</h2>
        <p className="text-primary-light">Loading drone technology...</p>
      </div>
        </div>
  );
};

export default LoadingSpinner;