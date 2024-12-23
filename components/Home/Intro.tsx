import Paragraph from "@/components/shared/Paragraph";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Intro = () => {
  return (
    <section className="md:py-8 py-3 space-y-8">
      <Title>
        Hai, Hai, Saya Thomas Andri Hutomo <span className="text-5xl">👻</span>
      </Title>
      <Paragraph>
        Situs ini berisi informasi tentang saya, tulisan, opini dan kebanyakan
        adalah dokumentasi untuk saya pribadi ketika sedang belajar atau
        membagikan sesuatu. Untuk mendapatkan informasi yang sifatnya cepat,
        silakan ikuti saya di Instagram{" "}
        <a
          href="https://instagram.com/youryreborn"
          target="_blank"
          className="text-blue-500 font-medium"
        >
          @youryreborn
        </a>
        .
        <br />
        <br />
        Jika ingin menghubungi saya, silakan menuju ke{" "}
        <Link href="/contact" className="text-blue-500 font-medium">
          halaman kontak.
        </Link>
      </Paragraph>
      <Link href="/about">
        <Button className=" mt-[2rem] font-light" variant={"secondary"}>
          Learn More About Me
        </Button>
      </Link>
      <hr />
    </section>
  );
};

export default Intro;
