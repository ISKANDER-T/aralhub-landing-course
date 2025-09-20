import { cn } from "@/shared/lib/css";
import { ContactForm } from "./contact-form";

export const Contact = () => {
  return (
    <div
      className={cn(
        "bg-[#ECECEC] rounded-[12px] px-3 py-12 font-inter flex flex-col",
        "lg:px-[356px] lg:py-32 lg:rounded-4xl lg:justify-center lg:items-center",
      )}
    >
      <div
        className={cn(
          "bg-white rounded-[12px] px-3 py-6 flex flex-col",
          "lg:flex-row lg:w-[1160px] lg:pt-12 lg:pl-12 lg:pr-[197px] lg:pb-16 lg:gap-[71px]",
        )}
        id="contact"
      >
        <div className={cn("lg:basis-[373px]")}>
          <div
            className={cn(
              "text-[20px] font-semibold leading-7 tracking-[-0.5px]",
            )}
          >
            Baylanıs
          </div>
          <div
            className={cn(
              "text-[18px] leading-[29px] tracking-[0%] mt-3 mb-12",
            )}
          >
            Sizge kurs tańlawda járdem beriwimiz hám kursqa jazıp qoyıwımız
            ushın, bizge kontakt maǵlıwmatlarıńızdı qaldırıń.
          </div>
        </div>
        <div className={cn("lg:basis-[471px]")}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
