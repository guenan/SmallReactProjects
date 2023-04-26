import Button from "../components/Button";
import {GoBell, GoDatabase, GoCloudDownload} from 'react-icons/go';

function ButtonPage() {
    return <div>
                <div>
                    <Button warning >
                        <GoBell />
                        click me
                        
                    </Button>
                </div>
                <div>
                    
                    <Button success>
                        <GoDatabase />
                        Hi there 
                    </Button>
                </div>
                <div>
                    
                    <Button secondary>
                        <GoCloudDownload />
                        see deal 
                    </Button>
                </div>
                <div>
                    <Button primary rounded outline>something</Button>
                </div>
            </div>
}

export default ButtonPage;