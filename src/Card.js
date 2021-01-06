import React, { useState } from 'react'
import './Card.css';
import TinderCard from 'react-tinder-card'


const db = [  {name:'zi',
url:'https://hcti.io/v1/image/d82d3b68-32f5-41c2-8047-4b33228f8629'

},
{name:'nicolas nico silva',
url:'https://veja.abril.com.br/wp-content/uploads/2016/05/nicolas-cage-20130321-original.jpeg'

},

{name:'ariana small beltrao',
url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFxcVFRcVFRcXFRUXFxUXFhUVFRUYHSggGBolHRUVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGBAQFSslHx0tLS0tKy0tKy0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tK//AABEIAPsAyQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBQYHBAj/xABCEAABAwEFBAcECAUCBwAAAAABAAIRAwQFEiExBkFRYRMicYGRobEHMsHwQmJygpLR4fEUIzNSokOyF1Rzk8LS0//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACIRAQEAAgICAgMBAQAAAAAAAAABAhEDIRIxIkEEMnFRI//aAAwDAQACEQMRAD8Av2BTtCFrVM0K1CaFK0JmhSAIAmhG0JNCMBBnARAJAIgEGYBOAihKEAoTgJ4TwmDQlCKE8IAYShFCUIAYTQjhNCAAhKEcJoSAIShFCRCACEoRQmhMgwlhRQkmSkaFM0IGhStCgCaFK0IWqRoTAmhSAJmhGAkogEQCQCIBMFCeE4TwmAwiATwkAgFCeElHarSykw1Kjg1rRJLjAAQEkJQue232s2Vry2nTqPaPpgNg9gLgVcXFt/Y7S4MDsLzo1wg9069xKnzgaqEycGcwnVAMJoRJkAMJoRJIAYTQihJACkihKE0qZoUjQhaFI0KANoUjQhapWhBiARAJgEYTM4RAJBEEAgE8JBOgySTheO+L0pWWk6tWcGsb4k7mgbyeCKHrXJ/bJehe+lZGOENHS1M8i4nDTB7AHmOYVbtF7T7RVJbZ2ik3i6HP8NB3ysRarwqVXmpVcXPMS7flppos7lb6TbHufcz6dPpHjq8QQdVHRAIkQfh+RQ1r4qPa1r3ThENO+ODtxCgsDy14BGTtOHKFEl+x19Oxezvak1ALNWMvDSWOOro1aecZ881vQZXCLkqmlaKNQfRezwJh3+JPiu5UXLXj9a/w7e0yRThIqjAkihNCIRoTQihKEwFKEUJ0EpmhSNCBqlapEG0KUIGowgxBGEzQjAQDgIgkAiCDIBPCdKEAxyzXI9punvGqXZiiwkUW7iNOk5k68gV06/z/ACHj+4YO5xh3lKq7DYWhoy3Ln588uscWvHhL3XJ6mxz8z8+Ko7dc72atK+gxYmxoFl7/ALkBkhZeWePdXeLDL04lVoFuqBhIymBIPIc1f7QWTC8gaD1VG9q3xy3NuXLHxummsjjkN+vyfnVdxu2pipsdxaD5L54u+0ua9oJyygHgfgu8bJVMVlo8mBv4cvgtMPZX0v2J01NGtFQEJIiE0JGFJOkmRgEoRJICnYpWhRsUrVJDapAEDUYQY2owELUYCDEEQTBEEA4ThIJ0Gpdq6r20m4A0kvE4iRlBO7eo7or9IySIIyIQ7W3W20Ck1xfDX4nNbUdTxAAjNzc5EzkQvHsxYq9FhbXeHuEhrgSSWwIxkjMzPYDEmJWGc+W2uF6W1W24ThDC48tPEqvtFpL5a6i9vPIjyUW0FC0YSaDiHBuIQ1ri90+6MRAEAE88hI1VZcVa8nQ2vSZEA4ySwg6FpZBxHKZBjNTZbNK3qvJeWz9M4jGZ8Vy+9LHgc4DMA79F229+pTcd4aT4BcuuhtOvaujqtlrpjMgSMxOGDuWeHxtLknlpBfNopWmsKjXEl2cOYGlpIxOaC33mB2k5iSOC6xsNUmyt5OcPOR5FcvvqxU2WkCk0NAwy1swHOBMQeULpOwLv5BH1vPC1b8eW8p/GGeOttdTUijpKUrelApk5TJmZJOkgiShJKEBTsUzVE1ShSUGFIFG1SNQaRqMIAjCDEEYQhGEGdOEgkgPBbffHZ8+qiA1M6mI7FJejYGIbviqWz3hJksKwzusm/Hjcp0vqZBCitL4ChoWxrsh4RChtTpSyy1D8e9VS3zUxAg78lhL3sosdWnUOhaMMamD7p5iR3QtNtbbhSpuM5wSFzStbq1aiw1ajnhhIZi+iDm4TqZy14LHDHe7S5M9dLmgcQe53vYm1J7HS7yJXRNiTHSM4FrvxSPgueWT3mjc4R24hC3uxVTrj69L/ACY4A+pK1wvzjLKfFuqalUVNSrqrOGTJ0yDJJJJMiSSSQFO1ShRNUoUlEjUYQNRtQaRqMIAjCDG1GEARhBiTpgkSgKvaW09HQcd5LQOeYJ8gV4bvpNe0OaSMQDsjEzmvDtraiS2kDrn4yPSfFYC+77tVnyoVXNbnlhaY/ECuTPP/AKab4bmO3UqrmU/1/NU9svEkw0EnkqLZ20Vq1NlSo4vLmiZyz35DRamhSA3ZrDLPd00k+3O9vWPFEl3vPIH2QM48ljK9Qta2nwifj5kjuXQPaHVGJrdY6x03aCO1c4rGSSd614r0x5Z20t3vljTvaI7gdfAg9xWy2StAFQDeHuIHGRm3vA8VgritDTDZgjSfQ+JHktLddU0qrSchIPh+iPLWUGt4uwUXAwRocwp1W3dVkR3jsPz5qxaV31zwkydMlFEkkkmRJJJIClaVM1QNUzVJRK1SBRtRhBpWowgajCDGEYQBEEGIleK2WqATw3lSVKn6fmsrfN4l5LWnqAx9ogeix5eTxisMd1U3lasbzUcfqt4Z6lZajT/ibUaX0SQJ1iXRn4qzvW2ZGN3VHMnXw+KvthriFNmNwmpUc15+qxvWb3kgHsXFhLlXReo0FmuXo2jo85AkHIyAASO2JQ16FVrS4sgCTMjQb8ir6m08VnfaBbTTs3Rg51Dh+7qfSFvycOOrkjDO+nJ9pbX0tRxnU+W5Z60MzV5XoGc9dSq2vTl2Q5KcLos5tBZbOS4DjPktZdTX4NJaNxJ6p+qfondGirbnsp6dpcMgYI4gggrpezVkbgc8gddzyGBsnNzjlwGnJLK+V0eM1NqO6tqXWUt6WX0RAOX8xjdJ+sB88F02yWhr2texwc1wDmuGYIOYIKxd/wCzgFIuABMZiOO7gvL7OrzNNxsjz1DLqM7iP6lPznv55b8Odl8cmWeM9x0SUyYFJdSDymSSQRJoTpJhSsUzVAwqZqhKVqkCjapAhSRpRhRtUgQBhJ7kwUVesGiSf2CVujjwXzacLcIycdTwCxl5WkNGEaxH2Rr4q0vG2lxc7j7o9J9VnHsLyG6l2/tg+nqvO5c/KuvDHUHs9czrVVBMhjTl6795iSuo2SxNpMho/VUF32N1nNNraYnC6JIJmILoGY1H5TCsrXbziYD1SILgCNSCcLhmdBuXTxccxm77ZZ5bXDGwubbf2nHWjdTED7Tvkea11pvwDEQQAGAtyJkukg4tIgefYTzu9HFzwHZuPXeTnBOje4eZKj8jOdYw+PH7UtVvJeajZutpvH6eiszSknwUzKEh5A0kDjkInx9Vh5NNItnaBq1S4a6DtJnwzcV1u7rKKVNo0gZZZrI+z258LekImSY4cJ5j53re4IzOvFdPDh7yZcmX0rbwoYxB7Vz6+LPgrONPqvpuFZkDeNY5kTlzC6dSpA5rA7Utw1weRE8YhPmmtWJw73K2V1W4VqTag+kPA7x4r2grI7F2n+rS4EOHCCIMdmXitU0rqxvlJWPq6TJkwKSZnSSCeUwoaJkDmFO0ryWN0sYeLWnyC9QKhKdpUgULVKChSQIwowjBQBl2SzV/2/6MwNT2DT4rQVjksRaZfU/PdzPYB5Ln/Iysmp9teOd7eK1PcQSZE5Dly71c7IXSXVOkcMmjukn914q1LG/LRo467vgVt7ioBlEc81zcOHln/G2eWsVg1o1jPSd8cJUdSmCcwD2iVIEJOZ7IXoOZmr6oNY0z1olxywjIaRpwHeFiqVPE99R24SZjV2evYFstpRPU3EifsjMnz8lnqdmJpPJEY3GBvAyyJ37153L3lXTj6eS7bFiDnHQAk8yeqPNwXos9icWwBm90dkmB6K5sNkim4R/a3wIPw8lZXbZgTTH9pxH4ecoxw3Ydy0vrBZW0qbWNGTQAO4Qjq8OKknyUbRv4r0ZNRy0QyCwO2bf5lPXME95Oi3rz4fOSxu0VHFXpc3H1H6LHnm8V4e1RstVw2ln12uZ4S6fIeK3gK5/bQaFppPGjaon7LiWkeYPct80rTgvx1/jLk/baZpRKJpRhbJlElKaU8oPbKXDaG1LPRe0yHU2EH7onzkK0C+eLq2htdmGGhXexszh6rmzxDXAgLR2P2n25nvto1BvlhaT3tdA8FG0u0tKlaVy6xe1pn+rZXDnTqB3k4D1V9Yvabdz/AHn1Kf26Tj508QRs9tu1GFS2DaWxVcqdqouPDpGh34SZVwwzmMxyQo1bRY+AHPM/ScB4nId3qtZanZQN/wC6y+CS1vF8Hul7vJpH3ly/kTdjbi+z2KlLojf+3oVubOyGgcAAs5dFnGP73pBPoVpgn+PjqWjkpkDTqUdQqCp7h+dVvURQXi3G49w/Ecx5lBZrKMPifX9EVqdAnfJ8mkj1XroQAOYHpiK5ZjL3WtpqVINbHEj0P5o7gJc4ncB6/sUrVJhrcyRAHMmfyVpYLIKNMNGZ1J4netccflNeom3pM85wjAUdIb1KVuzBU0WXt7MVoZ9XP/Jaasclmg6ahdzA8DP5LPOb1Dil2togZxORMcYIPz2rSXVWxU2mZyHmJB+KotqRk3iQ5x5CQB8VZ3CCKYne1p8s0cX75Jz/AFi3BUgKiCMFbs4klJCCkg3ykkkksQSdqZO1MhkSvRZLXUpf0qj6f/Te5n+0hecIpylMnafZnaa9SymtaKr6gxODDUcXHCwQTJz96Rn/AGqwshJrifdpsdUd9txAA8AV6blsooWGjSGoY1vfEuJ7ST4pWSlDiDq84j2ACAfLxXNyX5R08c1F1dNIyJ1DZPaTJ+KuAvDdzMsX93pMD0XtW3HNROXtHWOSitOTPnhKOqVFeBhvcT5R8VWXoT2z94vhg+sQPN0nwheydTuEj0HoAvJe9OBQ5keGf/srCyWfpMIOgILvWPFc8l3pf09920MsbtTJHIH9AB3L0VDJhG8xkEmNhdMmmdE0QnKUpiUw81ufDSVQtaA1s73z3Zj0AVpfFTqwNT8/kvKKIOW5sD8/gp1ulaoNoZeHOOXU7wCQG9/vnv5K5u1kU2fZaPJZ+97Xjr1qYkjooHDEyXf+bh91aeg2ABwCOOd2pz9ROEYQIgVsiDCdBKUpG+VkkkliZJ2oU4QKML0WCyOrVGUm61HNZ+IxPdr3Lyhav2Z2XpLewx/TY+p3gBg/3qku5WCyAtZOjQIHz3IbXQ/mBrRm7UjcNPifJWFjIDQFM8ZSouEreVIxsaaQjJQtKRKskLjmmttPEIT09Spka2FBfTJrUW8A7xloCvbJRwN5nM9qgFlBq9IfojCO0nMr1HNTjjq2nb0RKcJBqJWRIXFPKirOgIJV2t0vJ3Mjx1PwUFvtraFnfWfpTa57vWBz0CZtSc+JxHsnL4LlntR2uFU/wdF0sa6azho57dGA8GnM8wOBRfSNvTd1+U3OfWxENc17zi96Jl0hs566cVvLDtRYasCna6JJ3F4a78LoK+e6docN+4iOREH1URU4Tx2WV2+omOBEgyOI0RAr5gstqqUjNKo+meNN7mH/ABIV5Y9ubxpxhtT3AbqgbU8S4E+a08ifQkpLi9i9rFsb/UpUKg5BzHeIcR5Kw/4wO/5If98//NHlDcwSSTLIyThMnCAcLc+x5w/j3A76FQDtx0j6ArChXWxt6/wtso1T7uLA/wCy8YSe6Qe5Mvt9IUBCOpkNP3UdNh4qYkQRy0TapWFKockFI5JVzkgFS0R4kDNE1N0ajVATAow5MCkmDylKZJAKV4L3rYWHich2nL4r3SsltteLqdNxYA5zWueAdOq0nNBZXpivaFtcaA/hqDoquHXcP9NpGQH1iPDXeFypHXruqOdUe4uc8lznHUk5koFO9s9EE6ZJMHTJJIBJJJKTMkkkkCSSSTB1qfZ5cX8VaC4+5QaKjubp6jfIn7qyq6n7F3NbTtDvpF7AfshpI83OQI6tZXy0dg9F6CJCr7K6JiSN2X5r2STrl6qmgaLyHFpAjcZ8VLXOi8r6oaQYymCVPVdn2JBIERChs7i7MiANOfONynDkwdiMFRxwThyYElKGUznIAK9WAsjeI6Vtd0T/AC3sHgcXnA7lfXlWhpjX1JyA8VVMYGswHhmeJPvFNGT5yZoE69t9UQyvVYNA74AnzJXiWZEnTJ0wSSZJAJJJJIEkkkkCSSSQCWg2K2jNirhxk0nw2qBrG545tk9oJWfSTD6Zu+8GVQDTe1zXDEC0yI5FWTFw32P1XC2uaD1XUXEjcSHsg+Z8V26kU1xJVaCCCARzVZd1CsGnpqgeZdhhuHqScGLPN0RJyHJey1OyUm5BpLO5Sl/JQWcRK9BVEHpQmNYJPCAtCAfpkJenhRWkw0kcCgnjqw52vu59pP5a+Cy+2u0FOyUSZmocmNnMnnwHNW9trObSc5pghpI7eK4TfNqfVJfUcXOOZJ4lxn0CVukq2pULiXOMkkkniTmUKSSkEkkkgEkkkgEkmTpB/9k='
},

{name:'beyonce the beyonce',
url:'https://upload.wikimedia.org/wikipedia/commons/1/17/Beyonc%C3%A9_at_The_Lion_King_European_Premiere_2019.png'

},

{name:'davey havok',
url:'https://upload.wikimedia.org/wikipedia/commons/f/f9/Davey_Havok_2011.png'

},

]





function Card() {
    const [people, setpeople] = useState(db);

  {/* functions */}
  
  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    //setLastDirection(direction)
    //alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    //personsState = personsState.filter(person => person.name !== name)
    //setpersons(personsState)
  }



    return (
        <div className = 'card'>
           < div className='tinderCard_container'>
               {people.map((person) =>(
                 <TinderCard
                    className = 'swipe'
                    key={people.name}
                    onSwipe = { (direction) => swiped(direction, person.name)}
                    onCardLeftScreen = {()=> outOfFrame(person.name)}
                    >
                     <div  style={{ backgroundImage: `url(${person.url})` }} className='cards'>
                    
                      <h3>{person.name}</h3>
                     
                     </div>        
                 </TinderCard>  
               ))}
           </div>
            
        </div>
    )
}

export default Card;
