// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import './firstpage.css';
import logo from '../../logo1.png'
import { Link } from 'react-router-dom';
import bg from '../../Background1.png'

function Firstpage() {
  return (
    <div>
      <img src={bg}/>
      <div className="content">
        <img src={logo} />
        <Link to="/how"><span style={{ fontFamily: 'Varela Round, sans-serif' }}>press to start</span></Link>
      </div>
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❅</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
      </div>
    </div>
  );
}

export default Firstpage;
