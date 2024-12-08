// src/components/ui/card.jsx
import React from "react";
import Holland from '../../assets/Noordholland.webp'

export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white w-full md:250px lg:w-[230px] xl:w-[290px] relative ${className}`}>
        {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={`px-4 ${className}`}>
      {children}
    </div>
  );
};


// export const Tenniscard = () =>{
//     return(
//         <div className={`bg-white w-full md:250px lg:w-[230px] xl:w-[290px] relative ${className}`}>
//             {children}
//         </div>
//     )
// }

// export const TennisCardContent = ({ children, className }) => {
//     return (
//       <div className={`p-4 ${className}`}>
//         {children}
//       </div>
//     );
//   };
  