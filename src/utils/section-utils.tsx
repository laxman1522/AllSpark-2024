import { SECTIONS } from '@/constants/constants';
import { useRef } from 'react';

interface Section {
  label: string;
  number: string;
  id: string;
  ref: React.RefObject<HTMLDivElement>;
}

export const constructSections = () => {
  const sections: Record<string, Section> = {};
  SECTIONS.map((section) => {
    const ref = useRef(null);
    sections[section.label] = {
      ...section,
      ref,
    };
  });
  return sections;
};
