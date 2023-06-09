import React from "react";
import cx from "classnames";
//import scrollToComponent from "react-scroll-to-component";
import P1Img from "./p1wbg.png";
import P2Img from "./p2wbg.png";
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
import bg from '../../Background1.png'
import logo from "../../logo1.png";
import mySound from "../select1/susu.mp3";
import { Howl, Howler } from 'howler';

Howler.volume(0.5); // set global volume to 50%

// Create a new sound
const sound = new Howl({
  src: ['mySound'],
  autoplay: true,
  loop: true
});


export const Header = ({ children, ...rest }) => (
  // eslint-disable-next-line
  <h1 className={styles.header} {...rest}>
    {children}
  </h1>
);

export const Header2 = ({ children, ...rest }) => (
  // eslint-disable-next-line
  <h1 className={styles.header2} {...rest}>
    {children}
  </h1>
);

export const Subheader = ({ children, ...rest }) => (
  <small className={styles.subheader} {...rest}>
    {children}
  </small>
);

export const Content = ({ display = "", children, ...rest }) => (
  <div
    className={cx(styles.container, {
      [styles.gridDisplay]: display === "grid",
    })}
    {...rest}
  >
    {children}
  </div>
);

export const CharacterBox = React.forwardRef(
  (
    {
      isSelected,
      type,
      headerProps = {},
      imgProps = {},
      src,
      disableFlashing,
      ...rest
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cx(styles.characterBox, {
        [styles.selectedBox]: isSelected,
      })}
      {...rest}
    >
      {type && <h3 {...headerProps}>{type}</h3>}
      <img
        {...imgProps}
        src={src || imgProps.src}
        className={cx(styles.tier2, imgProps.className, {
          [styles.selected]: isSelected,
          [styles.noAnimation]: !!disableFlashing,
        })}
        alt=""
      />
    </div>
  )
);

const characterSelections = [
  { type: "Benjamin", src: P1Img },
  { type: "George", src: P2Img },
];

const mappedCharSelections = characterSelections.reduce(
  (acc, { type, src }) => ({
    ...acc,
    [type]: src,
  }),
  {}
);

const useLevelUpScreen = ({ morphRef, morphedRef }) => {
  const [selected, setSelected] = React.useState(null);
  //const [morphing, setMorphing] = React.useState(false);
  const [morphed, setMorphed] = React.useState(false);
  const [ready, setReady] = React.useState(false);

  const onSelect = (type) => (e) => {
    setSelected(type);
    /*scrollToComponent(morphRef.current, {
      offset: 300,
      align: "bottom",
      duration: 1000,
    });*/
  };

  /*const onMorph = () => {
    setMorphing(true);
    setTimeout(() => {
      setMorphing(false);
      setMorphed(true);
    }, 1500);
  };
*/

  return {
    selected,
    onSelect,
    morphed,
    //morphing,
    //onMorph,
    ready,
  };
};

const Character = () => {
  const morphRef = React.createRef();
  const morphedRef = React.createRef();
  const {
    selected,
    onSelect,
    
    morphed,
    onMorph,
    ready,
    shutdown,
  } = useLevelUpScreen({
    morphRef,
    morphedRef,
  });

  return (
    <div>
      <div>
        <audio className="audio-element" autoPlay loop src={mySound} type="audio/mpeg"/>
      </div>
      <div className={styles.root}></div>
      <div className={styles.square}></div>
      <Link to="/how">
      <div className={styles.button}>
        <h4>&lt;</h4>
      </div>
      </Link>
      <div style={{ margin: "100px auto" }}></div>

      <Content></Content>
      <Subheader></Subheader>
      <img id="logo" src={logo} />
      <div id="box2"></div>
      <div style={{ margin: "0px auto" }}>

        <Subheader></Subheader>
        <Content display="grid">
          {characterSelections.map((props, index) => (
            <CharacterBox
              key={`char_selection_${index}`}
              onClick={onSelect(props.type)}
              isSelected={selected === props.type}
              {...props}
            />
            
          ))}
          
        </Content>
      </div>
      <div
        className={cx({
          [styles.morphed]: morphed
          
        })}
      >
        <Header2>
          Player1 select <em>{selected}</em>
        </Header2>
        <Content></Content>
        <Subheader></Subheader>
      </div>
      <div
        ref={morphRef}
        className={cx(styles.morph, {
          [styles.hidden]: !selected,
        })}
      >
        <a href="/character2" >
        <button
          ref={morphRef}
          name="morph"
          type="button"
          className={styles.morph}
          //style={{ opacity: morphing ? "0.4" : 1 }}
          onClick={onMorph}
          disabled={morphed}
        >
          { morphed ? "Ready": "Next"  }
        </button>
        </a>
      </div>
      
      <div
        className={cx(styles.next, {
          [styles.hidden]: !ready,
        })}
      ></div>
    </div>
  );
};

export default Character;
