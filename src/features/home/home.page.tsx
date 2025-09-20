import { cn } from "@/shared/lib/css";
import { Header } from "./ui/header";
import { Banner } from "./ui/banner";
import { Course } from "./ui/course";
import { Mentors } from "./ui/mentor";
import { Contact } from "./ui/contact";
import { Footer } from "./ui/footer";
import { MapIframe } from "./ui/map";

const HomePage = () => {
  return (
    <>
      <Header />
      <div
        className={cn(
          "flex flex-col px-1 py-2 gap-2",
          "lg:p-6 lg:gap-6 font-inter",
        )}
      >
        <Banner />
        <Course />
        <Mentors />
        <Contact />
        <MapIframe />
      </div>
      <Footer />
    </>
  );
};

export const Component = HomePage;
