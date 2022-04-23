Moralis.initialize("QYoLPJoDPHmU2sMQI61lX5udJIxxLFoczPqGjz9X"); // Application id from moralis.io
Moralis.serverURL = "https://uim1ha4domav.moralisweb3.com:2053/server"; //Server url from moralis.io

// Tells me how many h2 elements are after the .yep element. When the array length equals 0, i know that their are no more
// h2 elements with the .yep class. That way, I can remove all .yep class from all h2 elements and re assign the .yep element
// onto the first h2 element
$('section.exp .square .side.forward').on('click', function (){
  console.log(1);
  // get the amount of h2 elements after the .yep class
  numOfCompanies = $(this).parents().siblings('.company').children('.yep').next('h2').length;

  console.log("before if : " + numOfCompanies);
  // determine if their are no more h2 elements left to assign the .yep class to
  if (numOfCompanies != 0) {
    // remove the yep class from the h2 element that had the yep class, and reassign it to the next h2 element
    $(this).parents().siblings('.company').children('.yep').removeClass('yep').next('h2').addClass('yep');
    $(this).parents().siblings('.task').children('.tasks.yep').removeClass('yep').next('.tasks').addClass('yep');

    $(this).parents().siblings('.task').children('.tasks').children('article').removeClass('yep');
    $(this).parents().siblings('.task').children('.tasks.yep').children('article').first().addClass('yep');

    console.log("First if : " + numOfCompanies);
  } else if (numOfCompanies == 0){
    // when their is no more h2 elements left, remoce all yep classess from h2 elements and assign a yep class to the first
    // h2 element in the parent class
    console.log('before removing and starting at beginning');
    $(this).parents().siblings('.company').children().removeClass('yep');
    $(this).parents().siblings('.company').children('h2').first().addClass('yep');

    $(this).parents().siblings('.task').children('.tasks').removeClass('yep');
    $(this).parents().siblings('.task').children('.tasks').first().addClass('yep');
    $(this).parents().siblings('.task').children('.tasks').children('article').removeClass('yep');
    $(this).parents().siblings('.task').children('.tasks').children('article').first().addClass('yep');
  } else {
    console.log('Thats weird.');
  }
console.log(8);

});

$('section.exp .company .side.forward').on('click', function (){
  numOfTasks = $(this).parents().siblings('.task').children('.tasks.yep').children('.yep').next('article').length;
  if (numOfTasks != 0){
    $(this).parents().siblings('.task').children('.tasks.yep').children('article.yep').removeClass('yep').next('article').addClass('yep');
  } else if (numOfTasks == 0){
    $(this).parents().siblings('.task').children('.tasks.yep').children('article').removeClass('yep');
    $(this).parents().siblings('.task').children('.tasks.yep').children('article').first().addClass('yep');
  } else {
    console.log('Thats weird.');
  }
});
$('section.skill .square .side.forward').on('click', function (){
  numOfSkills = $(this).parents().siblings('.content').children('.wrap.yep').next('.wrap').length;
  if (numOfSkills != 0){
    $(this).parents().siblings('.content').children('.wrap.yep').removeClass('yep').next('.wrap').addClass('yep');
  } else if (numOfSkills == 0){
    $(this).parents().siblings('.content').children('.wrap').removeClass('yep');
    $(this).parents().siblings('.content').children('.wrap').first().addClass('yep');
  } else {
    console.log('Thats weird.');
  }
});

$('section.crypto .square .side.forward').on('click', function (){
  numOfSkills = $(this).parents().siblings('.content').children('.wrap.yep').next('.wrap').length;
  if (numOfSkills != 0){
    $(this).parents().siblings('.content').children('.wrap.yep').removeClass('yep').next('.wrap').addClass('yep');
  } else if (numOfSkills == 0){
    $(this).parents().siblings('.content').children('.wrap').removeClass('yep');
    $(this).parents().siblings('.content').children('.wrap').first().addClass('yep');
  } else {
    console.log('Thats weird.');
  }
});

$(document).ready(function(){

  async function login(){
    console.log("login clicked");
    var user = await Moralis.Web3.authenticate();
    if(user){
      console.log(user);
      user.save();
    }
  }
  login();

  var getEthPrice = async () =>{
    try {

      var setting = {
        method: 'GET',
        //params : {chain: "eth",chain_name:"mainnet"},
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          'X-API-Key': 'OxTXlbEDOyhVUPDPZpdIwXP5UNx4aXVsLAekJ9rREl1kGXDngxZGcsQ3I2K02wPT'
        }
      }

      var url = `https://deep-index.moralis.io/api/v2/erc20/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0/price`
      var res = await fetch(url,setting)
      var price = await res.json()
      console.log(price)
      return price
    } catch (err){
      console.log(err)
    }
  }

  getEthPrice().then((data)=> console.log(data.usdPrice))

});