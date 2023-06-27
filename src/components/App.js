import React, { useState, useEffect } from 'react';
import Container from './Container';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts'))
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  const filterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const addContact = newContact => {
    if (
      contacts.find(
        ({ name }) =>
          newContact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts([...contacts, newContact]);
  };

  const getFilteredList = () => {
    if (contacts.length === 0) return [];

    const optimizedFilter = filter.toLocaleLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(optimizedFilter)
    );
  };

  const removeContacts = removeId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== removeId));
  };

  return (
    <>
      <Container title="Phonebook">
        <Form addContact={addContact} />
      </Container>
      <Container title="Contacts">
        <Filter filter={filter} filterChange={filterChange} />
        <Contacts
          contacts={getFilteredList()}
          removeContacts={removeContacts}
        />
      </Container>
    </>
  );
}

export default App;

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contactsParse = JSON.parse(localStorage.getItem('contacts'));
//     if (contactsParse) this.setState({ contacts: contactsParse });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   filterChange = e => {
//     this.setState({ [e.currentTarget.name]: e.currentTarget.value });
//   };

//   addContact = newContact => {
//     if (
//       this.state.contacts.find(
//         ({ name }) =>
//           newContact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
//       )
//     ) {
//       alert(`${newContact.name} is already in contacts.`);
//       return;
//     }

//     this.setState({
//       contacts: [...this.state.contacts, newContact],
//     });
//   };

//   getFilteredList = () => {
//     if (this.state.contacts.length === 0) return [];
//     const { filter, contacts } = this.state;

//     const optimizedFilter = filter.toLocaleLowerCase().trim();

//     return contacts.filter(({ name }) =>
//       name.toLocaleLowerCase().includes(optimizedFilter)
//     );
//   };

//   removeContacts = removeId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(({ id }) => id !== removeId),
//     }));
//   };

//   render() {
//     return (
//       <>
//         <Container title="Phonebook">
//           <Form addContact={this.addContact} />
//         </Container>
//         <Container title="Contacts">
//           <Filter filter={this.state.filter} filterChange={this.filterChange} />
//           <Contacts
//             contacts={this.getFilteredList()}
//             removeContacts={this.removeContacts}
//           />
//         </Container>
//       </>
//     );
//   }
// }

// export default App;
