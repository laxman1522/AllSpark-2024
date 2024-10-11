import { EVENT_COUNTER } from '@/constants/constants';
import scheduleData from '@/../data/schedule_details.json';
import contentData from '@/../data/event_categories_details.json';

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

/**
 * Retrieves the details of a session based on the provided session ID.
 * @param {string} sessionId - The ID of the session to retrieve from the schedule.
 * @return {Object} An object containing the session details.
 * @author [Hariharan Muralidharan]
 */
export const getSessionDetails = (sessionId: string) => {
  return schedule?.sessions[`${sessionId}`];
};

/**
 * Retrieves the details of a speaker based on the provided speaker ID.
 * @param {string} speakerId - The ID of the speaker to retrieve from the schedule.
 * @return {Object} An object containing the speaker details.
 * @author [Hariharan Muralidharan]
 */
export const getSpeakerDetails = (speakerId: string) => {
  return schedule?.speakers[`${speakerId}`];
};

/**
 * Retrieves all session details from the schedule.
 * @return {Object} An object containing all session details, indexed by session ID.
 * @author [Hariharan Muralidharan]
 */
export const getSessions = () => {
  return schedule?.sessions;
};

/**
 * Retrieves and sorts all speaker details from the schedule by name.
 * @return {Array<Object>} An array of speaker objects, sorted alphabetically by name.
 * @author [Hariharan Muralidharan]
 */
export const getAllSpeakers = () => {
  const allSpeakers = Object.values(schedule?.speakers);
  allSpeakers.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA.localeCompare(nameB);
  });
  return allSpeakers;
};

/**
 * Retrieves all sessions scheduled for a specific date.
 * @param {string} date - The date to filter sessions by, in the format "Month Day".
 * @return {Array<Object>} An array of session objects scheduled for the specified date.
 * @author [Hariharan Muralidharan]
 */
export const getSessionsByDate = (date: string) => {
  const resultSessions = [];
  const sessions = schedule?.sessions;
  const sessionIds = Object.keys(sessions);
  for (const sessionId of sessionIds) {
    const session = sessions[sessionId];
    const sessionDate = session?.date;
    if (sessionDate === date) {
      resultSessions.push(session);
    }
  }
  return resultSessions;
};

/**
 * Retrieves all event categories and their descriptions from the content data.
 * @return {Array<Object>} An array of category objects, each containing a name and description.
 * @author [Hariharan Muralidharan]
 */
export const getEventDetails = () => {
  return contentData?.categories;
};

/**
 * Constructs and retrieves event data statistics based on the schedule.
 * @return {Array<Object>} An array of objects, each containing a count and a title related to event statistics.
 * @author [Hariharan Muralidharan]
 */
export const constructEventData = () => {
  let count = 0;
  Object.values(schedule?.sessions).map((type) => {
    if (type?.category === 'Tech Talk') {
      count++;
    }
  });
  const eventData = [
    { count: Object.keys(schedule?.agenda).length, title: EVENT_COUNTER.DAYS },
    {
      count: EVENT_COUNTER.REGISTRATION_COUNT,
      title: EVENT_COUNTER.REGISTRATION,
    },
    { count: count, title: EVENT_COUNTER.TECH_TALKS },
    {
      count: Object.keys(schedule?.speakers).length,
      title: EVENT_COUNTER.SPEAKERS,
    },
    {
      count: EVENT_COUNTER.ATTENDEES_COUNT,
      title: EVENT_COUNTER.TECHIES,
    },
  ];

  return eventData;
};

/**
 * checks if device is splideview compatible based on current window width
 * @param {number} windowWidth - current window width.
 * @return {boolean} returns a boolean denoting whether it's splideview compatible device
 * @author [Hariharan Muralidharan]
 */
export const isSplideViewCompatible = (windowWidth: number) => {
  return (
    windowWidth < 1024 ||
    (windowWidth >= 1024 &&
      windowWidth < 1366 &&
      window.innerHeight > 1024 &&
      window.innerHeight <= 1366)
  );
};
