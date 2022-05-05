import * as C from './App.styles'
import {useState} from 'react'
import {Item} from './types/Item'
import ListItem from './components/listitem'
import AddArea from './components/addarea'
const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar o pão na padaria', done: false},
    {id: 2, name: 'Comprar a padaria no pão', done: true}
  ]);

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
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de Tarefas
        </C.Header>

        {list.map((item, index)=>(
          <ListItem key={index} item={item}/>
        ))}

        <AddArea onEnter={handleAddTask}/>
      </C.Area>
    </C.Container>
  )
}

export default App;