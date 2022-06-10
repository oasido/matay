import Head from 'next/head';

const SiteHeader = () => {
  const siteUrl = `https://matay.ofekasido.xyz`;
  const siteTitle = `Matay / מתי`;
  const siteDesc = `An open-source web app that helps you  find the most fitting date and time for your next event.`;
  const siteThumbnail = `https://i.imgur.com/UK0fuJO.png`;

  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title key="title">{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDesc} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={siteThumbnail} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDesc} />
      <meta property="twitter:image" content={siteThumbnail} />
    </Head>
  );
};
export default SiteHeader;
