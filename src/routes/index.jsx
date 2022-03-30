import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { PagesLinks } from '../core/constants/constants';
import { Error } from '../pages/Error';
import { Main } from '../pages/Main';
import { Messanges } from '../pages/Messanges';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export const AppRouter = () => {
  return (
    <Routes>
      <Route exact path={PagesLinks.MAIN_PAGE} element={<Main />} />
      <Route exact path={PagesLinks.SIGN_IN_PAGE} element={<SignIn />} />
      <Route exact path={PagesLinks.SIGN_UP_PAGE} element={<SignUp />} />
      <Route exact path={PagesLinks.MESSAGES} element={<Messanges />} />
      <Route exact path={`${PagesLinks.MESSAGES}/:id`} element={<Messanges />} />
      <Route path="*" element={<Error />} /> 
    </Routes>
  );
};
