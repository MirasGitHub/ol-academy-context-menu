import React, { useEffect, useRef } from "react";


const ContextMenu = ({ handleClose, top, left, context }) => {

    const contextMenuRef = useRef(null);
  
    useEffect(()=> {
  
      const handleRightMouseClick = (e) => {
        console.log("right mouse clicked");
  
        e.preventDefault();  
        if(contextMenuRef.current){
          if(!contextMenuRef.current.contains(e.target) ){
            handleClose();
          }
        }
        
      }
  
      
  
      const handleClick = (e) => {
        if(contextMenuRef.current){
          if(!contextMenuRef.current.contains(e.target)){
            handleClose();
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
      top: top,
      left: left,
    }
  
    return (
      <div>
          <div style={styles} ref={contextMenuRef}>
  
            {
              context
            }
  
          </div>
      </div>
       
    )
  
  
    
  }

  export { ContextMenu };