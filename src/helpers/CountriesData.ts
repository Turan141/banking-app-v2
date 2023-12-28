
export interface ICountryData{
  id:number,
  name:string,
  alpha2:string,
  alpha3:string,
  code:number
}

export class CountriesData {
  
  static countries:ICountryData[] = [
      {id:1,name:'Afghanistan',alpha2:'AF',alpha3:'AFG',code:93},
      {id:2,name:'Albania',alpha2:'AL',alpha3:'ALB',code:355},
      {id:3,name:'Algeria',alpha2:'DZ',alpha3:'DZA',code:213},
      {id:4,name:'American Samoa',alpha2:'AS',alpha3:'ASM',code:1684},
      {id:5,name:'Andorra',alpha2:'AD',alpha3:'AND',code:376},
      {id:6,name:'Angola',alpha2:'AO',alpha3:'AGO',code:244},
      {id:7,name:'Anguilla',alpha2:'AI',alpha3:'AIA',code:1264},
      {id:8,name:'Antigua and Barbuda',alpha2:'AG',alpha3:'ATG',code:1268},
      {id:9,name:'Argentina',alpha2:'AR',alpha3:'ARG',code:54},
      {id:10,name:'Armenia',alpha2:'AM',alpha3:'ARM',code:374},
      {id:11,name:'Aruba',alpha2:'AW',alpha3:'ABW',code:297},
      {id:12,name:'Australia',alpha2:'AU',alpha3:'AUS',code:61},
      {id:13,name:'Austria',alpha2:'AT',alpha3:'AUT',code:43},
      {id:14,name:'Azerbaijan',alpha2:'AZ',alpha3:'AZE',code:994},
      {id:15,name:'Bahamas',alpha2:'BS',alpha3:'BHS',code:1242},
      {id:16,name:'Bahrain',alpha2:'BH',alpha3:'BHR',code:973},
      {id:17,name:'Bangladesh',alpha2:'BD',alpha3:'BGD',code:880},
      {id:18,name:'Barbados',alpha2:'BB',alpha3:'BRB',code:1246},
      {id:19,name:'Belarus',alpha2:'BY',alpha3:'BLR',code:375},
      {id:20,name:'Belgium',alpha2:'BE',alpha3:'BEL',code:32},
      {id:21,name:'Belize',alpha2:'BZ',alpha3:'BLZ',code:501},
      {id:22,name:'Benin',alpha2:'BJ',alpha3:'BEN',code:229},
      {id:23,name:'Bermuda',alpha2:'BM',alpha3:'BMU',code:1441},
      {id:24,name:'Bhutan',alpha2:'	BT',alpha3:'BTN',code:975},
      {id:25,name:'Bolivia',alpha2:'BO',alpha3:'BOL',code:591},
      {id:26,name:'Bosnia and Herzegovina',alpha2:'BA',alpha3:'BIH',code:387},
      {id:27,name:'Botswana',alpha2:'BW',alpha3:'BWA',code:267},
      {id:28,name:'Brazil',alpha2:'BR',alpha3:'BRA',code:55},
      {id:29,name:'British Indian Ocean Territory',alpha2:'IO',alpha3:'IOT',code:246},
      {id:30,name:'British Virgin Islands',alpha2:'	VG',alpha3:'VGB',code:1284},
      {id:31,name:'Brunei',alpha2:'	BN',alpha3:'BRN',code:673},
      {id:32,name:'Bulgaria',alpha2:'BG',alpha3:'BGR',code:359},
      {id:33,name:'Burkina Faso',alpha2:'BF',alpha3:'BFA',code:226},
      {id:34,name:'Burma (Myanmar)',alpha2:'MM',alpha3:'MMR',code:95},
      {id:35,name:'Burundi',alpha2:'BI',alpha3:'BDI',code:257},
      {id:36,name:'Cambodia',alpha2:'KH',alpha3:'KHM',code:855},
      {id:37,name:'Cameroon',alpha2:'CM',alpha3:'CMR',code:237},
      {id:38,name:'Canada',alpha2:'CA',alpha3:'CAN',code:1},
      {id:39,name:'Cape Verde',alpha2:'CV',alpha3:'CPV',code:238},
      {id:40,name:'Cayman Islands',alpha2:'KY',alpha3:'CYM',code:1345},
      {id:41,name:'Central African Republic',alpha2:'CF',alpha3:'CAF',code:236},
      {id:42,name:'Chad',alpha2:'TD',alpha3:'TCD',code:235},
      {id:43,name:'Chile',alpha2:'CL',alpha3:'CHL',code:56},
      {id:44,name:'China',alpha2:'CN',alpha3:'CHN',code:86},
      {id:45,name:'Christmas Island',alpha2:'CX',alpha3:'CXR',code:61},
      {id:46,name:'Cocos (Keeling) Islands',alpha2:'CC',alpha3:'CCK',code:61},
      {id:47,name:'Colombia',alpha2:'CO',alpha3:'COL',code:57},
      {id:48,name:'Comoros',alpha2:'KM',alpha3:'COM',code:269},
      {id:49,name:'Cook Islands',alpha2:'CK',alpha3:'COK',code:682},
      {id:50,name:'Costa Rica',alpha2:'CR',alpha3:'CRC',code:506},
      {id:51,name:'Croatia',alpha2:'HR',alpha3:'HRV',code:385},
      {id:52,name:'Cuba',alpha2:'CU',alpha3:'CUB',code:53},
      {id:53,name:'Curaçao',alpha2:'CW',alpha3:'CUW',code:599},
      {id:54,name:'Cyprus',alpha2:'CY',alpha3:'CYP',code:357},
      {id:55,name:'Czech Republic',alpha2:'CZ',alpha3:'CZE',code:420},
      {id:56,name:'Democratic Republic of the Congo',alpha2:'CD',alpha3:'COD',code:243},
      {id:57,name:'Denmark',alpha2:'DK',alpha3:'DNK',code:45},
      {id:58,name:'Djibouti',alpha2:'DJ',alpha3:'DJI',code:253},
      {id:59,name:'Dominica',alpha2:'DM',alpha3:'DMA',code:1767},
      {id:60,name:'Dominican',alpha2:'DO',alpha3:'DOM',code:1809},
      {id:61,name:'Dominican Republic',alpha2:'DO',alpha3:'DOM',code:1829},
      {id:62,name:'Dominican Republic',alpha2:'DO',alpha3:'DOM',code:1849},
      {id:63,name:'Ecuador',alpha2:'EC',alpha3:'ECU',code:593},
      {id:64,name:'Egypt',alpha2:'EG',alpha3:'EGY',code:20},
      {id:65,name:'El Salvador',alpha2:'SV',alpha3:'SLV',code:503},
      {id:66,name:'Equatorial Guinea',alpha2:'GQ',alpha3:'GNQ',code:240},
      {id:67,name:'Eritrea',alpha2:'ER',alpha3:'ERI',code:291},
      {id:68,name:'Estonia',alpha2:'EE',alpha3:'EST',code:372},
      {id:69,name:'Eswatini',alpha2:'SZ',alpha3:'SWZ',code:268},
      {id:70,name:'Ethiopia',alpha2:'ET',alpha3:'ETH',code:251},
      {id:71,name:'Falkland Islands',alpha2:'FK',alpha3:'FLK',code:500},
      {id:72,name:'Faroe Islands',alpha2:'FO',alpha3:'FRO',code:298},
      {id:73,name:'Fiji',alpha2:'FJ',alpha3:'FJI',code:679},
      {id:74,name:'Finland',alpha2:'FI',alpha3:'FIN',code:358},
      {id:75,name:'France',alpha2:'FR',alpha3:'FRA',code:33},
      {id:76,name:'French Polynesia',alpha2:'PF',alpha3:'PYF',code:689},
      {id:77,name:'French Guiana',alpha2:'GF',alpha3:'GFA',code:594},
      {id:78,name:'Gabon',alpha2:'GA',alpha3:'GAB',code:241},
      {id:79,name:'Gambia',alpha2:'GM',alpha3:'GMB',code:220},
      {id:80,name:'Georgia',alpha2:'GE',alpha3:'GEO',code:995},
      {id:81,name:'Germany',alpha2:'DE',alpha3:'DEU',code:49},
      {id:82,name:'Ghana',alpha2:'GH',alpha3:'GHA',code:233},
      {id:83,name:'Gibraltar',alpha2:'GI',alpha3:'GIB',code:350},
      {id:84,name:'Greece',alpha2:'GR',alpha3:'GRC',code:30},
      {id:85,name:'Greenland',alpha2:'GL',alpha3:'GRL',code:299},
      {id:86,name:'Grenada',alpha2:'GD',alpha3:'GRD',code:1473},
      {id:87,name:'Guadeloupe',alpha2:'GP',alpha3:'GLP',code:590},
      {id:88,name:'Guam',alpha2:'GU',alpha3:'GUM',code:1671},
      {id:89,name:'Guatemala',alpha2:'GT',alpha3:'GTM',code:502},
      {id:90,name:'Guinea',alpha2:'GN',alpha3:'GIN',code:224},
      {id:91,name:'Guinea-Bissau',alpha2:'GW',alpha3:'GNB',code:245},
      {id:92,name:'Guyana',alpha2:'GY',alpha3:'GUY',code:592},
      {id:93,name:'Haiti',alpha2:'HT',alpha3:'HTI',code:509},
      {id:94,name:'Holy See (Vatican City)',alpha2:'VA',alpha3:'VAT',code:379},
      {id:95,name:'Honduras',alpha2:'HN',alpha3:'HND',code:504},
      {id:96,name:'Hong Kong',alpha2:'HK',alpha3:'HKG',code:852},
      {id:97,name:'Hungary',alpha2:'HU',alpha3:'HUN',code:36},
      {id:98,name:'Iceland',alpha2:'IS',alpha3:'IS',code:354},
      {id:99,name:'India',alpha2:'IN',alpha3:'IND',code:91},
      {id:100,name:'Indonesia',alpha2:'ID',alpha3:'IDN',code:62},
      {id:101,name:'Iran',alpha2:'IR',alpha3:'IRN',code:98},
      {id:102,name:'Iraq',alpha2:'IQ',alpha3:'IRQ',code:964},
      {id:103,name:'Ireland',alpha2:'IE',alpha3:'IRL',code:353},
      {id:104,name:'Isle of Man',alpha2:'IM',alpha3:'IMN',code:44},
      {id:105,name:'Israel',alpha2:'IL',alpha3:'ISR',code:972},
      {id:106,name:'Italy',alpha2:'IT',alpha3:'ITA',code:39},
      {id:107,name:'Ivory Coast',alpha2:'CI',alpha3:'CIV',code:225},
      {id:108,name:'Jamaica',alpha2:'JM',alpha3:'JAM',code:1876},
      {id:109,name:'Japan',alpha2:'JP',alpha3:'JPN',code:81},
      {id:110,name:'Jordan',alpha2:'JO',alpha3:'JOR',code:962},
      {id:111,name:'Kazakhstan',alpha2:'KZ',alpha3:'KAZ',code:7},
      {id:112,name:'Kenya',alpha2:'KE',alpha3:'KEN',code:254},
      {id:113,name:'Kiribati',alpha2:'KI',alpha3:'KIR',code:686},
      {id:114,name:'Kosovo',alpha2:'RS',alpha3:'SRB',code:383},
      {id:115,name:'Kuwait',alpha2:'KW',alpha3:'KWT',code:965},
      {id:116,name:'Kyrgyzstan',alpha2:'KG',alpha3:'KGZ',code:996},
      {id:117,name:'Laos',alpha2:'LA',alpha3:'LAO',code:856},
      {id:118,name:'Latvia',alpha2:'LV',alpha3:'LVA',code:371},
      {id:119,name:'Lebanon',alpha2:'LB',alpha3:'LBN',code:961},
      {id:120,name:'Lesotho',alpha2:'LS',alpha3:'LSO',code:266},
      {id:121,name:'Liberia',alpha2:'LR',alpha3:'LBR',code:231},
      {id:122,name:'Libya',alpha2:'LY',alpha3:'LBY',code:218},
      {id:123,name:'Liechtenstein',alpha2:'LI',alpha3:'LIE',code:423},
      {id:124,name:'Lithuania',alpha2:'LT',alpha3:'LTU',code:370},
      {id:125,name:'Luxembourg',alpha2:'LU',alpha3:'LUX',code:352},
      {id:126,name:'Macau',alpha2:'MO',alpha3:'MAC',code:853},
      {id:127,name:'Madagascar',alpha2:'MG',alpha3:'MDG',code:261},
      {id:128,name:'Malawi',alpha2:'MW',alpha3:'MWI',code:265},
      {id:129,name:'Malaysia',alpha2:'MY',alpha3:'MYS',code:60},
      {id:130,name:'Maldives',alpha2:'MV',alpha3:'MDV',code:960},
      {id:131,name:'Mali',alpha2:'ML',alpha3:'MLI',code:223},
      {id:132,name:'Malta',alpha2:'MT',alpha3:'MLT',code:356},
      {id:133,name:'Marshall Islands',alpha2:'MH',alpha3:'MHL',code:692},
      {id:134,name:'Martinique',alpha2:'MQ',alpha3:'MTQ',code:596},
      {id:135,name:'Mauritania',alpha2:'MR',alpha3:'MRT',code:222},
      {id:136,name:'Mauritius',alpha2:'MU',alpha3:'MUS',code:230},
      {id:137,name:'Mayotte',alpha2:'YT',alpha3:'MYT',code:262},
      {id:138,name:'Mexico',alpha2:'MX',alpha3:'MEX',code:52},
      {id:139,name:'Micronesia',alpha2:'FM',alpha3:'FSM',code:691},
      {id:140,name:'Moldova',alpha2:'MD',alpha3:'MDA',code:373},
      {id:141,name:'Monaco',alpha2:'MC',alpha3:'MCO',code:377},
      {id:142,name:'Mongolia',alpha2:'MN',alpha3:'MNG',code:976},
      {id:143,name:'Montenegro',alpha2:'ME',alpha3:'MNE',code:382},
      {id:144,name:'Montserrat',alpha2:'MS',alpha3:'MSR',code:1664},
      {id:145,name:'Morocco',alpha2:'MA',alpha3:'MAR',code:212},
      {id:146,name:'Mozambique',alpha2:'MZ',alpha3:'MOZ',code:258},
      {id:147,name:'Namibia',alpha2:'NA',alpha3:'NAM',code:264},
      {id:148,name:'Nauru',alpha2:'NR',alpha3:'NRU',code:674},
      {id:149,name:'Nepal',alpha2:'NP',alpha3:'NPL',code:977},
      {id:150,name:'Netherlands',alpha2:'NL',alpha3:'NLD',code:31},
      {id:151,name:'Netherlands Antilles',alpha2:'AN',alpha3:'ANT',code:599},
      {id:152,name:'New Caledonia',alpha2:'NC',alpha3:'NCL',code:687},
      {id:153,name:'New Zealand',alpha2:'NZ',alpha3:'NZL',code:64},
      {id:154,name:'Nicaragua',alpha2:'NI',alpha3:'NIC',code:505},
      {id:155,name:'Niger',alpha2:'NE',alpha3:'NER',code:227},
      {id:156,name:'Nigeria',alpha2:'NG',alpha3:'NGA',code:234},
      {id:157,name:'Niue',alpha2:'NU',alpha3:'NIU',code:683},
      {id:158,name:'Norfolk Island',alpha2:'',alpha3:'NFK',code:672},
      {id:159,name:'North Korea',alpha2:'KP',alpha3:'PRK',code:850},
      {id:160,name:'North Macedonia',alpha2:'MK',alpha3:'MKD',code:389},
      {id:161,name:'Northern Mariana Islands',alpha2:'MP',alpha3:'MNP',code:1670},
      {id:162,name:'Norway',alpha2:'NO',alpha3:'NOR',code:47},
      {id:163,name:'Oman',alpha2:'OM',alpha3:'OMN',code:968},
      {id:164,name:'Pakistan',alpha2:'PK',alpha3:'PAK',code:92},
      {id:165,name:'Palau',alpha2:'PW',alpha3:'PLW',code:680},
      {id:166,name:'Palestine',alpha2:'PS',alpha3:'PSE',code:970},
      {id:167,name:'Panama',alpha2:'PA',alpha3:'PAN',code:507},
      {id:168,name:'Papua New Guinea',alpha2:'PG',alpha3:'PNG',code:675},
      {id:169,name:'Paraguay',alpha2:'PY',alpha3:'PRY',code:595},
      {id:170,name:'Peru',alpha2:'PE',alpha3:'PER',code:51},
      {id:171,name:'Philippines',alpha2:'PH',alpha3:'PHL',code:63},
      {id:172,name:'Pitcairn Islands',alpha2:'PN',alpha3:'PCN',code:870},
      {id:173,name:'Poland',alpha2:'PL',alpha3:'POL',code:48},
      {id:174,name:'Portugal',alpha2:'PT',alpha3:'PRT',code:351},
      {id:175,name:'Puerto Rico',alpha2:'PR',alpha3:'PRI',code:1},
      {id:176,name:'Qatar',alpha2:'QA',alpha3:'QAT',code:974},
      {id:177,name:'Republic of the Congo',alpha2:'CG',alpha3:'COG',code:242},
      {id:178,name:'Romania',alpha2:'RO',alpha3:'ROU',code:40},
      {id:179,name:'Russia',alpha2:'RU',alpha3:'RUS',code:7},
      {id:180,name:'Rwanda',alpha2:'RW',alpha3:'RWA',code:250},
      {id:181,name:'Reunion island',alpha2:'RE',alpha3:'REU',code:262},
      {id:182,name:'Saint Barthelemy',alpha2:'BL',alpha3:'BLM',code:590},
      {id:183,name:'Saint Helena',alpha2:'SH',alpha3:'SHN',code:290},
      {id:184,name:'Saint Kitts and Nevis',alpha2:'KN',alpha3:'KNA',code:1869},
      {id:185,name:'Saint Lucia',alpha2:'LC',alpha3:'LCA',code:1758},
      {id:186,name:'Saint Martin',alpha2:'MF',alpha3:'MAF',code:590},
      {id:187,name:'Saint Pierre and Miquelon',alpha2:'PM',alpha3:'SPM',code:508},
      {id:188,name:'Saint Vincent and the Grenadines',alpha2:'VC',alpha3:'VCT',code:1784},
      {id:189,name:'Samoa',alpha2:'WS',alpha3:'WSM',code:685},
      {id:190,name:'San Marino',alpha2:'SM',alpha3:'SMR',code:378},
      {id:191,name:'Sao Tome and Principe',alpha2:'ST',alpha3:'STP',code:239},
      {id:192,name:'Saudi Arabia',alpha2:'SA',alpha3:'SAU',code:966},
      {id:193,name:'Senegal',alpha2:'SN',alpha3:'SEN',code:221},
      {id:194,name:'Serbia',alpha2:'RS',alpha3:'SRB',code:381},
      {id:195,name:'Seychelles',alpha2:'SC',alpha3:'SYC',code:248},
      {id:196,name:'Sierra Leone',alpha2:'SL',alpha3:'SLE',code:232},
      {id:197,name:'Singapore',alpha2:'SG',alpha3:'SGP',code:65},
      {id:198,name:'Sint Maarten',alpha2:'SX',alpha3:'SXM',code:1721},
      {id:199,name:'Slovakia',alpha2:'SK',alpha3:'SVK',code:421},
      {id:200,name:'Slovenia',alpha2:'SI',alpha3:'SVN',code:386},
      {id:201,name:'Solomon Islands',alpha2:'SB',alpha3:'SLB',code:677},
      {id:202,name:'Somalia',alpha2:'SO',alpha3:'SOM',code:252},
      {id:203,name:'South Africa',alpha2:'ZA',alpha3:'ZAF',code:27},
      {id:204,name:'South Korea',alpha2:'KR',alpha3:'KOR',code:82},
      {id:205,name:'South Sudan',alpha2:'SS',alpha3:'SSD',code:211},
      {id:206,name:'Spain',alpha2:'ES',alpha3:'ESP',code:34},
      {id:207,name:'Sri Lanka',alpha2:'LK',alpha3:'LKA',code:94},
      {id:208,name:'Sudan',alpha2:'SD',alpha3:'SDN',code:249},
      {id:209,name:'Suriname',alpha2:'SR',alpha3:'SUR',code:597},
      {id:210,name:'Sweden',alpha2:'SE',alpha3:'SWE',code:46},
      {id:211,name:'Switzerland',alpha2:'CH',alpha3:'CHE',code:41},
      {id:212,name:'Syria',alpha2:'SY',alpha3:'SYR',code:963},
      {id:213,name:'Taiwan',alpha2:'TW',alpha3:'TWN',code:886},
      {id:214,name:'Tajikistan',alpha2:'TJ',alpha3:'TJK',code:992},
      {id:215,name:'Tanzania',alpha2:'TZ',alpha3:'TZA',code:255},
      {id:216,name:'Thailand',alpha2:'TH',alpha3:'THA',code:66},
      {id:217,name:'Timor-Leste',alpha2:'TL',alpha3:'TLS',code:670},
      {id:218,name:'Togo',alpha2:'TG',alpha3:'TGO',code:228},
      {id:219,name:'Tokelau',alpha2:'TK',alpha3:'TKL',code:690},
      {id:220,name:'Tonga',alpha2:'TO',alpha3:'TON',code:676},
      {id:221,name:'Trinidad and Tobago',alpha2:'TT',alpha3:'TTO',code:1868},
      {id:222,name:'Tunisia',alpha2:'TN',alpha3:'TUN',code:216},
      {id:223,name:'Turkey',alpha2:'TR',alpha3:'TUR',code:90},
      {id:224,name:'Turkmenistan',alpha2:'TM',alpha3:'TKM',code:993},
      {id:225,name:'Turks and Caicos Islands',alpha2:'TC',alpha3:'TCA',code:1649},
      {id:226,name:'Tuvalu',alpha2:'TV',alpha3:'TUV',code:688},
      {id:227,name:'Uganda',alpha2:'UG',alpha3:'UGA',code:256},
      {id:228,name:'Ukraine',alpha2:'UA',alpha3:'UKR',code:380},
      {id:229,name:'United Arab Emirates',alpha2:'AE',alpha3:'ARE',code:971},
      {id:230,name:'United Kingdom',alpha2:'GB',alpha3:'GBR',code:44},
      {id:231,name:'United States',alpha2:'US',alpha3:'USA',code:1},
      {id:232,name:'Uruguay',alpha2:'UY',alpha3:'URY',code:598},
      {id:233,name:'US Virgin Islands',alpha2:'VI',alpha3:'VIR',code:1340},
      {id:234,name:'Uzbekistan',alpha2:'UZ',alpha3:'UZB',code:998},
      {id:235,name:'Vanuatu',alpha2:'VU',alpha3:'VUT',code:678},
      {id:236,name:'Venezuela',alpha2:'VE',alpha3:'VEN',code:58},
      {id:237,name:'Vietnam',alpha2:'VN',alpha3:'VNM',code:84},
      {id:238,name:'Wallis and Futuna',alpha2:'WF',alpha3:'WLF',code:681},
      {id:239,name:'Yemen',alpha2:'YE',alpha3:'YEM',code:967},
      {id:240,name:'Zambia',alpha2:'ZM',alpha3:'ZMB',code:260},
      {id:241,name:'Zimbabwe',alpha2:'ZW',alpha3:'ZWE',code:263},
  ]

  private static wasSortedFor:string|null=null;
  static getNormalizedCountries(lang:string):ICountryData[]{

      // TODO: translate country using localization

      if(this.wasSortedFor !== lang){
          this.countries.sort((a,b)=>{
              if(a.name>b.name)
                  return 1
              if(b.name>a.name)
                  return -1
              return 0;
          })
      }


      return this.countries;
  }


  static getCountryByAlpha2(alpha2:string):ICountryData|null{
      alpha2 = alpha2.toUpperCase();
      return this.countries.find(val=>val.alpha2 === alpha2) ?? null;
  }

  
  /**
   *  Get country by phone
   *  @param phoneNumber - string, phone number
   *  @returns ICountryData or null if not found
   */
  
  static getCountryByPhoneNumber(phoneNumber:string):ICountryData|null{

     

      // remove pluss
      if (phoneNumber.startsWith("+"))
          phoneNumber = phoneNumber.substring(1);
          
      // remove leading zeros
      phoneNumber = phoneNumber.replace(/^0+/, '');
      if (phoneNumber.length < 6)
      {
          return null;
      }
      
      let guessCode = phoneNumber.substring(0,4);
      let foundCountries=[]

      // Find country;
      for(let i of this.countries){
          // match digits
          let m=4
          while(m-->0){
              const code = parseInt(guessCode.substring(0,m));
              if(code === i.code){
                  foundCountries.push(i);
                  break;
              }
          }
      }
      
   
      // KAZAKHSTAN AND RUSSIA, USA, PUERTO RIKO AND CANADA - CHECK!
      //foundedCountries[0][4] = phoneNumber.substr(foundedCountries[0][3].length);
      return foundCountries[0] ?? null;
  }
}