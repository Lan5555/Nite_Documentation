import { CreateNode, SetChild, Style, Vanilla, Watch } from "../../lib/state"
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
    const imgHolder = CreateNode('div') as HTMLImageElement;
    Style(imgHolder,'avatar');
    const img = CreateNode('img') as HTMLImageElement;
    img.src = image ?? pic;
    Vanilla(img,{
        width:'100%',
        height:'100%',
        ObjectFit:'cover',
        borderRadius:'50%'
    })
    SetChild(imgHolder,img);

    Style(imgHolder,'circle flex-container shadow-dynamic');
    return imgHolder;
}
