import React, { useEffect, useState } from 'react';
import useGeolocation from 'react-hook-geolocation';
import axios from 'axios';

import '../styles/components/Map.scss';

const Map = () => {
  let [map, setMap] = useState(); // 지도
  let [positions, setPositions] = useState([]);
  let [markers, setMarkers] = useState([]);

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
    const getToilets = async () => {
      let result = await axios.get('http://127.0.0.1:8000/api/toilet/all/');
      let toilets = result.data;

      // 화장실 주소 -> x, y 좌표로 변환
      toilets.forEach((toilet) => {
        const getPositions = async () => {
          let response = await axios.get(
            `https://dapi.kakao.com/v2/local/search/address.json?query=${toilet.address}`,
            {
              headers: {
                Authorization: 'KakaoAK 00d79c323d355d5b4cab550d623380d3',
              },
            }
          );

          if (response.data.documents.length <= 0) {
            return;
          }

          let position = {
            title: toilet.name,
            latlng: new kakao.maps.LatLng(
              response.data.documents[0].y,
              response.data.documents[0].x
            ),
          };

          // 마커 이미지의 이미지 주소입니다
          let imageSrc =
            'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

          // 마커 이미지의 이미지 크기 입니다
          let imageSize = new kakao.maps.Size(24, 35);

          // 마커 이미지를 생성합니다
          let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

          positions.push({
            position: position.latlng,
            title: position.title,
            image: markerImage,
          });
        };

        getPositions();
      });
    };

    getToilets();
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

    positions.forEach((position) => {
      let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: position.position, // 마커를 표시할 위치
        title: position.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: position.image, // 마커 이미지
      });
      markers.push(marker);

      let infowindow = new kakao.maps.InfoWindow({
        content: position.title, // 인포윈도우에 표시할 내용
      });

      kakao.maps.event.addListener(
        marker,
        'mouseover',
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        'mouseout',
        makeOutListener(infowindow)
      );
    });
  };

  // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
  function makeOverListener(map, marker, infowindow) {
    return function () {
      infowindow.open(map, marker);
    };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다
  function makeOutListener(infowindow) {
    return function () {
      infowindow.close();
    };
  }

  if (geolocation.latitude !== null) {
    setCenter();
  }

  // if(markers.length > 0) {
  //   markers.
  // }

  return <div id='map'></div>;
};

export default React.memo(Map);
