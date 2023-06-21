import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, NotFoundPage } from '../pages'
import {
  Apples, Bananas1, Orange,
  Jsx1, Jsx2, Jsx3, Jsx4,
  InlineStyling, InternalStyling, ExternalStyling, ExternalModuleStyling,
  SassScss,

  Clock1, Clock2, Clock3,
  Greetings, Products,
  Image1, ImageGallery,
  ProfileCard,
  BootstrapKlasik, BootstrapModern,
  ReactIcons, MaterialIcons,
  Events,
  ProductShop,
  State,
  Counter1,
  Birthday,
  UseEffect,
  FilterList,
  UseRef,

  ClaTurunde,
  FonksiyonTurunde,
  Fetch, Fetch2,
  Countries,
  Parent,
  Form1, Form2, Form3, Form4, Form5,
  FormikYup1, FormikYup2, Header
} from '../components'
import UserLayout from '../layout/UserLayout'

const profileCardData = {
  firstName: "Emir",
  location: "New York",
  image: "person4.jpg",
  statistics: [
      { title: "Likes", stat: 145 },
      { title: "Photos", stat: 7 },
      { title: "Following", stat: 329 },
  ]
};

const AppRouter = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path='/fruits' element={<UserLayout />}>
            <Route path="apples" element={<Apples />} />
            <Route path="bananas1" element={<Bananas1 />} />
            <Route path="orange" element={<Orange />} />
        </Route>

        <Route path="/jsx">
            <Route index element={<Jsx1 />} />
            <Route path="1" element={<Jsx1 />} />
            <Route path="2" element={<Jsx2 />} />
            <Route path="3" element={<Jsx3 />} />
            <Route path="4" element={<Jsx4 />} />
        </Route>
        <Route path="styles">
            <Route index element={<InlineStyling />} />
            <Route path="inline" element={<InlineStyling />} />
            <Route path="internal" element={<InternalStyling />} />
            <Route path="external" element={<ExternalStyling />} />
            <Route path="external-module" element={<ExternalModuleStyling />} />
            <Route path="sass-scss" element={<SassScss />} />
        </Route>
        <Route path="dijital-saat-uygulamasi">
            <Route index element={<Clock1 />} />
            <Route path="1" element={<Clock2 />} />
            <Route path="2" element={<Clock3 textColor="white" bgColor="red" />} />
            <Route path="3" element={<Clock3 textColor="gold" bgColor="brown" />} />
        </Route>
        <Route path="greetings" element={<Greetings />} />
        <Route path="products" element={<Products />} />
        <Route path="image">
            <Route index element={<Image1 />} />
            <Route path="gallery" element={<ImageGallery />} />
        </Route>
        <Route path="profile-card" element={
            <ProfileCard {...profileCardData} />}
        />
        <Route path="bootstrap">
            <Route index element={<BootstrapKlasik />} />
            <Route path="klasik-yontem" element={<BootstrapKlasik />} />
            <Route path="modern-yontem" element={<BootstrapModern />} />
        </Route>
        <Route path="icons">
            <Route index element={<ReactIcons />} />
            <Route path="react-icons" element={<ReactIcons />} />
            <Route path="material-icons" element={<MaterialIcons />} />
        </Route>
        <Route path="events" element={<Events />} />
        <Route path="product-shop" element={<ProductShop />} />
        <Route path="state">
            <Route index element={<State />} />
            <Route path="counter1" element={<Counter1 />} />
            <Route path="birthday" element={<Birthday />} />
        </Route>
        <Route path="use-effect">
            <Route index element={<UseEffect />} />
            <Route path="filter-list" element={<FilterList />} />
        </Route>
        <Route path="use-ref" element={<UseRef />} />
        <Route path="component-turleri">
            <Route index element={<ClaTurunde />} />
            <Route path="class-turunde-componentler" element={<ClaTurunde />} />
            <Route path="fonksiyon-turunde-componentler" element={<FonksiyonTurunde />} />
        </Route>
        <Route path="fetch">
            <Route index element={<Fetch />} />
            <Route path="fetch" element={<Fetch />} />
            <Route path="fetch2" element={<Fetch2 />} />
            <Route path="countries" element={<Countries />} />
        </Route>
        <Route path="parent-component" element={<Parent />} />
        <Route path="form">
            <Route index element={<Form1 />} />
            <Route path="form1" element={<Form1 />} />
            <Route path="form2" element={<Form2 />} />
            <Route path="form3" element={<Form3 />} />
            <Route path="form4" element={<Form4 />} />
            <Route path="form5" element={<Form5 />} />
            <Route path="formik-yup1" element={<FormikYup1 />} />
            <Route path="formik-yup2" element={<FormikYup2 />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
    </Routes>
</Router>
  )
}

export default AppRouter