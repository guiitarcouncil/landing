import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, Users, ChevronDown } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useIsMobile } from "@/hooks/use-mobile";

// Updated type
type TeamMember = {
  id: number;
  name: string;
  position: string;
  image: string;
  resume?: string;
  bio?: string;
  linkedin?: string;
  email?: string;
};

type TeamCategory = {
  id: string;
  name: string;
  members: TeamMember[];
};

const TeamCarousel = () => {
  const isMobile = useIsMobile();
  const [activeTeam, setActiveTeam] = useState("team");
  const [isOpen, setIsOpen] = useState(false);

  const [teamCategories] = useState<TeamCategory[]>([
    // Core Team
    {
      id: "team",
      name: "Core Team",
      members: [
        {
          id: 1,
          name: "Mr. Bimal Bhayani",
          position: "CEO, GUIITAR",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068655/mrbimal_d4r8h2.jpg",
          resume:
            "https://drive.google.com/file/d/112CsLKNyusAz_DtrbrzGrpJc4odCcuKw/",
          linkedin: "",
          email: "",
        },
        {
          id: 2,
          name: "Mr. KiranKumar Parmar",
          position: "Sr. Manager",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068658/mrkiran_wpigss.jpg",
          resume:
            "https://drive.google.com/file/d/1ElxEwweEeZeroWkqfCd6RtrPqxKo5ZK-/",
          linkedin: "",
          email: "",
        },
        {
          id: 3,
          name: "Dr. Nilesh Bhadure",
          position: "Professor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068630/drnilesh_o3ikuu.jpg",
          resume:
            "https://drive.google.com/file/d/1isIJeartTJQp5yJwirfFRPKvlNifryRJ/",
          linkedin: "",
          email: "",
        },
        {
          id: 4,
          name: "Mr. Akhilesh Prajapati",
          position: "Sr. Assistant Professor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068630/drprajapati_ypczef.jpg",
          resume:
            "https://drive.google.com/file/d/1Br9gUAJ1BXvaTveLrCcnPlYRREHgGRb2/",
          linkedin: "",
          email: "",
        },
        {
          id: 5,
          name: "Dr. Mihir Trivedi",
          position: "Sr. Assistant Professor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068629/drmihir_eh0zjh.jpg",
          resume:
            "https://drive.google.com/file/d/12wxMOWeDQjf1SQQp38XM9Arv9U0YghSp/",
          linkedin: "",
          email: "",
        },
        {
          id: 6,
          name: "Dr. Chandra Has",
          position: "Assistant Professor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068627/drchandra_lrl3it.jpg",
          resume:
            "https://drive.google.com/file/d/19uPcJ5kAL6r1YaAw6_Iyfy679Zeb1zQu/",
          linkedin: "",
          email: "",
        },
        {
          id: 7,
          name: "Dr. Jignesh Valand",
          position: "Assistant Professor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068628/drjignesh_kdyj4f.jpg",
          resume: "",
          linkedin: "",
          email: "",
        },
        {
          id: 8,
          name: "Dr. Rahul Sharma",
          position: "Assistant Professor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068631/drrahul_lhskon.jpg",
          resume: "",
          linkedin: "",
          email: "",
        },
        {
          id: 9,
          name: "Mr. Abidhusain Lodha",
          position: "Assistant Professor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068649/MrAbidhusain_q28i3r.jpg",
          resume: "",
          linkedin: "",
          email: "",
        },
        {
          id: 10,
          name: "Ms. Charmi Mehta",
          position: "Assistant Professor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068718/MsCharmi_jg7rq3.jpg",
          resume: "",
          linkedin: "",
          email: "",
        },
        {
          id: 11,
          name: "Shri Anup Upadhaya",
          position: "Lab Assistant",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068652/mranup_jicdrs.jpg",
          resume:
            "https://drive.google.com/file/d/1LosN0oHzTspRaGwY-gN3g9lKCL7q5j_u/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 12,
          name: "Ms. Chaitali Karpe",
          position: "Lab Assistant",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068742/chaitalikarpe_qp8mqs.jpg",
          resume:
            "https://drive.google.com/file/d/1T1B5vGOpiyn9s9fX-FrMLQjIAFpOlmeM/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 13,
          name: "Mr. Hemant Rajpoot",
          position: "IT Coordinator",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068642/hemantsir_irkbsj.jpg",
          resume:
            "https://drive.google.com/file/d/1j3pqIx6TDc_rbHZG58SqJEfE9S_MbTyY/view?usp=sharing",
          linkedin: "",
          email: "",
        },
      ],
    },

    // Board of Directors
    {
      id: "bod",
      name: "Board of Directors",
      members: [
        {
          id: 1,
          name: "Shri P. K. Taneja, IAS (Retd.)",
          position: "Chairman",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068724/pk_taneja_pq9i2q.jpg",
          resume:
            "https://drive.google.com/file/d/19leo-CdgJGIbK21nzL5gi4-j6Th2SJnf/",
          linkedin: "",
          email: "",
        },
        {
          id: 2,
          name: "Dr. G. R. Sinha",
          position: "Director",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068647/mr_grsinha_bhbmg4.jpg",
          resume:
            "https://drive.google.com/file/d/1SXjUbqVrwRuJtDcSR1ulK9BG3tIq_x7e/",
          linkedin: "",
          email: "",
        },
        {
          id: 3,
          name: "Shri Ramesh Panchal",
          position: "Director",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068661/mrpanchal_g3v5ku.jpg",
          resume:
            "https://drive.google.com/file/d/1GFGH8JrCwt9r891zWTe09EbZ582IsCPw/",
          linkedin: "",
          email: "",
        },
        {
          id: 4,
          name: "Mr. Bimal Bhayani",
          position: "Director & CEO",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068655/mrbimal_d4r8h2.jpg",
          resume:
            "https://drive.google.com/file/d/1ATHFSVbUNnHvcH-PORVVjdW4kIpm5IUL/",
          linkedin: "",
          email: "",
        },
        {
          id: 5,
          name: "Dr. Pujan Vaishnav",
          position: "Director",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068661/mrpujan_ov7rvt.jpg",
          resume:
            "https://drive.google.com/file/d/1eK7502orqHyc0hbFHZVwbK-AjK-A42xo/",
          linkedin: "",
          email: "",
        },
        {
          id: 6,
          name: "Shri Utkarsh Yajnik",
          position: "Director",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068716/mrutkarsh_t4mamo.jpg",
          resume:
            "https://drive.google.com/file/d/181rcISoVdjwOkNiMyH3BUy0q87IT6ky_/",
          linkedin: "",
          email: "",
        },
        {
          id: 7,
          name: "Shri Ravin Sanghavi",
          position: "Director",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068666/mrravin_zsrq5f.jpg",
          resume:
            "https://drive.google.com/file/d/1jt9oDu-DKihnSx8JThanmrfrZnX8CxY4/",
          linkedin: "",
          email: "",
        },
        {
          id: 8,
          name: "Mrs. Swati Bedekar",
          position: "Director",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068721/msswati_yw12e4.jpg",
          resume:
            "https://drive.google.com/file/d/1C-xPhamxA2bZvjqFWPaQPmdIDXhqgJKA/",
          linkedin: "",
          email: "",
        },
      ],
    },

    // Advisory Board
    {
      id: "adb",
      name: "Advisory Board",
      members: [
        {
          id: 1,
          name: "Mr. Bimal Bhayani",
          position: "CEO & Advisor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068655/mrbimal_d4r8h2.jpg",
          resume:
            "https://drive.google.com/file/d/112CsLKNyusAz_DtrbrzGrpJc4odCcuKw/view?usp=drive_link",
          linkedin: "",
          email: "",
        },
        {
          id: 2,
          name: "Dr. G R Sinha",
          position: "Director & Advisor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068647/mr_grsinha_bhbmg4.jpg",
          resume:
            "https://drive.google.com/file/d/1D25qxtb4duKHXe2OXh9c1KaTlOZtegeM/view?usp=drive_link",
          linkedin: "",
          email: "",
        },
        {
          id: 3,
          name: "Dr. Madhukumar Mehta",
          position: "Advisor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068629/drmadhukumar_o8pfhu.jpg",
          resume:
            "https://drive.google.com/file/d/1TLGCNmJ-5l200UdUDf97CXYndlspTUUZ/view?usp=drive_link",
          linkedin: "",
          email: "",
        },
        {
          id: 4,
          name: "Mr. Ramanan Ramanathan",
          position: "Advisor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068665/mrramanan_t90lph.jpg",
          resume:
            "https://drive.google.com/file/d/16STS2iKqGGcaUzEtHfY_fYdvWIASZMgw/view?usp=drive_link",
          linkedin: "",
          email: "",
        },
        {
          id: 5,
          name: "Mr. Anupam Jatole",
          position: "Advisor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068652/mranupam_pohuly.jpg",
          resume:
            "https://drive.google.com/file/d/14CTQ1re-FYTLSavteSPDZeNpSFD85xhQ/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 6,
          name: "Mr. Hemal Patel",
          position: "Advisor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068656/mrhemal_fzbb5p.jpg",
          resume:
            "https://drive.google.com/file/d/181dBRXhs5jd_gJCfxN6SAmlRyH4IiNWG/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 7,
          name: "Mr. Shankar C Rele",
          position: "Advisor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068680/mrshankar_d8pvxh.jpg",
          resume:
            "https://drive.google.com/file/d/1fgdUmTy9v5aHHtlFkwVQwA2BPHTWUpAw/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 8,
          name: "Dr. Nilesh Khare",
          position: "Advisor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068660/mrnirav_iqrfx1.jpg",
          resume:
            "https://drive.google.com/file/d/1Qnj1kWneo7hyZHwT9ltsvKUaV6vhpnfz/view?usp=drive_link",
          linkedin: "",
          email: "",
        },
        {
          id: 9,
          name: "Ms. Poyni Bhatt",
          position: "Advisor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068719/mspoyni_bpxhog.jpg",
          resume:
            "https://drive.google.com/file/d/1BTs1MGyeIdLx4OB9DebVBPKOpLbKunTN/view?usp=drive_link",
          linkedin: "",
          email: "",
        },
        {
          id: 10,
          name: "Mr. Bhavesh Chelani",
          position: "Advisor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068737/bhaveshChelani_raywik.jpg",
          resume:
            "https://drive.google.com/file/d/1cthr78T5xMwFCGP7YnoPjvaOGCdJzUmC/view?usp=drive_link",
          linkedin: "",
          email: "",
        },
        {
          id: 11,
          name: "Mr. Nirav D Shah",
          position: "Advisor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068660/mrnirav_iqrfx1.jpg",
          resume:
            "https://drive.google.com/file/d/1ovlOr2LVEmLbqmK8-H2JtIt0A2ONA3Kt/view?usp=drive_link",
          linkedin: "",
          email: "",
        },
        {
          id: 12,
          name: "Mr. Azam Ali Khan",
          position: "Advisor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068651/mrali_cardsj.jpg",
          resume:
            "https://drive.google.com/file/d/1KSPaeV-Z0MIujKIvjaeJfZEw6CFvEhld/view?usp=drive_link",
          linkedin: "",
          email: "",
        },
        {
          id: 13,
          name: "Mr. Ramesh Panchal",
          position: "Advisor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068661/mrpanchal_g3v5ku.jpg",
          resume:
            "https://drive.google.com/file/d/1eE5UNunlx5bNjlooxSEuiCjlhdBZA9xI/view?usp=drive_link",
          linkedin: "",
          email: "",
        },
      ],
    },

    // Faculty Mentor
    {
      id: "fac",
      name: "Faculty Mentor",
      members: [
        {
          id: 1,
          name: "Dr. Sanjukta Bose Goswami",
          position: "Dean, SOT",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068727/sanjukta_bose_k4tfew.jpg",
          resume:
            "https://drive.google.com/file/d/1oUzPVx2ZyouUqacRfDDSeRTkqsBJQBIH/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 2,
          name: "Dr. Bharti Trivedi",
          position: "Visiting Professor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068632/drTrivedi_efxgjx.jpg",
          resume:
            "https://drive.google.com/file/d/1A2q3HkyB8UPMfXCWcSFfjG1ob5zg_cuw/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 3,
          name: "Ms. Archana Magare",
          position: "Program Coordinator, CSE",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068718/msmagare_ocjvny.jpg",
          resume:
            "https://drive.google.com/file/d/18SrHuomt-nJXyOCr2BOz1R67WOEq79_G/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 4,
          name: "Ms. Patel Mosam",
          position: "Program Coordinator, CSE",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068646/mosamPatel_luof6n.jpg",
          resume:
            "https://drive.google.com/file/d/1118j5nUZCXwib9PAQWEX6-QhY64eu3Ns/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 5,
          name: "Dr. Akhilesh Prajapati",
          position: "Sr. Assistant Professor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068630/drprajapati_ypczef.jpg",
          resume:
            "https://drive.google.com/file/d/113w46kL1amfBIjEpStdAj6quOW4KLrnh/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 6,
          name: "Dr. Devjani Banerjee",
          position: "Assistant Professor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068624/devjaniBanerjee_tlo8oe.jpg",
          resume:
            "https://drive.google.com/file/d/17lLS0KlbIGr7IQusyJjNAVBFGrDWFkwm/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 7,
          name: "Dr. Chetna Parmar",
          position: "Associate Dean",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068619/chetnaParmar_yfnx5c.jpg",
          resume:
            "https://drive.google.com/file/d/1FwSxe7Wzou8lnaDJ-_tCtX5Ud0f0mA6T/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 8,
          name: "Dr. Arti Bhadoria",
          position: "Assistant Professor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068734/artiBhadoria_xqz49x.jpg",
          resume:
            "https://drive.google.com/file/d/1x0fC1FwVlDKEQnWv0z7OVVk8Itl68_f4/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 9,
          name: "Dr. Parin Kanaiya",
          position: "Assistant Professor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068723/parinKanaiya_ncss5w.jpg",
          resume:
            "https://drive.google.com/file/d/1-3OHEchNo4efjv6bmnDpNFqruRnjSuqK/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 10,
          name: "Ms. Swati Saxena",
          position: "Assistant Professor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068730/swatiSaxena_int6i1.jpg",
          resume:
            "https://drive.google.com/file/d/1vBzRUcKz506cpJu0lbzZvK5-EfGo3gZa/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 11,
          name: "Dr. Arti Hansda",
          position: "Assistant Professor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068735/artiHansda_gv8r2e.jpg",
          resume:
            "https://drive.google.com/file/d/1xHbWbvWJ3q3gKB5k3tLhFnKaIxlKByas/view?usp=sharing",
          linkedin: "",
          email: "",
        },
      ],
    },

    // Industry mentor
    {
      id: "industry",
      name: "Industry Mentors",
      members: [
        {
          id: 1,
          name: "Mr. Rupesh Shah",
          position: "CEO, Barodaweb",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068726/rupeshShah_odommw.jpg",
          resume:
            "https://drive.google.com/file/d/1gDR1HkvgLwi00oeI1p18gZbH5uUyqmiG/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 2,
          name: "Mr. Sudhir Gupta",
          position: "Member Strategic Advisory Board, Millennium Alliance",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068729/sudhirGupta_ozqefj.jpg",
          resume:
            "https://drive.google.com/file/d/1lcGUw_iv5QV_26Ws1Yw8L90m7xfyRwli/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 3,
          name: "Prof Dhruv Nath",
          position: "Director, Lead Angels Network",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068626/dhruvNath_ba3e2w.jpg",
          resume:
            "https://drive.google.com/file/d/1Xc4elkNejWYzfkdsWpvp1gzy5xeO7rZV/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 4,
          name: "Mr. Ravin Sanghavi",
          position: "Founder, Ravin Sanghavi & Associates",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068666/mrravin_zsrq5f.jpg",
          resume:
            "https://drive.google.com/file/d/1buZ3lzvPBI4KuKT5ePXjW73I85Ua8MRW/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 5,
          name: "Dr. Manoj Shukla",
          position: "CEO, Gurukul Academy",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068644/manojShukla_kdobmf.jpg",
          resume:
            "https://drive.google.com/file/d/1_gRfG0ArnfrgmEoFvciyp1mf97oEK-R7/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 6,
          name: "Kalpesh Shah",
          position: "Director, Market Creators Ltd",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068639/kalpeshShah_joqjhn.jpg",
          resume:
            "https://drive.google.com/file/d/12lHXezQ2B8cWsozcIfHbj8Uyuh1Mnk6C/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 7,
          name: "Mr. Hitesh Porwal",
          position: "Founder, BIZSTART",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068633/HITESH_PORWAL_u14kdn.jpg",
          resume:
            "https://drive.google.com/file/d/1Ghm7j6Aank9BTTqNoPDz0xPSGwfnjYtz/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 8,
          name: "Mr. Bhavesh Kothari",
          position: "Founder Director, Millennium Divas Pvt Ltd",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068738/bhaveshKothari_ibrrho.jpg",
          resume: "", // no resume url provided
          linkedin: "",
          email: "",
        },
        {
          id: 9,
          name: "Adv. Bhavik B Patel",
          position: "CEO, INFINVENT IP",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068739/Bhavik_tlzsaf.jpg",
          resume:
            "https://drive.google.com/file/d/1a8cWlJHsIFx2EZgnE73-8LeUgl1eAVqB/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 10,
          name: "Mr. Brijesh M Garala",
          position: "Director, Oviyan Cast & Forge Pvt. Ltd.",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068741/brijeshGarala_ymszsa.jpg",
          resume:
            "https://drive.google.com/file/d/1EvWbHJJzWueXRr45BY6n6zMvONxnzRHo/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 11,
          name: "Mr. Bhavesh Chelani",
          position: "MD & CEO, Santushti Shakes Pvt. Ltd.",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068737/bhaveshChelani_raywik.jpg",
          resume:
            "https://drive.google.com/file/d/1u76LLO0J3VvjYAw3PEqORO1ip9WfHzau/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 12,
          name: "Mr. Saurabh Jain",
          position: "Founder, FUN2DO Labs Pvt. Ltd.",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068728/saurabhJain_qbia4b.jpg",
          resume:
            "https://drive.google.com/file/d/1ixapMeLl9HQi8bXyR-YuOf5vCmlvQEPQ/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 13,
          name: "Dr. Kavita Saxena",
          position: "Freelancer, Freelancing Startup mentor",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068644/kavitaSaxena_dzfbg1.jpg",
          resume:
            "https://drive.google.com/file/d/1C-qH82RFvUHY52J9P1nv9O2YJ8O2sJxZ/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 14,
          name: "Dr. Suresh P Othayoth",
          position: "Manager - Research, GSFC Ltd.",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068730/sureshOthayoth_nrjh3x.jpg",
          resume:
            "https://drive.google.com/file/d/1PcYrRv6OjBhh_E_zLqBYSV6_lR39jr82/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 15,
          name: "Mr. Ashutosh Tewari",
          position: "Senior Venture Coach, GITAM University",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068736/ashutoshTewari_qjytum.jpg",
          resume:
            "https://drive.google.com/file/d/1pu9qzx8Kud2LF1YL_jj4t-gkFaMLN0eq/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 16,
          name: "CA CS Chintan Popat",
          position: "CA CS - FOUNDER, CA Chintan Popat & Associates",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068621/chintanPopat_vyngwy.jpg",
          resume:
            "https://drive.google.com/file/d/1R9EaNCrDYw-AHjRsjSfq6tqTqPYjLg6v/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 17,
          name: "Mr. Devesh Chawla",
          position: "Founder & CEO, Chatur Ideas",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068623/deveshChawla_e931vr.jpg",
          resume:
            "https://drive.google.com/file/d/1JZLj_JVbb8EF0Yo-GDzNzPDT69ch82mE/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 18,
          name: "Mr. Ashwin V. Parikh",
          position: "Director, International Business Development",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068737/ashwinParikh_pvlsbh.jpg",
          resume:
            "https://drive.google.com/file/d/1l-HmtkNGJHeY0jxk-Qw7LcSO4XvE_K5v/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 19,
          name: "Mr. Jekishan K Parmar",
          position: "Head of Sales & Technology, Aver India Equipment",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068637/jekishanParmar_qruizp.jpg",
          resume:
            "https://drive.google.com/file/d/1F7Oh25AAxGb18MR0t9eBjq7xbkZj0X2Y/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 20,
          name: "Mr. Amitkumar Patel",
          position: "Managing Director, PATactual IP Law Services LLP",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068733/amitPatel_itsz5t.jpg",
          resume:
            "https://drive.google.com/file/d/1J5qphVca-qEyYk6MxDxp6DeXvUsTJ7va/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 21,
          name: "Mr. Karan Shah",
          position:
            "Head - Partnership & Outreach, Civitas Sustainability Foundation",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068641/karanShah_kq4vvj.jpg",
          resume:
            "https://drive.google.com/file/d/1T2DwXZ0Q4wIvROHTvgEOK0imvL3bHwKd/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 22,
          name: "Mr. Devang Patel",
          position: "Founder, Vantage Point Executive Coaching",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068622/devangPatel_nqxnwm.jpg",
          resume:
            "https://drive.google.com/file/d/1S2XxVnFONBHY_1hj9cWnffWtiTQkLsn3/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 23,
          name: "Mr. Prakash Vaghasiya",
          position: "CEO, Vise Organic",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068725/PRAKASH_VAGHASIYA_dils92.jpg",
          resume:
            "https://drive.google.com/file/d/1lyWrT_2v3DLu70QWWnaKp7bT2HkYMtAJ/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 24,
          name: "Mr. Javid Shaikh",
          position: "CEO, Biopharma Incubation Center, NIPER-Ahmedabad",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068636/javidShaikh_w5rso1.jpg",
          resume:
            "https://drive.google.com/file/d/1-kDCOUnHgwhuAnxfqXj0mNe-t3U8ZDFR/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 25,
          name: "Adv. Dr. Heena Patel",
          position: "Partner, INFINVENT IP",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068632/Heena_cgb9ch.jpg",
          resume:
            "https://drive.google.com/file/d/1ErXQKX2bQ3H4yWNepeSZ0clL0X8nS_Fb/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 26,
          name: "Mr. Bhavik Bhansali",
          position: "Senior Engineer, L&T Technology Services",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068741/BHAVIK_BHANSALI_cdzcjl.jpg",
          resume:
            "https://drive.google.com/file/d/1bV86MzReEqcAQK5qAl2i1b8kzo7Hz_8v/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 27,
          name: "Mr. Akash Dadhania",
          position: "Owner, J K Fertilizers",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068732/akash_dadhania_frz2do.jpg",
          resume:
            "https://drive.google.com/file/d/1F1csjoYcnvLZNECqkMxl9IMn1AxOrL2H/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 28,
          name: "CA Jitendra Jain",
          position: "CEO, Tapanshi Finanziell Pvt. Ltd.",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068638/jitendraJain_oruign.jpg",
          resume:
            "https://drive.google.com/file/d/1Bv3jETGvVCRTwNo2lA1MoM1mjZu6Tgw0/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 29,
          name: "Dr. Ashish Kumar",
          position: "Associate Professor, Inter University Accelerator Center",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068735/ashishKumar_xpeop2.jpg",
          resume:
            "https://drive.google.com/file/d/1xh6V4sOYxOsqKXnb6hJUtH_KcQ6vSdOx/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 30,
          name: "Nilesh Vaghela",
          position: "CEO, Electromech Cloudtech Pvt. Ltd.",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068722/nileshVaghela_hfv68d.jpg",
          resume:
            "https://drive.google.com/file/d/1W5ulz2IBpYtKhPf_FzO-E5lVQqVCYKUK/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 31,
          name: "Karmjitsinh Bihola",
          position: "Founder, Innodesk Designovation Services",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068643/karmjitsinhBihola_tonpdi.jpg",
          resume:
            "https://drive.google.com/file/d/1ryklHLR4TjL9N3CV97cgq6EvHXHv1zU3/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 32,
          name: "Mr. Anant Acharya",
          position: "CTO, MarsBazaar.com",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068733/anantAcharya_pdpleu.jpg",
          resume:
            "https://drive.google.com/file/d/1YY6bpRR3HoSNtWcnJRsJEV1TWy2tnvvU/view?usp=sharing",
          linkedin: "",
          email: "",
        },
      ],
    },

    // TC
    {
      id: "tc",
      name: "Technical Associates",
      members: [
        {
          id: 1,
          name: "Ms. Foram Mistry",
          position: "Technical Associate",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068646/foram_msehlq.jpg",
          resume:
            "https://drive.google.com/file/d/1la_2SILlCEtfEqzgV0Klq5bXEFdFJ95R/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 2,
          name: "Mr. Krish Shah",
          position: "Technical Associate",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068650/krish_ibj5de.jpg",
          resume:
            "https://drive.google.com/file/d/1U1y8UrjXI7msX5wbgbTD2h1VGwlMNaiv/view?usp=sharing",
          linkedin: "",
          email: "",
        },

        {
          id: 3,
          name: "Mr. Chandraveer Sinh Solanki",
          position: "Technical Associate",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068618/chandraveer_ikxedq.png",
          resume:
            "https://drive.google.com/file/d/1TGVNe7Q9Z5UFB0K1u2GGTieFTKzSJP1W/view?usp=sharing",
          linkedin: "",
          email: "",
        },
      ],
    },

    // students
    {
      id: "students",
      name: "Student Team",
      members: [
        {
          id: 1,
          name: "Mr. Soham Kava",
          position: "Academic Associate",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068729/Soham_vuqlss.png",
          resume:
            "https://drive.google.com/file/d/1c1xVXPzIx0En0QCoU_jl9U7BFlJka6i7/",
          linkedin: "",
          email: "",
        },
        {
          id: 2,
          name: "Ms. Devanshi Mufti",
          position: "Academic Associate",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743075961/WhatsApp_Image_2025-03-27_at_17.14.31_67532fc6_vevmxd.jpg",
          resume:
            "https://drive.google.com/file/d/1gWZmptw4iYsGJPDGOeIh1kW4YLclx-qn/",
          linkedin: "",
          email: "",
        },
        {
          id: 3,
          name: "Ms. Panjal Dave",
          position: "Academic Associate",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068726/pranjal_tbznpe.png",
          resume:
            "https://drive.google.com/file/d/1sEjdxBqVI069NnBQRD1Hfj7HFbRwCFy7/",
          linkedin: "",
          email: "",
        },
        {
          id: 4,
          name: "Mr. Dhruv Verma",
          position: "Academic Associate",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068625/dhruv_kfxnz7.jpg",
          resume:
            "https://drive.google.com/file/d/11sZw31uVSSP3Qk_zdRk_eNbPombzRoHo/",
          linkedin: "",
          email: "",
        },
        {
          id: 5,
          name: "Ms. Ishika Patel",
          position: "Academic Associate",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068634/IshikaPatel_bdyaum.jpg",
          resume:
            "https://drive.google.com/file/d/1prBp-K4o56VK0J3Te7IZXqdQfduUq0ow/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 6,
          name: "Mr. Vedhant Ratnottar",
          position: "Student",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068731/Vedantratna_cilhhc.jpg",
          resume:
            "https://drive.google.com/file/d/1_tYZBdKP6gEpdyR64ypUi4auf0Lv6VJp/",
          linkedin: "",
          email: "",
        },
        {
          id: 7,
          name: "Ms. Chhaya Raundal",
          position: "Student",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068620/ChhayaRaundal_n8di4m.jpg",
          resume:
            "https://drive.google.com/file/d/1dAnb35BNgZOURjsJaY_QHA4eMwsLj_Ca/",
          linkedin: "",
          email: "",
        },
      ],
    },
  ]);

  const activeCategory = teamCategories.find((cat) => cat.id === activeTeam);

  const handleCategoryChange = (categoryId: string) => {
    setActiveTeam(categoryId);
    setIsOpen(false);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      {isMobile ? (
        <div className="mb-6">
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-guiitar-light rounded-md text-left">
              <span className="font-medium text-base sm:text-lg">
                {activeCategory?.name}
              </span>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 bg-white rounded-md shadow-md overflow-hidden">
              {teamCategories.map((category) => (
                <button
                  key={category.id}
                  className={`w-full text-left p-3 text-sm sm:text-base ${
                    category.id === activeTeam
                      ? "bg-guiitar-light text-guiitar-primary"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  <span className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    {category.name}
                  </span>
                </button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      ) : (
        <Tabs
          defaultValue="team"
          value={activeTeam}
          onValueChange={setActiveTeam}
          className="w-full"
        >
          <TabsList className="flex flex-wrap w-full mb-6 gap-2 sm:gap-3">
            {teamCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center px-4 py-2 text-sm sm:text-base"
              >
                <Users className="mr-2 h-4 w-4" />
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}

      {activeCategory && (
        <div className="py-4">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center sm:text-left">
            {activeCategory.name}
          </h3>

          <Carousel opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {activeCategory.members.map((member) => (
                <CarouselItem
                  key={member.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow rounded-lg">
                    <div className="flex justify-center pt-6 pb-4">
                      <div className="relative group">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white shadow-md filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    </div>
                    <CardContent className="pt-2 text-center px-4">
                      <h4 className="font-semibold text-base sm:text-lg mb-1">
                        {member.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        {member.position}
                      </p>
                      {member.bio && (
                        <p className="text-gray-700 text-xs mb-4 line-clamp-3">
                          {member.bio}
                        </p>
                      )}
                      <div className="flex justify-center space-x-4">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-guiitar-primary"
                          >
                            <svg
                              className="h-4 w-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76c-1.15 0-2.07-.9-2.07-2.01 0-1.11.92-2.01 2.07-2.01 1.14 0 2.06.9 2.06 2.01 0 1.11-.92 2.01-2.06 2.01zm14.62 12.34h-3.6v-5.61c0-1.33-.02-3.05-1.87-3.05-1.88 0-2.16 1.45-2.16 2.95v5.71h-3.6V9.24h3.45v1.58h.05c.48-.91 1.65-1.87 3.4-1.87 3.63 0 4.3 2.38 4.3 5.45v5.7z" />
                            </svg>
                          </a>
                        )}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="text-gray-400 hover:text-guiitar-primary"
                          >
                            <svg
                              className="h-4 w-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M1.5 4.5h21v15h-21v-15zm10.5 6.75l-9-6.75h18l-9 6.75zm-10.5-5.25v13.5l7.5-6.75-7.5-6.75zm21 0l-7.5 6.75 7.5 6.75v-13.5zm-9 7.5l-3.66-2.73-7.34 6.57h21l-7.34-6.57-3.66 2.73z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </CardContent>
                    {member.resume && (
                      <CardFooter className="justify-center pt-2 pb-4">
                        <Button variant="outline" className="w-full text-xs">
                          <FileText className="mr-2 h-3 w-3" />
                          View Resume
                        </Button>
                      </CardFooter>
                    )}
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center mt-6 space-x-4">
              <CarouselPrevious className="relative static transform-none" />
              <CarouselNext className="relative static transform-none" />
            </div>
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default TeamCarousel;
