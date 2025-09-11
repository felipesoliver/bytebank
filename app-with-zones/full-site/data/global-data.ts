// ACCOUNT

export const accountData = {
  title: 'Minha conta',
  nameLabel: 'Nome',
  firstName: 'Joana',
  lastName: 'da Silva Oliveira',
  emailLabel: 'Email',
  email: 'joanadasilvaoliveira@email.com.br',
  passLabel: 'Senha',
  imageAlt: 'Interface de transações financeiras com elementos gráficos em blocos nos cantos inferior esquerdo e superior direito',
  balance: 2500,
  cta: {
    text: 'Salvar alterações',
    variant: 'orange',
  },
}

// HEADER

export const headerData = {
  loggedOutMenu: [
    {
      text: 'Sobre',
      url: '/#about',
      blank: false,
    },
    {
      text: 'Serviços',
      url: '/#services',
      blank: false,
    },
  ],
  loggedInMenu: [
    {
      text: 'Inicio',
      url: '/',
      blank: false,
      mf: false,
    },
    {
      text: 'Transferências',
      url: '/transfers',
      blank: false,
      mf: false,
    },
    {
      text: 'Investimentos',
      url: '/investments',
      blank: false,
      mf: true,
    },
    {
      text: 'Outros serviços',
      url: '/services',
      blank: false,
      mf: false,
    },
  ],
  subscribeCta: {
    text: 'Abrir conta',
    variant: 'green',
  },
  loginCta: {
    text: 'Já tenho conta',
    variant: 'green-inverted',
  },
  profileMenu: [
    {
      text: 'Minha conta',
      url: '/account',
      blank: false,
    },
    {
      text: 'Configurações',
      url: '/account',
      blank: false,
    },
    {
      text: 'Sair',
      url: '/',
      blank: false,
    },
  ],
}

// FOOTER

export const footerData = {
  servicesTitle: 'Serviços',
  servicesLinks: [
    {
      text: 'Conta corrente',
      url: '/',
      blank: false,
    },
    {
      text: 'Conta PJ',
      url: '/',
      blank: false,
    },
    {
      text: 'Cartão de Crédito',
      url: '/',
      blank: false,
    },
  ],
  contactTitle: 'Contato',
  contactLinks: [
    {
      text: '0800 004 250 08',
      url: 'tel:080000425008',
      blank: true,
    },
    {
      text: 'meajuda@bytebank.com.br',
      url: 'mailto:meajuda@bytebank.com.br',
      blank: true,
    },
    {
      text: 'ouvidoria@bytebank.com.br',
      url: 'mailto:ouvidoria@bytebank.com.br',
      blank: true,
    },
  ],
  copyrightTitle: 'Desenvolvido por Alura',
  socialsLinks: [
    {
      type: 'instagram',
      url: 'https://www.instagram.com/bytebank/',
      blank: true,
    },
    {
      type: 'whatsapp',
      url: 'https://api.whatsapp.com/send?phone=5500000000000',
      blank: true,
    },
    {
      type: 'youtube',
      url: 'https://www.youtube.com/bytebank',
      blank: true,
    },
  ],
}

// BANK STATEMENT

export const bankStatementData = {
  title: 'Extrato',
  subtitle: 'Editar transações:',
  transactions: [
    {
      date: '18/06/2025',
      month: 'Junho',
      amount: 150,
      type: 'deposit',
    },
    {
      date: '21/06/2025',
      month: 'Junho',
      amount: 100,
      type: 'deposit',
    },
    {
      date: '21/06/2025',
      month: 'Junho',
      amount: 50,
      type: 'deposit',
    },
    {
      date: '21/06/2025',
      month: 'Junho',
      amount: 500,
      type: 'deposit',
    },
  ],
}

// 404

export const notFoundData = {
  title: 'Ops! Não encontramos a página... ',
  description:
    'E olha que exploramos o universo procurando por ela! Que tal voltar e tentar novamente?',
  cta: {
    text: 'Voltar para o início',
    url: '/',
    blank: false,
  },
}

// HOME LOGGED-OUT

export const loggedOutData = {
  description:
    'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!',
  subtitle: 'Vantagens do nosso banco:',
  features: [
    {
      icon: 'box',
      title: 'Conta e cartão gratuitos',
      description:
        'Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.',
    },
    {
      icon: 'money',
      title: 'Saques sem custo',
      description:
        'Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.',
    },
    {
      icon: 'star',
      title: 'Programa de pontos',
      description:
        'Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!',
    },
    {
      icon: 'devices',
      title: 'Seguro Dispositivos',
      description:
        'Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.',
    },
  ],
}

// DAHBOARD HERO

export const dashboardHeroData = {
  amountLabel: 'Saldo',
  accountLabel: 'Conta corrente',
}

// TRANSACTIONS

export const transactionsData = {
  title: 'Nova transação',
  placeholderSelect: 'Selecione o tipo de transação',
  placeholderInput: '00,00',
  placeholderDate: 'Selecione a data',
  transactionType: [
    {
      label: 'Depósito',
      value: 'deposit',
    },
    {
      label: 'DOC/TED',
      value: 'transfer',
    }
  ],
  imageAlt:
    'Imagem de mulher com cartão de crédito. A mulher está segurando o cartão com a mão esquerda e está olhando para o lado direito. A imagem está em um fundo cinza.',
}

// INVESTMENTS

export const investmentsData = {
  title: 'Investimentos',
  total: 50000,
  sectionTitle: 'Estatítiscas',
  rates: [
    {
      title: 'Renda Fixa',
      price: 36000,
    },
    {
      title: 'Renda Variável',
      price: 14000,
    },
  ],
}

// SERVICES

export const servicesData = {
  title: 'Confira os serviços  disponíveis',
  cards: [
    {
      subtitle: 'Empréstimo',
      type: 'loan',
    },
    {
      subtitle: 'Meus cartões',
      type: 'card',
    },
    {
      subtitle: 'Doações',
      type: 'donation',
    },
    {
      subtitle: 'Pix',
      type: 'pix',
    },
    {
      subtitle: 'Seguros',
      type: 'insurance',
    },
    {
      subtitle: 'Crédito celular',
      type: 'cellphone',
    },
  ],
}
