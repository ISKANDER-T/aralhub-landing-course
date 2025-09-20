import { cn } from "@/shared/lib/css";
import { MentorCard } from "./mentor-card";
import {
  Alimjan,
  Atabek,
  Babur,
  Bektemir,
  Darmanbek,
  Timur,
} from "@/shared/assets";

export const Mentors = () => {
  return (
    <div
      className={cn(
        "bg-[#1AA189] px-3 py-12 rounded-[12px] flex flex-col gap-6",
        "lg:px-[356px] py-32 lg:gap-16 lg:justify-center lg:items-center",
      )}
      id="mentor"
    >
      <div
        className={cn(
          "font-semibold text-2xl leading-8 tracking-[0%] text-white",
          "lg:text-[38px] lg:leading-[59px] lg:w-[1160px]",
        )}
      >
        MENTORLARÍMÍZ
      </div>
      <div
        className={cn(
          "flex flex-col gap-3",
          "lg:grid lg:grid-cols-3 lg:gap-5 lg:w-[1160px]",
        )}
      >
        <MentorCard
          imgUrl={Darmanbek}
          course="Frontend"
          name="Darmanbek Paxratdinov"
        />
        <MentorCard
          imgUrl={Bektemir}
          course="Backend"
          name="Bektemir Iztileuov"
        />
        <MentorCard imgUrl={Babur} course="Python" name="Babur Paraxatov" />
        <MentorCard
          imgUrl={Timur}
          course="UX/UI dizayn"
          name="Timur Daniyarov"
        />
        <MentorCard
          imgUrl={Alimjan}
          course="Python/Kiberqáwipsizlik"
          name="Alimjan Imniaminov"
        />
        <MentorCard imgUrl={Atabek} course="Android" name="Atabek Ótebaev" />
      </div>
    </div>
  );
};
