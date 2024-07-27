'use client';
import Image from "next/image";
import Frame from "../components/Frame";
import { useState, useEffect } from "react";

export default function Home() {
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      setNotificationPermission(Notification.permission);
    }
  }, []);

  const requestNotificationPermission = async () => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      const permission = await Notification.requestPermission();
      setNotificationPermission(permission);
    }
  };

  const sendNotification = () => {
    if (notificationPermission === 'granted') {
      new Notification('Custom Notification Title', {
        body: 'This is a custom notification message.',
        icon: '/icon512_maskable.png',
      });
    } else {
      console.log('Notification permission is not granted.');
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#2c2143] to-black flex flex-col items-center justify-start pt-8 pb-[60px] gap-[106px] overflow-x-hidden">
      <section className="w-full flex flex-col items-center justify-start gap-[28px] text-base text-white font-inter px-4">
        <div className="w-full flex justify-center py-0 px-5">
          <span className="font-medium text-white">Hola!</span>
        </div>
        <div className="w-full max-w-[392px] h-[392px] relative flex items-center justify-center mx-auto">
          <div className="w-full h-full relative flex items-center justify-center">
            <Image
              className="w-auto h-auto object-contain scale-[1.051]"
              alt="Background"
              src="/error-msgillustration.svg"
              layout="fill"
            />
          </div>
          <div className="absolute top-[145px] w-[95px] h-[102.1px] flex items-center justify-center">
            <Image
              className="scale-[2.000] border-1 w-auto h-auto"
              loading="lazy"
              alt="Notification Icon"
              src="/vector.svg"
              width={95}
              height={102.1}
            />
          </div>
        </div>
      </section>
      <Frame onButtonClick={sendNotification} onRequestPermission={requestNotificationPermission} />
    </div>
  );
}
