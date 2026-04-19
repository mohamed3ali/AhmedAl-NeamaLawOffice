export type Service = {
  id: string;
  icon: "scale" | "briefcase" | "shield" | "users" | "fileText" | "building";
  titleAr: string;
  titleEn: string;
  shortAr: string;
  shortEn: string;
  descAr: string;
  descEn: string;
  lawyerIds: string[];
};

export const services: Service[] = [
  {
    id: "civil",
    icon: "scale",
    titleAr: "الدعاوى المدنية",
    titleEn: "Civil Litigation",
    shortAr: "تمثيل كامل أمام المحاكم المدنية في المنازعات التعاقدية والتعويضية.",
    shortEn: "Full representation in civil courts for contractual and tort matters.",
    descAr:
      "نقدّم تمثيلاً قانونياً متكاملاً في الدعاوى المدنية بما في ذلك المنازعات التعاقدية والمسؤولية المدنية والتعويضات، مع إعداد المذكرات والمرافعات باحترافية عالية.",
    descEn:
      "End-to-end civil litigation including contractual disputes, tort liability, and damages, with professionally drafted pleadings and oral advocacy.",
    lawyerIds: ["nagi", "mohamed-elfeki", "mostafa", "nadia"],
  },
  {
    id: "commercial",
    icon: "briefcase",
    titleAr: "الدعاوى التجارية والاستثمار",
    titleEn: "Commercial & Investment",
    shortAr: "حماية مصالح الشركات والمستثمرين أمام المحاكم التجارية ومحكمة الاستثمار.",
    shortEn: "Protecting corporate and investor interests before commercial and investment courts.",
    descAr:
      "استشارات وتقاضٍ في المعاملات التجارية، المنازعات الاستثمارية، والالتزامات التنظيمية أمام الجهات المختصة في قطر.",
    descEn:
      "Advisory and litigation for commercial transactions, investment disputes, and regulatory obligations before Qatar’s competent forums.",
    lawyerIds: ["ahmad", "khaled", "nagi", "mohamed-elfeki", "mostafa"],
  },
  {
    id: "criminal",
    icon: "shield",
    titleAr: "الدعاوى الجنائية",
    titleEn: "Criminal Defense",
    shortAr: "الدفاع عن المتهمين والمطالبة بالحق الخاص عند الاقتضاء.",
    shortEn: "Defence of accused persons and private rights where applicable.",
    descAr:
      "متابعة القضايا الجنائية بكل دقة، مع حماية حقوق الموكلين في مراحل التحقيق والمحاكمة.",
    descEn:
      "Careful handling of criminal matters, safeguarding client rights through investigation and trial stages.",
    lawyerIds: ["mohamed-elfeki", "reda"],
  },
  {
    id: "family",
    icon: "users",
    titleAr: "قضايا الأسرة والتركات",
    titleEn: "Family & Inheritance",
    shortAr: "النفقة، الحضانة، الطلاق، والتركات وفقاً للأنظمة المعمول بها.",
    shortEn: "Alimony, custody, divorce, and estates under applicable laws.",
    descAr:
      "إرشاد وتمثيل في قضايا الأحوال الشخصية والتركات، مع احترام خصوصية الأسرة.",
    descEn:
      "Guidance and representation in personal status and inheritance matters with strict family confidentiality.",
    lawyerIds: ["reda", "nadia"],
  },
  {
    id: "contracts",
    icon: "fileText",
    titleAr: "صياغة ومراجعة العقود",
    titleEn: "Drafting & Review of Contracts",
    shortAr: "عقود تجارية واستثمارية تحمي موكليك من المخاطر القانونية.",
    shortEn: "Commercial and investment agreements that mitigate legal risk.",
    descAr:
      "صياغة دقيقة ومراجعة شاملة للعقود بالعربية والإنجليزية، مع التركيز على الامتثال والوضوح.",
    descEn:
      "Precise drafting and thorough review of contracts in Arabic and English with clarity and compliance focus.",
    lawyerIds: ["ahmad", "khaled", "mohamed-elfeki"],
  },
  {
    id: "corporate",
    icon: "building",
    titleAr: "تأسيس الشركات",
    titleEn: "Company Formation",
    shortAr: "إجراءات التأسيس والهياكل القانونية للأعمال في قطر.",
    shortEn: "Incorporation steps and legal structures for businesses in Qatar.",
    descAr:
      "مساعدة المستثمرين في اختيار الكيان المناسب، إعداد الوثائق، والتنسيق مع الجهات الرسمية.",
    descEn:
      "Supporting investors in entity selection, documentation, and coordination with authorities.",
    lawyerIds: ["ahmad", "khaled", "mohamed-qasem"],
  },
];
