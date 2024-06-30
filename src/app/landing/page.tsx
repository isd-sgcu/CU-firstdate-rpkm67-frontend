import Border from '@/components/Border';
import Image from 'next/image';
import sgcuLogo from '@public/landing/SGCU-logo.svg';
import Welcome from '@/components/Welcome';
import Link from 'next/link';

const page = () => {
  return (
    <main className="h-screen w-full flex justify-center items-start text-lg">
      <Border variant="dark-pink">
        <Image
          src={sgcuLogo}
          alt="sgcu-logo"
          className="w-10 mb-20 mt-4"
        />
        <Welcome
          containerClassName="my-0 mb-4"
          cuClassName="text-white text-4xl"
          welcomeClassName="text-white text-6xl"
        />
        <p className="text-center text-white mb-20">
          In honor of our wander,
          <br /> you are the answer.
        </p>
        <button className="bg-white py-2 px-20 rounded-md font-medium shadow-md mb-4">
          ลงทะเบียน
        </button>
        <p className="text-xs mb-20">*โปรดใช้Emailของจุฬาฯในการลงทะเบียน*</p>
        <section className="flex flex-col justify-center items-center font-medium">
          <p className="text-lg">เคยลงทะเบียนมาแล้ว?</p>
          <Link
            href={''}
            className="underline"
          >
            เข้าสู่ระบบ
          </Link>
        </section>
      </Border>
    </main>
  );
};

export default page;
