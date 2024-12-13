import type { ComponentProps, ReactNode } from 'react';

export type Section = { docId: string } & (
  | {
      section: false;
    }
  | {
      section: string;
      // icon: (props: ComponentProps<'svg'>) => ReactNode;
      name: string;
    }
);

const SECTIONS: Section[] = [
  {
    name: 'Fleet Stack Pro',
    docId: 'android',  
    section: 'mobile-ui-kit',
  },
  {
    name: 'Fleet Stack Lite',
    docId: 'mobile-application',
    section: 'mobile-ui-kit',
  },
];

export type SectionsGroup = {
  name: string;
  section: string;
  description?: string;
  className?: string;
};

const SECTION_GROUPS: SectionsGroup[][] = [
  [
    {
      name: '',
      section: 'mobile-ui-kit',
      description: 'Use our pre-built mobile UI Kit SDK, ready to go',
    },
    {
      name: 'Fleet Stack Mobile App',
      section: 'mobile-core',
      description: 'Guide and Documentation for Fleet Stack Mobile App',
    },
  ],
];

export { SECTIONS, SECTION_GROUPS };
