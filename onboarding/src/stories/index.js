import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import ButtonOnboarding from '../components/ButtonOnboarding'
import InputOnboarding from '../components/InputOnboarding'
import '../App.css'
import ProgressBar from '../components/ProgressBar';
import ProgressBarV2 from '../components/ProgressBar_v2'
import TitleOnboarding from '../components/TitleOnboarfing';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

  storiesOf('ButtonOnboarding', module)
    .add('continue',() => <ButtonOnboarding text="Continue" className="continue"/>)
    .add('ok',() => <ButtonOnboarding text="Ok" className="continue"/>)
    .add('continueDisabled',() => <ButtonOnboarding text="Continue" className="disabled"/>)
    .add('back',() => <ButtonOnboarding text="Back" className="back"/>)

  storiesOf('InputOnboarding', module)
    .add('nombre',() => <InputOnboarding placeholder="Algo como Cortana? ... Starlord?"/>)
    .add('nombreError',() => <InputOnboarding placeholder="Algo como Cortana? ... Starlord?" className="error" />)
    .add('nombreNave',() => <InputOnboarding placeholder="Empresas ACME, Milennium Falcon, etc" />)
    .add('invitaTusColegas',()=> <InputOnboarding placeholder="colega@tuempresa" />)

  storiesOf('ProgressBar_v1', module)
    .add('Step1',()=> <ProgressBar Progress="1"/>)
    .add('Step2',()=> <ProgressBar Progress="2"/>)
    .add('Step3',()=> <ProgressBar Progress="3"/>)
    .add('Step4',()=> <ProgressBar Progress="4"/>)

  storiesOf('ProgressBar_v2', module)
    .add('Step1',()=><ProgressBarV2 Progress="step1" ProgressRocket="1" ProgressBar=""/>)
    .add('Step2',()=><ProgressBarV2 Progress="step2" ProgressRocket="2" ProgressBar=""/>)
    .add('Step3',()=><ProgressBarV2 Progress="step3" ProgressRocket="3" ProgressBar=""/>)
    .add('Step4',()=><ProgressBarV2 Progress="step4" ProgressRocket="4" ProgressBar=""/>)

    storiesOf('Title', module)
      .add('Hello',()=><TitleOnboarding title="¡Hola viajero!" text="¿Cómo te dicen tus amigos?"/>)
      .add('Type',()=><TitleOnboarding title="¿Qué tipo de cuenta quieres crear?" text=""/>)
      .add('Ship name',()=><TitleOnboarding title="Ponle nombre a tu nave" text=""/>)
      .add('Create team',()=><TitleOnboarding title="Crea tu primer equipo" text=""/>)
      .add('Invite',()=><TitleOnboarding title="Invita a tus colegas" text=""/>)
      .add('Congrats',()=><TitleOnboarding title="¡Felicidades, ganaste una medalla!" text="Más adelante podrás usar las medallas para personalizar tu cuenta y conseguir otros premios" />)
  
  storiesOf('Card', module)
    .add('1.Hello',()=></>)