import { instagram, logoFull, telegram } from "@/shared/assets";
import { cn } from "@/shared/lib/css";

export const Footer = () => {
  return (
    <div
      className={cn(
        "px-4 py-12 bg-[#123A32] text-white",
        "lg:py-16 lg:px-[380px]",
      )}
    >
      <div className={cn("flex flex-col gap-12", "lg:flex-row")}>
        <div>
          <img src={logoFull} className={cn("w-[156px] mb-6")} />
          <div className={cn("flex flex-col gap-2  opacity-70")}>
            <div
              className={cn(
                "text-[16px] leading-[22px] tracking-[0%]",
                "lg:w-[200px]",
              )}
            >
              ARAL HUB IT-OQÍW ORAYÍ
            </div>
            <div className={cn("flex flex-row gap-2 ")}>
              <img src={instagram} className={cn("lg:w-6")} />{" "}
              <img src={telegram} className={cn("w-[21px]", "lg:w-6")} />
            </div>
          </div>
        </div>
        <div className={cn("lg:ml-[292px] lg:mr-5 lg:w-[275px]")}>
          <div className={cn("text-[20px] leading-7 tracking-[0%] mb-6")}>
            Bólimler
          </div>
          <div
            className={cn(
              "flex flex-col gap-2 opacity-70 leading-[22px] text-[16px] tracking-[0%]",
            )}
          >
            <div>Bas bet</div>
            <div>Kurslar</div>
            <div>Mentorlar</div>
            <div>Baylanıs</div>
          </div>
        </div>
        <div className={cn("w-[373px]")}>
          <div className={cn("text-[20px] leading-7 tracking-[0%] mb-6")}>
            Kurslar
          </div>
          <div
            className={cn(
              "flex flex-col gap-2 opacity-70 leading-[22px] text-[16px] tracking-[0%]",
            )}
          >
            <div>Frontend</div>
            <div>Backend</div>
            <div>Python</div>
            <div>UX/UI dizayn</div>
            <div>Android</div>
            <div>Kiberqáwipsizlik</div>
            <div>Kompyuter sawatxanlıǵı</div>
          </div>
        </div>
      </div>
    </div>
  );
};
