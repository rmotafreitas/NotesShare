import { Create, Pages, Share, User } from "./Icons.features";

export const FEATURES: any[] = [
  {
    title: {
      pt: "Criar",
    },
    description: {
      pt: "Cada utilizador terá a possibilidade de criar os seus cadernos com as suas respetivas páginas. Os mesmos irão disponibilizar campos para descrições, título, imagem ou cor",
    },
    icon: Create,
  },
  {
    title: {
      pt: "Apagar ou editar cadernos e páginas",
    },
    description: {
      pt: "O  utilizador poderá editar o caderno e as páginas. Poderá mudar o nome do caderno que criou, a imagem, a cor, ou até mesmo, apagá-lo se necessário. Em relação as páginas do caderno, o utilizador poderá editar, apagar, armazenar fotos de exercícios e resumos e guardar breves apontamentos",
    },
    icon: Pages,
  },
  {
    title: {
      pt: "Partilhar cadernos",
    },
    description: {
      pt: "Os cadernos podem ser partilhados através da leitura de códigos Qr. Sendo assim, cada caderno será criado com seu respetivo código Qr que, com autorização do autor, pode ser partilhado com outros utilizadores",
    },
    icon: Share,
  },
  {
    title: {
      pt: "Perfil de utilizador",
    },
    description: {
      pt: "O utilizador terá a oportunidade de associar a sua conta google a aplicação e criar o seu respetivo perfil. Este perfil ira disponibilizar um conjunto de informação, que são respetivamente: Primeiro nome, último nome, e-mail, idade e Número de cadernos partilhados",
    },
    icon: User,
  },
];
