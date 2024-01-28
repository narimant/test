
import { useEffect, useRef, useState } from 'react';
import Data from './Data';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
type data={
  items:{textData:string,selected:boolean}[];
}[]|any

const InputElement = () => {
    const [textData,setTextData]=useState("")
    const [data,setData]=useState<data | []>([])
    const [showData,setShaowData]=useState(false)
    const refmenu=useRef<HTMLDivElement>(null);

    const changeHandler=(event: React.ChangeEvent<HTMLInputElement>):void=>{
            setTextData(event.target.value)       
    }
    const keyDownHandler=(event:React.KeyboardEvent<HTMLInputElement>):void=>{
        if(event.key==="Enter"){
          const newText={textData,selected:false}
          console.log(newText);
            setData([...data,newText]);
            setTextData('');
        }
    }

  useEffect(()=>{
    const closeDropdown =(event:MouseEvent |any )=>{
        if( refmenu.current &&!refmenu.current.contains(event.target)){ 
          setShaowData(false);
        }    
    }
    document.body.addEventListener('mousedown',closeDropdown)
    return()=>{
      document.removeEventListener('mousedown',closeDropdown)
    }
  },[])



    return (
        <div className='h-screen w-screen flex justify-center items-center'>
           <div className='relative' ref={refmenu}>
           <input type='text'  value={textData} onChange={changeHandler} onKeyDown={keyDownHandler} className='border border-gray-200 rounded-lg py-2 w-64'/>
           <button    onClick={()=>setShaowData(!showData)}>
           {
            showData ?(
              <IoIosArrowDown  className='absolute right-2 top-2 cursor-pointer  h-6 w-6 '   />
            ) :(
             <IoIosArrowUp  className='absolute right-2 top-2 cursor-pointer  h-6 w-6 ' />
            )
           }
           </button>
           
          

         
           <Data items={data} display={showData} setItems={setData} />
       

           </div>
         
        </div>
    );
};

export default InputElement;