import React from 'react'
import { FaTshirt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { FaVideo } from "react-icons/fa";
import ServiceCard from './ServiceCard';
import { CgGym } from "react-icons/cg";
const Services  = () => {
  return (
    <div className=' w-full h-auto bg-zinc-900 flex flex-wrap'>
        <ServiceCard
        title="Changing Room"
        desc="Privacy matters"
        icon={FaTshirt}
            
        />
        <ServiceCard
        title="Fitness Lovers"
        desc="Healthy Community"
        icon={HiUserGroup}
            
        />
        <ServiceCard
        title="Enthusiastic Team"
        desc="Achieve Goals"
        icon={CgGym}
            
        />
        <ServiceCard
        title="Online Training"
        desc="Video Courses"
        icon={FaVideo}
            
        />
       
        
    </div>
  )
}

export default Services 