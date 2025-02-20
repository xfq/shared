var spreadsheet = `
ꪁ	k	k		k	k	K	Lo		high tone consonant			ꪀ		U+AA81: TAI VIET LETTER HIGH KO	✓
ꪀ	k	k 		ḵ	ḵ	k	Lo		low tone consonant		ꪁ			U+AA80: TAI VIET LETTER LOW KO	✓
ꪃ	k	kʰ		kʰ	kʰ	#	Lo		high tone consonant			ꪂ		U+AA83: TAI VIET LETTER HIGH KHO	✓
ꪂ	k	kʰ		ḵʰ	ḵʰ	3	Lo		low tone consonant		ꪃ			U+AA82: TAI VIET LETTER LOW KHO	✓
ꪆ	g	g		g	g	$	Lo		high tone consonant			ꪇ		U+AA86: TAI VIET LETTER LOW GO	✓
ꪇ	g	gʰ		ḡ	ḡ	4	Lo		low tone consonant		ꪆ			U+AA87: TAI VIET LETTER HIGH GO	✓
ꪉ	n	ŋ		ŋ	ŋ	G	Lo		high tone consonant			ꪈ		U+AA89: TAI VIET LETTER HIGH NGO	✓
ꪈ	n	ŋ		ŋ̄	ŋ̄	g	Lo		low tone consonant		ꪉ			U+AA88: TAI VIET LETTER LOW NGO	✓
															
ꪋ	c	ʨ		c	c	C	Lo		high tone consonant			ꪊ		U+AA8B: TAI VIET LETTER HIGH CO	✓
ꪊ	c	ʨ		c̱	c̱	c	Lo		low tone consonant		ꪋ			U+AA8A: TAI VIET LETTER LOW CO	✓
ꪍ	c	ʨʰ		cʰ	cʰ	%	Lo		high tone consonant			ꪌ		U+AA8D: TAI VIET LETTER HIGH CHO	✓
ꪌ	c	ʨʰ		c̱ʰ	c̱ʰ	5	Lo		low tone consonant		ꪍ			U+AA8C: TAI VIET LETTER LOW CHO	✓
ꪑ	n	ʃ ɲ		ɲ	ɲ	W	Lo		high tone consonant			ꪐ		U+AA91: TAI VIET LETTER HIGH NYO	✓
ꪐ	n	ʃ ɲ		ɲ̄	ɲ̄	w	Lo		low tone consonant		ꪑ			U+AA90: TAI VIET LETTER LOW NYO	✓
															
ꪕ	t	t		t	t	T	Lo		high tone consonant			ꪔ		U+AA95: TAI VIET LETTER HIGH TO	✓
ꪔ	t	t		ṯ	ṯ	t	Lo		low tone consonant		ꪕ			U+AA94: TAI VIET LETTER LOW TO	✓
ꪗ	t	tʰ		tʰ	tʰ	Z	Lo		high tone consonant			ꪖ		U+AA97: TAI VIET LETTER HIGH THO	✓
ꪖ	t	tʰ		ṯʰ	ṯʰ	z	Lo		low tone consonant		ꪗ			U+AA96: TAI VIET LETTER LOW THO	✓
ꪓ	d	d		d	d	D	Lo		high tone consonant			ꪒ		U+AA93: TAI VIET LETTER HIGH DO	✓
ꪒ	d	d -t		ḏ	ḏ	d	Lo		low tone consonant		ꪓ			U+AA92: TAI VIET LETTER LOW DO	✓
ꪙ	n	n		n	n	N	Lo		high tone consonant			ꪘ		U+AA99: TAI VIET LETTER HIGH NO	✓
ꪘ	n	n		ṉ	ṉ	n	Lo		low tone consonant		ꪙ			U+AA98: TAI VIET LETTER LOW NO	✓
															
ꪝ	p	p		p	p	P	Lo		high tone consonant			ꪜ		U+AA9D: TAI VIET LETTER HIGH PO	✓
ꪜ	p	p		p̄	p̄	p	Lo		low tone consonant		ꪝ			U+AA9C: TAI VIET LETTER LOW PO	✓
ꪟ	p	pʰ		pʰ	pʰ	^	Lo		high tone consonant			ꪞ		U+AA9F: TAI VIET LETTER HIGH PHO	✓
ꪞ	p	pʰ		p̄ʰ	p̄ʰ	6	Lo		low tone consonant		ꪟ			U+AA9E: TAI VIET LETTER LOW PHO	✓
ꪛ	b	b		b	b	B	Lo		high tone consonant			ꪚ		U+AA9B: TAI VIET LETTER HIGH BO	✓
ꪚ	b	b -p		ḇ	ḇ	b	Lo		low tone consonant		ꪛ			U+AA9A: TAI VIET LETTER LOW BO	✓
ꪣ	m	m		m	m	M	Lo		high tone consonant			ꪢ		U+AAA3: TAI VIET LETTER HIGH MO	✓
ꪢ	m	m		m̱	m̱	m	Lo		low tone consonant		ꪣ			U+AAA2: TAI VIET LETTER LOW MO	✓
															
ꪩ	l	l		l	l	L	Lo		high tone consonant			ꪨ		U+AAA9: TAI VIET LETTER HIGH LO	✓
ꪨ	l	l		ḻ	ḻ	l	Lo		low tone consonant		ꪩ			U+AAA8: TAI VIET LETTER LOW LO	✓
ꪧ	r	r		r	r	&	Lo		high tone consonant			ꪦ		U+AAA7: TAI VIET LETTER HIGH RO	✓
ꪦ	r	r		ṟ	ṟ	7	Lo		low tone consonant		ꪧ			U+AAA6: TAI VIET LETTER LOW RO	✓
ꪥ	y	j		y	y	J	Lo		high tone consonant			ꪤ		U+AAA5: TAI VIET LETTER HIGH YO	✓
ꪤ	y	j		ȳ	ȳ	j	Lo		low tone consonant		ꪥ			U+AAA4: TAI VIET LETTER LOW YO	✓
ꪫ	w	v -w		w	w	V	Lo		high tone consonant			ꪪ		U+AAAB: TAI VIET LETTER HIGH VO	✓
ꪪ	w	v		w̱	w̱	v	Lo		low tone consonant		ꪫ			U+AAAA: TAI VIET LETTER LOW VO	✓
															
ꪭ	h	h		h	h	H	Lo		high tone consonant			ꪬ		U+AAAD: TAI VIET LETTER HIGH HO	✓
ꪬ	h	h		ẖ	ẖ	h	Lo		low tone consonant		ꪭ			U+AAAC: TAI VIET LETTER LOW HO	✓
ꪅ	x	x		x	x	X	Lo		high tone consonant			ꪄ		U+AA85: TAI VIET LETTER HIGH KHHO	✓
ꪄ	x	x		x̱	x̱	x	Lo		low tone consonant		ꪅ			U+AA84: TAI VIET LETTER LOW KHHO	✓
ꪏ	s	s		s	s	S	Lo		high tone consonant			ꪎ		U+AA8F: TAI VIET LETTER HIGH SO	✓
ꪎ	s	s		s̱	s̱	s	Lo		low tone consonant		ꪏ			U+AA8E: TAI VIET LETTER LOW SO	✓
ꪡ	f	f		f	f	F	Lo		high tone consonant			ꪠ		U+AAA1: TAI VIET LETTER HIGH FO	✓
ꪠ	f	f		f̱	f̱	f	Lo		low tone consonant		ꪡ			U+AAA0: TAI VIET LETTER LOW FO	✓
															
ꪯ	}	ʔ ɔ		ʔ	ʔ		Lo		high tone consonant			ꪮ		U+AAAF: TAI VIET LETTER HIGH O	✓
ꪮ	}	ʔ ɔ		ʔ̱	ʔ̱		Lo		low tone consonant		ꪯ			U+AAAE: TAI VIET LETTER LOW O	✓
															
															
															
															
															
															
ꫛ	k	kon⁴		kⁿ	kⁿ	}	Lo		logograph					U+AADB: TAI VIET SYMBOL KON	✓
ꫜ	n	nɨŋ⁵		nᵑ	nᵑ		Lo		logograph					U+AADC: TAI VIET SYMBOL NUENG	✓
															
															
															
ꪼ	a	aj		aʲ	aʲ	y	Lo		prescript vowel					U+AABC: TAI VIET VOWEL AY	✓
ꪻ	e	əw		əʷ	əʷ	Y	Lo		prescript vowel					U+AABB: TAI VIET VOWEL AUE	✓
ꪵ	e	ɛ		ɛ	ɛ	E	Lo		prescript vowel					U+AAB5: TAI VIET VOWEL E	✓
ꪹ	i	ɨə		ɨ ə ɨᵊ	ɨᵊ	e	Lo		prescript vowel					U+AAB9: TAI VIET VOWEL UEA	✓
ꪶ	o	o		o	o	o	Lo		prescript vowel					U+AAB6: TAI VIET VOWEL O	✓
															
															
ꪰ	a	a		a	a	U	Mn​		dependent vowel					U+AAB0: TAI VIET MAI KANG​	✓
ꪱ	a	aː		ā	ā	a	Lo		dependent vowel					U+AAB1: TAI VIET VOWEL AA	✓
ꪲ	i	i		i	i	i	Mn​		dependent vowel					U+AAB2: TAI VIET VOWEL I​	✓
ꪳ	i	ɨ		ɨ	ɨ		Mn​		dependent vowel					U+AAB3: TAI VIET VOWEL UE​	✓
ꪴ	u	u		u	u	u	Mn​		dependent vowel					U+AAB4: TAI VIET VOWEL U​	✓
ꪷ	o	ɔ		ɔ	ɔ	[	Mn​		dependent vowel					U+AAB7: TAI VIET MAI KHIT​	✓
															
ꪾ	a	am		aᵐ	aᵐ	{	Mn​		vowel+nasal					U+AABE: TAI VIET VOWEL AM​	✓
ꪽ	a	an		aⁿ	aⁿ	]	Lo		vowel+nasal					U+AABD: TAI VIET VOWEL AN	✓
ꪸ	i	iə		iᵊ	iᵊ	I	Mn​		dipthong					U+AAB8: TAI VIET VOWEL IA​	✓
ꪺ	u	uə		uᵊ	uᵊ	O	Lo		dipthong					U+AABA: TAI VIET VOWEL UA	✓
															
															
ꪹꪱ	i	aːw		aʷ	ɨᵊ-ā									U+AAB9 U+AAB1: TAI VIET VOWEL UEA, VOWEL AA	
ꪹꪸ	i	e		e	ɨᵊ-iᵊ									U+AAB9 U+AAB8: TAI VIET VOWEL UEA, VOWEL IA	
ꪹꪷ	i	ə		ə	ɨᵊ-ɔ									U+AAB9 U+AAB7: TAI VIET VOWEL UEA, MAI KHIT	
ꪵꪫ	e	ʷɛ		ɛ	ɛ-w									U+AAB5 U+AAAB: TAI VIET VOWEL E, LETTER HIGH VO	
ꪚꪾ	a	ap		aᵖ	-aᵖ									U+002D U+AA9A U+AABE: TAI VIET LETTER LOW BO, VOWEL AM	
															
															
꪿	^			¹	¹	r	Mn​		tone mark				mai ek	U+AABF: TAI VIET TONE MAI EK​	✓
꫁	^			²	²	R	Mn​		tone mark				mai song	U+AAC1: TAI VIET TONE MAI THO​	✓
ꫀ	^			¹̱	¹̱	1	Lo		tone mark					U+AAC0: TAI VIET TONE MAI NUENG	✓
ꫂ	^			²̱	²̱	2	Lo		tone mark					U+AAC2: TAI VIET TONE MAI SONG	✓
															
															
															
ꫝ	[				–		Lm		repetition mark				sam	U+AADD: TAI VIET SYMBOL SAM	✓
꫞	[				–	,	Po		poetic head mark				ho hoi	U+AADE: TAI VIET SYMBOL HO HOI	✓
꫟	[				–	.	Po		poetic end mark				koi koi	U+AADF: TAI VIET SYMBOL KOI KOI	✓
															
															
															
															
															
														

													
`


latinPanel = '¹ ² ¹̱ ²̱ ³ ⁴ aʲ aː ā aᵐ aⁿ aːw aʷ aᵖ ḇ c̱ cʰ c̱ʰ ḏ əʷ ɛ f̱ gʰ ḡ ẖ ɨᵊ ɨ iᵊ ḵ kʰ ḵʰ kon⁴ ḻ m̱ ŋ ŋ̄ ɲ ɲ̄ ṉ nɨŋ⁵ ɔ p̄ pʰ p̄ʰ ṟ ʃ s̱ ʨ ʨʰ ṯ tʰ ṯʰ uᵊ w̱ ʷɛ x̱ ȳ ʔ ʔ̱ ˨ ˦˥ ˦ ˥'



var cols = {
"key": 1,
"ipaLoc": 2,
"ipaPlus": 3,
"transcription": 4,
"transLoc": 5,
"kbd": 6,
"class": 7,
"status": 8,
"typeLoc": 9,
"statusLoc": 10,

"dvowel": 0,
"ivowel": 0,
"subj":0,
"htone":11,
"ltone":12,
"lc":0,
"uc":0,
"meaning":0,
"shape": 0,
"numLoc": 0,

"nnameLoc": 0,
"nameLoc": 13,
"ucsName": 14,
"block": 15,

//"othertranscriptions": [[6, 'ISO 9985']]
}
