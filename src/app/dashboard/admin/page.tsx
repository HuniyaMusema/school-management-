"use client"
import Announcements from "@/components/Announcements"
import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import EventCalender from "@/components/EventCalender"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return( 
  <div className="p-4 flex gap-4 flex-col md:flex-row">
    {/*left side*/}
    <div className="w-full lg:w-2/3 flex flex-col gap-8">
    {/*user card*/}
    <div className="flex gap-4 justify-between flex-wrap ">
    <UserCard type="Student"/>
    <UserCard type="Teacher"/>
    <UserCard type="Parent"/>
    <UserCard type="Staff"/>
    </div>
    {/*Modelchart*/}
    <div className="flex gap-4 flex col lg:flex-row">
     {/*Countchart*/}
      <div className="w-full lg:w-1/3 h-[450px] ">
      <CountChart/>
      </div>
        {/*AttendanceChart*/}
      <div className="w-full lg:w-2/3 h-[450px] ">
      <AttendanceChart/>
      </div>
    </div>
    {/*Bottom chart*/}
    <div className="w-full h-[500px] ">
      <FinanceChart/>
    </div>

    </div>
    {/*right side*/}
    <div className="w-full lg:w-1/3 flex-col gap-8">
    <EventCalender/>
    <Announcements/>

  </div>
  </div>
  )
}
export default AdminPage