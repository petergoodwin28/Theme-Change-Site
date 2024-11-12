"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import { Card, CardContent } from "@/components/ui/card";

export default function App() {
  const { theme } = useTheme(); // Get the current theme from the useTheme hook
  const [currTheme, setCurrTheme] = useState<ThemeName>("number-marine"); // Define the initial state

  type ThemeName = "battle" | "number-marine" | "gold";

  const theme_images: Record<ThemeName, string> = {
    battle: `url('/battleSpaceMarines.jpg')`,
    "number-marine": `url('/14772577.jpg')`,
    gold: `url('/goldEditionSpaceMarine2.jpg')`,
  };

  useEffect(() => {
    if (theme) {
      // Update the theme class on the body element
      document.body.classList.remove(currTheme);
      setCurrTheme(theme as ThemeName);
      document.body.classList.add(theme);
    }
  }, [theme, currTheme]);

  const imgValue = theme_images[currTheme] || theme_images["number-marine"]; // Fallback to a default image if needed

  return (
    <div className="overflow-x-hidden">
      {/* <div
        className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center"
        style={{ backgroundImage: imgValue }}
      >
        <h1  className="text-[200px] font-bold text-opacity-0">
           For the Emperor! 
          In the Grim, Dark Future, There is Only War.
        </h1>
      </div> */}

      <Hero image={imgValue}></Hero>

      <div id="about" className="flex flex-col items-center justify-around border-t-2 mt-20 mb-52">
        <h1>This site uses shadcn/ui and their darkmode.</h1>

        <h1>
          I prefer it to tailwindcss dark mode as the configuration is easier in
          my opinion.
        </h1>

        <h1>
          It is simply meant to showcase some styling and some css animations
          and transitions.
        </h1>

        <h1>I hope you like it!</h1>
      </div>

      <div className="slide-across flex flex-col gap-y-20">
        <Card className="w-fit">
          <CardContent>Hello There</CardContent>
        </Card>
        <Card className="w-fit">
          <CardContent>Hello There</CardContent>
        </Card>
        <Card className="w-fit">
          <CardContent>Hello There</CardContent>
        </Card>
      </div>

      <div className="h-96 mt-40 mb-40"></div>


      {/* <p className="mt-96">Input</p>
      <Input type="email" placeholder="Email" />

      <p className="mt-80">Hover card</p>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@nextjs</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="flex items-center pt-2">
                +
                <span className="text-xs text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>

      <p className="mt-80">Slider</p>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-[60%]")}
      />
      */}
    </div> 
  );
}
