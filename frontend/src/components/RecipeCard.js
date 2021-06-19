import { React, useState } from 'react'
//import { Link } from 'react-router-dom'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components/macro'

const rand = () => {
  return Math.round(Math.random()*20)-10
}

const getModalStyle = () => {
  const top = 50 + rand()
  const left = 50 + rand()
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const RecipeCard = ({ _id, title, imageUrl }) => {

  const classes = useStyles()

  const [modalStyle] = useState(getModalStyle)
  const [modalOpen, setModalOpen] = useState(false)

  const handleModalOpen = () => {
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h1>Modal open</h1>
    </div>
  )

  return (
   
      <RecipeWrapper>
        <Link onClick={handleModalOpen}>
        {/* <Link to={`/recipes/${_id}`}> */}
          <IMG 
            src={imageUrl}
            alt={title}
          />
          <Text>{title}</Text>
        </Link>

        <Modal
          open={modalOpen}
          onClose={handleModalClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
        {body}

        </Modal>  
        {/* </Link> */}
      </RecipeWrapper>
    
  )
}

export default RecipeCard

const RecipeWrapper = styled.div`
  
  ${'' /* margin: 30px auto;
  padding: 20px;
  margin: 20px;
  width: 250px;
  height: 250px; */}
  position: relative;
  overflow: hidden;
  width: 33.333%;
`
// const Imagecontainer = styled.div``

const Link = styled.div`
  border: none;
  background: none;
  padding: 0;
`

const Text = styled.p`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-size: 32px;
  text-align: center;
  padding: 12px;
  transition: all 0.5s ease;

  :hover {
    background: rgba(0, 0, 0, 0.7);
    opacity: 1;
  }  
`

const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
