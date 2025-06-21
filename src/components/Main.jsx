import bannerImg from "../assets/banner-pic.jpg";
import ContentSection from "./ContentSection";

export default function Main() {
  return (
    <main className="flex-grow flex flex-col h-screen">
      <section>
        <div className="relative w-full h-[312px] lg:h-[600px]">
          <div
            className="w-full h-full bg-[length:250%] bg-[position:60%_40%]   lg:bg-[position:70%_45%] lg:bg-[length:190%]"
            style={{
              backgroundImage: `url(${bannerImg})`,
            }}
          ></div>

          <div className="absolute left-0 right-6 bottom-6 lg:right-12 lg:bottom-12 flex flex-col space-y-2">
            <div className=" text-white font-bold text-5xl text-right">
              白頭翁 (Chinese bulbul)
            </div>
            <div className="text-white font-normal text-base text-right">
              又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約
              8~10 年。
            </div>
          </div>
        </div>
      </section>

      <section className="flex-1">
        <div className="bg-[#dbcdbd] w-full h-full py-[60px] space-y-12  px-12 lg:px-[60px] flex flex-col xl:flex-row justify-center lg:space-x-12">
          <ContentSection
            title="外觀"
            text="白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。"
          />

          <ContentSection
            title="棲地"
            text="白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。"
          />

          <ContentSection
            title="食性"
            text="以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。(後頭部)更潔白，所以又叫「白頭翁」。"
          />
        </div>
      </section>
    </main>
  );
}
