import React, { useEffect, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListsPage.css'


const ContextMenu = (props) => {

  const contextMenuRef = useRef(null);

  useEffect(()=> {

    const handleRightMouseClick = (e) => {
      console.log("right mouse clicked");

      e.preventDefault();  
      if(contextMenuRef.current){
        if(!contextMenuRef.current.contains(e.target) ){
          props.handleClose();
        }
      }
      
    }

    

    const handleClick = (e) => {
      if(contextMenuRef.current){
        if(!contextMenuRef.current.contains(e.target)){
          props.handleClose();
        }
      }
    }

    

     document.addEventListener('contextmenu', handleRightMouseClick);
     document.addEventListener('click', handleClick);
    


    return() => {

      document.removeEventListener('click', handleClick);

      document.removeEventListener('contextmenu', handleRightMouseClick);
  
    }



    }, [])

  const styles = {
    position: 'absolute',
    width: '150px',
    height: '180px',
    backgroundColor: 'pink',
    textAlign: 'center',
    paddingTop: '5px',
    color: "2F323A",
    borderRadius: '5px',
    top: props.top,
    left: props.left,
  }

  return (
    <div>
        <div style={styles} ref={contextMenuRef}>

          {
            props.context
          }

        </div>
    </div>
     
  )


  
}

const ListItem = (props) => {

  

  /* 
  <li style={{backgroundColor: '#DAFFEF', margin: '8px'}}>Task 1</li>
            <li style={{backgroundColor: '#D0FFD6', margin: '8px'}}>Task 2</li>
            <li style={{backgroundColor: '#D5E2BC', margin: '8px'}}>Task 3</li>
            <li style={{backgroundColor: '#A6979C', margin: '8px'}}>Task 4</li>
            <li style={{backgroundColor: '#D3C0D2', margin: '8px'}}>Task 5</li>
            */

  return (
    <div>
      <ul>
      {
        props.listItems.map(listItem => {
          <li key={listItem.id}>
            <span>{listItem.text}</span>
            hi
          </li>
        })
      }
      </ul>
    </div>
  )
}

const ListsPage = (props) => {

  const listItems = [
    {
      id: 1,
      text: 'text 1',
    },
    {
      id: 2,
      text: 'text 2',
    },
    {
      id: 3,
      text: 'text 3',
    },
    {
      id: 4,
      text: 'text 4',
    },
    {
      id: 5,
      text: 'text 5',
    },
  ];

// show the context menu
  const [isShow, setIsShow] = useState(false);

//Set the Context Menu Location on the list items
  const [points, setPoints] = useState({
    x: 50,
    y: 50,
  })

  const [context, setContext] = useState('')

  const handleEdit = () => {
    console.log("Edit")
  }

  const handleRemove = () => {
    console.log("remove")
    setIsShow(false)
  }

  //Style ot the List Item
  const listItemStyle = {
    backgroundColor: '#E39EC1',
    borderRadius: '3px',
    padding: '10px',
    margin: '5px',
  }

  

  return (
    <div>

      <div className='context-menu'>
        <h1 style={{color:'#C47AC0', textAlign: 'center'}}>Context Menu Task</h1>

          {
          isShow && 
            <ContextMenu 
              context={context}
              listItems={listItems}
              key={listItems.id} 
              handleClose={()=> setIsShow(false)} 
              handleClick={props.handleClick} top={points.y} left={points.x}> 
            </ContextMenu>
          } 

      </div>

          <ul>
            {
              listItems.map((item) => {
               return (
                <li key={item.id} style={listItemStyle}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setIsShow(true);
                  setPoints({
                    x: e.pageX,
                    y: e.pageY,
                  });
                  setContext(item.text)
                  console.log(item.text)
                  }} 
                >

                  {item.text}

                </li>
               )
              })
            }
          </ul>

        <div className='btnsContainer'>
          <button onClick={handleEdit} className='btn btn-info'>Edit</button>
          <button onClick={handleRemove} className='btn btn-danger'>Remove</button>
        </div>
    </div>
  )
}



export default ListsPage;