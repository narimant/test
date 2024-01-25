
import { MdOutlineClose } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
type Dataprops={
    items:{textData:string,selected:boolean}[];
    display:boolean;
    setItems:{textData:string,selected:boolean}[] | any
}
const Data = ({items ,display,setItems}:Dataprops) => {
  
    const removeHandler=(index:number)=>{
        const newData=items.filter((item,index1)=>index1!==index)
      
      setItems(newData)
    }

    const selectHandler=(index:number)=>{
       const newItems:{textData:string,selected:boolean}[]=items.map((item , index1)=>{
        if(index1===index){
            item.selected=!item.selected
        }
        return item
       })
     
    setItems(newItems);
        
    }



    return (
        <div
    
        className={`${display ? 'block' : 'hidden'} no-scrollbar max-h-40 overflow-y-scroll border border-gray-200 rounded-lg mt-2 p-4 absolute w-full`}>
           {
            items.map((item,index)=>(
                <div className="py-1 flex justify-between items-center" key={index} >
                   <span className=" cursor-pointer" onClick={()=>selectHandler(index)}> {item.textData}</span>

                   <span className="flex justify-between items-center gap-2">
                   <span className="text-red-600 cursor-pointer" onClick={()=>removeHandler(index)}><MdOutlineClose /></span>
                    {item.selected && (<span className="text-green-600"><IoCheckmarkSharp /></span>)}
                   </span>
                </div>

            ))
           } 
        </div>
    );
};

export default Data;