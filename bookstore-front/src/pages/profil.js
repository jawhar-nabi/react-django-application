import React from 'react';
import '../css/account.css';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import Amazon from '../images/collaborateurs/amazon.jpg';

export class Profil extends React.Component {
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

    render() {
        //   const { user, sujets } = this.state;

        return (
            <div className='all'>
                                  <h1 className='profil'><b>flen ben foulen profile</b></h1><hr />

                  <Grid relaxed >

                <Grid.Row stretched>
                <Grid.Column width={6}>


                <Card className='a' fluid>
                    <Image className='cardimg' src={Amazon} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header><br /></Card.Header>
                        <div className='namediv'><h4 className='namediv'>name : </h4><h3 className='namediv'>foulen ben foulen</h3></div> <br />
                        <div className='namediv'><h4 className='namediv'>email : </h4><h3 className='namediv'>foulen@gmail.com</h3></div> <br />
                        <div className='namediv'><h4 className='namediv'>Phone : </h4><h3 className='namediv'>50006006</h3></div>

                    </Card.Content>
                </Card>
                </Grid.Column>
                <Grid.Column width={4}>        
            <h4>Books that i read  :</h4>


                {/* {sujets.slice(0,4).map(suj=>( */}
                <Card size='small' className='a' fluid>
                    <Image src='data:image/png;base64,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'
                     wrapped ui={false} />
                    <Card.Content>
                    <Card.Header as='a' href='' >book title</Card.Header>

                    {/* <Card.Header as='a' href='' onClick={() => this.props.history.push('/affich-sujet/'+suj._id)}>book title</Card.Header> */}
                    <Card.Meta>
                        <span className='date'>Added on: 21 dec 2019</span>
                    </Card.Meta>
                    <Card.Description>description içi
                   </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <p>
                    <Icon name="comment"/>5  replies                  
                    </p>
                    </Card.Content>
                </Card>
            {/* ))} */}
                </Grid.Column>
                <Grid.Column width={4}>        
                <h4>Books that i want to read  :</h4>

                {/* {sujets.slice(4,8).map(suj=>( */}
                <Card size='small' className='a' fluid>
                    <Image src='data:image/png;base64,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'
                     wrapped ui={false} />
                    <Card.Content>
                    <Card.Header as='a' href='' >book title</Card.Header>
                    <Card.Meta>
                        <span className='date'>Added on: 25 nov 2018</span>
                    </Card.Meta>
                    <Card.Description>decription ici
                   </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <p>
                    <Icon name="comment"/>55  replies                  
                    </p>
                    </Card.Content>
                </Card>
            {/* ))} */}
                </Grid.Column>
            </Grid.Row>
            </Grid>
            </div>
        )
    }
}