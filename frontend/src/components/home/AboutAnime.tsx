import Charizard from "@/assets/charizard.png"
import { useEffect } from "react"
import { preload } from "react-dom";

export default function AboutAnime() {
7
    useEffect(() => {
        preload(Charizard, { as: 'image' });
    }, []);

    return (
        <div className="grid place-items-center flex-grow gap-5 xxs:gap-10 xs:gap-5 mt-10">
            <div>
                <div>
                    <h1 className="px-4 xxs:px-6 title-responsive text-center font-semibold">
                        The Amazing World of Pokémon
                    </h1>
                </div>
                <div className="grid px-2 xxs:px-4 xs:px-18 sm:px-22 xl:px-36 2xl:px-44 text-base text-center mt-2">
                    <p className="para-responsive">
                        Pokemon is a world of adventures where creatures and humans connect. 
                        Launched in 1996, its concept of capturing and battling monsters turned 
                        it into a global hit, expanding from games to movies. With over 800 
                        creatures, it continues to inspire with thrilling battles and heartfelt stories.
                    </p> 
                </div>
            </div>
            <div className="w-full">
                <img
                    src={""} 
                    alt="Charizard" 
                    className="px-10 xxs:px-0 xs:px-24"
                />
            </div>
        </div>
    )
}