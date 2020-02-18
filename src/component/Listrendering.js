import React from 'react'

function Listrendering() {
    const persons = [
        {
            id: 1,
            name: 'aaa',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'bbb',
            age: 20,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'ccc',
            age: 25,
            skill: 'Vue'
        }
    ]
    const personList = persons.map(person => <h2>{person.id} {person.name} {person.age} {person.skill}</h2>)
    return <div> {personList} </div>
}

export default Listrendering