import { Button } from "../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import AboutApiButton  from "./AboutApiAButton";
import PikachuImage from "@/assets/picachu.png";
import { useScroll } from "./ScrollContext";
import { useEffect } from "react";
import { preload } from "react-dom";

export default function Hero() {

    const { setScrollLeft } = useScroll();

    useEffect(() => {
        preload(PikachuImage, { as: 'image'});
    }, []);

    return (
        <div className="grid gap-1">
            <div>
                <img 
                    src={PikachuImage} 
                    alt="Pikachu" 
                    className="px-14 xxs:px-10"
                />
            </div>
            <div className="mt-3">
                <h1 className="text-3xl xxs:text-4xl text-center font-semibold px-8 xxs:px-3">
                    Explore the Pokémon Universe!
                </h1>
            </div>
            <div>
                <p className="text-xl xxs:text-2xl text-center text-gray-800 px-4 xxs:px-2">
                    Find Pokémon stats and abilities with <span className="text-red-400 font-semibold">
                                                            PokeAPI.
                                                          </span>
                </p>
            </div>
            <div className="flex justify-center gap-3 mt-2">
                <div>
                    <AboutApiButton />
                </div>
                <div>
                    <Button
                        variant={"outline"}
                        size={"lg"}
                        onClick={() => setScrollLeft(true)}
                        className="flex items-center xxs:text-lg gap-0 transform transition-all duration-400 lg:hover:translate-x-3 font-semibold border-black rounded-4xl"
                    >
                        <p>
                            About Anime
                        </p>
                        <IoIosArrowRoundForward className="size-7" />
                    </Button>
                </div>
            </div>
        </div>   
    )
}