import { createNode, setChild, Style, vanilla, Watch } from "../../lib/state"
import pic from '../../public/bg2.jpg';
import { MediaQuery } from "../hooks/mediaquery";
interface Props{
    image?:string
}
export const Avatar = ({image}:Props):HTMLImageElement => {
    const [mediaQuery,setMedia,observe]:any = Watch('desktop');
        MediaQuery({output:(media):any => {
            setMedia(media);
          
        }});
    const imgHolder = createNode('div') as HTMLImageElement;
    Style(imgHolder,'avatar');
    const img = createNode('img') as HTMLImageElement;
    img.src = image ?? pic;
    vanilla(img,{
        width:'100%',
        height:'100%',
        ObjectFit:'cover',
        borderRadius:'50%'
    })
    setChild(imgHolder,img);

    Style(imgHolder,'circle flex-container shadow-dynamic');
    return imgHolder;
}
