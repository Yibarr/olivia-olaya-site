enum Sections {
    LANDING,
    PORTFOLIO,
    ABOUT,
    CONTACT
  }

  type SectionsStrings = keyof typeof Sections;   

  export default SectionsStrings