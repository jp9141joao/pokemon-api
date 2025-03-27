import Credits from "@/components/Credits"
import NavbarLoggedOut from "@/components/navbar/NavbarLoggedOut"
import  Content  from "@/components/home/Content"
import { ScrollProvider } from "@/components/home/ScrollContext";
import { useEffect } from "react";


export default function Home() {

    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };


        setVh();
        window.addEventListener('resize', setVh);
        return () => window.removeEventListener('resize', setVh)
    },[]);

    return (
        <div 
            className="
                flex flex-col lg:items-center
                min-w-[340px] min-h-[620px] xxs:min-h-[720px]
                h-[calc(var(--vh,1vh)*99)] sm:h-[calc(var(--vh,1vh)*95)] lg:h-[calc(var(--vh,1vh)*94)] xl:h-[calc(var(--vh,1vh)*95)]
                py-[0.8em] sm:py-[1.1em]
                overflow-hidden
            "
        >
            <ScrollProvider>
                <NavbarLoggedOut />
                <Content />
                <Credits />
            </ScrollProvider>
        </div>
    )
}