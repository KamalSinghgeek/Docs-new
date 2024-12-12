import React from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/homepage/HeroSection';
import APIReferenceSection from '../components/homepage/APIReferenceSection';
import CommunitySection from '../components/homepage/CommunitySection';
import HomeFooter from '../components/homepage/HomeFooter';
import ResourcesSection from '../components/homepage/ResourcesSection';
import HelpSection from '../components/homepage/HelpSection';
import Head from '@docusaurus/Head';
import GuidesAndSamples from '../components/homepage/GuidesAndSamples';
import SDKs from '../components/homepage/SDKs';
import PhHelloBar from '../components/homepage/PhHelloBar';

export default function Homepage() {
  return (
    <Layout
      title="Fleet Stack Documentation"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <Head>
        <link
          rel="prefetch"
          href="/assets/css/elements.min.css"
          // Optionally include integrity and crossorigin attributes
        />
      </Head>

      {/* Top announcement or alert bar */}
      <PhHelloBar />

      {/* Main sections */}
      <HeroSection />
      <GuidesAndSamples />
      <APIReferenceSection />

      {/* Resources and help section */}
      <div className="z-0">
        <ResourcesSection />
        <HelpSection className="-mb-48" />
      </div>

      {/* Community section and footer */}
      <HomeFooter />
    </Layout>
  );
}
