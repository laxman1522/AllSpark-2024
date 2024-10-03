import { EVENT_COUNTER } from '@/constants/constants';
import scheduleData from '@/../data/schedule_details.json';
import contentData from '@/../data/content_details.json';

interface Session {
  date: string;
  startTime: string;
  endTime: string;
  duration: number | string;
  title: string;
  category: string;
  sessionDescription?: string;
  tags?: string[];
  speakersId?: number[];
  speakers?: { name: string; description: string }[];
}

interface Speaker {
  name: string;
  email: string;
  imageUrl: string;
  sessionDetails: {
    [sessionId: string]: number[];
  };
}

interface Agenda {
  date: string;
  sessions: number[];
}

interface Schedule {
  sessions: { [key: string]: Session };
  speakers: { [key: string]: Speaker };
  agenda: { [key: string]: Agenda };
}

const schedule: Schedule = scheduleData;

export const getSessionDetails = (sessionId: any) => {
  return schedule.sessions[`${sessionId}`];
};

export const getSpeakerDetails = (speakerId: any) => {
  return schedule.speakers[`${speakerId}`];
};

export const getSessions = () => {
  return schedule.sessions;
};

export const getAllSpeakers = () => {
  let allSpeakers = Object.values(schedule.speakers);
  allSpeakers.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA.localeCompare(nameB);
  });
  return allSpeakers;
};

export const getSessionsByDate = (date: string) => {
  let resultSessions = [];
  const sessions = schedule.sessions;
  const sessionIds = Object.keys(sessions);
  for (const sessionId of sessionIds) {
    const session = sessions[sessionId];
    const sessionDate = session.date;
    if (sessionDate === date) {
      resultSessions.push(session);
    }
  }
  return resultSessions;
};

export const getAllGuests = () => {
  let allGuests = contentData.guests;
  allGuests.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA.localeCompare(nameB);
  });
  return allGuests;
};

export const getAllCommittees = () => {
  return contentData.committee;
};

export const getEventDetails = () => {
  return contentData.categories;
};

export const constructEventData = () => {
  let count = 0;
  Object.values(schedule.sessions).map((type) => {
    if (type.category === 'Tech Talk') {
      count++;
    }
  });
  let eventData = [
    { count: Object.keys(schedule.agenda).length, title: EVENT_COUNTER.DAYS },
    {
      count: EVENT_COUNTER.REGISTRATION_COUNT,
      title: EVENT_COUNTER.REGISTRATION,
    },
    { count: count, title: EVENT_COUNTER.TECH_TALKS },
    {
      count: Object.keys(schedule.speakers).length,
      title: EVENT_COUNTER.SPEAKERS,
    },
    {
      count: EVENT_COUNTER.ATTENDEES_COUNT,
      title: EVENT_COUNTER.TECHIES,
    },
  ];

  return eventData;
};
