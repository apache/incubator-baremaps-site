import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-regular-svg-icons';

const config: DocsThemeConfig = {
  logo: (
    <>
      <FontAwesomeIcon style={{ height: 26 }} icon={faMap} />
      <span style={{ marginLeft: '.4rem', fontWeight: 800, fontSize: 16 }}>
        Apache Baremaps (incubating)
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/apache/incubator-baremaps/'
  },
  feedback: {
    useLink: () => 'https://github.com/apache/incubator-baremaps/issues/new'
  },
  docsRepositoryBase:
    'https://github.com/apache/incubator-baremaps-site/blob/main/',
  footer: {
    text:
      'Copyright © ' + new Date().getFullYear() + ' Apache Software Foundation'
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Apache Baremaps'
    };
  },
  head: (
    <>
      {/* Favicons generated with https://realfavicongenerator.net  */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="ahrefs-site-verification"
        content="ef8280f8481d5ba95a69da0c39d5a06efcc8b8d55820581438c243e12b613846"
      />
    </>
  )
};

export default config;
