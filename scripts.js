
// Replace your Configuration here..
// var config = {
//     apiKey: "AIzaSyCKp-RwlkZhJBehZLOSLhn1E7WpoXn9xoI",
//     authDomain: "realtime-on-map-example.firebaseapp.com",
//     databaseURL: "https://realtime-on-map-example.firebaseio.com",
//     projectId: "realtime-on-map-example",
//     storageBucket: "",
//     messagingSenderId: "851837622908"
// };

const config = {
    apiKey: "AIzaSyBIPno0JRrr2YPLHbcl17bgb3s8AHqi2Ok",
    authDomain: "alumbradomtm.firebaseapp.com",
    databaseURL: "https://alumbradomtm-default-rtdb.firebaseio.com",
    projectId: "alumbradomtm",
    storageBucket: "alumbradomtm.appspot.com",
    messagingSenderId: "790184867359",
    appId: "1:790184867359:web:0b200e39cb45385e2b472a",
    measurementId: "G-LHL4H2629K"
  };
  

  // apiKey: "AIzaSyBRVBJuvk-Mbxzv2DTx2a18jPaope7gBPY",
  // authDomain: "usrsmty.firebaseapp.com",
  // databaseURL: "https://usrsmty.firebaseio.com",
  // projectId: "usrsmty",
  // storageBucket: "usrsmty.appspot.com",
  // messagingSenderId: "840900135873",
  // appId: "1:840900135873:web:cbcc627858630c625ebd40",
  // measurementId: "G-47LEFJRJCX"


//};

firebase.initializeApp(config);




// counter for online cars...
var cars_count = 0;
var pedidos_count = 0;
var colorConductor = "#00023";
// markers array to store all the markers, so that we could remove marker when any car goes offline and its data will be remove from realtime database...
var markers = [];
var conductoresArray = [];

var markersPedidos = [];
var map;

var numDeltas = 100;
var delay = 10; //milliseconds
var i = 0;
var deltaLat;
var deltaLng;
var position = [25.38150559, -100.23598999]; //lat lon CEID

var datos;

function initMap() { // Google Map Initialization... 
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: new google.maps.LatLng(25.38150559, -100.23598999),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

/////////


var polygoneCoords10 = [

{lat:25.52052,lng:-100.18658},
{lat:25.52054,lng:-100.18567},
{lat:25.52046,lng:-100.18524},
{lat:25.52047,lng:-100.18493},
{lat:25.52018,lng:-100.18436},
{lat:25.5201,lng:-100.18415},
{lat:25.51972,lng:-100.18389},
{lat:25.51959,lng:-100.1838},
{lat:25.51958,lng:-100.18377},
{lat:25.51977,lng:-100.18368},
{lat:25.51984,lng:-100.18354},
{lat:25.51971,lng:-100.18316},
{lat:25.5184,lng:-100.18318},
{lat:25.51809,lng:-100.18257},
{lat:25.51865,lng:-100.18063},
{lat:25.51687,lng:-100.17725},
{lat:25.51314,lng:-100.17617},
{lat:25.5129,lng:-100.17544},
{lat:25.51373,lng:-100.17291},
{lat:25.51423,lng:-100.17089},
{lat:25.51694,lng:-100.16745},
{lat:25.51438,lng:-100.16513},
{lat:25.51285,lng:-100.16438},
{lat:25.51037,lng:-100.16101},
{lat:25.50073,lng:-100.15322},
{lat:25.49914,lng:-100.15345},
{lat:25.49724,lng:-100.15145},
{lat:25.49337,lng:-100.15054},
{lat:25.49205,lng:-100.14885},
{lat:25.48873,lng:-100.14779},
{lat:25.48592,lng:-100.14548},
{lat:25.48438,lng:-100.14281},
{lat:25.48312,lng:-100.14189},
{lat:25.48267,lng:-100.14115},
{lat:25.4808,lng:-100.13991},
{lat:25.47718,lng:-100.13569},
{lat:25.47154,lng:-100.13219},
{lat:25.47024,lng:-100.13139},
{lat:25.49036,lng:-100.10957},
{lat:25.49061,lng:-100.10969},
{lat:25.49142,lng:-100.10895},
{lat:25.49153,lng:-100.10841},
{lat:25.50323,lng:-100.09693},
{lat:25.46878,lng:-100.07122},
{lat:25.46977,lng:-100.07005},
{lat:25.47062,lng:-100.06961},
{lat:25.46631,lng:-100.0634},
{lat:25.46631,lng:-100.06318},
{lat:25.46637,lng:-100.06297},
{lat:25.46644,lng:-100.06285},
{lat:25.46634,lng:-100.06277},
{lat:25.46519,lng:-100.06172},
{lat:25.46511,lng:-100.06163},
{lat:25.44797,lng:-100.03743},
{lat:25.45087,lng:-100.03134},
{lat:25.45075,lng:-100.03131},
{lat:25.44934,lng:-100.03212},
{lat:25.44922,lng:-100.03234},
{lat:25.44892,lng:-100.03336},
{lat:25.44878,lng:-100.03355},
{lat:25.44851,lng:-100.0336},
{lat:25.44835,lng:-100.0337},
{lat:25.44811,lng:-100.03422},
{lat:25.44774,lng:-100.03444},
{lat:25.4469,lng:-100.03455},
{lat:25.44679,lng:-100.03464},
{lat:25.44671,lng:-100.03481},
{lat:25.44673,lng:-100.0354},
{lat:25.44666,lng:-100.03558},
{lat:25.44656,lng:-100.03571},
{lat:25.44574,lng:-100.03621},
{lat:25.44566,lng:-100.03634},
{lat:25.44562,lng:-100.03669},
{lat:25.44552,lng:-100.03685},
{lat:25.4451,lng:-100.03708},
{lat:25.44439,lng:-100.03771},
{lat:25.44386,lng:-100.03772},
{lat:25.44356,lng:-100.03828},
{lat:25.44318,lng:-100.03868},
{lat:25.4425,lng:-100.039},
{lat:25.44242,lng:-100.03911},
{lat:25.44243,lng:-100.03925},
{lat:25.4425,lng:-100.03944},
{lat:25.44262,lng:-100.0398},
{lat:25.44221,lng:-100.04023},
{lat:25.44197,lng:-100.04046},
{lat:25.44177,lng:-100.04083},
{lat:25.44151,lng:-100.04104},
{lat:25.44156,lng:-100.04132},
{lat:25.44156,lng:-100.0416},
{lat:25.44145,lng:-100.04177},
{lat:25.44095,lng:-100.0417},
{lat:25.44069,lng:-100.04184},
{lat:25.44055,lng:-100.04216},
{lat:25.44099,lng:-100.04291},
{lat:25.44101,lng:-100.04315},
{lat:25.44092,lng:-100.04339},
{lat:25.4407,lng:-100.04351},
{lat:25.44035,lng:-100.04351},
{lat:25.43968,lng:-100.04314},
{lat:25.43937,lng:-100.0429},
{lat:25.43902,lng:-100.04293},
{lat:25.43865,lng:-100.04386},
{lat:25.43846,lng:-100.0442},
{lat:25.43819,lng:-100.04436},
{lat:25.43786,lng:-100.04433},
{lat:25.43725,lng:-100.04453},
{lat:25.43707,lng:-100.04436},
{lat:25.43693,lng:-100.04417},
{lat:25.43674,lng:-100.0442},
{lat:25.43683,lng:-100.04484},
{lat:25.43701,lng:-100.04503},
{lat:25.43719,lng:-100.0453},
{lat:25.43684,lng:-100.04586},
{lat:25.43535,lng:-100.04592},
{lat:25.43245,lng:-100.04852},
{lat:25.43244,lng:-100.04905},
{lat:25.43164,lng:-100.04977},
{lat:25.42903,lng:-100.05121},
{lat:25.42713,lng:-100.05288},
{lat:25.42589,lng:-100.05325},
{lat:25.42527,lng:-100.05361},
{lat:25.41771,lng:-100.05992},
{lat:25.41746,lng:-100.05792},
{lat:25.41719,lng:-100.05698},
{lat:25.41666,lng:-100.05693},
{lat:25.41491,lng:-100.0578},
{lat:25.41436,lng:-100.05768},
{lat:25.41411,lng:-100.05729},
{lat:25.41471,lng:-100.05492},
{lat:25.41469,lng:-100.05465},
{lat:25.40971,lng:-100.05092},
{lat:25.40933,lng:-100.05118},
{lat:25.39526,lng:-100.07434},
{lat:25.39372,lng:-100.07637},
{lat:25.39074,lng:-100.07526},
{lat:25.38541,lng:-100.07464},
{lat:25.38381,lng:-100.07063},
{lat:25.37953,lng:-100.06691},
{lat:25.37761,lng:-100.06364},
{lat:25.37074,lng:-100.0596},
{lat:25.3683,lng:-100.05994},
{lat:25.36658,lng:-100.05946},
{lat:25.3647,lng:-100.05839},
{lat:25.36323,lng:-100.05875},
{lat:25.3615,lng:-100.05817},
{lat:25.33607,lng:-100.0763},
{lat:25.30032,lng:-100.13969},
{lat:25.3001,lng:-100.1398},
{lat:25.29994,lng:-100.13959},
{lat:25.29961,lng:-100.13785},
{lat:25.29933,lng:-100.13738},
{lat:25.2991,lng:-100.13722},
{lat:25.29822,lng:-100.1376},
{lat:25.29684,lng:-100.13729},
{lat:25.29558,lng:-100.13664},
{lat:25.29553,lng:-100.1343},
{lat:25.29494,lng:-100.13319},
{lat:25.29367,lng:-100.13326},
{lat:25.29202,lng:-100.13294},
{lat:25.29132,lng:-100.132},
{lat:25.28693,lng:-100.12859},
{lat:25.28636,lng:-100.12714},
{lat:25.28524,lng:-100.12572},
{lat:25.2843,lng:-100.12502},
{lat:25.28263,lng:-100.1244},
{lat:25.28119,lng:-100.12465},
{lat:25.28054,lng:-100.1246},
{lat:25.27948,lng:-100.12363},
{lat:25.27899,lng:-100.12207},
{lat:25.27902,lng:-100.12132},
{lat:25.27855,lng:-100.12044},
{lat:25.27597,lng:-100.11911},
{lat:25.27474,lng:-100.1183},
{lat:25.27446,lng:-100.11698},
{lat:25.27425,lng:-100.11643},
{lat:25.27257,lng:-100.11478},
{lat:25.27152,lng:-100.11448},
{lat:25.27056,lng:-100.11384},
{lat:25.27041,lng:-100.11329},
{lat:25.27047,lng:-100.11275},
{lat:25.2702,lng:-100.11246},
{lat:25.26993,lng:-100.11242},
{lat:25.2695,lng:-100.11254},
{lat:25.26855,lng:-100.11328},
{lat:25.26724,lng:-100.11375},
{lat:25.2668,lng:-100.11356},
{lat:25.26641,lng:-100.11305},
{lat:25.26678,lng:-100.1114},
{lat:25.26667,lng:-100.11052},
{lat:25.26631,lng:-100.11013},
{lat:25.26528,lng:-100.10991},
{lat:25.26442,lng:-100.11052},
{lat:25.26381,lng:-100.11049},
{lat:25.26323,lng:-100.10971},
{lat:25.26231,lng:-100.10736},
{lat:25.26208,lng:-100.10605},
{lat:25.26143,lng:-100.10446},
{lat:25.26104,lng:-100.103},
{lat:25.26149,lng:-100.10171},
{lat:25.26203,lng:-100.10119},
{lat:25.26232,lng:-100.10039},
{lat:25.26193,lng:-100.09933},
{lat:25.26159,lng:-100.09907},
{lat:25.26096,lng:-100.09912},
{lat:25.26009,lng:-100.09998},
{lat:25.25959,lng:-100.10023},
{lat:25.25881,lng:-100.10038},
{lat:25.25804,lng:-100.10062},
{lat:25.25621,lng:-100.10157},
{lat:25.25584,lng:-100.10159},
{lat:25.25575,lng:-100.10149},
{lat:25.25565,lng:-100.10104},
{lat:25.2558,lng:-100.10062},
{lat:25.25644,lng:-100.0999},
{lat:25.25668,lng:-100.09938},
{lat:25.25678,lng:-100.09868},
{lat:25.25662,lng:-100.09777},
{lat:25.25651,lng:-100.09677},
{lat:25.25613,lng:-100.09562},
{lat:25.25595,lng:-100.09536},
{lat:25.2555,lng:-100.09514},
{lat:25.25498,lng:-100.09516},
{lat:25.25443,lng:-100.0955},
{lat:25.25429,lng:-100.09578},
{lat:25.25406,lng:-100.09655},
{lat:25.25368,lng:-100.09688},
{lat:25.25346,lng:-100.09695},
{lat:25.25306,lng:-100.09689},
{lat:25.25272,lng:-100.09655},
{lat:25.25321,lng:-100.09588},
{lat:25.25322,lng:-100.09573},
{lat:25.25327,lng:-100.09507},
{lat:25.25344,lng:-100.09488},
{lat:25.2542,lng:-100.09347},
{lat:25.25418,lng:-100.09325},
{lat:25.25392,lng:-100.09278},
{lat:25.25234,lng:-100.09213},
{lat:25.25155,lng:-100.09212},
{lat:25.25119,lng:-100.09177},
{lat:25.25033,lng:-100.0902},
{lat:25.25005,lng:-100.09},
{lat:25.24834,lng:-100.09003},
{lat:25.24806,lng:-100.08966},
{lat:25.24791,lng:-100.08894},
{lat:25.24724,lng:-100.08725},
{lat:25.24669,lng:-100.08582},
{lat:25.24626,lng:-100.0854},
{lat:25.24543,lng:-100.08552},
{lat:25.2438,lng:-100.0872},
{lat:25.2436,lng:-100.08728},
{lat:25.24343,lng:-100.08715},
{lat:25.24321,lng:-100.08648},
{lat:25.24297,lng:-100.08596},
{lat:25.24257,lng:-100.08562},
{lat:25.23831,lng:-100.08722},
{lat:25.25976,lng:-100.13291},
{lat:25.224,lng:-100.17125},
{lat:25.2695,lng:-100.21014},
{lat:25.26907,lng:-100.21242},
{lat:25.26873,lng:-100.21487},
{lat:25.26935,lng:-100.21702},
{lat:25.26944,lng:-100.21798},
{lat:25.26897,lng:-100.21935},
{lat:25.26794,lng:-100.22008},
{lat:25.26721,lng:-100.22138},
{lat:25.26857,lng:-100.22451},
{lat:25.26864,lng:-100.22492},
{lat:25.26855,lng:-100.22519},
{lat:25.26758,lng:-100.22575},
{lat:25.26726,lng:-100.22625},
{lat:25.268,lng:-100.22788},
{lat:25.26754,lng:-100.23036},
{lat:25.26782,lng:-100.23202},
{lat:25.26897,lng:-100.2347},
{lat:25.26924,lng:-100.2374},
{lat:25.27033,lng:-100.23895},
{lat:25.26971,lng:-100.24377},
{lat:25.30691,lng:-100.25414},
{lat:25.30551,lng:-100.25821},
{lat:25.30529,lng:-100.26397},
{lat:25.30682,lng:-100.26598},
{lat:25.30741,lng:-100.26745},
{lat:25.3114,lng:-100.27317},
{lat:25.31216,lng:-100.27483},
{lat:25.31446,lng:-100.27736},
{lat:25.31629,lng:-100.27744},
{lat:25.31714,lng:-100.27913},
{lat:25.31971,lng:-100.28158},
{lat:25.32068,lng:-100.2854},
{lat:25.32555,lng:-100.29235},
{lat:25.3262,lng:-100.29397},
{lat:25.32696,lng:-100.29867},
{lat:25.32897,lng:-100.30427},
{lat:25.33022,lng:-100.30597},
{lat:25.33155,lng:-100.30657},
{lat:25.33253,lng:-100.30766},
{lat:25.33345,lng:-100.30974},
{lat:25.33553,lng:-100.31139},
{lat:25.33724,lng:-100.31505},
{lat:25.33754,lng:-100.31673},
{lat:25.33802,lng:-100.31811},
{lat:25.33823,lng:-100.31959},
{lat:25.33858,lng:-100.32073},
{lat:25.33999,lng:-100.32335},
{lat:25.34036,lng:-100.3268},
{lat:25.3394,lng:-100.32876},
{lat:25.33894,lng:-100.33019},
{lat:25.33869,lng:-100.33194},
{lat:25.33837,lng:-100.33284},
{lat:25.33792,lng:-100.33485},
{lat:25.33792,lng:-100.33744},
{lat:25.33788,lng:-100.33907},
{lat:25.33777,lng:-100.34041},
{lat:25.33791,lng:-100.34126},
{lat:25.33785,lng:-100.34291},
{lat:25.33753,lng:-100.34414},
{lat:25.33714,lng:-100.3449},
{lat:25.337,lng:-100.34602},
{lat:25.33689,lng:-100.34703},
{lat:25.33688,lng:-100.34832},
{lat:25.33677,lng:-100.34919},
{lat:25.33671,lng:-100.35017},
{lat:25.33586,lng:-100.35151},
{lat:25.33542,lng:-100.35246},
{lat:25.33458,lng:-100.35309},
{lat:25.33112,lng:-100.3755},
{lat:25.32961,lng:-100.38532},
{lat:25.32951,lng:-100.38585},
{lat:25.32919,lng:-100.38683},
{lat:25.32871,lng:-100.3875},
{lat:25.32856,lng:-100.38893},
{lat:25.32848,lng:-100.39028},
{lat:25.32806,lng:-100.39103},
{lat:25.32805,lng:-100.39177},
{lat:25.32803,lng:-100.39355},
{lat:25.32785,lng:-100.39457},
{lat:25.32805,lng:-100.39574},
{lat:25.32817,lng:-100.39698},
{lat:25.3283,lng:-100.39796},
{lat:25.32798,lng:-100.3989},
{lat:25.32791,lng:-100.39954},
{lat:25.32911,lng:-100.40264},
{lat:25.32882,lng:-100.40847},
{lat:25.3299,lng:-100.41436},
{lat:25.327,lng:-100.41456},
{lat:25.32798,lng:-100.41845},
{lat:25.32978,lng:-100.42557},
{lat:25.33149,lng:-100.43354},
{lat:25.33186,lng:-100.44603},
{lat:25.33731,lng:-100.46864},
{lat:25.33779,lng:-100.4701},
{lat:25.40812,lng:-100.45195},
{lat:25.41047,lng:-100.45159},
{lat:25.41081,lng:-100.45188},
{lat:25.41164,lng:-100.45314},
{lat:25.41337,lng:-100.45416},
{lat:25.41495,lng:-100.45679},
{lat:25.41523,lng:-100.45795},
{lat:25.41603,lng:-100.45975},
{lat:25.41812,lng:-100.46257},
{lat:25.41815,lng:-100.46257},
{lat:25.42012,lng:-100.46645},
{lat:25.42054,lng:-100.46761},
{lat:25.42105,lng:-100.46815},
{lat:25.42172,lng:-100.46934},
{lat:25.42195,lng:-100.47018},
{lat:25.42301,lng:-100.47259},
{lat:25.42368,lng:-100.47421},
{lat:25.42416,lng:-100.47616},
{lat:25.42517,lng:-100.47879},
{lat:25.42725,lng:-100.48345},
{lat:25.42938,lng:-100.48925},
{lat:25.42984,lng:-100.49073},
{lat:25.43041,lng:-100.49226},
{lat:25.43084,lng:-100.49355},
{lat:25.43125,lng:-100.49507},
{lat:25.43162,lng:-100.4964},
{lat:25.43196,lng:-100.49741},
{lat:25.43234,lng:-100.49891},
{lat:25.43284,lng:-100.50169},
{lat:25.43295,lng:-100.50342},
{lat:25.43298,lng:-100.50458},
{lat:25.43299,lng:-100.50489},
{lat:25.43299,lng:-100.50503},
{lat:25.43294,lng:-100.50691},
{lat:25.43288,lng:-100.50856},
{lat:25.43298,lng:-100.50891},
{lat:25.43297,lng:-100.5098},
{lat:25.43327,lng:-100.51164},
{lat:25.43349,lng:-100.51284},
{lat:25.43378,lng:-100.51406},
{lat:25.43382,lng:-100.51478},
{lat:25.43383,lng:-100.51483},
{lat:25.43383,lng:-100.51573},
{lat:25.43375,lng:-100.51656},
{lat:25.43351,lng:-100.51729},
{lat:25.43376,lng:-100.51948},
{lat:25.43432,lng:-100.5227},
{lat:25.43546,lng:-100.52264},
{lat:25.44779,lng:-100.51794},
{lat:25.44904,lng:-100.51746},
{lat:25.44975,lng:-100.52541},
{lat:25.46347,lng:-100.53088},
{lat:25.45544,lng:-100.5002},
{lat:25.45142,lng:-100.47705},
{lat:25.45379,lng:-100.47208},
{lat:25.4453,lng:-100.46576},
{lat:25.43788,lng:-100.45769},
{lat:25.43495,lng:-100.44373},
{lat:25.43584,lng:-100.42552},
{lat:25.44222,lng:-100.41954},
{lat:25.4445,lng:-100.42318},
{lat:25.45193,lng:-100.41751},
{lat:25.45137,lng:-100.4142},
{lat:25.46901,lng:-100.4036},
{lat:25.45584,lng:-100.3867},
{lat:25.43567,lng:-100.34502},
{lat:25.43536,lng:-100.34522},
{lat:25.43498,lng:-100.34481},
{lat:25.43536,lng:-100.34267},
{lat:25.43036,lng:-100.33059},
{lat:25.42953,lng:-100.32459},
{lat:25.42567,lng:-100.32131},
{lat:25.42124,lng:-100.3101},
{lat:25.4189,lng:-100.30905},
{lat:25.41536,lng:-100.29868},
{lat:25.41353,lng:-100.29605},
{lat:25.42441,lng:-100.27528},
{lat:25.4232,lng:-100.27489},
{lat:25.42049,lng:-100.27583},
{lat:25.41991,lng:-100.27588},
{lat:25.41928,lng:-100.27186},
{lat:25.42952,lng:-100.23872},
{lat:25.44534,lng:-100.2499},
{lat:25.48213,lng:-100.25762},
{lat:25.48362,lng:-100.2553},
{lat:25.48458,lng:-100.25221},
{lat:25.48782,lng:-100.24961},
{lat:25.48968,lng:-100.24473},
{lat:25.4916,lng:-100.24289},
{lat:25.49285,lng:-100.2419},
{lat:25.49508,lng:-100.23876},
{lat:25.49539,lng:-100.23789},
{lat:25.49636,lng:-100.23565},
{lat:25.49606,lng:-100.23307},
{lat:25.49786,lng:-100.23081},
{lat:25.49864,lng:-100.22939},
{lat:25.50024,lng:-100.22942},
{lat:25.50542,lng:-100.23319},
{lat:25.50757,lng:-100.23002},
{lat:25.50019,lng:-100.22492},
{lat:25.50039,lng:-100.22282},
{lat:25.50057,lng:-100.22253},
{lat:25.50062,lng:-100.22254},
{lat:25.50066,lng:-100.22214},
{lat:25.50098,lng:-100.22185},
{lat:25.5012,lng:-100.22138},
{lat:25.50189,lng:-100.22043},
{lat:25.50294,lng:-100.21955},
{lat:25.50293,lng:-100.21947},
{lat:25.50275,lng:-100.21915},
{lat:25.50421,lng:-100.21803},
{lat:25.5055,lng:-100.21643},
{lat:25.50639,lng:-100.21531},
{lat:25.50664,lng:-100.21359},
{lat:25.50813,lng:-100.21174},
{lat:25.50962,lng:-100.21086},
{lat:25.5113,lng:-100.20879},
{lat:25.51194,lng:-100.20845},
{lat:25.51224,lng:-100.2076},
{lat:25.51318,lng:-100.20684},
{lat:25.51611,lng:-100.20613},
{lat:25.51642,lng:-100.20523},
{lat:25.51669,lng:-100.20297},
{lat:25.5167,lng:-100.20201},
{lat:25.51559,lng:-100.19988},
{lat:25.51543,lng:-100.1992},
{lat:25.51507,lng:-100.19854},
{lat:25.51492,lng:-100.19813},
{lat:25.51475,lng:-100.19738},
{lat:25.51474,lng:-100.19714},
{lat:25.51508,lng:-100.19677},
{lat:25.51621,lng:-100.19638},
{lat:25.51673,lng:-100.19583},
{lat:25.51698,lng:-100.19502},
{lat:25.51688,lng:-100.19339},
{lat:25.51756,lng:-100.19327},
{lat:25.5187,lng:-100.19345},
{lat:25.51913,lng:-100.19313},
{lat:25.51971,lng:-100.19249},
{lat:25.51989,lng:-100.19229},
{lat:25.5205,lng:-100.19162},
{lat:25.5205,lng:-100.19134},
{lat:25.52045,lng:-100.19111},
{lat:25.51972,lng:-100.19065},
{lat:25.51929,lng:-100.19022},
{lat:25.51901,lng:-100.19015},
{lat:25.51905,lng:-100.18974},
{lat:25.51902,lng:-100.18942},
{lat:25.51902,lng:-100.18914},
{lat:25.5191,lng:-100.18886},
{lat:25.51923,lng:-100.18862},
{lat:25.51937,lng:-100.18845},
{lat:25.51947,lng:-100.1882},
{lat:25.51951,lng:-100.18794},
{lat:25.51943,lng:-100.18754},
{lat:25.5201,lng:-100.1874},
{lat:25.52042,lng:-100.1874},
{lat:25.52073,lng:-100.18726},
{lat:25.52109,lng:-100.18684},
{lat:25.52117,lng:-100.18661},
{lat:25.52106,lng:-100.18664},
{lat:25.5208,lng:-100.18676},
{lat:25.52058,lng:-100.18669},

    



];
var myPolygon10 = new google.maps.Polygon({
     paths: polygoneCoords10,
     strokeColor: '#FF0000',
     strokeOpacity: 0.8,
     strokeWeight: 2,
     fillColor: '#FF0000',
     fillOpacity: 0.35
   });
myPolygon10.setMap(map);


} //end of map




function transition(result, data) {
    datos = data.val();
    console.log("data Mombre: " + datos);
    i = 0;
    deltaLat = (result[0] - position[0]) / numDeltas;
    deltaLng = (result[1] - position[1]) / numDeltas;
    moveMarker();
}

function moveMarker() {
    console.log("Move Markerr Mombre: " + datos.nombre);
    position[0] += deltaLat;
    position[1] += deltaLng;


    //var latlng = new google.maps.LatLng(position[0], position[1]);

    var longlat = [position[1], position[0]];
    //marker.setTitle("Latitude:"+position[0]+" | Longitude:"+position[1]);
    //marker.setPosition(latlng);

    // marker.setLngLat(longlat)
    // marker.addTo(map);


    if (i != numDeltas) {
        i++;
        setTimeout(moveMarker, delay);
    }
}


// This Function will create a car icon with angle and add/display that marker on the map
function AddMarkerConductor(data) {
    let conductor = data;


    let urlIcon = (conductor.situacion == "Disponible") ? 'lampara.png' : 'lampara.png';
    var result = [parseFloat(conductor.latitud), parseFloat(conductor.longitud)];
    //transition(result,data)

    //#region marker e icono

    var icon = { // car icon

        url: urlIcon,
        //path: 'M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805',
        // scale: 0.6,
        scaledSize: new google.maps.Size(30, 30),
        fillColor: colorConductor, //<-- Car Color, you can change it 
        fillOpacity: 1,
        strokeWeight: 1,
        anchor: new google.maps.Point(0, 5),
        rotation: 44 //<-- Car angle
    };

    //path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',

    // Esta es la información del marker que se va a mostrar, el contenido acepta HTML
    var infowindow = new google.maps.InfoWindow({
        content: `<strong>Medidor: ${conductor.medidor}
                    <p>Lampara ${conductor.lampara}</p>
                    <p>Capacidad ${conductor.capacidad}</p>
                    <p>FechaHora ${conductor.fecha_hora}</p>
                    </strong>`
    });
    var uluru = { lat: parseFloat(conductor.latitud), lng: parseFloat(conductor.longitud) };

    var marker = new google.maps.Marker({
        position: uluru,
        icon: icon,
        map: map,
        title: conductor.medidor
    });

    // Al hacer click sobre el marker mostraremos su información en una ventana
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    markers[conductor.key] = marker; // add marker in the markers array...
    document.getElementById("cars").innerHTML = cars_count;
    //#endregion

}


function buildLococationConductoresList(data) {
    let array = data;
    let arraySize = array.length;
    let color;
    var listings = document.getElementById('poimapbox-listings');
    listings.innerHTML = "";
    for (let i = 0; i < arraySize; i++) {
        let element = array[i];
        let conductor = element;

        AddMarkerConductor(element);

        color = (conductor.situacion == "Disponible") ? '#8bc34ba3' : '#ff572287';


        var listing = listings.appendChild(document.createElement('div'));
        listing.innerHTML
        listing.className = 'amenity-poi';


        listing.style.backgroundColor = color;

        listing.id = "listing-" + i;

        var link = listing.appendChild(document.createElement('a'));
        link.innerHTML = "";
        link.href = '#';
        link.className = 'name';
        link.dataPosition = i;

        link.innerHTML =
            // '<img src=' + conductor.properties.imagetmb + '>' +
            '<img src="https://img.icons8.com/officexs/16/000000/lights.png"/>' +
            '<h3>' + conductor.medidor+ '</h3>' +
            '<p>' + conductor.lampara + '</p>' +
            '<p>' + conductor.capacidad + '</p>' +
            '<p>? ' + conductor.fecha_hora + '</p>'

        link.addEventListener('click', function (e) {
            // Update the conductor to the Park associated with the clicked link
            var clickedListing = data[this.dataPosition];
            console.log(clickedListing);
            // // 1. Fly to the point
            flyToStore(clickedListing);

            // // 2. Close all other popups and display popup for clicked Park
            // createPopUp(clickedListing);

            // 3. Highlight listing in sidebar (and remove highlight for all other listings)
            var activeItem = document.getElementsByClassName('amenity-poi active');

            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');

        });

    }
}

function flyToStore(currentFeature) {
    let latitud = parseFloat(currentFeature.latitud);
    let longitud = parseFloat(currentFeature.longitud);
    // map.flyTo({
    //     center: currentFeature,
    //     zoom: 15
    // });

    map.setZoom(17);
    map.panTo({ lat: latitud, lng: longitud });
}

// get firebase database reference...
var cars_Ref = firebase.database().ref('/LAMPARAS_E3_MTM');


var dataConductores = firebase.database().ref('/LAMPARAS_E3_MTM');
dataConductores.on('value', function (snapshot) {
    //updateStarCount(postElement, snapshot.val());

    let conductores = snapshot.val();
    conductoresArray = [];
    for (const key in conductores) {
        if (conductores.hasOwnProperty(key)) {
            const element = conductores[key];
            //console.log(element);
            conductoresArray.push(element);


        }
    }

    buildLococationConductoresList(conductoresArray);
});

// this event will be triggered when a new object will be added in the database...
cars_Ref.on('child_added', function (data) {
    //console.log(data.val());
    cars_count++;
    //AddMarkerConductor(data);
    let conductor = data.val();

});

// this event will be triggered on location change of any car...
cars_Ref.on('child_changed', function (data) {
    markers[data.key].setMap(null);
    //AddMarkerConductor(data);
    let conductor = data.val();

});

// If any car goes offline then this event will get triggered and we'll remove the marker of that car...  
cars_Ref.on('child_removed', function (data) {
    markers[data.key].setMap(null);
    cars_count--;
    document.getElementById("cars").innerHTML = cars_count;
});


function AddPedido(data) {
    var color = "";
 

    if (data.val().suministro != "BAJABAJA") {

        color = "#09ebcd";
        colorConductor = "#09ebcd";

    } else if (data.val().suministro != "ALTABAJA") {
        color = "#32a856";
        colorConductor = "#32a856";
    } else {
        color = "#151582";
    }

    var icon = { // car icon
      path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
         scale: 0.5,
       
        fillColor: color,
        // strokeWeight: 1,
        // anchor: new google.maps.Point(0, 5),
        // rotation: 44 //<-- Car angle
        fillOpacity: 1,
        strokeWeight: 2,
        anchor: new google.maps.Point(0, 5),
        rotation: data.val().angle //<-- Car angle
    };

    // Esta es la información del marker que se va a mostrar, el contenido acepta HTML
    var infowindow = new google.maps.InfoWindow({
        content: `<strong>Medidor: ${data.val().medidor}
                <p>Facturado: ${data.val().facturado}</p>
                <p>Suministro: ${data.val().suministro}</p>
                <p>Lectura: ${data.val().lectura}</p>
                <p>Anomalias: ${data.val().anomalias}</p>
                </strong>`
    });
    var uluru = { lat: parseFloat(data.val().latitud), lng: parseFloat(data.val().longitud) };

    var marker = new google.maps.Marker({
        position: uluru,
        icon: icon,
        map: map,
        title: data.val().nombre
    });

    // Al hacer click sobre el marker mostraremos su información en una ventana
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    markersPedidos[data.key] = marker; // add marker in the markers array...
    document.getElementById("pedidos").innerHTML = pedidos_count;
}




var pedidos_Ref = firebase.database().ref('/RPUMEDIDOR_E3_MTM');

// this event will be triggered when a new object will be added in the database...
pedidos_Ref.on('child_added', function (data) {
    pedidos_count++;
    AddPedido(data);
});

// this event will be triggered on location change of any car...
pedidos_Ref.on('child_changed', function (data) {
    markersPedidos[data.key].setMap(null);
    AddPedido(data);
});

// If any car goes offline then this event will get triggered and we'll remove the marker of that car...  
pedidos_Ref.on('child_removed', function (data) {
    markersPedidos[data.key].setMap(null);
    pedidos_count--;
    document.getElementById("pedidos").innerHTML = pedidos_count;
});



