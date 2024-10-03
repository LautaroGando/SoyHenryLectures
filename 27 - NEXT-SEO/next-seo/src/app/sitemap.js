import { BASE_URL } from "./lib/constants";

export const generateSiteMap = async () => {

    return [
        {
            id: 0,
        },
        {
            id: 1,
        },
        {
            id: 2,
        },
    ];

};

export const sitemap = async ({ id }) => {

    const start = id * 50000;
    const end = start + 50000;

    const products = await getProducts(`SELECT id, date FROM products WHERE id BETWEEN ${start} AND ${end}`);

    return products.map((product) => ({
        url: `${BASE_URL}/products/id`,
        lastmodify: product.date,
    }));

};

/* export default function sietmap() {

    return [
        {
            url: 'https://web.com',
            lastmod: new Date(),
            changefreq: 'weekly',
            priority: 1,
        },
        {
            url: 'https://web.com/about',
            lastmod: new Date(),
            changefreq: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://web.com/contact',
            lastmod: new Date(),
            changefreq: 'monthly',
            priority: 0.8,
        },
    ];

}; */