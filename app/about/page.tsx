import Paragraph from "@/components/shared/Paragraph";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import React from "react";
import Hero from "@/public/Brew-profile-2.png";
import SubTitle from "@/components/shared/SubTitle";
import Hackboard from "@/public/hackerboard.png";
import Insecbos from "@/public/insecure.webp";
import Image from "next/image";

const About = () => {
  return (
    <div className="dark:bg-neutral-950 rounded-5xl pb-24 px-5 md:px-0">
      <div className="container mx-auto max-w-5xl py-8">
        <div className="flex items-center justify-center">
          <div className="relative h-[15rem] w-[15rem]  rounded-full my-8 ">
            <Image
              fill
              src={Hero}
              alt="Thomas Brew"
              className="object-cover object-bottom relative  rounded-full"
            />
          </div>
        </div>
        <div className="space-y-8">
          <Title>
            About, Brew <span className="text-5xl">🕹️</span>
          </Title>
          <Paragraph>
            Thomas ANDRI Wijayanto adalah seorang konsultan kemanan siber yang
            saat ini sedang membantu beberapa perusahaan di Jakarta. Pada tahun
            2014 ia mendirikan{" "}
            <a
              href="https://pwn0sec.com/"
              target="_blank"
              className="text-blue-500 font-medium"
            >
              PT. Pwn0sec Technologies Ltd
            </a>
            , sebuah komunitas prusahaan untuk mewadahi individu yang tertarik
            dengan ethical hacking.
          </Paragraph>
          <Paragraph>
            Seorang anak muda yang memiliki rasa ingin tahu yang tinggi.
            Memiliki pengalaman sebagai Cyber Security Expert & Digital
            Strategist selama lebih dari 11 tahun. Saat ini menjadi Security
            Consultant Keamanan untuk beberapa perusahaan di luar termasuk (US,
            Canada, Belanda, Singapore). Sangat menikmati hidupnya saat ini
            sebagai pekerja jarak jauh penuh waktu.
          </Paragraph>
          <Paragraph>
            Kedua hal ini sekarang mungkin sangat melekat pada saya secara
            pribadi. Karena saya memiliki rasa ingin tahu yang sangat tinggi,
            saya sering menghabiskan waktu melakukan apa saja yang menurut saya
            bisa menghabiskan waktu luang saya. Saat ini saya aktif menulis
            tentang dunia keamanan cyber di Pwn0sec. Selain memiliki hobi
            menulis, saat ini saya juga menjadi Senior Penetration Tester di
            beberapa perusahaan. Berawal dari sebuah kecelakaan, kini secara
            resmi menarik saya untuk menjadi seorang Cybersecurity Expert.
            Menjadi Pemuda Siber yang membuat saya bebas, tidak perlu hidup
            monoton dan harus bekerja setiap hari di kantor. Pada dasarnya saya
            bisa bekerja dimana saja. Ya, saya adalah pekerja full-time waktu.
          </Paragraph>
        </div>
        <div className="pt-8 flex flex-col gap-3">
          <SubTitle>Other Resources</SubTitle>
          <hr />
          <a
            href="https://hackerboard.pwn0sec.com/"
            target="_blank"
            className="flex items-center group"
          >
            <div className="h-12 w-12 relative left-4">
              <Image
                fill
                src={Hackboard}
                alt="HackerBoard"
                className="object-cover  rounded-full relative left-[6px]"
              />
            </div>
            <Button
              variant="link"
              className="text-xl pl-[40px] group-hover:underline"
            >
              Hackerboard
            </Button>
          </a>
          <a
            target="_blank"
            href=" https://intelegencesecuritybos.pwn0sec.com/"
            className="flex items-center group"
          >
            <div className="relative h-20 w-20 left-1">
              <Image
                fill
                src={Insecbos}
                alt="HackerBoard"
                className="object-cover rounded-full relative left-[-10px]"
                style={{ mixBlendMode: "difference" }}
              />
            </div>
            <Button
              variant="link"
              className="text-xl px-2 group-hover:underline"
            >
              Insecbos
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
