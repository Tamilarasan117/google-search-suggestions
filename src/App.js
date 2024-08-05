import './App.css'
import GoogleSuggestions from './components/GoogleSuggestions'

const suggestionsList = [
  {id: 1, suggestion: '2024 software job market in india'},
  {id: 2, suggestion: '2024 software job market salary'},
  {id: 3, suggestion: 'How is the IT market in india in 2024?'},
  {id: 4, suggestion: 'What jobs will be most in demand in 2024?'},
  {id: 5, suggestion: 'Which IT field is best for 2024?'},
  {id: 6, suggestion: 'What is the average salary of a software engineer in india in 2024?'},
  {id: 7, suggestion: 'Price of Ethereum'},
  {id: 8, suggestion: 'Oculus quest 2 specs'},
  {id: 9, suggestion: 'Tesla share price'},
  {id: 10, suggestion: 'Price of Ethereum today'},
  {id: 11, suggestion: 'Latest trends in AI'},
  {id: 12, suggestion: 'Latest trends in ML'},
  {id: 13, suggestion: 'What is the salary of fresher in NI in bangalore?'},
  {id: 14, suggestion: 'What is the salary of recruitment job in bangalore?'},
  {id: 15, suggestion: 'Which MNC companies are there in bangalore?'},
  {id: 16, suggestion: 'National Intsruments careers'},
  {id: 17, suggestion: 'What is the salary of CS fresher in bangalore?'},
  {id: 18, suggestion: 'What is the starting salary of NI?'},
  {id: 19, suggestion: 'What is the qualification for NI administrative offices?'},
  {id: 20, suggestion: 'National Instruments company job notification'},
  {id: 21, suggestion: 'What is the best comapny in bangalore to work in IT field?'},
  {id: 22, suggestion: 'Why work for NI?'},
  {id: 23, suggestion: 'Latest trends in NI'},
  {id: 24, suggestion: 'Latest trends in Full-Stact Development'},
  {id: 25, suggestion: 'What is the basic salary for Full-Stact-Developer in 2024?'},
]

const App = () => <GoogleSuggestions suggestionsList={suggestionsList} />

export default App
