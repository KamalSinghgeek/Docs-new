import React from 'react';
import Link from '@docusaurus/Link';
import {
  AppsAddInRegular,
  ArrowRightFilled,
  DocumentRegular,
  OpenRegular,
} from '@fluentui/react-icons';
import clsx from 'clsx';
import { ChevronRight, GitHub } from 'react-feather';

interface GuideProps {
  title: string;
  icon: React.ElementType;
  text: string;
  link: string;
}

const guides: GuideProps[] = [
  {
    title: 'Fleet Stack One-Touch Installation',
    icon: AppsAddInRegular,
    text: 'We make it easiest to install and deploy on your own server!',
    link: 'guides/Software-Installation/installation',
  },
  {
    title: 'User Guide for Fleet Stack',
    icon: AppsAddInRegular,
    text: 'Optimize your fleet: Streamlining vehicle management with our advanced tools!',
    link: 'guides/administration/user-guide',
  },
  {
    title: 'Adding Geofence',
    icon: AppsAddInRegular,
    text: 'Add geofence to your vehicle and track easily!',
    link: 'guides/Features-and-Tools/geo-fencing',
  },
];

interface SampleProps {
  title: string;
  platform?: string;
  source?: string;
  blog?: string;
  demo?: string;
}

const samples: SampleProps[] = [
  {
    title: 'Ultimate GPS Software Installation Guide!',
    platform: 'YouTube',
    demo: 'https://youtu.be/UJ30B4mnxHA?si=1WITniUYwnhCnMA9',
  },
  {
    title: 'Build Your Own GPS Software Application!',
    platform: 'YouTube',
    demo: 'https://youtu.be/zMJETWKtDqk?si=vvk12RjVwMOmvA4l',
  },
  {
    title: 'Ultimate Fleet Stack White Labeling Guide!',
    platform: 'YouTube',
    demo: 'https://youtu.be/3fz92PLZvsc?si=STTMCdxfe_DYrbkg',
  },
];

function Guide({ title, text, icon: Icon, link }: GuideProps) {
  return (
    <Link
      to={link}
      className="group flex cursor-pointer items-start gap-2 rounded-lg border-2 border-transparent p-3 text-inherit transition-colors hover:border-primary hover:text-primary"
      aria-label={`Guide: ${title}`}
    >
      <Icon className="h-6 w-6" />
      <div className="flex flex-col">
        <h4 className="mb-1 font-semibold">{title}</h4>
        <p className="mb-0 text-sm text-text-400">{text}</p>
      </div>
      <ChevronRight className="ml-auto h-5 w-5 self-center opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}

function Sample({ title, platform, blog, source, demo }: SampleProps) {
  return (
    <div className="group flex cursor-pointer items-center justify-between rounded-lg border-2 border-transparent p-3 text-text-400/60 transition-colors hover:border-primary hover:text-primary">
      <div className="flex flex-col">
        <h4 className="mb-1 text-black group-hover:text-primary dark:text-white">
          {title}
        </h4>
        {platform && <div className="text-sm text-text-400">{platform}</div>}
      </div>
      <div className="flex items-center gap-2.5">
        {blog && (
          <Link to={blog} className="text-inherit" aria-label="View blog">
            <DocumentRegular className="h-5 w-5" />
          </Link>
        )}
        {demo && (
          <Link to={demo} className="text-inherit" aria-label="View demo" rel="noopener noreferrer" target="_blank">
            <OpenRegular className="h-5 w-5" />
          </Link>
        )}
        {source && (
          <Link
            to={source}
            className="flex items-center gap-1 rounded-lg py-1 px-3 text-inherit transition-colors group-hover:bg-primary group-hover:text-white"
            aria-label="Clone source"
          >
            <GitHub className="h-4 w-4" />
            <span className="font-semibold">Clone</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default function GuidesAndSamples() {
  return (
    <section className="no-underline-links my-40 mx-auto flex w-full max-w-5xl flex-col gap-10 p-4 py-0 md:flex-row md:gap-0">
      <div className="flex-1">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="m-0">Popular How-To Guides</h3>
          <Link to="/guides" className="font-jakarta text-sm font-semibold">
            View More Guides <ArrowRightFilled className="ml-1" />
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {guides.map((guide) => (
            <Guide {...guide} key={guide.title} />
          ))}
        </div>
      </div>
      <div className={clsx('mx-8 block flex-shrink-0 bg-gradient-to-b from-transparent via-secondary-700 to-transparent', 'hidden w-px md:block')} />
      <div className="w-full md:max-w-sm">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="m-0">Popular Video Tutorials</h3>
          <Link
            to="https://www.youtube.com/@FleetStack/videos"
            className="font-jakarta text-sm font-semibold"
            rel="noopener noreferrer"
            target="_blank"
          >
            All Tutorials <ArrowRightFilled className="ml-1" />
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {samples.map((sample) => (
            <Sample {...sample} key={sample.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
