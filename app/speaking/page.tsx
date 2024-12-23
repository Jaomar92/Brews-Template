import Paragraph from "@/components/shared/Paragraph";
import Title from "@/components/shared/Title";
import CardSpeak from "@/components/Speaking/CardSpeak";
import React from "react";

const Data = [
  {
    title:
      "Smart working at the Information and Communication Technology Division of Polri (KADIV TIK POLRI)",
    content: "Indonesian National Police - DKI Jakarta, 2024",
  },
  {
    title: "Vulnerabilities Presentation Reports 2024",
    content: "Universitas Dinamika - East Java Surabaya, 2024",
  },
  {
    title: "Kampanye Literasi Jaga Ruang Siber 2022",
    content:
      "State Cyber and Crypto Agency (BSSN) - Institut Teknologi Del North Sumatra, 2022",
  },
  {
    title: "Edukasi Penilaian Kerentanan Siber 2021",
    content: "State Cyber and Crypto Agency (BSSN) - West Java, 2021",
  },
  {
    title: "Menjawab Tantangan Kapabilitas Siber Indonesia 2021",
    content: "State Cyber and Crypto Agency (BSSN) - West Java, 2020",
  },
];

const Speacking = () => {
  return (
    <div className="dark:bg-neutral-950 bg-neutral-100 px-5 md:px-0">
      <div className="contaienr mx-auto max-w-5xl py-8">
        <div className="space-y-8 ">
          <Title>
            Speaking <span className="text-5xl">📢</span>
          </Title>
          <Paragraph>
            Selain bekerja seperti manusia alien lainnya terkadang saya mengisi
            waktu luang dengan menjadi pembicara ketika diundang oleh sebuah
            lembaga, perusahaan atau organisasi masyarakat sipil. Informasi
            mengenai acara yang pernah menghadirkan saya sebagai pembicara
            tersedia di halaman ini dan akan selalu diperbaharui secara berkala.
          </Paragraph>
        </div>
        <div className="space-y-3 mt-6">
          {Data.map((items, i) => (
            <CardSpeak key={i} title={items.title} content={items.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speacking;
