// export const lien = "http://localhost:5000/bboxx/support";
//  export const lien_image = "http://localhost:4000/bboxx/image";
// export const lien = "http://localhost:4000/bboxx/support";
// export const lien_image = "http://109.199.122.241:5000/bboxx/image";

// const link = "https://bboxxother.onrender.com";
// const link = "https://visite-menage.bboxxvm.com";
const link = 'https://visite.bboxxvm.com';

export const lien = `${link}/bboxx/support`;
export const lien_image = `${link}/bboxx/image`;
export const dateFrancais = (donner) => {
  let dates = new Date(donner);
  return `${dates.getDate()}/${dates.getMonth() + 1}/${dates.getFullYear()}`;
};
export const config = {
  headers: {
    "Content-Type": "Application/json",
    Authorization: "Bearer " + localStorage.getItem("auth"),
  },
};
export const raison = [
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c6b",
    },
    raison: "En attente de swap de CU",
    id: 1,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.519Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.519Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c6c",
    },
    raison:
      "En attente de swap des autres items (torche, radio, TV, panneau,…)",
    id: 2,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.520Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.520Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c6d",
    },
    raison: "zone insecurisée",
    id: 3,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.520Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.520Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c6e",
    },
    raison: "absent à la maison",
    id: 4,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.520Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.520Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c6f",
    },
    raison: "Promesse de payement",
    id: 5,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.520Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.520Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c70",
    },
    raison: "cas de déménagement",
    id: 6,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.521Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.521Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c71",
    },
    raison: "En cours de repossession",
    id: 7,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.521Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.521Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c72",
    },
    raison: "introuvable",
    id: 8,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.521Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.521Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c73",
    },
    raison: "cas de resistance",
    id: 9,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.521Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.521Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c74",
    },
    raison: "Resistance",
    id: 10,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.521Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.521Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c75",
    },
    raison: "Victime de vol",
    id: 11,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.521Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.521Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c76",
    },
    raison: "Victime d'inendie",
    id: 12,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.522Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.522Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c77",
    },
    raison: "reactivation non utilisée",
    id: 13,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.522Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.522Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c78",
    },
    raison: "Pretend avoir fini",
    id: 14,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.522Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.522Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c79",
    },
    raison: "Probleme technique",
    id: 15,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.522Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.522Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c7a",
    },
    raison: "Client en voyage",
    id: 16,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.522Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.522Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c7b",
    },
    raison: "Maison fermee",
    id: 17,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.522Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.522Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c7c",
    },
    raison: "Probleme financier",
    id: 18,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.523Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.523Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c7d",
    },
    raison: "Deja repossedee par notre agent",
    id: 19,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.523Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.523Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c7e",
    },
    raison: "Malade",
    id: 20,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.523Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.523Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c7f",
    },
    raison: "Demande la repossession",
    id: 21,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.523Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.523Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c80",
    },
    raison: "Le client a laissé les matériels à quelqu'un d'autre",
    id: 22,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.523Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.523Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c81",
    },
    raison: "Demenager sans signaler",
    id: 23,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.523Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.523Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c82",
    },
    raison: "Utilise une autre source d'énergie",
    id: 24,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.523Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.523Z",
    },
  },
  {
    _id: {
      $oid: "6638db3b80ff24613baf6c83",
    },
    raison: "Le client veut déménager",
    id: 25,
    savedBy: "j.mihigo",
    type: "nonTechnique",
    __v: 0,
    createdAt: {
      $date: "2024-05-06T13:29:31.524Z",
    },
    updatedAt: {
      $date: "2024-05-06T13:29:31.524Z",
    },
  },
];
export const sat = [
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2945f",
    },
    idSat: "ARI001",
    nom_SAT: "ARU",
    shop: "Ariwara",
    region: "Ituri",
    id: "1",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29460",
    },
    idSat: "ARI002",
    nom_SAT: "ARIWARA 1",
    shop: "Ariwara",
    region: "Ituri",
    id: "2",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29461",
    },
    idSat: "ARI003",
    nom_SAT: "ARIWARA 2",
    shop: "Ariwara",
    region: "Ituri",
    id: "3",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29462",
    },
    idSat: "ARI004",
    nom_SAT: "INGBOKOLO",
    shop: "Ariwara",
    region: "Ituri",
    id: "4",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29463",
    },
    idSat: "ARI005",
    nom_SAT: "DJALASIGA",
    shop: "Ariwara",
    region: "Ituri",
    id: "5",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29464",
    },
    idSat: "BAR001",
    nom_SAT: "FIZI KMS",
    shop: "Baraka",
    region: "Sud-Kivu",
    id: "6",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29465",
    },
    idSat: "BAR002",
    nom_SAT: "BARAKA NORD",
    shop: "Baraka",
    region: "Sud-Kivu",
    id: "7",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29466",
    },
    idSat: "BAR003",
    nom_SAT: "BARAKA SUD",
    shop: "Baraka",
    region: "Sud-Kivu",
    id: "8",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29467",
    },
    idSat: "BAR004",
    nom_SAT: "BARAKA OUEST",
    shop: "Baraka",
    region: "Sud-Kivu",
    id: "9",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29468",
    },
    idSat: "BAR005",
    nom_SAT: "LUSENDA MS",
    shop: "Baraka",
    region: "Sud-Kivu",
    id: "10",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29469",
    },
    idSat: "BEN001",
    nom_SAT: "RWENZORI",
    shop: "Beni",
    region: "Nord-Kivu",
    id: "11",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2946a",
    },
    idSat: "BEN002",
    nom_SAT: "BEU",
    shop: "Beni",
    region: "Nord-Kivu",
    id: "12",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2946b",
    },
    idSat: "BEN003",
    nom_SAT: "MULEKERA",
    shop: "Beni",
    region: "Nord-Kivu",
    id: "13",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2946c",
    },
    idSat: "BEN004",
    nom_SAT: "OICHA",
    shop: "Beni",
    region: "Nord-Kivu",
    id: "14",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2946d",
    },
    idSat: "BEN005",
    nom_SAT: "BUNGULU",
    shop: "Beni",
    region: "Nord-Kivu",
    id: "15",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2946e",
    },
    idSat: "BEN006",
    nom_SAT: "CANTINE",
    shop: "Beni",
    region: "Nord-Kivu",
    id: "16",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2946f",
    },
    idSat: "BUK001",
    nom_SAT: "LABOTTE",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "17",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29470",
    },
    idSat: "BUK002",
    nom_SAT: "ROUTE UVIRA",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "18",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29471",
    },
    idSat: "BUK003",
    nom_SAT: "NYALUKEMBA",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "19",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29472",
    },
    idSat: "BUK004",
    nom_SAT: "MUKUKWE",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "20",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29473",
    },
    idSat: "BUK005",
    nom_SAT: "BAGIRA_LUMUMBA",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "21",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29474",
    },
    idSat: "BUK006",
    nom_SAT: "BRASERIE",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "22",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29475",
    },
    idSat: "BUK007",
    nom_SAT: "CLINIQUE",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "23",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29476",
    },
    idSat: "BUK008",
    nom_SAT: "CIMPUNDA_BUHOLO",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "24",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29477",
    },
    idSat: "BUK009",
    nom_SAT: "LA CONCONRDE",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "25",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29478",
    },
    idSat: "BUK010",
    nom_SAT: "BAGIRA_NYAKAVOGO",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "26",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29479",
    },
    idSat: "BUK014",
    nom_SAT: "MAJOR VANGU NORD",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "27",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2947a",
    },
    idSat: "BUK011",
    nom_SAT: "MAJOR VANGU SUD",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "28",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2947b",
    },
    idSat: "BUK012",
    nom_SAT: "UEA",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "29",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2947c",
    },
    idSat: "BUK013",
    nom_SAT: "HOPITAL PANZI",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "30",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2947d",
    },
    idSat: "BUN001",
    nom_SAT: "HOHO",
    shop: "Bunia",
    region: "Ituri",
    id: "31",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2947e",
    },
    idSat: "BUN002",
    nom_SAT: "KINDIA",
    shop: "Bunia",
    region: "Ituri",
    id: "32",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2947f",
    },
    idSat: "BUN003",
    nom_SAT: "BANKOKO CENTRE",
    shop: "Bunia",
    region: "Ituri",
    id: "33",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29480",
    },
    idSat: "BUN004",
    nom_SAT: "KANYASI MUDZIPELA",
    shop: "Bunia",
    region: "Ituri",
    id: "34",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29481",
    },
    idSat: "BUN005",
    nom_SAT: "KASENYI",
    shop: "Bunia",
    region: "Ituri",
    id: "35",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29482",
    },
    idSat: "BUN006",
    nom_SAT: "SIMBILIYABO",
    shop: "Bunia",
    region: "Ituri",
    id: "36",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29483",
    },
    idSat: "BUN007",
    nom_SAT: "LUMUMBA",
    shop: "Bunia",
    region: "Ituri",
    id: "37",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29484",
    },
    idSat: "BUT001",
    nom_SAT: "Vulamba",
    shop: "Butembo",
    region: "Nord-Kivu",
    id: "38",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29485",
    },
    idSat: "BUT002",
    nom_SAT: "Bulengera",
    shop: "Butembo",
    region: "Nord-Kivu",
    id: "39",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29486",
    },
    idSat: "BUT003",
    nom_SAT: "KIMEMI",
    shop: "Butembo",
    region: "Nord-Kivu",
    id: "40",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29487",
    },
    idSat: "BUT004",
    nom_SAT: "Mususa",
    shop: "Butembo",
    region: "Nord-Kivu",
    id: "41",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29488",
    },
    idSat: "DUR001",
    nom_SAT: "Watsa",
    shop: "Durba",
    region: "Ituri",
    id: "42",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29489",
    },
    idSat: "DUR002",
    nom_SAT: "Bandai",
    shop: "Durba",
    region: "Ituri",
    id: "43",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2948a",
    },
    idSat: "DUR003",
    nom_SAT: "KOKIZA",
    shop: "Durba",
    region: "Ituri",
    id: "44",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2948b",
    },
    idSat: "DUR004",
    nom_SAT: "MALEMBA",
    shop: "Durba",
    region: "Ituri",
    id: "45",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2948c",
    },
    idSat: "GOM001",
    nom_SAT: "Mugunga",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "46",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2948d",
    },
    idSat: "GOM002",
    nom_SAT: "Virunga",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "47",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2948e",
    },
    idSat: "GOM003",
    nom_SAT: "Himbi",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "48",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2948f",
    },
    idSat: "GOM004",
    nom_SAT: "Kyeshero",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "49",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29490",
    },
    idSat: "GOM005",
    nom_SAT: "Ndosho",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "50",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29491",
    },
    idSat: "GOM006",
    nom_SAT: "Katoyi_Kasika",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "51",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29492",
    },
    idSat: "GOM007",
    nom_SAT: "Mabanga",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "52",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29493",
    },
    idSat: "GOM008",
    nom_SAT: "Mont_Goma",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "53",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29494",
    },
    idSat: "GOM009",
    nom_SAT: "ITIG",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "54",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29495",
    },
    idSat: "GOM010",
    nom_SAT: "Turunga",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "55",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29496",
    },
    idSat: "KAL001",
    nom_SAT: "Kalemie_Sud",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "56",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29497",
    },
    idSat: "KAL002",
    nom_SAT: "Kalemie_Nord",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "57",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29498",
    },
    idSat: "KAV001",
    nom_SAT: "KAVUMU CENTRE EST",
    shop: "Kavumu",
    region: "Sud-Kivu",
    id: "58",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f29499",
    },
    idSat: "KAV002",
    nom_SAT: "MUDAKA",
    shop: "Kavumu",
    region: "Sud-Kivu",
    id: "59",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2949a",
    },
    idSat: "KAV003",
    nom_SAT: "BIRAVA",
    shop: "Kavumu",
    region: "Sud-Kivu",
    id: "60",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2949b",
    },
    idSat: "KAV004",
    nom_SAT: "KATANA",
    shop: "Kavumu",
    region: "Sud-Kivu",
    id: "61",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2949c",
    },
    idSat: "KAV005",
    nom_SAT: "KALEHE",
    shop: "Kavumu",
    region: "Sud-Kivu",
    id: "62",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2949d",
    },
    idSat: "KAV006",
    nom_SAT: "KAVUMU CENTRE OUEST",
    shop: "Kavumu",
    region: "Sud-Kivu",
    id: "63",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2949e",
    },
    idSat: "KIS001",
    nom_SAT: "Simisimi",
    shop: "Kisangani",
    region: "Tshopo",
    id: "64",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f2949f",
    },
    idSat: "KIS017",
    nom_SAT: "FARDC",
    shop: "Kisangani",
    region: "Tshopo",
    id: "65",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294a0",
    },
    idSat: "KIS016",
    nom_SAT: "Sotexki 3",
    shop: "Kisangani",
    region: "Tshopo",
    id: "66",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294a1",
    },
    idSat: "KIS015",
    nom_SAT: "Sotexki 2",
    shop: "Kisangani",
    region: "Tshopo",
    id: "67",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294a2",
    },
    idSat: "KIS002",
    nom_SAT: "Sotexki 1",
    shop: "Kisangani",
    region: "Tshopo",
    id: "68",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294a3",
    },
    idSat: "KIS003",
    nom_SAT: "Cathedrale",
    shop: "Kisangani",
    region: "Tshopo",
    id: "69",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294a4",
    },
    idSat: "KIS004",
    nom_SAT: "Bralima",
    shop: "Kisangani",
    region: "Tshopo",
    id: "70",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294a5",
    },
    idSat: "KIS005",
    nom_SAT: "Du30juin",
    shop: "Kisangani",
    region: "Tshopo",
    id: "71",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294a6",
    },
    idSat: "KIS006",
    nom_SAT: "Magopi",
    shop: "Kisangani",
    region: "Tshopo",
    id: "72",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294a7",
    },
    idSat: "KIS007",
    nom_SAT: "Motumbe",
    shop: "Kisangani",
    region: "Tshopo",
    id: "73",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294a8",
    },
    idSat: "KIS008",
    nom_SAT: "Tp",
    shop: "Kisangani",
    region: "Tshopo",
    id: "74",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294a9",
    },
    idSat: "KIS009",
    nom_SAT: "Kisangani",
    shop: "Kisangani",
    region: "Tshopo",
    id: "75",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294aa",
    },
    idSat: "KIS010",
    nom_SAT: "Wenze_tshai 1",
    shop: "Kisangani",
    region: "Tshopo",
    id: "76",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294ab",
    },
    idSat: "KIS011",
    nom_SAT: "Wenze_tshai 2",
    shop: "Kisangani",
    region: "Tshopo",
    id: "77",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294ac",
    },
    idSat: "KIS012",
    nom_SAT: "Yanonge_isangi",
    shop: "Kisangani",
    region: "Tshopo",
    id: "78",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294ad",
    },
    idSat: "KIS013",
    nom_SAT: "Stade_Pont_Tshopo",
    shop: "Kisangani",
    region: "Tshopo",
    id: "79",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294ae",
    },
    idSat: "KIS014",
    nom_SAT: "Tshatshi",
    shop: "Kisangani",
    region: "Tshopo",
    id: "80",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294af",
    },
    idSat: "KOL001",
    nom_SAT: "LUILU",
    shop: "Kolwezi",
    region: "Katanga",
    id: "81",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294b0",
    },
    idSat: "KOL002",
    nom_SAT: "MWANGEJI",
    shop: "Kolwezi",
    region: "Katanga",
    id: "82",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294b1",
    },
    idSat: "KOL003",
    nom_SAT: "MUTOSHI",
    shop: "Kolwezi",
    region: "Katanga",
    id: "83",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294b2",
    },
    idSat: "KOL004",
    nom_SAT: "LUPUNDU 1",
    shop: "Kolwezi",
    region: "Katanga",
    id: "84",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294b3",
    },
    idSat: "KOL005",
    nom_SAT: "LUPUNDU 2",
    shop: "Kolwezi",
    region: "Katanga",
    id: "85",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294b4",
    },
    idSat: "KOL006",
    nom_SAT: "GOUVERNORAT",
    shop: "Kolwezi",
    region: "Katanga",
    id: "86",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294b5",
    },
    idSat: "KOL007",
    nom_SAT: "ROYAL",
    shop: "Kolwezi",
    region: "Katanga",
    id: "87",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294b6",
    },
    idSat: "KOL008",
    nom_SAT: "ISTM",
    shop: "Kolwezi",
    region: "Katanga",
    id: "88",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294b7",
    },
    idSat: "KOL009",
    nom_SAT: "MANIKA",
    shop: "Kolwezi",
    region: "Katanga",
    id: "89",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294b8",
    },
    idSat: "KOL010",
    nom_SAT: "DILALA",
    shop: "Kolwezi",
    region: "Katanga",
    id: "90",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294b9",
    },
    idSat: "KOL011",
    nom_SAT: "AEROPORT",
    shop: "Kolwezi",
    region: "Katanga",
    id: "91",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294ba",
    },
    idSat: "KOL012",
    nom_SAT: "KAPATA",
    shop: "Kolwezi",
    region: "Katanga",
    id: "92",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294bb",
    },
    idSat: "LUB001",
    nom_SAT: "Briquet",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "93",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294bc",
    },
    idSat: "LUB002",
    nom_SAT: "Kalubwe",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "94",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294bd",
    },
    idSat: "LUB003",
    nom_SAT: "Kasapa",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "95",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294be",
    },
    idSat: "LUB004",
    nom_SAT: "Mubanzo",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "96",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294bf",
    },
    idSat: "LUB005",
    nom_SAT: "Tabernacle",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "97",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294c0",
    },
    idSat: "LUB006",
    nom_SAT: "Munua",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "98",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294c1",
    },
    idSat: "LUB007",
    nom_SAT: "Karavia",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "99",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294c2",
    },
    idSat: "LUB008",
    nom_SAT: "HEWA BORA",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "100",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294c3",
    },
    idSat: "LUB009",
    nom_SAT: "RUASHI",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "101",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294c4",
    },
    idSat: "LUB010",
    nom_SAT: "REGIDESO",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "102",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294c5",
    },
    idSat: "LUB011",
    nom_SAT: "LA VALEE",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "103",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294c6",
    },
    idSat: "LUB012",
    nom_SAT: "BEL AIR",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "104",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294c7",
    },
    idSat: "LUB013",
    nom_SAT: "KILOBELOBE",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "105",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294c8",
    },
    idSat: "LUB014",
    nom_SAT: "KAMASAKA",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "106",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294c9",
    },
    idSat: "LUB015",
    nom_SAT: "KASANGIRI",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "107",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294ca",
    },
    idSat: "LUB016",
    nom_SAT: "JOLI SITE",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "108",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294cb",
    },
    idSat: "LUB017",
    nom_SAT: "Tabacongo",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "109",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294cc",
    },
    idSat: "LUB018",
    nom_SAT: "ERNIKA",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "110",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294cd",
    },
    idSat: "LUV001",
    nom_SAT: "SANGE",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "111",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294ce",
    },
    idSat: "LUV002",
    nom_SAT: "LUVUNGI 1",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "112",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294cf",
    },
    idSat: "LUV003",
    nom_SAT: "LUBARIKA",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "113",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294d0",
    },
    idSat: "LUV004",
    nom_SAT: "LUVUNGI 2",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "114",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294d1",
    },
    idSat: "MIN001",
    nom_SAT: "Idjwi",
    shop: "Minova",
    region: "Nord-Kivu",
    id: "115",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294d2",
    },
    idSat: "MIN002",
    nom_SAT: "Sake_Mushaki",
    shop: "Minova",
    region: "Nord-Kivu",
    id: "116",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294d3",
    },
    idSat: "MIN003",
    nom_SAT: "Bweremana",
    shop: "Minova",
    region: "Nord-Kivu",
    id: "117",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294d4",
    },
    idSat: "MIN004",
    nom_SAT: "Minova Centre",
    shop: "Minova",
    region: "Nord-Kivu",
    id: "118",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294d5",
    },
    idSat: "MIN005",
    nom_SAT: "Numbi_Kalungu",
    shop: "Minova",
    region: "Nord-Kivu",
    id: "119",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294d6",
    },
    idSat: "MIN006",
    nom_SAT: "Ruhunde",
    shop: "Minova",
    region: "Nord-Kivu",
    id: "120",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294d7",
    },
    idSat: "MIN007",
    nom_SAT: "Kitchanga_Kilolirwe",
    shop: "Minova",
    region: "Nord-Kivu",
    id: "121",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294d8",
    },
    idSat: "NGA001",
    nom_SAT: "Brikin",
    shop: "Ngaliema",
    region: "Kinshasa",
    id: "122",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294d9",
    },
    idSat: "NGA002",
    nom_SAT: "Lutendele",
    shop: "Ngaliema",
    region: "Kinshasa",
    id: "123",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294da",
    },
    idSat: "NGA003",
    nom_SAT: "Badiadingi",
    shop: "Ngaliema",
    region: "Kinshasa",
    id: "124",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294db",
    },
    idSat: "NGA004",
    nom_SAT: "Upn",
    shop: "Ngaliema",
    region: "Kinshasa",
    id: "125",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294dc",
    },
    idSat: "NGA005",
    nom_SAT: "Cpa",
    shop: "Ngaliema",
    region: "Kinshasa",
    id: "126",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294dd",
    },
    idSat: "NGA006",
    nom_SAT: "Dgc",
    shop: "Ngaliema",
    region: "Kinshasa",
    id: "127",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294de",
    },
    idSat: "RUB001",
    nom_SAT: "RUBAYA",
    shop: "Rubaya",
    region: "Nord-Kivu",
    id: "128",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294df",
    },
    idSat: "RUB002",
    nom_SAT: "BWESHA",
    shop: "Rubaya",
    region: "Nord-Kivu",
    id: "129",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294e0",
    },
    idSat: "RUB003",
    nom_SAT: "KIBABI",
    shop: "Rubaya",
    region: "Nord-Kivu",
    id: "130",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294e1",
    },
    idSat: "RUB004",
    nom_SAT: "MASISI EST",
    shop: "Rubaya",
    region: "Nord-Kivu",
    id: "131",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294e2",
    },
    idSat: "RUB005",
    nom_SAT: "MASISI OUEST",
    shop: "Rubaya",
    region: "Nord-Kivu",
    id: "132",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294e3",
    },
    idSat: "RUB006",
    nom_SAT: "NGUNGU SUD",
    shop: "Rubaya",
    region: "Nord-Kivu",
    id: "133",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294e4",
    },
    idSat: "RUB007",
    nom_SAT: "NGUNGU NORD",
    shop: "Rubaya",
    region: "Nord-Kivu",
    id: "134",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294e5",
    },
    idSat: "TSH001",
    nom_SAT: "Maluku_centre",
    shop: "Tshangu",
    region: "Kinshasa",
    id: "135",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294e6",
    },
    idSat: "TSH002",
    nom_SAT: "Menkao",
    shop: "Tshangu",
    region: "Kinshasa",
    id: "136",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294e7",
    },
    idSat: "TSH003",
    nom_SAT: "Masina",
    shop: "Tshangu",
    region: "Kinshasa",
    id: "137",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294e8",
    },
    idSat: "TSH004",
    nom_SAT: "Ndjili",
    shop: "Tshangu",
    region: "Kinshasa",
    id: "138",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294e9",
    },
    idSat: "TSH005",
    nom_SAT: "Bibwa",
    shop: "Tshangu",
    region: "Kinshasa",
    id: "139",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294ea",
    },
    idSat: "TSH006",
    nom_SAT: "Badara",
    shop: "Tshangu",
    region: "Kinshasa",
    id: "140",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294eb",
    },
    idSat: "TSH007",
    nom_SAT: "Kingasani",
    shop: "Tshangu",
    region: "Kinshasa",
    id: "141",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294ec",
    },
    idSat: "TSH008",
    nom_SAT: "Cimetiere",
    shop: "Tshangu",
    region: "Kinshasa",
    id: "142",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294ed",
    },
    idSat: "UVI001",
    nom_SAT: "KALUNDU",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "143",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294ee",
    },
    idSat: "UVI002",
    nom_SAT: "STADE_UNITE",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "144",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294ef",
    },
    idSat: "UVI003",
    nom_SAT: "KIMANGA",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "145",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294f0",
    },
    idSat: "UVI004",
    nom_SAT: "UVIRA CENTRE",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "146",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294f1",
    },
    idSat: "UVI005",
    nom_SAT: "KASENGA",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "147",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294f2",
    },
    idSat: "UVI006",
    nom_SAT: "KAVINVIRA",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "148",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294f3",
    },
    idSat: "WAL001",
    nom_SAT: "Walungu centre nord",
    shop: "Walungu",
    region: "Sud-Kivu",
    id: "149",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294f4",
    },
    idSat: "WAL002",
    nom_SAT: "Walungu centre sud",
    shop: "Walungu",
    region: "Sud-Kivu",
    id: "150",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294f5",
    },
    idSat: "WAL003",
    nom_SAT: "Mushinga",
    shop: "Walungu",
    region: "Sud-Kivu",
    id: "151",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294f6",
    },
    idSat: "WAL004",
    nom_SAT: "Kaziba",
    shop: "Walungu",
    region: "Sud-Kivu",
    id: "152",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294f7",
    },
    idSat: "WAL005",
    nom_SAT: "Nyangezi",
    shop: "Walungu",
    region: "Sud-Kivu",
    id: "153",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294f8",
    },
    idSat: "WAL006",
    nom_SAT: "Nzibira",
    shop: "Walungu",
    region: "Sud-Kivu",
    id: "154",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294f9",
    },
    idSat: "KIS018",
    nom_SAT: "Cabine",
    shop: "Kisangani",
    region: "Tshopo",
    id: "155",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294fa",
    },
    idSat: "KIS019",
    nom_SAT: "Boyoma",
    shop: "Kisangani",
    region: "Tshopo",
    id: "156",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294fb",
    },
    idSat: "KIS020",
    nom_SAT: "Banalia",
    shop: "Kisangani",
    region: "Tshopo",
    id: "157",
    __v: 0,
  },
  {
    _id: {
      $oid: "6638d76faa4dce67d3f294fc",
    },
    idSat: "KIS021",
    nom_SAT: "Artisanal",
    shop: "Kisangani",
    region: "Tshopo",
    id: "158",
    __v: 0,
  },
];
