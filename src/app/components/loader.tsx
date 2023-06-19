import LoadingGif from "../../../public/assets/loader.gif";
import Image from "next/image";

export default function AnimationLoader() {
    return (
        <div className="flex h-screen justify-center items-center">
            <Image className="w-[150px] h-[150px] mb-4 select-none" src={LoadingGif} alt="My SVG File" width={150} height={150} />
        </div>
    )
}