"Use clinet";
import { time } from 'console';
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
//temporary event data
const events = [{
  id: 1,
  title: 'Meeting with Team',
  time: '10:00 AM - 11:00 AM',
  description: 'Discuss project updates and next steps.',
},
{
  id: 2,
  title: 'Meeting with Team',
  time: '10:00 AM - 11:00 AM',
  description: 'Discuss project updates and next steps.',
},
{
  id: 3,
  title: 'Meeting with Team',
  time: '10:00 AM - 11:00 AM',
  description: 'Discuss project updates and next steps.',
}];
const EventCalender = () => {
    const [value, onChange] = useState<Value>(new Date());
  return    (<div className='bg-white rounded-md p-4 '>
      <Calendar onChange={onChange} value={value} />
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold my-4'>Events</h1>
        <Image src='/moreDark.png' alt='options' width={20} height={20} />
      </div>
    <div className='flex flex-col gap-4'>
      {events.map(event =>(
        <div className="p-5 round-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"key={event.id}>
          < div className='flex items-center justify-between'>
          <h1 className='font-semibold text-gray-600'>{event.title}</h1>
          <span className='text-gray-300 text-xs' >{event.time}</span>
          </div>
          <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
        </div>
      ))} 
    </div>
    </div>
  );
}
export default EventCalender;