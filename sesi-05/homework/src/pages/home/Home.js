import { Container } from "react-bootstrap"
import MeetUp from "./MeetUp"
import NextMeetUp from "./NextMeetUp"
import AboutMeetUp from "./AboutMeetUp"
import Members from "./Members"
import PastMeetUp from "./PastMeetUp"

export default function Home() {
  return (
    <>
      <Container className="mt-3">
        <MeetUp />
        <NextMeetUp
            title='Awesome meetup and event!' 
            date='25 January 2019' 
            value="Hello, JavaScript & Node.js Ninjas!
                    Get ready for our montly meetup JakartaJS! This wil be our fifth meetup of 2018!
                    The meetup format will contain some short stories and technical talks.
                    If you have a short announcement you'd like to share with the audience, 
                    you may do so during open mic announcements.
                    Remember 1o bring a photo ID to get through building security.
                    
                    -----
                    See you there!
                    BestHengki, Giovanni, Sofian, Riza, Agung The JakartaJs Organizers"
        />
        <AboutMeetUp
            value='Come and meet other developers interested in the JavaScript and 
                    its library in the Greater Jakarta area.' 
            hastag='Twitter: @JakartaJS and we use the hashtag #jakartajs' 
        />
        <Members />
        <PastMeetUp />
      </Container>
    </>
  )
}
