import React from 'react';
import rocket from '../../assets/img/rocket.svg';
import { Logo } from '../../components/Logo/'
import { B2Button } from '../../UI/B2Button';
import { B2Input } from '../../UI/B2Input';

export const SignIn = () => {
  return (
    <>
    <div className="max-width signup">
      <div className="signup__header animated">
        <div className="signup__logo-rocket" >
          <img src={rocket} width="54" height="79" alt='B2Binder'/>
        </div>
        <div className="signup__logo">
          <Logo />
        </div>
        <div className="signup__sublogo">Площадка венчурных инвестиций</div>
      </div>
      <form className="signup__form shown" >
        <div className="signup__input">
          <B2Input 
            type='text' 
            name={'email'} 
            placeholder={'Адрес электронной почты'} 
          />
        </div>
        <div className="signup__input">
          <B2Input 
            type='password' 
            name={'password'} 
            placeholder={'Пароль'} 
          />
        </div>
        <div className="signup__btns signup__btns--signin">
          <B2Button color={'green'} text='Войти' />
        </div>
      </form>
    </div>
    
    
      
    </>
  

  )
};


{/* <template>
  <div className="max-width signup">
    <div className="signup__header" v-bind:className="{'animated': showLogo}">
      <div className="signup__logo-rocket" >
        <svgicon icon="rocket" width="54" height="79" original/>
      </div>
      <div className="signup__logo">
        <svgicon icon="logo" width="122" height="23" original/>
      </div>
      <div className="signup__sublogo">Площадка венчурных инвестиций</div>
    </div>
    <form className="signup__form" v-bind:className="[{'shown': showLogo}, {'is-web': !isMobile}]"  v-on:submit.prevent>
      <v-text-field
              label="Адрес электронной почты"
              type="email" v-model="loginEmail"
              outlined
              :height="48"
              color="#B0D3BF"
              @keypress.enter="$refs.password.focus()"
      ></v-text-field>
      <v-text-field
              ref="password"
              label="Пароль"
              type="password" v-model="loginPassword"
              outlined
              @keypress.enter="doSigninLogin"
              :error-messages="hasErrors ? ['Email or password is incorrect'] : ''"
              color="#B0D3BF"
      ></v-text-field>

      <div className="signup__btns signup__btns--signin">
        <button :disabled="!canLogin" v-ripple className="btn green-color" @click="doSigninLogin()">Войти</button>
        <router-link className="signup__link" to="/signup?force=1">РЕГИСТРАЦИЯ</router-link>
      </div>
    </form>
  </div>
</template> */}