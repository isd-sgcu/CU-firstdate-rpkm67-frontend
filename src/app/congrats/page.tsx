'use client';
import CongratsModal from '@/components/congratulation/CongratsModal';

export default function Map() {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col bg-2">
      <CongratsModal
        score={0}
        handleBack={() => {}}
        handleSubmit={() => {}}
      />
    </main>
  );
}
