import React from "react"
import classes from './ErrorModal.moduel.css'
import Card from "./Card"
const ErrorModal = (props) =>{
    return (
        <Card  className = {classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
               <button>Okay</button>
            </footer>
        </Card>
    )

}

export default ErrorModal