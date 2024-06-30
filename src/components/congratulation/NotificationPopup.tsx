'use client';

import ConditionContext from '@/components/congratulation/ConditionContext';
import NotificationContext from '@/components/congratulation/NotificationContext';
import NotiBg from '@public/congrats/Noti.png';
import { useState } from 'react';

interface NotificationPopupProps {
  handleBack: () => void;
}
const NotificationPopup: React.FC<NotificationPopupProps> = ({
  handleBack,
}) => {
  const [showCondition, setShowCondition] = useState(false);
  const handleOnClickShowCondition = () => {
    setShowCondition(true);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${NotiBg.src})`,
        backgroundSize: '100% 100%',
      }}
      className={`w-full ${showCondition ? 'aspect-[390/589]' : 'aspect-[333/535]'} bg-no-repeat bg-center flex flex-col items-center py-[16%]`}
    >
      {showCondition ? (
        <ConditionContext />
      ) : (
        <NotificationContext
          handleOnClickShowCondition={handleOnClickShowCondition}
          handleBack={handleBack}
        />
      )}
    </div>
  );
};

export default NotificationPopup;
