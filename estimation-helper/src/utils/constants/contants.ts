export const URL = {
PROD: 'https://p-gen-v.vercel.app/api/estimate',
LOCAL:"http://localhost:8080/estimate",
GENAI_LOCAL:"https://p-gen-v.vercel.app/api/hello",
GENAI_PROD_vercel:'https://p-gen-v.vercel.app/api/hello',
NEWS:`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ddbe92629c7747f1b7d49e205642eea3`
}

export const EmbeddedUrls = {
  IPACE:'https://ipace.w.moravia.com/Login'
}

export const initialFormData = {
    effortDays: 0,
    numberOfResource: 0,
    numberOfTester: 0,
    numberOfProjectManager: 0,
    projectName: '',
    assumptions: [''],
    queries: [''],
  }

  export interface ApiData {
    [key: string]: string;
}