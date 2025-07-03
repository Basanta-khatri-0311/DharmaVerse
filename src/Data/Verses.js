const verses = [
  {
    id: 1,
    title: "Bhagavad Gita",
    chapter: "2.48",
    sanskrit:
      "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय ।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते ॥",
    english:
      "Be steadfast in yoga, O Arjuna. Perform your duty and abandon attachment to success or failure. Such equanimity is called yoga.",
    tag: "Karma Bhakti Yog",
    category: "Karma",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Bhagavad Gita",
    chapter: "2.47",
    sanskrit:
      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
    english:
      "You have the right to perform your duties, but not to the fruits of your actions. Never consider yourself the cause of the results of your activities, nor be attached to inaction.",
    tag: "Self Discipline",
    category: "Self Discipline",
    isFavorite: false,
  },
  {
    id: 3,
    title: "Bhagavad Gita",
    chapter: "4.24",
    sanskrit:
      "ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम् ।\nब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना ॥",
    english:
      "The act of offering is Brahman; the oblation is Brahman; it is offered by Brahman into the fire of Brahman. Such a person who sees Brahman in every action attains Brahman.",
    tag: "Bhakti",
    category: "Bhakti",
    isFavorite: false,
  },
  {
    id: 4,
    title: "Bhagavad Gita",
    chapter: "3.19",
    sanskrit:
      "तस्मादसक्तः सततं कार्यं कर्म समाचर ।\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः ॥",
    english:
      "Therefore, without attachment, perform your duty. For by working without attachment, one attains the Supreme.",
    tag: "Karma",
    category: "Karma",
    isFavorite: false,
  },
  {
    id: 5,
    title: "Bhagavad Gita",
    chapter: "5.16",
    sanskrit:
      "ज्ञानेन तु तदज्ञानं येषां नाशितमात्मनः ।\nतेषामादित्यवज्ज्ञानं प्रकाशयति तत्परम् ॥",
    english:
      "But to those whose ignorance is destroyed by knowledge, the Supreme Reality is revealed like the sun illumines everything.",
    tag: "Wisdom",
    category: "Wisdom",
    isFavorite: false,
  },
  {
    id: 6,
    title: "Bhagavad Gita",
    chapter: "4.40",
    sanskrit:
      "अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति ।\nनायं लोकोऽस्ति न परो न सुखं संशयात्मनः ॥",
    english:
      "But ignorant and faithless persons who doubt the revealed scriptures do not attain God-consciousness. For the doubting soul there is happiness neither in this world nor the next.",
    tag: "Self Discipline",
    category: "Self Discipline",
    isFavorite: false,
  },
  {
    id: 7,
    title: "Bhagavad Gita",
    chapter: "9.32",
    sanskrit:
      "मां हि पार्थ व्यपाश्रित्य येऽपि स्यु: पापयोनयः ।\nस्त्रियो वैश्यास्तथा शूद्रास्तेऽपि यान्ति परां गतिम् ॥",
    english:
      "O Arjuna, those who take shelter in Me, though they be of lower birth—women, merchants, or laborers—can attain the supreme goal.",
    tag: "Bhakti",
    category: "Bhakti",
    isFavorite: false,
  },
  {
    id: 8,
    title: "Bhagavad Gita",
    chapter: "12.8",
    sanskrit:
      "मय्येव मन आधत्स्व मयि बुद्धिं निवेशय ।\nनिवसिष्यसि मय्येव अत ऊर्ध्वं न संशयः ॥",
    english:
      "Fix your mind on Me alone, let your intellect dwell in Me; thereafter you will live in Me alone. Of this, there is no doubt.",
    tag: "Bhakti",
    category: "Bhakti",
    isFavorite: false,
  },
  {
    id: 9,
    title: "Bhagavad Gita",
    chapter: "18.66",
    sanskrit:
      "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥",
    english:
      "Abandon all varieties of duties and just surrender unto Me alone. I will liberate you from all sinful reactions; do not fear.",
    tag: "Moksha",
    category: "Moksha",
    isFavorite: false,
  },
  {
    id: 10,
    title: "Bhagavad Gita",
    chapter: "5.18",
    sanskrit:
      "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि ।\nशुनि चैव श्वपाके च पण्डिताः समदर्शिनः ॥",
    english:
      "The wise see the same in a Brahmana endowed with learning and humility, a cow, an elephant, a dog, and a dog-eater.",
    tag: "Wisdom",
    category: "Wisdom",
    isFavorite: false,
  },
  {
    id: 11,
    title: "Bhagavad Gita",
    chapter: "3.8",
    sanskrit:
      "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः ।\nशरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः ॥",
    english:
      "You should perform your prescribed duties, for action is better than inaction. Without action, even the maintenance of the body would not be possible.",
    tag: "Karma",
    category: "Karma",
    isFavorite: false,
  },
  {
    id: 12,
    title: "Bhagavad Gita",
    chapter: "9.34",
    sanskrit:
      "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु ।\nमामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे ॥",
    english:
      "Fix your mind on Me, be devoted to Me, sacrifice to Me, bow down to Me. You shall come to Me alone—I promise you, for you are dear to Me.",
    tag: "Bhakti",
    category: "Bhakti",
    isFavorite: false,
  },
  {
    id: 13,
    title: "Bhagavad Gita",
    chapter: "6.32",
    sanskrit:
      "आत्मौपम्येन सर्वत्र समं पश्यति योऽर्जुन ।\nसुखं वा यदि वा दुःखं स योगी परमो मतः ॥",
    english:
      "O Arjuna, that yogi is considered the highest who sees all beings as equal, by comparison with the self, in both happiness and distress.",
    tag: "Wisdom",
    category: "Wisdom",
    isFavorite: false,
  },
  {
    id: 14,
    title: "Bhagavad Gita",
    chapter: "2.45",
    sanskrit:
      "त्रैगुण्यविषया वेदा निस्त्रैगुण्यो भव अर्जुन ।\nनिर्द्वन्द्वो नित्यसत्त्वस्थो निर्योगक्षेम आत्मवान् ॥",
    english:
      "The Vedas deal with the three modes of material nature. Rise above these modes, O Arjuna. Be free from all dualities and established in the self.",
    tag: "Moksha",
    category: "Moksha",
    isFavorite: false,
  },
  {
    id: 15,
    title: "Bhagavad Gita",
    chapter: "2.57",
    sanskrit:
      "दुःखेष्वनुद्विग्नमना: सुखेषु विगतस्पृह: ।\nवीतरागभयक्रोध: स्थितधीर्मुनिरुच्यते ॥",
    english:
      "One whose mind is undisturbed in sorrow and free from desire in joy, who is free from attachment, fear, and anger, is called a sage of steady mind.",
    tag: "Self Discipline",
    category: "Self Discipline",
    isFavorite: false,
  },
  {
    id: 16,
    title: "Bhagavad Gita",
    chapter: "8.7",
    sanskrit:
      "तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च ।\nमय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशयम् ॥",
    english:
      "Therefore, remember Me at all times and do your duty. With your mind and intellect fixed on Me, you will come to Me without doubt.",
    tag: "Karma",
    category: "Karma",
    isFavorite: false,
  },
  {
    id: 17,
    title: "Bhagavad Gita",
    chapter: "18.66",
    sanskrit: "अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥",
    english: "I shall liberate you from all sins; do not grieve.",
    tag: "Moksha",
    category: "Moksha",
    isFavorite: false,
  },
  {
    id: 18,
    title: "Bhagavad Gita",
    chapter: "7.25",
    sanskrit:
      "नाहं प्रकाशः सर्वस्य योगमायासमावृतः ।\nमूढोऽयं नाभिजानाति लोको मामजमव्ययम् ॥",
    english:
      "I am not manifest to everyone, being veiled by My divine energy (yogamaya). This deluded world does not know Me, the unborn and imperishable.",
    tag: "Wisdom",
    category: "Wisdom",
    isFavorite: false,
  },
  {
    id: 19,
    title: "Bhagavad Gita",
    chapter: "18.78",
    sanskrit:
      "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः ।\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ॥",
    english:
      "Wherever there is Krishna, the master of yoga, and Arjuna, the archer, there will surely be fortune, victory, prosperity, and sound morality. That is my opinion.",
    tag: "Bhakti",
    category: "Bhakti",
    isFavorite: false,
  },
  {
    id: 20,
    title: "Bhagavad Gita",
    chapter: "5.3",
    sanskrit:
      "ज्ञेयः स नित्यसंन्यासी यो न द्वेष्टि न काङ्क्षति ।\nनिर्द्वन्द्वो हि महाबाहो सुखं बन्धात् प्रमुच्यते ॥",
    english:
      "He who neither hates nor desires, is known as ever renounced. Such a person, free from dualities, easily overcomes bondage and is completely liberated.",
    tag: "Moksha",
    category: "Moksha",
    isFavorite: false,
  },
];

export default verses;
