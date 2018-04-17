import React from 'react'
import { Button, Header, Icon, Modal,Segment,Label } from 'semantic-ui-react'
import Link from 'gatsby-link';

import pic04 from '../assets/images/pic04.jpg'
import ContactForm from './ContactForm'

class Section4 extends React.Component {
   state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

    render() {

       const { open, size } = this.state

        return (
          <div className="container">
              <header className="major">
                  <h2 className="h2_contact">CONTACT US NOW FOR A FREE DEMO AND QUOTATION</h2>
              </header>
              <ul className="actions uniform">
                <li><Button className="button special" onClick={this.show('large')}>CONTACT</Button></li>
                <li><Button href="#" className="button ">LEARN MORE</Button></li>
              </ul>

               <div>
                <Modal size={size} open={open} onClose={this.close}>
                  <Modal.Header> 
                  </Modal.Header>
                  <Modal.Content>
                    <Segment color='teal'>
                        <ContactForm/>
                </Segment>
                  </Modal.Content>
                  <Modal.Actions>
                  </Modal.Actions>
                </Modal>
              </div>
              
          </div>
        )
    }
}

export default Section4
