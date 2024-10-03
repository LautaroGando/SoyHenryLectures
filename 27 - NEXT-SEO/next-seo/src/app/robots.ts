export const robots = () => {

    return {
        rules: [
            {
                userAgent: "Googlebot",
                allow: ["/"],
                disallow: ["/dashboard/"],
            },
            {
                userAgent: ["Applebot", "Bingbot"],
                allow: ["/"],
            },
        ],
        sitemap: "https://web.com/sitemap.xml",
    };

};