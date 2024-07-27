import React from 'react';

interface FrameProps {
  className?: string;
  onButtonClick: () => void;
  onRequestPermission: () => void;
}

const Frame: React.FC<FrameProps> = ({ className = "", onButtonClick, onRequestPermission }) => {
  return (
    <section className={`w-full max-w-[375px] flex flex-col items-center justify-start py-0 px-6 box-border text-center text-white font-inter ${className}`}>
      <div className="w-full flex flex-col items-center justify-start gap-[16px]">
        <h2 className="m-0 font-bold text-2xl leading-8">Lorem Ipsum...</h2>
        <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet.</p>
      </div>
      <button
        className="w-full h-[42px] mt-[60px] flex items-center justify-center shadow-md rounded-lg bg-[#1D103A] border-2 border-[#6434CE]"
        onClick={() => {
          onRequestPermission();
          onButtonClick();
        }}
      >
        <span className="text-base font-semibold text-white">Send Notification</span>
      </button>
    </section>
  );
}

export default Frame;
