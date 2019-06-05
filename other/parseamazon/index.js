const needle = require('needle');
const cheerio = require('cheerio');
const data = require('./testCodes');

const cleaner = (input) => {
  input= input.replace(/\n/g, '');
  input = input.replace(/\t/g, '');
  input = input.replace(/\s{2,}/g, '');
  return input;
}
/**
 * 
 * @param {*} node  where we search
 * @param {*} pattern what we will search 
 */
const parseProductInfo = (node, pattern) => {
  let tmp = node.find('tbody');
  console.log('element: ', tmp.children());
  // tmp.each((i,e) => {
  //   console.log('el: ', e.children);
    
  // });
  return '';
}

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
    product.description = cleaner(desc);
    const ppr = $('#priceblock_ourprice');
    let price = ppr.text();
    product.price = price;
    const pav = $('#availability-brief');
    let availability = pav.text();
    product.availability = cleaner(availability);
    const tab = $('#productDetails_detailBullets_sections1');
    console.log('weight: ', parseProductInfo(tab, 'weight'));
    // let pweight= $('#prodDetails > div.wrapper.USlocale > div.column.col1 > div > div.content.pdClearfix > div > div > table > tbody > tr:nth-child(1) > td.value'); //>tbody>tr:nth-child(1)>td');
    // if (pweight.text() ==='') {
    //   pweight = $('#productDetails_detailBullets_sections1 > tbody > tr:nth-child(2) > td');
    // }
    // console.log('weight: ', cleaner(pweight.text()));
    // let psize= $('#prodDetails > div.wrapper.USlocale > div.column.col1 > div > div.content.pdClearfix > div > div > table > tbody > tr:nth-child(2) > td.value');
    // if (psize.text() === '') {
    //   psize = $('#productDetails_detailBullets_sections1 > tbody > tr:nth-child(1) > td')

    // }
    // console.log('siz: ', cleaner(psize.text()));
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
const sample = ['B077GVTVRR', 'B0773LCSF2','B07F67GZHY'];
parseAmazonProduct(sample[1]) 
  .then(data => console.log('')); //(data))
// getImages(data)
//   .then(res => console.log(res));