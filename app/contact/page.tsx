import Title from "@/components/shared/Title";
import SubTitle from "@/components/shared/SubTitle";
import Paragraph from "@/components/shared/Paragraph";
import SecurityKeys from "@/components/contact/SecurityKeys";

export default function Contact() {
  return (
    <div className=" px-5 md:px-0">
      <div className="container mx-auto max-w-5xl py-8">
        <div className="space-y-8">
          <Title>
            Get in Touch <span className="text-5xl">🤙</span>
          </Title>
          <Paragraph>
            Saya senang mendengar dari Anda! Apakah Anda memiliki pertanyaan,
            masukan, atau sekadar ingin menyapa, jangan ragu untuk menghubungi
            kami. Pemikiran dan pertanyaan Anda sangat penting bagi kami, dan
            kami di sini untuk membantu Anda dengan cara apa pun yang kami bisa.
          </Paragraph>
        </div>

        <div className="space-y-2 mt-6">
          <SubTitle>Security key</SubTitle>
          <div className="pt-3 pb-6">
            <hr />
          </div>
        </div>

        <SecurityKeys />

        <p className="text-lg font-light pt-6">
          You can use these keys to securely communicate with me or verify my
          signatures.
        </p>
      </div>
    </div>
  );
}
