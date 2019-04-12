const  needle = require('needle');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://www.amazon.com/dp/';
const data = require('./testCodes');


const parseAmazonProduct = (iid = 'B01HVI1C46') => {
  
  const getData = async () => {
    const opt = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.', 
      }
    };
    const images = [];
    
    console.log('before await');
    const newi = await needle(url+iid, opt, 
      function(err, resp, body) {
        console.log('here we are');
        const $ = cheerio.load(body);
        const dp = $('#imageBlock_feature_div'); //('#dp');
        dp.find('img').each(function(i,e) {
          let link = $(this).attr('src');
          if (link.search('images-amazon')!==-1) {
            images.push(link);
          //  console.log('link: ', link);
          }
        });
        return Promise.resolve(images);
      }
    ); 
    console.log('after await');
  }
  
  getData();
}

parseAmazonProduct();

// const readCodes = () => {
//   let data;
//   fs.createReadStream('./dataset.csv')
//     .on('data', chank => {
//       data = chank.toString();
//       let arr = data.split('\n');
//       arr = arr.map(el => el.split(';'));
//       arr = arr.map( el => el[1]);
//       arr = arr.filter(el => el!=='');
//       arr = arr.map( el => el? el.split('/')[4]:'');
//       console.log('chank: ', arr);
//     });
// }
// if (link.search('SS40')!==-1) {
//   link = link.replace(/SS40/,'SL1500')
//   images.push(link);
// }
// const desccont = $('#productDescription');
// const desc = desccont.find('p').text(); 
// console.log('desc: ', desc);