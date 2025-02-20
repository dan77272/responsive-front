import React from 'react';
import MainButton from '../features/MainButton';

const ContentOne = (): JSX.Element => {
  return (
    <div className="relative flex h-full flex-col justify-between bg-secondary px-8 pb-4 text-lg text-customWhite sm:px-36 xl:flex-row xl:px-36 xl:pb-0">
      <div className="my-8 flex flex-col space-y-8 sm:my-12 sm:space-y-12 xl:my-16 xl:w-1/2 xl:space-y-16">
        <div className="space-y-4 sm:space-y-6">
          <p className="contentOneTitle">Who Is The Consultation For?</p>
          <p className="contentOneDescription">
            Chicago&apos;s free medical check-up and weight loss consultation is
            for Chicago residents who are looking to lose weight so they can
            live a long, vibrant and healthy life, while looking good and not
            breaking the bank.
          </p>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <p className="contentOneTitle">How Does It Work?</p>
          <p className="contentOneDescription">
            In this exam a certified nurse or physician will do various tests to
            check your overall health level and find which easy-to-do
            physician-supervised weight loss program will work best for you.
          </p>
        </div>
        <MainButton overwrite="" />
      </div>
      <div className="flex h-80 w-3/4 justify-center self-center sm:h-full sm:w-full xl:my-16 xl:ml-16 xl:w-1/2">
        <img src="/trainer.png" alt="Trainer" className="h-full" />
      </div>
    </div>
  );
};

export default ContentOne;
