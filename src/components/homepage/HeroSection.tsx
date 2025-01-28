import React from 'react';
import Link from '@docusaurus/Link';
import {
  VideoChatRegular,
  VideoRegular,
  UsbPlugRegular,
} from '@fluentui/react-icons';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

// Product data array
const PRODUCTS = [
  {
    title: 'Tutorials',
    link: '/guides',
    icon: VideoRegular,
    lightImage: '/static/landing-page/hero/Tutorials_Light.png',
    darkImage: '/static/landing-page/hero/Tutorials_Dark.png',
    text: 'The most intuitive and streamlined tutorials of Fleet Stack to accelerate your learning',
  },
  {
    title: 'Forum',
    link: 'https://fleetstackglobal.com/forum',
    icon: VideoChatRegular,
    lightImage: '/static/landing-page/hero/Forum_Light.png',
    darkImage: '/static/landing-page/hero/Forum_Dark.png',
    text: 'Join our vibrant community forum to discuss, learn, and collaborate on the latest trends and solutions.',
  },
  {
    title: 'REST API',
    link: 'https://app.fleetstack.in/swagger/index.html',
    icon: UsbPlugRegular,
    lightImage: '/static/landing-page/hero/API_Light.png',
    darkImage: '/static/landing-page/hero/API_Dark.png',
    text: 'Explore our robust REST API documentation for effortless integration and development',
  },
];

// Reusable HeroProduct component
function HeroProduct({
  title,
  link,
  icon: Icon,
  text,
  lightImage,
  darkImage,
  beta = false,
}: (typeof PRODUCTS)[0] & { beta?: boolean }) {
  return (
    <Link
      to={link}
      className={clsx(
        'group block rounded-3xl border border-secondary-700 bg-secondary-900 p-6 text-black transition-all hover:bg-gradient-to-tr hover:from-primary/30 hover:via-transparent hover:to-transparent hover:text-primary dark:border-secondary-800 dark:text-white',
        'w-[90vw] hover:!border-primary sm:w-[440px]'
      )}
      aria-label={`${title}${beta ? ' (Beta)' : ''}`}
    >
      <div className="mb-4 flex items-center gap-3">
        <Icon className="h-7 w-7" />
        <h3 className="text-xl font-semibold group-hover:text-primary">
          {title}
          {beta && (
            <span className="ml-2 text-sm font-normal text-text-400">
              (Beta)
            </span>
          )}
        </h3>
      </div>
      <p className="mb-4 text-sm text-zinc-400">{text}</p>
      <ThemedImage
        sources={{
          light: lightImage,
          dark: darkImage,
        }}
        alt={`${title} image`}
        className="w-full rounded-lg transition-transform group-hover:scale-110"
        loading="lazy"
      />
    </Link>
  );
}

// Main HeroSection component
export default function HeroSection() {
  // const handleDownloadClick = () => {
  //   // Placeholder for download functionality
  //   alert('Download initiated!');
  // };

  return (
    <div className="noise-bg pb-14">
      <section className="px-4 pt-16 text-center lg:py-0">
        <div className="py-14">
          <h2 className="text-5xl font-bold">
            <span className="text-primary">We Make it</span>
            <span className="text-primary-100"> Easiest</span>{' '}
            <span className="text-primary">Just</span>
            <span className="text-primary-100"> Deploy</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-400">
            We offer the world's easiest ready-to-deploy GPS software that
            overcomes a problem for businesses in need of an in-house fleet
            monitoring platform.
          </p>
        </div>
      </section>
      <section className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6 px-4">
        {PRODUCTS.map((product) => (
          <HeroProduct {...product} key={product.title} />
        ))}
      </section>
      <div className="mt-10 flex justify-center">
        <a
          href="https://fleetstackglobal.com/download/v2.5.zip"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            // onClick={handleDownloadClick}
            className="flex transform items-center gap-3 rounded-full border-none bg-gradient-to-r to-purple-600 px-8 py-4 text-lg font-semibold text-primary text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path d="M12 16l4-4h-3V4h-2v8H8l4 4zm-6 2v2h12v-2H6z" />
            </svg>
            DOWNLOAD FLEET STACK
          </button>
        </a>
      </div>
    </div>
  );
}
