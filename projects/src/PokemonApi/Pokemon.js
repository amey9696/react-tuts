import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [num, setNum] = useState(1);
    const [name, setName] = useState();
    const [move, setMove] = useState();

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data.name);
            setName(res.data.name);
            setMove(res.data.moves.length); //moves is array
        }
        getData();
    })
    return (
        <>
            <h2>you choose <span style={{ color: 'red' }}> {num} </span>  value</h2>
            <h2>My name is <span style={{ color: 'red' }}> {name} </span> </h2>
            <h2>I have <span style={{ color: 'red' }}> {move} </span> Moves</h2>
            <select value={num} onChange={(event) => {
                setNum(event.target.value);
            }}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
                <option value='15'>15</option>
                <option value='16'>16</option>
                <option value='17'>17</option>
                <option value='18'>18</option>
                <option value='19'>19</option>
                <option value='20'>20</option>
                <option value='21'>21</option>
                <option value='22'>22</option>
                <option value='23'>23</option>
                <option value='24'>24</option>
                <option value='25'>25</option>
                <option value='26'>26</option>
                <option value='27'>27</option>
                <option value='28'>28</option>
                <option value='29'>29</option>
                <option value='30'>30</option>
            </select>
        </>
    )
}

export default Pokemon;