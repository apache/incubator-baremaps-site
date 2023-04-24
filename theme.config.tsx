import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-regular-svg-icons'
const config: DocsThemeConfig = {
  logo: (
    <>
      <FontAwesomeIcon style={{ height: 26}} icon={faMap} />
      <span style={{ marginLeft: '.4rem', fontWeight: 800, fontSize: 16 }}> Apache Baremaps (incubating)</span>
    </>
  ),
  project: {
    link: 'https://github.com/apache/incubator-baremaps/',
  },
  feedback: {
    useLink: () => 'https://github.com/apache/incubator-baremaps/issues/new'
  },
  docsRepositoryBase: 'https://github.com/apache/incubator-baremaps-site/blob/main/',
  footer: {
    text: 'Copyright © ' + new Date().getFullYear() + ' Apache Software Foundation',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Apache Baremaps'
    }
  },
  head: (
    <>
      <meta name="ahrefs-site-verification" content="ef8280f8481d5ba95a69da0c39d5a06efcc8b8d55820581438c243e12b613846" />
    </>
  ),
}

export default config
