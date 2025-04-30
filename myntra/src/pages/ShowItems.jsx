import React, { useContext } from 'react'
import DropDown from '../components/DropDown'
import { FaChevronDown } from "react-icons/fa";
import SingleItem from '../components/SingleItem';
import { MyContext } from '../App';


const ShowItems = () => {
    const context=useContext(MyContext)
    const handleItemEnter=(id)=>{
        // console.log("id is",id)
        if(id){

            context.setIsItem(id)
            context.setIsTrue(true)
        }

    }

    const handleItemLeave=()=>{
        context.setIsItem(null)
        context.setIsTrue(false)
    }
  return (
    <>
    <div className='flex gap-2 text-xs'>
        <div>home</div>/
        <div>clothing</div>/
        <div className='font-bold'>men T-shirts</div>
    </div>
    <div className='text-sm mt-3'>Men T-shirts <span className='opacity-59'>-212781 items</span></div>

    {/* for the large one */}

    <div className='flex h-full w-full mt-3 '>
        <div className="w-[20%] border-1 border-black h-200 ">
            <div className='h-15 w-full  text-[15px] text-left pt-3 border-b-1 border-black'>FILTERS</div>
        </div>
        <div className="w-[80%] border-1 border-black h-200  ">

        <div className='h-15 w-full text-left pt-3 border-b-1 border-black flex'>
            <div className='w-[70%] flex h-auto gap-2 pt-1'>
                <DropDown text="Bundles"></DropDown>
                <DropDown text="Country of Origin"></DropDown>
                <DropDown text="Size"></DropDown>
               
            </div>
            <div className='w-[30%] relative pl-20 '>
                <div className='w-[100%] h-10  text-xs border-1 border-gray-300 pt-3 pl-3  '>Sort by:Recommended
                    <span className='absolute right-4 top-4' ><FaChevronDown />
                    </span>
                </div>
            </div>
            </div>

            <div className='flex flex-wrap gap-10 justify-around pt-8 pl-6 pr-6'> 
                <div className=""  onMouseEnter={()=>handleItemEnter(1)} onMouseLeave={handleItemLeave} >
                <SingleItem  hoverId="1" brand="Overlays" price="Rs.1978" oldprice="Rs.4444"  description="one of the fascinating designs" discount="20% off" availability="only few left"/>

                </div>
                <div  onMouseEnter={()=>handleItemEnter(2)} onMouseLeave={handleItemLeave}>

                <SingleItem  hoverId="2" brand="overlays" price="Rs.2149" oldprice="Rs.3333"  description="one of the fascinating designs" discount="20% off" availability=""/>
                </div>
                <div  onMouseEnter={()=>handleItemEnter(3)} onMouseLeave={handleItemLeave}>
                <SingleItem  hoverId=""brand="CHKOKKO" price="Rs.995" oldprice="Rs.2222"  description="one of the fascinating designs" discount="" availability="only few left"/>
               </div>
               <div  onMouseEnter={()=>handleItemEnter(4)} onMouseLeave={handleItemLeave}>
                <SingleItem  hoverId={4} brand="CHKOKKO" price="Rs.899" oldprice="Rs.1111"  description="one of the fascinating designs" discount="20% off" availability=""/>
                </div>
                <div  onMouseEnter={()=>handleItemEnter(5)} onMouseLeave={handleItemLeave}>
                <SingleItem  hoverId={5} brand="LEVIS" price="Rs.2299" oldprice="Rs.4545" description="one of the fascinating designs"  discount="" availability=""/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ShowItems