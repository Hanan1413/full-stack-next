import { Separator } from "../ui/separator";


const SectionTitle = ({text}: {text:string}) => {
  return (
    <div>
       <h2 className="text-xl font-medium tracking-wider capitalize mb-8 mt-36">
        {text}
       </h2>
       <Separator />
    </div>
  )
}

export default SectionTitle;
