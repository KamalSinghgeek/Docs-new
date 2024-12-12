import Link from '@docusaurus/Link';
import React, { useState } from 'react';
import clsx from 'clsx';
import {
  ArrowRightFilled,
  ChevronLeftRegular,
  ChevronRightRegular,
} from '@fluentui/react-icons';

interface Resource {
  url: string;
  type: string;
  title: string;
  description: string;
  image: string;
  duration: string;
}

const ALL_RESOURCES: Resource[] = [
  {
    url: 'https://fleetstack.in/article/how-do-i-install-gps-software-on-my-own-server',
    type: 'blog',
    title: 'Just Install on your own server',
    description:
      'Easily install our software on your own server to gain full control, enhanced customization, and secure data management.',
    image: '/static/landing-page/resources/Guide_Image_1.jpg',
    duration: '3 min',
  },
  {
    url: 'https://fleetstack.in/article/how-do-i-use-the-gps-software-free-trial-fleet-stack',
    type: 'blog',
    title: 'Use GPS Software Free Trial',
    description:
      'The GPS software free trial offered by Fleet Stack is an excellent opportunity for businesses to try out the platform and see how it can benefit their operations.',
    image: '/static/landing-page/resources/Guide_Image_6.png',
    duration: '2 min',
  },
  {
    url: 'https://fleetstack.in/article/self-hosted-vs-white-label-gps-vehicle-tracking-software', 
    type: 'blog',
    title: 'Self Hosted VS White Label',
    description:
      'In this article, we’re going to break down the differences between self-hosted GPS tracking software and white label GPS tracking software.',
    image: '/static/landing-page/resources/Guide_Image_7.png',
    duration: '3 min',
  },
  {
    url: 'https://fleetstack.in/article/9-reasons-to-choose-self-hosted-gps-software-over-white-label-solutions',
    type: 'blog',
    title: 'Reasons To Choose Self-Hosted',
    description:
      'In this article, we will discuss nine key reasons why businesses should consider self-hosted GPS software for their location-based needs.',
    image: '/static/landing-page/resources/Guide_Image_8.png',
    duration: '4 min',
  },
  {
    url: 'https://fleetstack.in/article/the-inspirational-journey-of-fleet-stack-simplifying-gps-software-for-all',
    type: 'blog',
    title: 'Inspirational Story of Fleet Stack',
    description:
      'It all began with someone who dreamt of starting a business and relied on GPS software to bring that vision to life.',
    image: '/static/landing-page/resources/Guide_Image_9.png',
    duration: '5 min',
  },
  {
    url: 'https://fleetstack.in/article/how-do-i-create-my-own-white-label-gps-software',
    type: 'blog',
    title: 'Create White Label GPS Software',
    description:
      'This comprehensive guide will take you through the steps and considerations involved in building your white-label GPS software.',
    image: '/static/landing-page/resources/Guide_Image_10.png',
    duration: '3 min',
  },
  {
    url: 'https://youtu.be/mSEUbK4h560',
    type: 'video',
    title: 'Fleet Stack Mobile application',
    description:
      'Fleet Stack mobile application offers real-time GPS tracking, route optimization, and seamless fleet management for operational excellence.',
    image: '/static/landing-page/resources/Guide_Image_3.jpg',
    duration: '3 min',
  },
  {
    url: 'https://youtu.be/FYB9xPR-3bE?si=7Hx8YdZRLovxIFkZ',
    type: 'video',
    title: 'White Label GPS with FleetStack',
    description:
      'Empower your brand effortlessly—white-label Fleet Stack’s GPS software for tailored, scalable, and efficient fleet management solutions!',
    image: '/static/landing-page/resources/Guide_Image_4.jpg',
    duration: '1 min',
  },
  {
    url: 'https://www.youtube.com/watch?v=RTya4g_SALU',
    type: 'video',
    title: 'Fleet Stack: Track Route History',
    description:
      'Learn to analyze your fleet past routes effectively with FleetStack History Tracking tutorial, ensuring better operational insights.',
    image: '/static/landing-page/resources/Guide_Image_5.jpg',
    duration: '1 min',
  },
];

function Resource({
  type,
  url,
  image,
  title,
  description,
  duration,
}: Resource) {
  return (
    <Link
      className="fade-in group flex flex-col justify-between"
      key={url}
      href={url}
    >
      <div>
        <div className="mb-3 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="aspect-video h-full w-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
        <h3 className="font-semibold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary-100 lg:text-xl">
          {title}
        </h3>
        <p className="leading-snug text-text-400">{description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-text-400">
          {`${duration} ${type === 'video' ? 'watch' : 'read'}`}
        </div>
      </div>
    </Link>
  );
}

export default function ResourcesSection() {
  const [page, setPage] = useState(1);
  const [activeType, setActiveType] = useState<'all' | 'blog' | 'video'>('all');

  const resources =
    activeType === 'all'
      ? ALL_RESOURCES
      : ALL_RESOURCES.filter((r) => r.type === activeType);

  const currentResources = resources.slice((page - 1) * 3, page * 3);

  const pages = Math.ceil(resources.length / 3);

  const nextPage = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <section className="no-underline-links my-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <span className="dyte-badge">RESOURCES</span>
            <h2 className="mb-6 text-4xl">
              Want to know more about Fleet Stack?
            </h2>
          </div>
          <Link
            to="https://www.youtube.com/@FleetStack/videos"
            className="font-jakarta text-sm font-semibold text-primary"
          >
            All Tutorials <ArrowRightFilled className="ml-1" />
          </Link>
        </div>

        <div className="mb-6 inline-flex gap-1 rounded-lg bg-secondary-700 p-2 font-jakarta text-sm font-semibold dark:bg-secondary-700">
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'all' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black'
            )}
            onClick={() => setActiveType('all')}
          >
            All
          </button>
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'blog' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black'
            )}
            onClick={() => setActiveType('blog')}
          >
            Blogs
          </button>
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'video' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black'
            )}
            onClick={() => setActiveType('video')}
          >
            Videos
          </button>
        </div>

        <div className="relative flex flex-col">
          <div className="no-underline-links grid grid-cols-3 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {currentResources.map((resource) => {
              return <Resource {...resource} key={resource.url} />;
            })}
          </div>

          <div className="my-10 ml-auto flex items-center justify-center md:my-0">
            <button
              onClick={prevPage}
              className="top-1/2 -left-14 rounded-lg bg-transparent p-1 hover:bg-secondary-800 md:absolute md:-translate-y-1/2"
              aria-label="Previous Page"
            >
              <ChevronLeftRegular className="h-6 w-6" />
            </button>

            <button
              onClick={nextPage}
              className="top-1/2 -right-14 rounded-lg bg-transparent p-1 hover:bg-secondary-800 md:absolute md:-translate-y-1/2"
              aria-label="Next Page"
            >
              <ChevronRightRegular className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
