interface WorkPlace {
  [anything: string]: {
    title: string;
  };
}

interface WatchesProps {
  watch: WorkPlace;
  section: WorkPlace;
}

export const WorkPlaces: WatchesProps = {
  watch: {
    fr: {
      title: "الفروانية",
    },
    hw: {
      title: "حولي",
    },
    jh: {
      title: "الجهراء",
    },
    ah: {
      title: "الاحمدي",
    },
    mb: {
      title: "مبارك الكبير",
    },
    as: {
      title: "العاصمة",
    },
  },
  section: {
    repair: {
      title: "الصيانة والوقاية",
    },
    civil: {
      title: "الأعمال المدنية",
    },
    saftey: {
      title: "الامن والسلامة",
    },
  },
};
