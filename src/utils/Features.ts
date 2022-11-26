import { Create, Pages, Share, User } from "./Icons.features";

export const FEATURES: any[] = [
  {
    title: {
      pt: "Criar cadernos e páginas",
      en:"Create notebooks and pages"
    },
    description: {
      pt: "Cada utilizador terá a possibilidade de criar os seus cadernos com as suas respetivas páginas. Os mesmos irão disponibilizar campos para descrições, título, imagem ou cor",
      en: "Each user will be able to create their own notebooks with their own pages. They will provide fields for descriptions, title, image or color"
    },
    icon: Create,
  },
  {
    title: {
      pt: "Apagar ou editar cadernos e páginas",
      en:"Delete or edit notebooks and pages"
    },
    description: {
      pt: "O  utilizador poderá editar o caderno e as páginas. Poderá mudar o nome do caderno que criou, a imagem, a cor, ou até mesmo, apagá-lo se necessário. Em relação as páginas do caderno, o utilizador poderá editar, apagar, armazenar fotos de exercícios e resumos e guardar breves apontamentos",
      en:"The user can edit the notebook and the pages. They can change the name of the notebook they created, the image, the color, or even delete it if necessary. Regarding the notebook pages, the user can edit, delete, store pictures of exercises and summaries, and save short notes."
    },
    icon: Pages,
  },
  {
    title: {
      pt: "Partilhar cadernos",
      en:"Sharing notebooks"
    },
    description: {
      pt: "Os cadernos podem ser partilhados através da leitura de códigos Qr. Sendo assim, cada caderno será criado com seu respetivo código Qr que, com autorização do autor, pode ser partilhado com outros utilizadores",
      en:"The notebooks can be shared by reading Qr codes. Therefore, each notebook will be created with its respective Qr code that, with the author's permission, can be shared with other users"
    },
    icon: Share,
  },
  {
    title: {
      pt: "Perfil de utilizador",
      en:"User Profile"
    },
    description: {
      pt: "O utilizador terá a oportunidade de associar a sua conta google a aplicação e criar o seu respetivo perfil. Este perfil ira disponibilizar um conjunto de informação, que são respetivamente: Primeiro nome, último nome, e-mail, idade e Número de cadernos partilhados",
      en:"The user will have the opportunity to associate their google account with the application and create their profile. This profile will provide a set of information, which are respectively: first name, last name, e-mail, age and number of shared notebook"
    },
    icon: User,
  },
];
