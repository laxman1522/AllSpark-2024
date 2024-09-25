import ComingSoon from '@/components/ComingSoon/ComingSoon';
import Header from '@/components/Header/Header';
import React from 'react';

const CommitteeContainer = () => {
  return (
    <div className="h-screen relative">
      <Header />
      <div
        id="committee-section"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <ComingSoon />
      </div>
    </div>
  );
};

CommitteeContainer.displayName = 'CommitteeContainer';
export default CommitteeContainer;
