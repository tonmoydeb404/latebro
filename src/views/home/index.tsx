import { Button } from "@/components/ui/button";
import { paths } from "@/router/paths";
import Link from "next/link";

type Props = {};

const HomeView = (_props: Props) => {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden py-24 lg:py-32">
        {/* Gradients */}
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
          <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background dark:opacity-10" />
        </div>
        {/* End Gradients */}
        <div className="relative z-10">
          <div className="container py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <p className="">Elevate your resume</p>
              {/* Title */}
              <div className="mt-5 max-w-2xl">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  Beautiful Resume Templates
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-3xl">
                <p className="text-xl text-muted-foreground">
                  Over 10+ fully customizable, resume templates you can drop
                  into your Job Applications and get your favourite ones.
                </p>
              </div>
              {/* Buttons */}
              <div className="mt-8 gap-3 flex justify-center">
                <Button size={"lg"} asChild>
                  <Link href={paths.resumes.root}>Get started</Link>
                </Button>
                <Button size={"lg"} variant={"outline"} asChild>
                  <Link href={paths.resumes.root}>Explore</Link>
                </Button>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
};

export default HomeView;
