import React from 'react';

export const CiiLogo: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' }> = ({ className = '', size = 'md' }) => {
  const dimensions = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-16'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* High-fidelity Vector Representation of the CII Blue Shield / emblem */}
      <div className={`${dimensions[size]} aspect-[1.3] bg-[#002147] rounded-md flex flex-col items-center justify-center p-1 font-sans text-white font-black tracking-tighter leading-none shadow-sm`}>
        <span className="text-xl md:text-2xl italic tracking-tight font-extrabold select-none">CII</span>
        <div className="w-[85%] h-[2px] bg-white opacity-80 my-[1px]"></div>
        <span className="text-[5px] md:text-[6px] tracking-[0.1em] font-medium leading-none uppercase select-none">Est. 1895</span>
      </div>
      
      <div className="flex flex-col justify-center leading-tight">
        <span className="text-xs md:text-sm font-bold tracking-tight text-[#002147] font-display">
          Confederation of Indian Industry
        </span>
        <span className="text-[10px] text-[#0056b3] font-medium tracking-wide">
          Industry-Institute Collaboration Platform
        </span>
      </div>
    </div>
  );
};
