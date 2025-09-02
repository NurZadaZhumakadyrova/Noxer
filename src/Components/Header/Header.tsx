import './Header.css';
import CellularConnection from '../../assets/icon-CC.png';
import WiFi from '../../assets/icon-WiFi.png';
import BatteryIndicator from '../../assets/icon-BI.png';
import Close from '../../assets/icon-close.png';
import IconVector from "../../assets/icon-vector.png";
import Telegram from '../../assets/icon-TG.png';
import Vector from '../../assets/vector.png';
import More from '../../assets/more.png';
import Search from '../../assets/icon-search.png';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { categoriesFromSlice, setFilteredProducts } from '../../features/Categories/categorySlice.ts';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [text, setText] = useState<string>("");
  const products = useAppSelector(categoriesFromSlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);

    if (value.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const filtered = products?.products.filter(product =>
      product.Product_Name.toLowerCase().includes(value.toLowerCase())
    );

    if (filtered) {
      dispatch(setFilteredProducts(filtered));
      navigate("/search");
    }
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.trim().length === 0) {
      toast.error('Заполните поле!');
    } else {
      console.log(text);
      setText("");
      setFilteredProducts([]);
    }
  };

  return (
    <div className="header">
      <div className="header-top">
        <div className="time">9:41</div>
        <div className="icons">
          <div className="icon-CC">
            <img src={CellularConnection} alt="CellularConnection"/>
          </div>
          <div className="icon-WiFi">
            <img src={WiFi} alt="WiFi"/>
          </div>
          <div className="icon-BI">
            <img src={BatteryIndicator} alt="BatteryIndicator"/>
          </div>
        </div>
      </div>
      <div className="header-center">
        <button type="button" className="button" onClick={() => location.pathname === "/search" && navigate("/")}>
          <img className="button-icon" src={location.pathname === "/search" ? IconVector : Close} alt="close icon"/>
          <div className="button-text">
            {location.pathname === "/search" ? "Назад" : "Закрыть"}
          </div>
        </button>
        <div className="contact">
          <div className="contact-info">
            <img className="tg-icon" src={Telegram} alt="Telegram"/>
            <div className="contact-text">наш tg-канал</div>
          </div>
        </div>
        <div className="menu-info">
          <div className="menu">
            <img className="vector" src={Vector} alt="Vector"/>
            <img className="more" src={More} alt="More"/>
          </div>
        </div>
      </div>
      <form className="header-bottom" onSubmit={onSubmitForm}>
        <button className="search-button" type="submit">
          <img className="search-icon" src={Search} alt="Search"/>
        </button>
        <input
          className="search"
          type="text"
          onChange={onChangeInput}
          value={text}
          placeholder="Найти товары"
          onFocus={() => {
            if (location.pathname !== "/search") {
              navigate("/search");
              dispatch(setFilteredProducts([]));
            }
          }}
        />
      </form>
    </div>
  );
};

export default Header;