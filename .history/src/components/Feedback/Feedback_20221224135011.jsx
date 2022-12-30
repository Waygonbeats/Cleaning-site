import React from 'react'
import './FeedbackStyle.sass'
export const Feedback = () => {
  return (
    <div><form class="obratnuj-zvonok" autocomplete="off" action='email.php' method='post'>
    <div className="form-zvonok"> 
      <div>
        <label>Имя <span>*</span></label>
        <input type='text' name='username' required/></div>
      <div>
        <label>Номер телефона (с кодом) <span>*</span></label>
        <input type='text' name='usernumber' required/></div>
      <div>
        <label>Сообщение</label>
        <input type='text' name='question'/>
      </div>
      <input class="bot-send-mail" type='submit' value='Послать заявку'/>
    </div>
    </form></div>
  )
}
