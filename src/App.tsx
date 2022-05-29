import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css"
import * as C from './App.styles'
import {useState} from 'react'
import {Item} from './types/Item'
import { ThemeProvider } from 'styled-components'
import light from './themes/light'
import dark from './themes/dark'
import GlobalStyle from './global'
import ListItem from './components/listitem'
import AddArea from './components/addarea'
import  Button from './components/themebutton'
import usePersistedState from './util/usePersistedState'

const App = () => {
  const [list, setList] = useState<Item[]>([]);
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  const handleAddTask = (taskName : string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }
  return(
    <ThemeProvider theme={theme}>
    <C.Container>
      <GlobalStyle/>
      <C.Area>
        <C.Header>
          Lista de Tarefas
          <Button toggleTheme={toggleTheme}/>
        </C.Header>

        {list.map((item, index)=>(
          <ListItem key={index} item={item}/>
        ))}

        <AddArea onEnter={handleAddTask}/>
      </C.Area>
    </C.Container>
    </ThemeProvider>
  )
}

export default App;