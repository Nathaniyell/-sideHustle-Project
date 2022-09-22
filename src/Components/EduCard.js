import React from 'react'


const EduData = [
  {
    header: 'University of Uyo',
    body: 'Bachelor of Science (Chemistry)',
    date: '2018-2023',
  },
  {
    header: 'Cousera',
    body: 'Foundations of User Experience Design',
    date: 'Febuary 2022 - March 2022',
  },
  {
    header: 'W3schools',
    body: 'HTML and CSS',
    date: 'March 2022 - April 2022',
  },
  {
    header: 'freeCodeCamp',
    body: 'Responsive Web Design',
    date: 'April 2022 - May 2022',
  },
  {
    header: 'freeCodeCamp, W3schools',
    body: 'JavaScript Programming, jQuery',
    date: 'June 2022 - Present',
  },
  {
    header: 'SideHustle',
    body: 'ReactJs',
    date: 'August 2022 - September 2022',
  },
]


const EduCard = ({title, description, date}) => {
  return (
    <div className='card1'>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <p><em>{date}</em></p>
    </div>

  )
}

const eduElements = EduData.map((item)=>{
 return(
  <EduCard 
  key={Math.round(Math.random() * EduData.length)}
  title={item.header}
  description={item.body}
  date={item.date}
  />
 )
})

export default eduElements