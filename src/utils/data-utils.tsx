import guestsData from '../../data/guest_details.json';

export const getAllGuests = () => {
  const allGuests = guestsData.guests;
  allGuests.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA.localeCompare(nameB);
  });
  return allGuests;
};
