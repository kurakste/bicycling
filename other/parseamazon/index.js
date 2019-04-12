const  needle = require('needle');
const cheerio = require('cheerio');
const data = require('./testCodes');

const parseAmazonProduct = async (iid = 'B01HVI1C46') => {
  const url = 'https://www.amazon.com/dp/';
  const getData = async () => {
    const opt = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.', 
      }
    };
    const product = { 
      id: iid, 
      images: [],
      title: '', 
      about: '',
      description: '',
      price: '',
      availability: '',
    };
    const data = await needle(url + iid, opt);
    const html = data.body;
    const $ = cheerio.load(html);
    const dp = $('#imageBlock_feature_div'); //('#dp');
    dp.find('img').each(function(i,e) {
      let link = $(this).attr('src');
      if (link.search('images/I/')!==-1) {
        link = link.split('/')[5];
        let imageid = link.split('.')[0];
        product.images.push(imageid);
      }
    });
    const pt = $('#productTitle');
    const title = pt.text().trim();
    product.title = title;
    const pa = $('#fbExpandableSectionContent > ul');
    let about = pa.text();
    about = about.replace(/\n/g, '');
    about = about.replace(/\t/g, '');
    about = about.replace(/\s{2,}/g, '');
    product.about = about;
    const pd = $('#productDescription');
    let desc = pd.text();
    desc = desc.replace(/\n/g, '');
    desc = desc.replace(/\t/g, '');
    desc = desc.replace(/\s{2,}/g, '');
    product.description = desc;
    const ppr = $('#priceblock_ourprice');
    let price = ppr.text();
    product.price = price;
    const pav = $('#availability-brief');
    let availability = pav.text();
    availability= availability.replace(/\n/g, '');
    availability = availability.replace(/\t/g, '');
    availability = availability.replace(/\s{2,}/g, '');
    product.availability = availability;
    return product;
  }
  const data = await getData()  
  return data;
}

const getImages = async (dataarr) => {
  const out = [];
  const len = dataarr.length;
  for (let i=0; i< len; i++) {
    let item = await parseAmazonProduct(dataarr[i]);
    out.push(item);
  }
  return out;
}

// parseAmazonProduct('B077GVTVRR') //('B0773LCSF2') ('B07F67GZHY')
//   .then(data => console.log(data))
getImages(data)
  .then(res => console.log(res));