// fr-CA.js with French translations
export default {
  hello: 'Bonjour',
  dts: 'dts-rmpFrench',
  welcome: 'preuve de concept du portail de gestion des relations!',
  getstarted: 'Commencer',
  form: {
    required: 'Champs Obligatoires'
  },

  // header
  header: {
    logoAlt: 'Gouvernement du Canada',
    linkAlt: 'Lien vers le site du gouvernement du Canada',
    homeAlt: "Lien vers la page d'acceuil RMP",
    link: 'https://www.canada.ca/fr.html',
    dashboard: 'Tableau de bord',
    logout: 'Se déconnecter',
    personIcon: "icône d'utilisateur"
  },

  // footer
  footer: {
    date: 'Date de dernière modification:',
    site: 'À propos de ce site',
    social: 'Médias sociaux',
    mobile: 'Applications mobiles',
    about: 'À propos de Canada.ca',
    terms: 'Avis',
    privacy: 'Confidentialité',
    dts: 'Solutions technologiques numériques',
    symbol: 'Symbole du gouvernement du Canada',
    top: 'Haut de page'
  },

  // app
  app: {
    dts: 'Portail de Gestion des Relations',
    welcome: 'relationship management portal proof of concept!',
    search: 'Recherche',
    add: 'Ajouter'
  },

  // error pages
  error: {
    fourofour: 'Erreur 404',
    fourofourmessage: 'Oops! Nous ne pouvons trouver cette page Web',
    fivehundred: 'Erreur 500',
    fivehundredmessage:
      'Désoler...Quelque chose s’est mal passé. S’il vous plaît essayer à nouveau plus tard.',
    buttontext: "Aller à la page d'accueil"
  },
  // contact
  contact: {
    // titles
    create: 'FR-Create new contact',
    contact: 'FR-Contact Information',
    organization: 'FR-Organization Information',
    engagements: 'FR-Engagements',
    // fields
    type: 'FR-Contact Type',
    keyContactName: 'FR-Full Name',
    keyContactTitle: 'FR-Title',
    keyContactEmail: 'FR-Email',
    orgEmail: 'FR-Email',
    address: 'FR-Address',
    address2: 'FR-Apt / suite / etc.',
    city: 'FR-City',
    provState: 'FR-Province / State',
    country: 'FR-Country',
    postal: 'FR-Postal Code',
    phone: 'FR-Phone',
    orgWebsite: 'FR-Organization Website',
    department: 'FR-Department',
    branch: 'FR-Branch',
    directorate: 'FR-Directorate',
    provTerritory: 'FR-Province / Territory / Indigenous territory',
    orgName: 'FR-Oranization Name',
    orgSector: 'FR-Organization Sector',
    contrib: 'FR-Contribution Agreement Reference',
    service: 'FR-Service Contract',
    standing: 'FR-On standing offer list ?',
    // Options
    Federal: 'FR-Federal',
    External: 'FR-External',
    Provincial: 'FR-Provincial',
    International: 'FR-International',
    //
    selSector: 'fr-Select a Sector',
    notProfit: 'FR-Not for profit organizations, Municipal governements, Indigenious organizations',
    forProfit: 'FR-For-profit organizations',
    provGovCorp: 'FR- Provincial and territorial government Insititutions agencies and crown corporations',
    fedGovDept: 'FR- Federal government departments and agencies and other publicly funded entities',
    //
    selProvince: 'FR-Select a province',
    AB: 'fr-Alberta',
    BC: 'fr-British Columbia',
    MB: 'fr-Manitoba',
    NB: 'fr-New Brunswick',
    NFL: 'fr-Newfoundland and Labrador',
    NS: 'fr-Nova Scotia',
    ON: 'fr-Ontario',
    PEI: 'fr-Prince Edward Island',
    QC: 'fr-Quebec',
    SK: 'fr-Saskatchewan',
    NWT: 'fr-Northwest Territories',
    NU: 'fr-Nunavut',
    YK: 'fr-Yukon',
    //
    true: 'Oui',
    false: 'No',
    // buttons
    cancel: 'FR-Cancel',
    save: 'Sauvegarder',
    back: 'Retour', // We can say Retourner as well
    edit: 'Modifier',
    // view contact
    otherpeople: 'FR-other participants'
  },

  contactValidation: {
    errorListTitle: 'FR-The following fields have errors:',
    required: 'FR-This field is required',
    invalidEmail: 'FR-Not a valid email address'
  },

  // Navigation search Component
  NavBtn: {
    AddConEn: 'Ajouter des contacts et des engagements',
    SearchConEn: 'Rechercher des contacts et des engagements'
  },
  // engagement
  engagement: {
    engagment: 'Engagement',
    contactName: 'Nom du contact',
    subject: 'Matière',
    type: "Type d'engagement",
    date: 'Date',
    participants: 'Nombre de participants',
    numParticipants: 'Participants',
    description: 'Description',
    editDescription: 'Description',
    editDescriptionCount: '1000 caractères maximum. Les caractères supplémentaires ne seront pas enregistrés.',
    policy: 'Politique / programme',
    tags: 'Mots clés',
    tagLabel: 'Commencez à taper et sélectionnez la balise existante ou appuyez sur Entrée pour ajouter de nouvelles balises',
    comments: 'Commentaires',
    editComments: 'Commentaires ',
    editCommentsCount: '140 caractères maximum. Les caractères supplémentaires ne seront pas enregistrés.',
    cancel: 'Annuler',
    save: 'Sauver',
    edit: 'Modifier',
    typing: 'Commencez par taper',
    // view contact card
    engagement: 'FR-Engagement :',
    contacts: 'FR-Contact(s) :',
    numpeople: 'FR-Number of participants :',
    otherParticipants: 'autres participants',
    selectContact: 'Sélectionnez un contact',
    notFound: 'FR-No Engagement found',
    leaveComment: 'Laissez un commentaire...',
    charactersCount: 'caractères restants '
  },
  engagementValidation: {
    messageTitle: 'Les champs suivants contiennent des erreurs',
    required: 'Ce champ est requis',
    maxTags: 'Vous ne pouvez pas créer plus de 3 balises',
    maxTagLength: 'La longueur du texte ne doit pas dépasser 10 caractères',
    maxDescription: 'La description ne peut pas dépasser 1 000 caractères',
    maxComment: 'Le commentaire ne peut pas dépasser 140 caractères',
    minParticipant: 'Vous ne pouvez pas avoir moins de 1 participant',
    validDate: 'Veuillez choisir une date',
    duplicateTags: 'La balise existe déjà, veuillez entrer un autre nom de balise',
    duplicateContacts: 'Le contact existe déjà, veuillez sélectionner un autre nom de contact'
  },
  // EngSelectContact component
  engSelect: {
    engagement: 'Nouvel engagement',
    contact: 'Contact',
    contact2: 'Numéro de contact 2',
    remove: 'Retirer',
    add: 'Ajouter plus de contacts'
  },
  engagementTypes: {
    one: 'FR-One-on-one',
    Conference: 'FR-Conference',
    ConferenceCall: 'FR-Conference call',
    Workshop: 'FR-Workshop',
    Webinar: 'FR-Webinar',
    PhoneCall: 'FR-Phone call',
    CommitteeMeeting: 'FR-Committee meeting',
    WorkingGroup: 'FR-Working group',
    SeniorManagementBriefing: 'FR-Senior management briefing',
    MinisterOfficeBriefing: 'FR-Minister office briefing',
    ScrumSprint: 'FR-Scrum/Sprint',
    Advisory: 'FR-Advisory board/Council Meeting'
  },
  dashboard: {
    title: "Tableau de bord d'engagement",
    download: 'Télécharger le PDF',
    // time
    sixMonths: 'Dernier 6 mois',
    threeMonths: 'Dernier 3 mois',
    lastMonth: 'Dernier mois',
    // subjects
    allSubjects: 'FR-All Subjects',
    EIData: 'FR-EI Data',
    CERB: 'FR-CERB',
    HomelessGrants: 'FR-Homeless Grants',
    // organisations
    AllOrganisations: 'FR-All Organisations',
    RBC: 'FR-RBC',
    StatsCan: 'FR-Stats Canada',
    CRA: 'FR-CRA',
    BMO: 'FR-BMO',
    OntarioGov: 'FR-Ontario Gov',
    OttawaMission: 'FR-Ottawa Mission'
  }
}
