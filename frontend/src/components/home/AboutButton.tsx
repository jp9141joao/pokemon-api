import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import PokeAPILogo from "@/assets/pokemon-unite.jpg"

export const AboutButton = () => (
    <Sheet>
        <SheetTrigger>
            <Button
                size={"lg"}
                className="xxs:text-lg rounded-4xl"
            >
                About API
            </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[90vh] rounded-t-4xl">
            <SheetHeader className="pb-0 xxs:pb-4">
                <SheetTitle className="text-xl xxs:text-4xl text-center text-white mt-6">
                    Discover the Ultimate Pokémon API
                </SheetTitle>
                <SheetDescription>
                    <div>
                        <p className="text-sm text-center text-white">
                            The PokeAPI is an open-source, RESTful API that provides detailed 
                            data about the Pokémon universe. It offers a wide range of information 
                            such as Pokémon species, abilities, moves, types, and habitats. The API 
                            is organized into several endpoints, each containing specific categories
                            of data like Pokémon stats, moves, evolutions, abilities, battle types, 
                            and regions. This API allows developers to access and integrate Pokémon-
                            related data into apps, games, or websites in an easy-to-use JSON format.
                        </p>
                    </div>
                </SheetDescription>
            </SheetHeader>
           <SheetFooter>
           <div className="h-[45vh] xxs:h-[60vh] overflow-hidden rounded-t-4xl">
                <img 
                    src={PokeAPILogo} 
                    alt="Noctali" 
                    className="w-full h-full object-cover object-[50%_45%]"
                />
            </div>

           </SheetFooter>
        </SheetContent>
    </Sheet>
)