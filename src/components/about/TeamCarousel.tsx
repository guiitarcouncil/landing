"use client"

import { useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { FileText, Users, ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useIsMobile } from "@/hooks/use-mobile"

// Updated type
type TeamMember = {
  id: number
  name: string
  position: string
  image: string
  resume?: string
  bio?: string
  linkedin?: string
  email?: string
}

type TeamCategory = {
  id: string
  name: string
  members: TeamMember[]
}

const TeamCarousel = () => {
  const isMobile = useIsMobile()
  const [activeTeam, setActiveTeam] = useState("team")
  const [isOpen, setIsOpen] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(null)
  const handleEmailClick = (email) => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(email)
    setTimeout(() => setCopiedEmail(null), 2000)
  }
  const [teamCategories] = useState<TeamCategory[]>([
    // Core Team
    {
      id: "team",
      name: "Core Team",
      members: [
        {
          id: 1,
          name: "Dr. Nilesh Bahadure",
          position: "CEO, GUIITAR Council",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068630/drnilesh_o3ikuu.jpg",
          resume: "https://drive.google.com/file/d/1isIJeartTJQp5yJwirfFRPKvlNifryRJ/",
          linkedin: "https://www.linkedin.com/in/dr-nilesh-bhaskarrao-bahadure-2396622b/",
          email: "nilesh.bahadure@gsfcuniversity.ac.in",
        },
        {
          id: 2,
          name: "Mr. KiranKumar Parmar",
          position: "Sr. Manager, GUIITAR Council",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068658/mrkiran_wpigss.jpg",
          resume: "https://drive.google.com/file/d/1ElxEwweEeZeroWkqfCd6RtrPqxKo5ZK-/",
          linkedin: "https://www.linkedin.com/in/kirankumar-parmar-01b81499/",
          email: "kiran.parmar@gsfcuniversity.ac.in",
        },
        // {
        //   id: 3,
        //   name: "Dr. Nilesh Bhadure",
        //   position: "Professor",
        //   image:
        //     "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068630/drnilesh_o3ikuu.jpg",
        //   resume:
        //     "https://drive.google.com/file/d/1isIJeartTJQp5yJwirfFRPKvlNifryRJ/",
        //   linkedin: "",
        //   email: "",
        // },
        {
          id: 4,
          name: "Mr. Akhilesh Prajapati",
          position: "Sr. Assistant Professor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068630/drprajapati_ypczef.jpg",
          resume: "https://drive.google.com/file/d/1Br9gUAJ1BXvaTveLrCcnPlYRREHgGRb2/",
          linkedin: "https://www.linkedin.com/in/dr-akhilesh-prajapati-39b20a21/",
          email: "akhilesh.prajapati@gsfcuniversity.ac.in",
        },
        {
          id: 5,
          name: "Dr. Mihir Trivedi",
          position: "Sr. Assistant Professor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068629/drmihir_eh0zjh.jpg",
          resume: "https://drive.google.com/file/d/12wxMOWeDQjf1SQQp38XM9Arv9U0YghSp/",
          linkedin: "https://www.linkedin.com/in/dr-mihir-trivedi-5130132a1/",
          email: "mihir.trivedi@gsfcuniversity.ac.in",
        },
        {
          id: 6,
          name: "Dr. Chandra Has",
          position: "Assistant Professor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068627/drchandra_lrl3it.jpg",
          resume: "https://drive.google.com/file/d/19uPcJ5kAL6r1YaAw6_Iyfy679Zeb1zQu/",
          linkedin: "https://www.linkedin.com/in/haschandra/",
          email: "chandra.has@gsfcuniversity.ac.in",
        },
        {
          id: 7,
          name: "Dr. Jignesh Valand",
          position: "Assistant Professor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068628/drjignesh_kdyj4f.jpg",
          resume: "https://drive.google.com/file/d/1Az-1IsFv-QBiBRxRdD5airdbr8yXoq2F/view?usp=drive_link",
          linkedin: "https://www.linkedin.com/in/dr-jignesh-b-valand-b3686032/",
          email: "jignesh.valand@gsfcuniversity.ac.in",
        },
        {
          id: 8,
          name: "Dr. Rahul Sharma",
          position: "Assistant Professor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068631/drrahul_lhskon.jpg",
          resume: "",
          linkedin: "https://www.linkedin.com/in/dr-rahul-sharma-81a4b68/",
          email: "rahul.sharma@gsfcuniversity.ac.in",
        },
        {
          id: 9,
          name: "Mr. Abidhusain Lodha",
          position: "Assistant Professor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068649/MrAbidhusain_q28i3r.jpg",
          resume: "",
          linkedin: "https://www.linkedin.com/in/abidhusain-lodha-346023339/",
          email: "abidhusain.lodha@gsfcuniversity.ac.in",
        },
        {
          id: 10,
          name: "Ms. Charmi Mehta",
          position: "Assistant Professor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068718/MsCharmi_jg7rq3.jpg",
          resume: "https://drive.google.com/file/d/1IV2GIL8i1w8x0eiM5qAkeFNN0UYohowm/view?usp=drive_link",
          linkedin: "https://www.linkedin.com/in/charmi-mehta-9a196b134/",
          email: "charmi.mehta@gsfcuniversity.ac.in",
        },
        {
          id: 11,
          name: "Shri Anup Upadhaya",
          position: "Lab Assistant",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068652/mranup_jicdrs.jpg",
          resume: "https://drive.google.com/file/d/1LosN0oHzTspRaGwY-gN3g9lKCL7q5j_u/view?usp=sharing",
          linkedin: "",
          email: "anup.upadhaya@gsfcuniversity.ac.in",
        },
        {
          id: 12,
          name: "Ms. Chaitali Karpe",
          position: "Lab Assistant",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068742/chaitalikarpe_qp8mqs.jpg",
          resume: "https://drive.google.com/file/d/1T1B5vGOpiyn9s9fX-FrMLQjIAFpOlmeM/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/chaitali-karpe-734616328/",
          email: "chaitali.karpe@gsfcuniversity.ac.in",
        },
        {
          id: 13,
          name: "Mr. Hemant Rajpoot",
          position: "IT Coordinator",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068642/hemantsir_irkbsj.jpg",
          resume: "https://drive.google.com/file/d/1j3pqIx6TDc_rbHZG58SqJEfE9S_MbTyY/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/hemant-m-rajput-9a4465258/",
          email: "hement.rajpoot@gsfcuniversity.ac.in",
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
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068724/pk_taneja_pq9i2q.jpg",
          resume: "https://drive.google.com/file/d/19leo-CdgJGIbK21nzL5gi4-j6Th2SJnf/",
          linkedin: "https://www.linkedin.com/in/p-k-taneja-056496293/",
          email: "",
        },
        {
          id: 2,
          name: "Dr. G. R. Sinha",
          position: "Director",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068647/mr_grsinha_bhbmg4.jpg",
          resume: "https://drive.google.com/file/d/1SXjUbqVrwRuJtDcSR1ulK9BG3tIq_x7e/",
          linkedin: "https://www.linkedin.com/in/professor-g-r-sinha-65713b18/",
          email: "provost@gsfcuniversity.ac.in",
        },
        {
          id: 3,
          name: "Shri Ramesh Panchal",
          position: "Director",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068661/mrpanchal_g3v5ku.jpg",
          resume: "https://drive.google.com/file/d/1GFGH8JrCwt9r891zWTe09EbZ582IsCPw/",
          linkedin: "",
          email: "",
        },
        {
          id: 4,
          name: "Mr. Bimal Bhayani",
          position: "Director & CEO",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068655/mrbimal_d4r8h2.jpg",
          resume: "https://drive.google.com/file/d/1ATHFSVbUNnHvcH-PORVVjdW4kIpm5IUL/",
          linkedin: "https://www.linkedin.com/in/bimal-bhayani-156b67aa/",
          email: "",
        },
        {
          id: 5,
          name: "Dr. Pujan Vaishnav",
          position: "Director",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068661/mrpujan_ov7rvt.jpg",
          resume: "https://drive.google.com/file/d/1eK7502orqHyc0hbFHZVwbK-AjK-A42xo/",
          linkedin: "https://www.linkedin.com/in/pujan-vaishnav-23867810/",
          email: "",
        },
        {
          id: 6,
          name: "Shri Utkarsh Yajnik",
          position: "Director",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068716/mrutkarsh_t4mamo.jpg",
          resume: "https://drive.google.com/file/d/181rcISoVdjwOkNiMyH3BUy0q87IT6ky_/",
          linkedin: "",
          email: "",
        },
        {
          id: 7,
          name: "Shri Ravin Sanghavi",
          position: "Director",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068666/mrravin_zsrq5f.jpg",
          resume: "https://drive.google.com/file/d/1jt9oDu-DKihnSx8JThanmrfrZnX8CxY4/",
          linkedin: "https://www.linkedin.com/in/ravin-sanghavi-19100613/",
          email: "",
        },
        {
          id: 8,
          name: "Mrs. Swati Bedekar",
          position: "Director",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068721/msswati_yw12e4.jpg",
          resume: "https://drive.google.com/file/d/1C-xPhamxA2bZvjqFWPaQPmdIDXhqgJKA/",
          linkedin: "https://www.linkedin.com/in/swati-bedekar-5a9ba42b/",
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
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068655/mrbimal_d4r8h2.jpg",
          resume: "https://drive.google.com/file/d/112CsLKNyusAz_DtrbrzGrpJc4odCcuKw/view?usp=drive_link",
          linkedin: "https://www.linkedin.com/in/bimal-bhayani-156b67aa/",
          email: "",
        },
        {
          id: 2,
          name: "Dr. G R Sinha",
          position: "Director & Advisor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068647/mr_grsinha_bhbmg4.jpg",
          resume: "https://drive.google.com/file/d/1D25qxtb4duKHXe2OXh9c1KaTlOZtegeM/view?usp=drive_link",
          linkedin: "https://www.linkedin.com/in/professor-g-r-sinha-65713b18/",
          email: "provost@gsfcuniversity.ac.in",
        },
        {
          id: 3,
          name: "Dr. Madhukumar Mehta",
          position: "Advisor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068629/drmadhukumar_o8pfhu.jpg",
          resume: "https://drive.google.com/file/d/1TLGCNmJ-5l200UdUDf97CXYndlspTUUZ/view?usp=drive_link",
          linkedin: "https://www.linkedin.com/in/madhukumar-mehta-4129917/",
          email: "",
        },
        {
          id: 4,
          name: "Mr. Ramanan Ramanathan",
          position: "Advisor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068665/mrramanan_t90lph.jpg",
          resume: "https://drive.google.com/file/d/16STS2iKqGGcaUzEtHfY_fYdvWIASZMgw/view?usp=drive_link",
          linkedin: "http://linkedin.com/in/rramanan27/",
          email: "",
        },
        {
          id: 5,
          name: "Mr. Anupam Jatole", //linkedin
          position: "Advisor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068652/mranupam_pohuly.jpg",
          resume: "https://drive.google.com/file/d/14CTQ1re-FYTLSavteSPDZeNpSFD85xhQ/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 6,
          name: "Mr. Hemal Patel", //linkedin
          position: "Advisor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068656/mrhemal_fzbb5p.jpg",
          resume: "https://drive.google.com/file/d/181dBRXhs5jd_gJCfxN6SAmlRyH4IiNWG/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 7,
          name: "Mr. Shankar C Rele",
          position: "Advisor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068680/mrshankar_d8pvxh.jpg",
          resume: "https://drive.google.com/file/d/1fgdUmTy9v5aHHtlFkwVQwA2BPHTWUpAw/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/shankarrele/",
          email: "",
        },
        {
          id: 8,
          name: "Dr. Nilesh Khare",
          position: "Advisor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068659/mrnilesh_cj0yal.jpg",
          resume: "https://drive.google.com/file/d/1Qnj1kWneo7hyZHwT9ltsvKUaV6vhpnfz/view?usp=drive_link",
          linkedin: "https://www.linkedin.com/in/nileshkhare/",
          email: "",
        },
        {
          id: 9,
          name: "Ms. Poyni Bhatt",
          position: "Advisor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068719/mspoyni_bpxhog.jpg",
          resume: "https://drive.google.com/file/d/1BTs1MGyeIdLx4OB9DebVBPKOpLbKunTN/view?usp=drive_link",
          linkedin: "https://www.linkedin.com/in/poyni-bhatt-972b932/",
          email: "",
        },
        {
          id: 10,
          name: "Mr. Bhavesh Chelani",
          position: "Advisor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068737/bhaveshChelani_raywik.jpg",
          resume: "https://drive.google.com/file/d/1cthr78T5xMwFCGP7YnoPjvaOGCdJzUmC/view?usp=drive_link",
          linkedin: "https://www.linkedin.com/in/bhaveshchelani-santushti-dessertino/",
          email: "",
        },
        {
          id: 11,
          name: "Mr. Nirav D Shah",
          position: "Advisor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068660/mrnirav_iqrfx1.jpg",
          resume: "https://drive.google.com/file/d/1ovlOr2LVEmLbqmK8-H2JtIt0A2ONA3Kt/view?usp=drive_link",
          linkedin: "",
          email: "",
        },
        {
          id: 12,
          name: "Mr. Azam Ali Khan",
          position: "Advisor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068651/mrali_cardsj.jpg",
          resume: "https://drive.google.com/file/d/1KSPaeV-Z0MIujKIvjaeJfZEw6CFvEhld/view?usp=drive_link",
          linkedin: "https://www.linkedin.com/in/tidesiitr/",
          email: "",
        },
        {
          id: 13,
          name: "Mr. Ramesh Panchal",
          position: "Advisor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068661/mrpanchal_g3v5ku.jpg",
          resume: "https://drive.google.com/file/d/1eE5UNunlx5bNjlooxSEuiCjlhdBZA9xI/view?usp=drive_link",
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
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068727/sanjukta_bose_k4tfew.jpg",
          resume: "https://drive.google.com/file/d/1oUzPVx2ZyouUqacRfDDSeRTkqsBJQBIH/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/sanjukta-bose-goswami/",
          email: "dean.sot@gsfcuniversity.ac.in",
        },
        {
          id: 2,
          name: "Dr. Bharti Trivedi",
          position: "Visiting Professor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068632/drTrivedi_efxgjx.jpg",
          resume: "https://drive.google.com/file/d/1A2q3HkyB8UPMfXCWcSFfjG1ob5zg_cuw/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/bhartitrivedi/",
          email: "bhakti.trivedi@gsfcuniversity.ac.in",
        },
        {
          id: 3,
          name: "Ms. Archana Magare",
          position: "Program Coordinator, CSE",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068718/msmagare_ocjvny.jpg",
          resume: "https://drive.google.com/file/d/18SrHuomt-nJXyOCr2BOz1R67WOEq79_G/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/archana-magare-068a7253/",
          email: "archana.margare@gsfcuniversity.ac.in",
        },
        {
          id: 4,
          name: "Ms. Patel Mosam",
          position: "Program Coordinator, CSE",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068646/mosamPatel_luof6n.jpg",
          resume: "https://drive.google.com/file/d/1118j5nUZCXwib9PAQWEX6-QhY64eu3Ns/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/mosam-patel-336495a1/",
          email: "mosam.patel@gsfcuniversity.ac.in",
        },
        {
          id: 5,
          name: "Dr. Akhilesh Prajapati",
          position: "Sr. Assistant Professor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068630/drprajapati_ypczef.jpg",
          resume: "https://drive.google.com/file/d/113w46kL1amfBIjEpStdAj6quOW4KLrnh/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/dr-akhilesh-prajapati-39b20a21/",
          email: "akhilesh.prajapati@gsfcuniversity.ac.in",
        },
        {
          id: 6,
          name: "Dr. Devjani Banerjee",
          position: "Assistant Professor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068624/devjaniBanerjee_tlo8oe.jpg",
          resume: "https://drive.google.com/file/d/17lLS0KlbIGr7IQusyJjNAVBFGrDWFkwm/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/prof-devjani-banerjee-1336b859/",
          email: "devjani.banerjee@gsfcuniversity.ac.in",
        },
        {
          id: 7,
          name: "Dr. Chetna Parmar",
          position: "Associate Dean",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068619/chetnaParmar_yfnx5c.jpg",
          resume: "https://drive.google.com/file/d/1FwSxe7Wzou8lnaDJ-_tCtX5Ud0f0mA6T/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/dr-chetna-parmar-118857200/",
          email: "chetna.parmar@gsfcuniversity.ac.in",
        },
        {
          id: 8,
          name: "Dr. Arti Bhadoria", //linkedin
          position: "Assistant Professor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068734/artiBhadoria_xqz49x.jpg",
          resume: "https://drive.google.com/file/d/1x0fC1FwVlDKEQnWv0z7OVVk8Itl68_f4/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/dr-arti-bhadouria-9816a690/",
          email: "arti.bhadoria@gsfcuniversity.ac.in",
        },
        {
          id: 9,
          name: "Dr. Parin Kanaiya",
          position: "Assistant Professor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068723/parinKanaiya_ncss5w.jpg",
          resume: "https://drive.google.com/file/d/1-3OHEchNo4efjv6bmnDpNFqruRnjSuqK/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/dr-parin-kanaiya-269819283/",
          email: "parin.kanaiya@gsfcuniversity.ac.in",
        },
        {
          id: 10,
          name: "Ms. Swati Saxena",
          position: "Assistant Professor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068730/swatiSaxena_int6i1.jpg",
          resume: "https://drive.google.com/file/d/1vBzRUcKz506cpJu0lbzZvK5-EfGo3gZa/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/swati-saxena-615419166/",
          email: "swati.saxena@gsfcuniversity.ac.in",
        },
        {
          id: 11,
          name: "Dr. Arti Hansda",
          position: "Assistant Professor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068735/artiHansda_gv8r2e.jpg",
          resume: "https://drive.google.com/file/d/1xHbWbvWJ3q3gKB5k3tLhFnKaIxlKByas/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/dr-arti-hansda-2ab1a273/",
          email: "arti.hansda@gsfcuniversity.ac.in",
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
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068726/rupeshShah_odommw.jpg",
          resume: "https://drive.google.com/file/d/1gDR1HkvgLwi00oeI1p18gZbH5uUyqmiG/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/barodaweb/",
          email: "",
        },
        {
          id: 2,
          name: "Mr. Sudhir Gupta",
          position: "Member Strategic Advisory Board, Millennium Alliance",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068729/sudhirGupta_ozqefj.jpg",
          resume: "https://drive.google.com/file/d/1lcGUw_iv5QV_26Ws1Yw8L90m7xfyRwli/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/sudhir2016/",
          email: "",
        },
        {
          id: 3,
          name: "Prof Dhruv Nath",
          position: "Director, Lead Angels Network",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068626/dhruvNath_ba3e2w.jpg",
          resume: "https://drive.google.com/file/d/1Xc4elkNejWYzfkdsWpvp1gzy5xeO7rZV/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/dhruvnathprof/",
          email: "",
        },
        {
          id: 4,
          name: "Mr. Ravin Sanghavi",
          position: "Founder, Ravin Sanghavi & Associates",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068666/mrravin_zsrq5f.jpg",
          resume: "https://drive.google.com/file/d/1buZ3lzvPBI4KuKT5ePXjW73I85Ua8MRW/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/ravin-sanghavi-19100613/",
          email: "",
        },
        {
          id: 5,
          name: "Dr. Manoj Shukla",
          position: "CEO, Gurukul Academy",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068644/manojShukla_kdobmf.jpg",
          resume: "https://drive.google.com/file/d/1_gRfG0ArnfrgmEoFvciyp1mf97oEK-R7/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 6,
          name: "Kalpesh Shah",
          position: "Director, Market Creators Ltd",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068639/kalpeshShah_joqjhn.jpg",
          resume: "https://drive.google.com/file/d/12lHXezQ2B8cWsozcIfHbj8Uyuh1Mnk6C/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/kalpesh-shah-finance/",
          email: "",
        },
        {
          id: 7,
          name: "Mr. Hitesh Porwal",
          position: "Founder, BIZSTART",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068633/HITESH_PORWAL_u14kdn.jpg",
          resume: "https://drive.google.com/file/d/1Ghm7j6Aank9BTTqNoPDz0xPSGwfnjYtz/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/hiteshporwal-bizstart/",
          email: "",
        },
        {
          id: 8,
          name: "Mr. Bhavesh Kothari",
          position: "Founder Director, Millennium Divas Pvt Ltd",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068738/bhaveshKothari_ibrrho.jpg",
          resume: "https://drive.google.com/file/d/17ffQE3p6HXSjGNKmHSEPAEGzbj5LPJPv/view?usp=sharing", // no resume url provided
          // linkedin: "https://www.linkedin.com/in/bhaveshkothari1511/",
          email: "",
        },
        {
          id: 9,
          name: "Adv. Bhavik B Patel",
          position: "CEO, INFINVENT IP",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068739/Bhavik_tlzsaf.jpg",
          resume: "https://drive.google.com/file/d/1a8cWlJHsIFx2EZgnE73-8LeUgl1eAVqB/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/bhavikpatel91/",
          email: "",
        },
        {
          id: 10,
          name: "Mr. Brijesh M Garala",
          position: "Director, Oviyan Cast & Forge Pvt. Ltd.",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068741/brijeshGarala_ymszsa.jpg",
          resume: "https://drive.google.com/file/d/1EvWbHJJzWueXRr45BY6n6zMvONxnzRHo/view?usp=sharing",
          linkedin: "", //linkedin
          email: "",
        },
        {
          id: 11,
          name: "Mr. Bhavesh Chelani",
          position: "MD & CEO, Santushti Shakes Pvt. Ltd.",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068737/bhaveshChelani_raywik.jpg",
          resume: "https://drive.google.com/file/d/1u76LLO0J3VvjYAw3PEqORO1ip9WfHzau/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/bhaveshchelani-santushti-dessertino/",
          email: "",
        },
        {
          id: 12,
          name: "Mr. x",
          position: "Founder, FUN2DO Labs Pvt. Ltd.",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068728/saurabhJain_qbia4b.jpg",
          resume: "https://drive.google.com/file/d/1ixapMeLl9HQi8bXyR-YuOf5vCmlvQEPQ/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/saurabhskj/",
          email: "",
        },
        {
          id: 13,
          name: "Dr. Kavita Saxena",
          position: "Freelancer, Freelancing Startup mentor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068644/kavitaSaxena_dzfbg1.jpg",
          resume: "https://drive.google.com/file/d/1C-qH82RFvUHY52J9P1nv9O2YJ8O2sJxZ/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/dr-kavita-sharma-saxena-6460507/",
          email: "",
        },
        {
          id: 14,
          name: "Dr. Suresh P Othayoth",
          position: "Manager - Research, GSFC Ltd.",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068730/sureshOthayoth_nrjh3x.jpg",
          resume: "https://drive.google.com/file/d/1PcYrRv6OjBhh_E_zLqBYSV6_lR39jr82/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/dr-suresh-puthiyaveetil-othayoth-43950316/",
          email: "",
        },
        {
          id: 15,
          name: "Mr. Ashutosh Tewari",
          position: "Senior Venture Coach, GITAM University",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068736/ashutoshTewari_qjytum.jpg",
          resume: "https://drive.google.com/file/d/1pu9qzx8Kud2LF1YL_jj4t-gkFaMLN0eq/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/ashutoshtewari/",
          email: "",
        },
        {
          id: 16,
          name: "CA CS Chintan Popat",
          position: "CA CS - FOUNDER, CA Chintan Popat & Associates",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068621/chintanPopat_vyngwy.jpg",
          resume: "https://drive.google.com/file/d/1R9EaNCrDYw-AHjRsjSfq6tqTqPYjLg6v/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/ca-cs-cpa-chintan-popat-5b1878111/",
          email: "",
        },
        {
          id: 17,
          name: "Mr. Devesh Chawla",
          position: "Founder & CEO, Chatur Ideas",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068623/deveshChawla_e931vr.jpg",
          resume: "https://drive.google.com/file/d/1JZLj_JVbb8EF0Yo-GDzNzPDT69ch82mE/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/devesh-chawla/",
          email: "",
        },
        {
          id: 18,
          name: "Mr. Ashwin V. Parikh",
          position: "Director, International Business Development",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068737/ashwinParikh_pvlsbh.jpg",
          resume: "https://drive.google.com/file/d/1l-HmtkNGJHeY0jxk-Qw7LcSO4XvE_K5v/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/ashwin2008/",
          email: "",
        },
        {
          id: 19,
          name: "Mr. Jekishan K Parmar",
          position: "Head of Sales & Technology, Aver India Equipment",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068637/jekishanParmar_qruizp.jpg",
          resume: "https://drive.google.com/file/d/1F7Oh25AAxGb18MR0t9eBjq7xbkZj0X2Y/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/jekishan-k-parmar-1240b77a/",
          email: "",
        },
        {
          id: 20,
          name: "Mr. Amitkumar Patel",
          position: "Managing Director, PATactual IP Law Services LLP",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068733/amitPatel_itsz5t.jpg",
          // resume: "https://drive.google.com/file/d/1J5qphVca-qEyYk6MxDxp6DeXvUsTJ7va/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 21,
          name: "Mr. Karan Shah",
          position: "Head - Partnership & Outreach, Civitas Sustainability Foundation",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068641/karanShah_kq4vvj.jpg",
          // resume: "https://drive.google.com/file/d/1T2DwXZ0Q4wIvROHTvgEOK0imvL3bHwKd/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 22,
          name: "Mr. Devang Patel",
          position: "Founder, Vantage Point Executive Coaching",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068622/devangPatel_nqxnwm.jpg",
          resume: "https://drive.google.com/file/d/1S2XxVnFONBHY_1hj9cWnffWtiTQkLsn3/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/devang-patel-93766a1a/",
          email: "",
        },
        {
          id: 23,
          name: "Mr. Prakash Vaghasiya",
          position: "CEO, Vise Organic",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068725/PRAKASH_VAGHASIYA_dils92.jpg",
          resume: "https://drive.google.com/file/d/1lyWrT_2v3DLu70QWWnaKp7bT2HkYMtAJ/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/prakashvaghasiya/",
          email: "",
        },
        {
          id: 24,
          name: "Mr. Javid Shaikh",
          position: "CEO, Biopharma Incubation Center, NIPER-Ahmedabad",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068636/javidShaikh_w5rso1.jpg",
          resume: "https://drive.google.com/file/d/1-kDCOUnHgwhuAnxfqXj0mNe-t3U8ZDFR/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/javid-shaikh-9b746774/",
          email: "",
        },
        {
          id: 25,
          name: "Adv. Dr. Heena Patel",
          position: "Partner, INFINVENT IP",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068632/Heena_cgb9ch.jpg",
          resume: "https://drive.google.com/file/d/1ErXQKX2bQ3H4yWNepeSZ0clL0X8nS_Fb/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 26,
          name: "Mr. Bhavik Bhansali",
          position: "Senior Engineer, L&T Technology Services",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068741/BHAVIK_BHANSALI_cdzcjl.jpg",
          resume: "https://drive.google.com/file/d/1bV86MzReEqcAQK5qAl2i1b8kzo7Hz_8v/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/bhavikbhansali/",
          email: "",
        },
        {
          id: 27,
          name: "Mr. Akash Dadhania",
          position: "Owner, J K Fertilizers",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068732/akash_dadhania_frz2do.jpg",
          resume: "https://drive.google.com/file/d/1F1csjoYcnvLZNECqkMxl9IMn1AxOrL2H/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/akash-dadhania-7464b4329/",
          email: "",
        },
        {
          id: 28,
          name: "CA Jitendra Jain",
          position: "CEO, Tapanshi Finanziell Pvt. Ltd.",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068638/jitendraJain_oruign.jpg",
          resume: "https://drive.google.com/file/d/1Bv3jETGvVCRTwNo2lA1MoM1mjZu6Tgw0/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 29,
          name: "Dr. Ashish Kumar",
          position: "Associate Professor, Inter University Accelerator Center",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068735/ashishKumar_xpeop2.jpg",
          resume: "https://drive.google.com/file/d/1xh6V4sOYxOsqKXnb6hJUtH_KcQ6vSdOx/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 30,
          name: "Nilesh Vaghela",
          position: "CEO, Electromech Cloudtech Pvt. Ltd.",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068722/nileshVaghela_hfv68d.jpg",
          resume: "https://drive.google.com/file/d/1W5ulz2IBpYtKhPf_FzO-E5lVQqVCYKUK/view?usp=sharing",
          linkedin: "",
          email: "",
        },
        {
          id: 31,
          name: "Karmjitsinh Bihola",
          position: "Founder, Innodesk Designovation Services",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068643/karmjitsinhBihola_tonpdi.jpg",
          resume: "https://drive.google.com/file/d/1ryklHLR4TjL9N3CV97cgq6EvHXHv1zU3/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/karmjitsinh-bihola-44160020/",
          email: "",
        },
        {
          id: 32,
          name: "Mr. Anant Acharya",
          position: "CTO, MarsBazaar.com",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068733/anantAcharya_pdpleu.jpg",
          resume: "https://drive.google.com/file/d/1YY6bpRR3HoSNtWcnJRsJEV1TWy2tnvvU/view?usp=sharing",
          // linkedin: "https://www.linkedin.com/in/acharya-anant/",
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
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068646/foram_msehlq.jpg",
          resume: "https://drive.google.com/file/d/1la_2SILlCEtfEqzgV0Klq5bXEFdFJ95R/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/mistry-foram/",
          email: "tc1guiitar@gsfcuniversity.ac.in",
        },
        {
          id: 2,
          name: "Mr. Krish Shah",
          position: "Technical Associate",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068650/krish_ibj5de.jpg",
          resume: "https://drive.google.com/file/d/1U1y8UrjXI7msX5wbgbTD2h1VGwlMNaiv/view?usp=sharing",
          linkedin: "",
          email: "tc3guiitar@gsfcuniversity.ac.in",
        },

        {
          id: 3,
          name: "Mr. Chandraveer Sinh Solanki",
          position: "Technical Associate",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068618/chandraveer_ikxedq.png",
          resume: "https://drive.google.com/file/d/1TGVNe7Q9Z5UFB0K1u2GGTieFTKzSJP1W/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/chandraveer-solanki/",
          email: "tc4guiitar@gsfcuniversity.ac.in",
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
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068729/Soham_vuqlss.png",
          resume: "https://drive.google.com/file/d/1c1xVXPzIx0En0QCoU_jl9U7BFlJka6i7/",
          linkedin: "",
          email: "23bt04d179@gsfcuniversity.ac.in",
        },
        {
          id: 2,
          name: "Ms. Devanshi Mufti",
          position: "Academic Associate",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743075961/WhatsApp_Image_2025-03-27_at_17.14.31_67532fc6_vevmxd.jpg",
          resume: "https://drive.google.com/file/d/1gWZmptw4iYsGJPDGOeIh1kW4YLclx-qn/",
          linkedin: "https://www.linkedin.com/in/devanshi-mufti-409b4a270/",
          email: "22bt04071@gsfcuniversity.ac.in",
        },
        {
          id: 3,
          name: "Ms. Panjal Dave",
          position: "Academic Associate",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068726/pranjal_tbznpe.png",
          resume: "https://drive.google.com/file/d/1sEjdxBqVI069NnBQRD1Hfj7HFbRwCFy7/",
          linkedin: "https://www.linkedin.com/in/pranjal-dave-279b962a1/",
          email: "23sc04010@gsfcuniversity.ac.in",
        },
        {
          id: 4,
          name: "Mr. Dhruv Verma",
          position: "Academic Associate",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068625/dhruv_kfxnz7.jpg",
          resume: "https://drive.google.com/file/d/11sZw31uVSSP3Qk_zdRk_eNbPombzRoHo/",
          linkedin: "https://www.linkedin.com/in/dhruv-verma-dv/",
          email: " 23sc06007@gsfcuniversity.ac.in",
        },
        {
          id: 5,
          name: "Ms. Ishika Patel",
          position: "Academic Associate",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068634/IshikaPatel_bdyaum.jpg",
          resume: "https://drive.google.com/file/d/1prBp-K4o56VK0J3Te7IZXqdQfduUq0ow/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/ishika-patel-b24047245/",
          email: "22BBA01082@gsfcuniversity.ac.in",
        },
        {
          id: 6,
          name: "Mr. Vedhant Ratnottar",
          position: "Student",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068731/Vedantratna_cilhhc.jpg",
          resume: "https://drive.google.com/file/d/1_tYZBdKP6gEpdyR64ypUi4auf0Lv6VJp/",
          linkedin:
            "https://www.linkedin.com/in/vedant-ratnottar-001726342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          email: "22bt04071@gsfcuniversity.ac.in",
        },
        {
          id: 7,
          name: "Ms. Chhaya Raundal",
          position: "Student",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068620/ChhayaRaundal_n8di4m.jpg",
          resume: "https://drive.google.com/file/d/1dAnb35BNgZOURjsJaY_QHA4eMwsLj_Ca/",
          linkedin: "",
          email: "24bt05044@gsfcuniversity.ac.in",
        },
      ],
    },
  ])

  const activeCategory = teamCategories.find((cat) => cat.id === activeTeam)

  const handleCategoryChange = (categoryId: string) => {
    setActiveTeam(categoryId)
    setIsOpen(false)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}

      {/* Mobile Dropdown */}
      {isMobile ? (
        <div className="mb-8">
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-left border border-blue-200 transition-colors">
              <span className="font-semibold text-lg text-blue-900">{activeCategory?.name}</span>
              <ChevronDown
                className={`h-5 w-5 text-blue-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="bg-white rounded-lg shadow-lg mt-2 border border-gray-200 overflow-hidden">
              {teamCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`w-full text-left px-4 py-4 text-base transition-colors ${
                    category.id === activeTeam
                      ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
                      : "hover:bg-gray-50 text-gray-700"
                  } ${index !== teamCategories.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <div className="flex items-center">
                    <Users className="mr-3 h-5 w-5" />
                    <span className="font-medium">{category.name}</span>
                  </div>
                </button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      ) : (
        /* Desktop Tabs */
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-100 rounded-lg">
            {teamCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTeam(category.id)}
                className={`flex items-center px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  category.id === activeTeam
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <Users className="mr-2 h-4 w-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Team Members Display */}
      {activeCategory && (
        <div className="py-8">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">{activeCategory.name}</h3>

          <Carousel
            key={activeTeam} // Add this line to reset carousel when category changes
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {activeCategory.members.map((member, index) => (
                <CarouselItem key={member.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card className="group h-[360px] bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 rounded-lg flex flex-col">
                    {/* Profile Image */}
                    <div className="flex justify-center pt-8 pb-6">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover grayscale group-hover:grayscale-0 hover:grayscale-0 transition-all duration-300 cursor-pointer"
                      />
                    </div>

                    {/* Member Info */}
                    <CardContent className="text-center px-6 pb-6 flex flex-col flex-grow">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">{member.name}</h4>
                      <p className="text-gray-600 text-sm mb-6 flex-grow">{member.position}</p>

                      {/* Social Icons */}
                      <div className="flex justify-center gap-4 mb-6">
                        {member.linkedin && activeTeam !== "industry" && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-lg font-extrabold transition-colors"
                          >
                            in
                          </a>
                        )}
                        {member.email && (
                          <button
                            onClick={() => handleEmailClick(member.email!)}
                            className="text-gray-400  hover:text-gray-600 text-lg transition-colors relative"
                          >
                            ✉
                            {copiedEmail === member.email && (
                              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                Copied!
                              </span>
                            )}
                          </button>
                        )}
                      </div>

                      {/* Resume Button */}
                      <div className="mt-auto">
                        {member.resume && member.resume.length > 0 && member.resume !== "" && (
                          <Button
                            variant="outline"
                            className="w-full text-sm font-medium bg-gray-100 hover:bg-orange-500 text-gray-700 hover:text-black border-gray-300 hover:border-orange-500 transition-all duration-200"
                            asChild
                          >
                            <a href={member.resume} target="_blank" rel="noopener noreferrer">
                              <FileText className="mr-2 h-4 w-4" />
                              View Resume
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Navigation */}
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static translate-y-0 bg-white hover:bg-orange-500 text-gray-600 hover:text-white border-gray-300 hover:border-orange-500 rounded-full w-10 h-10 transition-all duration-200" />
              <CarouselNext className="static translate-y-0 bg-white hover:bg-orange-500 text-gray-600 hover:text-white border-gray-300 hover:border-orange-500 rounded-full w-10 h-10 transition-all duration-200" />
            </div>
          </Carousel>
        </div>
      )}
    </div>
  )
}

export default TeamCarousel
