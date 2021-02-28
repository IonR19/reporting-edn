interface WorkPlace {
  title: string;
  value: string;
}

interface WorkPlaces {
  watch: WorkPlace[];
  section: WorkPlace[];
}

export const WorkPlaces: WorkPlaces = {
  watch: [
    {
      value: "fr",
      title: "الفروانية",
    },
    {
      value: "hw",
      title: "حولي",
    },
    {
      value: "jh",
      title: "الجهراء",
    },
    {
      value: "ah",
      title: "الاحمدي",
    },
    {
      value: "mb",
      title: "مبارك الكبير",
    },
    {
      value: "as",
      title: "العاصمة",
    },
  ],
  section: [
    {
      value: "repair",
      title: "الصيانة والوقاية",
    },
    {
      value: "civil",
      title: "الأعمال المدنية",
    },
    {
      value: "saftey",
      title: "الامن والسلامة",
    },
  ],
};
