import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Index() {
  return (
    <Layout title="Synerise">
      <div className="ds-wrapper u-bg-white">
        <div className="ds-intro l-grid">
          <h1 className="ds-headline-1">
            <span>The Coloid</span>
            <strong>Design System</strong>
          </h1>
          <p className="ds-sub-headline">Coloid is the Synerise design system for developing the product and experiences.</p>
        </div>
        <div className="ds-intro-image-wrapper">
          <img src={useBaseUrl('images/ds-dashboard@2x.jpg')} />
        </div>
      </div>
      <div className="ds-wrapper u-bg-light-gray">
        <div className="l-grid-3">
          <div className="ds-develop">
            <h2 className="ds-headline-2">Everythink you need to <strong>Develope Synerise</strong></h2>
            <ul className="l-grid-3 ds-boxes">
              <li className="l-col-desktop-5 l-col-tablet-6 l-col-mobile-4 ds-box">
                <a title="Retail" href="/retail">
                  <div className="c-industries-listing">
                    <div className="ds-box-image">
                      <img src={useBaseUrl('images/ds-develop@2x.jpg')} />
                    </div>
                    <div className="c-industries-listing__content">
                      <h3 className="c-industries-listing__header u-text-center">Guidelines</h3>
                      <p className="c-industries-listing__paragraph u-text-center">In a series of articles you will get to know our best practices and our values we have at heart while we are contributing to the product.</p>
                      <div className="c-industries-listing__read-more c-read-more">
                        <span>Read more</span>
                        <i className="c-read-more__icon icon-arrow-right-m" aria-hidden="false"></i>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="l-col-desktop-5 l-col-tablet-6 l-col-mobile-4 ds-box">
                <a title="Retail" href="/retail">
                  <div className="c-industries-listing">
                    <div className="ds-box-image">
                      <img src={useBaseUrl('images/ds-develop@2x.jpg')} />
                    </div>
                    <div className="c-industries-listing__content">
                      <h3 className="c-industries-listing__header u-text-center">Components</h3>
                      <p className="c-industries-listing__paragraph u-text-center">We have prepared a library of 53 react and reusable components that developers can refer to while preparing new solutions.</p>
                      <div className="c-industries-listing__read-more c-read-more">
                        <span>Read more</span>
                        <i className="c-read-more__icon icon-arrow-right-m" aria-hidden="false"></i>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <div className="l-grid c-generic-section__columns ds-get-familiar">
              <div className="c-generic-section__image c-advantage__image l-col-desktop-5">
                <img className=" c-dynamic-image c-dynamic-image--lazy c-dynamic-image--lazy--loaded" alt="app"
                     src={useBaseUrl('images/ds-get-familiar@2x.jpg')}
                     srcSet={`${useBaseUrl('images/ds-get-familiar@2x.jpg')} 1x, ${useBaseUrl('images/ds-get-familiar@3x.jpg')} 2x`}
                />
              </div>
              <div className="l-col-desktop-5 ds-get-familiar-text">
                <div className="c-generic-section__content">
                  <h2 className="c-text-header">Get familiar with...</h2>
                  <p className="c-text-paragraph-component c-text-paragraph c-generic-section__description">
                    Based on the Coloid Design language, the system consists of working code, human interface guidelines and a vibrant community contributions.
                  </p>
                  <div className="c-generic-section__buttons">
                    <a className="c-button-filled" href="/request" target="_self">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
