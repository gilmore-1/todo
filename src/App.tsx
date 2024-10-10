import TodoCard from './components/TodoCard/TodoCard'

const App = () => {
  return (
    <>
      <div className='flex flex-row justify-center items-center gap-52'>
        <h1 className='text-[#007FDB] font-mono text-8xl font-bold'>Todo</h1>
        <TodoCard />
      </div>

    </>
  )
}

export default App