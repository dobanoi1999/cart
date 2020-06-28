import React,{Component} from 'react';
import ListProduct from './ListProduct';
import Message from './Message';
import ListCart from './ListCart';


class Main extends Component{
    render(){
        return (
            <main id="mainContainer">
            <div className="container">
              {/* Products */}
              <ListProduct/>
              {/* Message */}
                <Message/>
              {/* Cart */}
              <ListCart/>
            </div>
          </main>
        )
    }
}

export default Main;