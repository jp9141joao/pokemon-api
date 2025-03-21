import CharizardImage from "@/assets/charizard.png"
import { useEffect } from "react"
import { preload } from "react-dom";

export default function AboutAnime() {
7
    useEffect(() => {
        preload(CharizardImage, { as: 'image' });
    }, []);

    return (
        <div className="grid place-items-center flex-grow gap-5 xxs:gap-10 mt-10">
            <div>
                <div>
                    <h1 className="text-3xl text-center font-semibold">
                        The World of Pokémon
                    </h1>
                </div>
                <div className="grid gap-3 text-base text-center mt-2">
                    <p>
                        Pokemon is a world where creatures and humans share endless adventures. 
                        Launched in 1996 by Satoshi Tajiri and Ken Sugimori, its idea of capturing 
                        and battling unique monsters quickly became a global hit, expanding from 
                        games to movies.    With over 800 creatures and deep cultural impact, Pokemon
                        continues to inspire with thrilling battles and heartfelt stories that celebrate 
                        exploration and teamwork.

                    </p> 
                </div>
            </div>
            <div className="w-full">
                <img 
                    src={CharizardImage} 
                    alt="Charizard" 
                    className="px-10 xxs:px-0"
                />
            </div>
        </div>
    )
}