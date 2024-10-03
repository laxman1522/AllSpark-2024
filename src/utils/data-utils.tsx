import memoriesData from '../../data/memories_data.json';

export const getMemories = () => {
  const memories = memoriesData.memories;
  return memories;
};
