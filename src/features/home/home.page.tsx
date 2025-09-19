import { cn } from "@/shared/lib/css";
import { Header } from "./ui/header";
import { Banner } from "./ui/banner";
import { Course } from "./ui/course";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className={cn("flex flex-col px-1 py-2 gap-2", "lg:p-6 lg:gap-6")}>
        <Banner />
        <Course />
      </div>
    </>
  );
};

export const Component = HomePage;
