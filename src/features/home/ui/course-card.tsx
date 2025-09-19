import { cn } from "@/shared/lib/css";

export const CourseCard = ({
  description,
  img1,
  img2,
  title,
}: {
  img1: string;
  img2: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-[12px] px-3 pt-32 pb-6 relative flex flex-col gap-3 font-inter",
        "lg:rounded-2xl lg:py-12 lg:pl-12 lg:pr-[98px] lg:flex-row",
      )}
    >
      <img src={img2} className={cn("absolute top-0 right-0", "lg:hidden")} />
      <img
        src={img1}
        className={cn("hidden", "lg:absolute lg:block lg:bottom-0")}
      />
      <div
        className={cn(
          "text-[20px] z-10 leading-7 font-semibold tracking-[-0.5px] text-[#000000] mb-[19px]",
          "lg:text-[28px] lg:leading-[35px] lg:basis-1/2",
        )}
      >
        {title}
      </div>
      <div
        className={cn("flex flex-col gap-[31px]", "lg:gap-[53px] lg:basis-1/2")}
      >
        <div className={cn("text-lg leading-[29px] tracking-[0%]")}>
          {description}
        </div>
        <div
          className={cn(
            "bg-[#13705E] text-white px-6 py-[14px] text-[14px] leading-5 tracking-[0%] font-medium rounded-[100px] flex justify-center items-center gap-[10px] w-[167px]",
          )}
        >
          KURSQA JAZÍLÍW
        </div>
      </div>
    </div>
  );
};
