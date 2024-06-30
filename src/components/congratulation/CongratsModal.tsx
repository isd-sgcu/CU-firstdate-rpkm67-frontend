import CongratsPopup from '@/components/congratulation/CongratsPopup';
import NotificationPopup from '@/components/congratulation/NotificationPopup';

interface CongratsModalProps {
  score: number;
  handleBack: () => void;
  handleSubmit: () => void;
}

const CongratsModal: React.FC<CongratsModalProps> = ({
  score,
  handleBack,
  handleSubmit,
}) => {
  const isEnough = score >= 6;
  return (
    <div className="w-[calc(100vh*(72/156)*(9/10))] h-full">
      {isEnough ? (
        <CongratsPopup
          score={score}
          handleBack={handleBack}
          handleSubmit={handleSubmit}
        />
      ) : (
        <NotificationPopup handleBack={handleBack} />
      )}
    </div>
  );
};

export default CongratsModal;
