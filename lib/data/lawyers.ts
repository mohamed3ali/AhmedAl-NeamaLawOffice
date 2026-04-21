export type NationalityCode = "QA" | "EG" | "PK" | "SD";

export type Lawyer = {
  id: string;
  nameAr: string;
  nameEn: string;
  roleAr: string;
  roleEn: string;
  nationality: NationalityCode;
  yearsExp: string;
  registeredAr?: string;
  registeredEn?: string;
  tagsAr: string[];
  tagsEn: string[];
  bioAr: string;
  bioEn: string;
  specialtiesAr: string[];
  specialtiesEn: string[];
  /** 1-70 for pravatar consistency */
  avatarImg: number;
  /** Local file under public/, e.g. "/images/mohamed-elfeki.png" */
  photoSrc?: string;
  /** Optional custom object position for the image like "center 20%" */
  imagePosition?: string;
};

export const nationalityFlag: Record<NationalityCode, string> = {
  QA: "🇶🇦",
  EG: "🇪🇬",
  PK: "🇵🇰",
  SD: "🇸🇩",
};

export const lawyers: Lawyer[] = [
  {
    id: "ahmad",
    nameAr: "أحمد علي حسين النعمة",
    nameEn: "Ahmed Ali Hussein Al-Neama",
    roleAr: "مالك ومؤسس المكتب",
    roleEn: "Owner & founding partner",
    nationality: "QA",
    yearsExp: "منذ ٢٠١١",
    bioAr: "المؤسس والمدير العام للمكتب، يقود الفريق بخبرة عميقة في التقاضي والاستشارات المعقدة.",
    bioEn: "Founder and managing partner, leading the firm with deep experience in litigation and complex advisory work.",
    tagsAr: ["القيادة", "التقاضي"],
    tagsEn: ["Leadership", "Litigation"],
    specialtiesAr: ["التقاضي العام", "الاستراتيجية القانونية"],
    specialtiesEn: ["General litigation", "Legal strategy"],
    avatarImg: 12,
    photoSrc: "/images/leade.jpeg",
  },
  {
    id: "khaled",
    nameAr: "خالد منصور",
    nameEn: "Khaled Mansour",
    roleAr: "محامي ومستشار قانوني",
    roleEn: "Lawyer & legal consultant",
    nationality: "EG",
    yearsExp: "١٥+ سنة",
    registeredAr: "مقيد بوزارة العدل",
    registeredEn: "Registered with the Ministry of Justice",
    bioAr: "مستشار قانوني بخبرة واسعة في القضايا المعقدة أمام المحاكم القطرية.",
    bioEn: "Legal consultant with broad experience in complex matters before Qatari courts.",
    tagsAr: ["استشارات", "وزارة العدل"],
    tagsEn: ["Advisory", "MoJ registered"],
    specialtiesAr: ["المدني", "الاستثمار"],
    specialtiesEn: ["Civil", "Investment"],
    avatarImg: 33,
    photoSrc: "/images/r.jpeg",
    imagePosition: "center 5%",
  },
 
  {
    id: "mohamed-elfeki",
    nameAr: "محمد الفقي",
    nameEn: "Mohamed El-Feki",
    roleAr: "محامٍ",
    roleEn: "Lawyer",
    nationality: "EG",
    yearsExp: "١٨+ سنة",
    bioAr: "خبرة في المدنية والاستثمار والجنائية والإدارية.",
    bioEn: "Experience across civil, investment, criminal, and administrative matters.",
    tagsAr: ["متعدد المجالات"],
    tagsEn: ["Multi-practice"],
    specialtiesAr: ["المدنية", "الاستثمار", "الجنائية", "الإدارية"],
    specialtiesEn: ["Civil", "Investment", "Criminal", "Administrative"],
    avatarImg: 51,
    photoSrc: "/images/p.jpeg",
  },
  {
    id: "mostafa",
    nameAr: "مصطفى عماد",
    nameEn: "Mostafa Emad",
    roleAr: "محامٍ",
    roleEn: "Lawyer",
    nationality: "EG",
    yearsExp: "١٠ سنوات",
    bioAr: "تركيز على القضايا المدنية والاستثمارية والإدارية.",
    bioEn: "Focus on civil, investment, and administrative cases.",
    tagsAr: ["المدني", "الإداري"],
    tagsEn: ["Civil", "Administrative"],
    specialtiesAr: ["المدنية", "الاستثمار", "الإدارية"],
    specialtiesEn: ["Civil", "Investment", "Administrative"],
    avatarImg: 62,
    photoSrc: "/images/m.jpeg",
      imagePosition: "center 5%",
  },
  {
    id: "reda",
    nameAr: "رضا السيد بكر",
    nameEn: "Reda El-Sayed Bakr",
    roleAr: "محامٍ",
    roleEn: "Lawyer",
    nationality: "EG",
    yearsExp: "١٠ سنوات",
    registeredAr: "مقيد بوزارة العدل",
    registeredEn: "Registered with the Ministry of Justice",
    bioAr: "الجنائية والإيجارات والأسرة أمام المحاكم المختصة.",
    bioEn: "Criminal, lease, and family matters before the competent courts.",
    tagsAr: ["جنائي", "أسرة"],
    tagsEn: ["Criminal", "Family"],
    specialtiesAr: ["الجنائية", "الإيجارات", "الأسرة"],
    specialtiesEn: ["Criminal", "Leases", "Family"],
    avatarImg: 68,
    photoSrc: "/images/o.jpeg",
  },
  {
    id: "mohamed-qasem",
    nameAr: "محمد قاسم",
    nameEn: "Mohamed Qasem",
    roleAr: "محامٍ",
    roleEn: "Lawyer",
    nationality: "PK",
    yearsExp: "٧ سنوات",
    bioAr: "دعم فني وقانوني في ملفات متنوعة ضمن فريق المكتب.",
    bioEn: "Legal support across varied matters within the firm’s practice.",
    tagsAr: ["دعم قانوني"],
    tagsEn: ["Legal support"],
    specialtiesAr: ["المدني", "الإداري"],
    specialtiesEn: ["Civil", "Administrative"],
    avatarImg: 15,
    photoSrc: "/images/K.jpeg",
  },

  {
    id: "nadia",
    nameAr: "نادية صالح",
    nameEn: "Nadia Saleh",
    roleAr: "محامية",
    roleEn: "Lawyer",
    nationality: "SD",
    yearsExp: "٢٠+ سنة",
    bioAr: "خبرة طويلة في القضايا المدنية ومحاكم الأسرة.",
    bioEn: "Extensive experience in civil cases and family courts.",
    tagsAr: ["مدني", "أسرة"],
    tagsEn: ["Civil", "Family"],
    specialtiesAr: ["القضايا المدنية", "محاكم الأسرة"],
    specialtiesEn: ["Civil disputes", "Family courts"],
    avatarImg: 32,
  },
];

export const featuredLawyerIds = ["ahmad", "khaled", "mohamed-elfeki"] as const;

export function getLawyersByIds(ids: string[]): Lawyer[] {
  return ids
    .map((id) => lawyers.find((l) => l.id === id))
    .filter((l): l is Lawyer => Boolean(l));
}
