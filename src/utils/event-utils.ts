import { EVENT_COUNTER } from '@/constants/constants';
import scheduleData from '@/../data/schedule_details.json';
import contentData from '@/../data/event_categories_details.json';
import { title } from 'process';

interface Session {
  date: string;
  startTime: string;
  endTime: string;
  eventDateTime: string;
  duration: number | string;
  title: string;
  category: string;
  description?: string;
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
  eventDateTime?: string;
  title?: string;
  description?: string;
  teammates?: {
    name: string;
    imageUrl: string;
  }[];
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
export const getSpeakerDetails = (speakerId: number) => {
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
 * @author [Praneash Krishnamurthi]
 */
export const getAllSpeakers = () => {
  return Object.values(schedule?.speakers || [])
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    .map((speaker) => {
      let speakerDetails = { ...speaker };
      Object.keys(speaker.sessionDetails).forEach((session) => {
        const { eventDateTime, title, description } =
          getSessionDetails(session);
        const teammates = speaker.sessionDetails[session].map((speakerId) => {
          const { name, imageUrl } = getSpeakerDetails(speakerId);
          return { name, imageUrl };
        });
        speakerDetails = {
          ...speakerDetails,
          eventDateTime,
          title,
          description,
          teammates,
        };
      });
      return speakerDetails;
    });
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
  const sessionCounts = Object.values(schedule?.sessions || []).reduce(
    (acc, type) => {
      if (type?.category === 'Tech Talk') {
        acc.techTalkCount++;
      } else if (type?.category === 'Solution Space') {
        acc.solutionSpaceCount++;
      } else if (type?.category === 'Guest Speaker') {
        acc.guestSpeakerCount++;
      }
      return acc;
    },
    { techTalkCount: 0, solutionSpaceCount: 0, guestSpeakerCount: 0 },
  );

  const eventData = [
    {
      count: Object.keys(schedule?.agenda || {}).length,
      title: EVENT_COUNTER.DAYS,
    },
    {
      count: sessionCounts.solutionSpaceCount,
      title: EVENT_COUNTER.SOLUTION_SPACE,
    },
    { count: sessionCounts.techTalkCount, title: EVENT_COUNTER.TECH_TALKS },
    { count: sessionCounts.guestSpeakerCount, title: EVENT_COUNTER.GUESTS },
    {
      count: Object.keys(schedule?.speakers || {}).length,
      title: EVENT_COUNTER.SPEAKERS,
    },
    { count: EVENT_COUNTER.ATTENDEES_COUNT, title: EVENT_COUNTER.TECHIES },
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
