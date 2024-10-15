// import React, { useState } from 'react';
// import SectionHeader from '@/components/SectionHeader/SectionHeader';
// import { getAgenda } from '@/utils/event-utils';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const ScheduleContainer = () => {
//   const [search, setSearch] = useState<string>('');
//   const agenda = getAgenda();
//   const [activeTab, setActiveTab] = useState<string>(agenda[0].date);

//   return (
//     <div className="h-screen relative">
//       <div className="pt-[18vh] mb-11 px-12">
//         <SectionHeader headerText="Schedule" />
//         {/* container required for tabs and search start */}
//         <div className="flex w-full justify-between pt-[2vh] items-center flex-col md:flex-row gap-4">
//           <div className="flex gap-3 flex-wrap items-center w-full">
//             {agenda.map((item, index) => {
//               return (
//                 <span
//                   key={index}
//                   className={`${activeTab === item.date ? 'border-[1.5px] lg:border-[3px] border-events-color' : ''} cursor-pointer bg-schedule-tab-background rounded-md text-schedule-color font-medium py-1 px-3 text-[16px] lg:text-[20px] max-[767px]:flex-1 text-center`}
//                   onClick={() => setActiveTab(item.date)}
//                 >
//                   {item.date}
//                 </span>
//               );
//             })}
//           </div>
//           <div className="relative max-[767px]:w-full">
//             <input
//               type="text"
//               placeholder="Search in the schedule..."
//               value={search}
//               className="w-full lg:w-[30vw] placeholder:italic border-[1.5px] lg:border-[3px] border-events-color rounded-md bg-schedule-tab-background text-schedule-color placeholder-schedule-color outline-0  p-1.5 lg:p-3 text-sm lg:text-xl"
//               onKeyDown={(e) => {
//                 e.key === 'Enter' && console.log('search key');
//               }}
//               onChange={(e) => setSearch(e.target.value)}
//               onBlur={() => console.log('search blur')}
//             />
//             <FontAwesomeIcon
//               icon={faSearch}
//               className="cursor-pointer absolute right-5 top-1/2 -translate-y-1/2 text-sm lg:text-xl text-schedule-color"
//               onClick={() => console.log('search')}
//             />
//           </div>
//         </div>
//         {/* container required for tabs and search end */}
//       </div>
import React, { useEffect, useState } from 'react';
import ScheduleTimeline from '@/components/ScheduleTimeline/ScheduleTimeline';
import scheduleData from '../../../data/schedule_details.json';

const ScheduleContainer = () => {
  const [time, setTime] = useState(0);
  const [activeIndex, setActiveIndex] = useState<any>(1);
  const [sessions, setSessions] = useState<any>(scheduleData.sessions);
  const [limit, setLimit] = useState<number>(new Date().getSeconds() * 1000);
  function createDateFromWords(day: string, time: string) {
    const currentYear = new Date().getFullYear();
    const dateString = `${day}, ${currentYear} ${time}`;
    const date = new Date(dateString);
    return date;
  }

  useEffect(() => {
    const updateLiveSession = () => {
      if (limit !== 60000) {
        setLimit(60000);
      }
      const updatedSession = Object.fromEntries(
        Object.entries(sessions).map(([key, value]: any) => {
          // if(activeIndex<= key) {
          const sessionStartTime = createDateFromWords(
            value.date,
            value.startTime,
          );
          const sessionEndTime = createDateFromWords(value.date, value.endTime);

          const currentTime = new Date();
          currentTime.setSeconds(0, 0);
          if (
            sessionStartTime.getTime() <= currentTime.getTime() &&
            sessionEndTime.getTime() >= currentTime.getTime()
          ) {
            value.isLive = true;
          } else {
            value.isLive = false;
          }
          // }
          return [key, value];
        }),
      );
      setSessions(updatedSession);
    };
    const timer = setTimeout(() => {
      console.log('1 min', time);
      setTime(time + 1);
      updateLiveSession();
    }, limit);
    return () => {
      clearTimeout(timer);
    };
  }, [time, sessions, limit]);
  return (
    <div className="h-screen relative">
      <ScheduleTimeline sessions={sessions} />
    </div>
  );
};

ScheduleContainer.displayName = 'ScheduleContainer';
export default ScheduleContainer;
