import React from 'react';
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';
import './Contacts.scss';


function Contacts(): JSX.Element {
  function handlechange=(event:any):void=>{
const docs = [...event.target.files]
const newFile = new FormData(); 
docs.forEach((doc)=>{
  newFile.append('saveDoc', doc)
})
dispatch =(AddFiles(newFile))
  }
  return (
    <div className="clinic_cont">
      <div className="map">
        <YMaps>
          <Map
            defaultState={{
              center: [59.965124, 30.31567],
              zoom: 17,
            }}
          >
            <Placemark geometry={[59.965124, 30.31567]} />
            <FullscreenControl options={{ float: 'left' }} />
            <ZoomControl options={{ float: 'left' }} />
          </Map>
        </YMaps>
      </div>
      <div className="contacts">
        <img className="clinic_photo" src="/IMG/tolstoy_2.jpg" alt="" />
        <div className="clinic_info">
          <h3>Контакты</h3>
          <p>Адрес ул. Льва Толстого, д. 9</p>
          <p>Телефон +7(906) 777-77-77</p>
          <p>E-mail info@klmclinic.ru</p>
          <p>Для СМИ pr@klmclinic.ru</p>
      <input type="file" onChange={handlechange} />
        </div>
      </div>

    </div>
  );
}

export default Contacts;
