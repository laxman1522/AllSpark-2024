import memoriesData from '../../data/memories_data.json';
import guestsData from '../../data/guest_details.json';
import { speakers } from '../../data/speakers.json';
/**
 * @description An util to get the memories
 * @version 1.0.0
 * @author [Ashok Natarajan]
 */
export const getMobileMemories = () => {
  const memories = processPairs(memoriesData.memories);
  return memories;
};

/**
 * @description An util to process the memories and split into pairs
 * @version 1.0.0
 * @author [Ashok Natarajan]
 */
const processPairs = (arr: any) => {
  return arr.reduce((acc: any, _: any, index: number) => {
    if (index % 2 === 0) {
      // Check if the index is even
      const pair = arr.slice(index, index + 2); // Get the current pair
      acc.push(pair); // Add the pair to the accumulator
    }
    return acc;
  }, []);
};

/**
 * @description An util to get all guests
 * @version 1.0.0
 * @author [Charanraj Thiyagarajan]
 */
export const getAllGuests = () => {
  const allGuests = guestsData.guests || [];
  allGuests.sort((a, b) => {
    const nameA = a.name?.toLowerCase() || '';
    const nameB = b.name?.toLowerCase() || '';
    return nameA.localeCompare(nameB);
  });
  return allGuests;
};

export const getMemories = () => {
  return memoriesData.memories || [];
};

export const getAllSpeakers = () => {
  let allSpeakers = Object.values(speakers);
  allSpeakers.sort((a, b) => {
    console.log(a, b);
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA.localeCompare(nameB);
  });
  return allSpeakers;
};
