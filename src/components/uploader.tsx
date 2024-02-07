import Image, { StaticImageData } from "next/image"
import { FaX } from "react-icons/fa6"
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

interface IProps {
    imageSrc: StaticImageData,
    imageAlt: string,
    fileName: string,
    fileSize: string,
    percent: number,
    status: string,
    handleClick: () => void
}

export default function Uploader({imageSrc, imageAlt, fileName, fileSize, percent, status, handleClick}:IProps) {
    return (
        <div className="uploader">
            <div className="top">
                
                <div className="text">
                    <Image src={imageSrc} alt={imageAlt}/>
                    <div>
                        <p className="basic_text">{fileName}</p><p className="basic_text">{fileSize}</p>
                    </div>
                </div>
                <div className="end">
                    <button onClick={handleClick}><FaX/></button>
                    <p>Carregando</p>
                </div>
            </div>
            <div className="bottom">
                <Progress theme={{
                }} percent={percent} status={status} />
            </div>
        </div>
    )
}