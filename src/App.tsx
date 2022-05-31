import './assets/fonts/fira-code/fira-code.css'
import './App.css'
import { HeaderComponent } from './components/header/header.component'
import { Summary } from './components/summary/summary.component';
import { ProjectList } from './components/project-list/project-list.component';
import { ProjectListProps } from './components/project-list/project-list.props';

const projectsList: ProjectListProps['list'] = [
  { url: 'https://tictactoe.yemolai.com', label: 'Tic tac toe' },
  { url: 'https://tictactoe.yemolai.dev', label: 'Tic tac toe' },
  { url: 'https://tictactoe.romulogabriel.com', label: 'Tic tac toe' },
  { url: 'https://tictactoe.romulogabriel.dev', label: 'Tic tac toe' },
]

function App() {
  return (
    <main className="App">
      <HeaderComponent />
      <div id="content">
        <aside className="text-align-right">
          <ProjectList list={projectsList} />
        </aside>
        <article>
          <Summary />
        </article>
      </div>
    </main>
  )
}

export default App
