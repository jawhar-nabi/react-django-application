import React from 'react';
import '../css/account.css';
import {Card, Icon, Image} from 'semantic-ui-react';
import Amazon from '../images/collaborateurs/amazon.jpg';

export class Profil extends React.Component{
    // state = {user:'', sujets:[]}
    // componentDidMount(){
    //     // let {sujet, profil}= this.state;
    //     //const user = JSON.parse(localStorage.getItem('token'));
    //     axios.get('http://localhost:3000/api/users/account/'+ this.props.match.params.id)
    //         .then(     
    //         res =>( this.setState({ user: res.data }),
    //         console.log('frikha ',this.props.match.params.id)
    //         ))
    //         .catch(err => console.log('erreur..',err))
    //     axios.get('http://localhost:3000/api/sujets/byuserid/'+ this.props.match.params.id)
    //         .then(res => (this.setState({ sujets: res.data })))

        
    // }

    render(){
      //   const { user, sujets } = this.state;
    
        return(
            <div className='all'>
               
                <h1 className='profil'><b>flen ben foulen profile</b></h1><hr/>

                    <Card className='a'>
                        <Image className='cardimg' src={Amazon} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header><br/></Card.Header>
                            <div className='namediv'><h4 className='namediv'>name : </h4><h3 className='namediv'>foulen ben foulen</h3></div> <br/>
                            <div className='namediv'><h4 className='namediv'>email : </h4><h3 className='namediv'>foulen@gmail.com</h3></div> <br/>
                            <div className='namediv'><h4 className='namediv'>Phone : </h4><h3 className='namediv'>50006006</h3></div> 

                        </Card.Content>
                    </Card>
                
            
          </div>
        )
    }
}