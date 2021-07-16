import Head from "next/head";
import { NextPage } from "next";
interface headProps {
    title: string;
    url: string;
    keywords: string;
    description: string;
}
const MetaHead: NextPage<headProps> = ({ title, url, keywords, description }) => {
    return (
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0d4758" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff"></meta>

            <link rel="icon" href="/favicon.ico" />
            <meta name="robots" content="all" />
            <meta property="og:site_name" content="Afzal portfolio" />
            <meta property="og:url" content={url} />
            <link rel="canonical" href={url} />
            <meta property="og:type" content="website" />
            <meta name="author" content="Afzal Saiyed" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content={keywords}></meta>
            <meta name="description" content={description} />
            <meta name="twitter:domain" content="corecare.in" />
            <meta name="twitter:site" content="@afzalsaiyed" />
            <meta name="twitter:creator" content="@afzalsaiyed" />
            <meta name="twitter:title" property="og:title" itemProp="name" content={title} />
            <meta name="twitter:description" property="og:description" itemProp="description" content={description} />
            <title>{title}</title>
        </Head>
    );
};

export default MetaHead;

/*
 * Created on Wed Jul 07 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */
