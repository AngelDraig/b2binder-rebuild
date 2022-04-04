import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import rocket from '../../assets/img/rocket.svg';
import { Logo } from '../../components/Logo/';
import { B2Button } from '../../UI/B2Button';
import { B2Input } from '../../UI/B2Input';
import { PagesLinks } from '../../core/constants/constants';

export const SignUp = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="max-width signup">
        <div className="signup__header animated">
          <div className="signup__logo-rocket">
            <img src={rocket} width="54" height="79" alt="B2Binder" />
          </div>
          <div className="signup__logo">
            <Logo />
          </div>
          <div className="signup__sublogo">Площадка венчурных инвестиций</div>
        </div>
        <form className="signup__form shown">
          <div className="signup__input">
            <B2Input type="text" name={'email'} placeholder={'Адрес электронной почты'} />
          </div>
          <div className="signup__input">
            <B2Input type="password" name={'password'} placeholder={'Пароль'} />
          </div>
          <div class="checkbox-wrap">
            <input type='checkbox' onChange={()=>{setChecked(!checked)}} className={checked ? 'checkbox_active' : 'checkbox'}/>
            <div class="checkbox-label">
              Я принимаю <a href="#">Пользовательское соглашение</a>
            </div>
          </div>
          <div class="signup__btns signup__btns--signin">
            <NavLink to={PagesLinks.REGISTRATION} exact={true}>
              <B2Button color={'green'} text="Регистрация"/>
            </NavLink>
            <B2Button
              text="Войти"
              style={{
                background: 'transparent',
                color: '#3E8BD8',
                border: 'none',
                textTransform: 'none',
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

{
  /* <template>
  <div class="max-width signup">
    <div class="signup__header" v-bind:class="{'animated': showLogo}">
      <div class="signup__logo-rocket" >
        <svgicon icon="rocket" width="54" height="79" original/>
      </div>
      <div class="signup__logo">
        <svgicon icon="logo" width="122" height="23" original/>
      </div>
      <div class="signup__sublogo">Площадка венчурных инвестиций</div>
    </div>
    <form class="signup__form" v-bind:class="[{'shown': showLogo}, {'is-web': !isMobile}]" v-on:submit.prevent>
      <v-text-field
              label="Адрес электронной почты"
              type="email" v-model="regEmail"
              outlined
              :height="48"
              v-on:keyup.enter="$refs.password.focus()"
              color="#B0D3BF"
      ></v-text-field>
      <v-text-field
              ref="password"
              label="Пароль"
              type="password" v-model="regPassword"
              outlined
              @blur="checkPassword"
              :error-messages="(passwordTooLow) ? ['Minimum 6 chars'] : []"
              color="#B0D3BF"
      ></v-text-field>
      <div class="checkbox-wrap" @click="therms = !therms">
        <div class="checkbox" v-bind:class="{'active': therms}"  v-ripple>
          <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8.89474L8.07143 16L23 1" stroke="#223522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="checkbox-label">
          Я принимаю <a href="">Пользовательское соглашение</a>
        </div>
      </div>
      <div class="signup__btns">
        <button :disabled="!canSend" @click="doSignup" v-ripple class="btn green-color">РЕГИСТРАЦИЯ</button>
        <router-link class="signup__link" to="/signin">Войти</router-link>
      </div>
    </form>
  </div>
</template> */
}
