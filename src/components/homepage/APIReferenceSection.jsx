import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowUpRight } from 'react-feather';
import Head from '@docusaurus/Head';
import ThemedImage from '@theme/ThemedImage';

export default function APIReferenceSection() {
  const links = [
    {
      href: 'https://app.fleetstack.in/swagger/index.html',
      title: 'Get Device Data',
      description: 'Get data of your GPS Devices',
    },
    {
      href: 'https://app.fleetstack.in/swagger/index.html',
      title: 'Report',
      description: 'Receive a comprehensive report of your vehicle.',
    },
    {
      href: 'https://app.fleetstack.in/swagger/index.html',
      title: 'Get Sensor List',
      description: 'Get the list of all sensors',
    },
  ];

  return (
    <section className="no-underline-links relative px-6">
      <Head>
        <link rel="prefetch" href="/static/landing-page/api-ref-light.png" />
        <link rel="prefetch" href="/static/landing-page/api-ref-dark.png" />
      </Head>
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 rounded-2xl bg-gradient-to-r from-black to-zinc-800 px-6 py-20 text-center text-white dark:from-zinc-100 dark:to-white dark:text-black lg:flex-row lg:p-20 lg:text-left">
        <Link
          href="/api"
          target="_blank"
          className="absolute top-8 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-600/40 dark:bg-transparent"
        >
          <ArrowUpRight className="h-6 w-6 text-zinc-400 dark:text-black" />
        </Link>
        <div className="flex-1">
          <h2 className="text-4xl">REST API Documentation</h2>
          <p className="text-zinc-400">
            Don’t worry, it’s simpler than it seems. Leverage our
            developer-friendly APIs to seamlessly integrate fleet management,
            tracking, and communication features into your web, mobile, or
            desktop applications with ease.
          </p>
          <Link
            href="/api"
            className="font-medium text-primary-100 dark:text-primary"
          >
            Get started with Fleet Stack's REST APIs &rarr;
          </Link>
          <ul className="mt-10 flex list-none flex-col gap-4 text-left lg:pl-0">
            {links.map((link, index) => (
              <li key={index} className="flex flex-col gap-1">
                <Link
                  href={link.href}
                  className="group font-jakarta font-semibold text-current"
                >
                  {link.title}
                  <span className="ml-2 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                    &rarr;
                  </span>
                </Link>
                <div className="text-zinc-400">{link.description}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 justify-end">
          <ThemedImage
            sources={{
              light: '/static/landing-page/api-ref-light.png',
              dark: '/static/landing-page/api-ref-dark.png',
            }}
            alt="Preview of Fleet Stack's REST API documentation"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
