import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'


function App() {
    return (
        <div>
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title">
                    Personal Digital Assistantsry hero
                    </p>
                </div>
            </section>

            <div className="container">
                <section className='section'>
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                                title='taaaa' 
                                handle='haaaa' 
                                image={AlexaImage} 
                                description="bla bla bla bla bla bla bla bla"  />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title='tbbbb' 
                                handle='hbbbb' 
                                image={CortanaImage} 
                                description="bli bli bli bli bli bli bli bli"
                                />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title='tcccc' 
                                handle='hcccc' 
                                image={SiriImage} 
                                description="blo blo blo blo blo blo blo "
                                />
                        </div>
                    </div>
                </section>
            </div>


            
            
            

        </div>
    );
}

export default App;