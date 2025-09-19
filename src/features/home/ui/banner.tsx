import { logo, logoText } from "@/shared/assets";
import { cn } from "@/shared/lib/css";

export const Banner = () => {
  return (
    <div
      className={cn(
        "bg-[#1AA189] rounded-[12px] px-3 pt-32 pb-[100px] flex flex-col gap-12",
        "lg:px-[356px] lg:py-[220px] lg:gap-[128px] lg:justify-center lg:items-center lg:rounded-4xl",
      )}
    >
      <div
        className={cn(
          "bg-[#BFFFEB] rounded-[12px] p-6 pb-[108px] flex relative",
          "lg:p-12 lg:pt-16 lg:pb-[135.61px] lg:w-[1160px]",
        )}
      >
        <img
          src={logoText}
          className={cn(
            "w-[146px] h-[57px]",
            "lg:w-[452.85px] lg:h-[178.39px]",
          )}
        />
        <img
          src={logo}
          className={cn(
            "w-[173px] h-[236px] absolute right-[2px] bottom-7",
            "lg:w-[346px] lg:h-[472px] lg:right-[61px] lg:bottom-14",
          )}
        />
      </div>
      <div
        className={cn(
          "flex flex-col gap-6 font-inter text-white",
          "lg:gap-16 lg:w-[1160px]",
        )}
      >
        <div
          className={cn(
            "flex flex-col leading-[100%] font-bold text-[32px]",
            "lg:text-[115px] lg:tracking-[-5%]",
          )}
        >
          <div>KÚSHLI BILIM</div>
          <div className={cn("flex justify-end opacity-50")}>REAL KÓNLIKPE</div>
        </div>
        <div
          className={cn(
            "font-medium text-[28px] leading-7 tracking-[-3%]",
            "lg:text-5xl lg:leading-[53px] lg:tracking-[-3px] lg:w-[570px]",
          )}
        >
          Tájiriybeli mentorlardan zamanagóy kásip sırların
          <br className="hidden lg:block" /> úyren
        </div>
      </div>
    </div>
  );
};
