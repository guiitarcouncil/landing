// src/components/About/TabbedAboutTeam.tsx
import React, { useState } from "react";

// const drankit = "/Assets/team/AI/drankit.jpg";
// const drgajarai = "/Assets/team/AI/drgajarai.jpg";
// const abha = "/Assets/team/AI/drabha.jpg";
// const mrpuranik = "/Assets/team/AI/mrpuranik.jpg";
// const msrajput = "/Assets/team/AI/msrajput.jpg";

//const dummy =
 // "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068744/dummy_yky2vq.jpg";
const drbose =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068727/sanjukta_bose_k4tfew.jpg";
const drmadhukumar =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068629/drmadhukumar_o8pfhu.jpg";
const drprajapati =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068630/drprajapati_ypczef.jpg";
const mrgrsinha =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068647/mr_grsinha_bhbmg4.jpg";
const mrali =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068651/mrali_cardsj.jpg";
const mranupam =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068652/mranupam_pohuly.jpg";
const mrbhavesh =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068654/mrbhavesh_yonp29.jpg";
const mrbimal =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068655/mrbimal_d4r8h2.jpg";
const mrhemal =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068656/mrhemal_fzbb5p.jpg";
const mrhemant =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068642/hemantsir_irkbsj.jpg";
const mrkiran =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068658/mrkiran_wpigss.jpg";
const mrnilesh =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068660/mrnirav_iqrfx1.jpg";
const mrnirav =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068660/mrnirav_iqrfx1.jpg";
const mrpanchal =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068661/mrpanchal_g3v5ku.jpg";
const mrpktaneja =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068724/pk_taneja_pq9i2q.jpg";
const mrpujan =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068661/mrpujan_ov7rvt.jpg";
const ramanan =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068665/mrramanan_t90lph.jpg";
const mrravin =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068666/mrravin_zsrq5f.jpg";
const mrshankar =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068680/mrshankar_d8pvxh.jpg";
const mrutkarsh =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068716/mrutkarsh_t4mamo.jpg";
const msmagare =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068718/msmagare_ocjvny.jpg";
const mspoyni =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068719/mspoyni_bpxhog.jpg";
const msswati =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068721/msswati_yw12e4.jpg";
const drTrivedi =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068632/drTrivedi_efxgjx.jpg";
const devjaniBanerjee =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068624/devjaniBanerjee_tlo8oe.jpg";
const chetnaParmar =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068619/chetnaParmar_yfnx5c.jpg";
const mosamPatel =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068646/mosamPatel_luof6n.jpg";
const artiBhadoria =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068734/artiBhadoria_xqz49x.jpg";
const parinKanaiya =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068723/parinKanaiya_ncss5w.jpg";
const swatiSaxena =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068730/swatiSaxena_int6i1.jpg";
const artiHansda =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068735/artiHansda_gv8r2e.jpg";
const akashDadhania =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068732/akash_dadhania_frz2do.jpg";
const amitPatel =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068733/amitPatel_itsz5t.jpg";
const anantAcharya =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068733/anantAcharya_pdpleu.jpg";
const ashishKumar =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068735/ashishKumar_xpeop2.jpg";
const ashutoshTewari =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068736/ashutoshTewari_qjytum.jpg";
const ashwinParikh =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068737/ashwinParikh_pvlsbh.jpg";
const bhaveshChelani =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068737/bhaveshChelani_raywik.jpg";
const bhaveshKothari =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068738/bhaveshKothari_ibrrho.jpg";
const Bhavik =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068739/Bhavik_tlzsaf.jpg";
const BHAVIK_BHANSALI =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068741/BHAVIK_BHANSALI_cdzcjl.jpg";
const brijeshGarala =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068741/brijeshGarala_ymszsa.jpg";
const chintanPopat =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068621/chintanPopat_vyngwy.jpg";
const devangPatel =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068622/devangPatel_nqxnwm.jpg";
const deveshChawla =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068623/deveshChawla_e931vr.jpg";
const dhruvNath =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068626/dhruvNath_ba3e2w.jpg";
const Heena =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068632/Heena_cgb9ch.jpg";
const HITESH_PORWAL =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068633/HITESH_PORWAL_u14kdn.jpg";
const javidShaikh =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068636/javidShaikh_w5rso1.jpg";
const jekishanParmar =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068637/jekishanParmar_qruizp.jpg";
const jitendraJain =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068638/jitendraJain_oruign.jpg";
const kalpeshShah =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068639/kalpeshShah_joqjhn.jpg";
const karanShah =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068641/karanShah_kq4vvj.jpg";
const karmjitsinhBihola =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068643/karmjitsinhBihola_tonpdi.jpg";
const kavitaSaxena =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068644/kavitaSaxena_dzfbg1.jpg";
const manojShukla =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068644/manojShukla_kdobmf.jpg";
const nileshVaghela =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068722/nileshVaghela_hfv68d.jpg";
const PRAKASH_VAGHASIYA =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068725/PRAKASH_VAGHASIYA_dils92.jpg";
const rupeshShah =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068726/rupeshShah_odommw.jpg";
const saurabhJain =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068728/saurabhJain_qbia4b.jpg";
const sudhirGupta =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068729/sudhirGupta_ozqefj.jpg";
const sureshOthayoth =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068730/sureshOthayoth_nrjh3x.jpg";
const krish =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068650/krish_ibj5de.jpg";
const foram =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068646/foram_msehlq.jpg";
const kartavi =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068648/kartavi_pxkpla.jpg";
const chandraveer =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068618/chandraveer_ikxedq.png";
const chaitali =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068742/chaitalikarpe_qp8mqs.jpg";
const chhaya =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068620/ChhayaRaundal_n8di4m.jpg";
const drchandra =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068627/drchandra_lrl3it.jpg";
const drnilesh =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068630/drnilesh_o3ikuu.jpg";
const drrahul =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068631/drrahul_lhskon.jpg";
const drmihir =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068629/drmihir_eh0zjh.jpg";
const drjignesh =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068628/drjignesh_kdyj4f.jpg";
const ishika =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068634/IshikaPatel_bdyaum.jpg";
const Abidhusain =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068649/MrAbidhusain_q28i3r.jpg";
const mranup =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068652/mranup_jicdrs.jpg";
const pranjal =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068726/pranjal_tbznpe.png";
const Charmi =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068718/MsCharmi_jg7rq3.jpg";
const soham =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068729/Soham_vuqlss.png";
const vedantratna =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068731/Vedantratna_cilhhc.jpg";
const devanshi =
  "https://res.cloudinary.com/dopcjxehj/image/upload/v1743075961/WhatsApp_Image_2025-03-27_at_17.14.31_67532fc6_vevmxd.jpg";

const dhru_verma = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068625/dhruv_kfxnz7.jpg"

interface Tab {
  id: string;
  label: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  resumeLink: string;
}

interface TeamData {
  [key: string]: TeamMember[];
}

const TabbedAboutTeam: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("team");

  const tabs: Tab[] = [
    { id: "team", label: "Our Team" },
    { id: "directors", label: "Board of Directors" },
    { id: "advisory", label: "Advisory Board" },
    { id: "faculty", label: "Faculty Mentors" },
    { id: "industry", label: "Industry Mentors" },
    { id: "tc", label: "Technical Associates" },
    { id: "student", label: "Student Team" },
  ];

  const teamData: TeamData = {
    team: [
      {
        name: "Mr. Bimal Bhayani",
        role: "CEO, GUIITAR",
        image: mrbimal,
        resumeLink:
          "https://drive.google.com/file/d/112CsLKNyusAz_DtrbrzGrpJc4odCcuKw/",
      },
      {
        name: "Mr. KiranKumar Parmar",
        role: "Sr. Manager",
        image: mrkiran,
        resumeLink:
          "https://drive.google.com/file/d/1ElxEwweEeZeroWkqfCd6RtrPqxKo5ZK-/",
      },

      // {
      //   name: "Dr. Sanjukta Bose Goswami",
      //   role: "Startup Coordinator SOT",
      //   image: drbose,
      //   resumeLink:
      //     "https://drive.google.com/file/d/1oUzPVx2ZyouUqacRfDDSeRTkqsBJQBIH/view?usp=drive_link",
      // },
      {
        name: "Dr. Nilesh Bhadure",
        role: "Professor",
        image: drnilesh,
        resumeLink: "https://drive.google.com/file/d/1isIJeartTJQp5yJwirfFRPKvlNifryRJ/",
      },
      {
        name: "Mr. Akhilesh Prajapati",
        role: "Sr. Assistant Professor",
        image: drprajapati,
        resumeLink:
          "https://drive.google.com/file/d/1Br9gUAJ1BXvaTveLrCcnPlYRREHgGRb2/",
      },
      {
        name: "Dr. Mihir Trivedi",
        role: "Sr. Assistant Professor",
        image: drmihir,
        resumeLink: "https://drive.google.com/file/d/12wxMOWeDQjf1SQQp38XM9Arv9U0YghSp/",
      },
      {
        name: "Dr. Chandra Has",
        role: "Assistant Professor",
        image: drchandra,
        resumeLink: "https://drive.google.com/file/d/19uPcJ5kAL6r1YaAw6_Iyfy679Zeb1zQu/",
      },
      {
        name: "Dr. Jignesh Valand",
        role: "Assistant Professor",
        image: drjignesh,
        resumeLink: "",
      },
      {
        name: "Dr. Rahul Sharma",
        role: "Assistant Professor",
        image: drrahul,
        resumeLink: "",
      },
      {
        name: "Mr. Abidhusain Lodha",
        role: "Assistant Professor",
        image: Abidhusain,
        resumeLink: "",
      },
      {
        name: "Ms. Charmi Mehta",
        role: "Assistant Professor",
        image: Charmi,
        resumeLink: "",
      },
      {
        name: "Shri Anup Upadhaya",
        role: "Lab Assistant",
        image: mranup,
        resumeLink: "https://drive.google.com/file/d/1LosN0oHzTspRaGwY-gN3g9lKCL7q5j_u/view?usp=sharing",
      },
      {
        name: "Ms. Chaitali Karpe",
        role: "Lab Assistant",
        image: chaitali,
        resumeLink: "https://drive.google.com/file/d/1T1B5vGOpiyn9s9fX-FrMLQjIAFpOlmeM/view?usp=sharing",
      },
      // {
      //   name: "Dr. Abha Kalaiya", //done
      //   role: "Startup Coordinator SOM",
      //   image: drabha,
      //   resumeLink:
      //     "https://drive.google.com/file/d/1UWotFOvcqX73ue7MR6E1pZocL7YrsQuj/view?usp=sharing",
      // },
      // {
      //   name: "Ms. Shweta Rajput",//done
      //   role: "Startup Coordinator SOT",
      //   image: msrajput,
      //   resumeLink:
      //     "https://drive.google.com/file/d/1OYMqkEx7neQQaLcQBcebpKYRX5PTMXhc/view?usp=sharing",
      // },
      // {
      //   name: "Ms. Archana Magare",//done
      //   role: "Startup Coordinator SOT",
      //   image: msmagare,
      //   resumeLink:
      //     "https://drive.google.com/file/d/1ITVTL_O2TDeGdyRF0XE254bSkbUAeKbj/view?usp=sharing",
      // },
      // {
      //   name: "Dr. Aditya Puranik",//done
      //   role: "Startup Coordinator SOS",
      //   image: mrpuranik,
      //   resumeLink:
      //     "https://drive.google.com/file/d/1NBPBs-RnWe6Yj9Y4P9EEI--Tav6F-yuh/view?usp=sharing",
      // },
      // {
      //   name: "Dr. Trupti Gajarai",//done
      //   role: "Startup Coordinator SOS",
      //   image: drgajarai,
      //   resumeLink:
      //     "https://drive.google.com/file/d/1NBPBs-RnWe6Yj9Y4P9EEI--Tav6F-yuh/view?usp=sharing",
      // },
      // {
      //   name: "Dr. Ankit Sudhir",//done

      //   role: "Startup Coordinator SOS",
      //   image: drankit,
      //   resumeLink:
      //     "https://drive.google.com/file/d/138G6jO_hUBZiNLQR-SmHbSk1C_PAuoAb/view?usp=sharing",
      // },

      {
        name: "Mr. Hemant Rajpoot", //done
        role: "IT Coordinator",
        image: mrhemant,
        resumeLink:
          "https://drive.google.com/file/d/1j3pqIx6TDc_rbHZG58SqJEfE9S_MbTyY/view?usp=sharing",
      },
    ],

    directors: [
      //Done
      {
        name: "Shri P. K. Taneja, IAS (Retd.)",
        role: "Chairman",
        image: mrpktaneja,
        resumeLink:
          "https://drive.google.com/file/d/19leo-CdgJGIbK21nzL5gi4-j6Th2SJnf/view?usp=sharing",
      },
      {
        name: "Dr. G. R. Sinha",
        role: "Director",
        image: mrgrsinha,
        resumeLink:
          "https://drive.google.com/file/d/1SXjUbqVrwRuJtDcSR1ulK9BG3tIq_x7e/view?usp=sharing",
      },
      {
        name: "Shri Ramesh Panchal",
        role: "Director",
        image: mrpanchal,
        resumeLink:
          "https://drive.google.com/file/d/1GFGH8JrCwt9r891zWTe09EbZ582IsCPw/view?usp=sharing",
      },
      {
        name: "Mr. Bimal Bhayani",
        role: "Director & CEO",
        image: mrbimal,
        resumeLink:
          "https://drive.google.com/file/d/1ATHFSVbUNnHvcH-PORVVjdW4kIpm5IUL/view?usp=sharing",
      },
      {
        name: "Dr. Pujan Vaishnav",
        role: "Director",
        image: mrpujan,
        resumeLink:
          "https://drive.google.com/file/d/1eK7502orqHyc0hbFHZVwbK-AjK-A42xo/view?usp=drive_link",
      },
      {
        name: "Shri Utkarsh Yajnik",
        role: "Director",
        image: mrutkarsh,
        resumeLink:
          "https://drive.google.com/file/d/181rcISoVdjwOkNiMyH3BUy0q87IT6ky_/view?usp=drive_link",
      },
      {
        name: "Shri Ravin Sanghavi",
        role: "Director",
        image: mrravin,
        resumeLink:
          "https://drive.google.com/file/d/1jt9oDu-DKihnSx8JThanmrfrZnX8CxY4/view?usp=drive_link",
      },
      {
        name: "Mrs. Swati Bedekar",
        role: "Director",
        image: msswati,
        resumeLink:
          "https://drive.google.com/file/d/1C-xPhamxA2bZvjqFWPaQPmdIDXhqgJKA/view?usp=drive_link",
      },
    ],

    advisory: [
      {
        name: "Mr. Bimal Bhayani",
        role: "CEO & Advisor",
        resumeLink:
          "https://drive.google.com/file/d/112CsLKNyusAz_DtrbrzGrpJc4odCcuKw/view?usp=drive_link",
        image: mrbimal,
      },
      {
        name: "Dr. G R Sinha",
        role: "Director & Advisor",
        resumeLink:
          "https://drive.google.com/file/d/1D25qxtb4duKHXe2OXh9c1KaTlOZtegeM/view?usp=drive_link",
        image: mrgrsinha,
      },
      {
        name: "Dr. Madhukumar Mehta",
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/1TLGCNmJ-5l200UdUDf97CXYndlspTUUZ/view?usp=drive_link",
        image: drmadhukumar,
      },
      {
        name: "Mr. Ramanan Ramanathan",
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/16STS2iKqGGcaUzEtHfY_fYdvWIASZMgw/view?usp=drive_link",
        image: ramanan,
      },
      {
        name: "Mr. Anupam Jatole", // Resume remaining
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/14CTQ1re-FYTLSavteSPDZeNpSFD85xhQ/view?usp=sharing",
        image: mranupam,
      },
      {
        name: "Mr. Hemal Patel", // Resume remaining
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/181dBRXhs5jd_gJCfxN6SAmlRyH4IiNWG/view?usp=sharing",
        image: mrhemal,
      },
      {
        name: "Mr. Shankar C Rele", // Resume remaining
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/1fgdUmTy9v5aHHtlFkwVQwA2BPHTWUpAw/view?usp=sharing",
        image: mrshankar,
      },
      {
        name: "Dr. Nilesh Khare",
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/1Qnj1kWneo7hyZHwT9ltsvKUaV6vhpnfz/view?usp=drive_link",
        image: mrnilesh,
      },
      {
        name: "Ms. Poyni Bhatt",
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/1BTs1MGyeIdLx4OB9DebVBPKOpLbKunTN/view?usp=drive_link",
        image: mspoyni,
      },
      {
        name: "Mr. Bhavesh Chelani",
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/1cthr78T5xMwFCGP7YnoPjvaOGCdJzUmC/view?usp=drive_link",
        image: mrbhavesh,
      },
      {
        name: "Mr. Nirav D Shah",
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/1ovlOr2LVEmLbqmK8-H2JtIt0A2ONA3Kt/view?usp=drive_link",
        image: mrnirav,
      },
      {
        name: "Mr. Azam Ali Khan",
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/1KSPaeV-Z0MIujKIvjaeJfZEw6CFvEhld/view?usp=drive_link",
        image: mrali,
      },

      {
        name: "Mr. Ramesh Panchal",
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/1eE5UNunlx5bNjlooxSEuiCjlhdBZA9xI/view?usp=drive_link",
        image: mrpanchal,
      },
    ],

    faculty: [
      {
        name: "Dr. Sanjukta Bose Goswami",
        role: "Dean, SOT",
        image: drbose,
        resumeLink:
          "https://drive.google.com/file/d/1oUzPVx2ZyouUqacRfDDSeRTkqsBJQBIH/view?usp=sharing",
      },
      {
        name: "Dr. Bharti Trivedi",
        role: "Visiting Professor",
        image: drTrivedi,
        resumeLink:
          "https://drive.google.com/file/d/1A2q3HkyB8UPMfXCWcSFfjG1ob5zg_cuw/view?usp=sharing",
      },
      {
        name: "Ms. Archana Magare",
        role: "Program Coordinator, CSE",
        image: msmagare,
        resumeLink:
          "https://drive.google.com/file/d/18SrHuomt-nJXyOCr2BOz1R67WOEq79_G/view?usp=sharing",
      },
      {
        name: "Ms. Patel Mosam",
        role: "Program Coordinator, CSE",
        image: mosamPatel,
        resumeLink:
          "https://drive.google.com/file/d/1118j5nUZCXwib9PAQWEX6-QhY64eu3Ns/view?usp=sharing",
      },
      {
        name: "Dr. Akhilesh Prajapati",
        role: "Sr. Assistant Professor",
        image: drprajapati,
        resumeLink:
          "https://drive.google.com/file/d/113w46kL1amfBIjEpStdAj6quOW4KLrnh/view?usp=sharing",
      },
      {
        name: "Dr. Devjani Banerjee",
        role: "Assistant Professor",
        image: devjaniBanerjee,
        resumeLink:
          "https://drive.google.com/file/d/17lLS0KlbIGr7IQusyJjNAVBFGrDWFkwm/view?usp=sharing",
      },
      {
        name: "Dr. Chetna Parmar",
        role: "Associate Dean",
        image: chetnaParmar,
        resumeLink:
          "https://drive.google.com/file/d/1FwSxe7Wzou8lnaDJ-_tCtX5Ud0f0mA6T/view?usp=sharing",
      },
      {
        name: "Dr. Arti Bhadoria",
        role: "Assistant Professor",
        image: artiBhadoria,
        resumeLink:
          "https://drive.google.com/file/d/1x0fC1FwVlDKEQnWv0z7OVVk8Itl68_f4/view?usp=sharing",
      },
      {
        name: "Dr. Parin Kanaiya",
        role: "Assistant Professor",
        image: parinKanaiya,
        resumeLink:
          "https://drive.google.com/file/d/1-3OHEchNo4efjv6bmnDpNFqruRnjSuqK/view?usp=sharing",
      },
      {
        name: "Ms. Swati Saxena",
        role: "Assistant Professor",
        image: swatiSaxena,
        resumeLink:
          "https://drive.google.com/file/d/1vBzRUcKz506cpJu0lbzZvK5-EfGo3gZa/view?usp=sharing",
      },
      {
        name: "Dr. Arti Hansda",
        role: "Assistant Professor",
        image: artiHansda,
        resumeLink:
          "https://drive.google.com/file/d/1xHbWbvWJ3q3gKB5k3tLhFnKaIxlKByas/view?usp=sharing",
      },
    ],

    industry: [
      {
        name: "Mr. Rupesh Shah",
        role: "CEO, Barodaweb",
        image: rupeshShah,
        resumeLink:
          "https://drive.google.com/file/d/1gDR1HkvgLwi00oeI1p18gZbH5uUyqmiG/view?usp=sharing",
      },
      {
        name: "Mr. Sudhir Gupta",
        role: "Member Strategic Advisory Board, Millennium Alliance",
        image: sudhirGupta,
        resumeLink:
          "https://drive.google.com/file/d/1lcGUw_iv5QV_26Ws1Yw8L90m7xfyRwli/view?usp=sharing",
      },
      {
        name: "Prof Dhruv Nath",
        role: "Director, Lead Angels Network",
        image: dhruvNath,
        resumeLink:
          "https://drive.google.com/file/d/1Xc4elkNejWYzfkdsWpvp1gzy5xeO7rZV/view?usp=sharing",
      },
      {
        name: "Mr. Ravin Sanghavi",
        role: "Founder, Ravin Sanghavi & Associates",
        image: mrravin,
        resumeLink:
          "https://drive.google.com/file/d/1buZ3lzvPBI4KuKT5ePXjW73I85Ua8MRW/view?usp=sharing",
      },
      {
        name: "Dr. Manoj Shukla",
        role: "CEO, Gurukul Academy",
        image: manojShukla,
        resumeLink:
          "https://drive.google.com/file/d/1_gRfG0ArnfrgmEoFvciyp1mf97oEK-R7/view?usp=sharing",
      },
      {
        name: "Kalpesh Shah",
        role: "Director, Market Creators Ltd",
        image: kalpeshShah,
        resumeLink:
          "https://drive.google.com/file/d/12lHXezQ2B8cWsozcIfHbj8Uyuh1Mnk6C/view?usp=sharing",
      },
      {
        name: "Mr. Hitesh Porwal",
        role: "Founder, BIZSTART",
        image: HITESH_PORWAL,
        resumeLink:
          "https://drive.google.com/file/d/1Ghm7j6Aank9BTTqNoPDz0xPSGwfnjYtz/view?usp=sharing",
      },
      {
        name: "Mr. Bhavesh Kothari",
        role: "Founder Director, Millennium Divas Pvt Ltd",
        image: bhaveshKothari,
        resumeLink:
          "https://drive.google.com/file/d/17ffQE3p6HXSjGNKmHSEPAEGzbj5LPJPv/view?usp=sharing",
      },
      {
        name: "Adv. Bhavik B Patel",
        role: "CEO, INFINVENT IP",
        image: Bhavik,
        resumeLink:
          "https://drive.google.com/file/d/1Lzqfwid7roX6WrtQRodrzl1YFIeiJ0VV/view?usp=sharing",
      },
      {
        name: "Mr. Brijesh M Garala",
        role: "Director, Oviyan Cast & Forge Pvt. Ltd.",
        image: brijeshGarala,
        resumeLink:
          "https://drive.google.com/file/d/14EZFKx8KV_cJXYEOtYqvif8IWw_aXJDL/view?usp=sharing",
      },
      {
        name: "Mr. Bhavesh Chelani",
        role: "MD & CEO, Santushti Shakes Pvt. Ltd.",
        image: bhaveshChelani,
        resumeLink:
          "https://drive.google.com/file/d/1M-Y3RraBCfMLoh1fLKkGSUlXCD1zqI4_/view?usp=sharing",
      },
      {
        name: "Mr. Saurabh Jain",
        role: "Founder, FUN2DO Labs Pvt. Ltd.",
        image: saurabhJain,
        resumeLink:
          "https://drive.google.com/file/d/19dmD6O2djzWMpLjt6uQMpQujBGTNgP8z/view?usp=sharing",
      },
      {
        name: "Dr. Kavita Saxena",
        role: "Freelancer, Freelancing Startup mentor",
        image: kavitaSaxena,
        resumeLink:
          "https://drive.google.com/file/d/1IKCwwhE4ABIcHe5I134-KJztuU0TI1IM/view?usp=sharing",
      },
      {
        name: "Dr. Suresh P Othayoth",
        role: "Manager - Research, GSFC Ltd.",
        image: sureshOthayoth,
        resumeLink:
          "https://drive.google.com/file/d/1Azn_SAlQllptbGpXVMGylr9UIV7UQFdg/view?usp=sharing",
      },
      {
        name: "Mr. Ashutosh Tewari",
        role: "Senior Venture Coach, GITAM (deemed to be) University",
        image: ashutoshTewari,
        resumeLink:
          "https://drive.google.com/file/d/12Ny8kNha6UslxYB3LCJ4qMn7PocIAVSp/view?usp=sharing",
      },
      {
        name: "CA CS Chintan Popat",
        role: "CA CS - FOUNDER, CA Chintan Popat & Associates",
        image: chintanPopat,
        resumeLink:
          "https://drive.google.com/file/d/109FOpZyhXr8ISppZnsG_XpISwwEcvVPR/view?usp=sharing",
      },
      {
        name: "Mr. Devesh Chawla",
        role: "Founder & CEO, Chatur Ideas",
        image: deveshChawla,
        resumeLink:
          "https://drive.google.com/file/d/1ZBYCdGXvn3m1byMTxBltETJcE6k5GtMj/view?usp=sharing",
      },
      {
        name: "Mr. Ashwin V. Parikh",
        role: "Director, International Business Development (IBD)",
        image: ashwinParikh,
        resumeLink:
          "https://drive.google.com/file/d/1s9mst6_51eWPtcRjPFMuQKAbwHHZCvMR/view?usp=sharing",
      },
      {
        name: "Mr. Jekishan K Parmar",
        role: "Head of Sales & Technology, Aver India Equipment",
        image: jekishanParmar,
        resumeLink:
          "https://drive.google.com/file/d/1F_tQegSFZcVim7xi3nwr5UL6Vo3UCdzj/view?usp=sharing",
      },
      {
        name: "Mr. Amitkumar Patel",
        role: "Managing Director, PATactual IP Law Services LLP",
        image: amitPatel,
        resumeLink:
          "https://drive.google.com/file/d/1Bnnp0wRZ9uec637ZvGwypIrpWDzolHZi/view?usp=sharing",
      },
      {
        name: "Mr. Karan Shah",
        role: "Head - Partnership & Outreach, Civitas Sustainability Foundation",
        image: karanShah,
        resumeLink:
          "https://drive.google.com/file/d/1ejVLhVI4mhVfG1GbYK84rKBIEo6ynQNS/view?usp=sharing",
      },
      {
        name: "Mr. Devang Patel",
        role: "Founder, Vantage Point Executive Coaching",
        image: devangPatel,
        resumeLink:
          "https://drive.google.com/file/d/1v2J70FPeCtw3Et-1Ni4cEdjAAdIrf5T_/view?usp=sharing",
      },
      {
        name: "Mr. Prakash Vaghasiya", //Resume remainig
        role: "CEO, Vise Organic",
        image: PRAKASH_VAGHASIYA,
        resumeLink:
          "https://drive.google.com/file/d/1Cw8fFm7AZGInc6GIriNr30lqv9Cx-yCJ/view?usp=sharing",
      },
      {
        name: "Mr. Javid Shaikh",
        role: "CEO, Biopharma Incubation Center (BIC), NIPER-Ahmedabad",
        image: javidShaikh,
        resumeLink:
          "https://drive.google.com/file/d/1luBN1fWumxnQ6LcLwgxKztkmBUsSxcey/view?usp=sharing",
      },
      {
        name: "Adv. Dr. Heena Patel", // Resume remaining
        role: "Partner, INFINVENT IP",
        image: Heena,
        resumeLink:
          "https://drive.google.com/file/d/1FhznlDFTjrQxxzPc81a72raVViXJm_vW/view?usp=sharing",
      },
      {
        name: "Mr. Bhavik Bhansali",
        role: "Senior Engineer, L&T Technology Services",
        image: BHAVIK_BHANSALI,
        resumeLink:
          "https://drive.google.com/file/d/1uOb76AHhegheXcK7H9u1p4Gl2sT5zAeq/view?usp=sharing",
      },
      {
        name: "Mr. Akash Dadhania",
        role: "Owner, J K Fertilizers",
        image: akashDadhania,
        resumeLink:
          "https://drive.google.com/file/d/1wtPGs-6lRCm27oABbdNKH4IQWreXKIj0/view?usp=sharing",
      },
      {
        name: "CA Jitendra Jain", //Resume remaining
        role: "CEO, Tapanshi Finanziell Pvt. Ltd.",
        image: jitendraJain,
        resumeLink:
          "https://drive.google.com/file/d/1ZIjMlISzfEHKzBtX17uy5mnafAgZyPIb/view?usp=sharing",
      },
      {
        name: "Dr. Ashish Kumar", //Resume remaining
        role: "Associate Professor, Inter University Accelerator Center",
        image: ashishKumar,
        resumeLink:
          "https://drive.google.com/file/d/1Jk7yWnkL1dp5VS19oOrwTWrg6suAl9pi/view?usp=sharing",
      },
      {
        name: "Nilesh Vaghela", //Resume remaining
        role: "CEO, Electromech Cloudtech Pvt. Ltd.",
        image: nileshVaghela,
        resumeLink:
          "https://drive.google.com/file/d/126zhWcYEPqMwzxDH_p3g883ZNb4a6EYA/view?usp=sharing",
      },
      {
        name: "Karmjitsinh Bihola",
        role: "Founder, Innodesk Designovation Services",
        image: karmjitsinhBihola,
        resumeLink:
          "https://drive.google.com/file/d/15Qqik9s9MGSf1mBJ6Hah9C9ZqF8YXs1t/view?usp=sharing",
      },
      {
        name: "Mr. Anant Acharya",
        role: "CTO, MarsBazaar.com",
        image: anantAcharya,
        resumeLink:
          "https://drive.google.com/file/d/1USIuhnmDN2InedqhFO11F5y6MRbuDRsF/view?usp=sharing",
      },
    ],

    tc: [
      {
        name: "Ms. Foram Mistry",
        role: "Technical Associate",
        image: foram,
        resumeLink:
          "https://drive.google.com/file/d/1la_2SILlCEtfEqzgV0Klq5bXEFdFJ95R/view?usp=sharing",
      },
      {
        name: "Mr. Krish Shah",
        role: "Technical Associate",
        image: krish,
        resumeLink:
          "https://drive.google.com/file/d/1U1y8UrjXI7msX5wbgbTD2h1VGwlMNaiv/view?usp=sharing",
      },
      {
        name: "Ms. Kartavi Patel",
        role: "Technical Associate",
        image: kartavi,
        resumeLink:
          "https://drive.google.com/file/d/1He8AgeoGrk53c28OtLTIg-EnLZGZ8f4g/view?usp=sharing",
      },
      {
        name: "Mr. Chandraveer Sinh Solanki",
        role: "Technical Associate",
        image: chandraveer,
        resumeLink:
          "https://drive.google.com/file/d/1TGVNe7Q9Z5UFB0K1u2GGTieFTKzSJP1W/view?usp=sharing",
      },
    ],

    student: [
      {
        name: "Mr. Soham Kava",
        role: "Academic Associate",
        image: soham,
        resumeLink: "https://drive.google.com/file/d/1c1xVXPzIx0En0QCoU_jl9U7BFlJka6i7/",
      },
      {
        name: "Ms. Devanshi Mufti",
        role: "Academic Associate",
        image: devanshi,
        resumeLink: "https://drive.google.com/file/d/1gWZmptw4iYsGJPDGOeIh1kW4YLclx-qn/",
      },
      {
        name: "Ms. Panjal Dave",
        role: "Academic Associate",
        image: pranjal,
        resumeLink: "https://drive.google.com/file/d/1sEjdxBqVI069NnBQRD1Hfj7HFbRwCFy7/",
      },
      {
        name: "Mr. Dhruv Verma",
        role: "Academic Associate",
        image: dhru_verma,
        resumeLink: "https://drive.google.com/file/d/11sZw31uVSSP3Qk_zdRk_eNbPombzRoHo/",
      },
      {
        name: "Ms. Ishika Patel",
        role: "Academic Associate",
        image: ishika,
        resumeLink: "https://drive.google.com/file/d/1prBp-K4o56VK0J3Te7IZXqdQfduUq0ow/view?usp=sharing",
      },
      
      {
        name: "Mr. Vedhant Ratnottar",
        role: "Student",
        image: vedantratna,
        resumeLink: "https://drive.google.com/file/d/1_tYZBdKP6gEpdyR64ypUi4auf0Lv6VJp/",
      },
      {
        name: "Ms. Chhaya Raundal",
        // role: "Academic Associate",
        role: "Student",
        image: chhaya,
        resumeLink: "https://drive.google.com/file/d/1dAnb35BNgZOURjsJaY_QHA4eMwsLj_Ca/",
      },
    ],
  };

  return (
    <div className="p-[40px] bg-[#f9f9f9] font text-secondary max-[750px]:p-[20px] max-[480px]:p-[10px]">
      <div className="flex justify-center mb-[30px] flex-wrap gap-2 max-[768px]:flex-col max-[768px]:items-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`bg-transparent border-2 border-[#ccc] py-[10px] px-[20px] mx-[10px] cursor-pointer text-[1rem] rounded-[5px] transition-all duration-300 ease-in text-black max-[768px]:mx-0 max-[768px]:w-[80%] max-[768px]:my-2 max-[480px]:py-[8px] max-[480px]:px-[16px] max-[480px]:text-[0.9rem] ${
              activeTab === tab.id
                ? "bg-primary text-secondary font scale-105 shadow-[0_4px_8px_rgba(0,0,0,0.2)] border-primary max-[768px]:scale-100"
                : ""
            } hover:bg-secondary hover:text-black`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-[2rem] mb-[15px] text-[#333] max-[768px]:text-[1.5rem] max-[480px]:text-[1.25rem] max-[480px]:mb-[10px]">
          {tabs.find((tab) => tab.id === activeTab)?.label}
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-[35px] p-[10px] max-w-[1200px] mx-auto max-[768px]:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-[768px]:gap-[15px] max-[768px]:p-[5px] max-[480px]:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] max-[480px]:gap-[10px]">
          {teamData[activeTab]?.map((member, index) => (
            <div
              key={index}
              className="group bg-secondary rounded-[8px] shadow-[0_6px_12px_rgba(0,0,0,0.15)] text-center transition-all duration-300 ease-in hover:-translate-y-[5px] hover:bg-gray-50 p-5 max-[768px]:p-4 max-[480px]:p-3"
            >
              <div className="relative flex justify-center items-center w-[250px] h-[250px] mx-auto border-4 border-[#ccc] rounded-full overflow-hidden shadow-[0_6px_12px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in group-hover:border-primary max-[768px]:w-[200px] max-[768px]:h-[200px] max-[480px]:w-[150px] max-[480px]:h-[150px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[250px] h-[250px] object-cover rounded-[30%] transition-transform duration-300 ease-in group-hover:scale-110 max-[768px]:w-[200px] max-[768px]:h-[200px] max-[480px]:w-[150px] max-[480px]:h-[150px]"
                />
              </div>
              <div className="mt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in max-[768px]:opacity-100 max-[768px]:translate-y-0 max-[480px]:mt-2">
                <a
                  href={member.resumeLink}
                  className="flex items-center justify-center gap-2 text-primary text-[1rem] font no-underline hover:underline transition-all duration-300 ease-in transform scale-100 group-hover:scale-105 max-[480px]:text-[0.875rem] max-[480px]:gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View resume of ${member.name}`}
                >
                  <span>View Resume</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 max-[480px]:w-4 max-[480px]:h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
              <h3 className="mt-[20px] mb-[10px] text-[1.4rem] font text-[#222] max-[768px]:text-[1.2rem] max-[768px]:mt-[15px] max-[768px]:mb-[8px] max-[480px]:text-[1rem] max-[480px]:mt-[10px] max-[480px]:mb-[5px]">
                {member.name}
              </h3>
              <p className="text-[1.2rem] text-[#555] max-[768px]:text-[1rem] max-[480px]:text-[0.875rem]">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabbedAboutTeam;