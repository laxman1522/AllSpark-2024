import React, { useState } from 'react';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import { getAgenda } from '@/utils/event-utils';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ScheduleContainer = () => {
  const [search, setSearch] = useState<string>('');
  const agenda = getAgenda();
  const [activeTab, setActiveTab] = useState<string>(agenda[0].date);

  return (
    <div className="h-screen relative">
      <div className="pt-[18vh] mb-11 px-12">
        <SectionHeader headerText="Schedule" />
        {/* container required for tabs and search start */}
        <div className="flex w-full justify-between pt-[2vh] items-center flex-col md:flex-row gap-4">
          <div className="flex gap-3 flex-wrap items-center w-full">
            {agenda.map((item, index) => {
              return (
                <span
                  key={index}
                  className={`${activeTab === item.date ? 'border-[1.5px] lg:border-[3px] border-events-color' : ''} cursor-pointer bg-schedule-tab-background rounded-md text-schedule-color font-medium py-1 px-3 text-[16px] lg:text-[20px] max-[767px]:flex-1 text-center`}
                  onClick={() => setActiveTab(item.date)}
                >
                  {item.date}
                </span>
              );
            })}
          </div>
          <div className="relative max-[767px]:w-full">
            <input
              type="text"
              placeholder="Search in the schedule..."
              value={search}
              className="w-full lg:w-[30vw] placeholder:italic border-[1.5px] lg:border-[3px] border-events-color rounded-md bg-schedule-tab-background text-schedule-color placeholder-schedule-color outline-0  p-1.5 lg:p-3 text-sm lg:text-xl"
              onKeyDown={(e) => {
                e.key === 'Enter' && console.log('search key');
              }}
              onChange={(e) => setSearch(e.target.value)}
              onBlur={() => console.log('search blur')}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="cursor-pointer absolute right-5 top-1/2 -translate-y-1/2 text-sm lg:text-xl text-schedule-color"
              onClick={() => console.log('search')}
            />
          </div>
        </div>
        {/* container required for tabs and search end */}
      </div>
    </div>
  );
};

ScheduleContainer.displayName = 'ScheduleContainer';
export default ScheduleContainer;
