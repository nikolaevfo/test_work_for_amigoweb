/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFormWithValidation from "../hooks/useForm";
import "./Register.css";

function Register() {
  const [isLangOptionsOpen, setIsLangOptionsOpen] = useState(false);
  const {
    values,
    handleChangeInput,
    handleChangeOptions,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation();
  // const errorsForm = {}

  function handleRegisterSubmit(e) {
    e.preventDefault();
    resetForm();
  }

  function handleLangOptionsClick() {
    setIsLangOptionsOpen(!isLangOptionsOpen);
  }

  // function handleLangItemClick(e) {
  //   console.log(e.target);
  //   console.log(values);
  //   handleChangeValue(e.target);
  // }

  return (
    <section className="register">
      <div className="register__container">
        <h2 className="register__title">Регистрация</h2>
        <p className="register__link-text">
          Уже есть аккаунт?
          <Link to="/" className="register__link">
            Войти
          </Link>
        </p>
        <form
          action="#"
          name="registerForm"
          className="register__form"
          onSubmit={handleRegisterSubmit}
        >
          <label className="register__form-label">
            Имя
            <input
              type="text"
              name="name"
              placeholder="Введите Ваше имя"
              className="register__form-iput-text"
              required
              minLength="2"
              maxLength="40"
              onChange={handleChangeInput}
              value={values.name || ""}
              pattern="[a-zA-Zа-яА-Я- ]*"
            />
          </label>
          <span className="register__form-iput-text-error">
            {errors.name ? "Введено не корректное значение" : ""}
          </span>

          <label className="register__form-label">
            E-mail
            <input
              type="email"
              name="email"
              placeholder="Введите Ваш email"
              className="register__form-iput-text"
              required
              minLength="2"
              maxLength="40"
              onChange={handleChangeInput}
              value={values.email || ""}
            />
          </label>
          <span className="register__form-iput-text-error">
            {errors.email ? "Введено не корректное значение" : ""}
          </span>

          <label className="register__form-label">
            Номер телефона
            <input
              type="tel"
              name="tel"
              placeholder="Введите номер телефона"
              className="register__form-iput-text"
              required
              onChange={handleChangeInput}
              value={values.tel || ""}
              pattern="(8|\+7)[-(]?\d{3}[-)]?\d{3}-?\d{2}-?\d{2}$"
            />
          </label>
          <span className="register__form-iput-text-error">
            {errors.tel ? "Введено не корректное значение" : ""}
          </span>

          <label className="register__form-label">
            Язык
            <input
              type="text"
              name="lang"
              placeholder="Язык"
              className="register__form-iput-text register__form-iput-text_type_lang"
              required
              minLength="11"
              maxLength="11"
              value={values.lang || ""}
              // onChange={handleChangeInput}
              onClick={handleLangOptionsClick}
            />
            <ul
              className={`register__form-input-lang ${
                !isLangOptionsOpen && "register__form-input-lang_hidden"
              }`}
              onClick={handleChangeOptions}
            >
              <ol className="register__form-input-lang-item">Русский</ol>
              <ol className="register__form-input-lang-item">Английский</ol>
              <ol className="register__form-input-lang-item">Китайский</ol>
              <ol className="register__form-input-lang-item">Испанский</ol>
            </ul>
          </label>

          <label className="register__form-label register__form-label_type_checkbox">
            Принимаю&ensp;{" "}
            <Link to="/" className="register__conditions">
              условия
            </Link>{" "}
            &ensp;использования
            <input
              type="checkbox"
              name="confirm"
              className="register__form-iput-checkbox"
              required
              onChange={handleChangeInput}
            />
            <span className="register__form-iput-checkbox-span"></span>
          </label>

          <button
            type="submit"
            disabled={!isValid}
            className={`${
              isValid
                ? `register__form-button-reg`
                : `register__form-button-reg register__form-button-reg_invalid`
            }`}
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;
