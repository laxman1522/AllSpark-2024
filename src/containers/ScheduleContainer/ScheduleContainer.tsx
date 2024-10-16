import React, { useEffect, useState } from 'react';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import {
  getAgenda,
  getSessionsByDate,
  getSessionsByKeyword,
} from '@/utils/event-utils';
import ScheduleTimeline from '@/components/ScheduleTimeline/ScheduleTimeline';
import Search from '@/components/Search/Search';
import Button from '@/components/Button/Button';

const ScheduleContainer = () => {
  const agenda = getAgenda();
  const [activeTab, setActiveTab] = useState<string>(agenda[0].date);
  const [sessions, setSessions] = useState<any>(getSessionsByDate(activeTab));
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [time, setTime] = useState(0);
  const [limit, setLimit] = useState<number>(new Date().getSeconds() * 1000);

  const createDateFromWords = (day: string, time: string) => {
    const currentYear = new Date().getFullYear();
    const dateString = `${day}, ${currentYear} ${time}`;
    const date = new Date(dateString);
    return date;
  };

  useEffect(() => {
    const updateLiveSession = () => {
      if (limit !== 60000) {
        setLimit(60000);
      }
      const updatedSession = Object.fromEntries(
        Object.entries(sessions).map(([key, value]: any) => {
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
          return [key, value];
        }),
      );
      setSessions(updatedSession);
    };
    const timer = setTimeout(() => {
      console.log('1 min', time);
      setTime(time + 1);
      if (sessions.length !== 0) updateLiveSession();
    }, limit);
    return () => {
      clearTimeout(timer);
    };
  }, [time, sessions, limit]);

  useEffect(() => {
    setSessions(getSessionsByDate(activeTab));
  }, [activeTab]);

  const searchHandler = (search: string) => {
    setSessions(getSessionsByKeyword(getSessionsByDate(activeTab), search));
    setSearchKeyword(search);
  };

  const resetHandler = () => {
    setSearchKeyword('');
    setSessions(getSessionsByDate(activeTab));
  };

  return (
    <div className="h-screen relative">
      <div className="pt-[14vh] md:pt-[16vh] mb-11 px-8 lg:pl-16 lg:pr-40 xl:pr-52">
        <SectionHeader headerText="Schedule" />
        <div className="flex w-full justify-between md:pt-[2vh] items-center flex-col md:flex-row gap-4">
          <div className="flex gap-3 flex-wrap items-center w-full">
            {agenda.map((item, index) => {
              return (
                <span
                  key={index}
                  className={`${activeTab === item.date ? 'border-[1.5px] md:border-[3px] border-events-color' : ''} cursor-pointer bg-schedule-tab-background rounded-md text-schedule-color font-medium py-1 px-3 text-[16px] md:text-[20px] max-[767px]:flex-1 text-center`}
                  onClick={() => setActiveTab(item.date)}
                >
                  {item.date}
                </span>
              );
            })}
          </div>
          <Search searchHandler={searchHandler} searchKeyword={searchKeyword} />
        </div>
        <div className="w-full h-[60vh] mt-[2vh] bg-memories-background rounded-md">
          {sessions.length === 0 ? (
            <div className="flex flex-col gap-6 items-center justify-center h-full">
              <span className="text-schedule-color italic text-[18px] text-center">{`No event found for the search "${searchKeyword}"`}</span>
              <Button text="Full Schedule" clickHandler={resetHandler} />
            </div>
          ) : (
            <ScheduleTimeline sessions={sessions} />
          )}
        </div>
      </div>
    </div>
  );
};

ScheduleContainer.displayName = 'ScheduleContainer';
export default ScheduleContainer;
