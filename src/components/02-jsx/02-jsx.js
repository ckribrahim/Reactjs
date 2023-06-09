import React from 'react'

function Jsx2() {

    const isAdmin = false;
    const loading = false;

  return (
    <>
    {
        isAdmin
        ? <>
        <h2>Admin Menu</h2>
        <ul>
            <li>Kullanici Olustur</li>
            <li>Kullaniciyi Guncelle</li>
            <li>Kullaniciyi Sil</li>
        </ul>
        </>
        :loading
        ? <h2>Loading...</h2>
        : <>
        <h2>User Menu</h2>
        </>

    }
    </>
  )
}

export default Jsx2;