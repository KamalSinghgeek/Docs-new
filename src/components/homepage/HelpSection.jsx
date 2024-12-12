import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

// Data for help cards
const helpData = [
  {
    title: 'Book a Demo',
    description:
      "Contact us for a demo with Fleet Stack's expert. We are looking forward to connecting with you.",
    imgSrc: '/static/landing-page/calendar.svg',
    imgAlt: 'Book a demo with Fleet Stack',
    linkHref: 'https://fleetstackglobal.com/contact',
    linkText: 'Schedule a Call →',
  },
  {
    title: 'Support',
    description:
      "Fleet Stack's expert support team is always available to help. Connect for dedicated 1:1 support!",
    imgSrc: '/static/landing-page/customer.svg',
    imgAlt: 'Fleet Stack Support',
    linkHref: 'https://fleetstackglobal.com/support',
    linkText: 'Contact Us →',
  },
  {
    title: 'FAQ',
    description:
      "Browse through Fleet Stack's detailed FAQ section to find answers to frequently asked questions.",
    imgSrc: '/static/landing-page/chat.svg',
    imgAlt: 'Fleet Stack FAQ',
    linkHref: '/faq',
    linkText: 'View FAQ →',
  },
];

// Reusable card component
function HelpCard({ title, description, imgSrc, imgAlt, linkHref, linkText }) {
  return (
    <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
      <img src={imgSrc} alt={imgAlt} width="48" height="48" className="mb-4" />
      <h3 className="my-3">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
      <Link
        href={linkHref}
        className="text-primary dark:text-primary-100"
        rel="noopener noreferrer"
        target="_blank"
      >
        {linkText}
      </Link>
    </div>
  );
}

export default function HelpSection({ className = '' }) {
  return (
    <section className="px-4 pt-16">
      <div
        className={clsx(
          'mx-auto max-w-7xl rounded-3xl bg-white p-4 py-10 text-black dark:bg-black dark:text-white lg:p-24 lg:py-20',
          className
        )}
      >
        <h2 className="mb-12 text-center lg:text-3xl">
          How can we help you today?
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {helpData.map((card, index) => (
            <HelpCard {...card} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
