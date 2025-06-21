export default function ContentSection({ title, text }) {
  return (
    <div className="flex justify-center items-start h-fit">
      <div className="relative w-[50px] h-[98px] [writing-mode:vertical-lr] [text-orientation:upright] mr-6">
        <h2 className="absolute top-0.5 font-bold text-[34px] leading-none [letter-spacing:0.2em]">
          {title}
        </h2>
        <div className="absolute right-[2px] bottom-[3px] w-[25px] h-[25px] border-8 border-[#AA6666]/60 rounded-full "></div>
      </div>

      <p className="font-normal text-base w-[205px] leading-[1.2]">{text}</p>
    </div>
  );
}
