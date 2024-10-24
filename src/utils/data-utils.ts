import memoriesData from '../../data/memories_data.json';
import guestsData from '../../data/guest_details.json';
import committeeData from '../../data/committee_details.json';

/**
 * @description An util to get the memories
 * @version 1.0.0
 * @author [Ashok Natarajan]
 */
export const getMobileMemories = () => {
  const memories = processPairs(memoriesData?.memories);
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
      const pair = arr?.slice(index, index + 2); // Get the current pair
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
  const allGuests = guestsData?.guests || [];
  allGuests.sort((a, b) => {
    const nameA = a.name?.toLowerCase() || '';
    const nameB = b.name?.toLowerCase() || '';
    return nameA.localeCompare(nameB);
  });
  return allGuests;
};

export const getMemories = () => {
  return memoriesData?.memories?.sort((a, b) => b?.year - a?.year) || [];
};

/**
 * @description An util to get all committee names
 * @version 1.0.0
 * @author [Rubesh Udayakumar]
 */
export const getCommitteeClassNames = () => {
  return committeeData?.committee
    ?.map((committee) => {
      return {
        name: committee?.committeeName,
        className: committee?.committeeName
          .replaceAll(' ', '-')
          .replaceAll('&', '-')
          .toLowerCase(),
      };
    })
    .sort((a, b) => {
      const nameA = a.name?.toLowerCase() || '';
      const nameB = b.name?.toLowerCase() || '';
      return nameA.localeCompare(nameB);
    });
};

/**
 * @description An util to get all member names and committee names
 * @version 1.0.0
 * @author [Rubesh Udayakumar]
 */
export const getCommitteeAndMembersNames = () => {
  const result: {
    committeeName: string;
    memberName: string;
    imageSrc: string;
  }[] = [];
  committeeData?.committee
    ?.sort((a, b) => a.committeeName.localeCompare(b.committeeName)) // Sort committees by name
    .forEach((committee) => {
      committee?.members
        ?.sort((a, b) => a.name.localeCompare(b.name)) // Sort members by name within each committee
        .forEach((member) => {
          result.push({
            committeeName: committee?.committeeName
              .replaceAll(' ', '-')
              .replaceAll('&', '-')
              .toLowerCase(),
            memberName: member?.name,
            imageSrc: member.imageUrl,
          });
        });
    });

  return result;
};
