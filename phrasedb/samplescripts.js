// Selections available when using the Samples app, used by Script Links page
var sampleScriptsIndex = {  
    'adlm': { name: "Adlam", langs:['fuf-adlm']},
    'arab': { name: "Arabic", langs:['arb','ha-arab','ks-arab', 'fa', 'ur']}, 
    'armn': { name: "Armenian", langs:['hy']},
    'armi': { name: "Imperial Aramaic", langs:['arc']},
    'avst': { name: "Avestan", langs:['ae']},
    'bali': { name: "Balinese", langs:['ban']}, 
    'bamu': { name: "Bamum", langs:['bax']}, 
    'bass': { name: "Bassa Vah", langs:['bsq']}, 
    'beng': { name: "Bengali", langs:['bn']},
    'bhks': { name: "Bhaiksuki", langs:['sa-bhks']},
    'brah': { name: "Brahmi", langs:['pra']},
    'bugi': { name: "Buginese", langs:['bug']},
    'buhd': { name: "Buhid", langs:['bku-buhd']},
    'cans': { name: "UCAS", langs:['ike', 'crk']},
    'cakm': { name: "Chakma", langs:['ccp']},
    'cher': { name: "Cherokee", langs:['chr', 'chr-x-lc']},
    'copt': { name: "Coptic", langs:['cop']},
    'cyrl': { name: "Cyrillic", langs:['kk', 'ky', 'ru']},
    'deva': { name: "Devanagari", langs:['hi', 'ks-deva', 'npi']},
    'dsrt': { name: "English (Deseret)", langs:['en-dsrt']},
    'egyp': { name: "Egyptian hieroglyphs", langs:['egy']},
    'elym': { name: "Elymaic", langs:['xly']},
    'ethi': { name: "Ethiopic", langs:['am']},
    'geor': { name: "Georgian", langs:['ka']},
    'gran': { name: "Grantha", langs:['sa-gran']},
    'grek': { name: "Greek", langs:['el']},
    'gujr': { name: "Gujarati", langs:['gu']},
    'gong': { name: "Gunjala Gondi", langs:['gon']},
    'guru': { name: "Gurmukhi", langs:['pa']},
    'hano': { name: "Hanunoo", langs:['hnn']},
    'hani': { name: "Chinese", langs:['zh-hans', 'zh-hant']},
    'hatr': { name: "Hatran", langs:['mis-Hatr']},
    'kore': { name: "Hangul", langs:['ko']},
    'hebr': { name: "Hebrew", langs:['he']},
    'hluw': { name: "Anatolian Hieroglyphs", langs:['hlu']},
    'hung': { name: "Old Hungarian", langs:['ohu']},
    'jpan': { name: "Japanese", langs:['ja']},
    'java': { name: "Javanese", langs:['jv']},
    'khmr': { name: "Khmer", langs:['km']},
    'khar': { name: "Kharoshthi", langs:['pgd']},
    'knda': { name: "Kannada", langs:['kn']},
    'laoo': { name: "Lao", langs:['lo']},
    'lana': { name: "Tai Tham", langs:['kkh', 'nod']},
    'latn': { name: "Latin", langs:['ak', 'cy', 'dgr', 'en-GB-fonipa', 'ha-NE', 'ha-NG', 've', 'vi', 'yo']},
    'lepc': { name: "Lepcha", langs:['lep']},
    'limb': { name: "Limbu", langs:['lif']},
    'lisu': { name: "Lisu", langs:['lis']},
    'maka': { name: "Makasar", langs:['mak']},
    'mand': { name: "Mandaic", langs:['mid']},
    'mani': { name: "Manichaean", langs:['xmn']},
    'mend': { name: "Mende Kikakui", langs:['men']},
    'mong': { name: "Mongolian", langs:['khk']},
    'mlym': { name: "Malayalam", langs:['ml']},
    'mtei': { name: "Meetei Mayek", langs:['mni']},
    'mymr': { name: "Myanmar", langs:['my', 'shn']},
    'nbat': { name: "Nabataean", langs:['arc-nbat']},
    'newa': { name: "Newar", langs:['new']},
    'nkoo': { name: "N’Ko", langs:['nqo']},
    'ogam': { name: "Ogham", langs:['mga']},
    'osge': { name: "Osage", langs:['osa']},
    'olck': { name: "Ol Chiki", langs:['sat']},
    'orya': { name: "Oriya", langs:['ory']},
    'osma': { name: "Osmanya", langs:['so-osma']},
    'palm': { name: "Palmyrene", langs:['arc-palm']},
    'phag': { name: "PhagsPa", langs:['sa-phag']},
    'phnx': { name: "Phoenician", langs:['phn']},
    'phli': { name: "Pahlavi (Inscriptional)", langs:['pal']},
    'prti': { name: "Parthian (Inscriptional)", langs:['xpr']},
    'rohg': { name: "Hanifi Rohingya", langs:['rhg']},
    'runr': { name: "Runic", langs:['non-runr']},
    'samr': { name: "Samaritan", langs:['smp']},
    'sarb': { name: "Old South Arabian", langs:['xsa']},
    'saur': { name: "Saurashtra", langs:['saz']},
    'shaw': { name: "Shavian", langs:['en-shaw']},
    'shrd': { name: "Sharada", langs:['sa-shrd']},
    'sidd': { name: "Siddham", langs:['sa-sidd']},
    'sinh': { name: "Sinhala", langs:['si']},
    'soyo': { name: "Soyombo", langs:['sa-soyo']},
    'sund': { name: "Sundanese", langs:['su']},
    'syrc': { name: "Syriac", langs:['aii', 'syc', 'tru']},
    'tale': { name: "Tai Le", langs:['tdd']},
    'tagb': { name: "Tagbanwa", langs:['tbw']},
    'talu': { name: "New Tai Lü", langs:['khb']},
    'taml': { name: "Tamil", langs:['ta']},
    'tavt': { name: "Tai Viet", langs:['blt']},
    'telu': { name: "Telugu", langs:['te']},
    'tglg': { name: "Tagalog", langs:['tgl']},
    'thaa': { name: "Thaana", langs:['dv']},
    'thai': { name: "Thai", langs:['th']},
    'tibt': { name: "Tibetan", langs:['bo', 'dz']},
    'tirh': { name: "Tirhuta", langs:['sa-tirh']},
    'tfng': { name: "Tifinagh", langs:['zgh']},
    'ugar': { name: "Ugaritic", langs:['uga']},
    'vaii': { name: "Vai", langs:['vai']},
    'wara': { name: "Warang Citi", langs:['hoc']},
    'xpeo': { name: "Old Persian", langs:['peo']},
    'yiii': { name: "Yi", langs:['ii']},
    'zanb': { name: "Zanabazar Square", langs:['sa-zanb']},
    }
