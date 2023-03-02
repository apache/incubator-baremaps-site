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
    link: 'https://github.com/apache/baremaps',
  },
  docsRepositoryBase: 'https://github.com/apache/incubator-baremaps-site',
  footer: {
    text: 'Copyright © ' + new Date().getFullYear() + ' Apache Software Foundation',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  }
}

export default config
