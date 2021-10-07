export interface FlavorText {
    language: Language;
    version: Version;
  }
  
interface Language {
    name: string;
    url: string;
}

interface Version {
    name: string;
    url: string;
}