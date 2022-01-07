import React from 'react';

// function App({type}) {
//     return  (
//                     <div>
//                         <h1>{type} component</h1>
//                     </div>
//                 );
// }

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.type} component</h1>
            </div>
        );
    }
}

export default App;
