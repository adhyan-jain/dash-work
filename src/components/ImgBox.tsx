import Image from "next/image";

type Props = {
  text: string;
  img: string;
  title: string;
  selected?: boolean;
  onClick?: () => void;
};

export default function ImgBox({ text, img, title, selected = false, onClick }: Props) {
  return (
    <div
      className={`flex-1 h-[120px] sm:h-[180px] md:h-[250px] 00 min-w-0 border-2 rounded-3xl m-1 sm:m-2 border-emerald-500 flex flex-col justify-around col-span-2 row-span-2 cursor-pointer transition-colors duration-200 ${selected ? "bg-gray-700" : "bg-transparent"}`}
      onClick={onClick}
    >
      <h3 className="text-center font-bold my-2 text-[10px] sm:text-sm md:text-lg">
        {text}
      </h3>
      <Image
        src={img}
        alt={title}
        width={150}
        height={150}
        className="mx-auto h-[40px] sm:h-[60px] md:h-[100px] w-auto aspect-1/1" />
    </div>
  );
}
