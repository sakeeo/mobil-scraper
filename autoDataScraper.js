require('dotenv').config();
const axios = require('axios');
const cheerio = require('cheerio');

const baseUrl = process.env.BASE_URL;

async function scrapeAutoData() {
    try {
        const { data } = await axios.get(`${baseUrl}/en/allbrands`);
        const $ = cheerio.load(data);

        const brands = [];


        $('.marki_blok').each((index, element) => {
            const brandName = $(element).text().trim();
            let brandLink = $(element).attr('href');


            if (brandLink.startsWith('/')) {
                brandLink = `${baseUrl}${brandLink}`;
            }


            brands.push({
                name: brandName,
                link: brandLink,
                models: []
            });
        });

        console.log(`Found ${brands.length} brands.`);


        for (const brand of brands) {
            try {
                const brandData = await axios.get(brand.link);
                const $brandPage = cheerio.load(brandData.data);


                $brandPage('.modeli').each((index, element) => {
                    const modelName = $brandPage(element).text().trim();
                    const modelLink = $brandPage(element).attr('href');

                    if (modelLink.startsWith('/')) {
                        brand.models.push({
                            name: modelName,
                            link: `${baseUrl}${modelLink}`
                        });
                    } else {
                        brand.models.push({
                            name: modelName,
                            link: modelLink
                        });
                    }
                });

                //console.log(`Found ${brand.models.length} models for ${brand.name}.`);

            } catch (error) {
                console.error(`Error scraping brand ${brand.name}:`, error.message);
            }
        }

        // Mengeluarkan data dalam format JSON
        console.log(JSON.stringify(brands, null, 2));
    } catch (error) {
        console.error('Error scraping data:', error.message);
    }
}

scrapeAutoData();


