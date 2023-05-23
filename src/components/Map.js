import React, { useEffect, useState } from 'react';
import useGeolocation from 'react-hook-geolocation';
import axios from 'axios';

import '../styles/components/Map.scss';

const Map = () => {
  let [map, setMap] = useState(); // 지도
  let toilets2 = [];

  const geolocation = useGeolocation();
  let latitude = geolocation.latitude; // 현재 위치의 위도
  let longitude = geolocation.longitude; // 현재 위치의 경도

  const { kakao } = window;

  useEffect(() => {
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.3322656, 127.2650979), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    setMap(new kakao.maps.Map(container, options));
    // const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 화장실 데이터 가져오기
    axios.get('http://127.0.0.1:8000/api/toilet/all/').then((result) => {
      let toilets = result.data;

      // 화장실 주소 -> x, y 좌표로 변환
      toilets.forEach((toilet) => {
        axios
          .get(
            `https://dapi.kakao.com/v2/local/search/address.json?query=${toilet.address}`,
            {
              headers: {
                Authorization: 'KakaoAK 00d79c323d355d5b4cab550d623380d3',
              },
            }
          )
          .then((response) => {
            console.log(response.data.documents); // documents 내부에 x, y 좌표 있음..
          });
      });
    });
  }, []);

  const setCenter = () => {
    // 이동할 위도 경도 위치를 생성합니다
    let moveLatLon = new kakao.maps.LatLng(latitude, longitude);

    // 지도 중심을 이동 시킵니다
    map.setCenter(moveLatLon);

    // 마커가 표시될 위치입니다
    let markerPosition = new kakao.maps.LatLng(latitude, longitude);

    // chrome에서는 latitude에 + 0.0043344, longitude에 + 0.003303 해줘야 함

    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  };

  if (geolocation.latitude !== null) {
    setCenter();
  }

  return <div id='map'></div>;
};

export default React.memo(Map);
