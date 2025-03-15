KWParser = {
    /**
     * Set it to override the document.referrer string. Used for debugging
     * only.
     */
    debug_referrer: ''
};

KWParser.search_engines = [
    ['google',		'google\\.', 'q'],                             // Google
    ['yahoo',		'search\\.yahoo\\.', 'p'],                     // Yahoo
    ['msn',			'search\\.msn\\.', 'q'],                       // MSN
    ['live',		'search\\.live\\.', 'query'],                  // MSN Live
    ['aol',			'search\\.aol\\.', 'userQuery'],               // AOL
    ['ask',			'ask\\.com', 'q'],                             // Ask.com
    ['altavista',	'altavista\\.', 'q'],                          // AltaVista
    ['feedster',	'feedster\\.', 'q'],                           // Feedster
    ['lycos',		'search\\.lycos\\.', 'q'],                     // Lycos
    ['alltheweb',	'alltheweb\\.', 'q'],                          // AllTheWeb
    ['technorati',	'technorati\\.com/search/([^\\?/]+)', 1],      // Technorati
    ['dogpile',		'dogpile\\.com/info\\.dogpl/search/web/([^\\?/]+)', 1, true], // DogPile
	['lemos',		'lemos\\.','q']								// LemosNet
];


/**
 * Decode the referrer string and return a list of search keywords.
 */
KWParser.decodeReferrer = function(referrer) {
    var query = null;
    var regex = new RegExp('');

    for (var i = 0; i < KWParser.search_engines.length; i ++) {
        var se = KWParser.search_engines[i];
        regex.compile('^http://(www\\.)?' + se[1], 'i');
        var match = referrer.match(regex);
        if (match) {
            var result;
            if (isNaN(se[2])) {
                result = KWParser.decodeReferrerQS(referrer, se[2]);
            } else {
                result = match[se[2] + 1];
            }
            if (result) {
                result = decodeURIComponent(result);
                // XXX: DogPile's URI requires decoding twice.
                if (se.length > 3 && se[3])
                    result = decodeURIComponent(result);
                result = result.replace(/\'|"/g, '');
                result = result.split(/[\s,\+\.]+/);
                return [se[0],result];
            }
            break;
        }
    }
    return null;
};

KWParser.decodeReferrerQS = function(referrer, match) {
    var idx = referrer.indexOf('?');
    var idx2;
    if (idx >= 0) {
        var qs = new String(referrer.substring(idx + 1));
        idx  = 0;
        idx2 = 0;
        while ((idx >= 0) && ((idx2 = qs.indexOf('=', idx)) >= 0)) {
            var key, val;
            key = qs.substring(idx, idx2);
            idx = qs.indexOf('&', idx2) + 1;
            if (key == match) {
                if (idx <= 0) {
                    return qs.substring(idx2+1);
                } else {
                    return qs.substring(idx2+1, idx - 1);
                }
            }
        }
    }
    return null;
};

KWParser.parse = function() {
    // If 'debug_referrer' then we will use that as our referrer string
    // instead.
    var q = KWParser.debug_referrer ? KWParser.debug_referrer : document.referrer;
    var e = null;
    q = KWParser.decodeReferrer(q);
    return q;
};

var readers_src = '' + 
'' + 
'<!-- http://blogblogs.com.br/embed/readers version 2.0 -->' + 
'' + 
'' + 
'<style type="text/css">' + 
'	#bbw_readers .ut, #bbw_readers .ut * { border:0px; margin:0px; padding:0px; font-size:1px; display:none; }' + 
'</style>' + 

'' + 
'	<a href="http://blogblogs.com.br/user/signup" title="Faça parte desta comunidade, venha para o BlogBlogs"><img src="http://assets1.blogblogs.com.br/public/bb/avatars/no_user_24.gif" class="bbw_avatar" alt="Você"></a><a href=\'http://blogblogs.com.br/people/view/108165\' title=\'krixapolinario\'><img src=\'http://assets1.blogblogs.com.br/public/bb/avatars/0/108/avatar_108165_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/70632\' title=\'Twitteiro\'><img src=\'http://assets3.blogblogs.com.br/public/bb/avatars/0/70/avatar_70632_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/108299\' title=\'L3ball\'><img src=\'http://assets2.blogblogs.com.br/public/bb/avatars/0/108/avatar_108299_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/110668\' title=\'R.Brito\'><img src=\'http://assets2.blogblogs.com.br/public/bb/avatars/0/110/avatar_110668_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/63145\' title=\'sol.angelzen\'><img src=\'http://assets1.blogblogs.com.br/public/bb/avatars/0/63/avatar_63145_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/73875\' title=\'Brennovisk\'><img src=\'http://assets3.blogblogs.com.br/public/bb/avatars/0/73/avatar_73875_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/63905\' title=\'giuseppe.mv\'><img src=\'http://assets3.blogblogs.com.br/public/bb/avatars/0/63/avatar_63905_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/112629\' title=\'corcova\'><img src=\'http://assets4.blogblogs.com.br/public/bb/avatars/no_avatar_24.gif\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/80711\' title=\'darktoonnn\'><img src=\'http://assets5.blogblogs.com.br/public/bb/avatars/0/80/avatar_80711_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/10175\' title=\'bodegueiro\'><img src=\'http://assets5.blogblogs.com.br/public/bb/avatars/0/10/avatar_10175_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/19767\' title=\'Bibliotecario\'><img src=\'http://assets4.blogblogs.com.br/public/bb/avatars/no_avatar_24.gif\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/95645\' title=\'SdeMulher\'><img src=\'http://assets5.blogblogs.com.br/public/bb/avatars/0/95/avatar_95645_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/62746\' title=\'pcarolinny\'><img src=\'http://assets2.blogblogs.com.br/public/bb/avatars/0/62/avatar_62746_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/25109\' title=\'raquel.elena\'><img src=\'http://assets3.blogblogs.com.br/public/bb/avatars/0/25/avatar_25109_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/112858\' title=\'ClovesQuintal\'><img src=\'http://assets1.blogblogs.com.br/public/bb/avatars/0/112/avatar_112858_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/91280\' title=\'madeinbrasilis\'><img src=\'http://assets1.blogblogs.com.br/public/bb/avatars/0/91/avatar_91280_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/112534\' title=\'Intruder\'><img src=\'http://assets2.blogblogs.com.br/public/bb/avatars/0/112/avatar_112534_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/71553\' title=\'tihwonka\'><img src=\'http://assets3.blogblogs.com.br/public/bb/avatars/0/71/avatar_71553_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/78205\' title=\'sonia.lotus\'><img src=\'http://assets3.blogblogs.com.br/public/bb/avatars/0/78/avatar_78205_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/109324\' title=\'renata.lino\'><img src=\'http://assets2.blogblogs.com.br/public/bb/avatars/0/109/avatar_109324_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/93279\' title=\'vitorfleury\'><img src=\'http://assets2.blogblogs.com.br/public/bb/avatars/0/93/avatar_93279_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/110498\' title=\'DiNaMiC\'><img src=\'http://assets4.blogblogs.com.br/public/bb/avatars/no_avatar_24.gif\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/77207\' title=\'dsillver\'><img src=\'http://assets1.blogblogs.com.br/public/bb/avatars/0/77/avatar_77207_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/95743\' title=\'thunderdownloads\'><img src=\'http://assets1.blogblogs.com.br/public/bb/avatars/0/95/avatar_95743_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/51999\' title=\'cafecombytes\'><img src=\'http://assets3.blogblogs.com.br/public/bb/avatars/0/51/avatar_51999_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/65608\' title=\'vcfazobr\'><img src=\'http://assets3.blogblogs.com.br/public/bb/avatars/0/65/avatar_65608_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/92318\' title=\'belatrix100\'><img src=\'http://assets5.blogblogs.com.br/public/bb/avatars/0/92/avatar_92318_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/110299\' title=\'sejaverde\'><img src=\'http://assets2.blogblogs.com.br/public/bb/avatars/0/110/avatar_110299_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/2657\' title=\'AlessandroMartins\'><img src=\'http://assets1.blogblogs.com.br/public/bb/avatars/0/2/avatar_2657_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/21186\' title=\'cantodalu\'><img src=\'http://assets5.blogblogs.com.br/public/bb/avatars/0/21/avatar_21186_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/101985\' title=\'edumachado\'><img src=\'http://assets4.blogblogs.com.br/public/bb/avatars/no_avatar_24.gif\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/86035\' title=\'nanirezende\'><img src=\'http://assets4.blogblogs.com.br/public/bb/avatars/0/86/avatar_86035_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/51210\' title=\'maryf16\'><img src=\'http://assets5.blogblogs.com.br/public/bb/avatars/0/51/avatar_51210_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/20237\' title=\'tigredemuleta\'><img src=\'http://assets5.blogblogs.com.br/public/bb/avatars/0/20/avatar_20237_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/109856\' title=\'Deniac\'><img src=\'http://assets1.blogblogs.com.br/public/bb/avatars/0/109/avatar_109856_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/105451\' title=\'C??s???a?o™\'><img src=\'http://assets1.blogblogs.com.br/public/bb/avatars/0/105/avatar_105451_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/31630\' title=\'Dicasnaweb\'><img src=\'http://assets1.blogblogs.com.br/public/bb/avatars/0/31/avatar_31630_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/30365\' title=\'Zanfa\'><img src=\'http://assets4.blogblogs.com.br/public/bb/avatars/0/30/avatar_30365_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a><a href=\'http://blogblogs.com.br/people/view/40140\' title=\'marialeite\'><img src=\'http://assets5.blogblogs.com.br/public/bb/avatars/0/40/avatar_40140_24.jpg\' width=\'24\' height=\'24\' alt=\'?\' class=\'bbw_avatar\'></a>		' + 
'		<div class=\'bbw_footer\'>' + 
'		Por <a href=\'http://blogblogs.com.br\'>BlogBlogs.Com.Br</a><img src=\'http://www.google-analytics.com/__utm.gif?utmwv=1&utmn=3015750138&utmcs=-&utmsr=-&utmsc=-&utmul=-&utmje=0&utmfl=-&utmcr=1&utmdt=Widget > Readers  > Blog: 150700&utmhn=embed.blogblogs.com.br&utmr=BBWREFTK_READERS&utmp=/embed/readers/150700/&utmac=UA-351784-4&utmcc=__utma%3D64854035.1323109882.1226389508.1226389508.1226389508.2%3B%2B__utmb%3D64854035%3B%2B__utmc%3D64854035%3B%2B__utmz%3D64854035.1226389508.2.2.utmccn%3DBBWCCNTK_READERS%3B%2B__utmv%3D64854035.14%3B%2B\' alt=\'\' class=\'ut\'>' + 
'	</div>' + 
'</div>' + 
'' + 
'<!-- End BlogBlogs Readers Widget -->';
var doc = document;
var ref; if (document.referrer == "") { ref = "-" } else { ref = document.referrer; };
var exp = new RegExp("BBWREFTK_READERS", "g");
readers_src = readers_src.replace(exp,escape(ref));

var keywords = KWParser.parse();
var exp2 = new RegExp("BBWCCNTK_READERS", "g");
var utmccn = "(direct)%7Cutmcsr%3D(direct)%7Cutmcmd%3D(none)";

var domain = document.domain;
var path = document.URL.replace("https://","");
path = path.replace("http://","");
path = path.replace(domain,"");


if (keywords == null)
{
	if (ref == "-") { } else
	{ var utmccn = "(referral)%7Cutmcsr%3D" + domain + "%7Cutmcct%3D" + path + "%7Cutmcmd%3Dreferral"; }
}
else
{
	utmctr = keywords[1].join("%2B");
	var utmccn = "(organic)%7Cutmcsr%3D" + keywords[0] + "%7Cutmctr%3D" + utmctr + "%7Cutmcmd%3Dorganic";
}

readers_src = readers_src.replace(exp2,utmccn);

function drawBBreaders(s){ document.write(s); }

drawBBreaders(readers_src);