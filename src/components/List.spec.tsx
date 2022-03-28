import {queryByText, render, waitFor  , screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {List} from './List'

describe('List Component' , ()=>{
  it('should render list items' , async  ()=> {
    const {getByText , rerender , queryByText} = render(<List initalItems={["Diego" , "Rodz" , "Maik"]}/>)
    
    expect(getByText('Diego')).toBeInTheDocument()
    expect(getByText('Rodz')).toBeInTheDocument()
    expect(getByText('Maik')).toBeInTheDocument()


    await rerender(<List initalItems={["Jullia" ]}/>)

    expect(screen.getByText('Julia')).toBeInTheDocument()
    expect(screen.queryByText('Maik ')).not.toBeInTheDocument()

  })

  it('should be able to add new item to the list', async ()=> {
    const {getByText , getByPlaceholderText , findByText} = render(<List initalItems={[]}/>)

    const inputElement = getByPlaceholderText('Novo item')
    const addButton = getByText('Add new name')


    userEvent.type(inputElement , 'Novo')

    userEvent.click(addButton)
    
    await waitFor(()=> {
      
      expect(getByText('Novo')).toBeInTheDocument()
    })



  })


  it('should be able to remove new item to the list', async ()=> {
    const { getAllByText , queryByText,  } = render(<List initalItems={["Diego" , "Rodz" , "Maik"]}/>)

    const removeButtons = getAllByText("Delete")


    userEvent.click(removeButtons[0])
    
    await waitFor(()=> {
      
      expect(queryByText('Diego')).not.toBeInTheDocument()
    })



  })
})