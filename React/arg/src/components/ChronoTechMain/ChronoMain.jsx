import React from "react";
import Logo from "../Logo/Logo";
import "./ChronoMain.css";
import Fog from "../Fog/Aperture";

const ChronoMain = () => {
  return (
    <>
      <div className="container">
        <Fog />
        <div className="container__inner">
          <div className="logo__inner">
            <Logo />
          </div>
          <span className="logoText">ChronoTech</span>
        </div>
        <div className="description-container">
          <span className="text">
            "ChronoTech: взлом реальности" - это увлекательный аргументированный
            квест, в котором вы окунетесь в мир детектива, мистики и фантастики.
            Вас ждут захватывающие загадки, интриги и неожиданные открытия, а
            также возможность проверить и расширить свои навыки анализа и
            расследования. Вам предстоит погрузиться в историю компании
            ChronoTech и раскрыть тайны, которые оставались скрыты от взгляда
            общественности. Сюжет рассказывает о двух братьях, Дмитрии и Романе,
            которые создали компанию ChronoTech и занимаются исследованиями в
            области открытия порталов. Ваше расследование начинается с помощи
            детективу, которому вы помогаете найти компромат на компанию, но по
            мере развития событий вы раскрываете удивительные факты о компании,
            которые приводят вас к гораздо более захватывающим открытиям. Вместо
            фокусировки на магии, разломах времени и обнаружении взломов вы
            используете свою наблюдательность, аналитические способности и
            логическое мышление, чтобы проникнуть в самую суть загадочных
            событий, окружающих компанию ChronoTech. Ваша цель - раскрыть тайны,
            скрытые за обыденной реальностью, и найти ответы на вопросы,
            затрагивающие не только компанию, но и саму природу реальности.
            "ChronoTech: Взлом реальности" обещает вам захватывающее путешествие
            в мир интриг и технологических загадок, в котором нет места магии и
            временным порталам. Подготовьтесь к тому, чтобы раскрыть правду,
            которая перевернет ваше представление о том, что на самом деле
            является реальным. Вас ждут увлекательные повороты сюжета,
            захватывающие загадки и чудеса науки, которые изменят ваш взгляд на
            мир вокруг вас.
          </span>
        </div>
      </div>
    </>
  );
};

export default ChronoMain;