import React from 'react';
import icon from './research-icon.png';

class Cxux extends React.Component{

    render(){
        return (    
            <div className="homepage-card-container"> 
            <div className='homepage-container'>
                <h2>CX/UX Working Groups</h2>
                <div class="homepage-card-grid">
          <div class="homepage-card homepage-card-1 hero-card-grid-2">
            <div class="homepage-card-copy">Research</div>
            <div class="homepage-card-icon">
              <img src={icon} alt=""/>
            </div>
          </div>
            
            <div class="homepage-card homepage-card-2 hero-card-grid-2">
              <div class="homepage-card-copy">Development</div>
              <div class="homepage-card-icon">
                <img src="https://www2.arccorp.com/globalassets/fds/fds-developer-icon.png" alt=""/>
                </div>
                </div>
            </div>
                <div className="homepage-card-grid">
                    <div className="homepage-card homepage-card-1">                       
                        <p>Discovery meetings with Forest Giant <br />
                            Future Portal</p>                       
                    </div>
                    <div className="homepage-card homepage-card-2">    
                    <p>Flight Design System<br />   
                    Bootstrap Implementation<br /></p>         
                    </div>
                </div>
         </div>                
        </div>
        )
    }
}

export default Cxux;