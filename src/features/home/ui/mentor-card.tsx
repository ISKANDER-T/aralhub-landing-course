import { cn } from "@/shared/lib/css";

export const MentorCard = ({
  course,
  imgUrl,
  name,
}: {
  imgUrl: string;
  name: string;
  course: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white pt-[30px] pb-9 flex flex-col pl-[50px] pr-[52px] justify-center items-center",
        "lg:pl-[58px] lg:pr-[59px] lg:pb-[30px]",
      )}
    >
      <img src={imgUrl} className={cn("rounded-[500px] mb-9")} />
      <div
        className={cn(
          "text-[28px] leading-[125%] tracking-[-0.5px] font-semibold mb-3 text-center",
          "lg:text-[32px]",
        )}
      >
        {name}
      </div>
      <div
        className={cn(
          "text-[18px] leading-6 tracking-[0%] text-[#1C1F1D] opacity-60",
        )}
      >
        {course}
      </div>
    </div>
  );
};
