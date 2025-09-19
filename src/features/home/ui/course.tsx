import { cn } from "@/shared/lib/css";
import { CourseCard } from "./course-card";
import {
  androeed1,
  androeed2,
  cyber1,
  cyber2,
  figma1,
  figma2,
  office1,
  office2,
  php1,
  php2,
  python1,
  python2,
  react1,
  react2,
} from "@/shared/assets";

export const Course = () => {
  return (
    <div
      className={cn(
        "bg-[#ECECEC] rounded-[12px] px-3 py-12 font-inter flex flex-col",
        "lg:px-[356px] lg:py-32 lg:rounded-4xl lg:justify-center lg:items-center",
      )}
    >
      <div className={cn("flex flex-col gap-6", "lg:w-[1160px] lg:gap-16")}>
        <div
          className={cn(
            "font-semibold text-2xl leading-8 tracking-[0%]",
            "lg:text-[38px] lg:leading-[59px]",
          )}
        >
          BIZIŃ KURSLARÍMÍZ
        </div>
        <CourseCard
          description="Bul kurs zamanagóy saytlar hám veb-qosımshalardı jaratıwdı úyreniwdi qálewshiler ushın say keledi. HTML, CSS, JavaScript programmalastırıw tillerin hám React sıyaqlı freymvorklar menen islesiwdi úyreniń. Sonday-aq, adaptiv vyorstka hám serverler menen islesiw boyınsha túsinikke iye bolasız."
          title="Frontend"
          img1={react1}
          img2={react2}
        />
        <CourseCard
          description="Kursta siz saytlar hám qosımshalardıń server tárepiniń logikasın islep shıǵıwdı, PHP programmalastırıw tilin, Laravel, API hám maǵlıwmatlar bazası menen islesiwdi úyrenesiz. Usılayınsha, zamanagóy veb-servislerdiń ishki strukturası haqqında túsinikke iye bolasız. "
          title="Backend"
          img1={php2}
          img2={php1}
        />
        <CourseCard
          description="Python’dı nolden baslap úyrenip, ózińizdiń birinshi programmańızdı jaratıń. Bul kurs backend programmalastırıw tiykarları, bibliotekalar menen islesiw, botlar hám skriptlerdi jazıwdı óz ishine aladı."
          title="Python"
          img1={python2}
          img2={python1}
        />
        <CourseCard
          description="UX/UI dizayn sırların nolden baslap úyreniń. Kursta Figma programmasınan paydalanıw, dizayn teoriyası, veb-saytlar hám mobil qosımshalardı proektlestiriw, qolaylı hám sulıw interfeyslerdi jaratıw, prototipler hám paydalanıwshı scenariysi menen islesiw úyretiledi."
          title="UX/UI dizayn"
          img1={figma2}
          img2={figma1}
        />
        <CourseCard
          description="Android sistemasındaǵı qurılmalar ushın mobil qosımshalardı jaratıw tiykarları: Java/Kotlin, Android Studio menen islesiw, UI‑komponentler hám qosımshanı Google Play’de járiyalaw — bulardıń bárshesi Android kursında úyretiledi. Kurs barısında ózińizdiń dáslepki mobil qosımshańızdı jaratasız."
          title="Android"
          img1={androeed2}
          img2={androeed1}
        />
        <CourseCard
          description="Bul kurs kiberhújimler qay tárizde ámelge asırılıwı hám olardan qorǵanıw jolların úyreniwdi qálewshiler ushın. Kurs barısında siz maǵlıwmatlar qáwipsizligi, penetracion testlew quralları, tarmaqlar hám maǵlıwmatlardı qorǵaw metodları haqqında túsinikke iye bolasız."
          title="Kiberqáwipsizlik"
          img1={cyber2}
          img2={cyber1}
        />
        <CourseCard
          description="Kompyuterden paydalanıwdı endi úyrenip baslap atırǵanlar ushın ámeliy kurs. MS Office programmaları: Word, Excel, PowerPointlardan erkin paydalanıwdı úyreniń. Bul kurs mektep oqıwshıları, studentler hám jası úlken xızmetkerler ushın da say keledi."
          title="Kompyuter sawatxanlıǵı"
          img1={office2}
          img2={office1}
        />
      </div>
    </div>
  );
};
