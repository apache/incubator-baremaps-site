import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-regular-svg-icons';

// @ts-ignore
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
    text: (
      <div>
        <p
          style={{
            borderBottom: 'solid 1px gray',
            paddingBottom: '1rem',
            marginBottom: '1rem'
          }}
        >
          Apache Baremaps is an effort undergoing incubation at The Apache
          Software Foundation (ASF), sponsored by the Apache Incubator.
          Incubation is required of all newly accepted projects until a further
          review indicates that the infrastructure, communications, and decision
          making process have stabilized in a manner consistent with other
          successful ASF projects. While incubation status is not necessarily a
          reflection of the completeness or stability of the code, it does
          indicate that the project has yet to be fully endorsed by the ASF.
        </p>
        <span>
          Copyright © {new Date().getFullYear()} Apache Software Foundation,
          Licensed under the{' '}
          <a
            href="https://www.apache.org/licenses/LICENSE-2.0"
            target="_blank"
            style={{ textDecoration: 'underline' }}
          >
            Apache License, Version 2.0
          </a>
          .
          <br />
          Apache®, the names of Apache projects, and the feather logo are either{' '}
          <a
            href="https://www.apache.org/foundation/marks/list/"
            target="_blank"
            style={{ textDecoration: 'underline' }}
          >
            registered trademarks or trademarks
          </a>{' '}
          of the Apache Software Foundation in the United States and/or other
          countries. .
        </span>
      </div>
    )
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
