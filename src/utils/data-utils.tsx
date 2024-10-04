import memoriesData from '../../data/memories_data.json';

interface Memories {
  imageUrl: string;
  description: string;
  year: number;
  recapUrl: string;
}

/**
 * @description An util to get the memories
 * @version 1.0.0
 * @author [Ashok Natarajan]
 */
export const getMemories = () => {
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
