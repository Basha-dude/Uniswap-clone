import React, {useContext,useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

// INTERNAL IMPORT 
import  images  from "../../assets";
import style from "./Navbar.module.css";
import { Model,TokenList } from '../index';

const Navbar = () => {
  const menuItems = [{
    name:"Swap",
    link:"/"
  },
  {
    name:"Tokens",
    link:"/"
  },
  {
    name:"Pools",
    link:"/"
  }];
  //USESTATE
  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);
  return (
    <div className={style.Navbar}>
    <div className={style.Navbar_box}>
      <div className={style.Navbar_box_left}>
      {/* LOGO IMAGE */}

      <div className={style.Navbar_box_left_img}>
        <Image src={images.uniswap} alt='logo' width={50} height={50}/>
      </div>

      {/*MENU ITEMS*/}
      <div className={style.Navbar_box_left_menu}>
        {menuItems.map((el,i) => (
          <Link 
          key={i+1}
          href={{pathname:`${el.name}`,query:`${el.link}`}}>
            <p className={style.Navbar_box_left_menu_item}>
              {el.name}
            </p>
          </Link>
        ))}
      </div>
      </div>
      {/* MIDDLE SECTION */}
      <div className={style.Navbar_box_middle}>
      <div className={style.Navbar_box_middle_search}>
        <div className={style.Navbar_box_middle_search_img}>
          <Image src={images.search} alt='search' width={20} height={20}/>
        </div>
        {/* INPUT SECTION */}
       <input type="text"  placeholder='Search Tokens' />
      </div>
      </div>
      {/* RIGHT SECTION */}
      <div className={style.Navbar_box_right}>
      <div className={style.Navbar_box_right_box}>
      <div className={style.Navbar_box_right_box_img}>
        <Image src={images.ether} alt='Network' width={30} height={30}/>
      </div>
      <p>Network Name</p>
      </div>
        <button onClick={() => {}}>Address</button>


        {/* openModel Component  */}
        {openModel &&(
          <Model setOpenModel={setOpenModel} ConnectWallet="connect" />
        )}

    </div>
    </div>
    {/* TokenList Component */}
    {openTokenBox && (
    <TokenList tokenDate="Hey" setOpenTokenBox={setOpenTokenBox} />
    )}

    </div>
  )
}

export default Navbar