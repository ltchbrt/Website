// Get references to the language links
var chineseLink = document.getElementById('chineseLink');

// Get reference to the elements to be translated
//NavBar
var home = document.getElementById('home');
var brandAdvantages = document.getElementById('brandAdvantages');
var prodHighlights = document.getElementById('prodHighlights');
var servicePlanning = document.getElementById('servicePlanning');
var excelTech = document.getElementById('excelTech');
var bussCooperation = document.getElementById('bussCooperation');
var languageDropdown = document.getElementById('languageDropdown');

//Divider
var brandAdvantagesSection = document.getElementById('brandAdvantagesSection');
var text1 = document.getElementById('text1');
var productHighlightsSection = document.getElementById('productHighlightsSection');
var text2 = document.getElementById('text2');
var servicePlanningSection = document.getElementById('servicePlanningSection');
var text3 = document.getElementById('text3');
var excellentTechSection = document.getElementById('excellentTechSection');
var text4 = document.getElementById('text4');
var businessCooperationSection = document.getElementById('businessCooperationSection');
var text5 = document.getElementById('text5');

//<!--2 Column with sliding list and Image-->
var span1 = document.getElementById('span1');
var par1 = document.getElementById('par1');
var span2 = document.getElementById('span2');
var par2 = document.getElementById('par2');
var span3 = document.getElementById('span3');
var par3 = document.getElementById('par3');
var span4 = document.getElementById('span4');
var par4 = document.getElementById('par4');

//<!--3 Column with sliding list and Image-->
var span5 = document.getElementById('span5');
var span6 = document.getElementById('span6');
var span7 = document.getElementById('span7');
var span8 = document.getElementById('span8');
var span9 = document.getElementById('span9');
var span10 = document.getElementById('span10');
var span11 = document.getElementById('span11');
var span12 = document.getElementById('span12');

//<!-- Flex Box Service Planning-->
var par5 = document.getElementById('par5');
var par6 = document.getElementById('par6');
var par7 = document.getElementById('par7');
var par8 = document.getElementById('par8');
var par9 = document.getElementById('par9');

//<!-- Flex Box Excellent Technology-->
var par10 = document.getElementById('par10');
var par11 = document.getElementById('par11');
var par12 = document.getElementById('par12');
var par13 = document.getElementById('par13');
var span13 = document.getElementById('span13');
var span14 = document.getElementById('span14');
var span15 = document.getElementById('span15');
var span16 = document.getElementById('span16');

//<!--Contacts Here-->
var par14 = document.getElementById('par14');

//<!--Business Cooperation-->
//<!--Footer-->
var par15 = document.getElementById('par15');



// Add click event listeners to the links
chineseLink.addEventListener('click', changeToChinese);


// Function to change the language to Chinese
function changeToChinese(event) {
  event.preventDefault();
//NavBar
  home.textContent = '首页';
  brandAdvantages.textContent = '品牌优势';
  prodHighlights.textContent = '产品亮点';
  servicePlanning.textContent = '服务方案';
  excelTech.textContent = '卓越技术';
  bussCooperation.textContent = '商务合作';
  languageDropdown.textContent = '简体中文';

//Divider
  brandAdvantagesSection.textContent = '业内第一Slots包网';
   text1.textContent = '三年沉淀设计，只为业内第一';
   productHighlightsSection.textContent = '产品亮点';
   text2.textContent = '业内独一无二的Slots玩法设计 每月新增不同游戏玩法';
   servicePlanningSection.textContent = '服务方案';
   text3.textContent = '致力为客户提供全方位品质服务';
   excellentTechSection.textContent = '卓越技术';
   text4.textContent = '顶级技术加持  为您保驾护航';
   businessCooperationSection.textContent = '商务合作';
   text5.textContent = '联系我们 合作共赢';

//<!--2 Column with sliding list and Image-->
  span1.textContent = '纯原生APP支持';
  par1.textContent = 'APP产品纯原生打造，设计精美热门版面，体验极致流畅';
  span2.textContent = 'Slot专业数值设计';
  par2.textContent = '集团使用三年时间，设计出贴近线下赌场数值设计，大大提升留存';
  span3.textContent = '超安全服务器系统设计';
  par3.textContent = '使用国际大厂服务器、CDN、WAF，最高强度的防护CC攻击，DDOS攻击。';
  span4.textContent = '专注于国际电子游戏Slots';
  par4.textContent = '集团以欧美体系的审美进行专业Slots设计，更符合东南亚，南美，欧洲等国家审美';

//<!--3 Column with sliding list and Image-->
 span5.textContent = '业内独一无二Slot玩法';
 span6.textContent = '专业针对性数值设计';
 span7.textContent = '全球领先服务器及安全设计';
 span8.textContent = '24*365不间断稳定服务';
 span9.textContent = '每月新增一款新游戏';
 span10.textContent = '新站专人跟踪协助指导';
 span11.textContent = '可自由设计各种活动';
 span12.textContent = '客户留存率业内第一';

//<!-- Flex Box Service Planning-->
 par5.textContent = '洽谈';
 par6.textContent = '确认方案';
 par7.textContent = '收订';
 par8.textContent = '建置';
 par9.textContent = '上线';

//<!-- Flex Box Excellent Technology-->
 par10.textContent = '智能后台系统';
 par11.textContent = '特色国际化功能';
 par12.textContent = '支持语种';
 par13.textContent = '专业原生APP支持';
 span13.textContent = '强大稳定后台提供多重数据分析，随时提供您每款游戏在每个时间段的收益，提高运营效率';
 span14.textContent = '后台多语言任意切换，满足不同国家地区运营需求，尊享多语种定制服务，一对一贴心咨询';
 span15.textContent = '目前支持4种大语系：英语系、泰语、葡萄牙语系(巴西等国家)，西班牙语系( 墨西哥等国家)';
 span16.textContent = '专业原生APP支持，不限制提供原生APK包，专业团队协助支持上架谷歌';

//<!--Contacts Here-->
 par14.textContent = '天博愿与知名品牌强强联手，也乐于助力新品牌开启财富之路！海量Slots游戏，一站式服务，期待与您共创辉煌！';

//<!--Business Cooperation-->
//<!--Footer-->
 par15.textContent = '关注TG频道 :';


//ADJUST THE STYLES
span6.style.paddingLeft = '60px';
span7.style.paddingLeft = '130px';
span8.style.paddingLeft = '140px';

par5.style.marginLeft = '50px';
par9.style.marginLeft = '35px';


  var image1 = document.getElementById('image1');
  image1.src = './pictures/swiper/image4.png';


}


