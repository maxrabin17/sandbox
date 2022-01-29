import {useState} from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import './App.css';
import React from 'react';
import EventList from './components/EventList';


function App() {

  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const subtitle = "All the latest events in Marioland"

  return (
    <div className="App">
        <Title title="Events in your area" subtitle ={subtitle}/>
        {showEvents && (
          <div>
            <button onClick={() => setShowEvents(false)}>Hide Events</button>
          </div>
        )}
        {!showEvents && (
          <div>
            <button onClick={() => setShowEvents(true)}>Show Events</button>
          </div>
        )}
        {showEvents && <EventList events={events} handleClick={handleClick}/>}
        {/* <Modal>
          <h2>10% Off Coupon Code!!</h2>
          <p>Use the code NINJA10 at the Checkout</p>
        </Modal> */}
        {showModal && <Modal handleClose={handleClose} isSalesModal={true}>
          <h2>Terms and Conditions</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ipsam vel debitis perspiciatis aperiam nesciunt delectus cum odit temporibus commodi nisi culpa nam quasi velit, exercitationem animi quae! Beatae, aperiam?</p>
        </Modal>}
        {!showModal && (<button onClick={() => setShowModal(true)}>Add New Event</button>)}
    </div>
  );
}

export default App;
