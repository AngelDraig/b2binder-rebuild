import React, { useRef, useState } from 'react';
import { B2Input } from '../../UI/B2Input';
import { B2Select } from '../../UI/B2Select';
import { B2MultiSelect } from '../../UI/B2MultiSelect';
import { organizationForm, countries, cities, interests, profileTypes } from '../../core/mocksData/mocksData';
import { B2Button } from '../../UI/B2Button';

import flag from '../../assets/icons/flag.svg';
import location from '../../assets/icons/location.svg';

export const Registration = () => {
  const [stage, setStage] = useState(1);
  const ref = useRef();
  //console.log(ref.current);
  /* const data = FormData(ref);
    
    for (let item of data.entries()){
        console.log(item)
    } */
  const toggleStage = () => {
    setStage((stage) => stage + 1);
  };

  return (
    <form ref={ref} className="max-width ob is-web">
      {stage === 1 && (
        <div>
          <div className="ob--step-icon">
            <img src={flag} width="119" height="142" />
          </div>
          <div className="ob__step-content">
            <div className="ob__step-title">Информация о Вашей компании (О вас)</div>
            <div className="ob__step-wrapper">
              <B2Input name="fio" placeholder="ФИО" />
            </div>
            <div className="ob__step-wrapper">
              <B2Select name="organization_form" placeholder="Форма организации" options={organizationForm} />
            </div>
            <B2Button
              type="button"
              text="Далее"
              color={'green'}
              onClick={() => {
                toggleStage();
              }}
            />
          </div>
        </div>
      )}

      {stage === 2 && (
        <div>
          <div className="ob--step-icon">
            <img src={location} width="115" height="142" />
          </div>
          <div className="ob__step-content">
            <div className="ob__step-title">Выберите подходящую локацию</div>
            <div className="ob__step-wrapper">
              <B2Select name="region" placeholder="Выберите регион" label="Страна" options={countries} />
            </div>
            <div className="ob__step-wrapper">
              <B2Select name="city" placeholder="Выберите город" label="Город" options={cities} />
            </div>
            <B2Button
              type="button"
              text="Далее"
              color={'green'}
              onClick={() => {
                toggleStage();
              }}
            />
          </div>
        </div>
      )}

      {stage === 3 && (
        <div>
          <div className="ob__step-content">
            <div className="ob__step-title">Чем Вы занимаетесь?</div>
            <div className="ob__step-wrapper">
              <B2MultiSelect name="interests" options={interests} placeholder="Можете выбрать несколько пунктов" />
            </div>
            <B2Button
              type="button"
              text="Далее"
              color={'green'}
              onClick={() => {
                toggleStage();
              }}
            />
          </div>
        </div>
      )}
    </form>
  );
};

/* <template>
  <div className="max-width ob" v-bind:className="[`ob--step-${step}`, {'is-web': !isMobile}]">
    <transition :name="transitionName">
      <div className="ob ob__step--1"  v-if="step === 1">
        <div className="ob--step-icon">
          <svgicon icon="lumb" width="160" height="160" original/>
        </div>
        <div className="ob__step-content">
          <div className="ob__step-title">Сфера деятельности вашей компании</div>
          <form v-on:submit.prevent>
            <div className="ob__step-wrapper">
              <div className="ob__step-wrapper__input" @click="clickInputList($event)">
                <span>Можете выбрать несколько пунктов</span>
                <span></span>
              </div>
              <item-list 
              :profileTypes="profileTypes"
              @select='changeProfileTypes'
              />
            </div>
            <button className="btn green-color"  :disabled="!profileType[0]" @click="toNextStep(2, profileType)">ДАЛЕЕ</button>
          </form>
        </div>
      </div>
    </transition>
    <transition :name="transitionName">
      <div className="ob ob__step--2" v-if="step === 2">
        <div className="ob--step-icon">
          <svgicon icon="flag" width="160" height="160" original/>
        </div>
        <div className="ob__step-content">
          <div className="ob__step-title">Информация о Вашей компании (О вас)</div>
          <form v-on:submit.prevent>
            <v-text-field
                    label="ФИО"
                    type="text" v-model="loginName"
                    outlined
                    color="#B0D3BF"
                    @keypress.enter="$refs.legal.focus()"
            ></v-text-field>
            <v-select
                    :items="legalForms"
                    label="Форма организации"
                    v-model="legalForm"
                    color="#B0D3BF"
                    outlined
                    @keypress.enter="$refs.legal.focus()"
            ></v-select>
            <button className="btn green-color" :disabled="!loginName.length" @click="toNextStep(3)">ДАЛЕЕ</button>
          </form>
        </div>
      </div>
    </transition>
    <transition :name="transitionName">
      <div className="ob ob__step--3" v-if="step === 3">
        <div className="ob--step-icon">
          <svgicon icon="point" width="160" height="160" original/>
        </div>
        <div className="ob__step-content">
          <div className="ob__step-title">Выберите подходящую локацию</div>
          <form v-on:submit.prevent>
            <v-select
                    :items="regions"
                    label="Выберите регион"
                    v-model="region"
                    color="#B0D3BF"
                    outlined
            ></v-select>
            <v-select
                    :items="cities"
                    label="Выберите город"
                    v-model="city"
                    color="#B0D3BF"
                    outlined
            ></v-select>
            <button className="btn green-color" :disabled="!city" @click="toNextStep(4)">ДАЛЕЕ</button>
          </form>
        </div>
      </div>
    </transition>
    <transition :name="transitionName">
      <div className="ob ob__step--4" v-if="step ===4">
        <div className="ob__step-content">
          <div className="ob__step-title">Чем Вы занимаетесь?</div>
          <div className="ob__interests">
            <div className="ob__interest-content">
              <!-- <div className="ob__interest" v-bind:className="{active: selectedInterests[item]}" @click="toggleInterest(item)" v-for="item in Object.keys(interests)">
                <div className="ob__interest-selected"></div>
                <div className="ob__interest-body">
                  {{ item }}
                </div>
              </div> -->
              <div className="ob__step-wrapper">
                <item-list 
                :profileTypes="interests"
                @select='changeSelectedInterestsArray'
                />
              </div>
            </div>
          </div>
          <div className="ob__step-btns">
            <button className="btn green-color" :disabled="!selectedInterestsArray[0]" @click="toNextStep(5)">ДАЛЕЕ</button>
          </div>
        </div>
      </div>
    </transition>
    <transition :name="transitionName">
      <div className="ob ob__step--5" v-if="step ===5">
        <div className="ob__step-content">
          <div className="ob__step-title">Какие партнёры Вам интересны?</div>
          <div className="ob__interests">
            <div className="ob__interest-content">
              <!-- <div className="ob__interest" v-bind:className="{active: selectedIamlooking[item]}" @click="toggleIamlooking(item)" v-for="item in Object.keys(iamlooking)">
                <div className="ob__interest-selected"></div>
                <div className="ob__interest-body">
                  {{ item }}
                </div>
              </div> -->
              <div className="ob__step-wrapper">
                <item-list 
                :profileTypes="iamlooking"
                @select='changeIAmLookingArray'
                />
              </div>
            </div>
          </div>
          <div className="ob__step-btns">
            <button className="btn green-color" :disabled="!iamLookingArray[0]" @click="toNextStep(6)">ДАЛЕЕ</button>
          </div>
        </div>
      </div>
    </transition>
    <transition :name="transitionName"  v-if="step === 6">
      <div className="ob ob__step--6">
        <div className="ob--step-icon">
          <svgicon icon="lumb" width="160" height="160" original/>
        </div>
        <div className="ob__step-content">
          <div className="ob__step-title">Расскажите о Вашей компании</div>
          <v-textarea
                  outlined
                  label="Описание"
                  color="#B0D3BF"
                  placeholder="Расскажите нам немного о Вашей компании "
                  v-model="aboutTextarea"
                  @keypress.enter="finishOnboarding()"
          ></v-textarea>
          <div className="ob__step-btns">
            <button className="btn green-color" :disabled="!aboutTextarea.length" @click="finishOnboarding">ЗАВЕРШИТЬ</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template> */
