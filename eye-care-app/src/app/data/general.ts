export interface CardData {
    title: string;
    text: string;
    link: string;
  }
  
  export const contentBlockAData: CardData[] = [
    {
      title: 'SIT DOLOR 1',
      text: 'Nunc tempus fringilla turpis porttitor scelerisque. Vestibulum feugiat vulputate orci, in imperdiet turpis. Pellentesque consectetur nibh vitae eros efficitur eleifend.',
      link: '/link1'
    },
    {
      title: 'SIT DOLOR 2',
      text: 'Nunc tempus fringilla turpis porttitor scelerisque. Vestibulum feugiat vulputate orci, in imperdiet turpis. Pellentesque consectetur nibh vitae eros efficitur eleifend.',
      link: '/link2'
    },
    {
      title: 'SIT DOLOR 3',
      text: 'Nunc tempus fringilla turpis porttitor scelerisque. Vestibulum feugiat vulputate orci, in imperdiet turpis. Pellentesque consectetur nibh vitae eros efficitur eleifend.',
      link: '/link3'
    },
    {
      title: 'SIT DOLOR 4',
      text: 'Nunc tempus fringilla turpis porttitor scelerisque. Vestibulum feugiat vulputate orci, in imperdiet turpis. Pellentesque consectetur nibh vitae eros efficitur eleifend.',
      link: '/link4'
    }
  ];

export interface StatCardData {
  text: string;
  className: string;
}

export const statCardsData: StatCardData[] = [
  {
    text: 'Nunc tempus fringilla turpis porttitor scelerisque.',
    className: 'bg-[#384C84]'
  },
  {
    text: 'Nunc tempus fringilla turpis porttitor scelerisque.',
    className: 'bg-[#516293]'
  },
  {
    text: 'Nunc tempus fringilla turpis porttitor scelerisque.',
    className: 'bg-[#7684AA]'
  },
  {
    text: 'Nunc tempus fringilla turpis porttitor scelerisque.',
    className: 'bg-[#B7C0D8]'
  }
];

export interface InfoCardData {
  title: string;
  text: string;
}

export const InfoCardsData: InfoCardData[] = [
  {
    title: 'Lorem Ipsum',
    text: 'Nunc tempus fringilla turpis porttitor scelerisque. Vestibulum feugiat vulputate orci, in imperdiet turpis. Pellentesque consectetur nibh vitae eros efficitur eleifend.',
  },
  {
    title: 'Lorem Ipsum',
    text: 'Nunc tempus fringilla turpis porttitor scelerisque. Vestibulum feugiat vulputate orci, in imperdiet turpis. Pellentesque consectetur nibh vitae eros efficitur eleifend.',
  }

];

export interface InfoCardData2 {
  title: string;
  text: string;
}

export const InfoCardsData2: InfoCardData[] = [
  {
    title: 'Lorem Ipsum',
    text: 'Nunc tempus fringilla turpis porttitor scelerisque. Vestibulum feugiat vulputate orci, in imperdiet turpis. Pellentesque consectetur nibh vitae eros efficitur eleifend.',
  },
  {
    title: 'Lorem Ipsum',
    text: 'Nunc tempus fringilla turpis porttitor scelerisque. Vestibulum feugiat vulputate orci, in imperdiet turpis. Pellentesque consectetur nibh vitae eros efficitur eleifend.',
  }

];

export interface DoctorCardData {
  name: string;
  text: string;
}

export const DoctorCardsData: DoctorCardData[] = [
  {
    name: 'Dr. Houfar Sekhavat FRCSC',
    text: 'Lorem ipsum door sit amet & Nunc tempus fringilla',
  },
  {
    name: 'Dr. Isabelle Aucoin-Savoie',
    text: 'Lorem ipsum door sit amet & Nunc tempus fringilla',
  }

];

export interface ImageRowData {
  id: string;
  title: string;
  main_title: string;
  text: string;
  link: string;
  button_title: string;
}

export const ImageRowsData: ImageRowData[] = [
  {
    id: 'row-1',
    title: 'Mauris consequat semper',
    main_title:'SIT DOLOR',
    text: 'Nullam aliquet placerat urna et dignissim. Sed ultrices, turpis vitae viverra mollis, mi risus tempus lorem, in dapibus justo nulla non turpis. Maecenas pulvinar rhoncus mi eu aliquam. Praesent in auctor lacus. Etiam id pellentesque lacus, sed fringilla massa. Morbi turpis dolor, luctus eu odio ut, volutpat blandit urna. Nam eleifend, ipsum non finibus semper, nunc magna pharetra mi, eu dignissim dui enim in metus. Quisque ipsum nunc, finibus at nulla a, consectetur aliquam mi.',
    link:'/contact-us',
    button_title:'CONTACT US'
  },
  
];

export const ImageRowsData2: ImageRowData[] = [
  {
    id: 'row-2',
    title: 'About Us',
    main_title:'SIT DOLOR',
    text: 'Nullam aliquet placerat urna et dignissim. Sed ultrices, turpis vitae viverra mollis, mi risus tempus lorem, in dapibus justo nulla non turpis. Maecenas pulvinar rhoncus mi eu aliquam. Praesent in auctor lacus. Etiam id pellentesque lacus, sed fringilla massa. Morbi turpis dolor, luctus eu odio ut, volutpat blandit urna. Nam eleifend, ipsum non finibus semper, nunc magna pharetra mi, eu dignissim dui enim in metus. Quisque ipsum nunc, finibus at nulla a, consectetur aliquam mi.',
    link:'/contact-us',
    button_title:'CONTACT US'
  }
  
];

export const AboutUsImageRowsData: ImageRowData[] = [
  {
    id: 'row-2',
    title: 'About Us',
    main_title:'Eye Care Centre NB',
    text: 'Our ophthalmologists offer experienced medical treatment for diseases of the eye, and eye care options like:, cataracts, eyelid, or cosmetic surgery for patients across the Maritimes.',
    link:'/contact-us',
    button_title:'CONTACT US'
  },
  
];

export const AboutUsImageRowsData2: ImageRowData[] = [
  {
    id: 'row-1',
    title: 'Let Us Introduce Ourselves',
    main_title:'GENERAL OPHTHALMOLOGY PRACTICE',
    text: 'We are pleased to welcome you to Eye Care Centre NB, our comprehensive ophthalmology practice located in Dieppe, co-founded in 2019 by Dr. Houfar Sekhavat and Dr. Julien Saad. As a state-of-the-art medical centre, we stay current in diagnostic and surgical procedures and continually endeavor to provide our patients with the highest quality of are.',
    link:'/our-team',
    button_title:'OUR DOCTORS'
  }
  
];

export const AboutUsImageRowsData3: ImageRowData[] = [
  {
    id: "row-2",
    title: "Our Extensive Eye Care Services",
    main_title: "OPHTHALMOLOGY & SURGICAL SERVICES",
    text: `
- CATARACT SURGERY
- EYELID AND COSMETIC SURGERIES
- GLAUCOMA MANAGEMENT
- DIABETIC RETINAL EXAMS
- DRY EYE
- VISUAL PROBLEMS REQUIRING EVALUATION
- URGENT EYE CONDITIONS`,
    link: "/contact-us",
    button_title: "CONTACT US",
  },
];






  