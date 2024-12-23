import Paragraph from "@/components/shared/Paragraph";
import Title from "@/components/shared/Title";
import Image from "next/image";

const Fakeclients = [
  {
    name: "Malaysian Airlines",
    img: "/MAS-Logo.png",
  },
  {
    name: "Wells Fargo",
    img: "/Wells-Fargo-logo-ii.png",
  },
  {
    name: "GOV.UK",
    img: "/gov-uk.png",
  },
  {
    name: "CloudFlare",
    img: "/Cloudflare-Logo.png",
  },
  {
    name: "IBM",
    img: "/ibm-logo.png",
  },
  {
    name: "U.S Department of Defense",
    img: "/DoD-Logo.png",
  },
  {
    name: "Standford University",
    img: "/SU-logo.png",
  },
  {
    name: "Hostinger",
    img: "/Hostinger_Logo.png",
  },
  {
    name: "GRAB",
    img: "/grab-logo.png",
  },
  {
    name: "Brave",
    img: "/Brave_Logo.svg",
  },
  {
    name: "Starling Bank",
    img: "/Starling_Bank_Logo.png",
  },
  {
    name: "Logitech",
    img: "/logitech-g-logo.png",
  },
];

const Clients = () => {
  return (
    <div className="dark:bg-neutral-950 bg-neutral-100 px-5 md:px-0">
      <div className="container mx-auto max-w-5xl py-8">
        <div className="space-y-8">
          <Title>
            Clients <span className="text-5xl">🔥</span>
          </Title>
          <Paragraph>
            Hingga saat ini saya sudah menyelesaikan ribuan pekerjaan yang
            berhubungan dengan keamanan dari puluhan perusahaan, baik itu lokal
            ataupun yang bukan di Indonesia. Informasi tentang perusahaan atau
            organisasi yang pernah pernah atau masih bekerja sama dengan saya
            secara langsung atau melalui pihak ketiga hingga hari ini bisa
            ditemukan di halaman ini. Halaman ini akan terus diperbaharui ketika
            saya sudah menyelesaikan pekerjaan lainnya.
          </Paragraph>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-8 place-items-center">
          {Fakeclients.map((item, i) => (
            <div
              key={i}
              className="w-full h-full bg-zinc-100 dark:bg-slate-200 py-6 rounded-3xl shadow-xl"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={200}
                height={120}
                className="h-[120px] w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
