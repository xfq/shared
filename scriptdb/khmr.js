var spreadsheet = `
-	-			-	-		Pd		hyphen							U+2010: HYPHEN	
‑	-			‑	‑		Pd		non-breaking hyphen							U+2011: NON-BREAKING HYPHEN	
–	-			–	–		Pd		en dash							U+2013: EN DASH	
—	-			—	—		Pd		em dash							U+2014: EM DASH	
,	,			,	,		Po		comma							U+002C: COMMA	
;	;			;	;		Po		semicolon							U+003B: SEMICOLON	
:	:			:	—		Po		colon							U+003A: COLON	
៖	:				:	:	Po		colon					ចំណុចពីរគូស	cɑmnoc piː kuːh	U+17D6: KHMER SIGN CAMNUC PII KUUH	✓
!	!			!	!		Po		exclamation mark							U+0021: EXCLAMATION MARK	
៎	!				ⸯ	+	Mn​	i	exclamation sign	infrequent				កាកបាទ	kaːkɑɓaːt	U+17CE: KHMER SIGN KAKABAT​	✓
?	?			?	?		Po		question mark							U+003F: QUESTION MARK	
.	.			.	.		Po		full stop							U+002E: FULL STOP	
…	.			…	…		Po		ellipsis							U+2026: HORIZONTAL ELLIPSIS	
៘	.			⋯	⋯		Po	d	etc.	deprecated				។ល។ / ល៉ៈ	lanəŋla / laʔ	U+17D8: KHMER SIGN BEYYAL	✓
(	(			(	(		Ps		parenthesis							U+0028: LEFT PARENTHESIS	
[	(			[	[		Pe		bracket							U+005B: LEFT SQUARE BRACKET	
)	)			)	)		Ps		parenthesis							U+0029: RIGHT PARENTHESIS	
]	)			]	]		Pe		bracket							U+005D: RIGHT SQUARE BRACKET	
់	[				˘	'	Mn​		vowel shortener					បន្តក់	ɓɑntɑk	U+17CB: KHMER SIGN BANTOC​	✓
៏	[	ɑː			⁎	*	Mn​	i	word specifier	infrequent				លេខអស្ដា	leːk ʔahsɗaː	U+17CF: KHMER SIGN AHSDA​	✓
៉	[				″		Mn​		consonant shifter					មូសិកទន្ត	museʔkətoə̯n	U+17C9: KHMER SIGN MUUSIKATOAN​	✓
៊	[				′	/	Mn​		consonant shifter					ត្រីសព្ទ	trəisaɓ	U+17CA: KHMER SIGN TRIISAP​	✓
៌	[				ʳ	_	Mn​	i	consonant silencer	infrequent				របាទ	rɔɓaːt	U+17CC: KHMER SIGN ROBAT​	✓
\u200B	]				␣		Cf		zero-width space							U+200B: ZERO WIDTH SPACE	
អ	}	ʔ	ɑː	’	ʔ	G	Lo		a-series consonant				អ ្អ		ʔɑː	U+17A2: KHMER LETTER QA	✓
្អ	}	ʔ	ɑː	’	͞ʔ				a-series consonant						ʔɑː	U+17D2 U+17A2: KHMER SIGN COENG, LETTER QA​	
៙	§				»	6	Po		text start					ភ្នែកមាន់	pnɛːkmoə̆n	U+17D9: KHMER SIGN PHNAEK MUAN	✓
៚	§				«	7	Po		text end					គោមូត្រ	koːmout	U+17DA: KHMER SIGN KOOMUUT	✓
្	*				͞	j	Mn​		coeng sign					ជើង	cəːŋ	U+17D2: KHMER SIGN COENG​	✓
៑	\				¯		Mn​	i	virama	infrequent				វិរាម	ʋiriəm	U+17D1: KHMER SIGN VIRIAM​	✓
ៜ	\				ˣ	a	Lo	r	marker for omitted Sanskrit vowel	archaic, rare					avakraha sannya	U+17DC: KHMER SIGN AVAKRAHASANYA	✓
៍	\				˟	^	Mn​		syllable silencer					ទណ្ឌឃាត	tɔnɗɔkʰiət	U+17CD: KHMER SIGN TOANDAKHIAT​	✓
ៗ	&				&	@	Lm		repetition sign					ស្ទួន / លេខទោ	stuən / leːktoː	U+17D7: KHMER SIGN LEK TOO	✓
%	%				%		Po		percentage mark							U+0025: PERCENT SIGN	
‰	%				‰		Po		per mille mark							U+2030: PER MILLE SIGN	
០	±				0̣	0	Nd		digit					សូន	soun	U+17E0: KHMER DIGIT ZERO	✓
១	±				1̣	1	Nd		digit					មួយ	muəj	U+17E1: KHMER DIGIT ONE	✓
២	±				2̣	2	Nd		digit					ពីរ	piː	U+17E2: KHMER DIGIT TWO	✓
៣	±				3̣	3	Nd		digit					បី	ɓəj	U+17E3: KHMER DIGIT THREE	✓
៤	±				4̣	4	Nd		digit					បួន	ɓuən	U+17E4: KHMER DIGIT FOUR	✓
៥	±				5̣	5	Nd		digit					ប្រាំ	pram	U+17E5: KHMER DIGIT FIVE	✓
៦	±				6̣	6	Nd		digit					ប្រាំមួយ	prammuəj	U+17E6: KHMER DIGIT SIX	✓
៧	±				7̣	7	Nd		digit					ប្រាំពីរ	prampiː / prampɨl	U+17E7: KHMER DIGIT SEVEN	✓
៨	±				8̣	8	Nd		digit					ប្រាំបី	pramɓəj	U+17E8: KHMER DIGIT EIGHT	✓
៩	±				9̣	9	Nd		digit					ប្រាំបួន	pramɓuən	U+17E9: KHMER DIGIT NINE	✓
៛	±				¤	$	Sc		currency symbol					សញ្ញារៀល	saɲ ɲaː riəl	U+17DB: KHMER CURRENCY SYMBOL RIEL	✓
«	<			“	«		Pi		quotation mark							U+00AB: LEFT-POINTING DOUBLE ANGLE QUOTATION MARK	
‹	<			‘	‹		Pi		quotation mark							U+2018: LEFT SINGLE QUOTATION MARK	
“	<			“	 “		Pi		quotation mark							U+201C: LEFT DOUBLE QUOTATION MARK	
‘	<			‘	‘		Pi		quotation mark							U+2018: LEFT SINGLE QUOTATION MARK	
\u200C	=				ᶻʷⁿʲ		Cf		zero-width non-joiner							U+200C: ZERO WIDTH NON-JOINER	
\u200D	=				ᶻʷʲ		Cf		zero-width joiner							U+200D: ZERO WIDTH JOINER	
\u034F	=				ᶜᵍʲ		Mn		combining grapheme joiner							U+034F: COMBINING GRAPHEME JOINER​	
\u2060	=				ʷʲ		Cf		word joiner							U+2060 WORD JOINER	
»	>			”	»		Pf		quotation mark							U+00BB: RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK	
›	>			’	›		Pf		quotation mark							U+2019: RIGHT SINGLE QUOTATION MARK	
”	>			”	”		Pf		quotation mark							U+201D: RIGHT DOUBLE QUOTATION MARK	
’	>			’	’		Pf		quotation mark							U+2019: RIGHT SINGLE QUOTATION MARK	
។	|			.	|	.	Po		full stop					ខ័ណ្ឌ	kʰan	U+17D4: KHMER SIGN KHAN	✓
៕	|				¶	>	Po		section terminator					បរិយោសាន	ɓɑːrijaosaːn	U+17D5: KHMER SIGN BARIYOOSAN	✓
ា	a	aː iə		ā	ā	a	Mc​		vowel sign					ស្រៈ អា	srà ʼā	U+17B6: KHMER VOWEL SIGN AA​	✓
ៈ	a	aʔ eə̆ʔ			a	V	Mc​		short vowel					យុគលពិន្ទុ	juʔkɔluə̆ʔpintuʔ	U+17C8: KHMER SIGN YUUKALEAPINTU​	✓
ែ	a	ae ɛː		ae	æ	E	Mc​		vowel sign			ឯ		ស្រៈ អែ	sraʔ ʔae	U+17C2: KHMER VOWEL SIGN AE​	✓
ៃ	a	aj ɨj		ai	aʲ	S	Mc​		vowel sign			ឰ		ស្រៈ អៃ	sraʔ ʔaj	U+17C3: KHMER VOWEL SIGN AI​	✓
ៅ	a	aw ɨw		au	aʷ	O	Mc​		vowel sign			ឳ		ស្រៈ អៅ	sraʔ ʔaw	U+17C5: KHMER VOWEL SIGN AU​	✓
ើ	a	aə əː		oe	aᵊ	;	Mc​		vowel sign					ស្រៈ អើ	sraʔ ʔaə	U+17BE: KHMER VOWEL SIGN OE​	✓
ាំ	a	am oə̆m			ām̽				multi-part vowel							U+17B6 U+17C6: KHMER VOWEL SIGN AA, SIGN NIKAHIT​	
ឯ	A	ʔae ʔɛː ʔeː		ae	æ̣	?	Lo		independent vowel		ែ			ស្រៈឯ	sraʔ ʔae	U+17AF: KHMER INDEPENDENT VOWEL QE	✓
ឰ	A	ʔaj		ai	ạʲ	(	Lo		independent vowel		ៃ			ស្រៈឰ	sraʔ ʔaj	U+17B0: KHMER INDEPENDENT VOWEL QAI	✓
ឳ	A	ʔaw		au	ạʷ	)	Lo		independent vowel		ៅ			ស្រៈឳ	sraʔ ʔaw	U+17B3: KHMER INDEPENDENT VOWEL QAU	✓
ឲ	A	ʔao		âu	ạᵒ	=	Lo		independent vowel					ស្រៈឲ	sraʔ ʔao	U+17B2: KHMER INDEPENDENT VOWEL QOO TYPE TWO	✓
័	a				ă	&	Mn​		vowel changer					សំយោគសញ្ញា	sanjoːksaɲɲaː	U+17D0: KHMER SIGN SAMYOK SANNYA​	✓
ប	b	ɓ p- -p	ɑː	b	b	b	Lo		a-series consonant				ប ្ប		ɓɑː	U+1794: KHMER LETTER BA	✓
្ប	b	ɓ p- -p	ɑː	b	͞b				a-series consonant						ɓɑː	U+17D2 U+1794: KHMER SIGN COENG, LETTER BA​	
ច	c	c -c	ɑː	ch	c	c	Lo		a-series consonant				ច ្ច		cɑː	U+1785: KHMER LETTER CA	✓
ជ	c	c -c	ɔː	ch	c̱	C	Lo		o-series consonant				ជ ្ជ		cɔː	U+1787: KHMER LETTER CO	✓
ឆ	C	cʰ	ɑː	chh	cʰ	q	Lo		a-series consonant				ឆ ្ឆ*		cʰɑː	U+1786: KHMER LETTER CHA	✓
ឈ	C	cʰ	ɔː	chh	c̱ʰ	Q	Lo		o-series consonant				ឈ ្ឈ*		cʰɔː	U+1788: KHMER LETTER CHO	✓
្ច	c	c -c	ɑː	ch	͞c				a-series consonant						cɑː	U+17D2 U+1785: KHMER SIGN COENG, LETTER CA​	
្ជ	c	c -c	ɔː	ch	͞c̱				o-series consonant						cɔː	U+17D2 U+1787: KHMER SIGN COENG, LETTER CO​	
្ឆ	C	cʰ	ɑː	chh	͞cʰ				a-series consonant						cʰɑː	U+17D2 U+1786: KHMER SIGN COENG, LETTER CHA​	
្ឈ	C	cʰ	ɔː	chh	͞c̱ʰ				o-series consonant						cʰɔː	U+17D2 U+1788: KHMER SIGN COENG, LETTER CHO​	
ដ	d	ɗ -t	ɑː	d	ɗ	d	Lo		a-series consonant				ដ ្ដ		ɗɑː	U+178A: KHMER LETTER DA	✓
ឌ	d	ɗ -t	ɑː	d	ɗ̱	D	Lo	r	o-series consonant	rare			ឌ ្ឌ*		ɗɔː	U+178C: KHMER LETTER DO	✓
្ដ	d	ɗ -t	ɑː	d	͞ɗ				a-series consonant						ɗɑː	U+17D2 U+178A: KHMER SIGN COENG, LETTER DA​	
្ឌ	d	ɗ -t	ɔː	d	͞ɗ̱			r	o-series consonant	rare					ɗɔː	U+17D2 U+178C: KHMER SIGN COENG, LETTER DO​	
េ	e	ei eː		e	e	e	Mc​		vowel sign					ស្រៈ អេ	sraʔ ʔei	U+17C1: KHMER VOWEL SIGN E​	✓
េះ	e	eh ih			eh̽				multi-part vowel							U+17C1 U+17C7: KHMER VOWEL SIGN E, SIGN REAHMUK​	
៝	e				ᵊ		Mn​	i	final vowel retainer	infrequent						U+17DD: KHMER SIGN ATTHACAN​	✓
ហ	h	h ∅-	ɑː	h	h	h	Lo		a-series consonant				ហ ្ហ		hɑː	U+17A0: KHMER LETTER HA	✓
ះ	h	h		ḥ	h̽	H	Mc​		visarga					រះមុខ	reə̆hmuk	U+17C7: KHMER SIGN REAHMUK​	✓
្ហ	h	h ∅-	ɑː	h	͞h				a-series consonant						hɑː	U+17D2 U+17A0: KHMER SIGN COENG, LETTER HA​	
ិ	i	ə e ɨ i		i	i	i	Mn​		vowel sign			ឥ		ស្រៈ អិ	sraʔ ʔi	U+17B7: KHMER VOWEL SIGN I​	✓
ី	i	əj iː		ī	ī	I	Mn​		vowel sign			ឦ		ស្រៈ អី	sraʔ ʔəj	U+17B8: KHMER VOWEL SIGN II​	✓
ឹ	i	ə ɨ		ẏ	ɨ	w	Mn​		vowel sign			ឪ		ស្រៈ អឹ	sraʔ ʔə	U+17B9: KHMER VOWEL SIGN Y​	✓
ឺ	i	əɨ ɨː		ȳ	ɨ̄	W	Mn​		vowel sign					ស្រៈ អឺ	sraʔ ʔəɨ	U+17BA: KHMER VOWEL SIGN YY​	✓
ឿ	i	ɨə		ẏa	ɨᵊ	{	Mc​		vowel sign					ស្រៈ អឿ	sraʔ ʔɨə	U+17BF: KHMER VOWEL SIGN YA​	✓
ៀ	i	iə		ia	iᵊ	[	Mc​		vowel sign					ស្រៈ អៀ	sraʔ ʔiə	U+17C0: KHMER VOWEL SIGN IE​	✓
ឥ	I	ʔə ʔɨ ʔəj		i	ị	-	Lo		independent vowel		ិ			ស្រៈឥ	sraʔ ʔeʔ	U+17A5: KHMER INDEPENDENT VOWEL QI	✓
ឦ	I	ʔəj		ī	ị̄	,	Lo		independent vowel		ី			ស្រៈឦ	sraʔ ʔəj	U+17A6: KHMER INDEPENDENT VOWEL QII	✓
ឪ	I	ʔəw		ýu	ɨ̣	]	Lo		independent vowel		ឹ			ស្រៈឪ	sraʔ ʔəw	U+17AA: KHMER INDEPENDENT VOWEL QUUV	✓
ក	k	k kʰ- -k	ɑː	k	k	k	Lo		a-series consonant				ក ្ក		kɑː	U+1780: KHMER LETTER KA	✓
គ	k	k kʰ- -k	ɔː	k	ḵ	K	Lo		o-series consonant				គ ្គ		kɔː	U+1782: KHMER LETTER KO	✓
ខ	K	kʰ k- -k	ɑː	kh	kʰ	x	Lo		a-series consonant				ខ ្ខ		kʰɑː	U+1781: KHMER LETTER KHA	✓
ឃ	K	kʰ k- -k	ɔː	kh	ḵʰ	X	Lo		o-series consonant				ឃ ្ឃ*		kʰɔː	U+1783: KHMER LETTER KHO	✓
្ក	k	k kʰ- -k	ɑː	k	͞k				a-series consonant						kɑː	U+17D2 U+1780: KHMER SIGN COENG, LETTER KA​	
្គ	k	k kʰ- -k	ɔː	k	͞ḵ				o-series consonant						kɔː	U+17D2 U+1782: KHMER SIGN COENG, LETTER KO​	
្ខ	K	kʰ k- -k	ɑː	kh	͞kʰ				a-series consonant						kʰɑː	U+17D2 U+1781: KHMER SIGN COENG, LETTER KHA​	
្ឃ	K	kʰ k- -k	ɔː	kh	͞ḵʰ				o-series consonant						kʰɔː	U+17D2 U+1783: KHMER SIGN COENG, LETTER KHO​	
ឡ	l	l	ɑː	l	l	L	Lo		a-series consonant				ឡ ្ឡ**		lɑː	U+17A1: KHMER LETTER LA	✓
ល	l	l -l	ɔː	l	ḻ	l	Lo		o-series consonant				ល ្ល		lɔː	U+179B: KHMER LETTER LO	✓
ឭ	L	la ~ lu			l̥	\	Lo		vocalic					ស្រៈឭ	sraʔ la	U+17AD: KHMER INDEPENDENT VOWEL LY	✓
ឮ	L	laː ~ luː			l̥̄	|	Lo		vocalic					ស្រៈឮ	sraʔ laː	U+17AE: KHMER INDEPENDENT VOWEL LYY	✓
្ឡ	l	l	ɑː	l	͞l				a-series consonant						lɑː	U+17D2 U+17A1: KHMER SIGN COENG, LETTER LA​	
្ល	l	l -l	ɔː	l	͞ḻ				o-series consonant						lɔː	U+17D2 U+179B: KHMER SIGN COENG, LETTER LO​	
ម	m	m -m	ɔː	m	m̱	m	Lo		o-series consonant				ម ្ម		mɔː	U+1798: KHMER LETTER MO	✓
ំ	m	m		ṃ	m̽	M	Mn​		anusvara					និគ្គហិត	nikkɔːhet	U+17C6: KHMER SIGN NIKAHIT​	✓
្ម	m	m -m	ɔː	m	͞m̱				o-series consonant						mɔː	U+17D2 U+1798: KHMER SIGN COENG, LETTER MO​	
ណ	n	n -n	ɑː	n	n	N	Lo		a-series consonant				ណ ្ណ*		nɑː	U+178E: KHMER LETTER NNO	✓
ន	n	n -n	ɔː	n	ṉ	n	Lo		o-series consonant				ន ្ន		nɔː	U+1793: KHMER LETTER NO	✓
ញ	n	ɲ -ɲ	ɔː	nh	ɲ	J	Lo		o-series consonant				ញ ្ញ		ɲɔː	U+1789: KHMER LETTER NYO	✓
្ណ	n	n -n	ɑː	n	͞n				a-series consonant						nɑː	U+17D2 U+178E: KHMER SIGN COENG, LETTER NNO​	
្ន	n	n -n	ɔː	n	͞ṉ				o-series consonant						nɔː	U+17D2 U+1793: KHMER SIGN COENG, LETTER NO​	
្ញ	n	ɲ -ɲ	ɔː	nh	͞ɲ				o-series consonant						ɲɔː	U+17D2 U+1789: KHMER SIGN COENG, LETTER NYO​	
ង	N	ŋ -ŋ	ɔː	ng	ŋ	g	Lo		o-series consonant				ង ្ង		ŋɔː	U+1784: KHMER LETTER NGO	✓
្ង	N	ŋ -ŋ	ɔː	ng	͞ŋ				o-series consonant						ŋɔː	U+17D2 U+1784: KHMER SIGN COENG, LETTER NGO​	
ោ	o	ao oː		o	o	o	Mc​		vowel sign			ឱ		ស្រៈ អោ	sraʔ ʔao	U+17C4: KHMER VOWEL SIGN OO​	✓
ោះ	o	ɑh uə̆h			oh̽				multi-part vowel							U+17C4 U+17C7: KHMER VOWEL SIGN OO, SIGN REAHMUK​	
ឱ	O	ʔao		o	ọ	<	Lo		independent vowel		ោ			ស្រៈឱ	sraʔ ʔao	U+17B1: KHMER INDEPENDENT VOWEL QOO TYPE ONE	✓
ព	p	p -p	ɔː	p	p̱	B	Lo		o-series consonant				ព ្ព		pɔː	U+1796: KHMER LETTER PO	✓
ផ	p	pʰ p- -p	ɑː	ph	pʰ	p	Lo		a-series consonant				ផ ្ផ*		pʰɑː	U+1795: KHMER LETTER PHA	✓
ភ	p	pʰ p- -p	ɔː	ph	p̱ʰ	P	Lo		o-series consonant				ភ ្ភ		pʰɔː	U+1797: KHMER LETTER PHO	✓
្ព	p	p -p	ɔː	p	͞p̱				o-series consonant						pɔː	U+17D2 U+1796: KHMER SIGN COENG, LETTER PO​	
្ផ	p	pʰ p- -p	ɑː	ph	͞pʰ				a-series consonant						pʰɑː	U+17D2 U+1795: KHMER SIGN COENG, LETTER PHA​	
្ភ	p	pʰ p- -p	ɔː	ph	͞p̱ʰ				o-series consonant						pʰɔː	U+17D2 U+1797: KHMER SIGN COENG, LETTER PHO​	
រ	r	r -∅	ɔː	r	ṟ	r	Lo		o-series consonant				រ ្រ		rɔː	U+179A: KHMER LETTER RO	✓
ឫ	R	ra ~ ru			r̥	A	Lo		vocalic					ស្រៈឫ	sraʔ ra	U+17AB: KHMER INDEPENDENT VOWEL RY	✓
ឬ	R	raː ~ ruː			r̥̄	R	Lo		vocalic					ស្រៈឬ	sraʔ raː	U+17AC: KHMER INDEPENDENT VOWEL RYY	✓
្រ	r	r -∅	ɔː	r	͞ṟ				o-series consonant						rɔː	U+17D2 U+179A: KHMER SIGN COENG, LETTER RO​	
ស	s	s s- -h	ɑː	s	s	s	Lo		a-series consonant				ស ្ស		sɑː	U+179F: KHMER LETTER SA	✓
្ស	s	s s- -h	ɑː	s	͞s				a-series consonant						sɑː	U+17D2 U+179F: KHMER SIGN COENG, LETTER SA​	
ត	t	t ɗ- t- -t	ɑː	t	t	t	Lo		a-series consonant				ត ្ត		tɑː	U+178F: KHMER LETTER TA	✓
ទ	t	t -t	ɔː	t	ṯ	T	Lo		o-series consonant				ទ ្ទ		tɔː	U+1791: KHMER LETTER TO	✓
ថ	t	tʰ t- -t	ɑː	th	tʰ	f	Lo		a-series consonant				ថ ្ថ		tʰɑː	U+1790: KHMER LETTER THA	✓
ឋ	t	tʰ t- -t	ɑː	th	ṫʰ	z	Lo		a-series consonant				ឋ ្ឋ*		tʰɑː	U+178B: KHMER LETTER TTHA	✓
ធ	t	tʰ t- -t	ɔː	th	ṯʰ	F	Lo		o-series consonant				ធ ្ធ*		tʰɔː	U+1792: KHMER LETTER THO	✓
ឍ	t	tʰ -t	ɔː	th	ṯ̇ʰ	Z	Lo	r	o-series consonant	rare			ឍ ្ឍ*		tʰɔː	U+178D: KHMER LETTER TTHO	✓
្ត	t	t ɗ- t- -t	ɑː	t	͞t				a-series consonant						tɑː	U+17D2 U+178F: KHMER SIGN COENG, LETTER TA​	
្ទ	t	t -t	ɔː	t	͞ṯ				o-series consonant						tɔː	U+17D2 U+1791: KHMER SIGN COENG, LETTER TO​	
្ថ	t	tʰ t- -t	ɑː	th	͞tʰ				a-series consonant						tʰɑː	U+17D2 U+1790: KHMER SIGN COENG, LETTER THA​	
្ឋ	t	tʰ t- -t	ɑː	th	͞ṫʰ				a-series consonant						tʰɑː	U+17D2 U+178B: KHMER SIGN COENG, LETTER TTHA​	
្ធ	t	tʰ t- -t	ɔː	th	͞ṯʰ				o-series consonant						tʰɔː	U+17D2 U+1792: KHMER SIGN COENG, LETTER THO​	
្ឍ	t	tʰ -t	ɔː	th	͞ṯ̇ʰ			r	o-series consonant	rare					tʰɔː	U+17D2 U+178D: KHMER SIGN COENG, LETTER TTHO​	
ុ	u	o u		u	u	u	Mn​		vowel sign			ឧ		ស្រៈ អុ	sraʔ ʔo	U+17BB: KHMER VOWEL SIGN U​	✓
ូ	u	ou uː		ū	ū	U	Mn​		vowel sign			ឩ		ស្រៈ អូ	sraʔ ʔū	U+17BC: KHMER VOWEL SIGN UU​	✓
ួ	u	uə		ua	uᵊ	Y	Mn​		vowel sign					ស្រៈ អួ	sraʔ ʔua	U+17BD: KHMER VOWEL SIGN UA​	✓
ុំ	u	om um			um̽				multi-part vowel							U+17BB U+17C6: KHMER VOWEL SIGN U, SIGN NIKAHIT​	
ុះ	u	oh uh			uh̽				multi-part vowel							U+17BB U+17C7: KHMER VOWEL SIGN U, SIGN REAHMUK​	
ឧ	U	ʔo ʔu ʔao		u	ụ	}	Lo		independent vowel		ុ			ស្រៈឧ	sraʔ ʔo	U+17A7: KHMER INDEPENDENT VOWEL QU	✓
ឩ	U	ou ʔuː		ū	ụ̄	]	Lo		independent vowel		ូ			ស្រៈឩ	sraʔ ʔou	U+17A9: KHMER INDEPENDENT VOWEL QUU	✓
វ	v	ʋ -w	ɔː	v	v̱	v	Lo		o-series consonant				វ ្វ		ʋɔː	U+179C: KHMER LETTER VO	✓
្វ	v	ʋ -w	ɔː	v	͞v̱				o-series consonant						ʋɔː	U+17D2 U+179C: KHMER SIGN COENG, LETTER VO​	
យ	y	j -iː	ɔː	y	y̱	y	Lo		o-series consonant				យ ្យ		jɔː	U+1799: KHMER LETTER YO	✓
្យ	y	j -iː	ɔː	y	͞y̱				o-series consonant						jɔː	U+17D2 U+1799: KHMER SIGN COENG, LETTER YO​	
																	
ា់		a eə̆ oə̆			ā˘											U+17B6 U+17CB: KHMER VOWEL SIGN AA, SIGN BANTOC​	
ាំង		aŋ eə̆ŋ			ām̽ŋ											U+17B6 U+17C6 U+1784: KHMER VOWEL SIGN AA, SIGN NIKAHIT, LETTER NGO​	
ិះ		eh ih			ih̽											U+17B7 U+17C7: KHMER VOWEL SIGN I, SIGN REAHMUK​	
ឹះ		əh			ɨh̽											U+17B9 U+17C7: KHMER VOWEL SIGN Y, SIGN REAHMUK​	
ូវ		əw ɨw			ūv̱											U+17BC U+179C: KHMER VOWEL SIGN UU, LETTER VO​	
ើះ		əh			aᵊh̽											U+17BE U+17C7: KHMER VOWEL SIGN OE, SIGN REAHMUK​	
ែះ		eh			æh̽											U+17C2 U+17C7: KHMER VOWEL SIGN AE, SIGN REAHMUK​	
័រ		ɔə			ăṟ											U+17D0 U+179A: KHMER SIGN SAMYOK SANNYA, LETTER RO​	
ិយ		iː			iy̱											U+17B7 U+1799: KHMER VOWEL SIGN I, LETTER YO​	
័យ		aj ɨj			ăy̱											U+17D0 U+1799: KHMER SIGN SAMYOK SANNYA, LETTER YO​	
																	
ឝ		ɕ			ɕ	s	Lo	o	consonant	obsolete						U+179D: KHMER LETTER SHA	✓
ឞ		ʂ			ʂ	d	Lo	o	consonant	obsolete						U+179E: KHMER LETTER SSO	✓
																	
៓					°		Mn​	d	lunar date sign	deprecated						U+17D3: KHMER SIGN BATHAMASAT​	✓
ឨ		ʔok			U	[	Lo	o	independent vowel	obsolete						U+17A8: KHMER INDEPENDENT VOWEL QUK	✓
ឣ					A		Lo	d	independent vowel	strongly deprecated						U+17A3: KHMER INDEPENDENT VOWEL QAQ	✓
ឤ					Ä		Lo	d	independent vowel	strongly deprecated						U+17A4: KHMER INDEPENDENT VOWEL QAA	✓
																	
\u17B4					–		Mn	d	inherent vowel mark	deprecated						U+17B4: KHMER VOWEL INHERENT AQ	
\u17B5					–		Mn	d	inherent vowel mark	deprecated						U+17B5: KHMER VOWEL INHERENT AA	
																	
ʼ							Lm		apostrophe							U+02BC: MODIFIER LETTER APOSTROPHE	
។ល។				…	.ḻ.				etc.							U+17D4 U+179B U+17D4: KHMER SIGN KHAN, LETTER LO, SIGN KHAN	
																	
ʼ				ʼ	ʼ		Lm		apostrophe							U+02BC: MODIFIER LETTER APOSTROPHE	
§				§	§		Po		section sign							U+00A7: SECTION SIGN	
†				†	†		Po		dagger							U+2020: DAGGER	
‡				‡	‡		Po		double dagger							U+2021: DOUBLE DAGGER	
′				′	′		Po		prime							U+2032: PRIME	
″				″	″		Po		double prime							U+2033: DOUBLE PRIME	
																	
																	
"					–	#	Po									U+0022: QUOTATION MARK	

អិ		ə e ɨ i			ʔi				standalone vowel							U+17A2 U+17B7: KHMER LETTER QA, VOWEL SIGN I	
អី		əj iː			ʔī				standalone vowel							U+17A2 U+17B8: KHMER LETTER QA, VOWEL SIGN II	
អឹ		ə ɨ			ʔɨ				standalone vowel							U+17A2 U+17B9: KHMER LETTER QA, VOWEL SIGN Y	
អឺ		əɨ ɨː			ʔɨ̄				standalone vowel							U+17A2 U+17BA: KHMER LETTER QA, VOWEL SIGN YY	
អុ		o u			ʔu				standalone vowel							U+17A2 U+17BB: KHMER LETTER QA, VOWEL SIGN U	
អូ		ou uː			ʔū				standalone vowel							U+17A2 U+17BC: KHMER LETTER QA, VOWEL SIGN UU	
អេ		ei eː			ʔe				standalone vowel							U+17A2 U+17C1: KHMER LETTER QA, VOWEL SIGN E	
អោ		ao oː			ʔo				standalone vowel							U+17A2 U+17C4: KHMER LETTER QA, VOWEL SIGN OO	
អែ		ae ɛː			ʔæ				standalone vowel							U+17A2 U+17C2: KHMER LETTER QA, VOWEL SIGN AE	
អៈ		aʔ eə̆ʔ			ʔa				standalone vowel							U+17A2 U+17C8: KHMER LETTER QA, SIGN YUUKALEAPINTU	
អា		aː iə			ʔā				standalone vowel							U+17A2 U+17B6: KHMER LETTER QA, VOWEL SIGN AA	
អៀ		iə			ʔiᵊ				standalone vowel							U+17A2 U+17C0: KHMER LETTER QA, VOWEL SIGN IE	
អឿ		ɨə			ʔɨᵊ				standalone vowel							U+17A2 U+17BF: KHMER LETTER QA, VOWEL SIGN YA	
អួ		uə			ʔuᵊ				standalone vowel							U+17A2 U+17BD: KHMER LETTER QA, VOWEL SIGN UA	
អើ		aə əː			ʔaᵊ				standalone vowel							U+17A2 U+17BE: KHMER LETTER QA, VOWEL SIGN OE	
អៃ		aj ɨj			ʔaʲ				standalone vowel							U+17A2 U+17C3: KHMER LETTER QA, VOWEL SIGN AI	
អៅ		aw ɨw			ʔaʷ				standalone vowel							U+17A2 U+17C5: KHMER LETTER QA, VOWEL SIGN AU	

																
																
`



latinPanel = 'ᵃ â ā ɓ ɕ ɗ ə ə̆ ɛː ḥ iː ɨ ī kʰ ṃ ɲ ŋ ᵒ ∅ pʰ ʂ tʰ uː ū ʋ ý ȳ ʔ'



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

"equiv": 0,
"dvowel": 11,
"ivowel": 12,
"subj":0,
"ltone":0,
"htone":0,
"lc":0,
"uc":0,
"meaning":0,
"shape": 13,
"numLoc": 0,

"nnameLoc": 14,
"nameLoc": 15,
"ucsName": 16,
"block": 17,

"othertranscriptions": [[4, 'UNEGN']]
}
