import { Helmet } from "react-helmet-async";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SEO = ({ pageTitle }:any) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}-Chow charity-focused memecoin</title>
        {/* <meta name="robots" content="noindex, follow" /> */}
        <meta name="description" content="$Chow-Chow charity-focused memecoin" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta property="og:title" content="Chow-Chow charity-focused memecoin" />
        <meta property="og:description" content="Chow-Chow charity-focused memecoin" />
        <meta property="og:image" content="https://www.chowchow.meme/assets/img/logo/logoss.png" />
        <meta property="og:url" content="https://www.chowchow.meme" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="$Chow-Chow" />
        
      </Helmet>
    </>
  );
};

export default SEO;