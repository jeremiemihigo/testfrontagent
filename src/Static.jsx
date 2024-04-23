// export const lien = "http://localhost:5000/bboxx/support";
//  export const lien_image = "http://localhost:5000/bboxx/image";
// export const lien = "http://109.199.122.241:5000/bboxx/support";
// export const lien_image = "http://109.199.122.241:5000/bboxx/image";

export const lien = "https://bboxxbackendtest.onrender.com/bboxx/support";
export const lien_image = "https://bboxxbackendtest.onrender.com/bboxx/image";
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
export const raison =[{
  "_id": {
    "$oid": "65dee61c6bbfcc157cd48c29"
  },
  "raison": "AUCUN PROBLEME",
  "id": {
    "$numberLong": "1708721415173"
  },
  "savedBy": "jeremie"
},
{
  "_id": {
    "$oid": "6614f1266a6ceb7cf6111bd9"
  },
  "raison": "INJOIGNABLE",
  "id": {
    "$numberLong": "1712648486246"
  },
  "savedBy": "j.jeremiemihigo",
  "createdAt": {
    "$date": "2024-04-09T07:41:26.247Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T07:41:26.247Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6614f1386a6ceb7cf6111c0c"
  },
  "raison": "PROMESSE DE PAIEMENT",
  "id": {
    "$numberLong": "1712648504164"
  },
  "savedBy": "j.jeremiemihigo",
  "createdAt": {
    "$date": "2024-04-09T07:41:44.164Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T07:41:44.164Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6614f1436a6ceb7cf6111c34"
  },
  "raison": "PROBLÈME DE BATTERIE",
  "id": {
    "$numberLong": "1712648515641"
  },
  "savedBy": "j.jeremiemihigo",
  "createdAt": {
    "$date": "2024-04-09T07:41:55.641Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T07:41:55.641Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6614f14c6a6ceb7cf6111c4f"
  },
  "raison": "MATÉRIELS EN PANNE",
  "id": {
    "$numberLong": "1712648524078"
  },
  "savedBy": "j.jeremiemihigo",
  "createdAt": {
    "$date": "2024-04-09T07:42:04.079Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T07:42:04.079Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6614f1556a6ceb7cf6111c73"
  },
  "raison": "MAUVAIS NUMÉRO",
  "id": {
    "$numberLong": "1712648533263"
  },
  "savedBy": "j.jeremiemihigo",
  "createdAt": {
    "$date": "2024-04-09T07:42:13.264Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T07:42:13.264Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6614f15e6a6ceb7cf6111c8d"
  },
  "raison": "DÉPLACEMENT",
  "id": {
    "$numberLong": "1712648542440"
  },
  "savedBy": "j.jeremiemihigo",
  "createdAt": {
    "$date": "2024-04-09T07:42:22.441Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T07:42:22.441Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6614f20b6a6ceb7cf6111dd3"
  },
  "raison": "NE POSSÈDE PAS LES MATÉRIELS BBOXX",
  "id": {
    "$numberLong": "1712648715652"
  },
  "savedBy": "j.jeremiemihigo",
  "createdAt": {
    "$date": "2024-04-09T07:45:15.652Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T07:45:15.652Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6614f21f6a6ceb7cf6111dfc"
  },
  "raison": "PROBLÈME DE PAIEMENT",
  "id": {
    "$numberLong": "1712648735399"
  },
  "savedBy": "j.jeremiemihigo",
  "createdAt": {
    "$date": "2024-04-09T07:45:35.400Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T07:45:35.400Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6614f2296a6ceb7cf6111e0b"
  },
  "raison": "DIFFICULTÉ FINANCIÈRES",
  "id": {
    "$numberLong": "1712648745558"
  },
  "savedBy": "j.jeremiemihigo",
  "createdAt": {
    "$date": "2024-04-09T07:45:45.559Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T07:45:45.559Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6614f2356a6ceb7cf6111e3b"
  },
  "raison": "PROBLÈME TECHNIQUE",
  "id": {
    "$numberLong": "1712648757947"
  },
  "savedBy": "j.jeremiemihigo",
  "createdAt": {
    "$date": "2024-04-09T07:45:57.948Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T07:45:57.948Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "661502db6a6ceb7cf6113d58"
  },
  "raison": "FIN CONTRAT",
  "id": {
    "$numberLong": "1712653019762"
  },
  "savedBy": "j.mihigo",
  "createdAt": {
    "$date": "2024-04-09T08:56:59.762Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T08:56:59.762Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "661502e76a6ceb7cf6113d5d"
  },
  "raison": "REPOSSEDÉ",
  "id": {
    "$numberLong": "1712653031303"
  },
  "savedBy": "j.mihigo",
  "createdAt": {
    "$date": "2024-04-09T08:57:11.304Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T08:57:11.304Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "661502ef6a6ceb7cf6113d7b"
  },
  "raison": "MALADE",
  "id": {
    "$numberLong": "1712653039795"
  },
  "savedBy": "j.mihigo",
  "createdAt": {
    "$date": "2024-04-09T08:57:19.795Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T08:57:19.795Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "661502f96a6ceb7cf6113d80"
  },
  "raison": "ENDEUILLÉ",
  "id": {
    "$numberLong": "1712653049161"
  },
  "savedBy": "j.mihigo",
  "createdAt": {
    "$date": "2024-04-09T08:57:29.161Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T08:57:29.161Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "661503016a6ceb7cf6113d84"
  },
  "raison": "MATÉRIELS VOLÉS",
  "id": {
    "$numberLong": "1712653057728"
  },
  "savedBy": "j.mihigo",
  "createdAt": {
    "$date": "2024-04-09T08:57:37.729Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T08:57:37.729Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6615030a6a6ceb7cf6113dac"
  },
  "raison": "DECODEUR AU SHOP",
  "id": {
    "$numberLong": "1712653066451"
  },
  "savedBy": "j.mihigo",
  "createdAt": {
    "$date": "2024-04-09T08:57:46.451Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T08:57:46.451Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "661503146a6ceb7cf6113dc4"
  },
  "raison": "DEMANDE LA REPOSSESSION",
  "id": {
    "$numberLong": "1712653076072"
  },
  "savedBy": "j.mihigo",
  "createdAt": {
    "$date": "2024-04-09T08:57:56.073Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T08:57:56.073Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "661503266a6ceb7cf6113dd7"
  },
  "raison": "DIFFICULTÉ FINANCIÈRE",
  "id": {
    "$numberLong": "1712653094087"
  },
  "savedBy": "j.mihigo",
  "createdAt": {
    "$date": "2024-04-09T08:58:14.087Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T08:58:14.087Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6615082b6a6ceb7cf61147ef"
  },
  "raison": "INCENDIE",
  "id": {
    "$numberLong": "1712654379303"
  },
  "savedBy": "j.jeremiemihigo",
  "createdAt": {
    "$date": "2024-04-09T09:19:39.304Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T09:19:39.304Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "661508346a6ceb7cf6114808"
  },
  "raison": "LE CLIENT A CEDÉ SON KIT À UNE VOISINE",
  "id": {
    "$numberLong": "1712654388695"
  },
  "savedBy": "j.jeremiemihigo",
  "createdAt": {
    "$date": "2024-04-09T09:19:48.695Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T09:19:48.695Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6615083e6a6ceb7cf6114822"
  },
  "raison": "LE CLIENT A LAISSÉ LES MATÉRIELS À QUELQU'UN D'AUTRE",
  "id": {
    "$numberLong": "1712654398617"
  },
  "savedBy": "j.jeremiemihigo",
  "createdAt": {
    "$date": "2024-04-09T09:19:58.617Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T09:19:58.617Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "661508476a6ceb7cf6114840"
  },
  "raison": "LE CLIENT A REMIS LES MATÉRIELS À SON AMI",
  "id": {
    "$numberLong": "1712654407875"
  },
  "savedBy": "j.jeremiemihigo",
  "createdAt": {
    "$date": "2024-04-09T09:20:07.876Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T09:20:07.876Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "661508516a6ceb7cf611485a"
  },
  "raison": "LE CLIENT DÉMÉNAGE",
  "id": {
    "$numberLong": "1712654417486"
  },
  "savedBy": "j.jeremiemihigo",
  "createdAt": {
    "$date": "2024-04-09T09:20:17.486Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T09:20:17.486Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6615085a6a6ceb7cf611486a"
  },
  "raison": "LE CLIENT VEUT DÉMÉNAGER",
  "id": {
    "$numberLong": "1712654426700"
  },
  "savedBy": "j.jeremiemihigo",
  "createdAt": {
    "$date": "2024-04-09T09:20:26.700Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T09:20:26.700Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "661508636a6ceb7cf611487f"
  },
  "raison": "RETARD DE RETABLISSEMENT DES CHAINES APRÈS REABONNEMENT",
  "id": {
    "$numberLong": "1712654435220"
  },
  "savedBy": "j.jeremiemihigo",
  "createdAt": {
    "$date": "2024-04-09T09:20:35.221Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T09:20:35.221Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6615086b6a6ceb7cf6114893"
  },
  "raison": "UTILISE UNE AUTRE SOURCE D'ÉNERGIE",
  "id": {
    "$numberLong": "1712654443732"
  },
  "savedBy": "j.jeremiemihigo",
  "createdAt": {
    "$date": "2024-04-09T09:20:43.733Z"
  },
  "updatedAt": {
    "$date": "2024-04-09T09:20:43.733Z"
  },
  "__v": 0
}]
