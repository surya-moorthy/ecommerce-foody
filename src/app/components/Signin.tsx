import { cn } from "@/lib/utils"

export const SigninButton = ({className,title} :{className : string,title : string } ) =>{
    return (
        <button className={cn("px-8 py-2 rounded-full bg-gradient-to-b text-stone-950 focus:ring-2 hover:shadow-xl transition duration-200",className)} >
              {title}
       </button>
    )
}

export const SigninCard = () => {

} 