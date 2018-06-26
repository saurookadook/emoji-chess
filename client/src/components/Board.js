import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../App.css';
// import { newGame } from '../actions/gameActions.js'
// import { updateGame } from '../actions/gameActions.js';
import { fetchGame } from '../actions/gameActions.js';

export class Board extends Component {



}


<table border="1" cellpadding="40" class="board">
	<tr> <!-- row 0 (top) -->
		<td class="bg-white" data-x="0" data-y="0"></td>
		<td style="background-color:black;" class="bg-dark" data-x="1" data-y="0"></td>
		<td class="bg-white" data-x="2" data-y="0"></td>
    <td style="background-color:black;" class="bg-dark" data-x="3" data-y="0"></td>
    <td class="bg-white" data-x="4" data-y="0"></td>
    <td style="background-color:black;" class="bg-dark" data-x="5" data-y="0"></td>
    <td class="bg-white" data-x="6" data-y="0"></td>
    <td style="background-color:black;" class="bg-dark" data-x="7" data-y="0"></td>
	</tr>
	<tr> <!-- row 1 -->
		<td style="background-color:black;" class="bg-dark" data-x="0" data-y="1"></td>
		<td class="bg-white" data-x="1" data-y="1"></td>
		<td style="background-color:black;" class="bg-dark" data-x="2" data-y="1"></td>
    <td class="bg-white" data-x="3" data-y="1"></td>
    <td style="background-color:black;" class="bg-dark" data-x="4" data-y="1"></td>
    <td class="bg-white" data-x="5" data-y="1"></td>
    <td style="background-color:black;" class="bg-dark" data-x="6" data-y="1"></td>
    <td class="bg-white" data-x="7" data-y="1"></td>
	</tr>
	<tr> <!-- row 2 -->
		<td class="bg-white" data-x="0" data-y="2"></td>
		<td style="background-color:black;" class="bg-dark" data-x="1" data-y="2"></td>
		<td class="bg-white" data-x="2" data-y="2"></td>
    <td style="background-color:black;" class="bg-dark" data-x="3" data-y="2"></td>
    <td class="bg-white" data-x="4" data-y="2"></td>
    <td style="background-color:black;" class="bg-dark" data-x="5" data-y="2"></td>
    <td class="bg-white" data-x="6" data-y="2"></td>
    <td style="background-color:black;" class="bg-dark" data-x="7" data-y="2"></td>
	</tr>
  <tr> <!-- row 3 -->
		<td style="background-color:black;" class="bg-dark" data-x="0" data-y="3"></td>
		<td class="bg-white" data-x="1" data-y="3"></td>
		<td style="background-color:black;" class="bg-dark" data-x="2" data-y="3"></td>
    <td class="bg-white" data-x="3" data-y="3"></td>
    <td style="background-color:black;" class="bg-dark" data-x="4" data-y="3"></td>
    <td class="bg-white" data-x="5" data-y="3"></td>
    <td style="background-color:black;" class="bg-dark" data-x="6" data-y="3"></td>
    <td class="bg-white" data-x="7" data-y="3"></td>
	</tr>
  <tr> <!-- row 4 -->
		<td class="bg-white" data-x="0" data-y="4"></td>
		<td style="background-color:black;" class="bg-dark" data-x="1" data-y="4"></td>
		<td class="bg-white" data-x="2" data-y="4"></td>
    <td style="background-color:black;" class="bg-dark" data-x="3" data-y="4"></td>
    <td class="bg-white" data-x="4" data-y="4"></td>
    <td style="background-color:black;" class="bg-dark" data-x="5" data-y="4"></td>
    <td class="bg-white" data-x="6" data-y="4"></td>
    <td style="background-color:black;" class="bg-dark" data-x="7" data-y="4"></td>
	</tr>
  <tr> <!-- row 5 -->
		<td style="background-color:black;" class="bg-dark" data-x="0" data-y="5"></td>
		<td class="bg-white" data-x="1" data-y="5"></td>
		<td style="background-color:black;" class="bg-dark" data-x="2" data-y="5"></td>
    <td class="bg-white" data-x="3" data-y="5"></td>
    <td style="background-color:black;" class="bg-dark" data-x="4" data-y="5"></td>
    <td class="bg-white" data-x="5" data-y="5"></td>
    <td style="background-color:black;" class="bg-dark" data-x="6" data-y="5"></td>
    <td class="bg-white" data-x="7" data-y="5"></td>
	</tr>
  <tr> <!-- row 6 -->
		<td class="bg-white" data-x="0" data-y="6">&#x1F62D</td>
		<td style="background-color:black;" class="bg-dark" data-x="1" data-y="6">&#x1F62D</td>
		<td class="bg-white" data-x="2" data-y="6">&#x1F62D</td>
    <td style="background-color:black;" class="bg-dark" data-x="3" data-y="6">&#x1F62D</td>
    <td class="bg-white" data-x="4" data-y="6">&#x1F62D</td>
    <td style="background-color:black;" class="bg-dark" data-x="5" data-y="6">&#x1F62D</td>
    <td class="bg-white" data-x="6" data-y="6">&#x1F62D</td>
    <td style="background-color:black;" class="bg-dark" data-x="7" data-y="6">&#x1F62D</td>
	</tr>
  <tr> <!-- row 7 (bottom) -->
		<td style="background-color:black;" class="bg-dark" data-x="0" data-y="7">&#x1F624</td>
		<td class="bg-white" data-x="1" data-y="7">&#x1F920</td>
		<td style="background-color:black;" class="bg-dark" data-x="2" data-y="7">&#x1F607</td>
    <td class="bg-white" data-x="3" data-y="7">&#x1F62C</td>
    <td style="background-color:black;" class="bg-dark" data-x="4" data-y="7">&#x1F92F</td>
    <td class="bg-white" data-x="5" data-y="7">&#x1F607</td>
    <td style="background-color:black;" class="bg-dark" data-x="6" data-y="7">&#x1F920</td>
    <td class="bg-white" data-x="7" data-y="7">&#x1F624</td>
	</tr>
</table>
