

import React, { Component } from 'react';
import { Shop } from '../components/shop-grid';
export class ListeBooks extends Component{




    render(){
            

        return(
            <div>
                {/*cette page est pour l'affichage des livres selon une requette BD qui prend en parametre chaque fois un type differents expl*/}
{/*paramtres : nom-auteur-livre => afficher liste de tous les livres ecrites par ce auteur*/}
{/*paramtres : une categories livre ou plusqu'une categories => afficher liste de tous les livres de cette/ces categori(s)*/}
{/*paramtres : qlq lettres mn titre livre  => afficher liste de tous les livres contient ces lettres*/}

{/*par user*/}
{/*paramtres : livre-recommandes => afficher liste de tous les livres recommandes par cet user*/}
{/*paramtres : livre-lu => afficher liste de tous les livres lus par cet user*/}
{/*paramtres : livre-en-cours => afficher liste de tous les livres en cours de lire par cet user*/}
{/*paramtres : livre-veux-lire => afficher liste de tous les livres veux lire par cet user*/}

            <h1>liste books</h1>
         



            <Shop/>
            </div>
        )
    }
}

export default ListeBooks;